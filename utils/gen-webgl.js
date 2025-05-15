const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const md5 = require("md5");
const fs = require("fs");

puppeteer.use(StealthPlugin());

function randomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateFakeWebGLProfile() {
    const vendors = [
        "Google Inc.",
        "NVIDIA Corporation",
        "Intel Inc.",
        "AMD",
        "Qualcomm",
        "Apple Inc.",
        "ARM",
    ];
    const renderers = [
        "ANGLE (Intel, Intel(R) Iris(TM) Graphics 6100 Direct3D11 vs_5_0 ps_5_0, D3D11)",
        "NVIDIA GeForce GTX 1080/PCIe/SSE2",
        "AMD Radeon RX 580",
        "Apple M1 GPU",
        "Qualcomm Adreno 640",
        "ARM Mali-G76",
    ];
    const webgl_extensions = [
        "ANGLE_instanced_arrays",
        "EXT_blend_minmax",
        "EXT_color_buffer_half_float",
        "EXT_disjoint_timer_query",
        "EXT_float_blend",
        "EXT_frag_depth",
        "EXT_shader_texture_lod",
        "EXT_texture_compression_bptc",
        "EXT_texture_compression_rgtc",
        "EXT_texture_filter_anisotropic",
        "EXT_texture_mirror_clamp_to_edge",
        "WEBGL_color_buffer_float",
        "WEBGL_compressed_texture_s3tc",
        "WEBGL_debug_renderer_info",
        "WEBGL_depth_texture",
        "WEBGL_draw_buffers",
        "WEBGL_lose_context",
        "WEBGL_multi_draw",
    ];

    const extCount = randomRange(5, 15);
    const extensionsSample = [];
    while (extensionsSample.length < extCount) {
        const ext = randomFromArray(webgl_extensions);
        if (!extensionsSample.includes(ext)) extensionsSample.push(ext);
    }
    const extensionsStr = extensionsSample.join(";");

    return {
        webgl_vendor: randomFromArray(vendors),
        webgl_renderer: randomFromArray(renderers),
        webgl_unmasked_vendor: randomFromArray(vendors) + " (Intel)",
        webgl_unmasked_renderer: randomFromArray(renderers),
        webgl_version: "WebGL 1.0 (OpenGL ES 2.0 Chromium)",
        webgl_shading_language_version:
            "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)",
        webgl_extensions: extensionsStr,
        webgl_antialiasing: Math.random() > 0.3,
        webgl_aliased_line_width_range: JSON.stringify([1, randomRange(1, 10)]),
        webgl_aliased_point_size_range: JSON.stringify([1, randomRange(64, 2048)]),
        webgl_max_viewport_dims: JSON.stringify([
            randomRange(10000, 32767),
            randomRange(10000, 32767),
        ]),
        webgl_bits: [
            randomRange(5, 8),
            randomRange(5, 8),
            randomRange(5, 8),
            randomRange(5, 8),
            randomRange(16, 24),
            0,
        ].join(","),
        webgl_max_params: Array(11)
            .fill(0)
            .map(() => randomRange(16, 32767))
            .join(","),
        webgl_vsf_params: Array(9)
            .fill(0)
            .map(() => randomRange(16, 127))
            .join(","),
        webgl_vsi_params: Array(9)
            .fill(0)
            .map(() => randomRange(0, 31))
            .join(","),
        webgl_fsf_params: Array(9)
            .fill(0)
            .map(() => randomRange(16, 127))
            .join(","),
        webgl_fsi_params: Array(9)
            .fill(0)
            .map(() => randomRange(0, 31))
            .join(","),
    };
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const profiles = [];

    for (let i = 0; i < 100; i++) {
        const fakeProfile = generateFakeWebGLProfile();
        const page = await browser.newPage();

        await page.evaluateOnNewDocument((profile) => {
            const originalGetParameter = WebGLRenderingContext.prototype.getParameter;
            const originalGetSupportedExtensions = WebGLRenderingContext.prototype.getSupportedExtensions;

            WebGLRenderingContext.prototype.getParameter = function (param) {
                const PARAMS = {
                    VENDOR: 0x1f00,
                    RENDERER: 0x1f01,
                    VERSION: 0x1f02,
                    SHADING_LANGUAGE_VERSION: 0x8b8c,
                    ALIASED_LINE_WIDTH_RANGE: 0x846e,
                    ALIASED_POINT_SIZE_RANGE: 0x846d,
                    MAX_VIEWPORT_DIMS: 0x0d3a,
                    RED_BITS: 0x0d52,
                    GREEN_BITS: 0x0d53,
                    BLUE_BITS: 0x0d54,
                    ALPHA_BITS: 0x0d55,
                    DEPTH_BITS: 0x0d56,
                    STENCIL_BITS: 0x0d57,
                    MAX_VERTEX_ATTRIBS: 0x8869,
                    MAX_VERTEX_UNIFORM_VECTORS: 0x8dfb,
                    MAX_TEXTURE_SIZE: 0x0d33,
                    MAX_TEXTURE_IMAGE_UNITS: 0x8872,
                    MAX_CUBE_MAP_TEXTURE_SIZE: 0x851c,
                    MAX_VARYING_VECTORS: 0x8dfc,
                    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 0x8b4c,
                    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 0x8b4d,
                    MAX_FRAGMENT_UNIFORM_VECTORS: 0x8dfd,
                    MAX_RENDERBUFFER_SIZE: 0x84e8,
                };

                switch (param) {
                    case PARAMS.VENDOR:
                        return profile.webgl_vendor;
                    case PARAMS.RENDERER:
                        return profile.webgl_renderer;
                    case PARAMS.VERSION:
                        return profile.webgl_version;
                    case PARAMS.SHADING_LANGUAGE_VERSION:
                        return profile.webgl_shading_language_version;
                    case PARAMS.ALIASED_LINE_WIDTH_RANGE:
                        return JSON.parse(profile.webgl_aliased_line_width_range);
                    case PARAMS.ALIASED_POINT_SIZE_RANGE:
                        return JSON.parse(profile.webgl_aliased_point_size_range);
                    case PARAMS.MAX_VIEWPORT_DIMS:
                        return JSON.parse(profile.webgl_max_viewport_dims);
                    case PARAMS.RED_BITS:
                        return parseInt(profile.webgl_bits.split(",")[0]);
                    case PARAMS.GREEN_BITS:
                        return parseInt(profile.webgl_bits.split(",")[1]);
                    case PARAMS.BLUE_BITS:
                        return parseInt(profile.webgl_bits.split(",")[2]);
                    case PARAMS.ALPHA_BITS:
                        return parseInt(profile.webgl_bits.split(",")[3]);
                    case PARAMS.DEPTH_BITS:
                        return parseInt(profile.webgl_bits.split(",")[4]);
                    case PARAMS.STENCIL_BITS:
                        return parseInt(profile.webgl_bits.split(",")[5]);
                    case PARAMS.MAX_VERTEX_ATTRIBS:
                        return parseInt(profile.webgl_max_params.split(",")[0]);
                    case PARAMS.MAX_VERTEX_UNIFORM_VECTORS:
                        return parseInt(profile.webgl_max_params.split(",")[1]);
                    case PARAMS.MAX_TEXTURE_SIZE:
                        return parseInt(profile.webgl_max_params.split(",")[2]);
                    case PARAMS.MAX_TEXTURE_IMAGE_UNITS:
                        return parseInt(profile.webgl_max_params.split(",")[3]);
                    case PARAMS.MAX_CUBE_MAP_TEXTURE_SIZE:
                        return parseInt(profile.webgl_max_params.split(",")[4]);
                    case PARAMS.MAX_VARYING_VECTORS:
                        return parseInt(profile.webgl_max_params.split(",")[5]);
                    case PARAMS.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
                        return parseInt(profile.webgl_max_params.split(",")[6]);
                    case PARAMS.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
                        return parseInt(profile.webgl_max_params.split(",")[7]);
                    case PARAMS.MAX_FRAGMENT_UNIFORM_VECTORS:
                        return parseInt(profile.webgl_max_params.split(",")[8]);
                    case PARAMS.MAX_RENDERBUFFER_SIZE:
                        return parseInt(profile.webgl_max_params.split(",")[9]);
                    default:
                        return originalGetParameter.call(this, param);
                }
            };

            WebGLRenderingContext.prototype.getSupportedExtensions = function () {
                return profile.webgl_extensions.split(";");
            };

            const originalGetExtension = WebGLRenderingContext.prototype.getExtension;
            WebGLRenderingContext.prototype.getExtension = function (name) {
                if (name === "WEBGL_debug_renderer_info") {
                    return {
                        UNMASKED_VENDOR_WEBGL: 0x9245,
                        UNMASKED_RENDERER_WEBGL: 0x9246,
                    };
                }
                return originalGetExtension.call(this, name);
            };

            const origGetParameter = WebGLRenderingContext.prototype.getParameter;
            WebGLRenderingContext.prototype.getParameter = function (param) {
                if (param === 0x9245) return profile.webgl_unmasked_vendor;
                if (param === 0x9246) return profile.webgl_unmasked_renderer;
                return origGetParameter.call(this, param);
            };
        }, fakeProfile);

        await page.goto("about:blank");

        const info = await page.evaluate(() => {
            const canvas = document.createElement("canvas");
            const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
            const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");

            const extensions = gl.getSupportedExtensions().join(";");
            const vendor = gl.getParameter(gl.VENDOR);
            const renderer = gl.getParameter(gl.RENDERER);

            return {
                webgl_unmasked_renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null,
                webgl: {
                    webgl_extensions: extensions,
                    webgl_renderer: renderer,
                    webgl_vendor: vendor,
                    webgl_version: gl.getParameter(gl.VERSION),
                    webgl_shading_language_version: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
                    webgl_aliased_line_width_range: JSON.stringify(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)),
                    webgl_aliased_point_size_range: JSON.stringify(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)),
                    webgl_antialiasing: gl.getContextAttributes().antialias,
                    webgl_bits: [
                        gl.getParameter(gl.RED_BITS),
                        gl.getParameter(gl.GREEN_BITS),
                        gl.getParameter(gl.BLUE_BITS),
                        gl.getParameter(gl.ALPHA_BITS),
                        gl.getParameter(gl.DEPTH_BITS),
                        gl.getParameter(gl.STENCIL_BITS),
                    ].join(","),
                    webgl_max_params: [
                        gl.getParameter(gl.MAX_VERTEX_ATTRIBS),
                        gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS),
                        gl.getParameter(gl.MAX_TEXTURE_SIZE),
                        gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS),
                        gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE),
                        gl.getParameter(gl.MAX_VARYING_VECTORS),
                        gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                        gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                        gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS),
                        gl.getParameter(gl.MAX_RENDERBUFFER_SIZE),
                    ].join(","),
                    webgl_max_viewport_dims: JSON.stringify(gl.getParameter(gl.MAX_VIEWPORT_DIMS)),
                    webgl_unmasked_vendor: debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : null,
                    webgl_unmasked_renderer: debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : null,
                    webgl_vsf_params: "23,127,127,23,127,127,23,127,127",
                    webgl_vsi_params: "0,31,30,0,31,30,0,31,30",
                    webgl_fsf_params: "23,127,127,23,127,127,23,127,127",
                    webgl_fsi_params: "0,31,30,0,31,30,0,31,30",
                    webgl_extensions_hash: extensions,
                    webgl_hash_webgl: vendor + renderer,
                },
            };
        });

        info.webgl.webgl_extensions_hash = md5(info.webgl.webgl_extensions);
        info.webgl.webgl_hash_webgl = md5(
            info.webgl.webgl_renderer +
            info.webgl.webgl_vendor +
            info.webgl.webgl_extensions
        );

        profiles.push(info);

        await page.close();
    }

    await browser.close();

    fs.writeFileSync("webgls.json", JSON.stringify(profiles, null, 2));
})();
