Ie = function (t) {
    "use strict";

    var e = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];
    function n(t, e) {
        var n = t[0];
        var r = t[1];
        var o = t[2];
        var i = t[3];
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & o) | (~r & i)) +
                                            e[0] -
                                            680876936) |
                                        0) <<
                                        7) |
                                        (n >>> 25)) +
                                        r) |
                                    0) &
                                    r) |
                                    (~n & o)) +
                                    e[1] -
                                    389564586) |
                                0) <<
                                12) |
                                (i >>> 20)) +
                                n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[2] +
                            606105819) |
                        0) <<
                        17) |
                        (o >>> 15)) +
                        i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[3] -
                    1044525330) |
                0) <<
                22) |
                (r >>> 10)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & o) | (~r & i)) +
                                            e[4] -
                                            176418897) |
                                        0) <<
                                        7) |
                                        (n >>> 25)) +
                                        r) |
                                    0) &
                                    r) |
                                    (~n & o)) +
                                    e[5] +
                                    1200080426) |
                                0) <<
                                12) |
                                (i >>> 20)) +
                                n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[6] -
                            1473231341) |
                        0) <<
                        17) |
                        (o >>> 15)) +
                        i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[7] -
                    45705983) |
                0) <<
                22) |
                (r >>> 10)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & o) | (~r & i)) +
                                            e[8] +
                                            1770035416) |
                                        0) <<
                                        7) |
                                        (n >>> 25)) +
                                        r) |
                                    0) &
                                    r) |
                                    (~n & o)) +
                                    e[9] -
                                    1958414417) |
                                0) <<
                                12) |
                                (i >>> 20)) +
                                n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[10] -
                            42063) |
                        0) <<
                        17) |
                        (o >>> 15)) +
                        i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[11] -
                    1990404162) |
                0) <<
                22) |
                (r >>> 10)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & o) | (~r & i)) +
                                            e[12] +
                                            1804603682) |
                                        0) <<
                                        7) |
                                        (n >>> 25)) +
                                        r) |
                                    0) &
                                    r) |
                                    (~n & o)) +
                                    e[13] -
                                    40341101) |
                                0) <<
                                12) |
                                (i >>> 20)) +
                                n) |
                            0) &
                            n) |
                            (~i & r)) +
                            e[14] -
                            1502002290) |
                        0) <<
                        17) |
                        (o >>> 15)) +
                        i) |
                    0) &
                    i) |
                    (~o & n)) +
                    e[15] +
                    1236535329) |
                0) <<
                22) |
                (r >>> 10)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & i) | (o & ~i)) +
                                            e[1] -
                                            165796510) |
                                        0) <<
                                        5) |
                                        (n >>> 27)) +
                                        r) |
                                    0) &
                                    o) |
                                    (r & ~o)) +
                                    e[6] -
                                    1069501632) |
                                0) <<
                                9) |
                                (i >>> 23)) +
                                n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[11] +
                            643717713) |
                        0) <<
                        14) |
                        (o >>> 18)) +
                        i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[0] -
                    373897302) |
                0) <<
                20) |
                (r >>> 12)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & i) | (o & ~i)) +
                                            e[5] -
                                            701558691) |
                                        0) <<
                                        5) |
                                        (n >>> 27)) +
                                        r) |
                                    0) &
                                    o) |
                                    (r & ~o)) +
                                    e[10] +
                                    38016083) |
                                0) <<
                                9) |
                                (i >>> 23)) +
                                n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[15] -
                            660478335) |
                        0) <<
                        14) |
                        (o >>> 18)) +
                        i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[4] -
                    405537848) |
                0) <<
                20) |
                (r >>> 12)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & i) | (o & ~i)) +
                                            e[9] +
                                            568446438) |
                                        0) <<
                                        5) |
                                        (n >>> 27)) +
                                        r) |
                                    0) &
                                    o) |
                                    (r & ~o)) +
                                    e[14] -
                                    1019803690) |
                                0) <<
                                9) |
                                (i >>> 23)) +
                                n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[3] -
                            187363961) |
                        0) <<
                        14) |
                        (o >>> 18)) +
                        i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[8] +
                    1163531501) |
                0) <<
                20) |
                (r >>> 12)) +
                o) |
            0;
        r =
            ((((r +=
                ((((o =
                    ((((o +=
                        ((((i =
                            ((((i +=
                                ((((n =
                                    ((((n +=
                                        (((r & i) | (o & ~i)) +
                                            e[13] -
                                            1444681467) |
                                        0) <<
                                        5) |
                                        (n >>> 27)) +
                                        r) |
                                    0) &
                                    o) |
                                    (r & ~o)) +
                                    e[2] -
                                    51403784) |
                                0) <<
                                9) |
                                (i >>> 23)) +
                                n) |
                            0) &
                            r) |
                            (n & ~r)) +
                            e[7] +
                            1735328473) |
                        0) <<
                        14) |
                        (o >>> 18)) +
                        i) |
                    0) &
                    n) |
                    (i & ~n)) +
                    e[12] -
                    1926607734) |
                0) <<
                20) |
                (r >>> 12)) +
                o) |
            0;
        r =
            ((((r +=
                (((o =
                    ((((o +=
                        (((i =
                            ((((i +=
                                (((n =
                                    ((((n +=
                                        ((r ^ o ^ i) + e[5] - 378558) | 0) <<
                                        4) |
                                        (n >>> 28)) +
                                        r) |
                                    0) ^
                                    r ^
                                    o) +
                                    e[8] -
                                    2022574463) |
                                0) <<
                                11) |
                                (i >>> 21)) +
                                n) |
                            0) ^
                            n ^
                            r) +
                            e[11] +
                            1839030562) |
                        0) <<
                        16) |
                        (o >>> 16)) +
                        i) |
                    0) ^
                    i ^
                    n) +
                    e[14] -
                    35309556) |
                0) <<
                23) |
                (r >>> 9)) +
                o) |
            0;
        r =
            ((((r +=
                (((o =
                    ((((o +=
                        (((i =
                            ((((i +=
                                (((n =
                                    ((((n +=
                                        ((r ^ o ^ i) + e[1] - 1530992060) |
                                        0) <<
                                        4) |
                                        (n >>> 28)) +
                                        r) |
                                    0) ^
                                    r ^
                                    o) +
                                    e[4] +
                                    1272893353) |
                                0) <<
                                11) |
                                (i >>> 21)) +
                                n) |
                            0) ^
                            n ^
                            r) +
                            e[7] -
                            155497632) |
                        0) <<
                        16) |
                        (o >>> 16)) +
                        i) |
                    0) ^
                    i ^
                    n) +
                    e[10] -
                    1094730640) |
                0) <<
                23) |
                (r >>> 9)) +
                o) |
            0;
        r =
            ((((r +=
                (((o =
                    ((((o +=
                        (((i =
                            ((((i +=
                                (((n =
                                    ((((n +=
                                        ((r ^ o ^ i) + e[13] + 681279174) |
                                        0) <<
                                        4) |
                                        (n >>> 28)) +
                                        r) |
                                    0) ^
                                    r ^
                                    o) +
                                    e[0] -
                                    358537222) |
                                0) <<
                                11) |
                                (i >>> 21)) +
                                n) |
                            0) ^
                            n ^
                            r) +
                            e[3] -
                            722521979) |
                        0) <<
                        16) |
                        (o >>> 16)) +
                        i) |
                    0) ^
                    i ^
                    n) +
                    e[6] +
                    76029189) |
                0) <<
                23) |
                (r >>> 9)) +
                o) |
            0;
        r =
            ((((r +=
                (((o =
                    ((((o +=
                        (((i =
                            ((((i +=
                                (((n =
                                    ((((n +=
                                        ((r ^ o ^ i) + e[9] - 640364487) | 0) <<
                                        4) |
                                        (n >>> 28)) +
                                        r) |
                                    0) ^
                                    r ^
                                    o) +
                                    e[12] -
                                    421815835) |
                                0) <<
                                11) |
                                (i >>> 21)) +
                                n) |
                            0) ^
                            n ^
                            r) +
                            e[15] +
                            530742520) |
                        0) <<
                        16) |
                        (o >>> 16)) +
                        i) |
                    0) ^
                    i ^
                    n) +
                    e[2] -
                    995338651) |
                0) <<
                23) |
                (r >>> 9)) +
                o) |
            0;
        r =
            ((((r +=
                (((i =
                    ((((i +=
                        ((r ^
                            ((n =
                                ((((n +=
                                    ((o ^ (r | ~i)) + e[0] - 198630844) | 0) <<
                                    6) |
                                    (n >>> 26)) +
                                    r) |
                                0) |
                                ~o)) +
                            e[7] +
                            1126891415) |
                        0) <<
                        10) |
                        (i >>> 22)) +
                        n) |
                    0) ^
                    ((o =
                        ((((o += ((n ^ (i | ~r)) + e[14] - 1416354905) | 0) <<
                            15) |
                            (o >>> 17)) +
                            i) |
                        0) |
                        ~n)) +
                    e[5] -
                    57434055) |
                0) <<
                21) |
                (r >>> 11)) +
                o) |
            0;
        r =
            ((((r +=
                (((i =
                    ((((i +=
                        ((r ^
                            ((n =
                                ((((n +=
                                    ((o ^ (r | ~i)) + e[12] + 1700485571) |
                                    0) <<
                                    6) |
                                    (n >>> 26)) +
                                    r) |
                                0) |
                                ~o)) +
                            e[3] -
                            1894986606) |
                        0) <<
                        10) |
                        (i >>> 22)) +
                        n) |
                    0) ^
                    ((o =
                        ((((o += ((n ^ (i | ~r)) + e[10] - 1051523) | 0) <<
                            15) |
                            (o >>> 17)) +
                            i) |
                        0) |
                        ~n)) +
                    e[1] -
                    2054922799) |
                0) <<
                21) |
                (r >>> 11)) +
                o) |
            0;
        r =
            ((((r +=
                (((i =
                    ((((i +=
                        ((r ^
                            ((n =
                                ((((n +=
                                    ((o ^ (r | ~i)) + e[8] + 1873313359) | 0) <<
                                    6) |
                                    (n >>> 26)) +
                                    r) |
                                0) |
                                ~o)) +
                            e[15] -
                            30611744) |
                        0) <<
                        10) |
                        (i >>> 22)) +
                        n) |
                    0) ^
                    ((o =
                        ((((o += ((n ^ (i | ~r)) + e[6] - 1560198380) | 0) <<
                            15) |
                            (o >>> 17)) +
                            i) |
                        0) |
                        ~n)) +
                    e[13] +
                    1309151649) |
                0) <<
                21) |
                (r >>> 11)) +
                o) |
            0;
        r =
            ((((r +=
                (((i =
                    ((((i +=
                        ((r ^
                            ((n =
                                ((((n +=
                                    ((o ^ (r | ~i)) + e[4] - 145523070) | 0) <<
                                    6) |
                                    (n >>> 26)) +
                                    r) |
                                0) |
                                ~o)) +
                            e[11] -
                            1120210379) |
                        0) <<
                        10) |
                        (i >>> 22)) +
                        n) |
                    0) ^
                    ((o =
                        ((((o += ((n ^ (i | ~r)) + e[2] + 718787259) | 0) <<
                            15) |
                            (o >>> 17)) +
                            i) |
                        0) |
                        ~n)) +
                    e[9] -
                    343485551) |
                0) <<
                21) |
                (r >>> 11)) +
                o) |
            0;
        t[0] = (n + t[0]) | 0;
        t[1] = (r + t[1]) | 0;
        t[2] = (o + t[2]) | 0;
        t[3] = (i + t[3]) | 0;
    }
    function r(t) {
        var e;
        var n = [];
        for (e = 0; e < 64; e += 4) {
            n[e >> 2] =
                t.charCodeAt(e) +
                (t.charCodeAt(e + 1) << 8) +
                (t.charCodeAt(e + 2) << 16) +
                (t.charCodeAt(e + 3) << 24);
        }
        return n;
    }
    function o(t) {
        var e;
        var n = [];
        for (e = 0; e < 64; e += 4) {
            n[e >> 2] =
                t[e] + (t[e + 1] << 8) + (t[e + 2] << 16) + (t[e + 3] << 24);
        }
        return n;
    }
    function i(t) {
        var e;
        var o;
        var i;
        var a;
        var u;
        var c;
        var s = t.length;
        var f = [1732584193, -271733879, -1732584194, 271733878];
        for (e = 64; e <= s; e += 64) {
            n(f, r(t.substring(e - 64, e)));
        }
        o = (t = t.substring(e - 64)).length;
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        e = 0;
        for (; e < o; e += 1) {
            i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
        }
        i[e >> 2] |= 128 << (e % 4 << 3);
        if (e > 55) {
            n(f, i);
            e = 0;
            for (; e < 16; e += 1) {
                i[e] = 0;
            }
        }
        a = (a = s * 8).toString(16).match(/(.*?)(.{0,8})$/);
        u = parseInt(a[2], 16);
        c = parseInt(a[1], 16) || 0;
        i[14] = u;
        i[15] = c;
        n(f, i);
        return f;
    }
    function a(t) {
        var e;
        var r;
        var i;
        var a;
        var u;
        var c;
        var s = t.length;
        var f = [1732584193, -271733879, -1732584194, 271733878];
        for (e = 64; e <= s; e += 64) {
            n(f, o(t.subarray(e - 64, e)));
        }
        r = (t = e - 64 < s ? t.subarray(e - 64) : new Uint8Array(0)).length;
        i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        e = 0;
        for (; e < r; e += 1) {
            i[e >> 2] |= t[e] << (e % 4 << 3);
        }
        i[e >> 2] |= 128 << (e % 4 << 3);
        if (e > 55) {
            n(f, i);
            e = 0;
            for (; e < 16; e += 1) {
                i[e] = 0;
            }
        }
        a = (a = s * 8).toString(16).match(/(.*?)(.{0,8})$/);
        u = parseInt(a[2], 16);
        c = parseInt(a[1], 16) || 0;
        i[14] = u;
        i[15] = c;
        n(f, i);
        return f;
    }
    function u(t) {
        var n;
        var r = "";
        for (n = 0; n < 4; n += 1) {
            r += e[(t >> (n * 8 + 4)) & 15] + e[(t >> (n * 8)) & 15];
        }
        return r;
    }
    function c(t) {
        var e;
        for (e = 0; e < t.length; e += 1) {
            t[e] = u(t[e]);
        }
        return t.join("");
    }
    function s(t) {
        if (/[\u0080-\uFFFF]/.test(t)) {
            t = unescape(encodeURIComponent(t));
        }
        return t;
    }
    function f(t, e) {
        var n;
        var r = t.length;
        var o = new ArrayBuffer(r);
        var i = new Uint8Array(o);
        for (n = 0; n < r; n += 1) {
            i[n] = t.charCodeAt(n);
        }
        if (e) {
            return i;
        } else {
            return o;
        }
    }
    function l(t) {
        return String.fromCharCode.apply(null, new Uint8Array(t));
    }
    function p(t, e, n) {
        var r = new Uint8Array(t.byteLength + e.byteLength);
        r.set(new Uint8Array(t));
        r.set(new Uint8Array(e), t.byteLength);
        if (n) {
            return r;
        } else {
            return r.buffer;
        }
    }
    function v(t) {
        var e;
        var n = [];
        var r = t.length;
        for (e = 0; e < r - 1; e += 2) {
            n.push(parseInt(t.substr(e, 2), 16));
        }
        return String.fromCharCode.apply(String, n);
    }
    function d() {
        this.reset();
    }
    c(i("hello"));
    if (typeof ArrayBuffer != "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
            function e(t, e) {
                if ((t = t | 0 || 0) < 0) {
                    return Math.max(t + e, 0);
                } else {
                    return Math.min(t, e);
                }
            }
            ArrayBuffer.prototype.slice = function (n, r) {
                var o;
                var i;
                var a;
                var u;
                var c = this.byteLength;
                var s = e(n, c);
                var f = c;
                if (r !== t) {
                    f = e(r, c);
                }
                if (s > f) {
                    return new ArrayBuffer(0);
                } else {
                    o = f - s;
                    i = new ArrayBuffer(o);
                    a = new Uint8Array(i);
                    u = new Uint8Array(this, s, o);
                    a.set(u);
                    return i;
                }
            };
        })();
    }
    d.prototype.append = function (t) {
        this.appendBinary(s(t));
        return this;
    };
    d.prototype.appendBinary = function (t) {
        this._buff += t;
        this._length += t.length;
        var e;
        var o = this._buff.length;
        for (e = 64; e <= o; e += 64) {
            n(this._hash, r(this._buff.substring(e - 64, e)));
        }
        this._buff = this._buff.substring(e - 64);
        return this;
    };
    d.prototype.end = function (t) {
        var e;
        var n;
        var r = this._buff;
        var o = r.length;
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (e = 0; e < o; e += 1) {
            i[e >> 2] |= r.charCodeAt(e) << (e % 4 << 3);
        }
        this._finish(i, o);
        n = c(this._hash);
        if (t) {
            n = v(n);
        }
        this.reset();
        return n;
    };
    d.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
    };
    d.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash.slice(),
        };
    };
    d.prototype.setState = function (t) {
        this._buff = t.buff;
        this._length = t.length;
        this._hash = t.hash;
        return this;
    };
    d.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };
    d.prototype._finish = function (t, e) {
        var r;
        var o;
        var i;
        var a = e;
        t[a >> 2] |= 128 << (a % 4 << 3);
        if (a > 55) {
            n(this._hash, t);
            a = 0;
            for (; a < 16; a += 1) {
                t[a] = 0;
            }
        }
        r = (r = this._length * 8).toString(16).match(/(.*?)(.{0,8})$/);
        o = parseInt(r[2], 16);
        i = parseInt(r[1], 16) || 0;
        t[14] = o;
        t[15] = i;
        n(this._hash, t);
    };
    d.hash = function (t, e) {
        return d.hashBinary(s(t), e);
    };
    d.hashBinary = function (t, e) {
        var n = c(i(t));
        if (e) {
            return v(n);
        } else {
            return n;
        }
    };
    d.ArrayBuffer = function () {
        this.reset();
    };
    d.ArrayBuffer.prototype.append = function (t) {
        var e;
        var r = p(this._buff.buffer, t, true);
        var i = r.length;
        this._length += t.byteLength;
        e = 64;
        for (; e <= i; e += 64) {
            n(this._hash, o(r.subarray(e - 64, e)));
        }
        this._buff =
            e - 64 < i
                ? new Uint8Array(r.buffer.slice(e - 64))
                : new Uint8Array(0);
        return this;
    };
    d.ArrayBuffer.prototype.end = function (t) {
        var e;
        var n;
        var r = this._buff;
        var o = r.length;
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (e = 0; e < o; e += 1) {
            i[e >> 2] |= r[e] << (e % 4 << 3);
        }
        this._finish(i, o);
        n = c(this._hash);
        if (t) {
            n = v(n);
        }
        this.reset();
        return n;
    };
    d.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
    };
    d.ArrayBuffer.prototype.getState = function () {
        var t = d.prototype.getState.call(this);
        t.buff = l(t.buff);
        return t;
    };
    d.ArrayBuffer.prototype.setState = function (t) {
        t.buff = f(t.buff, true);
        return d.prototype.setState.call(this, t);
    };
    d.ArrayBuffer.prototype.destroy = d.prototype.destroy;
    d.ArrayBuffer.prototype._finish = d.prototype._finish;
    d.ArrayBuffer.hash = function (t, e) {
        var n = c(a(new Uint8Array(t)));
        if (e) {
            return v(n);
        } else {
            return n;
        }
    };

    return d;
};

var Te = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 10, 11, 12,
    13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 10, 11, 12, 13, 14, 15, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
];

function en(t, e) {
    let c = t + (function (t) {
        let result = "";

        for (let i = 0; i < t.length; i += 2) {
            let e = t.charCodeAt(i);
            let n = t.charCodeAt(i + 1);

            result += String.fromCharCode((Te[e] << 4) + Te[n]);
        }
        
        return result;
    })(e);

    let s = [];
    s[0] = Ie().hashBinary(c, true);
    let f = s[0];

    for (var l = 1; l < 3; l++) {
        s[l] = Ie().hashBinary(s[l - 1] + c, true);

        f += s[l];
    }

    return (function (t) {
        let i = new Uint8Array(t.length);
        for (let a = 0; a < t.length; ++a) {
            i[a] = t.charCodeAt(a);
        }

        return i;
    })(f.substring(0, 32));
}

function h(t, tt) {
    tt = tt || 0;
    var et = (t = t || "").length % 16;
    for (
        var nt = t.length - et,
            rt = [0, tt],
            ot = [0, tt],
            it = [0, 0],
            at = [0, 0],
            ut = [2277735313, 289559509],
            ct = [1291169091, 658871167],
            st = 0;
        st < nt;
        st += 16
    ) {
        it = [
            (t.charCodeAt(st + 4) & 255) |
                ((t.charCodeAt(st + 5) & 255) << 8) |
                ((t.charCodeAt(st + 6) & 255) << 16) |
                ((t.charCodeAt(st + 7) & 255) << 24),
            (t.charCodeAt(st) & 255) |
                ((t.charCodeAt(st + 1) & 255) << 8) |
                ((t.charCodeAt(st + 2) & 255) << 16) |
                ((t.charCodeAt(st + 3) & 255) << 24),
        ];
        at = [
            (t.charCodeAt(st + 12) & 255) |
                ((t.charCodeAt(st + 13) & 255) << 8) |
                ((t.charCodeAt(st + 14) & 255) << 16) |
                ((t.charCodeAt(st + 15) & 255) << 24),
            (t.charCodeAt(st + 8) & 255) |
                ((t.charCodeAt(st + 9) & 255) << 8) |
                ((t.charCodeAt(st + 10) & 255) << 16) |
                ((t.charCodeAt(st + 11) & 255) << 24),
        ];
        it = l((it = f(it, ut)), 31);
        rt = l((rt = v(rt, (it = f(it, ct)))), 27);
        rt = s(rt, ot);
        rt = s(f(rt, [0, 5]), [0, 1390208809]);
        at = l((at = f(at, ct)), 33);
        ot = l((ot = v(ot, (at = f(at, ut)))), 31);
        ot = s(ot, rt);
        ot = s(f(ot, [0, 5]), [0, 944331445]);
    }
    it = [0, 0];
    at = [0, 0];
    switch (et) {
        case 15:
            at = v(at, p([0, t.charCodeAt(st + 14)], 48));
        case 14:
            at = v(at, p([0, t.charCodeAt(st + 13)], 40));
        case 13:
            at = v(at, p([0, t.charCodeAt(st + 12)], 32));
        case 12:
            at = v(at, p([0, t.charCodeAt(st + 11)], 24));
        case 11:
            at = v(at, p([0, t.charCodeAt(st + 10)], 16));
        case 10:
            at = v(at, p([0, t.charCodeAt(st + 9)], 8));
        case 9:
            at = v(at, [0, t.charCodeAt(st + 8)]);
            at = l((at = f(at, ct)), 33);
            ot = v(ot, (at = f(at, ut)));
        case 8:
            it = v(it, p([0, t.charCodeAt(st + 7)], 56));
        case 7:
            it = v(it, p([0, t.charCodeAt(st + 6)], 48));
        case 6:
            it = v(it, p([0, t.charCodeAt(st + 5)], 40));
        case 5:
            it = v(it, p([0, t.charCodeAt(st + 4)], 32));
        case 4:
            it = v(it, p([0, t.charCodeAt(st + 3)], 24));
        case 3:
            it = v(it, p([0, t.charCodeAt(st + 2)], 16));
        case 2:
            it = v(it, p([0, t.charCodeAt(st + 1)], 8));
        case 1:
            it = v(it, [0, t.charCodeAt(st)]);
            it = l((it = f(it, ut)), 31);
            rt = v(rt, (it = f(it, ct)));
    }
    rt = v(rt, [0, t.length]);
    ot = v(ot, [0, t.length]);
    rt = s(rt, ot);
    ot = s(ot, rt);
    rt = d(rt);
    ot = d(ot);
    rt = s(rt, ot);
    ot = s(ot, rt);
    
    return (
        ("00000000")
            .concat((rt[0] >>> 0).toString(16))
            .slice(-8) +
        ("00000000")
            .concat((rt[1] >>> 0).toString(16))
            .slice(-8) +
        ("00000000")
            .concat((ot[0] >>> 0).toString(16))
            .slice(-8) +
        ("00000000")
            .concat((ot[1] >>> 0).toString(16))
            .slice(-8)
    );
}

function f(t, e) {
    t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
    e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
    var n = [0, 0, 0, 0];
    n[3] += t[3] * e[3];
    n[2] += n[3] >>> 16;
    n[3] &= 65535;
    n[2] += t[2] * e[3];
    n[1] += n[2] >>> 16;
    n[2] &= 65535;
    n[2] += t[3] * e[2];
    n[1] += n[2] >>> 16;
    n[2] &= 65535;
    n[1] += t[1] * e[3];
    n[0] += n[1] >>> 16;
    n[1] &= 65535;
    n[1] += t[2] * e[2];
    n[0] += n[1] >>> 16;
    n[1] &= 65535;
    n[1] += t[3] * e[1];
    n[0] += n[1] >>> 16;
    n[1] &= 65535;
    n[0] += t[0] * e[3] + t[1] * e[2] + t[2] * e[1] + t[3] * e[0];
    n[0] &= 65535;
    return [(n[0] << 16) | n[1], (n[2] << 16) | n[3]];
}

function p(t, e) {
    if ((e %= 64) === 0) {
        return t;
    } else if (e < 32) {
        return [(t[0] << e) | (t[1] >>> (32 - e)), t[1] << e];
    } else {
        return [t[1] << (e - 32), 0];
    }
}

function l(t, e) {
    if ((e %= 64) === 32) {
        return [t[1], t[0]];
    } else if (e < 32) {
        return [
            (t[0] << e) | (t[1] >>> (32 - e)),
            (t[1] << e) | (t[0] >>> (32 - e)),
        ];
    } else {
        e -= 32;
        return [
            (t[1] << e) | (t[0] >>> (32 - e)),
            (t[0] << e) | (t[1] >>> (32 - e)),
        ];
    }
}

function v(t, e) {
    return [t[0] ^ e[0], t[1] ^ e[1]];
}

function s(t, e) {
    t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
    e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535];
    var n = [0, 0, 0, 0];
    n[3] += t[3] + e[3];
    n[2] += n[3] >>> 16;
    n[3] &= 65535;
    n[2] += t[2] + e[2];
    n[1] += n[2] >>> 16;
    n[2] &= 65535;
    n[1] += t[1] + e[1];
    n[0] += n[1] >>> 16;
    n[1] &= 65535;
    n[0] += t[0] + e[0];
    n[0] &= 65535;
    return [(n[0] << 16) | n[1], (n[2] << 16) | n[3]];
}

function d(t) {
    t = v(t, [0, t[0] >>> 1]);
    t = v((t = f(t, [4283543511, 3981806797])), [0, t[0] >>> 1]);
    return (t = v((t = f(t, [3301882366, 444984403])), [
        0,
        t[0] >>> 1,
    ]));
}

function g(t) {
    if (!t) {
        return "";
    }
    if (Array.prototype.reduce) {
        return t.split("").reduce(function (t, e) {
            return (t = (t << 5) - t + e.charCodeAt(0)) & t;
        }, 0);
    }
    var v = 0;
    if (t.length === 0) {
        return v;
    }
    for (var d = 0; d < t.length; d++) {
        v = (v << 5) - v + t.charCodeAt(d);
        v &= v;
    }
    return v;
}

const { createCanvas } = require("canvas");

function Tn() {
    var Nt = createCanvas();
    if (!Nt.getContext) {
        return false;
    }
    try {
        var Lt = [];
        Nt.width = 2000;
        Nt.height = 200;
        var Ft = Nt.getContext("2d");
        return (
            !!Ft &&
            (Ft.rect(0, 0, 10, 10),
            Ft.rect(2, 2, 6, 6),
            Lt.push(
                "canvas winding:".concat(
                    Ft.isPointInPath(5, 5, "evenodd") === false
                        ? "yes"
                        : "no"
                )
            ),
            (Ft.textBaseline = "alphabetic"),
            (Ft.fillStyle = "#f60"),
            Ft.fillRect(125, 1, 62, 20),
            (Ft.fillStyle = "#069"),
            (Ft.font = "11pt no-real-font-123"),
            Ft.fillText(
                "Cwm fjordbank glyphs vext quiz, 😃",
                2,
                15
            ),
            (Ft.fillStyle = "rgba(102, 204, 0, 0.2)"),
            (Ft.font = "18pt Arial"),
            Ft.fillText(
                "Cwm fjordbank glyphs vext quiz, 😃",
                4,
                45
            ),
            (Ft.globalCompositeOperation = "multiply"),
            (Ft.fillStyle = "rgb(255,0,255)"),
            Ft.beginPath(),
            Ft.arc(50, 50, 50, 0, Math.PI * 2, true),
            Ft.closePath(),
            Ft.fill(),
            (Ft.fillStyle = "rgb(0,255,255)"),
            Ft.beginPath(),
            Ft.arc(100, 50, 50, 0, Math.PI * 2, true),
            Ft.closePath(),
            Ft.fill(),
            (Ft.fillStyle = "rgb(255,255,0)"),
            Ft.beginPath(),
            Ft.arc(75, 100, 50, 0, Math.PI * 2, true),
            Ft.closePath(),
            Ft.fill(),
            (Ft.fillStyle = "rgb(255,0,255)"),
            Ft.arc(75, 75, 75, 0, Math.PI * 2, true),
            Ft.arc(75, 75, 25, 0, Math.PI * 2, true),
            Ft.fill("evenodd"),
            Lt.push("canvas fp:".concat(Nt.toDataURL())), g(Lt.join("~")))
        );
    } catch (t) {
        console.log(t)
        return false;
    }
}

/*
H, F, P, L, V, S, D, G
*/