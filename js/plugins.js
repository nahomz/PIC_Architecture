;
window.Modernizr = function(a, b, c) {
        function x(a) {
            j.cssText = a
        }

        function y(a, b) {
            return x(prefixes.join(a + ";") + (b || ""))
        }

        function z(a, b) {
            return typeof a === b
        }

        function A(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function B(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!A(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function C(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : z(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function D(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                e = (a + " " + n.join(d + " ") + d).split(" ");
            return z(b, "string") || z(b, "undefined") ? B(e, b) : (e = (a + " " + o.join(d + " ") + d).split(" "), C(e, b, c))
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = "Webkit Moz O ms",
            n = m.split(" "),
            o = m.toLowerCase().split(" "),
            p = {},
            q = {},
            r = {},
            s = [],
            t = s.slice,
            u, v = {}.hasOwnProperty,
            w;
        !z(v, "undefined") && !z(v.call, "undefined") ? w = function(a, b) {
            return v.call(a, b)
        } : w = function(a, b) {
            return b in a && z(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = t.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(t.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(t.call(arguments)))
                };
            return e
        }), p.csstransitions = function() {
            return D("transition")
        };
        for (var E in p) w(p, E) && (u = E.toLowerCase(), e[u] = p[E](), s.push((e[u] ? "" : "no-") + u));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) w(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, x(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._domPrefixes = o, e._cssomPrefixes = n, e.testProp = function(a) {
                return B([a])
            }, e.testAllProps = D, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + s.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
/*!
 * easing 
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
/*!
 * Isotope 
 */
! function(a) {
    function b() {}

    function c(a) {
        function c(b) {
            b.prototype.option || (b.prototype.option = function(b) {
                a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
            })
        }

        function e(b, c) {
            a.fn[b] = function(e) {
                if ("string" == typeof e) {
                    for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
                        var j = this[h],
                            k = a.data(j, b);
                        if (k)
                            if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                                var l = k[e].apply(k, g);
                                if (void 0 !== l) return l
                            } else f("no such method '" + e + "' for " + b + " instance");
                        else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var d = a.data(this, b);
                    d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
                })
            }
        }
        if (a) {
            var f = "undefined" == typeof console ? b : function(a) {
                console.error(a)
            };
            return a.bridget = function(a, b) {
                c(b), e(a, b)
            }, a.bridget
        }
    }
    var d = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function(a) {
    function b(b) {
        var c = a.event;
        return c.target = c.target || c.srcElement || b, c
    }
    var c = document.documentElement,
        d = function() {};
    c.addEventListener ? d = function(a, b, c) {
        a.addEventListener(b, c, !1)
    } : c.attachEvent && (d = function(a, c, d) {
        a[c + d] = d.handleEvent ? function() {
            var c = b(a);
            d.handleEvent.call(d, c)
        } : function() {
            var c = b(a);
            d.call(a, c)
        }, a.attachEvent("on" + c, a[c + d])
    });
    var e = function() {};
    c.removeEventListener ? e = function(a, b, c) {
        a.removeEventListener(b, c, !1)
    } : c.detachEvent && (e = function(a, b, c) {
        a.detachEvent("on" + b, a[b + c]);
        try {
            delete a[b + c]
        } catch (d) {
            a[b + c] = void 0
        }
    });
    var f = {
        bind: d,
        unbind: e
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function() {
    "use strict";

    function a() {}

    function b(a, b) {
        for (var c = a.length; c--;)
            if (a[c].listener === b) return c;
        return -1
    }

    function c(a) {
        return function() {
            return this[a].apply(this, arguments)
        }
    }
    var d = a.prototype,
        e = this,
        f = e.EventEmitter;
    d.getListeners = function(a) {
        var b, c, d = this._getEvents();
        if (a instanceof RegExp) {
            b = {};
            for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
        } else b = d[a] || (d[a] = []);
        return b
    }, d.flattenListeners = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c
    }, d.getListenersAsObject = function(a) {
        var b, c = this.getListeners(a);
        return c instanceof Array && (b = {}, b[a] = c), b || c
    }, d.addListener = function(a, c) {
        var d, e = this.getListenersAsObject(a),
            f = "object" == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
            listener: c,
            once: !1
        });
        return this
    }, d.on = c("addListener"), d.addOnceListener = function(a, b) {
        return this.addListener(a, {
            listener: b,
            once: !0
        })
    }, d.once = c("addOnceListener"), d.defineEvent = function(a) {
        return this.getListeners(a), this
    }, d.defineEvents = function(a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this
    }, d.removeListener = function(a, c) {
        var d, e, f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
        return this
    }, d.off = c("removeListener"), d.addListeners = function(a, b) {
        return this.manipulateListeners(!1, a, b)
    }, d.removeListeners = function(a, b) {
        return this.manipulateListeners(!0, a, b)
    }, d.manipulateListeners = function(a, b, c) {
        var d, e, f = a ? this.removeListener : this.addListener,
            g = a ? this.removeListeners : this.addListeners;
        if ("object" != typeof b || b instanceof RegExp)
            for (d = c.length; d--;) f.call(this, b, c[d]);
        else
            for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this
    }, d.removeEvent = function(a) {
        var b, c = typeof a,
            d = this._getEvents();
        if ("string" === c) delete d[a];
        else if (a instanceof RegExp)
            for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this
    }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function(a, b) {
        var c, d, e, f, g = this.getListenersAsObject(a);
        for (e in g)
            if (g.hasOwnProperty(e))
                for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this
    }, d.trigger = c("emitEvent"), d.emit = function(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b)
    }, d.setOnceReturnValue = function(a) {
        return this._onceReturnValue = a, this
    }, d._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, d._getEvents = function() {
        return this._events || (this._events = {})
    }, a.noConflict = function() {
        return e.EventEmitter = f, a
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return a
    }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
    function(a) {
        function b(a) {
            if (a) {
                if ("string" == typeof d[a]) return a;
                a = a.charAt(0).toUpperCase() + a.slice(1);
                for (var b, e = 0, f = c.length; f > e; e++)
                    if (b = c[e] + a, "string" == typeof d[b]) return b
            }
        }
        var c = "Webkit Moz ms Ms O".split(" "),
            d = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return b
        }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
    }(window),
    function(a, b) {
        function c(a) {
            var b = parseFloat(a),
                c = -1 === a.indexOf("%") && !isNaN(b);
            return c && b
        }

        function d() {}

        function e() {
            for (var a = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, b = 0, c = h.length; c > b; b++) {
                var d = h[b];
                a[d] = 0
            }
            return a
        }

        function f(b) {
            function d() {
                if (!m) {
                    m = !0;
                    var d = a.getComputedStyle;
                    if (j = function() {
                            var a = d ? function(a) {
                                return d(a, null)
                            } : function(a) {
                                return a.currentStyle
                            };
                            return function(b) {
                                var c = a(b);
                                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
                            }
                        }(), k = b("boxSizing")) {
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
                        var f = document.body || document.documentElement;
                        f.appendChild(e);
                        var h = j(e);
                        l = 200 === c(h.width), f.removeChild(e)
                    }
                }
            }

            function f(a) {
                if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
                    var b = j(a);
                    if ("none" === b.display) return e();
                    var f = {};
                    f.width = a.offsetWidth, f.height = a.offsetHeight;
                    for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
                        var o = h[m],
                            p = b[o];
                        p = i(a, p);
                        var q = parseFloat(p);
                        f[o] = isNaN(q) ? 0 : q
                    }
                    var r = f.paddingLeft + f.paddingRight,
                        s = f.paddingTop + f.paddingBottom,
                        t = f.marginLeft + f.marginRight,
                        u = f.marginTop + f.marginBottom,
                        v = f.borderLeftWidth + f.borderRightWidth,
                        w = f.borderTopWidth + f.borderBottomWidth,
                        x = g && l,
                        y = c(b.width);
                    y !== !1 && (f.width = y + (x ? 0 : r + v));
                    var z = c(b.height);
                    return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
                }
            }

            function i(b, c) {
                if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
                var d = b.style,
                    e = d.left,
                    f = b.runtimeStyle,
                    g = f && f.left;
                return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
            }
            var j, k, l, m = !1;
            return f
        }
        var g = "undefined" == typeof console ? d : function(a) {
                console.error(a)
            },
            h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
    }(window),
    function(a) {
        function b(a) {
            "function" == typeof a && (b.isReady ? a() : g.push(a))
        }

        function c(a) {
            var c = "readystatechange" === a.type && "complete" !== f.readyState;
            b.isReady || c || d()
        }

        function d() {
            b.isReady = !0;
            for (var a = 0, c = g.length; c > a; a++) {
                var d = g[a];
                d()
            }
        }

        function e(e) {
            return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
        }
        var f = a.document,
            g = [];
        b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
    }(window),
    function(a) {
        "use strict";

        function b(a, b) {
            return a[g](b)
        }

        function c(a) {
            if (!a.parentNode) {
                var b = document.createDocumentFragment();
                b.appendChild(a)
            }
        }

        function d(a, b) {
            c(a);
            for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
                if (d[e] === a) return !0;
            return !1
        }

        function e(a, d) {
            return c(a), b(a, d)
        }
        var f, g = function() {
            if (a.matches) return "matches";
            if (a.matchesSelector) return "matchesSelector";
            for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
                var e = b[c],
                    f = e + "MatchesSelector";
                if (a[f]) return f
            }
        }();
        if (g) {
            var h = document.createElement("div"),
                i = b(h, "div");
            f = i ? b : e
        } else f = d;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return f
        }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
    }(Element.prototype),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(c, d) {
            return b(a, c, d)
        }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
    }(window, function(a, b, c) {
        var d = {};
        d.extend = function(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }, d.modulo = function(a, b) {
            return (a % b + b) % b
        };
        var e = Object.prototype.toString;
        d.isArray = function(a) {
            return "[object Array]" == e.call(a)
        }, d.makeArray = function(a) {
            var b = [];
            if (d.isArray(a)) b = a;
            else if (a && "number" == typeof a.length)
                for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
            else b.push(a);
            return b
        }, d.indexOf = Array.prototype.indexOf ? function(a, b) {
            return a.indexOf(b)
        } : function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, d.removeFrom = function(a, b) {
            var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
        }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(a) {
            return a instanceof HTMLElement
        } : function(a) {
            return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
        }, d.setText = function() {
            function a(a, c) {
                b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
            }
            var b;
            return a
        }(), d.getParent = function(a, b) {
            for (; a != document.body;)
                if (a = a.parentNode, c(a, b)) return a
        }, d.getQueryElement = function(a) {
            return "string" == typeof a ? document.querySelector(a) : a
        }, d.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, d.filterFindElements = function(a, b) {
            a = d.makeArray(a);
            for (var e = [], f = 0, g = a.length; g > f; f++) {
                var h = a[f];
                if (d.isElement(h))
                    if (b) {
                        c(h, b) && e.push(h);
                        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
                    } else e.push(h)
            }
            return e
        }, d.debounceMethod = function(a, b, c) {
            var d = a.prototype[b],
                e = b + "Timeout";
            a.prototype[b] = function() {
                var a = this[e];
                a && clearTimeout(a);
                var b = arguments,
                    f = this;
                this[e] = setTimeout(function() {
                    d.apply(f, b), delete f[e]
                }, c || 100)
            }
        }, d.toDashed = function(a) {
            return a.replace(/(.)([A-Z])/g, function(a, b, c) {
                return b + "-" + c
            }).toLowerCase()
        };
        var f = a.console;
        return d.htmlInit = function(c, e) {
            b(function() {
                for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
                    var k, l = g[i],
                        m = l.getAttribute(h);
                    try {
                        k = m && JSON.parse(m)
                    } catch (n) {
                        f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
                        continue
                    }
                    var o = new c(l, k),
                        p = a.jQuery;
                    p && p.data(l, e, o)
                }
            })
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(c, d, e, f) {
            return b(a, c, d, e, f)
        }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
    }(window, function(a, b, c, d, e) {
        "use strict";

        function f(a) {
            for (var b in a) return !1;
            return b = null, !0
        }

        function g(a, b) {
            a && (this.element = a, this.layout = b, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function h(a) {
            return a.replace(/([A-Z])/g, function(a) {
                return "-" + a.toLowerCase()
            })
        }
        var i = a.getComputedStyle,
            j = i ? function(a) {
                return i(a, null)
            } : function(a) {
                return a.currentStyle
            },
            k = d("transition"),
            l = d("transform"),
            m = k && l,
            n = !!d("perspective"),
            o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[k],
            p = ["transform", "transition", "transitionDuration", "transitionProperty"],
            q = function() {
                for (var a = {}, b = 0, c = p.length; c > b; b++) {
                    var e = p[b],
                        f = d(e);
                    f && f !== e && (a[e] = f)
                }
                return a
            }();
        e.extend(g.prototype, b.prototype), g.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.getSize = function() {
            this.size = c(this.element)
        }, g.prototype.css = function(a) {
            var b = this.element.style;
            for (var c in a) {
                var d = q[c] || c;
                b[d] = a[c]
            }
        }, g.prototype.getPosition = function() {
            var a = j(this.element),
                b = this.layout.options,
                c = b.isOriginLeft,
                d = b.isOriginTop,
                e = a[c ? "left" : "right"],
                f = a[d ? "top" : "bottom"],
                g = this.layout.size,
                h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
                i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
            h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
        }, g.prototype.layoutPosition = function() {
            var a = this.layout.size,
                b = this.layout.options,
                c = {},
                d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
                e = b.isOriginLeft ? "left" : "right",
                f = b.isOriginLeft ? "right" : "left",
                g = this.position.x + a[d];
            c[e] = this.getXValue(g), c[f] = "";
            var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
                i = b.isOriginTop ? "top" : "bottom",
                j = b.isOriginTop ? "bottom" : "top",
                k = this.position.y + a[h];
            c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
        }, g.prototype.getXValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
        }, g.prototype.getYValue = function(a) {
            var b = this.layout.options;
            return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
        }, g.prototype._transitionTo = function(a, b) {
            this.getPosition();
            var c = this.position.x,
                d = this.position.y,
                e = parseInt(a, 10),
                f = parseInt(b, 10),
                g = e === this.position.x && f === this.position.y;
            if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
            var h = a - c,
                i = b - d,
                j = {};
            j.transform = this.getTranslate(h, i), this.transition({
                to: j,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, g.prototype.getTranslate = function(a, b) {
            var c = this.layout.options;
            return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
        }, g.prototype.goTo = function(a, b) {
            this.setPosition(a, b), this.layoutPosition()
        }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function(a, b) {
            this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
        }, g.prototype._nonTransition = function(a) {
            this.css(a.to), a.isCleaning && this._removeStyles(a.to);
            for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
        }, g.prototype._transition = function(a) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
            var b = this._transn;
            for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
            for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
            if (a.from) {
                this.css(a.from);
                var d = this.element.offsetHeight;
                d = null
            }
            this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
        };
        var r = "opacity," + h(q.transform || "transform");
        g.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: r,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(o, this, !1))
        }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function(a) {
            this.ontransitionend(a)
        }, g.prototype.onotransitionend = function(a) {
            this.ontransitionend(a)
        };
        var s = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        g.prototype.ontransitionend = function(a) {
            if (a.target === this.element) {
                var b = this._transn,
                    c = s[a.propertyName] || a.propertyName;
                if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
                    var d = b.onEnd[c];
                    d.call(this), delete b.onEnd[c]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, g.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
        }, g.prototype._removeStyles = function(a) {
            var b = {};
            for (var c in a) b[c] = "";
            this.css(b)
        };
        var t = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return g.prototype.removeTransitionStyles = function() {
            this.css(t)
        }, g.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, g.prototype.remove = function() {
            if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var a = this;
            this.once("transitionEnd", function() {
                a.removeElem()
            }), this.hide()
        }, g.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("visibleStyle");
            b[c] = this.onRevealTransitionEnd, this.transition({
                from: a.hiddenStyle,
                to: a.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, g.prototype.getHideRevealTransitionEndProperty = function(a) {
            var b = this.layout.options[a];
            if (b.opacity) return "opacity";
            for (var c in b) return c
        }, g.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var a = this.layout.options,
                b = {},
                c = this.getHideRevealTransitionEndProperty("hiddenStyle");
            b[c] = this.onHideTransitionEnd, this.transition({
                from: a.visibleStyle,
                to: a.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: b
            })
        }, g.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, g.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(c, d, e, f, g) {
            return b(a, c, d, e, f, g)
        }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
    }(window, function(a, b, c, d, e, f) {
        "use strict";

        function g(a, b) {
            var c = e.getQueryElement(a);
            if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
            this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
            var d = ++k;
            this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var h = a.console,
            i = a.jQuery,
            j = function() {},
            k = 0,
            l = {};
        return g.namespace = "outlayer", g.Item = f, g.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, e.extend(g.prototype, c.prototype), g.prototype.option = function(a) {
            e.extend(this.options, a)
        }, g.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, g.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, g.prototype._itemize = function(a) {
            for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
                var g = b[e],
                    h = new c(g, this);
                d.push(h)
            }
            return d
        }, g.prototype._filterFindItemElements = function(a) {
            return e.filterFindElements(a, this.options.itemSelector)
        }, g.prototype.getItemElements = function() {
            for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
            return a
        }, g.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, a), this._isLayoutInited = !0
        }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
            this.getSize()
        }, g.prototype.getSize = function() {
            this.size = d(this.element)
        }, g.prototype._getMeasurement = function(a, b) {
            var c, f = this.options[a];
            f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
        }, g.prototype.layoutItems = function(a, b) {
            a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
        }, g.prototype._getItemsForLayout = function(a) {
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.isIgnored || b.push(e)
            }
            return b
        }, g.prototype._layoutItems = function(a, b) {
            if (this._emitCompleteOnItems("layout", a), a && a.length) {
                for (var c = [], d = 0, e = a.length; e > d; d++) {
                    var f = a[d],
                        g = this._getItemLayoutPosition(f);
                    g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
                }
                this._processLayoutQueue(c)
            }
        }, g.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, g.prototype._processLayoutQueue = function(a) {
            for (var b = 0, c = a.length; c > b; b++) {
                var d = a[b];
                this._positionItem(d.item, d.x, d.y, d.isInstant)
            }
        }, g.prototype._positionItem = function(a, b, c, d) {
            d ? a.goTo(b, c) : a.moveTo(b, c)
        }, g.prototype._postLayout = function() {
            this.resizeContainer()
        }, g.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var a = this._getContainerSize();
                a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
            }
        }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function(a, b) {
            if (void 0 !== a) {
                var c = this.size;
                c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
            }
        }, g.prototype._emitCompleteOnItems = function(a, b) {
            function c() {
                e.dispatchEvent(a + "Complete", null, [b])
            }

            function d() {
                g++, g === f && c()
            }
            var e = this,
                f = b.length;
            if (!b || !f) return void c();
            for (var g = 0, h = 0, i = b.length; i > h; h++) {
                var j = b[h];
                j.once(a, d)
            }
        }, g.prototype.dispatchEvent = function(a, b, c) {
            var d = b ? [b].concat(c) : c;
            if (this.emitEvent(a, d), i)
                if (this.$element = this.$element || i(this.element), b) {
                    var e = i.Event(b);
                    e.type = a, this.$element.trigger(e, c)
                } else this.$element.trigger(a, c)
        }, g.prototype.ignore = function(a) {
            var b = this.getItem(a);
            b && (b.isIgnored = !0)
        }, g.prototype.unignore = function(a) {
            var b = this.getItem(a);
            b && delete b.isIgnored
        }, g.prototype.stamp = function(a) {
            if (a = this._find(a)) {
                this.stamps = this.stamps.concat(a);
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    this.ignore(d)
                }
            }
        }, g.prototype.unstamp = function(a) {
            if (a = this._find(a))
                for (var b = 0, c = a.length; c > b; b++) {
                    var d = a[b];
                    e.removeFrom(this.stamps, d), this.unignore(d)
                }
        }, g.prototype._find = function(a) {
            return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
        }, g.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var a = 0, b = this.stamps.length; b > a; a++) {
                    var c = this.stamps[a];
                    this._manageStamp(c)
                }
            }
        }, g.prototype._getBoundingRect = function() {
            var a = this.element.getBoundingClientRect(),
                b = this.size;
            this._boundingRect = {
                left: a.left + b.paddingLeft + b.borderLeftWidth,
                top: a.top + b.paddingTop + b.borderTopWidth,
                right: a.right - (b.paddingRight + b.borderRightWidth),
                bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
            }
        }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function(a) {
            var b = a.getBoundingClientRect(),
                c = this._boundingRect,
                e = d(a),
                f = {
                    left: b.left - c.left - e.marginLeft,
                    top: b.top - c.top - e.marginTop,
                    right: c.right - b.right - e.marginRight,
                    bottom: c.bottom - b.bottom - e.marginBottom
                };
            return f
        }, g.prototype.handleEvent = function(a) {
            var b = "on" + a.type;
            this[b] && this[b](a)
        }, g.prototype.bindResize = function() {
            this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
        }, g.prototype.unbindResize = function() {
            this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
        }, g.prototype.onresize = function() {
            function a() {
                b.resize(), delete b.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var b = this;
            this.resizeTimeout = setTimeout(a, 100)
        }, g.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, g.prototype.needsResizeLayout = function() {
            var a = d(this.element),
                b = this.size && a;
            return b && a.innerWidth !== this.size.innerWidth
        }, g.prototype.addItems = function(a) {
            var b = this._itemize(a);
            return b.length && (this.items = this.items.concat(b)), b
        }, g.prototype.appended = function(a) {
            var b = this.addItems(a);
            b.length && (this.layoutItems(b, !0), this.reveal(b))
        }, g.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                var c = this.items.slice(0);
                this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
            }
        }, g.prototype.reveal = function(a) {
            this._emitCompleteOnItems("reveal", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.reveal()
            }
        }, g.prototype.hide = function(a) {
            this._emitCompleteOnItems("hide", a);
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.hide()
            }
        }, g.prototype.revealItemElements = function(a) {
            var b = this.getItems(a);
            this.reveal(b)
        }, g.prototype.hideItemElements = function(a) {
            var b = this.getItems(a);
            this.hide(b)
        }, g.prototype.getItem = function(a) {
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                if (d.element === a) return d
            }
        }, g.prototype.getItems = function(a) {
            a = e.makeArray(a);
            for (var b = [], c = 0, d = a.length; d > c; c++) {
                var f = a[c],
                    g = this.getItem(f);
                g && b.push(g)
            }
            return b
        }, g.prototype.remove = function(a) {
            var b = this.getItems(a);
            if (this._emitCompleteOnItems("remove", b), b && b.length)
                for (var c = 0, d = b.length; d > c; c++) {
                    var f = b[c];
                    f.remove(), e.removeFrom(this.items, f)
                }
        }, g.prototype.destroy = function() {
            var a = this.element.style;
            a.height = "", a.position = "", a.width = "";
            for (var b = 0, c = this.items.length; c > b; b++) {
                var d = this.items[b];
                d.destroy()
            }
            this.unbindResize();
            var e = this.element.outlayerGUID;
            delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
        }, g.data = function(a) {
            a = e.getQueryElement(a);
            var b = a && a.outlayerGUID;
            return b && l[b]
        }, g.create = function(a, b) {
            function c() {
                g.apply(this, arguments)
            }
            return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function() {
                f.apply(this, arguments)
            }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
        }, g.Item = f, g
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
    }(window, function(a) {
        "use strict";

        function b() {
            a.Item.apply(this, arguments)
        }
        b.prototype = new a.Item, b.prototype._create = function() {
            this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
        }, b.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var a = this.layout.options.getSortData,
                    b = this.layout._sorters;
                for (var c in a) {
                    var d = b[c];
                    this.sortData[c] = d(this.element, this)
                }
            }
        };
        var c = b.prototype.destroy;
        return b.prototype.destroy = function() {
            c.apply(this, arguments), this.css({
                display: ""
            })
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
    }(window, function(a, b) {
        "use strict";

        function c(a) {
            this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
        }
        return function() {
            function a(a) {
                return function() {
                    return b.prototype[a].apply(this.isotope, arguments)
                }
            }
            for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
                var g = d[e];
                c.prototype[g] = a(g)
            }
        }(), c.prototype.needsVerticalResizeLayout = function() {
            var b = a(this.isotope.element),
                c = this.isotope.size && b;
            return c && b.innerHeight != this.isotope.size.innerHeight
        }, c.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, c.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, c.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, c.prototype.getSegmentSize = function(a, b) {
            var c = a + b,
                d = "outer" + b;
            if (this._getMeasurement(c, d), !this[c]) {
                var e = this.getFirstItemSize();
                this[c] = e && e[d] || this.isotope.size["inner" + b]
            }
        }, c.prototype.getFirstItemSize = function() {
            var b = this.isotope.filteredItems[0];
            return b && b.element && a(b.element)
        }, c.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, c.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, c.modes = {}, c.create = function(a, b) {
            function d() {
                c.apply(this, arguments)
            }
            return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
        }, c
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
    }(window, function(a, b, c) {
        var d = a.create("masonry");
        return d.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var a = this.cols;
            for (this.colYs = []; a--;) this.colYs.push(0);
            this.maxY = 0
        }, d.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var a = this.items[0],
                    c = a && a.element;
                this.columnWidth = c && b(c).outerWidth || this.containerWidth
            }
            var d = this.columnWidth += this.gutter,
                e = this.containerWidth + this.gutter,
                f = e / d,
                g = d - e % d,
                h = g && 1 > g ? "round" : "floor";
            f = Math[h](f), this.cols = Math.max(f, 1)
        }, d.prototype.getContainerWidth = function() {
            var a = this.options.isFitWidth ? this.element.parentNode : this.element,
                c = b(a);
            this.containerWidth = c && c.innerWidth
        }, d.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth % this.columnWidth,
                d = b && 1 > b ? "round" : "ceil",
                e = Math[d](a.size.outerWidth / this.columnWidth);
            e = Math.min(e, this.cols);
            for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
                    x: this.columnWidth * h,
                    y: g
                }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
            return i
        }, d.prototype._getColGroup = function(a) {
            if (2 > a) return this.colYs;
            for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
                var e = this.colYs.slice(d, d + a);
                b[d] = Math.max.apply(Math, e)
            }
            return b
        }, d.prototype._manageStamp = function(a) {
            var c = b(a),
                d = this._getElementOffset(a),
                e = this.options.isOriginLeft ? d.left : d.right,
                f = e + c.outerWidth,
                g = Math.floor(e / this.columnWidth);
            g = Math.max(0, g);
            var h = Math.floor(f / this.columnWidth);
            h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
            for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
        }, d.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var a = {
                height: this.maxY
            };
            return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
        }, d.prototype._getContainerFitWidth = function() {
            for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
            return (this.cols - a) * this.columnWidth - this.gutter
        }, d.prototype.needsResizeLayout = function() {
            var a = this.containerWidth;
            return this.getContainerWidth(), a !== this.containerWidth
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
    }(window, function(a, b) {
        "use strict";

        function c(a, b) {
            for (var c in b) a[c] = b[c];
            return a
        }
        var d = a.create("masonry"),
            e = d.prototype._getElementOffset,
            f = d.prototype.layout,
            g = d.prototype._getMeasurement;
        c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
        var h = d.prototype.measureColumns;
        d.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, h.call(this)
        };
        var i = d.prototype._manageStamp;
        return d.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
        }, d
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("fitRows");
        return b.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = a.size.outerWidth + this.gutter,
                c = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
            var d = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
    }(window, function(a) {
        "use strict";
        var b = a.create("vertical", {
            horizontalAlignment: 0
        });
        return b.prototype._resetLayout = function() {
            this.y = 0
        }, b.prototype._getItemLayoutPosition = function(a) {
            a.getSize();
            var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
                c = this.y;
            return this.y += a.size.outerHeight, {
                x: b,
                y: c
            }
        }, b.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, b
    }),
    function(a, b) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h)
        }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
    }(window, function(a, b, c, d, e, f, g) {
        function h(a, b) {
            return function(c, d) {
                for (var e = 0, f = a.length; f > e; e++) {
                    var g = a[e],
                        h = c.sortData[g],
                        i = d.sortData[g];
                    if (h > i || i > h) {
                        var j = void 0 !== b[g] ? b[g] : b,
                            k = j ? 1 : -1;
                        return (h > i ? 1 : -1) * k
                    }
                }
                return 0
            }
        }
        var i = a.jQuery,
            j = String.prototype.trim ? function(a) {
                return a.trim()
            } : function(a) {
                return a.replace(/^\s+|\s+$/g, "")
            },
            k = document.documentElement,
            l = k.textContent ? function(a) {
                return a.textContent
            } : function(a) {
                return a.innerText
            },
            m = b.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        m.Item = f, m.LayoutMode = g, m.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var a in g.modes) this._initLayoutMode(a)
        }, m.prototype.reloadItems = function() {
            this.itemGUID = 0, b.prototype.reloadItems.call(this)
        }, m.prototype._itemize = function() {
            for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
                var e = a[c];
                e.id = this.itemGUID++
            }
            return this._updateItemsSortData(a), a
        }, m.prototype._initLayoutMode = function(a) {
            var b = g.modes[a],
                c = this.options[a] || {};
            this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
        }, m.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, m.prototype._layout = function() {
            var a = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
        }, m.prototype.arrange = function(a) {
            function b() {
                d.reveal(c.needReveal), d.hide(c.needHide)
            }
            this.option(a), this._getIsInstant();
            var c = this._filter(this.items);
            this.filteredItems = c.matches;
            var d = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
        }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function() {
            var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = a, a
        }, m.prototype._bindArrangeComplete = function() {
            function a() {
                b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
            }
            var b, c, d, e = this;
            this.once("layoutComplete", function() {
                b = !0, a()
            }), this.once("hideComplete", function() {
                c = !0, a()
            }), this.once("revealComplete", function() {
                d = !0, a()
            })
        }, m.prototype._filter = function(a) {
            var b = this.options.filter;
            b = b || "*";
            for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
                var i = a[g];
                if (!i.isIgnored) {
                    var j = f(i);
                    j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
                }
            }
            return {
                matches: c,
                needReveal: d,
                needHide: e
            }
        }, m.prototype._getFilterTest = function(a) {
            return i && this.options.isJQueryFiltering ? function(b) {
                return i(b.element).is(a)
            } : "function" == typeof a ? function(b) {
                return a(b.element)
            } : function(b) {
                return d(b.element, a)
            }
        }, m.prototype.updateSortData = function(a) {
            var b;
            a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
        }, m.prototype._getSorters = function() {
            var a = this.options.getSortData;
            for (var b in a) {
                var c = a[b];
                this._sorters[b] = n(c)
            }
        }, m.prototype._updateItemsSortData = function(a) {
            for (var b = a && a.length, c = 0; b && b > c; c++) {
                var d = a[c];
                d.updateSortData()
            }
        };
        var n = function() {
            function a(a) {
                if ("string" != typeof a) return a;
                var c = j(a).split(" "),
                    d = c[0],
                    e = d.match(/^\[(.+)\]$/),
                    f = e && e[1],
                    g = b(f, d),
                    h = m.sortDataParsers[c[1]];
                return a = h ? function(a) {
                    return a && h(g(a))
                } : function(a) {
                    return a && g(a)
                }
            }

            function b(a, b) {
                var c;
                return c = a ? function(b) {
                    return b.getAttribute(a)
                } : function(a) {
                    var c = a.querySelector(b);
                    return c && l(c)
                }
            }
            return a
        }();
        m.sortDataParsers = {
            parseInt: function(a) {
                return parseInt(a, 10)
            },
            parseFloat: function(a) {
                return parseFloat(a)
            }
        }, m.prototype._sort = function() {
            var a = this.options.sortBy;
            if (a) {
                var b = [].concat.apply(a, this.sortHistory),
                    c = h(b, this.options.sortAscending);
                this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
            }
        }, m.prototype._mode = function() {
            var a = this.options.layoutMode,
                b = this.modes[a];
            if (!b) throw new Error("No layout mode: " + a);
            return b.options = this.options[a], b
        }, m.prototype._resetLayout = function() {
            b.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, m.prototype._getItemLayoutPosition = function(a) {
            return this._mode()._getItemLayoutPosition(a)
        }, m.prototype._manageStamp = function(a) {
            this._mode()._manageStamp(a)
        }, m.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, m.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, m.prototype.appended = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c = this._filterRevealAdded(b);
                this.filteredItems = this.filteredItems.concat(c)
            }
        }, m.prototype.prepended = function(a) {
            var b = this._itemize(a);
            if (b.length) {
                this._resetLayout(), this._manageStamps();
                var c = this._filterRevealAdded(b);
                this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
            }
        }, m.prototype._filterRevealAdded = function(a) {
            var b = this._filter(a);
            return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
        }, m.prototype.insert = function(a) {
            var b = this.addItems(a);
            if (b.length) {
                var c, d, e = b.length;
                for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
                var f = this._filter(b).matches;
                for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
                for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
                this.reveal(f)
            }
        };
        var o = m.prototype.remove;
        return m.prototype.remove = function(a) {
            a = e.makeArray(a);
            var b = this.getItems(a);
            o.call(this, a);
            var c = b && b.length;
            if (c)
                for (var d = 0; c > d; d++) {
                    var f = b[d];
                    e.removeFrom(this.filteredItems, f)
                }
        }, m.prototype.shuffle = function() {
            for (var a = 0, b = this.items.length; b > a; a++) {
                var c = this.items[a];
                c.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, m.prototype._noTransition = function(a) {
            var b = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var c = a.call(this);
            return this.options.transitionDuration = b, c
        }, m.prototype.getFilteredItemElements = function() {
            for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
            return a
        }, m
    });

(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(window, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function f(e) {
            this.img = e
        }

        function c(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                var i = n.nodeType;
                if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                        var f = r[o];
                        this.addImage(f)
                    }
            }
        }, s.prototype.addImage = function(e) {
            var t = new f(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), f.prototype = new t, f.prototype.check = function() {
            var e = v[this.img.src] || new c(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, f.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return c.prototype = new t, c.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, c.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, c.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, c.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, c.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, c.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });

(function(d, c, a, f) {
    var e = {
        mode: "lg-slide",
        cssEasing: "ease",
        easing: "linear",
        speed: 600,
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 150,
        hideBarsDelay: 6000,
        useLeft: false,
        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,
        appendSubHtmlTo: ".lg-sub-html",
        preload: 1,
        showAfterLoad: true,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: false,
        iframeMaxWidth: "100%",
        download: true,
        counter: true,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,
        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function b(h, g) {
        this.el = h;
        this.$el = d(h);
        this.s = d.extend({}, e, g);
        if (this.s.dynamic && this.s.dynamicEl !== "undefined" && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw ("When using dynamic mode, you must also define dynamicEl as an Array.")
        }
        this.modules = {};
        this.lGalleryOn = false;
        this.lgBusy = false;
        this.hideBartimeout = false;
        this.isTouch = ("ontouchstart" in a.documentElement);
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false
        }
        if (this.s.dynamic) {
            this.$items = this.s.dynamicEl
        } else {
            if (this.s.selector === "this") {
                this.$items = this.$el
            } else {
                if (this.s.selector !== "") {
                    if (this.s.selectWithin) {
                        this.$items = d(this.s.selectWithin).find(this.s.selector)
                    } else {
                        this.$items = this.$el.find(d(this.s.selector))
                    }
                } else {
                    this.$items = this.$el.children()
                }
            }
        }
        this.$slide = "";
        this.$outer = "";
        this.init();
        return this
    }
    b.prototype.init = function() {
        var h = this;
        if (h.s.preload > h.$items.length) {
            h.s.preload = h.$items.length
        }
        var g = c.location.hash;
        if (g.indexOf("lg=" + this.s.galleryId) > 0) {
            h.index = parseInt(g.split("&slide=")[1], 10);
            d("body").addClass("lg-from-hash");
            if (!d("body").hasClass("lg-on")) {
                setTimeout(function() {
                    h.build(h.index);
                    d("body").addClass("lg-on")
                })
            }
        }
        if (h.s.dynamic) {
            h.$el.trigger("onBeforeOpen.lg");
            h.index = h.s.index || 0;
            if (!d("body").hasClass("lg-on")) {
                setTimeout(function() {
                    h.build(h.index);
                    d("body").addClass("lg-on")
                })
            }
        } else {
            h.$items.on("click.lgcustom", function(i) {
                try {
                    i.preventDefault();
                    i.preventDefault()
                } catch (j) {
                    i.returnValue = false
                }
                h.$el.trigger("onBeforeOpen.lg");
                h.index = h.s.index || h.$items.index(this);
                if (!d("body").hasClass("lg-on")) {
                    h.build(h.index);
                    d("body").addClass("lg-on")
                }
            })
        }
    };
    b.prototype.build = function(g) {
        var h = this;
        h.structure();
        d.each(d.fn.lightGallery.modules, function(i) {
            h.modules[i] = new d.fn.lightGallery.modules[i](h.el)
        });
        h.slide(g, false, false);
        if (h.s.keyPress) {
            h.keyPress()
        }
        if (h.$items.length > 1) {
            h.arrow();
            setTimeout(function() {
                h.enableDrag();
                h.enableSwipe()
            }, 50);
            if (h.s.mousewheel) {
                h.mousewheel()
            }
        }
        h.counter();
        h.closeGallery();
        h.$el.trigger("onAfterOpen.lg");
        h.$outer.on("mousemove.lg click.lg touchstart.lg", function() {
            h.$outer.removeClass("lg-hide-items");
            clearTimeout(h.hideBartimeout);
            h.hideBartimeout = setTimeout(function() {
                h.$outer.addClass("lg-hide-items")
            }, h.s.hideBarsDelay)
        })
    };
    b.prototype.structure = function() {
        var l = "";
        var g = "";
        var h = 0;
        var k = "";
        var j;
        var n = this;
        d("body").append('<div class="lg-backdrop"></div>');
        d(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms");
        for (h = 0; h < this.$items.length; h++) {
            l += '<div class="lg-item"></div>'
        }
        if (this.s.controls && this.$items.length > 1) {
            g = '<div class="lg-actions"><div class="lg-prev lg-icon">' + this.s.prevHtml + '</div><div class="lg-next lg-icon">' + this.s.nextHtml + "</div></div>"
        }
        if (this.s.appendSubHtmlTo === ".lg-sub-html") {
            k = '<div class="lg-sub-html"></div>'
        }
        j = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + l + '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' + g + k + "</div></div>";
        d("body").append(j);
        this.$outer = d(".lg-outer");
        this.$slide = this.$outer.find(".lg-item");
        if (this.s.useLeft) {
            this.$outer.addClass("lg-use-left");
            this.s.mode = "lg-slide"
        } else {
            this.$outer.addClass("lg-use-css3")
        }
        n.setTop();
        d(c).on("resize.lg orientationchange.lg", function() {
            setTimeout(function() {
                n.setTop()
            }, 100)
        });
        this.$slide.eq(this.index).addClass("lg-current");
        if (this.doCss()) {
            this.$outer.addClass("lg-css3")
        } else {
            this.$outer.addClass("lg-css");
            this.s.speed = 0
        }
        this.$outer.addClass(this.s.mode);
        if (this.s.enableDrag && this.$items.length > 1) {
            this.$outer.addClass("lg-grab")
        }
        if (this.s.showAfterLoad) {
            this.$outer.addClass("lg-show-after-load")
        }
        if (this.doCss()) {
            var m = this.$outer.find(".lg-inner");
            m.css("transition-timing-function", this.s.cssEasing);
            m.css("transition-duration", this.s.speed + "ms")
        }
        d(".lg-backdrop").addClass("in");
        setTimeout(function() {
            n.$outer.addClass("lg-visible")
        }, this.s.backdropDuration);
        if (this.s.download) {
            this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>')
        }
        this.prevScrollTop = d(c).scrollTop()
    };
    b.prototype.setTop = function() {
        if (this.s.height !== "100%") {
            var g = d(c).height();
            var i = (g - parseInt(this.s.height, 10)) / 2;
            var h = this.$outer.find(".lg");
            if (g >= parseInt(this.s.height, 10)) {
                h.css("top", i + "px")
            } else {
                h.css("top", "0px")
            }
        }
    };
    b.prototype.doCss = function() {
        var g = function() {
            var k = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"];
            var h = a.documentElement;
            var j = 0;
            for (j = 0; j < k.length; j++) {
                if (k[j] in h.style) {
                    return true
                }
            }
        };
        if (g()) {
            return true
        }
        return false
    };
    b.prototype.isVideo = function(l, h) {
        var j;
        if (this.s.dynamic) {
            j = this.s.dynamicEl[h].html
        } else {
            j = this.$items.eq(h).attr("data-html")
        }
        if (!l && j) {
            return {
                html5: true
            }
        }
        var i = l.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var g = l.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var k = l.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        if (i) {
            return {
                youtube: i
            }
        } else {
            if (g) {
                return {
                    vimeo: g
                }
            } else {
                if (k) {
                    return {
                        dailymotion: k
                    }
                }
            }
        }
    };
    b.prototype.counter = function() {
        if (this.s.counter) {
            d(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
        }
    };
    b.prototype.addHtml = function(g) {
        var i = null;
        var j;
        if (this.s.dynamic) {
            if (this.s.dynamicEl[g].subHtmlUrl) {
                j = this.s.dynamicEl[g].subHtmlUrl
            } else {
                i = this.s.dynamicEl[g].subHtml
            }
        } else {
            if (this.$items.eq(g).attr("data-sub-html-url")) {
                j = this.$items.eq(g).attr("data-sub-html-url")
            } else {
                i = this.$items.eq(g).attr("data-sub-html")
            }
        }
        if (!j) {
            if (typeof i !== "undefined" && i !== null) {
                var h = i.substring(0, 1);
                if (h === "." || h === "#") {
                    i = d(i).html()
                } else {
                    i = i
                }
            } else {
                i = ""
            }
        }
        if (this.s.appendSubHtmlTo === ".lg-sub-html") {
            if (j) {
                this.$outer.find(this.s.appendSubHtmlTo).load(j)
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).html(i)
            }
        } else {
            if (j) {
                this.$slide.eq(g).load(j)
            } else {
                this.$slide.eq(g).append(i)
            }
        }
        if (typeof i !== "undefined" && i !== null) {
            if (i === "") {
                this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html")
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")
            }
        }
        this.$el.trigger("onAfterAppendSubHtml.lg", [g])
    };
    b.prototype.preload = function(h) {
        var k = 1;
        var g = 1;
        for (k = 1; k <= this.s.preload; k++) {
            if (k >= this.$items.length - h) {
                break
            }
            this.loadContent(h + k, false, 0)
        }
        for (g = 1; g <= this.s.preload; g++) {
            if (h - g < 0) {
                break
            }
            this.loadContent(h - g, false, 0)
        }
    };
    b.prototype.loadContent = function(j, k, w) {
        var q = this;
        var s = false;
        var x;
        var n;
        var v;
        var i;
        var p;
        var h;
        var o = function(D) {
            var y = [];
            var A = [];
            for (var C = 0; C < D.length; C++) {
                var E = D[C].split(" ");
                if (E[0] === "") {
                    E.splice(0, 1)
                }
                A.push(E[0]);
                y.push(E[1])
            }
            var B = d(c).width();
            for (var z = 0; z < y.length; z++) {
                if (parseInt(y[z], 10) > B) {
                    n = A[z];
                    break
                }
            }
        };
        if (q.s.dynamic) {
            if (q.s.dynamicEl[j].poster) {
                s = true;
                v = q.s.dynamicEl[j].poster
            }
            h = q.s.dynamicEl[j].html;
            n = q.s.dynamicEl[j].src;
            if (q.s.dynamicEl[j].responsive) {
                var u = q.s.dynamicEl[j].responsive.split(",");
                o(u)
            }
            i = q.s.dynamicEl[j].srcset;
            p = q.s.dynamicEl[j].sizes
        } else {
            if (q.$items.eq(j).attr("data-poster")) {
                s = true;
                v = q.$items.eq(j).attr("data-poster")
            }
            h = q.$items.eq(j).attr("data-html");
            n = q.$items.eq(j).attr("href") || q.$items.eq(j).attr("data-src");
            if (q.$items.eq(j).attr("data-responsive")) {
                var l = q.$items.eq(j).attr("data-responsive").split(",");
                o(l)
            }
            i = q.$items.eq(j).attr("data-srcset");
            p = q.$items.eq(j).attr("data-sizes")
        }
        var m = false;
        if (q.s.dynamic) {
            if (q.s.dynamicEl[j].iframe) {
                m = true
            }
        } else {
            if (q.$items.eq(j).attr("data-iframe") === "true") {
                m = true
            }
        }
        var r = q.isVideo(n, j);
        if (!q.$slide.eq(j).hasClass("lg-loaded")) {
            if (m) {
                q.$slide.eq(j).prepend('<div class="lg-video-cont" style="max-width:' + q.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + n + '"  allowfullscreen="true"></iframe></div></div>')
            } else {
                if (s) {
                    var g = "";
                    if (r && r.youtube) {
                        g = "lg-has-youtube"
                    } else {
                        if (r && r.vimeo) {
                            g = "lg-has-vimeo"
                        } else {
                            g = "lg-has-html5"
                        }
                    }
                    q.$slide.eq(j).prepend('<div class="lg-video-cont ' + g + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + v + '" /></div></div>')
                } else {
                    if (r) {
                        q.$slide.eq(j).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
                        q.$el.trigger("hasVideo.lg", [j, n, h])
                    } else {
                        q.$slide.eq(j).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + n + '" /></div>')
                    }
                }
            }
            q.$el.trigger("onAferAppendSlide.lg", [j]);
            x = q.$slide.eq(j).find(".lg-object");
            if (p) {
                x.attr("sizes", p)
            }
            if (i) {
                x.attr("srcset", i);
                try {
                    picturefill({
                        elements: [x[0]]
                    })
                } catch (t) {
                    console.error("Make sure you have included Picturefill version 2")
                }
            }
            if (this.s.appendSubHtmlTo !== ".lg-sub-html") {
                q.addHtml(j)
            }
            q.$slide.eq(j).addClass("lg-loaded")
        }
        q.$slide.eq(j).find(".lg-object").on("load.lg error.lg", function() {
            var y = 0;
            if (w && !d("body").hasClass("lg-from-hash")) {
                y = w
            }
            setTimeout(function() {
                q.$slide.eq(j).addClass("lg-complete");
                q.$el.trigger("onSlideItemLoad.lg", [j, w || 0])
            }, y)
        });
        if (r && r.html5 && !s) {
            q.$slide.eq(j).addClass("lg-complete")
        }
        if (k === true) {
            if (!q.$slide.eq(j).hasClass("lg-complete")) {
                q.$slide.eq(j).find(".lg-object").on("load.lg error.lg", function() {
                    q.preload(j)
                })
            } else {
                q.preload(j)
            }
        }
    };
    b.prototype.slide = function(m, o, j) {
        var k = this.$outer.find(".lg-current").index();
        var l = this;
        if (l.lGalleryOn && (k === m)) {
            return
        }
        var n = this.$slide.length;
        var r = l.lGalleryOn ? this.s.speed : 0;
        var h = false;
        var g = false;
        if (!l.lgBusy) {
            if (this.s.download) {
                var i;
                if (l.s.dynamic) {
                    i = l.s.dynamicEl[m].downloadUrl !== false && (l.s.dynamicEl[m].downloadUrl || l.s.dynamicEl[m].src)
                } else {
                    i = l.$items.eq(m).attr("data-download-url") !== "false" && (l.$items.eq(m).attr("data-download-url") || l.$items.eq(m).attr("href") || l.$items.eq(m).attr("data-src"))
                }
                if (i) {
                    d("#lg-download").attr("href", i);
                    l.$outer.removeClass("lg-hide-download")
                } else {
                    l.$outer.addClass("lg-hide-download")
                }
            }
            this.$el.trigger("onBeforeSlide.lg", [k, m, o, j]);
            l.lgBusy = true;
            clearTimeout(l.hideBartimeout);
            if (this.s.appendSubHtmlTo === ".lg-sub-html") {
                setTimeout(function() {
                    l.addHtml(m)
                }, r)
            }
            this.arrowDisable(m);
            if (!o) {
                l.$outer.addClass("lg-no-trans");
                this.$slide.removeClass("lg-prev-slide lg-next-slide");
                if (m < k) {
                    g = true;
                    if ((m === 0) && (k === n - 1) && !j) {
                        g = false;
                        h = true
                    }
                } else {
                    if (m > k) {
                        h = true;
                        if ((m === n - 1) && (k === 0) && !j) {
                            g = true;
                            h = false
                        }
                    }
                }
                if (g) {
                    this.$slide.eq(m).addClass("lg-prev-slide");
                    this.$slide.eq(k).addClass("lg-next-slide")
                } else {
                    if (h) {
                        this.$slide.eq(m).addClass("lg-next-slide");
                        this.$slide.eq(k).addClass("lg-prev-slide")
                    }
                }
                setTimeout(function() {
                    l.$slide.removeClass("lg-current");
                    l.$slide.eq(m).addClass("lg-current");
                    l.$outer.removeClass("lg-no-trans")
                }, 50)
            } else {
                var p = m - 1;
                var q = m + 1;
                if ((m === 0) && (k === n - 1)) {
                    q = 0;
                    p = n - 1
                } else {
                    if ((m === n - 1) && (k === 0)) {
                        q = 0;
                        p = n - 1
                    }
                }
                this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");
                l.$slide.eq(p).addClass("lg-prev-slide");
                l.$slide.eq(q).addClass("lg-next-slide");
                l.$slide.eq(m).addClass("lg-current")
            }
            if (l.lGalleryOn) {
                setTimeout(function() {
                    l.loadContent(m, true, 0)
                }, this.s.speed + 50);
                setTimeout(function() {
                    l.lgBusy = false;
                    l.$el.trigger("onAfterSlide.lg", [k, m, o, j])
                }, this.s.speed)
            } else {
                l.loadContent(m, true, l.s.backdropDuration);
                l.lgBusy = false;
                l.$el.trigger("onAfterSlide.lg", [k, m, o, j])
            }
            l.lGalleryOn = true;
            if (this.s.counter) {
                d("#lg-counter-current").text(m + 1)
            }
        }
    };
    b.prototype.goToNextSlide = function(g) {
        var h = this;
        if (!h.lgBusy) {
            if ((h.index + 1) < h.$slide.length) {
                h.index++;
                h.$el.trigger("onBeforeNextSlide.lg", [h.index]);
                h.slide(h.index, g, false)
            } else {
                if (h.s.loop) {
                    h.index = 0;
                    h.$el.trigger("onBeforeNextSlide.lg", [h.index]);
                    h.slide(h.index, g, false)
                } else {
                    if (h.s.slideEndAnimatoin) {
                        h.$outer.addClass("lg-right-end");
                        setTimeout(function() {
                            h.$outer.removeClass("lg-right-end")
                        }, 400)
                    }
                }
            }
        }
    };
    b.prototype.goToPrevSlide = function(g) {
        var h = this;
        if (!h.lgBusy) {
            if (h.index > 0) {
                h.index--;
                h.$el.trigger("onBeforePrevSlide.lg", [h.index, g]);
                h.slide(h.index, g, false)
            } else {
                if (h.s.loop) {
                    h.index = h.$items.length - 1;
                    h.$el.trigger("onBeforePrevSlide.lg", [h.index, g]);
                    h.slide(h.index, g, false)
                } else {
                    if (h.s.slideEndAnimatoin) {
                        h.$outer.addClass("lg-left-end");
                        setTimeout(function() {
                            h.$outer.removeClass("lg-left-end")
                        }, 400)
                    }
                }
            }
        }
    };
    b.prototype.keyPress = function() {
        var g = this;
        if (this.$items.length > 1) {
            d(c).on("keyup.lg", function(h) {
                if (g.$items.length > 1) {
                    if (h.keyCode === 37) {
                        h.preventDefault();
                        g.goToPrevSlide()
                    }
                    if (h.keyCode === 39) {
                        h.preventDefault();
                        g.goToNextSlide()
                    }
                }
            })
        }
        d(c).on("keydown.lg", function(h) {
            if (g.s.escKey === true && h.keyCode === 27) {
                h.preventDefault();
                if (!g.$outer.hasClass("lg-thumb-open")) {
                    g.destroy()
                } else {
                    g.$outer.removeClass("lg-thumb-open")
                }
            }
        })
    };
    b.prototype.arrow = function() {
        var g = this;
        this.$outer.find(".lg-prev").on("click.lg", function() {
            g.goToPrevSlide()
        });
        this.$outer.find(".lg-next").on("click.lg", function() {
            g.goToNextSlide()
        })
    };
    b.prototype.arrowDisable = function(g) {
        if (!this.s.loop && this.s.hideControlOnEnd) {
            if ((g + 1) < this.$slide.length) {
                this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled")
            } else {
                this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled")
            }
            if (g > 0) {
                this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled")
            } else {
                this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled")
            }
        }
    };
    b.prototype.setTranslate = function(h, i, g) {
        if (this.s.useLeft) {
            h.css("left", i)
        } else {
            h.css({
                transform: "translate3d(" + (i) + "px, " + g + "px, 0px)"
            })
        }
    };
    b.prototype.touchMove = function(h, g) {
        var i = g - h;
        if (Math.abs(i) > 15) {
            this.$outer.addClass("lg-dragging");
            this.setTranslate(this.$slide.eq(this.index), i, 0);
            this.setTranslate(d(".lg-prev-slide"), -this.$slide.eq(this.index).width() + i, 0);
            this.setTranslate(d(".lg-next-slide"), this.$slide.eq(this.index).width() + i, 0)
        }
    };
    b.prototype.touchEnd = function(h) {
        var g = this;
        if (g.s.mode !== "lg-slide") {
            g.$outer.addClass("lg-slide")
        }
        this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0");
        setTimeout(function() {
            g.$outer.removeClass("lg-dragging");
            if ((h < 0) && (Math.abs(h) > g.s.swipeThreshold)) {
                g.goToNextSlide(true)
            } else {
                if ((h > 0) && (Math.abs(h) > g.s.swipeThreshold)) {
                    g.goToPrevSlide(true)
                } else {
                    if (Math.abs(h) < 5) {
                        g.$el.trigger("onSlideClick.lg")
                    }
                }
            }
            g.$slide.removeAttr("style")
        });
        setTimeout(function() {
            if (!g.$outer.hasClass("lg-dragging") && g.s.mode !== "lg-slide") {
                g.$outer.removeClass("lg-slide")
            }
        }, g.s.speed + 100)
    };
    b.prototype.enableSwipe = function() {
        var j = this;
        var i = 0;
        var g = 0;
        var h = false;
        if (j.s.enableSwipe && j.isTouch && j.doCss()) {
            j.$slide.on("touchstart.lg", function(k) {
                if (!j.$outer.hasClass("lg-zoomed") && !j.lgBusy) {
                    k.preventDefault();
                    j.manageSwipeClass();
                    i = k.originalEvent.targetTouches[0].pageX
                }
            });
            j.$slide.on("touchmove.lg", function(k) {
                if (!j.$outer.hasClass("lg-zoomed")) {
                    k.preventDefault();
                    g = k.originalEvent.targetTouches[0].pageX;
                    j.touchMove(i, g);
                    h = true
                }
            });
            j.$slide.on("touchend.lg", function() {
                if (!j.$outer.hasClass("lg-zoomed")) {
                    if (h) {
                        h = false;
                        j.touchEnd(g - i)
                    } else {
                        j.$el.trigger("onSlideClick.lg")
                    }
                }
            })
        }
    };
    b.prototype.enableDrag = function() {
        var k = this;
        var j = 0;
        var h = 0;
        var g = false;
        var i = false;
        if (k.s.enableDrag && !k.isTouch && k.doCss()) {
            k.$slide.on("mousedown.lg", function(l) {
                if (!k.$outer.hasClass("lg-zoomed")) {
                    if (d(l.target).hasClass("lg-object") || d(l.target).hasClass("lg-video-play")) {
                        l.preventDefault();
                        if (!k.lgBusy) {
                            k.manageSwipeClass();
                            j = l.pageX;
                            g = true;
                            k.$outer.scrollLeft += 1;
                            k.$outer.scrollLeft -= 1;
                            k.$outer.removeClass("lg-grab").addClass("lg-grabbing");
                            k.$el.trigger("onDragstart.lg")
                        }
                    }
                }
            });
            d(c).on("mousemove.lg", function(l) {
                if (g) {
                    i = true;
                    h = l.pageX;
                    k.touchMove(j, h);
                    k.$el.trigger("onDragmove.lg")
                }
            });
            d(c).on("mouseup.lg", function(l) {
                if (i) {
                    i = false;
                    k.touchEnd(h - j);
                    k.$el.trigger("onDragend.lg")
                } else {
                    if (d(l.target).hasClass("lg-object") || d(l.target).hasClass("lg-video-play")) {
                        k.$el.trigger("onSlideClick.lg")
                    }
                }
                if (g) {
                    g = false;
                    k.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                }
            })
        }
    };
    b.prototype.manageSwipeClass = function() {
        var g = this.index + 1;
        var h = this.index - 1;
        var i = this.$slide.length;
        if (this.s.loop) {
            if (this.index === 0) {
                h = i - 1
            } else {
                if (this.index === i - 1) {
                    g = 0
                }
            }
        }
        this.$slide.removeClass("lg-next-slide lg-prev-slide");
        if (h > -1) {
            this.$slide.eq(h).addClass("lg-prev-slide")
        }
        this.$slide.eq(g).addClass("lg-next-slide")
    };
    b.prototype.mousewheel = function() {
        var g = this;
        g.$outer.on("mousewheel.lg", function(h) {
            if (!h.deltaY) {
                return
            }
            if (h.deltaY > 0) {
                g.goToPrevSlide()
            } else {
                g.goToNextSlide()
            }
            h.preventDefault()
        })
    };
    b.prototype.closeGallery = function() {
        var h = this;
        var g = false;
        this.$outer.find(".lg-close").on("click.lg", function() {
            h.destroy()
        });
        if (h.s.closable) {
            h.$outer.on("mousedown.lg", function(i) {
                if (d(i.target).is(".lg-outer") || d(i.target).is(".lg-item ") || d(i.target).is(".lg-img-wrap")) {
                    g = true
                } else {
                    g = false
                }
            });
            h.$outer.on("mouseup.lg", function(i) {
                if (d(i.target).is(".lg-outer") || d(i.target).is(".lg-item ") || d(i.target).is(".lg-img-wrap") && g) {
                    if (!h.$outer.hasClass("lg-dragging")) {
                        h.destroy()
                    }
                }
            })
        }
    };
    b.prototype.destroy = function(g) {
        var h = this;
        if (!g) {
            h.$el.trigger("onBeforeClose.lg")
        }
        d(c).scrollTop(h.prevScrollTop);
        if (g) {
            if (!h.s.dynamic) {
                this.$items.off("click.lg click.lgcustom")
            }
            d.removeData(h.el, "lightGallery")
        }
        this.$el.off(".lg.tm");
        d.each(d.fn.lightGallery.modules, function(i) {
            if (h.modules[i]) {
                h.modules[i].destroy()
            }
        });
        this.lGalleryOn = false;
        clearTimeout(h.hideBartimeout);
        this.hideBartimeout = false;
        d(c).off(".lg");
        d("body").removeClass("lg-on lg-from-hash");
        if (h.$outer) {
            h.$outer.removeClass("lg-visible")
        }
        d(".lg-backdrop").removeClass("in");
        setTimeout(function() {
            if (h.$outer) {
                h.$outer.remove()
            }
            d(".lg-backdrop").remove();
            if (!g) {
                h.$el.trigger("onCloseAfter.lg")
            }
        }, h.s.backdropDuration + 50)
    };
    d.fn.lightGallery = function(g) {
        return this.each(function() {
            if (!d.data(this, "lightGallery")) {
                d.data(this, "lightGallery", new b(this, g))
            } else {
                try {
                    d(this).data("lightGallery").init()
                } catch (h) {
                    console.error("lightGallery has not initiated properly")
                }
            }
        })
    };
    d.fn.lightGallery.modules = {}
})(jQuery, window, document);
(function(d, c, a, f) {
    var e = {
        scale: 1,
        zoom: true,
        enableZoomAfter: 300
    };
    var b = function(g) {
        this.core = d(g).data("lightGallery");
        this.core.s = d.extend({}, e, this.core.s);
        if (this.core.s.zoom && this.core.doCss()) {
            this.init();
            this.zoomabletimeout = false;
            this.pageX = d(c).width() / 2;
            this.pageY = (d(c).height() / 2) + d(c).scrollTop()
        }
        return this
    };
    b.prototype.init = function() {
        var m = this;
        var h = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
        this.core.$outer.find(".lg-toolbar").append(h);
        m.core.$el.on("onSlideItemLoad.lg.tm.zoom", function(q, p, o) {
            var n = m.core.s.enableZoomAfter + o;
            if (d("body").hasClass("lg-from-hash") && o) {
                n = 0
            } else {
                d("body").removeClass("lg-from-hash")
            }
            m.zoomabletimeout = setTimeout(function() {
                m.core.$slide.eq(p).addClass("lg-zoomable")
            }, n + 30)
        });
        var l = 1;
        var k = function(s) {
            var r = m.core.$outer.find(".lg-current .lg-image");
            var q;
            var p;
            var o = (d(c).width() - r.width()) / 2;
            var u = ((d(c).height() - r.height()) / 2) + d(c).scrollTop();
            q = m.pageX - o;
            p = m.pageY - u;
            var n = (s - 1) * (q);
            var t = (s - 1) * (p);
            r.css("transform", "scale3d(" + s + ", " + s + ", 1)").attr("data-scale", s);
            r.parent().css("transform", "translate3d(-" + n + "px, -" + t + "px, 0)").attr("data-x", n).attr("data-y", t)
        };
        var g = function() {
            if (l > 1) {
                m.core.$outer.addClass("lg-zoomed")
            } else {
                m.resetZoom()
            }
            if (l < 1) {
                l = 1
            }
            k(l)
        };
        var j = function(s, r, p) {
            var o = r.width();
            var n;
            if (m.core.s.dynamic) {
                n = m.core.s.dynamicEl[p].width || r[0].naturalWidth || o
            } else {
                n = m.core.$items.eq(p).attr("data-width") || r[0].naturalWidth || o
            }
            var q;
            if (m.core.$outer.hasClass("lg-zoomed")) {
                l = 1
            } else {
                if (n > o) {
                    q = n / o;
                    l = q || 2
                }
            }
            m.pageX = s.pageX || s.originalEvent.targetTouches[0].pageX;
            m.pageY = s.pageY || s.originalEvent.targetTouches[0].pageY;
            g();
            setTimeout(function() {
                m.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
            }, 10)
        };
        var i = false;
        m.core.$el.on("onAferAppendSlide.lg.tm.zoom", function(p, n) {
            var o = m.core.$slide.eq(n).find(".lg-image");
            o.on("dblclick", function(q) {
                j(q, o, n)
            });
            o.on("touchstart", function(q) {
                if (!i) {
                    i = setTimeout(function() {
                        i = null
                    }, 300)
                } else {
                    clearTimeout(i);
                    i = null;
                    j(q, o, n)
                }
                q.preventDefault()
            })
        });
        d(c).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", function() {
            m.pageX = d(c).width() / 2;
            m.pageY = (d(c).height() / 2) + d(c).scrollTop();
            k(l)
        });
        d("#lg-zoom-out").on("click.lg", function() {
            if (m.core.$outer.find(".lg-current .lg-image").length) {
                l -= m.core.s.scale;
                g()
            }
        });
        d("#lg-zoom-in").on("click.lg", function() {
            if (m.core.$outer.find(".lg-current .lg-image").length) {
                l += m.core.s.scale;
                g()
            }
        });
        m.core.$el.on("onBeforeSlide.lg.tm", function() {
            l = 1;
            m.resetZoom()
        });
        if (!m.core.isTouch) {
            m.zoomDrag()
        }
        if (m.core.isTouch) {
            m.zoomSwipe()
        }
    };
    b.prototype.resetZoom = function() {
        this.core.$outer.removeClass("lg-zoomed");
        this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y");
        this.core.$slide.find(".lg-image").removeAttr("style data-scale");
        this.pageX = d(c).width() / 2;
        this.pageY = (d(c).height() / 2) + d(c).scrollTop()
    };
    b.prototype.zoomSwipe = function() {
        var l = this;
        var j = {};
        var h = {};
        var i = false;
        var g = false;
        var k = false;
        l.core.$slide.on("touchstart.lg", function(n) {
            if (l.core.$outer.hasClass("lg-zoomed")) {
                var m = l.core.$slide.eq(l.core.index).find(".lg-object");
                k = m.outerHeight() * m.attr("data-scale") > l.core.$outer.find(".lg").height();
                g = m.outerWidth() * m.attr("data-scale") > l.core.$outer.find(".lg").width();
                if ((g || k)) {
                    n.preventDefault();
                    j = {
                        x: n.originalEvent.targetTouches[0].pageX,
                        y: n.originalEvent.targetTouches[0].pageY
                    }
                }
            }
        });
        l.core.$slide.on("touchmove.lg", function(p) {
            if (l.core.$outer.hasClass("lg-zoomed")) {
                var m = l.core.$slide.eq(l.core.index).find(".lg-img-wrap");
                var o;
                var n;
                p.preventDefault();
                i = true;
                h = {
                    x: p.originalEvent.targetTouches[0].pageX,
                    y: p.originalEvent.targetTouches[0].pageY
                };
                l.core.$outer.addClass("lg-zoom-dragging");
                if (k) {
                    n = (-Math.abs(m.attr("data-y"))) + (h.y - j.y)
                } else {
                    n = -Math.abs(m.attr("data-y"))
                }
                if (g) {
                    o = (-Math.abs(m.attr("data-x"))) + (h.x - j.x)
                } else {
                    o = -Math.abs(m.attr("data-x"))
                }
                m.css("transform", "translate3d(" + o + "px, " + n + "px, 0)")
            }
        });
        l.core.$slide.on("touchend.lg", function() {
            if (l.core.$outer.hasClass("lg-zoomed")) {
                if (i) {
                    i = false;
                    l.core.$outer.removeClass("lg-zoom-dragging");
                    l.touchendZoom(j, h, g, k)
                }
            }
        })
    };
    b.prototype.zoomDrag = function() {
        var m = this;
        var k = {};
        var i = {};
        var h = false;
        var j = false;
        var g = false;
        var l = false;
        m.core.$slide.on("mousedown.lg.zoom", function(o) {
            var n = m.core.$slide.eq(m.core.index).find(".lg-object");
            l = n.outerHeight() * n.attr("data-scale") > m.core.$outer.find(".lg").height();
            g = n.outerWidth() * n.attr("data-scale") > m.core.$outer.find(".lg").width();
            if (m.core.$outer.hasClass("lg-zoomed")) {
                if (d(o.target).hasClass("lg-object") && (g || l)) {
                    o.preventDefault();
                    k = {
                        x: o.pageX,
                        y: o.pageY
                    };
                    h = true;
                    m.core.$outer.scrollLeft += 1;
                    m.core.$outer.scrollLeft -= 1;
                    m.core.$outer.removeClass("lg-grab").addClass("lg-grabbing")
                }
            }
        });
        d(c).on("mousemove.lg.zoom", function(q) {
            if (h) {
                var n = m.core.$slide.eq(m.core.index).find(".lg-img-wrap");
                var p;
                var o;
                j = true;
                i = {
                    x: q.pageX,
                    y: q.pageY
                };
                m.core.$outer.addClass("lg-zoom-dragging");
                if (l) {
                    o = (-Math.abs(n.attr("data-y"))) + (i.y - k.y)
                } else {
                    o = -Math.abs(n.attr("data-y"))
                }
                if (g) {
                    p = (-Math.abs(n.attr("data-x"))) + (i.x - k.x)
                } else {
                    p = -Math.abs(n.attr("data-x"))
                }
                n.css("transform", "translate3d(" + p + "px, " + o + "px, 0)")
            }
        });
        d(c).on("mouseup.lg.zoom", function(n) {
            if (h) {
                h = false;
                m.core.$outer.removeClass("lg-zoom-dragging");
                if (j && ((k.x !== i.x) || (k.y !== i.y))) {
                    i = {
                        x: n.pageX,
                        y: n.pageY
                    };
                    m.touchendZoom(k, i, g, l)
                }
                j = false
            }
            m.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
        })
    };
    b.prototype.touchendZoom = function(q, j, k, i) {
        var p = this;
        var l = p.core.$slide.eq(p.core.index).find(".lg-img-wrap");
        var n = p.core.$slide.eq(p.core.index).find(".lg-object");
        var s = (-Math.abs(l.attr("data-x"))) + (j.x - q.x);
        var r = (-Math.abs(l.attr("data-y"))) + (j.y - q.y);
        var m = (p.core.$outer.find(".lg").height() - n.outerHeight()) / 2;
        var g = Math.abs((n.outerHeight() * Math.abs(n.attr("data-scale"))) - p.core.$outer.find(".lg").height() + m);
        var o = (p.core.$outer.find(".lg").width() - n.outerWidth()) / 2;
        var h = Math.abs((n.outerWidth() * Math.abs(n.attr("data-scale"))) - p.core.$outer.find(".lg").width() + o);
        if (i) {
            if (r <= -g) {
                r = -g
            } else {
                if (r >= -m) {
                    r = -m
                }
            }
        }
        if (k) {
            if (s <= -h) {
                s = -h
            } else {
                if (s >= -o) {
                    s = -o
                }
            }
        }
        if (i) {
            l.attr("data-y", Math.abs(r))
        } else {
            r = -Math.abs(l.attr("data-y"))
        }
        if (k) {
            l.attr("data-x", Math.abs(s))
        } else {
            s = -Math.abs(l.attr("data-x"))
        }
        l.css("transform", "translate3d(" + s + "px, " + r + "px, 0)")
    };
    b.prototype.destroy = function() {
        var g = this;
        g.core.$el.off(".lg.zoom");
        d(c).off(".lg.zoom");
        g.core.$slide.off(".lg.zoom");
        g.core.$el.off(".lg.tm.zoom");
        g.resetZoom();
        clearTimeout(g.zoomabletimeout);
        g.zoomabletimeout = false
    };
    d.fn.lightGallery.modules.zoom = b
})(jQuery, window, document);
(function(i, l, n, g) {
    var j, b, k;
    j = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };
    b = {
        isTouch: false,
        isScrolling: false,
        isSwiping: false,
        direction: false,
        inMotion: false
    };
    k = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };

    function c(q, e) {
        this.settings = null;
        this.options = i.extend({}, c.Defaults, e);
        this.$element = i(q);
        this.drag = i.extend({}, j);
        this.state = i.extend({}, b);
        this.e = i.extend({}, k);
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._invalidated = {};
        this._pipe = [];
        i.each(c.Plugins, i.proxy(function(r, s) {
            this._plugins[r[0].toLowerCase() + r.slice(1)] = new s(this)
        }, this));
        i.each(c.Pipe, i.proxy(function(r, s) {
            this._pipe.push({
                filter: s.filter,
                run: i.proxy(s.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    c.Defaults = {
        items: 3,
        loop: false,
        center: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: l,
        responsiveClass: false,
        fallbackEasing: "swing",
        info: false,
        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    };
    c.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    c.Plugins = {};
    c.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = this._clones,
                q = this.$stage.children(".cloned");
            if (q.length !== e.length || (!this.settings.loop && e.length > 0)) {
                this.$stage.children(".cloned").remove();
                this._clones = []
            }
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var q, t, r = this._clones,
                e = this._items,
                s = this.settings.loop ? r.length - Math.max(this.settings.items * 2, 4) : 0;
            for (q = 0, t = Math.abs(s / 2); q < t; q++) {
                if (s > 0) {
                    this.$stage.children().eq(e.length + r.length - 1).remove();
                    r.pop();
                    this.$stage.children().eq(0).remove();
                    r.pop()
                } else {
                    r.push(r.length / 2);
                    this.$stage.append(e[r[r.length - 1]].clone().addClass("cloned"));
                    r.push(e.length - 1 - (r.length - 1) / 2);
                    this.$stage.prepend(e[r[r.length - 1]].clone().addClass("cloned"))
                }
            }
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var r = (this.settings.rtl ? 1 : -1),
                q = (this.width() / this.settings.items).toFixed(3),
                u = 0,
                t, e, s;
            this._coordinates = [];
            for (e = 0, s = this._clones.length + this._items.length; e < s; e++) {
                t = this._mergers[this.relative(e)];
                t = (this.settings.mergeFit && Math.min(t, this.settings.items)) || t;
                u += (this.settings.autoWidth ? this._items[this.relative(e)].width() + this.settings.margin : q * t) * r;
                this._coordinates.push(u)
            }
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var q, s, r = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            this.$stage.css(e);
            e = {
                width: this.settings.autoWidth ? "auto" : r - this.settings.margin
            };
            e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin;
            if (!this.settings.autoWidth && i.grep(this._mergers, function(t) {
                    return t > 1
                }).length > 0) {
                for (q = 0, s = this._coordinates.length; q < s; q++) {
                    e.width = Math.abs(this._coordinates[q]) - Math.abs(this._coordinates[q - 1] || 0) - this.settings.margin;
                    this.$stage.children().eq(q).css(e)
                }
            } else {
                this.$stage.children().css(e)
            }
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(e) {
            e.current && this.reset(this.$stage.children().index(e.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var u = this.settings.rtl ? 1 : -1,
                v = this.settings.stagePadding * 2,
                q = this.coordinates(this.current()) + v,
                r = q + this.width() * u,
                x, w, t = [],
                s, e;
            for (s = 0, e = this._coordinates.length; s < e; s++) {
                x = this._coordinates[s - 1] || 0;
                w = Math.abs(this._coordinates[s]) + v * u;
                if ((this.op(x, "<=", q) && (this.op(x, ">", r))) || (this.op(w, "<", q) && this.op(w, ">", r))) {
                    t.push(s)
                }
            }
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(":eq(" + t.join("), :eq(") + ")").addClass(this.settings.activeClass);
            if (this.settings.center) {
                this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass);
                this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)
            }
        }
    }];
    c.prototype.initialize = function() {
        this.trigger("initialize");
        this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl);
        this.browserSupport();
        if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
            var r, q, e;
            r = this.$element.find("img");
            q = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : g;
            e = this.$element.children(q).width();
            if (r.length && e <= 0) {
                this.preloadAutoWidthImages(r);
                return false
            }
        }
        this.$element.addClass("owl-loading");
        this.$stage = i("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this._width = this.$element.width();
        this.refresh();
        this.$element.removeClass("owl-loading").addClass("owl-loaded");
        this.eventsCall();
        this.internalEvents();
        this.addTriggerableEvents();
        this.trigger("initialized")
    };
    c.prototype.setup = function() {
        var e = this.viewport(),
            r = this.options.responsive,
            q = -1,
            s = null;
        if (!r) {
            s = i.extend({}, this.options)
        } else {
            i.each(r, function(t) {
                if (t <= e && t > q) {
                    q = Number(t)
                }
            });
            s = i.extend({}, this.options, r[q]);
            delete s.responsive;
            if (s.responsiveClass) {
                this.$element.attr("class", function(t, u) {
                    return u.replace(/\b owl-responsive-\S+/g, "")
                }).addClass("owl-responsive-" + q)
            }
        }
        if (this.settings === null || this._breakpoint !== q) {
            this.trigger("change", {
                property: {
                    name: "settings",
                    value: s
                }
            });
            this._breakpoint = q;
            this.settings = s;
            this.invalidate("settings");
            this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }
    };
    c.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center);
        if (this.settings.loop && this._items.length < this.settings.items) {
            this.settings.loop = false
        }
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false
        }
    };
    c.prototype.prepare = function(q) {
        var e = this.trigger("prepare", {
            content: q
        });
        if (!e.data) {
            e.data = i("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(q)
        }
        this.trigger("prepared", {
            content: e.data
        });
        return e.data
    };
    c.prototype.update = function() {
        var q = 0,
            s = this._pipe.length,
            r = i.proxy(function(t) {
                return this[t]
            }, this._invalidated),
            e = {};
        while (q < s) {
            if (this._invalidated.all || i.grep(this._pipe[q].filter, r).length > 0) {
                this._pipe[q].run(e)
            }
            q++
        }
        this._invalidated = {}
    };
    c.prototype.width = function(e) {
        e = e || c.Width.Default;
        switch (e) {
            case c.Width.Inner:
            case c.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin
        }
    };
    c.prototype.refresh = function() {
        if (this._items.length === 0) {
            return false
        }
        var e = new Date().getTime();
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$stage.addClass("owl-refresh");
        this.update();
        this.$stage.removeClass("owl-refresh");
        this.state.orientation = l.orientation;
        this.watchVisibility();
        this.trigger("refreshed")
    };
    c.prototype.eventsCall = function() {
        this.e._onDragStart = i.proxy(function(q) {
            this.onDragStart(q)
        }, this);
        this.e._onDragMove = i.proxy(function(q) {
            this.onDragMove(q)
        }, this);
        this.e._onDragEnd = i.proxy(function(q) {
            this.onDragEnd(q)
        }, this);
        this.e._onResize = i.proxy(function(q) {
            this.onResize(q)
        }, this);
        this.e._transitionEnd = i.proxy(function(q) {
            this.transitionEnd(q)
        }, this);
        this.e._preventClick = i.proxy(function(q) {
            this.preventClick(q)
        }, this)
    };
    c.prototype.onThrottledResize = function() {
        l.clearTimeout(this.resizeTimer);
        this.resizeTimer = l.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    };
    c.prototype.onResize = function() {
        if (!this._items.length) {
            return false
        }
        if (this._width === this.$element.width()) {
            return false
        }
        if (this.trigger("resize").isDefaultPrevented()) {
            return false
        }
        this._width = this.$element.width();
        this.invalidate("width");
        this.refresh();
        this.trigger("resized")
    };
    c.prototype.eventsRouter = function(q) {
        var e = q.type;
        if (e === "mousedown" || e === "touchstart") {
            this.onDragStart(q)
        } else {
            if (e === "mousemove" || e === "touchmove") {
                this.onDragMove(q)
            } else {
                if (e === "mouseup" || e === "touchend") {
                    this.onDragEnd(q)
                } else {
                    if (e === "touchcancel") {
                        this.onDragEnd(q)
                    }
                }
            }
        }
    };
    c.prototype.internalEvents = function() {
        var e = m(),
            q = p();
        if (this.settings.mouseDrag) {
            this.$stage.on("mousedown", i.proxy(function(r) {
                this.eventsRouter(r)
            }, this));
            this.$stage.on("dragstart", function() {
                return false
            });
            this.$stage.get(0).onselectstart = function() {
                return false
            }
        } else {
            this.$element.addClass("owl-text-select-on")
        }
        if (this.settings.touchDrag && !q) {
            this.$stage.on("touchstart touchcancel", i.proxy(function(r) {
                this.eventsRouter(r)
            }, this))
        }
        if (this.transitionEndVendor) {
            this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false)
        }
        if (this.settings.responsive !== false) {
            this.on(l, "resize", i.proxy(this.onThrottledResize, this))
        }
    };
    c.prototype.onDragStart = function(t) {
        var s, u, r, q, e;
        s = t.originalEvent || t || l.event;
        if (s.which === 3 || this.state.isTouch) {
            return false
        }
        if (s.type === "mousedown") {
            this.$stage.addClass("owl-grab")
        }
        this.trigger("drag");
        this.drag.startTime = new Date().getTime();
        this.speed(0);
        this.state.isTouch = true;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        this.drag.distance = 0;
        r = d(s).x;
        q = d(s).y;
        this.drag.offsetX = this.$stage.position().left;
        this.drag.offsetY = this.$stage.position().top;
        if (this.settings.rtl) {
            this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin
        }
        if (this.state.inMotion && this.support3d) {
            e = this.getTransformProperty();
            this.drag.offsetX = e;
            this.animate(e);
            this.state.inMotion = true
        } else {
            if (this.state.inMotion && !this.support3d) {
                this.state.inMotion = false;
                return false
            }
        }
        this.drag.startX = r - this.drag.offsetX;
        this.drag.startY = q - this.drag.offsetY;
        this.drag.start = r - this.drag.startX;
        this.drag.targetEl = s.target || s.srcElement;
        this.drag.updatedX = this.drag.start;
        if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
            this.drag.targetEl.draggable = false
        }
        i(n).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", i.proxy(function(v) {
            this.eventsRouter(v)
        }, this))
    };
    c.prototype.onDragMove = function(s) {
        var r, w, q, e, u, v, t;
        if (!this.state.isTouch) {
            return
        }
        if (this.state.isScrolling) {
            return
        }
        r = s.originalEvent || s || l.event;
        q = d(r).x;
        e = d(r).y;
        this.drag.currentX = q - this.drag.startX;
        this.drag.currentY = e - this.drag.startY;
        this.drag.distance = this.drag.currentX - this.drag.offsetX;
        if (this.drag.distance < 0) {
            this.state.direction = this.settings.rtl ? "right" : "left"
        } else {
            if (this.drag.distance > 0) {
                this.state.direction = this.settings.rtl ? "left" : "right"
            }
        }
        if (this.settings.loop) {
            if (this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && this.state.direction === "right") {
                this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)
            } else {
                if (this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && this.state.direction === "left") {
                    this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)
                }
            }
        } else {
            u = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            v = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            t = this.settings.pullDrag ? this.drag.distance / 5 : 0;
            this.drag.currentX = Math.max(Math.min(this.drag.currentX, u + t), v + t)
        }
        if ((this.drag.distance > 8 || this.drag.distance < -8)) {
            if (r.preventDefault !== g) {
                r.preventDefault()
            } else {
                r.returnValue = false
            }
            this.state.isSwiping = true
        }
        this.drag.updatedX = this.drag.currentX;
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
            this.state.isScrolling = true;
            this.drag.updatedX = this.drag.start
        }
        this.animate(this.drag.updatedX)
    };
    c.prototype.onDragEnd = function(s) {
        var q, e, r;
        if (!this.state.isTouch) {
            return
        }
        if (s.type === "mouseup") {
            this.$stage.removeClass("owl-grab")
        }
        this.trigger("dragged");
        this.drag.targetEl.removeAttribute("draggable");
        this.state.isTouch = false;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        if (this.drag.distance === 0 && this.state.inMotion !== true) {
            this.state.inMotion = false;
            return false
        }
        this.drag.endTime = new Date().getTime();
        q = this.drag.endTime - this.drag.startTime;
        e = Math.abs(this.drag.distance);
        if (e > 3 || q > 300) {
            this.removeClick(this.drag.targetEl)
        }
        r = this.closest(this.drag.updatedX);
        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        this.current(r);
        this.invalidate("position");
        this.update();
        if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(r)) {
            this.transitionEnd()
        }
        this.drag.distance = 0;
        i(n).off(".owl.dragEvents")
    };
    c.prototype.removeClick = function(e) {
        this.drag.targetEl = e;
        i(e).on("click.preventClick", this.e._preventClick);
        l.setTimeout(function() {
            i(e).off("click.preventClick")
        }, 300)
    };
    c.prototype.preventClick = function(e) {
        if (e.preventDefault) {
            e.preventDefault()
        } else {
            e.returnValue = false
        }
        if (e.stopPropagation) {
            e.stopPropagation()
        }
        i(e.target).off("click.preventClick")
    };
    c.prototype.getTransformProperty = function() {
        var e, q;
        e = l.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform");
        e = e.replace(/matrix(3d)?\(|\)/g, "").split(",");
        q = e.length === 16;
        return q !== true ? e[4] : e[12]
    };
    c.prototype.closest = function(t) {
        var e = -1,
            r = 30,
            q = this.width(),
            s = this.coordinates();
        if (!this.settings.freeDrag) {
            i.each(s, i.proxy(function(u, v) {
                if (t > v - r && t < v + r) {
                    e = u
                } else {
                    if (this.op(t, "<", v) && this.op(t, ">", s[u + 1] || v - q)) {
                        e = this.state.direction === "left" ? u + 1 : u
                    }
                }
                return e === -1
            }, this))
        }
        if (!this.settings.loop) {
            if (this.op(t, ">", s[this.minimum()])) {
                e = t = this.minimum()
            } else {
                if (this.op(t, "<", s[this.maximum()])) {
                    e = t = this.maximum()
                }
            }
        }
        return e
    };
    c.prototype.animate = function(e) {
        this.trigger("translate");
        this.state.inMotion = this.speed() > 0;
        if (this.support3d) {
            this.$stage.css({
                transform: "translate3d(" + e + "px,0px, 0px)",
                transition: (this.speed() / 1000) + "s"
            })
        } else {
            if (this.state.isTouch) {
                this.$stage.css({
                    left: e + "px"
                })
            } else {
                this.$stage.animate({
                    left: e
                }, this.speed() / 1000, this.settings.fallbackEasing, i.proxy(function() {
                    if (this.state.inMotion) {
                        this.transitionEnd()
                    }
                }, this))
            }
        }
    };
    c.prototype.current = function(e) {
        if (e === g) {
            return this._current
        }
        if (this._items.length === 0) {
            return g
        }
        e = this.normalize(e);
        if (this._current !== e) {
            var q = this.trigger("change", {
                property: {
                    name: "position",
                    value: e
                }
            });
            if (q.data !== g) {
                e = this.normalize(q.data)
            }
            this._current = e;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    };
    c.prototype.invalidate = function(e) {
        this._invalidated[e] = true
    };
    c.prototype.reset = function(e) {
        e = this.normalize(e);
        if (e === g) {
            return
        }
        this._speed = 0;
        this._current = e;
        this.suppress(["translate", "translated"]);
        this.animate(this.coordinates(e));
        this.release(["translate", "translated"])
    };
    c.prototype.normalize = function(e, q) {
        var r = (q ? this._items.length : this._items.length + this._clones.length);
        if (!i.isNumeric(e) || r < 1) {
            return g
        }
        if (this._clones.length) {
            e = ((e % r) + r) % r
        } else {
            e = Math.max(this.minimum(q), Math.min(this.maximum(q), e))
        }
        return e
    };
    c.prototype.relative = function(e) {
        e = this.normalize(e);
        e = e - this._clones.length / 2;
        return this.normalize(e, true)
    };
    c.prototype.maximum = function(s) {
        var t, r, e = 0,
            u, q = this.settings;
        if (s) {
            return this._items.length - 1
        }
        if (!q.loop && q.center) {
            t = this._items.length - 1
        } else {
            if (!q.loop && !q.center) {
                t = this._items.length - q.items
            } else {
                if (q.loop || q.center) {
                    t = this._items.length + q.items
                } else {
                    if (q.autoWidth || q.merge) {
                        revert = q.rtl ? 1 : -1;
                        r = this.$stage.width() - this.$element.width();
                        while (u = this.coordinates(e)) {
                            if (u * revert >= r) {
                                break
                            }
                            t = ++e
                        }
                    } else {
                        throw "Can not detect maximum absolute position."
                    }
                }
            }
        }
        return t
    };
    c.prototype.minimum = function(e) {
        if (e) {
            return 0
        }
        return this._clones.length / 2
    };
    c.prototype.items = function(e) {
        if (e === g) {
            return this._items.slice()
        }
        e = this.normalize(e, true);
        return this._items[e]
    };
    c.prototype.mergers = function(e) {
        if (e === g) {
            return this._mergers.slice()
        }
        e = this.normalize(e, true);
        return this._mergers[e]
    };
    c.prototype.clones = function(e) {
        var q = this._clones.length / 2,
            s = q + this._items.length,
            r = function(t) {
                return t % 2 === 0 ? s + t / 2 : q - (t + 1) / 2
            };
        if (e === g) {
            return i.map(this._clones, function(t, u) {
                return r(u)
            })
        }
        return i.map(this._clones, function(t, u) {
            return t === e ? r(u) : null
        })
    };
    c.prototype.speed = function(e) {
        if (e !== g) {
            this._speed = e
        }
        return this._speed
    };
    c.prototype.coordinates = function(e) {
        var q = null;
        if (e === g) {
            return i.map(this._coordinates, i.proxy(function(s, r) {
                return this.coordinates(r)
            }, this))
        }
        if (this.settings.center) {
            q = this._coordinates[e];
            q += (this.width() - q + (this._coordinates[e - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)
        } else {
            q = this._coordinates[e - 1] || 0
        }
        return q
    };
    c.prototype.duration = function(r, q, e) {
        return Math.min(Math.max(Math.abs(q - r), 1), 6) * Math.abs((e || this.settings.smartSpeed))
    };
    c.prototype.to = function(e, t) {
        if (this.settings.loop) {
            var w = e - this.relative(this.current()),
                q = this.current(),
                s = this.current(),
                v = this.current() + w,
                u = s - v < 0 ? true : false,
                r = this._clones.length + this._items.length;
            if (v < this.settings.items && u === false) {
                q = s + this._items.length;
                this.reset(q)
            } else {
                if (v >= r - this.settings.items && u === true) {
                    q = s - this._items.length;
                    this.reset(q)
                }
            }
            l.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = l.setTimeout(i.proxy(function() {
                this.speed(this.duration(this.current(), q + w, t));
                this.current(q + w);
                this.update()
            }, this), 30)
        } else {
            this.speed(this.duration(this.current(), e, t));
            this.current(e);
            this.update()
        }
    };
    c.prototype.next = function(e) {
        e = e || false;
        this.to(this.relative(this.current()) + 1, e)
    };
    c.prototype.prev = function(e) {
        e = e || false;
        this.to(this.relative(this.current()) - 1, e)
    };
    c.prototype.transitionEnd = function(e) {
        if (e !== g) {
            e.stopPropagation();
            if ((e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0)) {
                return false
            }
        }
        this.state.inMotion = false;
        this.trigger("translated")
    };
    c.prototype.viewport = function() {
        var e;
        if (this.options.responsiveBaseElement !== l) {
            e = i(this.options.responsiveBaseElement).width()
        } else {
            if (l.innerWidth) {
                e = l.innerWidth
            } else {
                if (n.documentElement && n.documentElement.clientWidth) {
                    e = n.documentElement.clientWidth
                } else {
                    throw "Can not detect viewport width."
                }
            }
        }
        return e
    };
    c.prototype.replace = function(e) {
        this.$stage.empty();
        this._items = [];
        if (e) {
            e = (e instanceof jQuery) ? e : i(e)
        }
        if (this.settings.nestedItemSelector) {
            e = e.find("." + this.settings.nestedItemSelector)
        }
        e.filter(function() {
            return this.nodeType === 1
        }).each(i.proxy(function(q, r) {
            r = this.prepare(r);
            this.$stage.append(r);
            this._items.push(r);
            this._mergers.push(r.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        }, this));
        this.reset(i.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    c.prototype.add = function(q, e) {
        e = e === g ? this._items.length : this.normalize(e, true);
        this.trigger("add", {
            content: q,
            position: e
        });
        if (this._items.length === 0 || e === this._items.length) {
            this.$stage.append(q);
            this._items.push(q);
            this._mergers.push(q.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        } else {
            this._items[e].before(q);
            this._items.splice(e, 0, q);
            this._mergers.splice(e, 0, q.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        }
        this.invalidate("items");
        this.trigger("added", {
            content: q,
            position: e
        })
    };
    c.prototype.remove = function(e) {
        e = this.normalize(e, true);
        if (e === g) {
            return
        }
        this.trigger("remove", {
            content: this._items[e],
            position: e
        });
        this._items[e].remove();
        this._items.splice(e, 1);
        this._mergers.splice(e, 1);
        this.invalidate("items");
        this.trigger("removed", {
            content: null,
            position: e
        })
    };
    c.prototype.addTriggerableEvents = function() {
        var e = i.proxy(function(r, q) {
            return i.proxy(function(s) {
                if (s.relatedTarget !== this) {
                    this.suppress([q]);
                    r.apply(this, [].slice.call(arguments, 1));
                    this.release([q])
                }
            }, this)
        }, this);
        i.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, i.proxy(function(q, r) {
            this.$element.on(q + ".owl.carousel", e(r, q + ".owl.carousel"))
        }, this))
    };
    c.prototype.watchVisibility = function() {
        if (!q(this.$element.get(0))) {
            this.$element.addClass("owl-hidden");
            l.clearInterval(this.e._checkVisibile);
            this.e._checkVisibile = l.setInterval(i.proxy(e, this), 500)
        }

        function q(r) {
            return r.offsetWidth > 0 && r.offsetHeight > 0
        }

        function e() {
            if (q(this.$element.get(0))) {
                this.$element.removeClass("owl-hidden");
                this.refresh();
                l.clearInterval(this.e._checkVisibile)
            }
        }
    };
    c.prototype.preloadAutoWidthImages = function(t) {
        var q, s, r, e;
        q = 0;
        s = this;
        t.each(function(u, v) {
            r = i(v);
            e = new Image();
            e.onload = function() {
                q++;
                r.attr("src", e.src);
                r.css("opacity", 1);
                if (q >= t.length) {
                    s.state.imagesLoaded = true;
                    s.initialize()
                }
            };
            e.src = r.attr("src") || r.attr("data-src") || r.attr("data-src-retina")
        })
    };
    c.prototype.destroy = function() {
        if (this.$element.hasClass(this.settings.themeClass)) {
            this.$element.removeClass(this.settings.themeClass)
        }
        if (this.settings.responsive !== false) {
            i(l).off("resize.owl.carousel")
        }
        if (this.transitionEndVendor) {
            this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd)
        }
        for (var e in this._plugins) {
            this._plugins[e].destroy()
        }
        if (this.settings.mouseDrag || this.settings.touchDrag) {
            this.$stage.off("mousedown touchstart touchcancel");
            i(n).off(".owl.dragEvents");
            this.$stage.get(0).onselectstart = function() {};
            this.$stage.off("dragstart", function() {
                return false
            })
        }
        this.$element.off(".owl");
        this.$stage.children(".cloned").remove();
        this.e = null;
        this.$element.removeData("owlCarousel");
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap()
    };
    c.prototype.op = function(q, s, e) {
        var r = this.settings.rtl;
        switch (s) {
            case "<":
                return r ? q > e : q < e;
            case ">":
                return r ? q < e : q > e;
            case ">=":
                return r ? q <= e : q >= e;
            case "<=":
                return r ? q >= e : q <= e;
            default:
                break
        }
    };
    c.prototype.on = function(q, r, s, e) {
        if (q.addEventListener) {
            q.addEventListener(r, s, e)
        } else {
            if (q.attachEvent) {
                q.attachEvent("on" + r, s)
            }
        }
    };
    c.prototype.off = function(q, r, s, e) {
        if (q.removeEventListener) {
            q.removeEventListener(r, s, e)
        } else {
            if (q.detachEvent) {
                q.detachEvent("on" + r, s)
            }
        }
    };
    c.prototype.trigger = function(q, u, s) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = i.camelCase(i.grep(["on", q, s], function(w) {
                return w
            }).join("-").toLowerCase()),
            t = i.Event([q, "owl", s || "carousel"].join(".").toLowerCase(), i.extend({
                relatedTarget: this
            }, e, u));
        if (!this._supress[q]) {
            i.each(this._plugins, function(v, w) {
                if (w.onTrigger) {
                    w.onTrigger(t)
                }
            });
            this.$element.trigger(t);
            if (this.settings && typeof this.settings[r] === "function") {
                this.settings[r].apply(this, t)
            }
        }
        return t
    };
    c.prototype.suppress = function(e) {
        i.each(e, i.proxy(function(q, r) {
            this._supress[r] = true
        }, this))
    };
    c.prototype.release = function(e) {
        i.each(e, i.proxy(function(q, r) {
            delete this._supress[r]
        }, this))
    };
    c.prototype.browserSupport = function() {
        this.support3d = o();
        if (this.support3d) {
            this.transformVendor = f();
            var e = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = e[h()];
            this.vendorName = this.transformVendor.replace(/Transform/i, "");
            this.vendorName = this.vendorName !== "" ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = l.orientation
    };

    function d(e) {
        if (e.touches !== g) {
            return {
                x: e.touches[0].pageX,
                y: e.touches[0].pageY
            }
        }
        if (e.touches === g) {
            if (e.pageX !== g) {
                return {
                    x: e.pageX,
                    y: e.pageY
                }
            }
            if (e.pageX === g) {
                return {
                    x: e.clientX,
                    y: e.clientY
                }
            }
        }
    }

    function a(u) {
        var t, q, e = n.createElement("div"),
            r = u;
        for (t in r) {
            q = r[t];
            if (typeof e.style[q] !== "undefined") {
                e = null;
                return [q, t]
            }
        }
        return [false]
    }

    function h() {
        return a(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function f() {
        return a(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function o() {
        return a(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function m() {
        return "ontouchstart" in l || !!(navigator.msMaxTouchPoints)
    }

    function p() {
        return l.navigator.msPointerEnabled
    }
    i.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (!i(this).data("owlCarousel")) {
                i(this).data("owlCarousel", new c(this, e))
            }
        })
    };
    i.fn.owlCarousel.Constructor = c
})(window.Zepto || window.jQuery, window, document);
(function(d, c, a, e) {
    var b = function(f) {
        this._core = f;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel": d.proxy(function(m) {
                if (!m.namespace) {
                    return
                }
                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return
                }
                if ((m.property && m.property.name == "position") || m.type == "initialized") {
                    var j = this._core.settings,
                        o = (j.center && Math.ceil(j.items / 2) || j.items),
                        h = ((j.center && o * -1) || 0),
                        g = ((m.property && m.property.value) || this._core.current()) + h,
                        l = this._core.clones().length,
                        k = d.proxy(function(p, n) {
                            this.load(n)
                        }, this);
                    while (h++ < o) {
                        this.load(l / 2 + this._core.relative(g));
                        l && d.each(this._core.clones(this._core.relative(g++)), k)
                    }
                }
            }, this)
        };
        this._core.options = d.extend({}, b.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        lazyLoad: false
    };
    b.prototype.load = function(f) {
        var g = this._core.$stage.children().eq(f),
            h = g && g.find(".owl-lazy");
        if (!h || d.inArray(g.get(0), this._loaded) > -1) {
            return
        }
        h.each(d.proxy(function(k, l) {
            var i = d(l),
                m, j = (c.devicePixelRatio > 1 && i.attr("data-src-retina")) || i.attr("data-src");
            this._core.trigger("load", {
                element: i,
                url: j
            }, "lazy");
            if (i.is("img")) {
                i.one("load.owl.lazy", d.proxy(function() {
                    i.css("opacity", 1);
                    this._core.trigger("loaded", {
                        element: i,
                        url: j
                    }, "lazy")
                }, this)).attr("src", j)
            } else {
                m = new Image();
                m.onload = d.proxy(function() {
                    i.css({
                        "background-image": "url(" + j + ")",
                        opacity: "1"
                    });
                    this._core.trigger("loaded", {
                        element: i,
                        url: j
                    }, "lazy")
                }, this);
                m.src = j
            }
        }, this));
        this._loaded.push(g.get(0))
    };
    b.prototype.destroy = function() {
        var f, g;
        for (f in this.handlers) {
            this._core.$element.off(f, this.handlers[f])
        }
        for (g in Object.getOwnPropertyNames(this)) {
            typeof this[g] != "function" && (this[g] = null)
        }
    };
    d.fn.owlCarousel.Constructor.Plugins.Lazy = b
})(window.Zepto || window.jQuery, window, document);
(function(c, b, a, d) {
    var e = function(f) {
        this._core = f;
        this._handlers = {
            "initialized.owl.carousel": c.proxy(function() {
                if (this._core.settings.autoHeight) {
                    this.update()
                }
            }, this),
            "changed.owl.carousel": c.proxy(function(g) {
                if (this._core.settings.autoHeight && g.property.name == "position") {
                    this.update()
                }
            }, this),
            "loaded.owl.lazy": c.proxy(function(g) {
                if (this._core.settings.autoHeight && g.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current())) {
                    this.update()
                }
            }, this)
        };
        this._core.options = c.extend({}, e.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: false,
        autoHeightClass: "owl-height"
    };
    e.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    };
    e.prototype.destroy = function() {
        var f, g;
        for (f in this._handlers) {
            this._core.$element.off(f, this._handlers[f])
        }
        for (g in Object.getOwnPropertyNames(this)) {
            typeof this[g] != "function" && (this[g] = null)
        }
    };
    c.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
})(window.Zepto || window.jQuery, window, document);
(function(d, c, b, e) {
    var a = function(f) {
        this.core = f;
        this.core.options = d.extend({}, a.Defaults, this.core.options);
        this.swapping = true;
        this.previous = e;
        this.next = e;
        this.handlers = {
            "change.owl.carousel": d.proxy(function(g) {
                if (g.property.name == "position") {
                    this.previous = this.core.current();
                    this.next = g.property.value
                }
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": d.proxy(function(g) {
                this.swapping = g.type == "translated"
            }, this),
            "translate.owl.carousel": d.proxy(function(g) {
                if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap()
                }
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    a.Defaults = {
        animateOut: false,
        animateIn: false
    };
    a.prototype.swap = function() {
        if (this.core.settings.items !== 1 || !this.core.support3d) {
            return
        }
        this.core.speed(0);
        var k, f = d.proxy(this.clear, this),
            j = this.core.$stage.children().eq(this.previous),
            i = this.core.$stage.children().eq(this.next),
            g = this.core.settings.animateIn,
            h = this.core.settings.animateOut;
        if (this.core.current() === this.previous) {
            return
        }
        if (h) {
            k = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            j.css({
                left: k + "px"
            }).addClass("animated owl-animated-out").addClass(h).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", f)
        }
        if (g) {
            i.addClass("animated owl-animated-in").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", f)
        }
    };
    a.prototype.clear = function(f) {
        d(f.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.transitionEnd()
    };
    a.prototype.destroy = function() {
        var f, g;
        for (f in this.handlers) {
            this.core.$element.off(f, this.handlers[f])
        }
        for (g in Object.getOwnPropertyNames(this)) {
            typeof this[g] != "function" && (this[g] = null)
        }
    };
    d.fn.owlCarousel.Constructor.Plugins.Animate = a
})(window.Zepto || window.jQuery, window, document);
(function(c, b, a, e) {
    var d = function(f) {
        this.core = f;
        this.core.options = c.extend({}, d.Defaults, this.core.options);
        this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": c.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": c.proxy(function(i, g, h) {
                this.play(g, h)
            }, this),
            "stop.owl.autoplay": c.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": c.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.pause()
                }
            }, this),
            "mouseleave.owl.autoplay": c.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.autoplay()
                }
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };
    d.prototype.autoplay = function() {
        if (this.core.settings.autoplay && !this.core.state.videoPlay) {
            b.clearInterval(this.interval);
            this.interval = b.setInterval(c.proxy(function() {
                this.play()
            }, this), this.core.settings.autoplayTimeout)
        } else {
            b.clearInterval(this.interval)
        }
    };
    d.prototype.play = function(g, f) {
        if (a.hidden === true) {
            return
        }
        if (this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion) {
            return
        }
        if (this.core.settings.autoplay === false) {
            b.clearInterval(this.interval);
            return
        }
        this.core.next(this.core.settings.autoplaySpeed)
    };
    d.prototype.stop = function() {
        b.clearInterval(this.interval)
    };
    d.prototype.pause = function() {
        b.clearInterval(this.interval)
    };
    d.prototype.destroy = function() {
        var f, g;
        b.clearInterval(this.interval);
        for (f in this.handlers) {
            this.core.$element.off(f, this.handlers[f])
        }
        for (g in Object.getOwnPropertyNames(this)) {
            typeof this[g] != "function" && (this[g] = null)
        }
    };
    c.fn.owlCarousel.Constructor.Plugins.autoplay = d
})(window.Zepto || window.jQuery, window, document);
(function(d, b, a, e) {
    var c = function(f) {
        this._core = f;
        this._initialized = false;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": d.proxy(function(g) {
                if (this._core.settings.dotsData) {
                    this._templates.push(d(g.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
                }
            }, this),
            "add.owl.carousel": d.proxy(function(g) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(g.position, 0, d(g.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot"))
                }
            }, this),
            "remove.owl.carousel prepared.owl.carousel": d.proxy(function(g) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(g.position, 1)
                }
            }, this),
            "change.owl.carousel": d.proxy(function(i) {
                if (i.property.name == "position") {
                    if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var h = this._core.current(),
                            j = this._core.maximum(),
                            g = this._core.minimum();
                        i.data = i.property.value > j ? h >= j ? g : j : i.property.value < g ? j : i.property.value
                    }
                }
            }, this),
            "changed.owl.carousel": d.proxy(function(g) {
                if (g.property.name == "position") {
                    this.draw()
                }
            }, this),
            "refreshed.owl.carousel": d.proxy(function() {
                if (!this._initialized) {
                    this.initialize();
                    this._initialized = true
                }
                this._core.trigger("refresh", null, "navigation");
                this.update();
                this.draw();
                this._core.trigger("refreshed", null, "navigation")
            }, this)
        };
        this._core.options = d.extend({}, c.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    c.Defaults = {
        nav: false,
        navRewind: true,
        navText: ["prev", "next"],
        navSpeed: false,
        navElement: "div",
        navContainer: false,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: true,
        dotsEach: false,
        dotData: false,
        dotsSpeed: false,
        dotsContainer: false,
        controlsClass: "owl-controls"
    };
    c.prototype.initialize = function() {
        var h, g, f = this._core.settings;
        if (!f.dotsData) {
            this._templates = [d("<div>").addClass(f.dotClass).append(d("<span>")).prop("outerHTML")]
        }
        if (!f.navContainer || !f.dotsContainer) {
            this._controls.$container = d("<div>").addClass(f.controlsClass).appendTo(this.$element)
        }
        this._controls.$indicators = f.dotsContainer ? d(f.dotsContainer) : d("<div>").hide().addClass(f.dotsClass).appendTo(this._controls.$container);
        this._controls.$indicators.on("click", "div", d.proxy(function(j) {
            var i = d(j.target).parent().is(this._controls.$indicators) ? d(j.target).index() : d(j.target).parent().index();
            j.preventDefault();
            this.to(i, f.dotsSpeed)
        }, this));
        h = f.navContainer ? d(f.navContainer) : d("<div>").addClass(f.navContainerClass).prependTo(this._controls.$container);
        this._controls.$next = d("<" + f.navElement + ">");
        this._controls.$previous = this._controls.$next.clone();
        this._controls.$previous.addClass(f.navClass[0]).html(f.navText[0]).hide().prependTo(h).on("click", d.proxy(function(i) {
            this.prev(f.navSpeed)
        }, this));
        this._controls.$next.addClass(f.navClass[1]).html(f.navText[1]).hide().appendTo(h).on("click", d.proxy(function(i) {
            this.next(f.navSpeed)
        }, this));
        for (g in this._overrides) {
            this._core[g] = d.proxy(this[g], this)
        }
    };
    c.prototype.destroy = function() {
        var g, i, h, f;
        for (g in this._handlers) {
            this.$element.off(g, this._handlers[g])
        }
        for (i in this._controls) {
            this._controls[i].remove()
        }
        for (f in this.overides) {
            this._core[f] = this._overrides[f]
        }
        for (h in Object.getOwnPropertyNames(this)) {
            typeof this[h] != "function" && (this[h] = null)
        }
    };
    c.prototype.update = function() {
        var n, l, f, h = this._core.settings,
            g = this._core.clones().length / 2,
            o = g + this._core.items().length,
            m = h.center || h.autoWidth || h.dotData ? 1 : h.dotsEach || h.items;
        if (h.slideBy !== "page") {
            h.slideBy = Math.min(h.slideBy, h.items)
        }
        if (h.dots || h.slideBy == "page") {
            this._pages = [];
            for (n = g, l = 0, f = 0; n < o; n++) {
                if (l >= m || l === 0) {
                    this._pages.push({
                        start: n - g,
                        end: n - g + m - 1
                    });
                    l = 0, ++f
                }
                l += this._core.mergers(this._core.relative(n))
            }
        }
    };
    c.prototype.draw = function() {
        var l, j, h = "",
            g = this._core.settings,
            k = this._core.$stage.children(),
            f = this._core.relative(this._core.current());
        if (g.nav && !g.loop && !g.navRewind) {
            this._controls.$previous.toggleClass("disabled", f <= 0);
            this._controls.$next.toggleClass("disabled", f >= this._core.maximum())
        }
        this._controls.$previous.toggle(g.nav);
        this._controls.$next.toggle(g.nav);
        if (g.dots) {
            l = this._pages.length - this._controls.$indicators.children().length;
            if (g.dotData && l !== 0) {
                for (j = 0; j < this._controls.$indicators.children().length; j++) {
                    h += this._templates[this._core.relative(j)]
                }
                this._controls.$indicators.html(h)
            } else {
                if (l > 0) {
                    h = new Array(l + 1).join(this._templates[0]);
                    this._controls.$indicators.append(h)
                } else {
                    if (l < 0) {
                        this._controls.$indicators.children().slice(l).remove()
                    }
                }
            }
            this._controls.$indicators.find(".active").removeClass("active");
            this._controls.$indicators.children().eq(d.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(g.dots)
    };
    c.prototype.onTrigger = function(g) {
        var f = this._core.settings;
        g.page = {
            index: d.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: f && (f.center || f.autoWidth || f.dotData ? 1 : f.dotsEach || f.items)
        }
    };
    c.prototype.current = function() {
        var f = this._core.relative(this._core.current());
        return d.grep(this._pages, function(g) {
            return g.start <= f && g.end >= f
        }).pop()
    };
    c.prototype.getPosition = function(g) {
        var f, i, h = this._core.settings;
        if (h.slideBy == "page") {
            f = d.inArray(this.current(), this._pages);
            i = this._pages.length;
            g ? ++f : --f;
            f = this._pages[((f % i) + i) % i].start
        } else {
            f = this._core.relative(this._core.current());
            i = this._core.items().length;
            g ? f += h.slideBy : f -= h.slideBy
        }
        return f
    };
    c.prototype.next = function(f) {
        d.proxy(this._overrides.to, this._core)(this.getPosition(true), f)
    };
    c.prototype.prev = function(f) {
        d.proxy(this._overrides.to, this._core)(this.getPosition(false), f)
    };
    c.prototype.to = function(f, i, g) {
        var h;
        if (!g) {
            h = this._pages.length;
            d.proxy(this._overrides.to, this._core)(this._pages[((f % h) + h) % h].start, i)
        } else {
            d.proxy(this._overrides.to, this._core)(f, i)
        }
    };
    d.fn.owlCarousel.Constructor.Plugins.Navigation = c
})(window.Zepto || window.jQuery, window, document);
(function(d, c, a, e) {
    var b = function(f) {
        this._core = f;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": d.proxy(function() {
                if (this._core.settings.startPosition == "URLHash") {
                    d(c).trigger("hashchange.owl.navigation")
                }
            }, this),
            "prepared.owl.carousel": d.proxy(function(h) {
                var g = d(h.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                this._hashes[g] = h.content
            }, this)
        };
        this._core.options = d.extend({}, b.Defaults, this._core.options);
        this.$element.on(this._handlers);
        d(c).on("hashchange.owl.navigation", d.proxy(function() {
            var i = c.location.hash.substring(1),
                h = this._core.$stage.children(),
                g = this._hashes[i] && h.index(this._hashes[i]) || 0;
            if (!i) {
                return false
            }
            this._core.to(g, false, true)
        }, this))
    };
    b.Defaults = {
        URLhashListener: false
    };
    b.prototype.destroy = function() {
        var f, g;
        d(c).off("hashchange.owl.navigation");
        for (f in this._handlers) {
            this._core.$element.off(f, this._handlers[f])
        }
        for (g in Object.getOwnPropertyNames(this)) {
            typeof this[g] != "function" && (this[g] = null)
        }
    };
    d.fn.owlCarousel.Constructor.Plugins.Hash = b
})(window.Zepto || window.jQuery, window, document);
/*!
 * Packery layout mode PACKAGED
 */

! function(a) {
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }

    function c(a, b) {
        var c = d(a, b) ? f : e;
        c(a, b)
    }
    var d, e, f;
    "classList" in document.documentElement ? (d = function(a, b) {
        return a.classList.contains(b)
    }, e = function(a, b) {
        a.classList.add(b)
    }, f = function(a, b) {
        a.classList.remove(b)
    }) : (d = function(a, c) {
        return b(c).test(a.className)
    }, e = function(a, b) {
        d(a, b) || (a.className = a.className + " " + b)
    }, f = function(a, c) {
        a.className = a.className.replace(b(c), " ")
    });
    var g = {
        hasClass: d,
        addClass: e,
        removeClass: f,
        toggleClass: c,
        has: d,
        add: e,
        remove: f,
        toggle: c
    };
    "function" == typeof define && define.amd ? define("classie/classie", g) : "object" == typeof exports ? module.exports = g : a.classie = g
}(window),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/rect", b) : "object" == typeof exports ? module.exports = b() : (a.Packery = a.Packery || {}, a.Packery.Rect = b())
}(window, function() {
    function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c]
    }
    var b = window.Packery = function() {};
    return b.Rect = a, a.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }, a.prototype.contains = function(a) {
        var b = a.width || 0,
            c = a.height || 0;
        return this.x <= a.x && this.y <= a.y && this.x + this.width >= a.x + b && this.y + this.height >= a.y + c
    }, a.prototype.overlaps = function(a) {
        var b = this.x + this.width,
            c = this.y + this.height,
            d = a.x + a.width,
            e = a.y + a.height;
        return this.x < d && b > a.x && this.y < e && c > a.y
    }, a.prototype.getMaximalFreeRects = function(b) {
        if (!this.overlaps(b)) return !1;
        var c, d = [],
            e = this.x + this.width,
            f = this.y + this.height,
            g = b.x + b.width,
            h = b.y + b.height;
        return this.y < b.y && (c = new a({
            x: this.x,
            y: this.y,
            width: this.width,
            height: b.y - this.y
        }), d.push(c)), e > g && (c = new a({
            x: g,
            y: this.y,
            width: e - g,
            height: this.height
        }), d.push(c)), f > h && (c = new a({
            x: this.x,
            y: h,
            width: this.width,
            height: f - h
        }), d.push(c)), this.x < b.x && (c = new a({
            x: this.x,
            y: this.y,
            width: b.x - this.x,
            height: this.height
        }), d.push(c)), d
    }, a.prototype.canFit = function(a) {
        return this.width >= a.width && this.height >= a.height
    }, a
}),
function(a, b) {
    if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports) module.exports = b(require("./rect"));
    else {
        var c = a.Packery = a.Packery || {};
        c.Packer = b(c.Rect)
    }
}(window, function(a) {
    function b(a, b, c) {
        this.width = a || 0, this.height = b || 0, this.sortDirection = c || "downwardLeftToRight", this.reset()
    }
    b.prototype.reset = function() {
        this.spaces = [], this.newSpaces = [];
        var b = new a({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(b), this.sorter = c[this.sortDirection] || c.downwardLeftToRight
    }, b.prototype.pack = function(a) {
        for (var b = 0, c = this.spaces.length; c > b; b++) {
            var d = this.spaces[b];
            if (d.canFit(a)) {
                this.placeInSpace(a, d);
                break
            }
        }
    }, b.prototype.placeInSpace = function(a, b) {
        a.x = b.x, a.y = b.y, this.placed(a)
    }, b.prototype.placed = function(a) {
        for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
            var e = this.spaces[c],
                f = e.getMaximalFreeRects(a);
            f ? b.push.apply(b, f) : b.push(e)
        }
        this.spaces = b, this.mergeSortSpaces()
    }, b.prototype.mergeSortSpaces = function() {
        b.mergeRects(this.spaces), this.spaces.sort(this.sorter)
    }, b.prototype.addSpace = function(a) {
        this.spaces.push(a), this.mergeSortSpaces()
    }, b.mergeRects = function(a) {
        for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            if (d) {
                var e = a.slice(0);
                e.splice(b, 1);
                for (var f = 0, g = 0, h = e.length; h > g; g++) {
                    var i = e[g],
                        j = b > g ? 0 : 1;
                    d.contains(i) && (a.splice(g + j - f, 1), f++)
                }
            }
        }
        return a
    };
    var c = {
        downwardLeftToRight: function(a, b) {
            return a.y - b.y || a.x - b.x
        },
        rightwardTopToBottom: function(a, b) {
            return a.x - b.x || a.y - b.y
        }
    };
    return b
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], b) : "object" == typeof exports ? module.exports = b(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect)
}(window, function(a, b, c) {
    var d = a("transform"),
        e = function() {
            b.Item.apply(this, arguments)
        };
    e.prototype = new b.Item;
    var f = e.prototype._create;
    return e.prototype._create = function() {
        f.call(this), this.rect = new c, this.placeRect = new c
    }, e.prototype.dragStart = function() {
        this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && d && (this.element.style[d] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
    }, e.prototype.dragMove = function(a, b) {
        this.didDrag = !0;
        var c = this.layout.size;
        a -= c.paddingLeft, b -= c.paddingTop, this.positionPlaceRect(a, b)
    }, e.prototype.dragStop = function() {
        this.getPosition();
        var a = this.position.x != this.placeRect.x,
            b = this.position.y != this.placeRect.y;
        this.needsPositioning = a || b, this.didDrag = !1
    }, e.prototype.positionPlaceRect = function(a, b, c) {
        this.placeRect.x = this.getPlaceRectCoord(a, !0), this.placeRect.y = this.getPlaceRectCoord(b, !1, c)
    }, e.prototype.getPlaceRectCoord = function(a, b, c) {
        var d = b ? "Width" : "Height",
            e = this.size["outer" + d],
            f = this.layout[b ? "columnWidth" : "rowHeight"],
            g = this.layout.size["inner" + d];
        b || (g = Math.max(g, this.layout.maxY), this.layout.rowHeight || (g -= this.layout.gutter));
        var h;
        if (f) {
            f += this.layout.gutter, g += b ? this.layout.gutter : 0, a = Math.round(a / f);
            var i;
            i = this.layout.options.isHorizontal ? b ? "ceil" : "floor" : b ? "floor" : "ceil";
            var j = Math[i](g / f);
            j -= Math.ceil(e / f), h = j
        } else h = g - e;
        return a = c ? a : Math.min(a, h), a *= f || 1, Math.max(0, a)
    }, e.prototype.copyPlaceRectPosition = function() {
        this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
    }, e.prototype.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
    }, e
}),
function(a, b) {
    "function" == typeof define && define.amd ? define("packery/js/packery", ["classie/classie", "get-size/get-size", "outlayer/outlayer", "./rect", "./packer", "./item"], b) : "object" == typeof exports ? module.exports = b(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : a.Packery = b(a.classie, a.getSize, a.Outlayer, a.Packery.Rect, a.Packery.Packer, a.Packery.Item)
}(window, function(a, b, c, d, e, f) {
    function g(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x
    }

    function h(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y
    }
    d.prototype.canFit = function(a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1
    };
    var i = c.create("packery");
    return i.Item = f, i.prototype._create = function() {
        c.prototype._create.call(this), this.packer = new e, this.stamp(this.options.stamped);
        var a = this;
        this.handleDraggabilly = {
            dragStart: function() {
                a.itemDragStart(this.element)
            },
            dragMove: function() {
                a.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                a.itemDragEnd(this.element)
            }
        }, this.handleUIDraggable = {
            start: function(b) {
                a.itemDragStart(b.currentTarget)
            },
            drag: function(b, c) {
                a.itemDragMove(b.currentTarget, c.position.left, c.position.top)
            },
            stop: function(b) {
                a.itemDragEnd(b.currentTarget)
            }
        }
    }, i.prototype._resetLayout = function() {
        this.getSize(), this._getMeasurements();
        var a = this.packer;
        this.options.isHorizontal ? (a.width = Number.POSITIVE_INFINITY, a.height = this.size.innerHeight + this.gutter, a.sortDirection = "rightwardTopToBottom") : (a.width = this.size.innerWidth + this.gutter, a.height = Number.POSITIVE_INFINITY, a.sortDirection = "downwardLeftToRight"), a.reset(), this.maxY = 0, this.maxX = 0
    }, i.prototype._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
    }, i.prototype._getItemLayoutPosition = function(a) {
        return this._packItem(a), a.rect
    }, i.prototype._packItem = function(a) {
        this._setRectSize(a.element, a.rect), this.packer.pack(a.rect), this._setMaxXY(a.rect)
    }, i.prototype._setMaxXY = function(a) {
        this.maxX = Math.max(a.x + a.width, this.maxX), this.maxY = Math.max(a.y + a.height, this.maxY)
    }, i.prototype._setRectSize = function(a, c) {
        var d = b(a),
            e = d.outerWidth,
            f = d.outerHeight;
        (e || f) && (e = this._applyGridGutter(e, this.columnWidth), f = this._applyGridGutter(f, this.rowHeight)), c.width = Math.min(e, this.packer.width), c.height = Math.min(f, this.packer.height)
    }, i.prototype._applyGridGutter = function(a, b) {
        if (!b) return a + this.gutter;
        b += this.gutter;
        var c = a % b,
            d = c && 1 > c ? "round" : "ceil";
        return a = Math[d](a / b) * b
    }, i.prototype._getContainerSize = function() {
        return this.options.isHorizontal ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }, i.prototype._manageStamp = function(a) {
        var b, c = this.getItem(a);
        if (c && c.isPlacing) b = c.placeRect;
        else {
            var e = this._getElementOffset(a);
            b = new d({
                x: this.options.isOriginLeft ? e.left : e.right,
                y: this.options.isOriginTop ? e.top : e.bottom
            })
        }
        this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b)
    }, i.prototype.sortItemsByPosition = function() {
        var a = this.options.isHorizontal ? h : g;
        this.items.sort(a)
    }, i.prototype.fit = function(a, b, c) {
        var d = this.getItem(a);
        d && (this._getMeasurements(), this.stamp(d.element), d.getSize(), d.isPlacing = !0, b = void 0 === b ? d.rect.x : b, c = void 0 === c ? d.rect.y : c, d.positionPlaceRect(b, c, !0), this._bindFitEvents(d), d.moveTo(d.placeRect.x, d.placeRect.y), this.layout(), this.unstamp(d.element), this.sortItemsByPosition(), d.isPlacing = !1, d.copyPlaceRectPosition())
    }, i.prototype._bindFitEvents = function(a) {
        function b() {
            d++, 2 == d && c.emitEvent("fitComplete", [a])
        }
        var c = this,
            d = 0;
        a.on("layout", function() {
            return b(), !0
        }), this.on("layoutComplete", function() {
            return b(), !0
        })
    }, i.prototype.resize = function() {
        var a = b(this.element),
            c = this.size && a,
            d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        c && a[d] == this.size[d] || this.layout()
    }, i.prototype.itemDragStart = function(a) {
        this.stamp(a);
        var b = this.getItem(a);
        b && b.dragStart()
    }, i.prototype.itemDragMove = function(a, b, c) {
        function d() {
            f.layout(), delete f.dragTimeout
        }
        var e = this.getItem(a);
        e && e.dragMove(b, c);
        var f = this;
        this.clearDragTimeout(), this.dragTimeout = setTimeout(d, 40)
    }, i.prototype.clearDragTimeout = function() {
        this.dragTimeout && clearTimeout(this.dragTimeout)
    }, i.prototype.itemDragEnd = function(b) {
        var c, d = this.getItem(b);
        if (d && (c = d.didDrag, d.dragStop()), !d || !c && !d.needsPositioning) return void this.unstamp(b);
        a.add(d.element, "is-positioning-post-drag");
        var e = this._getDragEndLayoutComplete(b, d);
        d.needsPositioning ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y)) : d && d.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", e), this.layout()
    }, i.prototype._getDragEndLayoutComplete = function(b, c) {
        var d = c && c.needsPositioning,
            e = 0,
            f = d ? 2 : 1,
            g = this;
        return function() {
            return e++, e != f ? !0 : (c && (a.remove(c.element, "is-positioning-post-drag"), c.isPlacing = !1, c.copyPlaceRectPosition()), g.unstamp(b), g.sortItemsByPosition(), d && g.emitEvent("dragItemPositioned", [c]), !0)
        }
    }, i.prototype.bindDraggabillyEvents = function(a) {
        a.on("dragStart", this.handleDraggabilly.dragStart), a.on("dragMove", this.handleDraggabilly.dragMove), a.on("dragEnd", this.handleDraggabilly.dragEnd)
    }, i.prototype.bindUIDraggableEvents = function(a) {
        a.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
    }, i.Rect = d, i.Packer = e, i
}),
function(a, b) {
    "function" == typeof define && define.amd ? define(["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"], b) : "object" == typeof exports ? module.exports = b(require("isotope-layout/js/layout-mode"), require("packery"), require("get-size")) : b(a.Isotope.LayoutMode, a.Packery, a.getSize)
}(window, function(a, b, c) {
    function d(a, b) {
        for (var c in b) a[c] = b[c];
        return a
    }
    var e = a.create("packery"),
        f = e.prototype._getElementOffset,
        g = e.prototype._getMeasurement;
    d(e.prototype, b.prototype), e.prototype._getElementOffset = f, e.prototype._getMeasurement = g;
    var h = e.prototype._resetLayout;
    e.prototype._resetLayout = function() {
        this.packer = this.packer || new b.Packer, h.apply(this, arguments)
    };
    var i = e.prototype._getItemLayoutPosition;
    e.prototype._getItemLayoutPosition = function(a) {
        return a.rect = a.rect || new b.Rect, i.call(this, a)
    };
    var j = e.prototype._manageStamp;
    return e.prototype._manageStamp = function() {
        this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, j.apply(this, arguments)
    }, e.prototype.needsResizeLayout = function() {
        var a = c(this.element),
            b = this.size && a,
            d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
        return b && a[d] != this.size[d]
    }, e
});

/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }
    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;
    if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {
        version: "3.1.11",
        setup: function() {
            if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(b) {
            var c = a(b)["offsetParent" in a.fn ? "offsetParent" : "parent"]();
            return c.length || (c = a("body")), parseInt(c.css("fontSize"), 10)
        },
        getPageHeight: function(b) {
            return a(b).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    a.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
/*!
waitForImages
*/

;
(function($) {
    var eventNamespace = 'waitForImages';
    $.waitForImages = {
        hasImageProperties: ['backgroundImage', 'listStyleImage', 'borderImage', 'borderCornerImage', 'cursor'],
        hasImageAttributes: ['srcset']
    };
    $.expr[':'].uncached = function(obj) {
        if (!$(obj).is('img[src][src!=""]')) {
            return false
        }
        var img = new Image();
        img.src = obj.src;
        return !img.complete
    };
    $.fn.waitForImages = function() {
        var allImgsLength = 0;
        var allImgsLoaded = 0;
        var deferred = $.Deferred();
        var finishedCallback;
        var eachCallback;
        var waitForAll;
        if ($.isPlainObject(arguments[0])) {
            waitForAll = arguments[0].waitForAll;
            eachCallback = arguments[0].each;
            finishedCallback = arguments[0].finished
        } else {
            if (arguments.length === 1 && $.type(arguments[0]) === 'boolean') {
                waitForAll = arguments[0]
            } else {
                finishedCallback = arguments[0];
                eachCallback = arguments[1];
                waitForAll = arguments[2]
            }
        }
        finishedCallback = finishedCallback || $.noop;
        eachCallback = eachCallback || $.noop;
        waitForAll = !!waitForAll;
        if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
            throw new TypeError('An invalid callback was supplied.');
        }
        this.each(function() {
            var obj = $(this);
            var allImgs = [];
            var hasImgProperties = $.waitForImages.hasImageProperties || [];
            var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
            var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
            if (waitForAll) {
                obj.find('*').addBack().each(function() {
                    var element = $(this);
                    if (element.is('img:uncached')) {
                        allImgs.push({
                            src: element.attr('src'),
                            element: element[0]
                        })
                    }
                    $.each(hasImgProperties, function(i, property) {
                        var propertyValue = element.css(property);
                        var match;
                        if (!propertyValue) {
                            return true
                        }
                        while (match = matchUrl.exec(propertyValue)) {
                            allImgs.push({
                                src: match[2],
                                element: element[0]
                            })
                        }
                    });
                    $.each(hasImageAttributes, function(i, attribute) {
                        var attributeValue = element.attr(attribute);
                        var attributeValues;
                        if (!attributeValue) {
                            return true
                        }
                        attributeValues = attributeValue.split(',');
                        $.each(attributeValues, function(i, value) {
                            value = $.trim(value).split(' ')[0];
                            allImgs.push({
                                src: value,
                                element: element[0]
                            })
                        })
                    })
                })
            } else {
                obj.find('img:uncached').each(function() {
                    allImgs.push({
                        src: this.src,
                        element: this
                    })
                })
            }
            allImgsLength = allImgs.length;
            allImgsLoaded = 0;
            if (allImgsLength === 0) {
                finishedCallback.call(obj[0]);
                deferred.resolveWith(obj[0])
            }
            $.each(allImgs, function(i, img) {
                var image = new Image();
                var events = 'load.' + eventNamespace + ' error.' + eventNamespace;
                $(image).one(events, function me(event) {
                    var eachArguments = [allImgsLoaded, allImgsLength, event.type == 'load'];
                    allImgsLoaded++;
                    eachCallback.apply(img.element, eachArguments);
                    deferred.notifyWith(img.element, eachArguments);
                    $(this).off(events, me);
                    if (allImgsLoaded == allImgsLength) {
                        finishedCallback.call(obj[0]);
                        deferred.resolveWith(obj[0]);
                        return false
                    }
                });
                image.src = img.src
            })
        });
        return deferred.promise()
    }
}(jQuery));
(function(e, t, r) {
    "use strict";

    function n(r) {
        if (o = t.documentElement, a = t.body, Y(), lt = this, r = r || {}, mt = r.constants || {}, r.easing)
            for (var n in r.easing) X[n] = r.easing[n];
        Tt = r.edgeStrategy || "set", ft = {
            beforerender: r.beforerender,
            render: r.render,
            keyframe: r.keyframe
        }, ut = r.forceHeight !== !1, ut && (zt = r.scale || 1), pt = r.mobileDeceleration || x, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || A, ht = {
            targetTop: lt.getScrollTop()
        }, Kt = (r.mobileCheck || function() {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), Kt ? (ct = t.getElementById(r.skrollrBody || E), ct && it(), j(), Dt(o, [y, S], [T])) : Dt(o, [y, b], [T]), lt.refresh(), kt(e, "resize orientationchange", function() {
            var e = o.clientWidth,
                t = o.clientHeight;
            (t !== Bt || e !== $t) && (Bt = t, $t = e, _t = !0)
        });
        var i = R();
        return function l() {
            J(), St = i(l)
        }(), lt
    }
    var o, a, i = {
            get: function() {
                return lt
            },
            init: function(e) {
                return lt || new n(e)
            },
            VERSION: "0.6.29"
        },
        l = Object.prototype.hasOwnProperty,
        s = e.Math,
        c = e.getComputedStyle,
        f = "touchstart",
        u = "touchmove",
        m = "touchcancel",
        p = "touchend",
        d = "skrollable",
        g = d + "-before",
        v = d + "-between",
        h = d + "-after",
        y = "skrollr",
        T = "no-" + y,
        b = y + "-desktop",
        S = y + "-mobile",
        k = "linear",
        w = 1e3,
        x = .004,
        E = "skrollr-body",
        A = 200,
        F = "start",
        C = "end",
        H = "center",
        D = "bottom",
        I = "___skrollable_id",
        P = /^(?:input|textarea|button|select)$/i,
        N = /^\s+|\s+$/g,
        O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        V = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
        z = /^(@?[a-z\-]+)\[(\w+)\]$/,
        q = /-([a-z0-9_])/g,
        L = function(e, t) {
            return t.toUpperCase()
        },
        M = /[\-+]?[\d]*\.?[\d]+/g,
        $ = /\{\?\}/g,
        B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        _ = /[a-z\-]+-gradient/g,
        G = "",
        K = "",
        Y = function() {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (c) {
                var t = c(a, null);
                for (var n in t)
                    if (G = n.match(e) || +n == n && t[n].match(e)) break;
                if (!G) return G = K = "", r;
                G = G[0], "-" === G.slice(0, 1) ? (K = G, G = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[G]) : K = "-" + G.toLowerCase() + "-"
            }
        },
        R = function() {
            var t = e.requestAnimationFrame || e[G.toLowerCase() + "RequestAnimationFrame"],
                r = Nt();
            return (Kt || !t) && (t = function(t) {
                var n = Nt() - r,
                    o = s.max(0, 1e3 / 60 - n);
                return e.setTimeout(function() {
                    r = Nt(), t()
                }, o)
            }), t
        },
        U = function() {
            var t = e.cancelAnimationFrame || e[G.toLowerCase() + "CancelAnimationFrame"];
            return (Kt || !t) && (t = function(t) {
                return e.clearTimeout(t)
            }), t
        },
        X = {
            begin: function() {
                return 0
            },
            end: function() {
                return 1
            },
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return e * e
            },
            cubic: function(e) {
                return e * e * e
            },
            swing: function(e) {
                return -s.cos(e * s.PI) / 2 + .5
            },
            sqrt: function(e) {
                return s.sqrt(e)
            },
            outCubic: function(e) {
                return s.pow(e - 1, 3) + 1
            },
            bounce: function(e) {
                var t;
                if (.5083 >= e) t = 3;
                else if (.8489 >= e) t = 9;
                else if (.96208 >= e) t = 27;
                else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
            }
        };
    n.prototype.refresh = function(e) {
        var n, o, a = !1;
        for (e === r ? (a = !0, st = [], Gt = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
            var i = e[n],
                l = i,
                s = [],
                c = gt,
                f = Tt,
                u = !1;
            if (a && I in i && delete i[I], i.attributes) {
                for (var m = 0, p = i.attributes.length; p > m; m++) {
                    var g = i.attributes[m];
                    if ("data-anchor-target" !== g.name)
                        if ("data-smooth-scrolling" !== g.name)
                            if ("data-edge-strategy" !== g.name)
                                if ("data-emit-events" !== g.name) {
                                    var v = g.name.match(O);
                                    if (null !== v) {
                                        var h = {
                                            props: g.value,
                                            element: i,
                                            eventType: g.name.replace(q, L)
                                        };
                                        s.push(h);
                                        var y = v[1];
                                        y && (h.constant = y.substr(1));
                                        var T = v[2];
                                        /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                                        var b = v[3],
                                            S = v[4] || b;
                                        b && b !== F && b !== C ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === C ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * zt))
                                    }
                                } else u = !0;
                    else f = g.value;
                    else c = "off" !== g.value;
                    else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"'
                }
                if (s.length) {
                    var k, w, x;
                    !a && I in i ? (x = i[I], k = st[x].styleAttr, w = st[x].classAttr) : (x = i[I] = Gt++, k = i.style.cssText, w = Ht(i)), st[x] = {
                        element: i,
                        styleAttr: k,
                        classAttr: w,
                        anchorTarget: l,
                        keyFrames: s,
                        smoothScrolling: c,
                        edgeStrategy: f,
                        emitEvents: u,
                        lastFrameIndex: -1
                    }, Dt(i, [d], [])
                }
            }
        }
        for (At(), n = 0, o = e.length; o > n; n++) {
            var E = st[e[n][I]];
            E !== r && (Q(E), tt(E))
        }
        return lt
    }, n.prototype.relativeToAbsolute = function(e, t, r) {
        var n = o.clientHeight,
            a = e.getBoundingClientRect(),
            i = a.top,
            l = a.bottom - a.top;
        return t === D ? i -= n : t === H && (i -= n / 2), r === D ? i += l : r === H && (i += l / 2), i += lt.getScrollTop(), 0 | i + .5
    }, n.prototype.animateTo = function(e, t) {
        t = t || {};
        var n = Nt(),
            o = lt.getScrollTop();
        return dt = {
            startTop: o,
            topDiff: e - o,
            targetTop: e,
            duration: t.duration || w,
            startTime: n,
            endTime: n + (t.duration || w),
            easing: X[t.easing || k],
            done: t.done
        }, dt.topDiff || (dt.done && dt.done.call(lt, !1), dt = r), lt
    }, n.prototype.stopAnimateTo = function() {
        dt && dt.done && dt.done.call(lt, !0), dt = r
    }, n.prototype.isAnimatingTo = function() {
        return !!dt
    }, n.prototype.isMobile = function() {
        return Kt
    }, n.prototype.setScrollTop = function(t, r) {
        return yt = r === !0, Kt ? Yt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), lt
    }, n.prototype.getScrollTop = function() {
        return Kt ? Yt : e.pageYOffset || o.scrollTop || a.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function() {
        return Vt
    }, n.prototype.on = function(e, t) {
        return ft[e] = t, lt
    }, n.prototype.off = function(e) {
        return delete ft[e], lt
    }, n.prototype.destroy = function() {
        var e = U();
        e(St), xt(), Dt(o, [T], [y, b, S]);
        for (var t = 0, n = st.length; n > t; t++) at(st[t].element);
        o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", ct && i.setStyle(ct, "transform", "none"), lt = r, ct = r, ft = r, ut = r, Vt = 0, zt = 1, mt = r, pt = r, qt = "down", Lt = -1, $t = 0, Bt = 0, _t = !1, dt = r, gt = r, vt = r, ht = r, yt = r, Gt = 0, Tt = r, Kt = !1, Yt = 0, bt = r
    };
    var j = function() {
            var n, i, l, c, d, g, v, h, y, T, b, S;
            kt(o, [f, u, m, p].join(" "), function(e) {
                var o = e.changedTouches[0];
                for (c = e.target; 3 === c.nodeType;) c = c.parentNode;
                switch (d = o.clientY, g = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) {
                    case f:
                        n && n.blur(), lt.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
                        break;
                    case u:
                        P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, lt.setScrollTop(Yt - h, !0), v = d, b = T;
                        break;
                    default:
                    case m:
                    case p:
                        var a = i - d,
                            k = l - g,
                            w = k * k + a * a;
                        if (49 > w) {
                            if (!P.test(n.tagName)) {
                                n.focus();
                                var x = t.createEvent("MouseEvents");
                                x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
                            }
                            return
                        }
                        n = r;
                        var E = h / S;
                        E = s.max(s.min(E, 3), -3);
                        var A = s.abs(E / pt),
                            F = E * A + .5 * pt * A * A,
                            C = lt.getScrollTop() - F,
                            H = 0;
                        C > Vt ? (H = (Vt - C) / F, C = Vt) : 0 > C && (H = -C / F, C = 0), A *= 1 - H, lt.animateTo(0 | C + .5, {
                            easing: "outCubic",
                            duration: A
                        })
                }
            }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden"
        },
        W = function() {
            var e, t, r, n, a, i, l, c, f, u, m, p = o.clientHeight,
                d = Ft();
            for (c = 0, f = st.length; f > c; c++)
                for (e = st[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (at(t), l.frame = lt.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, at(t, !0)), l.frame += m, ut && !l.isEnd && l.frame > Vt && (Vt = l.frame);
            for (Vt = s.max(Vt, Ct()), c = 0, f = st.length; f > c; c++) {
                for (e = st[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + m);
                e.keyFrames.sort(Ot)
            }
        },
        Z = function(e, t) {
            for (var r = 0, n = st.length; n > r; r++) {
                var o, a, s = st[r],
                    c = s.element,
                    f = s.smoothScrolling ? e : t,
                    u = s.keyFrames,
                    m = u.length,
                    p = u[0],
                    y = u[u.length - 1],
                    T = p.frame > f,
                    b = f > y.frame,
                    S = T ? p : y,
                    k = s.emitEvents,
                    w = s.lastFrameIndex;
                if (T || b) {
                    if (T && -1 === s.edge || b && 1 === s.edge) continue;
                    switch (T ? (Dt(c, [g], [h, v]), k && w > -1 && (Et(c, p.eventType, qt), s.lastFrameIndex = -1)) : (Dt(c, [h], [g, v]), k && m > w && (Et(c, y.eventType, qt), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
                        case "reset":
                            at(c);
                            continue;
                        case "ease":
                            f = S.frame;
                            break;
                        default:
                        case "set":
                            var x = S.props;
                            for (o in x) l.call(x, o) && (a = ot(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
                            continue
                    }
                } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), s.edge = 0);
                for (var E = 0; m - 1 > E; E++)
                    if (f >= u[E].frame && u[E + 1].frame >= f) {
                        var A = u[E],
                            F = u[E + 1];
                        for (o in A.props)
                            if (l.call(A.props, o)) {
                                var C = (f - A.frame) / (F.frame - A.frame);
                                C = A.props[o].easing(C), a = nt(A.props[o].value, F.props[o].value, C), a = ot(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a)
                            }
                        k && w !== E && ("down" === qt ? Et(c, A.eventType, qt) : Et(c, F.eventType, qt), s.lastFrameIndex = E);
                        break
                    }
            }
        },
        J = function() {
            _t && (_t = !1, At());
            var e, t, n = lt.getScrollTop(),
                o = Nt();
            if (dt) o >= dt.endTime ? (n = dt.targetTop, e = dt.done, dt = r) : (t = dt.easing((o - dt.startTime) / dt.duration), n = 0 | dt.startTop + t * dt.topDiff), lt.setScrollTop(n, !0);
            else if (!yt) {
                var a = ht.targetTop - n;
                a && (ht = {
                    startTop: Lt,
                    topDiff: n - Lt,
                    targetTop: n,
                    startTime: Mt,
                    endTime: Mt + vt
                }), ht.endTime >= o && (t = X.sqrt((o - ht.startTime) / vt), n = 0 | ht.startTop + t * ht.topDiff)
            }
            if (Kt && ct && i.setStyle(ct, "transform", "translate(0, " + -Yt + "px) " + bt), yt || Lt !== n) {
                qt = n > Lt ? "down" : Lt > n ? "up" : qt, yt = !1;
                var l = {
                        curTop: n,
                        lastTop: Lt,
                        maxTop: Vt,
                        direction: qt
                    },
                    s = ft.beforerender && ft.beforerender.call(lt, l);
                s !== !1 && (Z(n, lt.getScrollTop()), Lt = n, ft.render && ft.render.call(lt, l)), e && e.call(lt, !1)
            }
            Mt = o
        },
        Q = function(e) {
            for (var t = 0, r = e.keyFrames.length; r > t; t++) {
                for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = V.exec(l.props));) a = i[1], o = i[2], n = a.match(z), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? et(o) : [o.slice(1)], s[a] = {
                    value: o,
                    easing: X[n]
                };
                l.props = s
            }
        },
        et = function(e) {
            var t = [];
            return B.lastIndex = 0, e = e.replace(B, function(e) {
                return e.replace(M, function(e) {
                    return 100 * (e / 255) + "%"
                })
            }), K && (_.lastIndex = 0, e = e.replace(_, function(e) {
                return K + e
            })), e = e.replace(M, function(e) {
                return t.push(+e), "{?}"
            }), t.unshift(e), t
        },
        tt = function(e) {
            var t, r, n = {};
            for (t = 0, r = e.keyFrames.length; r > t; t++) rt(e.keyFrames[t], n);
            for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) rt(e.keyFrames[t], n)
        },
        rt = function(e, t) {
            var r;
            for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
            for (r in e.props) t[r] = e.props[r]
        },
        nt = function(e, t, r) {
            var n, o = e.length;
            if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
            var a = [e[0]];
            for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
            return a
        },
        ot = function(e) {
            var t = 1;
            return $.lastIndex = 0, e[0].replace($, function() {
                return e[t++]
            })
        },
        at = function(e, t) {
            e = [].concat(e);
            for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = st[n[I]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Dt(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ht(n), n.style.cssText = r.styleAttr, Dt(n, r.classAttr)))
        },
        it = function() {
            bt = "translateZ(0)", i.setStyle(ct, "transform", bt);
            var e = c(ct),
                t = e.getPropertyValue("transform"),
                r = e.getPropertyValue(K + "transform"),
                n = t && "none" !== t || r && "none" !== r;
            n || (bt = "")
        };
    i.setStyle = function(e, t, r) {
        var n = e.style;
        if (t = t.replace(q, L).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r);
        else if ("float" === t) n.styleFloat = n.cssFloat = r;
        else try {
            G && (n[G + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
        } catch (o) {}
    };
    var lt, st, ct, ft, ut, mt, pt, dt, gt, vt, ht, yt, Tt, bt, St, kt = i.addEvent = function(t, r, n) {
            var o = function(t) {
                return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function() {
                    t.returnValue = !1, t.defaultPrevented = !0
                }), n.call(this, t)
            };
            r = r.split(" ");
            for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Rt.push({
                element: t,
                name: a,
                listener: n
            })
        },
        wt = i.removeEvent = function(e, t, r) {
            t = t.split(" ");
            for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
        },
        xt = function() {
            for (var e, t = 0, r = Rt.length; r > t; t++) e = Rt[t], wt(e.element, e.name, e.listener);
            Rt = []
        },
        Et = function(e, t, r) {
            ft.keyframe && ft.keyframe.call(lt, e, t, r)
        },
        At = function() {
            var e = lt.getScrollTop();
            Vt = 0, ut && !Kt && (a.style.height = ""), W(), ut && !Kt && (a.style.height = Vt + o.clientHeight + "px"), Kt ? lt.setScrollTop(s.min(lt.getScrollTop(), Vt)) : lt.setScrollTop(e, !0), yt = !0
        },
        Ft = function() {
            var e, t, r = o.clientHeight,
                n = {};
            for (e in mt) t = mt[e], "function" == typeof t ? t = t.call(lt) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
            return n
        },
        Ct = function() {
            var e, t = 0;
            return ct && (t = s.max(ct.offsetHeight, ct.scrollHeight)), e = s.max(t, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), e - o.clientHeight
        },
        Ht = function(t) {
            var r = "className";
            return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r]
        },
        Dt = function(t, n, o) {
            var a = "className";
            if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r;
            for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Pt(i).replace(Pt(o[l]), " ");
            i = It(i);
            for (var c = 0, f = n.length; f > c; c++) - 1 === Pt(i).indexOf(Pt(n[c])) && (i += " " + n[c]);
            t[a] = It(i)
        },
        It = function(e) {
            return e.replace(N, "")
        },
        Pt = function(e) {
            return " " + e + " "
        },
        Nt = Date.now || function() {
            return +new Date
        },
        Ot = function(e, t) {
            return e.frame - t.frame
        },
        Vt = 0,
        zt = 1,
        qt = "down",
        Lt = -1,
        Mt = Nt(),
        $t = 0,
        Bt = 0,
        _t = !1,
        Gt = 0,
        Kt = !1,
        Yt = 0,
        Rt = [];
    "function" == typeof define && define.amd ? define([], function() {
        return i
    }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i
})(window, document);
/**
 * jQuery.share - social media sharing plugin
 */

! function(t, e) {
    var s = e.document;
    t.fn.share = function(i) {
        var r = {
                init: function(i) {
                    this.share.settings = t.extend({}, this.share.defaults, i);
                    var r = (this.share.settings, this.share.settings.networks),
                        o = this.share.settings.theme,
                        a = this.share.settings.orientation,
                        u = this.share.settings.affix,
                        h = this.share.settings.margin,
                        l = this.share.settings.title || t(s).attr("title"),
                        c = this.share.settings.urlToShare || t(location).attr("href"),
                        p = "";
                    return t.each(t(s).find('meta[name="description"]'), function(e, s) {
                        p = t(s).attr("content")
                    }), this.each(function() {
                        var s, i = t(this),
                            m = i.attr("id"),
                            d = encodeURIComponent(c),
                            f = l.replace("|", ""),
                            g = p.substring(0, 250);
                        r.forEach(function(e) {
                            s = n.networkDefs[e].url, s = s.replace("|u|", d).replace("|t|", f).replace("|d|", g).replace("|140|", f.substring(0, 130)), t("<a href='" + s + "' title='Share this page on " + e + "' class='pop share-" + o + " share-" + o + "-" + e + "'></a>").appendTo(i)
                        }), t("#" + m + ".share-" + o).css("margin", h), "horizontal" != a ? t("#" + m + " a.share-" + o).css("display", "block") : t("#" + m + " a.share-" + o).css("display", "inline-block"), "undefined" != typeof u && (i.addClass("share-affix"), -1 != u.indexOf("right") ? (i.css("left", "auto"), i.css("right", "0px"), -1 != u.indexOf("center") && i.css("top", "40%")) : -1 != u.indexOf("left center") && i.css("top", "40%"), -1 != u.indexOf("bottom") && (i.css("bottom", "0px"), i.css("top", "auto"), -1 != u.indexOf("center") && i.css("left", "40%"))), t(".pop").click(function() {
                            return e.open(t(this).attr("href"), "t", "toolbar=0,resizable=1,status=0,width=640,height=528"), !1
                        })
                    })
                }
            },
            n = {
                networkDefs: {
                    facebook: {
                        url: "http://www.facebook.com/share.php?u=|u|"
                    },
                    twitter: {
                        url: "https://twitter.com/share?via=in1.com&text=|140|"
                    },
                    linkedin: {
                        url: "http://www.linkedin.com/shareArticle?mini=true&url=|u|&title=|t|&summary=|d|&source=in1.com"
                    },
                    in1: {
                        url: "http://www.in1.com/cast?u=|u|",
                        w: "490",
                        h: "529"
                    },
                    tumblr: {
                        url: "http://www.tumblr.com/share?v=3&u=|u|"
                    },
                    digg: {
                        url: "http://digg.com/submit?url=|u|&title=|t|"
                    },
                    googleplus: {
                        url: "https://plusone.google.com/_/+1/confirm?hl=en&url=|u|"
                    },
                    reddit: {
                        url: "http://reddit.com/submit?url=|u|"
                    },
                    pinterest: {
                        url: "http://pinterest.com/pin/create/button/?url=|u|&media=&description=|d|"
                    },
                    posterous: {
                        url: "http://posterous.com/share?linkto=|u|&title=|t|"
                    },
                    stumbleupon: {
                        url: "http://www.stumbleupon.com/submit?url=|u|&title=|t|"
                    },
                    email: {
                        url: "mailto:?subject=|t|"
                    }
                }
            };
        return r[i] ? r[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void t.error('Method "' + i + '" does not exist in social plugin') : r.init.apply(this, arguments)
    }, t.fn.share.defaults = {
        networks: ["in1", "facebook", "twitter", "linkedin"],
        theme: "icon",
        autoShow: !0,
        margin: "3px",
        orientation: "horizontal",
        useIn1: !0
    }, t.fn.share.settings = {}
}(jQuery, window);

/**
Shuffle Letters
 */
(function(e) {
    function t(e) {
        var t = "";
        if (e == "lowerLetter") {
            t = "abcdefghijklmnopqrstuvwxyz0123456789"
        } else if (e == "upperLetter") {
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        } else if (e == "symbol") {
            t = "0123456789"
        }
        var n = t.split("");
        return n[Math.floor(Math.random() * n.length)]
    }
    e.fn.shuffleLetters = function(n) {
        var r = e.extend({
            step: 8,
            fps: 25,
            text: "",
            callback: function() {}
        }, n);
        return this.each(function() {
            var n = e(this),
                i = "";
            if (n.data("animated")) {
                return true
            }
            n.data("animated", true);
            if (r.text) {
                i = r.text.split("")
            } else {
                i = n.text().split("")
            }
            var s = [],
                o = [];
            for (var u = 0; u < i.length; u++) {
                var a = i[u];
                if (a == " ") {
                    s[u] = "space";
                    continue
                } else if (/[a-z]/.test(a)) {
                    s[u] = "lowerLetter"
                } else if (/[A-Z]/.test(a)) {
                    s[u] = "upperLetter"
                } else {
                    s[u] = "symbol"
                }
                o.push(u)
            }
            n.html("");
            (function f(e) {
                var u, a = o.length,
                    l = i.slice(0);
                if (e > a) {
                    n.data("animated", false);
                    r.callback(n);
                    return
                }
                for (u = Math.max(e, 0); u < a; u++) {
                    if (u < e + r.step) {
                        l[o[u]] = t(s[o[u]])
                    } else {
                        l[o[u]] = ""
                    }
                }
                n.text(l.join(""));
                setTimeout(function() {
                    f(e + 1)
                }, 1e3 / r.fps)
            })(-r.step)
        })
    }
})(jQuery);
(function($) {
    var selectors = [];
    var check_binded = false;
    var check_lock = false;
    var defaults = {
        interval: 250,
        force_process: false
    };
    var $window = $(window);
    var $prior_appeared;

    function process() {
        check_lock = false;
        for (var index in selectors) {
            var $appeared = $(selectors[index]).filter(function() {
                return $(this).is(':appeared');
            });
            $appeared.trigger('appear', [$appeared]);
            if ($prior_appeared) {
                var $disappeared = $prior_appeared.not($appeared);
                $disappeared.trigger('disappear', [$disappeared]);
            }
            $prior_appeared = $appeared;
        }
    }
    $.expr[':']['appeared'] = function(element) {
        var $element = $(element);
        if (!$element.is(':visible')) {
            return false;
        }
        var window_left = $window.scrollLeft();
        var window_top = $window.scrollTop();
        var offset = $element.offset();
        var left = offset.left;
        var top = offset.top;
        if (top + $element.height() >= window_top && top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() && left + $element.width() >= window_left && left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
            return true;
        } else {
            return false;
        }
    };
    $.fn.extend({
        appear: function(options) {
            var opts = $.extend({}, defaults, options || {});
            var selector = this.selector || this;
            if (!check_binded) {
                var on_check = function() {
                    if (check_lock) {
                        return;
                    }
                    check_lock = true;
                    setTimeout(process, opts.interval);
                };
                $(window).scroll(on_check).resize(on_check);
                check_binded = true;
            }
            if (opts.force_process) {
                setTimeout(process, opts.interval);
            }
            selectors.push(selector);
            return $(selector);
        }
    });
    $.extend({
        force_appear: function() {
            if (check_binded) {
                process();
                return true;
            };
            return false;
        }
    });
})(jQuery);
/*! OwlCarousel2Thumbs - v0.1.3 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
! function(a) {
    "use strict";
    var b = function(c) {
        this.owl = c, this._thumbcontent = [], this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this.owl._options.thumbs && !this.owl._options.thumbImage) this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"));
                else if (b.namespace && this.owl._options.thumbs && this.owl._options.thumbImage) {
                    var c = a(b.content).find("img");
                    this._thumbcontent.push(c)
                }
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this.owl._options.thumbs && (this.initialize(), this.currentslide(), this.draw())
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this.owl._options.thumbs && (this.currentslide(), this.draw())
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && this.draw()
            }, this)
        }, this.owl._options = a.extend(b.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
    };
    b.Defaults = {
        thumbs: !0,
        thumbImage: !1,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item"
    }, b.prototype.currentslide = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0)
    }, b.prototype.draw = function() {
        a(this._thumbcontent._thumbcontainer).children().filter(".active").removeClass("active"), a(this._thumbcontent._thumbcontainer).children().eq(this.owl_currentitem).addClass("active")
    }, b.prototype.initialize = function() {
        var b = this.owl._options;
        this._thumbcontent._thumbcontainer = a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);
        var c;
        if (this.owl._options.thumbImage)
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + '><img src="' + this._thumbcontent[c].attr("src") + '" alt="' + this._thumbcontent[c].attr("alt") + '" /></button>');
        else
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<div class=" + b.thumbItemClass + ">" + this._thumbcontent[c] + "</div>");
        a(this._thumbcontent._thumbcontainer).on("click", "button", a.proxy(function(c) {
            var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer) ? a(c.target).index() : a(c.target).parent().index();
            c.preventDefault(), this.owl.to(d, 300)
        }, this))
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this.owl.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Thumbs = b
}(window.Zepto || window.jQuery, window, document);



/*jParticle*/
! function(e) {
    "use strict";
    var t, n;
    n = {}, e.fn.jParticle = function(n) {
        return this.each(function(i, a) {
            "object" == typeof a.sandbox && e(a).removeJParticle(), a.sandbox = t(a, n)
        }), this
    }, e.fn.removeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && (t.sandbox.remove(), delete t.sandbox)
        }), this
    }, e.fn.freezeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && t.sandbox.freeze()
        }), this
    }, e.fn.unfreezeJParticle = function() {
        return this.each(function(e, t) {
            t.sandbox && t.sandbox.unfreeze()
        }), this
    }, t = function(t, i) {
        var a, o;
        return a = {}, a.canvas = {}, a.mouse = {}, a.particles = [], a.isAnimated = !1, a.initialize = function(e, t) {
            a.initParams(t), a.initHTML(e), a.initParticles(), a.initEvents(), a.initAnimation()
        }, a.initParams = function(t) {
            t && t.color && (!t.particle || t.particle && !t.particle.color) && (t.particle || (t.particle = {}), t.particle.color = t.color), a.params = e.extend({
                particlesNumber: 100,
                linkDist: 50,
                createLinkDist: 150,
                disableLinks: !1,
                disableMouse: !1,
                background: "black",
                color: "white",
                width: null,
                height: null,
                linksWidth: 1
            }, t)
        }, a.initHTML = function(t) {
            var n;
            n = a.canvas, n.container = e(t), n.element = e("<canvas/>"), n.context = n.element.get(0).getContext("2d"), n.container.append(n.element), n.element.css("display", "block"), n.element.get(0).width = a.params.width ? a.params.width : n.container.width(), n.element.get(0).height = a.params.height ? a.params.height : n.container.height(), n.element.css("background", a.params.background)
        }, a.resize = function(e, t) {
            e && (canvas.element.get(0).width = e), t && (canvas.element.get(0).height = t)
        }, a.initParticles = function() {
            var e, t;
            for (e = 0, t = a.params.particlesNumber; t > e; e += 1) a.particles.push(o(a.canvas.element.get(0), a.params.particle))
        }, a.initEvents = function() {
            a.canvas.element.mouseenter(function() {
                a.mouse.hoverCanvas = !0, a.isAnimated || a.draw()
            }), a.canvas.element.mouseleave(function() {
                a.mouse.hoverCanvas = !1
            }), a.canvas.element.mousemove(function(t) {
                a.mouse = e.extend(a.mouse, n.getMousePosition(t, a.canvas.element[0]))
            })
        }, a.initAnimation = function() {
            window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.ORequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                setTimeOut(e, 1e3 / 60)
            }, a.isAnimated = !0, a.draw()
        }, a.draw = function() {
            var e, t, n, i, o, r;
            for (e = 0, n = a.particles.length, i = a.canvas, i.context.clearRect(0, 0, i.element.get(0).width, i.element.get(0).height); n > e; e += 1)
                if (o = a.particles[e], a.isAnimated && o.update(), o.draw(), !a.params.disableMouse && a.mouse.hoverCanvas && a.drawLink(o.getPosition("x"), o.getPosition("y"), a.mouse.x, a.mouse.y), !a.params.disableLinks)
                    for (t = e + 1; n > t; t += 1) r = a.particles[t], a.drawLink(o.getPosition("x"), o.getPosition("y"), r.getPosition("x"), r.getPosition("y"));
            a.requestID = window.requestAnimFrame(a.draw)
        }, a.drawLink = function(e, t, i, o) {
            var r;
            n.getDistance(e, t, i, o) <= a.params.createLinkDist && (r = a.canvas.context, r.save(), r.beginPath(), r.lineWidth = a.params.linksWidth, r.moveTo(e, t), r.lineTo(i, o), r.globalAlpha = a.getOpacityLink(e, t, i, o), r.strokeStyle = a.params.color, r.lineCap = "round", r.stroke(), r.closePath(), r.restore())
        }, a.getOpacityLink = function(e, t, i, o) {
            var r, s, c, u;
            return r = n.getDistance(e, t, i, o), c = a.params.linkDist, u = a.params.createLinkDist, s = c >= r ? 1 : r > u ? 0 : 1 - 100 * (r - c) / (u - c) / 100
        }, a.freeze = function() {
            a.isAnimated && (a.isAnimated = !1)
        }, a.unfreeze = function() {
            a.isAnimated || (a.isAnimated = !0)
        }, a.remove = function() {
            a.canvas.element.remove()
        }, o = function(t, i) {
            var a;
            return a = {}, a.canvas = {}, a.vector = {}, a.initialize = function(t, n) {
                a.params = e.extend({
                    color: "white",
                    minSize: 2,
                    maxSize: 4,
                    speed: 60
                }, n), a.setCanvasContext(t), a.initSize(), a.initPosition(), a.initVectors()
            }, a.initPosition = function() {
                a.x = n.getRandNumber(0 + a.radius, a.canvas.element.width - a.radius), a.y = n.getRandNumber(0 + a.radius, a.canvas.element.height - a.radius)
            }, a.initSize = function() {
                a.size = n.getRandNumber(a.params.minSize, a.params.maxSize), a.radius = a.size / 2
            }, a.initVectors = function() {
                do a.vector.x = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1), a.vector.y = n.getRandNumber(-a.params.speed / 60, a.params.speed / 60, !1); while (0 == a.vector.x || 0 == a.vector.y)
            }, a.setCanvasContext = function(e) {
                var t;
                if (a.canvas.element = e, t = e.getContext("2d"), "object" != typeof t || "object" != typeof t.canvas) throw "Error: Can't set canvas context to Particle because context isn't a CanvasRenderingContext2D object.";
                a.canvas.context = t
            }, a.draw = function() {
                var e = a.canvas.context;
                e.beginPath(), e.arc(a.x, a.y, a.size / 2, 0, 2 * Math.PI), e.fillStyle = a.params.color, e.fill(), e.closePath()
            }, a.update = function() {
                a.x += a.vector.x, a.y += a.vector.y, (0 > a.x - a.radius || a.x + a.radius > a.canvas.element.width) && (a.vector.x = -a.vector.x), (0 > a.y - a.radius || a.y + a.radius > a.canvas.element.height) && (a.vector.y = -a.vector.y)
            }, a.getPosition = function(e) {
                return "string" == typeof e && "x" != e && "y" != e && (e = null), "string" == typeof e ? a[e] : {
                    x: a.x,
                    y: a.y
                }
            }, a.initialize(t, i), {
                getPosition: a.getPosition,
                update: a.update,
                draw: a.draw
            }
        }, a.initialize(t, i), {
            remove: a.remove,
            freeze: a.freeze,
            unfreeze: a.unfreeze,
            resize: a.resize
        }
    }, n.getRandNumber = function(e, t, n) {
        var i;
        return null == e && (e = 0), null == t && (t = 10), null == n && (n = !0), i = Math.random() * (t - e) + e, n ? Math.round(i) : i
    }, n.getDistance = function(e, t, n, i) {
        return Math.sqrt(Math.pow(n - e, 2) + Math.pow(i - t, 2))
    }, n.getMousePosition = function(t, n) {
        var i;
        return "undefined" == typeof n && (n = e("body")[0]), i = n.getBoundingClientRect(), {
            x: t.clientX - i.left,
            y: t.clientY - i.top
        }
    }
}(jQuery);

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.1
 **/
(function(e, t) {
    if (typeof exports === "object") {
        module.exports = t(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define("EasyPieChart", ["jquery"], t)
    } else {
        t(e.jQuery)
    }
})(this, function(e) {
    var t = function(e, t) {
        var n;
        var r = document.createElement("canvas");
        if (typeof G_vmlCanvasManager !== "undefined") {
            G_vmlCanvasManager.initElement(r)
        }
        var i = r.getContext("2d");
        r.width = r.height = t.size;
        e.appendChild(r);
        var s = 1;
        if (window.devicePixelRatio > 1) {
            s = window.devicePixelRatio;
            r.style.width = r.style.height = [t.size, "px"].join("");
            r.width = r.height = t.size * s;
            i.scale(s, s)
        }
        i.translate(t.size / 2, t.size / 2);
        i.rotate((-1 / 2 + t.rotate / 180) * Math.PI);
        var o = (t.size - t.lineWidth) / 2;
        if (t.scaleColor && t.scaleLength) {
            o -= t.scaleLength + 2
        }
        Date.now = Date.now || function() {
            return +(new Date)
        };
        var u = function(e, t, n) {
            n = Math.min(Math.max(0, n || 1), 1);
            i.beginPath();
            i.arc(0, 0, o, 0, Math.PI * 2 * n, false);
            i.strokeStyle = e;
            i.lineWidth = t;
            i.stroke()
        };
        var a = function() {
            var e;
            var n;
            var r = 24;
            i.lineWidth = 1;
            i.fillStyle = t.scaleColor;
            i.save();
            for (var r = 24; r > 0; --r) {
                if (r % 6 === 0) {
                    n = t.scaleLength;
                    e = 0
                } else {
                    n = t.scaleLength * .6;
                    e = t.scaleLength - n
                }
                i.fillRect(-t.size / 2 + e, 0, n, 1);
                i.rotate(Math.PI / 12)
            }
            i.restore()
        };
        var f = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }();
        var l = function() {
            t.scaleColor && a();
            t.trackColor && u(t.trackColor, t.lineWidth)
        };
        this.clear = function() {
            i.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        };
        this.draw = function(e) {
            if (!!t.scaleColor || !!t.trackColor) {
                if (i.getImageData && i.putImageData) {
                    if (!n) {
                        l();
                        n = i.getImageData(0, 0, t.size * s, t.size * s)
                    } else {
                        i.putImageData(n, 0, 0)
                    }
                } else {
                    this.clear();
                    l()
                }
            } else {
                this.clear()
            }
            i.lineCap = t.lineCap;
            var r;
            if (typeof t.barColor === "function") {
                r = t.barColor(e)
            } else {
                r = t.barColor
            }
            if (e > 0) {
                u(r, t.lineWidth, e / 100)
            }
        }.bind(this);
        this.animate = function(e, n) {
            var r = Date.now();
            t.onStart(e, n);
            var i = function() {
                var s = Math.min(Date.now() - r, t.animate);
                var o = t.easing(this, s, e, n - e, t.animate);
                this.draw(o);
                t.onStep(e, n, o);
                if (s >= t.animate) {
                    t.onStop(e, n)
                } else {
                    f(i)
                }
            }.bind(this);
            f(i)
        }.bind(this)
    };
    var n = function(e, n) {
        var r = {
            barColor: "#F54A4B",
            trackColor: "#ccc",
            scaleColor: "#ccc",
            scaleLength: 0,
            lineCap: "round",
            lineWidth: 10,
            size: 152,
            rotate: 0,
            animate: 4e3,
            easing: function(e, t, n, r, i) {
                t = t / (i / 2);
                if (t < 1) {
                    return r / 2 * t * t + n
                }
                return -r / 2 * (--t * (t - 2) - 1) + n
            },
            onStart: function(e, t) {
                return
            },
            onStep: function(e, t, n) {
                return
            },
            onStop: function(e, t) {
                return
            }
        };
        if (typeof t !== "undefined") {
            r.renderer = t
        } else if (typeof SVGRenderer !== "undefined") {
            r.renderer = SVGRenderer
        } else {
            throw new Error("Please load either the SVG- or the CanvasRenderer")
        }
        var i = {};
        var s = 0;
        var o = function() {
            this.el = e;
            this.options = i;
            for (var t in r) {
                if (r.hasOwnProperty(t)) {
                    i[t] = n && typeof n[t] !== "undefined" ? n[t] : r[t];
                    if (typeof i[t] === "function") {
                        i[t] = i[t].bind(this)
                    }
                }
            }
            if (typeof i.easing === "string" && typeof jQuery !== "undefined" && jQuery.isFunction(jQuery.easing[i.easing])) {
                i.easing = jQuery.easing[i.easing]
            } else {
                i.easing = r.easing
            }
            this.renderer = new i.renderer(e, i);
            this.renderer.draw(s);
            if (e.dataset && e.dataset.percent) {
                this.update(parseFloat(e.dataset.percent))
            } else if (e.getAttribute && e.getAttribute("data-percent")) {
                this.update(parseFloat(e.getAttribute("data-percent")))
            }
        }.bind(this);
        this.update = function(e) {
            e = parseFloat(e);
            if (i.animate) {
                this.renderer.animate(s, e)
            } else {
                this.renderer.draw(e)
            }
            s = e;
            return this
        }.bind(this);
        o()
    };
    e.fn.easyPieChart = function(t) {
        return this.each(function() {
            if (!e.data(this, "easyPieChart")) {
                e.data(this, "easyPieChart", new n(this, t))
            }
        })
    }
});
var Froogaloop = function() {
    function e(a) {
        return new e.fn.init(a)
    }

    function g(a, c, b) {
        if (!b.contentWindow.postMessage) return !1;
        a = JSON.stringify({
            method: a,
            value: c
        });
        b.contentWindow.postMessage(a, h)
    }

    function l(a) {
        var c, b;
        try {
            c = JSON.parse(a.data), b = c.event || c.method
        } catch (e) {}
        "ready" != b || k || (k = !0);
        if (!/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === h && (h = a.origin);
        a = c.value;
        var m = c.data,
            f = "" === f ? null : c.player_id;
        c = f ? d[f][b] : d[b];
        b = [];
        if (!c) return !1;
        void 0 !== a && b.push(a);
        m && b.push(m);
        f && b.push(f);
        return 0 < b.length ? c.apply(null, b) : c.call()
    }

    function n(a, c, b) {
        b ? (d[b] || (d[b] = {}), d[b][a] = c) : d[a] = c
    }
    var d = {},
        k = !1,
        h = "*";
    e.fn = e.prototype = {
        element: null,
        init: function(a) {
            "string" === typeof a && (a = document.getElementById(a));
            this.element = a;
            return this
        },
        api: function(a, c) {
            if (!this.element || !a) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null,
                e = c && c.constructor && c.call && c.apply ? null : c,
                f = c && c.constructor && c.call && c.apply ? c : null;
            f && n(a, f, d);
            g(a, e, b);
            return this
        },
        addEvent: function(a, c) {
            if (!this.element) return !1;
            var b = this.element,
                d = "" !== b.id ? b.id : null;
            n(a, c, d);
            "ready" != a ? g("addEventListener", a, b) : "ready" == a && k && c.call(null, d);
            return this
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var c = this.element,
                b = "" !== c.id ? c.id : null;
            a: {
                if (b && d[b]) {
                    if (!d[b][a]) {
                        b = !1;
                        break a
                    }
                    d[b][a] = null
                } else {
                    if (!d[a]) {
                        b = !1;
                        break a
                    }
                    d[a] = null
                }
                b = !0
            }
            "ready" != a && b && g("removeEventListener", a, c)
        }
    };
    e.fn.init.prototype = e.fn;
    window.addEventListener ? window.addEventListener("message", l, !1) : window.attachEvent("onmessage", l);
    return window.Froogaloop =
        window.$f = e
}();
(function(d, c, a, f) {
    var e = {
        videoMaxWidth: "855px",
        youtubePlayerParams: false,
        vimeoPlayerParams: false,
        dailymotionPlayerParams: false,
        videojs: false
    };
    var b = function(g) {
        this.core = d(g).data("lightGallery");
        this.$el = d(g);
        this.core.s = d.extend({}, e, this.core.s);
        this.videoLoaded = false;
        this.init();
        return this
    };
    b.prototype.init = function() {
        var h = this;
        h.core.$el.on("hasVideo.lg.tm", function(k, i, m, j) {
            h.core.$slide.eq(i).find(".lg-video").append(h.loadVideo(m, "lg-object", true, i, j));
            if (j) {
                if (h.core.s.videojs) {
                    try {
                        videojs(h.core.$slide.eq(i).find(".lg-html5").get(0), {}, function() {
                            if (!h.videoLoaded) {
                                this.play()
                            }
                        })
                    } catch (l) {
                        console.error("Make sure you have included videojs")
                    }
                } else {
                    h.core.$slide.eq(i).find(".lg-html5").get(0).play()
                }
            }
        });
        h.core.$el.on("onAferAppendSlide.lg.tm", function(j, i) {
            h.core.$slide.eq(i).find(".lg-video-cont").css("max-width", h.core.s.videoMaxWidth);
            h.videoLoaded = true
        });
        var g = function(r) {
            if (r.find(".lg-object").hasClass("lg-has-poster") && r.find(".lg-object").is(":visible")) {
                if (!r.hasClass("lg-has-video")) {
                    r.addClass("lg-video-palying lg-has-video");
                    var m;
                    var l;
                    var q = function(u, s) {
                        r.find(".lg-video").append(h.loadVideo(u, "", false, h.core.index, s));
                        if (s) {
                            if (h.core.s.videojs) {
                                try {
                                    videojs(h.core.$slide.eq(h.core.index).find(".lg-html5").get(0), {}, function() {
                                        this.play()
                                    })
                                } catch (t) {
                                    console.error("Make sure you have included videojs")
                                }
                            } else {
                                h.core.$slide.eq(h.core.index).find(".lg-html5").get(0).play()
                            }
                        }
                    };
                    if (h.core.s.dynamic) {
                        m = h.core.s.dynamicEl[h.core.index].src;
                        l = h.core.s.dynamicEl[h.core.index].html;
                        q(m, l)
                    } else {
                        m = h.core.$items.eq(h.core.index).attr("href") || h.core.$items.eq(h.core.index).attr("data-src");
                        l = h.core.$items.eq(h.core.index).attr("data-html");
                        q(m, l)
                    }
                    var k = r.find(".lg-object");
                    r.find(".lg-video").append(k);
                    if (!r.find(".lg-video-object").hasClass("lg-html5")) {
                        r.removeClass("lg-complete");
                        r.find(".lg-video-object").on("load.lg error.lg", function() {
                            r.addClass("lg-complete")
                        })
                    }
                } else {
                    var p = r.find(".lg-youtube").get(0);
                    var n = r.find(".lg-vimeo").get(0);
                    var j = r.find(".lg-dailymotion").get(0);
                    var i = r.find(".lg-html5").get(0);
                    if (p) {
                        p.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
                    } else {
                        if (n) {
                            try {
                                $f(n).api("play")
                            } catch (o) {
                                console.error("Make sure you have included froogaloop2 js")
                            }
                        } else {
                            if (j) {
                                j.contentWindow.postMessage("play", "*")
                            } else {
                                if (i) {
                                    if (h.core.s.videojs) {
                                        try {
                                            videojs(i).play()
                                        } catch (o) {
                                            console.error("Make sure you have included videojs")
                                        }
                                    } else {
                                        i.play()
                                    }
                                }
                            }
                        }
                    }
                    r.addClass("lg-video-palying")
                }
            }
        };
        if (h.core.doCss() && h.core.$items.length > 1 && ((h.core.s.enableSwipe && h.core.isTouch) || (h.core.s.enableDrag && !h.core.isTouch))) {
            h.core.$el.on("onSlideClick.lg.tm", function() {
                var i = h.core.$slide.eq(h.core.index);
                g(i)
            })
        } else {
            h.core.$slide.on("click.lg", function() {
                g(d(this))
            })
        }
        h.core.$el.on("onBeforeSlide.lg.tm", function(j, n, p) {
            var s = h.core.$slide.eq(n);
            var r = s.find(".lg-youtube").get(0);
            var o = s.find(".lg-vimeo").get(0);
            var k = s.find(".lg-dailymotion").get(0);
            var i = s.find(".lg-html5").get(0);
            if (r) {
                r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            } else {
                if (o) {
                    try {
                        $f(o).api("pause")
                    } catch (q) {
                        console.error("Make sure you have included froogaloop2 js")
                    }
                } else {
                    if (k) {
                        k.contentWindow.postMessage("pause", "*")
                    } else {
                        if (i) {
                            if (h.core.s.videojs) {
                                try {
                                    videojs(i).pause()
                                } catch (q) {
                                    console.error("Make sure you have included videojs")
                                }
                            } else {
                                i.pause()
                            }
                        }
                    }
                }
            }
            var m;
            if (h.core.s.dynamic) {
                m = h.core.s.dynamicEl[p].src
            } else {
                m = h.core.$items.eq(p).attr("href") || h.core.$items.eq(p).attr("data-src")
            }
            var l = h.core.isVideo(m, p) || {};
            if (l.youtube || l.vimeo || l.dailymotion) {
                h.core.$outer.addClass("lg-hide-download")
            }
        });
        h.core.$el.on("onAfterSlide.lg.tm", function(j, i) {
            h.core.$slide.eq(i).removeClass("lg-video-palying")
        })
    };
    b.prototype.loadVideo = function(h, o, l, n, m) {
        var i = "";
        var k = 1;
        var p = "";
        var g = this.core.isVideo(h, n) || {};
        if (l) {
            if (this.videoLoaded) {
                k = 0
            } else {
                k = 1
            }
        }
        if (g.youtube) {
            p = "?wmode=opaque&autoplay=" + k + "&enablejsapi=1";
            if (this.core.s.youtubePlayerParams) {
                p = p + "&" + d.param(this.core.s.youtubePlayerParams)
            }
            i = '<iframe class="lg-video-object lg-youtube ' + o + '" width="560" height="315" src="//www.youtube.com/embed/' + g.youtube[1] + p + '" frameborder="0" allowfullscreen></iframe>'
        } else {
            if (g.vimeo) {
                p = "?autoplay=" + k + "&api=1";
                if (this.core.s.vimeoPlayerParams) {
                    p = p + "&" + d.param(this.core.s.vimeoPlayerParams)
                }
                i = '<iframe class="lg-video-object lg-vimeo ' + o + '" width="560" height="315"  src="http://player.vimeo.com/video/' + g.vimeo[1] + p + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
            } else {
                if (g.dailymotion) {
                    p = "?wmode=opaque&autoplay=" + k + "&api=postMessage";
                    if (this.core.s.dailymotionPlayerParams) {
                        p = p + "&" + d.param(this.core.s.dailymotionPlayerParams)
                    }
                    i = '<iframe class="lg-video-object lg-dailymotion ' + o + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + g.dailymotion[1] + p + '" frameborder="0" allowfullscreen></iframe>'
                } else {
                    if (g.html5) {
                        var j = m.substring(0, 1);
                        if (j === "." || j === "#") {
                            m = d(m).html()
                        }
                        i = m
                    }
                }
            }
        }
        return i
    };
    b.prototype.destroy = function() {
        this.videoLoaded = false
    };
    d.fn.lightGallery.modules.video = b
})(jQuery, window, document);
/**
 * Single Page Nav Plugin
 * Copyright (c) 2014 Chris Wojcik <hello@chriswojcik.net>
 * Dual licensed under MIT and GPL.
 * @author Chris Wojcik
 * @version 1.2.0
 */

// Utility
if (typeof Object.create !== 'function') {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F()
    }
}(function($, window, document, undefined) {
    "use strict";
    var SinglePageNav = {
        init: function(options, container) {
            this.options = $.extend({}, $.fn.singlePageNav.defaults, options);
            this.container = container;
            this.$container = $(container);
            this.$links = this.$container.find('a');
            if (this.options.filter !== '') {
                this.$links = this.$links.filter(this.options.filter)
            }
            this.$window = $(window);
            this.$htmlbody = $('html, body');
            this.$links.on('click.singlePageNav', $.proxy(this.handleClick, this));
            this.didScroll = false;
            this.checkPosition();
            this.setTimer()
        },
        handleClick: function(e) {
            var self = this,
                link = e.currentTarget,
                $elem = $(link.hash);
            e.preventDefault();
            if ($elem.length) {
                self.clearTimer();
                if (typeof self.options.beforeStart === 'function') {
                    self.options.beforeStart()
                }
                self.setActiveLink(link.hash);
                self.scrollTo($elem, function() {
                    if (self.options.updateHash && history.pushState) {
                        history.pushState(null, null, link.hash)
                    }
                    self.setTimer();
                    if (typeof self.options.onComplete === 'function') {
                        self.options.onComplete()
                    }
                })
            }
        },
        scrollTo: function($elem, callback) {
            var self = this;
            var target = self.getCoords($elem).top;
            var called = false;
            self.$htmlbody.stop().animate({
                scrollTop: target
            }, {
                duration: self.options.speed,
                easing: self.options.easing,
                complete: function() {
                    if (typeof callback === 'function' && !called) {
                        callback()
                    }
                    called = true
                }
            })
        },
        setTimer: function() {
            var self = this;
            self.$window.on('scroll.singlePageNav', function() {
                self.didScroll = true
            });
            self.timer = setInterval(function() {
                if (self.didScroll) {
                    self.didScroll = false;
                    self.checkPosition()
                }
            }, 250)
        },
        clearTimer: function() {
            clearInterval(this.timer);
            this.$window.off('scroll.singlePageNav');
            this.didScroll = false
        },
        checkPosition: function() {
            var scrollPos = this.$window.scrollTop();
            var currentSection = this.getCurrentSection(scrollPos);
            if (currentSection !== null) {
                this.setActiveLink(currentSection)
            }
        },
        getCoords: function($elem) {
            return {
                top: Math.round($elem.offset().top) - this.options.offset
            }
        },
        setActiveLink: function(href) {
            var $activeLink = this.$container.find("a[href$='" + href + "']");
            if (!$activeLink.hasClass(this.options.currentClass)) {
                this.$links.removeClass(this.options.currentClass);
                $activeLink.addClass(this.options.currentClass)
            }
        },
        getCurrentSection: function(scrollPos) {
            var i, hash, coords, section;
            for (i = 0; i < this.$links.length; i++) {
                hash = this.$links[i].hash;
                if ($(hash).length) {
                    coords = this.getCoords($(hash));
                    if (scrollPos >= coords.top - this.options.threshold) {
                        section = hash;
                        if ($(".scroll-nav  a").hasClass("act-link")) {
                            $(".scroll-nav  a.act-link").each(function() {
                                var bgt = $(this).data('bgtex');
                                $(".footer-title h2").html(bgt)
                            })
                        }
                    }
                }
            }
            return section || ((this.$links.length === 0) ? (null) : (this.$links[0].hash))
        }
    };
    $.fn.singlePageNav = function(options) {
        return this.each(function() {
            var singlePageNav = Object.create(SinglePageNav);
            singlePageNav.init(options, this)
        })
    };
    $.fn.singlePageNav.defaults = {
        offset: 0,
        threshold: 120,
        speed: 400,
        currentClass: 'current',
        easing: 'swing',
        updateHash: false,
        filter: '',
        onComplete: false,
        beforeStart: false
    }
})(jQuery, window, document);
/**
jQuery Sliding Menu 
*/
(function($) {
    var usedIds = [];
    $.fn.menu = function(options) {
        var selector = this.selector;
        var settings = $.extend({
            dataJSON: false,
            backLabel: ''
        }, options);
        return this.each(function() {
            var self = this,
                menu = $(self),
                data;
            if (menu.hasClass('sliding-menu')) {
                return
            }
            var menuWidth = menu.width();
            if (settings.dataJSON) {
                data = processJSON(settings.dataJSON)
            } else {
                data = process(menu)
            }
            menu.empty().addClass('sliding-menu');
            var rootPanel;
            if (settings.dataJSON) {
                $(data).each(function(index, item) {
                    var panel = $('<ul></ul>');
                    if (item.root) {
                        rootPanel = '#' + item.id
                    }
                    panel.attr('id', item.id);
                    panel.addClass('menu-panel');
                    panel.width(menuWidth);
                    $(item.children).each(function(index, item) {
                        var link = $('<a></a>');
                        link.attr('class', item.styleClass);
                        link.attr('href', item.href);
                        link.text(item.label);
                        var li = $('<li></li>');
                        li.append(link);
                        panel.append(li)
                    });
                    menu.append(panel)
                })
            } else {
                $(data).each(function(index, item) {
                    var panel = $(item);
                    if (panel.hasClass('menu-panel-root')) {
                        rootPanel = '#' + panel.attr('id')
                    }
                    panel.width(menuWidth);
                    menu.append(item)
                })
            }
            rootPanel = $(rootPanel);
            rootPanel.addClass('menu-panel-root');
            var currentPanel = rootPanel;
            menu.height(rootPanel.height());
            var wrapper = $('<div></div>').addClass('sliding-menu-wrapper').width(data.length * menuWidth);
            menu.wrapInner(wrapper);
            wrapper = $('.sliding-menu-wrapper', menu);
            $('a', self).on('click', function(e) {
                var href = $(this).attr('href'),
                    label = $(this).text();
                if (wrapper.is(':animated')) {
                    e.preventDefault();
                    return
                }
                if (href == '#') {
                    e.preventDefault()
                } else if (href.indexOf('#menu-panel') == 0) {
                    var target = $(href),
                        isBack = $(this).hasClass('back'),
                        marginLeft = parseInt(wrapper.css('margin-left'));
                    if (isBack) {
                        if (href == '#menu-panel-back') {
                            target = currentPanel.prev()
                        }
                        wrapper.stop(true, true).animate({
                            marginLeft: marginLeft + menuWidth
                        }, 'fast')
                    } else {
                        target.insertAfter(currentPanel);
                        if (settings.backLabel === true) {
                            $('.back', target).text(label)
                        } else {
                            $('.back', target).text(settings.backLabel)
                        }
                        wrapper.stop(true, true).animate({
                            marginLeft: marginLeft - menuWidth
                        }, 'fast')
                    }
                    currentPanel = target;
                    menu.stop(true, true).animate({
                        height: target.height()
                    }, 'fast');
                    e.preventDefault()
                }
            });
            return this
        });

        function process(data) {
            var ul = $('ul', data),
                panels = [];
            $(ul).each(function(index, item) {
                var panel = $(item),
                    handler = panel.prev(),
                    id = getNewId();
                if (handler.length == 1) {
                    handler.addClass('nav').attr('href', '#menu-panel-' + id)
                }
                panel.attr('id', 'menu-panel-' + id);
                if (index == 0) {
                    panel.addClass('menu-panel-root')
                } else {
                    panel.addClass('menu-panel');
                    var li = $('<li></li>'),
                        back = $('<a></a>').addClass('back').attr('href', '#menu-panel-back');
                    panel.prepend(back)
                }
                panels.push(item)
            });
            return panels
        }

        function processJSON(data, parent) {
            var root = {
                    id: 'menu-panel-' + getNewId(),
                    children: [],
                    root: (parent ? false : true)
                },
                panels = [];
            if (parent) {
                root.children.push({
                    styleClass: 'back',
                    href: '#' + parent.id
                })
            }
            $(data).each(function(index, item) {
                root.children.push(item);
                if (item.children) {
                    var panel = processJSON(item.children, root);
                    item.href = '#' + panel[0].id;
                    item.styleClass = 'nav';
                    panels = panels.concat(panel)
                }
            });
            return [root].concat(panels)
        }

        function getNewId() {
            var id;
            do {
                id = Math.random().toString(36).substring(3, 8)
            } while (usedIds.indexOf(id) >= 0);
            usedIds.push(id);
            return id
        }
    }
}(jQuery));

/* jquery.nicescroll 3.6.0 InuYaksa*2014 MIT http://nicescroll.areaaperta.com */
(function(f) {
    "function" === typeof define && define.amd ? define(["jquery"], f) : f(jQuery)
})(function(f) {
    var y = !1,
        D = !1,
        N = 0,
        O = 2E3,
        x = 0,
        H = ["webkit", "ms", "moz", "o"],
        s = window.requestAnimationFrame || !1,
        t = window.cancelAnimationFrame || !1;
    if (!s)
        for (var P in H) {
            var E = H[P];
            s || (s = window[E + "RequestAnimationFrame"]);
            t || (t = window[E + "CancelAnimationFrame"] || window[E + "CancelRequestAnimationFrame"])
        }
    var v = window.MutationObserver || window.WebKitMutationObserver || !1,
        I = {
            zindex: "auto",
            cursoropacitymin: 0,
            cursoropacitymax: 1,
            cursorcolor: "#424242",
            cursorwidth: "5px",
            cursorborder: "1px solid #fff",
            cursorborderradius: "5px",
            scrollspeed: 60,
            mousescrollstep: 24,
            touchbehavior: !1,
            hwacceleration: !0,
            usetransition: !0,
            boxzoom: !1,
            dblclickzoom: !0,
            gesturezoom: !0,
            grabcursorenabled: !0,
            autohidemode: !0,
            background: "",
            iframeautoresize: !0,
            cursorminheight: 32,
            preservenativescrolling: !0,
            railoffset: !1,
            railhoffset: !1,
            bouncescroll: !0,
            spacebarenabled: !0,
            railpadding: {
                top: 0,
                right: 0,
                left: 0,
                bottom: 0
            },
            disableoutline: !0,
            horizrailenabled: !0,
            railalign: "right",
            railvalign: "bottom",
            enabletranslate3d: !0,
            enablemousewheel: !0,
            enablekeyboard: !0,
            smoothscroll: !0,
            sensitiverail: !0,
            enablemouselockapi: !0,
            cursorfixedheight: !1,
            directionlockdeadzone: 6,
            hidecursordelay: 400,
            nativeparentscrolling: !0,
            enablescrollonselection: !0,
            overflowx: !0,
            overflowy: !0,
            cursordragspeed: .3,
            rtlmode: "auto",
            cursordragontouch: !1,
            oneaxismousemode: "auto",
            scriptpath: function() {
                var f = document.getElementsByTagName("script"),
                    f = f[f.length - 1].src.split("?")[0];
                return 0 < f.split("/").length ? f.split("/").slice(0, -1).join("/") +
                    "/" : ""
            }(),
            preventmultitouchscrolling: !0
        },
        F = !1,
        Q = function() {
            if (F) return F;
            var f = document.createElement("DIV"),
                c = f.style,
                h = navigator.userAgent,
                m = navigator.platform,
                d = {
                    haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document
                };
            d.isopera = "opera" in window;
            d.isopera12 = d.isopera && "getUserMedia" in navigator;
            d.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
            d.isie = "all" in document && "attachEvent" in f && !d.isopera;
            d.isieold = d.isie && !("msInterpolationMode" in c);
            d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || 7 == document.documentMode);
            d.isie8 = d.isie && "documentMode" in document && 8 == document.documentMode;
            d.isie9 = d.isie && "performance" in window && 9 <= document.documentMode;
            d.isie10 = d.isie && "performance" in window && 10 == document.documentMode;
            d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode;
            d.isie9mobile = /iemobile.9/i.test(h);
            d.isie9mobile && (d.isie9 = !1);
            d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(h);
            d.ismozilla = "MozAppearance" in c;
            d.iswebkit = "WebkitAppearance" in c;
            d.ischrome = "chrome" in window;
            d.ischrome22 = d.ischrome && d.haspointerlock;
            d.ischrome26 = d.ischrome && "transition" in c;
            d.cantouch = "ontouchstart" in document.documentElement || "ontouchstart" in window;
            d.hasmstouch = window.MSPointerEvent || !1;
            d.hasw3ctouch = window.PointerEvent || !1;
            d.ismac = /^mac$/i.test(m);
            d.isios = d.cantouch && /iphone|ipad|ipod/i.test(m);
            d.isios4 = d.isios && !("seal" in Object);
            d.isios7 = d.isios && "webkitHidden" in document;
            d.isandroid = /android/i.test(h);
            d.haseventlistener = "addEventListener" in f;
            d.trstyle = !1;
            d.hastransform = !1;
            d.hastranslate3d = !1;
            d.transitionstyle = !1;
            d.hastransition = !1;
            d.transitionend = !1;
            m = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
            for (h = 0; h < m.length; h++)
                if ("undefined" != typeof c[m[h]]) {
                    d.trstyle = m[h];
                    break
                }
            d.hastransform = !!d.trstyle;
            d.hastransform && (c[d.trstyle] = "translate3d(1px,2px,3px)", d.hastranslate3d = /translate3d/.test(c[d.trstyle]));
            d.transitionstyle = !1;
            d.prefixstyle = "";
            d.transitionend = !1;
            for (var m =
                    "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), n = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), p = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), h = 0; h < m.length; h++)
                if (m[h] in c) {
                    d.transitionstyle = m[h];
                    d.prefixstyle = n[h];
                    d.transitionend = p[h];
                    break
                }
            d.ischrome26 && (d.prefixstyle = n[1]);
            d.hastransition = d.transitionstyle;
            a: {
                h = ["-webkit-grab", "-moz-grab", "grab"];
                if (d.ischrome &&
                    !d.ischrome22 || d.isie) h = [];
                for (m = 0; m < h.length; m++)
                    if (n = h[m], c.cursor = n, c.cursor == n) {
                        c = n;
                        break a
                    }
                c = "url(//mail.google.com/mail/images/2/openhand.cur),n-resize"
            }
            d.cursorgrabvalue = c;
            d.hasmousecapture = "setCapture" in f;
            d.hasMutationObserver = !1 !== v;
            return F = d
        },
        R = function(k, c) {
            function h() {
                var b = a.doc.css(e.trstyle);
                return b && "matrix" == b.substr(0, 6) ? b.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
            }

            function m() {
                var b = a.win;
                if ("zIndex" in b) return b.zIndex();
                for (; 0 < b.length && 9 != b[0].nodeType;) {
                    var g =
                        b.css("zIndex");
                    if (!isNaN(g) && 0 != g) return parseInt(g);
                    b = b.parent()
                }
                return !1
            }

            function d(b, g, q) {
                g = b.css(g);
                b = parseFloat(g);
                return isNaN(b) ? (b = w[g] || 0, q = 3 == b ? q ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && b && (b += 1), q ? b : 0) : b
            }

            function n(b, g, q, c) {
                a._bind(b, g, function(a) {
                    a = a ? a : window.event;
                    var c = {
                        original: a,
                        target: a.target || a.srcElement,
                        type: "wheel",
                        deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1,
                        deltaX: 0,
                        deltaZ: 0,
                        preventDefault: function() {
                            a.preventDefault ? a.preventDefault() :
                                a.returnValue = !1;
                            return !1
                        },
                        stopImmediatePropagation: function() {
                            a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0
                        }
                    };
                    "mousewheel" == g ? (c.deltaY = -.025 * a.wheelDelta, a.wheelDeltaX && (c.deltaX = -.025 * a.wheelDeltaX)) : c.deltaY = a.detail;
                    return q.call(b, c)
                }, c)
            }

            function p(b, g, c) {
                var d, e;
                0 == b.deltaMode ? (d = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaX), e = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaY)) : 1 == b.deltaMode && (d = -Math.floor(b.deltaX * a.opt.mousescrollstep), e = -Math.floor(b.deltaY * a.opt.mousescrollstep));
                g && a.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0, c && (0 > d ? a.getScrollLeft() >= a.page.maxw : 0 >= a.getScrollLeft()) && (e = d, d = 0));
                d && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += d, a.debounced("mousewheelx", function() {
                    var b = a.lastdeltax;
                    a.lastdeltax = 0;
                    a.rail.drag || a.doScrollLeftBy(b)
                }, 15));
                if (e) {
                    if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive)
                        if (0 > e) {
                            if (a.getScrollTop() >= a.page.maxh) return !0
                        } else if (0 >= a.getScrollTop()) return !0;
                    a.scrollmom && a.scrollmom.stop();
                    a.lastdeltay += e;
                    a.debounced("mousewheely",
                        function() {
                            var b = a.lastdeltay;
                            a.lastdeltay = 0;
                            a.rail.drag || a.doScrollBy(b)
                        }, 15)
                }
                b.stopImmediatePropagation();
                return b.preventDefault()
            }
            var a = this;
            this.version = "3.6.0";
            this.name = "nicescroll";
            this.me = c;
            this.opt = {
                doc: f("body"),
                win: !1
            };
            f.extend(this.opt, I);
            this.opt.snapbackspeed = 80;
            if (k)
                for (var G in a.opt) "undefined" != typeof k[G] && (a.opt[G] = k[G]);
            this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
            this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
            this.haswrapper = !1 !== a.opt.win;
            this.win = a.opt.win || (this.ispage ? f(window) : this.doc);
            this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win;
            this.body = f("body");
            this.iframe = this.isfixed = this.viewport = !1;
            this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
            this.istextarea = "TEXTAREA" == this.win[0].nodeName;
            this.forcescreen = !1;
            this.canshowonmouseevent = "scroll" != a.opt.autohidemode;
            this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick =
                this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
            this.scroll = {
                x: 0,
                y: 0
            };
            this.scrollratio = {
                x: 0,
                y: 0
            };
            this.cursorheight = 20;
            this.scrollvaluemax = 0;
            this.isrtlmode = "auto" == this.opt.rtlmode ? "rtl" == (this.win[0] == window ? this.body : this.win).css("direction") : !0 === this.opt.rtlmode;
            this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
            do this.id = "ascrail" + O++; while (document.getElementById(this.id));
            this.hasmousefocus = this.hasfocus =
                this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
            this.visibility = !0;
            this.hidden = this.locked = this.railslocked = !1;
            this.cursoractive = !0;
            this.wheelprevented = !1;
            this.overflowx = a.opt.overflowx;
            this.overflowy = a.opt.overflowy;
            this.nativescrollingarea = !1;
            this.checkarea = 0;
            this.events = [];
            this.saved = {};
            this.delaylist = {};
            this.synclist = {};
            this.lastdeltay = this.lastdeltax = 0;
            this.detected = Q();
            var e = f.extend({}, this.detected);
            this.ishwscroll = (this.canhwscroll = e.hastransform &&
                a.opt.hwacceleration) && a.haswrapper;
            this.hasreversehr = this.isrtlmode && !e.iswebkit;
            this.istouchcapable = !1;
            !e.cantouch || e.isios || e.isandroid || !e.iswebkit && !e.ismozilla || (this.istouchcapable = !0, e.cantouch = !1);
            a.opt.enablemouselockapi || (e.hasmousecapture = !1, e.haspointerlock = !1);
            this.debounced = function(b, g, c) {
                var d = a.delaylist[b];
                a.delaylist[b] = g;
                d || setTimeout(function() {
                    var g = a.delaylist[b];
                    a.delaylist[b] = !1;
                    g.call(a)
                }, c)
            };
            var r = !1;
            this.synched = function(b, g) {
                a.synclist[b] = g;
                (function() {
                    r || (s(function() {
                        r = !1;
                        for (var b in a.synclist) {
                            var g = a.synclist[b];
                            g && g.call(a);
                            a.synclist[b] = !1
                        }
                    }), r = !0)
                })();
                return b
            };
            this.unsynched = function(b) {
                a.synclist[b] && (a.synclist[b] = !1)
            };
            this.css = function(b, g) {
                for (var c in g) a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c])
            };
            this.scrollTop = function(b) {
                return "undefined" == typeof b ? a.getScrollTop() : a.setScrollTop(b)
            };
            this.scrollLeft = function(b) {
                return "undefined" == typeof b ? a.getScrollLeft() : a.setScrollLeft(b)
            };
            var A = function(a, g, c, d, e, f, h) {
                this.st = a;
                this.ed = g;
                this.spd = c;
                this.p1 =
                    d || 0;
                this.p2 = e || 1;
                this.p3 = f || 0;
                this.p4 = h || 1;
                this.ts = (new Date).getTime();
                this.df = this.ed - this.st
            };
            A.prototype = {
                B2: function(a) {
                    return 3 * a * a * (1 - a)
                },
                B3: function(a) {
                    return 3 * a * (1 - a) * (1 - a)
                },
                B4: function(a) {
                    return (1 - a) * (1 - a) * (1 - a)
                },
                getNow: function() {
                    var a = 1 - ((new Date).getTime() - this.ts) / this.spd,
                        g = this.B2(a) + this.B3(a) + this.B4(a);
                    return 0 > a ? this.ed : this.st + Math.round(this.df * g)
                },
                update: function(a, g) {
                    this.st = this.getNow();
                    this.ed = a;
                    this.spd = g;
                    this.ts = (new Date).getTime();
                    this.df = this.ed - this.st;
                    return this
                }
            };
            if (this.ishwscroll) {
                this.doc.translate = {
                    x: 0,
                    y: 0,
                    tx: "0px",
                    ty: "0px"
                };
                e.hastranslate3d && e.isios && this.doc.css("-webkit-backface-visibility", "hidden");
                this.getScrollTop = function(b) {
                    if (!b) {
                        if (b = h()) return 16 == b.length ? -b[13] : -b[5];
                        if (a.timerscroll && a.timerscroll.bz) return a.timerscroll.bz.getNow()
                    }
                    return a.doc.translate.y
                };
                this.getScrollLeft = function(b) {
                    if (!b) {
                        if (b = h()) return 16 == b.length ? -b[12] : -b[4];
                        if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow()
                    }
                    return a.doc.translate.x
                };
                this.notifyScrollEvent =
                    function(a) {
                        var g = document.createEvent("UIEvents");
                        g.initUIEvent("scroll", !1, !0, window, 1);
                        g.niceevent = !0;
                        a.dispatchEvent(g)
                    };
                var K = this.isrtlmode ? 1 : -1;
                e.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function(b, g) {
                    a.doc.translate.y = b;
                    a.doc.translate.ty = -1 * b + "px";
                    a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    g || a.notifyScrollEvent(a.win[0])
                }, this.setScrollLeft = function(b, g) {
                    a.doc.translate.x = b;
                    a.doc.translate.tx = b * K + "px";
                    a.doc.css(e.trstyle, "translate3d(" +
                        a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    g || a.notifyScrollEvent(a.win[0])
                }) : (this.setScrollTop = function(b, g) {
                    a.doc.translate.y = b;
                    a.doc.translate.ty = -1 * b + "px";
                    a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                    g || a.notifyScrollEvent(a.win[0])
                }, this.setScrollLeft = function(b, g) {
                    a.doc.translate.x = b;
                    a.doc.translate.tx = b * K + "px";
                    a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                    g || a.notifyScrollEvent(a.win[0])
                })
            } else this.getScrollTop =
                function() {
                    return a.docscroll.scrollTop()
                }, this.setScrollTop = function(b) {
                    return a.docscroll.scrollTop(b)
                }, this.getScrollLeft = function() {
                    return a.detected.ismozilla && a.isrtlmode ? Math.abs(a.docscroll.scrollLeft()) : a.docscroll.scrollLeft()
                }, this.setScrollLeft = function(b) {
                    return a.docscroll.scrollLeft(a.detected.ismozilla && a.isrtlmode ? -b : b)
                };
            this.getTarget = function(a) {
                return a ? a.target ? a.target : a.srcElement ? a.srcElement : !1 : !1
            };
            this.hasParent = function(a, g) {
                if (!a) return !1;
                for (var c = a.target || a.srcElement ||
                        a || !1; c && c.id != g;) c = c.parentNode || !1;
                return !1 !== c
            };
            var w = {
                thin: 1,
                medium: 3,
                thick: 5
            };
            this.getDocumentScrollOffset = function() {
                return {
                    top: window.pageYOffset || document.documentElement.scrollTop,
                    left: window.pageXOffset || document.documentElement.scrollLeft
                }
            };
            this.getOffset = function() {
                if (a.isfixed) {
                    var b = a.win.offset(),
                        g = a.getDocumentScrollOffset();
                    b.top -= g.top;
                    b.left -= g.left;
                    return b
                }
                b = a.win.offset();
                if (!a.viewport) return b;
                g = a.viewport.offset();
                return {
                    top: b.top - g.top,
                    left: b.left - g.left
                }
            };
            this.updateScrollBar =
                function(b) {
                    if (a.ishwscroll) a.rail.css({
                        height: a.win.innerHeight() - (a.opt.railpadding.top + a.opt.railpadding.bottom)
                    }), a.railh && a.railh.css({
                        width: a.win.innerWidth() - (a.opt.railpadding.left + a.opt.railpadding.right)
                    });
                    else {
                        var g = a.getOffset(),
                            c = g.top,
                            e = g.left - (a.opt.railpadding.left + a.opt.railpadding.right),
                            c = c + d(a.win, "border-top-width", !0),
                            e = e + (a.rail.align ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width : d(a.win, "border-left-width")),
                            f = a.opt.railoffset;
                        f && (f.top && (c += f.top), a.rail.align &&
                            f.left && (e += f.left));
                        a.railslocked || a.rail.css({
                            top: c,
                            left: e,
                            height: (b ? b.h : a.win.innerHeight()) - (a.opt.railpadding.top + a.opt.railpadding.bottom)
                        });
                        a.zoom && a.zoom.css({
                            top: c + 1,
                            left: 1 == a.rail.align ? e - 20 : e + a.rail.width + 4
                        });
                        if (a.railh && !a.railslocked) {
                            c = g.top;
                            e = g.left;
                            if (f = a.opt.railhoffset) f.top && (c += f.top), f.left && (e += f.left);
                            b = a.railh.align ? c + d(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : c + d(a.win, "border-top-width", !0);
                            e += d(a.win, "border-left-width");
                            a.railh.css({
                                top: b - (a.opt.railpadding.top +
                                    a.opt.railpadding.bottom),
                                left: e,
                                width: a.railh.width
                            })
                        }
                    }
                };
            this.doRailClick = function(b, g, c) {
                var e;
                a.railslocked || (a.cancelEvent(b), g ? (g = c ? a.doScrollLeft : a.doScrollTop, e = c ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (b.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, g(e)) : (g = c ? a.doScrollLeftBy : a.doScrollBy, e = c ? a.scroll.x : a.scroll.y, b = c ? b.pageX - a.railh.offset().left : b.pageY - a.rail.offset().top, c = c ? a.view.w : a.view.h, g(e >= b ? c : -c)))
            };
            a.hasanimationframe = s;
            a.hascancelanimationframe =
                t;
            a.hasanimationframe ? a.hascancelanimationframe || (t = function() {
                a.cancelAnimationFrame = !0
            }) : (s = function(a) {
                return setTimeout(a, 15 - Math.floor(+new Date / 1E3) % 16)
            }, t = clearInterval);
            this.init = function() {
                a.saved.css = [];
                if (e.isie7mobile || e.isoperamini) return !0;
                e.hasmstouch && a.css(a.ispage ? f("html") : a.win, {
                    "-ms-touch-action": "none"
                });
                a.zindex = "auto";
                a.zindex = a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : m() || "auto";
                !a.ispage && "auto" != a.zindex && a.zindex > x && (x = a.zindex);
                a.isie && 0 == a.zindex && "auto" == a.opt.zindex &&
                    (a.zindex = "auto");
                if (!a.ispage || !e.cantouch && !e.isieold && !e.isie9mobile) {
                    var b = a.docscroll;
                    a.ispage && (b = a.haswrapper ? a.win : a.doc);
                    e.isie9mobile || a.css(b, {
                        "overflow-y": "hidden"
                    });
                    a.ispage && e.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(f("html"), {
                        "overflow-y": "hidden"
                    }) : "HTML" == a.doc[0].nodeName && a.css(f("body"), {
                        "overflow-y": "hidden"
                    }));
                    !e.isios || a.ispage || a.haswrapper || a.css(f("body"), {
                        "-webkit-overflow-scrolling": "touch"
                    });
                    var g = f(document.createElement("div"));
                    g.css({
                        position: "relative",
                        top: 0,
                        "float": "right",
                        width: a.opt.cursorwidth,
                        height: "0px",
                        "background-color": a.opt.cursorcolor,
                        border: a.opt.cursorborder,
                        "background-clip": "padding-box",
                        "-webkit-border-radius": a.opt.cursorborderradius,
                        "-moz-border-radius": a.opt.cursorborderradius,
                        "border-radius": a.opt.cursorborderradius
                    });
                    g.hborder = parseFloat(g.outerHeight() - g.innerHeight());
                    g.addClass("nicescroll-cursors");
                    a.cursor = g;
                    var c = f(document.createElement("div"));
                    c.attr("id", a.id);
                    c.addClass("nicescroll-rails nicescroll-rails-vr");
                    var d, h, k = ["left", "right",
                            "top", "bottom"
                        ],
                        J;
                    for (J in k) h = k[J], (d = a.opt.railpadding[h]) ? c.css("padding-" + h, d + "px") : a.opt.railpadding[h] = 0;
                    c.append(g);
                    c.width = Math.max(parseFloat(a.opt.cursorwidth), g.outerWidth());
                    c.css({
                        width: c.width + "px",
                        zIndex: a.zindex,
                        background: a.opt.background,
                        cursor: "default"
                    });
                    c.visibility = !0;
                    c.scrollable = !0;
                    c.align = "left" == a.opt.railalign ? 0 : 1;
                    a.rail = c;
                    g = a.rail.drag = !1;
                    !a.opt.boxzoom || a.ispage || e.isieold || (g = document.createElement("div"), a.bind(g, "click", a.doZoom), a.bind(g, "mouseenter", function() {
                        a.zoom.css("opacity",
                            a.opt.cursoropacitymax)
                    }), a.bind(g, "mouseleave", function() {
                        a.zoom.css("opacity", a.opt.cursoropacitymin)
                    }), a.zoom = f(g), a.zoom.css({
                        cursor: "pointer",
                        "z-index": a.zindex,
                        backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)",
                        height: 18,
                        width: 18,
                        backgroundPosition: "0px 0px"
                    }), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), e.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function(b) {
                        1.5 < b.scale && a.doZoomIn(b);
                        .8 > b.scale && a.doZoomOut(b);
                        return a.cancelEvent(b)
                    }, a.bind(a.win, "gestureend", a.ongesturezoom)));
                    a.railh = !1;
                    var l;
                    a.opt.horizrailenabled && (a.css(b, {
                            "overflow-x": "hidden"
                        }), g = f(document.createElement("div")), g.css({
                            position: "absolute",
                            top: 0,
                            height: a.opt.cursorwidth,
                            width: "0px",
                            "background-color": a.opt.cursorcolor,
                            border: a.opt.cursorborder,
                            "background-clip": "padding-box",
                            "-webkit-border-radius": a.opt.cursorborderradius,
                            "-moz-border-radius": a.opt.cursorborderradius,
                            "border-radius": a.opt.cursorborderradius
                        }), e.isieold && g.css({
                            overflow: "hidden"
                        }), g.wborder = parseFloat(g.outerWidth() - g.innerWidth()),
                        g.addClass("nicescroll-cursors"), a.cursorh = g, l = f(document.createElement("div")), l.attr("id", a.id + "-hr"), l.addClass("nicescroll-rails nicescroll-rails-hr"), l.height = Math.max(parseFloat(a.opt.cursorwidth), g.outerHeight()), l.css({
                            height: l.height + "px",
                            zIndex: a.zindex,
                            background: a.opt.background
                        }), l.append(g), l.visibility = !0, l.scrollable = !0, l.align = "top" == a.opt.railvalign ? 0 : 1, a.railh = l, a.railh.drag = !1);
                    a.ispage ? (c.css({
                            position: "fixed",
                            top: "0px",
                            height: "100%"
                        }), c.align ? c.css({
                            right: "0px"
                        }) : c.css({
                            left: "0px"
                        }),
                        a.body.append(c), a.railh && (l.css({
                            position: "fixed",
                            left: "0px",
                            width: "100%"
                        }), l.align ? l.css({
                            bottom: "0px"
                        }) : l.css({
                            top: "0px"
                        }), a.body.append(l))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, {
                        position: "relative"
                    }), b = "HTML" == a.win[0].nodeName ? a.body : a.win, f(b).scrollTop(0).scrollLeft(0), a.zoom && (a.zoom.css({
                        position: "absolute",
                        top: 1,
                        right: 0,
                        "margin-right": c.width + 4
                    }), b.append(a.zoom)), c.css({
                        position: "absolute",
                        top: 0
                    }), c.align ? c.css({
                        right: 0
                    }) : c.css({
                        left: 0
                    }), b.append(c), l && (l.css({
                        position: "absolute",
                        left: 0,
                        bottom: 0
                    }), l.align ? l.css({
                        bottom: 0
                    }) : l.css({
                        top: 0
                    }), b.append(l))) : (a.isfixed = "fixed" == a.win.css("position"), b = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])), a.viewport && (a.body = a.viewport, 0 == /fixed|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {
                        position: "relative"
                    })), c.css({
                        position: b
                    }), a.zoom && a.zoom.css({
                        position: b
                    }), a.updateScrollBar(), a.body.append(c), a.zoom && a.body.append(a.zoom), a.railh && (l.css({
                        position: b
                    }), a.body.append(l))), e.isios && a.css(a.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none"
                    }), e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), e.iswebkit && a.opt.disableoutline && a.win.css({
                        outline: "none"
                    }));
                    !1 === a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({
                        opacity: a.opt.cursoropacitymax
                    }), a.railh && a.railh.css({
                        opacity: a.opt.cursoropacitymax
                    })) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom =
                        a.autohidedom.add(a.railh)), a.railh && e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = f().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.railslocked = !1);
                    if (e.isie9mobile) a.scrollmom = new L(a), a.onmangotouch = function() {
                        var b = a.getScrollTop(),
                            c = a.getScrollLeft();
                        if (b == a.scrollmom.lastscrolly && c == a.scrollmom.lastscrollx) return !0;
                        var g = b - a.mangotouch.sy,
                            e = c - a.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(e, 2) + Math.pow(g, 2)))) {
                            var d = 0 > g ? -1 : 1,
                                f = 0 > e ? -1 : 1,
                                q = +new Date;
                            a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                            80 < q - a.mangotouch.tm || a.mangotouch.dry != d || a.mangotouch.drx != f ? (a.scrollmom.stop(), a.scrollmom.reset(c, b), a.mangotouch.sy = b, a.mangotouch.ly = b, a.mangotouch.sx = c, a.mangotouch.lx = c, a.mangotouch.dry = d, a.mangotouch.drx = f, a.mangotouch.tm = q) : (a.scrollmom.stop(),
                                a.scrollmom.update(a.mangotouch.sx - e, a.mangotouch.sy - g), a.mangotouch.tm = q, g = Math.max(Math.abs(a.mangotouch.ly - b), Math.abs(a.mangotouch.lx - c)), a.mangotouch.ly = b, a.mangotouch.lx = c, 2 < g && (a.mangotouch.lazy = setTimeout(function() {
                                    a.mangotouch.lazy = !1;
                                    a.mangotouch.dry = 0;
                                    a.mangotouch.drx = 0;
                                    a.mangotouch.tm = 0;
                                    a.scrollmom.doMomentum(30)
                                }, 100)))
                        }
                    }, c = a.getScrollTop(), l = a.getScrollLeft(), a.mangotouch = {
                        sy: c,
                        ly: c,
                        dry: 0,
                        sx: l,
                        lx: l,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    }, a.bind(a.docscroll, "scroll", a.onmangotouch);
                    else {
                        if (e.cantouch ||
                            a.istouchcapable || a.opt.touchbehavior || e.hasmstouch) {
                            a.scrollmom = new L(a);
                            a.ontouchstart = function(b) {
                                if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                a.hasmoving = !1;
                                if (!a.railslocked) {
                                    var c;
                                    if (e.hasmstouch)
                                        for (c = b.target ? b.target : !1; c;) {
                                            var g = f(c).getNiceScroll();
                                            if (0 < g.length && g[0].me == a.me) break;
                                            if (0 < g.length) return !1;
                                            if ("DIV" == c.nodeName && c.id == a.id) break;
                                            c = c.parentNode ? c.parentNode : !1
                                        }
                                    a.cancelScroll();
                                    if ((c = a.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return a.stopPropagation(b);
                                    !("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
                                    a.forcescreen && (g = b, b = {
                                        original: b.original ? b.original : b
                                    }, b.clientX = g.screenX, b.clientY = g.screenY);
                                    a.rail.drag = {
                                        x: b.clientX,
                                        y: b.clientY,
                                        sx: a.scroll.x,
                                        sy: a.scroll.y,
                                        st: a.getScrollTop(),
                                        sl: a.getScrollLeft(),
                                        pt: 2,
                                        dl: !1
                                    };
                                    if (a.ispage || !a.opt.directionlockdeadzone) a.rail.drag.dl = "f";
                                    else {
                                        var g = f(window).width(),
                                            d = f(window).height(),
                                            q = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                                            h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight),
                                            d = Math.max(0, h - d),
                                            g = Math.max(0, q - g);
                                        a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < d ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < g ? "h" : !1 : !1;
                                        a.rail.drag.ck || (a.rail.drag.dl = "f")
                                    }
                                    a.opt.touchbehavior && a.isiframe && e.isie && (g = a.win.position(), a.rail.drag.x += g.left, a.rail.drag.y += g.top);
                                    a.hasmoving = !1;
                                    a.lastmouseup = !1;
                                    a.scrollmom.reset(b.clientX, b.clientY);
                                    if (!e.cantouch && !this.istouchcapable && !b.pointerType) {
                                        if (!c ||
                                            !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !a.ispage && e.hasmousecapture && c.setCapture(), a.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function(b) {
                                            if (a.hasmoving) return !1;
                                            c._onclick.call(this, b)
                                        }), a.cancelEvent(b)) : a.stopPropagation(b);
                                        /SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) && (pc = {
                                            tg: c,
                                            click: !1
                                        }, a.preventclick = pc)
                                    }
                                }
                            };
                            a.ontouchend = function(b) {
                                if (!a.rail.drag) return !0;
                                if (2 == a.rail.drag.pt) {
                                    if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                    a.scrollmom.doMomentum();
                                    a.rail.drag = !1;
                                    if (a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), e.hasmousecapture && document.releaseCapture(), !e.cantouch)) return a.cancelEvent(b)
                                } else if (1 == a.rail.drag.pt) return a.onmouseup(b)
                            };
                            var n = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture;
                            a.ontouchmove = function(b, c) {
                                if (!a.rail.drag || b.targetTouches && a.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1;
                                if (2 == a.rail.drag.pt) {
                                    if (e.cantouch &&
                                        e.isios && "undefined" == typeof b.original) return !0;
                                    a.hasmoving = !0;
                                    a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick = a.onpreventclick);
                                    b = f.extend({
                                        original: b
                                    }, b);
                                    "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY);
                                    if (a.forcescreen) {
                                        var g = b;
                                        b = {
                                            original: b.original ? b.original : b
                                        };
                                        b.clientX = g.screenX;
                                        b.clientY = g.screenY
                                    }
                                    var d, g = d = 0;
                                    n && !c && (d = a.win.position(), g = -d.left, d = -d.top);
                                    var q = b.clientY +
                                        d;
                                    d = q - a.rail.drag.y;
                                    var h = b.clientX + g,
                                        u = h - a.rail.drag.x,
                                        k = a.rail.drag.st - d;
                                    a.ishwscroll && a.opt.bouncescroll ? 0 > k ? k = Math.round(k / 2) : k > a.page.maxh && (k = a.page.maxh + Math.round((k - a.page.maxh) / 2)) : (0 > k && (q = k = 0), k > a.page.maxh && (k = a.page.maxh, q = 0));
                                    var l;
                                    a.railh && a.railh.scrollable && (l = a.isrtlmode ? u - a.rail.drag.sl : a.rail.drag.sl - u, a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) / 2)) : (0 > l && (h = l = 0), l > a.page.maxw && (l = a.page.maxw, h = 0)));
                                    g = !1;
                                    if (a.rail.drag.dl) g = !0, "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (k = a.rail.drag.st);
                                    else {
                                        d = Math.abs(d);
                                        var u = Math.abs(u),
                                            z = a.opt.directionlockdeadzone;
                                        if ("v" == a.rail.drag.ck) {
                                            if (d > z && u <= .3 * d) return a.rail.drag = !1, !0;
                                            u > z && (a.rail.drag.dl = "f", f("body").scrollTop(f("body").scrollTop()))
                                        } else if ("h" == a.rail.drag.ck) {
                                            if (u > z && d <= .3 * u) return a.rail.drag = !1, !0;
                                            d > z && (a.rail.drag.dl = "f", f("body").scrollLeft(f("body").scrollLeft()))
                                        }
                                    }
                                    a.synched("touchmove", function() {
                                        a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition &&
                                            a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(k), a.scrollmom.update(h, q), a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(k, l)) : a.showCursor(k), e.isie10 && document.selection.clear())
                                    });
                                    e.ischrome && a.istouchcapable && (g = !1);
                                    if (g) return a.cancelEvent(b)
                                } else if (1 == a.rail.drag.pt) return a.onmousemove(b)
                            }
                        }
                        a.onmousedown = function(b, c) {
                            if (!a.rail.drag || 1 == a.rail.drag.pt) {
                                if (a.railslocked) return a.cancelEvent(b);
                                a.cancelScroll();
                                a.rail.drag = {
                                    x: b.clientX,
                                    y: b.clientY,
                                    sx: a.scroll.x,
                                    sy: a.scroll.y,
                                    pt: 1,
                                    hr: !!c
                                };
                                var g = a.getTarget(b);
                                !a.ispage && e.hasmousecapture && g.setCapture();
                                a.isiframe && !e.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"), a.css(a.doc, {
                                    "pointer-events": "none"
                                }));
                                a.hasmoving = !1;
                                return a.cancelEvent(b)
                            }
                        };
                        a.onmouseup = function(b) {
                            if (a.rail.drag) {
                                if (1 != a.rail.drag.pt) return !0;
                                e.hasmousecapture && document.releaseCapture();
                                a.isiframe && !e.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents);
                                a.rail.drag = !1;
                                a.hasmoving && a.triggerScrollEnd();
                                return a.cancelEvent(b)
                            }
                        };
                        a.onmousemove = function(b) {
                            if (a.rail.drag && 1 == a.rail.drag.pt) {
                                if (e.ischrome && 0 == b.which) return a.onmouseup(b);
                                a.cursorfreezed = !0;
                                a.hasmoving = !0;
                                if (a.rail.drag.hr) {
                                    a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x);
                                    0 > a.scroll.x && (a.scroll.x = 0);
                                    var c = a.scrollvaluemaxw;
                                    a.scroll.x > c && (a.scroll.x = c)
                                } else a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), c = a.scrollvaluemax, a.scroll.y > c && (a.scroll.y = c);
                                a.synched("mousemove", function() {
                                    a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(),
                                        a.rail.drag.hr ? a.hasreversehr ? a.doScrollLeft(a.scrollvaluemaxw - Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed))
                                });
                                return a.cancelEvent(b)
                            }
                        };
                        if (e.cantouch || a.opt.touchbehavior) a.onpreventclick = function(b) {
                            if (a.preventclick) return a.preventclick.tg.onclick = a.preventclick.click, a.preventclick = !1, a.cancelEvent(b)
                        }, a.bind(a.win, "mousedown",
                            a.ontouchstart), a.onclick = e.isios ? !1 : function(b) {
                            return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(b)) : !0
                        }, a.opt.grabcursorenabled && e.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, {
                            cursor: e.cursorgrabvalue
                        }), a.css(a.rail, {
                            cursor: e.cursorgrabvalue
                        }));
                        else {
                            var p = function(b) {
                                if (a.selectiondrag) {
                                    if (b) {
                                        var c = a.win.outerHeight();
                                        b = b.pageY - a.selectiondrag.top;
                                        0 < b && b < c && (b = 0);
                                        b >= c && (b -= c);
                                        a.selectiondrag.df = b
                                    }
                                    0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll",
                                        function() {
                                            p()
                                        }, 50))
                                }
                            };
                            a.hasTextSelected = "getSelection" in document ? function() {
                                return 0 < document.getSelection().rangeCount
                            } : "selection" in document ? function() {
                                return "None" != document.selection.type
                            } : function() {
                                return !1
                            };
                            a.onselectionstart = function(b) {
                                a.ispage || (a.selectiondrag = a.win.offset())
                            };
                            a.onselectionend = function(b) {
                                a.selectiondrag = !1
                            };
                            a.onselectiondrag = function(b) {
                                a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function() {
                                    p(b)
                                }, 250)
                            }
                        }
                        e.hasw3ctouch ? (a.css(a.rail, {
                                "touch-action": "none"
                            }),
                            a.css(a.cursor, {
                                "touch-action": "none"
                            }), a.bind(a.win, "pointerdown", a.ontouchstart), a.bind(document, "pointerup", a.ontouchend), a.bind(document, "pointermove", a.ontouchmove)) : e.hasmstouch ? (a.css(a.rail, {
                            "-ms-touch-action": "none"
                        }), a.css(a.cursor, {
                            "-ms-touch-action": "none"
                        }), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document, "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold", function(a) {
                            a.preventDefault()
                        }), a.bind(a.cursor, "contextmenu",
                            function(a) {
                                a.preventDefault()
                            })) : this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
                        if (a.opt.cursordragontouch || !e.cantouch && !a.opt.touchbehavior) a.rail.css({
                                cursor: "default"
                            }), a.railh && a.railh.css({
                                cursor: "default"
                            }), a.jqbind(a.rail, "mouseenter", function() {
                                if (!a.ispage && !a.win.is(":visible")) return !1;
                                a.canshowonmouseevent && a.showCursor();
                                a.rail.active = !0
                            }),
                            a.jqbind(a.rail, "mouseleave", function() {
                                a.rail.active = !1;
                                a.rail.drag || a.hideCursor()
                            }), a.opt.sensitiverail && (a.bind(a.rail, "click", function(b) {
                                a.doRailClick(b, !1, !1)
                            }), a.bind(a.rail, "dblclick", function(b) {
                                a.doRailClick(b, !0, !1)
                            }), a.bind(a.cursor, "click", function(b) {
                                a.cancelEvent(b)
                            }), a.bind(a.cursor, "dblclick", function(b) {
                                a.cancelEvent(b)
                            })), a.railh && (a.jqbind(a.railh, "mouseenter", function() {
                                if (!a.ispage && !a.win.is(":visible")) return !1;
                                a.canshowonmouseevent && a.showCursor();
                                a.rail.active = !0
                            }), a.jqbind(a.railh,
                                "mouseleave",
                                function() {
                                    a.rail.active = !1;
                                    a.rail.drag || a.hideCursor()
                                }), a.opt.sensitiverail && (a.bind(a.railh, "click", function(b) {
                                a.doRailClick(b, !1, !0)
                            }), a.bind(a.railh, "dblclick", function(b) {
                                a.doRailClick(b, !0, !0)
                            }), a.bind(a.cursorh, "click", function(b) {
                                a.cancelEvent(b)
                            }), a.bind(a.cursorh, "dblclick", function(b) {
                                a.cancelEvent(b)
                            })));
                        e.cantouch || a.opt.touchbehavior ? (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove", a.ontouchmove), a.onclick && a.bind(document, "click",
                            a.onclick), a.opt.cursordragontouch && (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.cursorh && a.bind(a.cursorh, "mousedown", function(b) {
                            a.onmousedown(b, !0)
                        }), a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup))) : (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document, "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.railh && (a.bind(a.cursorh,
                            "mousedown",
                            function(b) {
                                a.onmousedown(b, !0)
                            }), a.bind(a.cursorh, "mouseup", a.onmouseup)), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor, "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend), a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function() {
                            a.canshowonmouseevent && a.showCursor();
                            a.rail.active = !0
                        }), a.jqbind(a.zoom, "mouseleave",
                            function() {
                                a.rail.active = !1;
                                a.rail.drag || a.hideCursor()
                            })));
                        a.opt.enablemousewheel && (a.isiframe || a.bind(e.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel), a.bind(a.rail, "mousewheel", a.onmousewheel), a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
                        a.ispage || e.cantouch || /HTML|^BODY/.test(a.win[0].nodeName) || (a.win.attr("tabindex") || a.win.attr({
                            tabindex: N++
                        }), a.jqbind(a.win, "focus", function(b) {
                            y = a.getTarget(b).id || !0;
                            a.hasfocus = !0;
                            a.canshowonmouseevent && a.noticeCursor()
                        }), a.jqbind(a.win,
                            "blur",
                            function(b) {
                                y = !1;
                                a.hasfocus = !1
                            }), a.jqbind(a.win, "mouseenter", function(b) {
                            D = a.getTarget(b).id || !0;
                            a.hasmousefocus = !0;
                            a.canshowonmouseevent && a.noticeCursor()
                        }), a.jqbind(a.win, "mouseleave", function() {
                            D = !1;
                            a.hasmousefocus = !1;
                            a.rail.drag || a.hideCursor()
                        }))
                    }
                    a.onkeypress = function(b) {
                        if (a.railslocked && 0 == a.page.maxh) return !0;
                        b = b ? b : window.e;
                        var c = a.getTarget(b);
                        if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp) || f(c).attr("contenteditable")) return !0;
                        if (a.hasfocus || a.hasmousefocus && !y || a.ispage && !y && !D) {
                            c = b.keyCode;
                            if (a.railslocked && 27 != c) return a.cancelEvent(b);
                            var g = b.ctrlKey || !1,
                                d = b.shiftKey || !1,
                                e = !1;
                            switch (c) {
                                case 38:
                                case 63233:
                                    a.doScrollBy(72);
                                    e = !0;
                                    break;
                                case 40:
                                case 63235:
                                    a.doScrollBy(-72);
                                    e = !0;
                                    break;
                                case 37:
                                case 63232:
                                    a.railh && (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72), e = !0);
                                    break;
                                case 39:
                                case 63234:
                                    a.railh && (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), e = !0);
                                    break;
                                case 33:
                                case 63276:
                                    a.doScrollBy(a.view.h);
                                    e = !0;
                                    break;
                                case 34:
                                case 63277:
                                    a.doScrollBy(-a.view.h);
                                    e = !0;
                                    break;
                                case 36:
                                case 63273:
                                    a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                                    e = !0;
                                    break;
                                case 35:
                                case 63275:
                                    a.railh && g ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                                    e = !0;
                                    break;
                                case 32:
                                    a.opt.spacebarenabled && (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), e = !0);
                                    break;
                                case 27:
                                    a.zoomactive && (a.doZoom(), e = !0)
                            }
                            if (e) return a.cancelEvent(b)
                        }
                    };
                    a.opt.enablekeyboard && a.bind(document, e.isopera && !e.isopera12 ? "keypress" : "keydown", a.onkeypress);
                    a.bind(document, "keydown", function(b) {
                        b.ctrlKey &&
                            (a.wheelprevented = !0)
                    });
                    a.bind(document, "keyup", function(b) {
                        b.ctrlKey || (a.wheelprevented = !1)
                    });
                    a.bind(window, "blur", function(b) {
                        a.wheelprevented = !1
                    });
                    a.bind(window, "resize", a.lazyResize);
                    a.bind(window, "orientationchange", a.lazyResize);
                    a.bind(window, "load", a.lazyResize);
                    if (e.ischrome && !a.ispage && !a.haswrapper) {
                        var r = a.win.attr("style"),
                            c = parseFloat(a.win.css("width")) + 1;
                        a.win.css("width", c);
                        a.synched("chromefix", function() {
                            a.win.attr("style", r)
                        })
                    }
                    a.onAttributeChange = function(b) {
                        a.lazyResize(a.isieold ?
                            250 : 30)
                    };
                    !1 !== v && (a.observerbody = new v(function(b) {
                        b.forEach(function(b) {
                            if ("attributes" == b.type) return f("body").hasClass("modal-open") ? a.hide() : a.show()
                        });
                        if (document.body.scrollHeight != a.page.maxh) return a.lazyResize(30)
                    }), a.observerbody.observe(document.body, {
                        childList: !0,
                        subtree: !0,
                        characterData: !1,
                        attributes: !0,
                        attributeFilter: ["class"]
                    }));
                    a.ispage || a.haswrapper || (!1 !== v ? (a.observer = new v(function(b) {
                        b.forEach(a.onAttributeChange)
                    }), a.observer.observe(a.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1
                    }), a.observerremover = new v(function(b) {
                        b.forEach(function(b) {
                            if (0 < b.removedNodes.length)
                                for (var c in b.removedNodes)
                                    if (a && b.removedNodes[c] == a.win[0]) return a.remove()
                        })
                    }), a.observerremover.observe(a.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1
                    })) : (a.bind(a.win, e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), e.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function(b) {
                        b.target ==
                            a.win[0] && a.remove()
                    })));
                    !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
                    a.istextarea && a.bind(a.win, "mouseup", a.lazyResize);
                    a.lazyResize(30)
                }
                if ("IFRAME" == this.doc[0].nodeName) {
                    var M = function() {
                        a.iframexd = !1;
                        var b;
                        try {
                            b = "contentDocument" in this ? this.contentDocument : this.contentWindow.document
                        } catch (c) {
                            a.iframexd = !0, b = !1
                        }
                        if (a.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                        a.forcescreen = !0;
                        a.isiframe && (a.iframe = {
                            doc: f(b),
                            html: a.doc.contents().find("html")[0],
                            body: a.doc.contents().find("body")[0]
                        }, a.getContentSize = function() {
                            return {
                                w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth),
                                h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)
                            }
                        }, a.docscroll = f(a.iframe.body));
                        if (!e.isios && a.opt.iframeautoresize && !a.isiframe) {
                            a.win.scrollTop(0);
                            a.doc.height("");
                            var g = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight);
                            a.doc.height(g)
                        }
                        a.lazyResize(30);
                        e.isie7 && a.css(f(a.iframe.html), {
                            "overflow-y": "hidden"
                        });
                        a.css(f(a.iframe.body), {
                            "overflow-y": "hidden"
                        });
                        e.isios && a.haswrapper && a.css(f(b.body), {
                            "-webkit-transform": "translate3d(0,0,0)"
                        });
                        "contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
                        a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
                        a.opt.enablekeyboard && a.bind(b, e.isopera ? "keypress" : "keydown", a.onkeypress);
                        if (e.cantouch || a.opt.touchbehavior) a.bind(b, "mousedown", a.ontouchstart), a.bind(b, "mousemove", function(b) {
                                return a.ontouchmove(b, !0)
                            }), a.opt.grabcursorenabled &&
                            e.cursorgrabvalue && a.css(f(b.body), {
                                cursor: e.cursorgrabvalue
                            });
                        a.bind(b, "mouseup", a.ontouchend);
                        a.zoom && (a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom), a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom))
                    };
                    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                        M.call(a.doc[0], !1)
                    }, 500);
                    a.bind(this.doc, "load", M)
                }
            };
            this.showCursor = function(b, c) {
                a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0);
                if (a.rail) {
                    a.autohidedom && (a.autohidedom.stop().css({
                            opacity: a.opt.cursoropacitymax
                        }),
                        a.cursoractive = !0);
                    a.rail.drag && 1 == a.rail.drag.pt || ("undefined" != typeof b && !1 !== b && (a.scroll.y = Math.round(1 * b / a.scrollratio.y)), "undefined" != typeof c && (a.scroll.x = Math.round(1 * c / a.scrollratio.x)));
                    a.cursor.css({
                        height: a.cursorheight,
                        top: a.scroll.y
                    });
                    if (a.cursorh) {
                        var d = a.hasreversehr ? a.scrollvaluemaxw - a.scroll.x : a.scroll.x;
                        !a.rail.align && a.rail.visibility ? a.cursorh.css({
                            width: a.cursorwidth,
                            left: d + a.rail.width
                        }) : a.cursorh.css({
                            width: a.cursorwidth,
                            left: d
                        });
                        a.cursoractive = !0
                    }
                    a.zoom && a.zoom.stop().css({
                        opacity: a.opt.cursoropacitymax
                    })
                }
            };
            this.hideCursor = function(b) {
                a.cursortimeout || !a.rail || !a.autohidedom || a.hasmousefocus && "leave" == a.opt.autohidemode || (a.cursortimeout = setTimeout(function() {
                    a.rail.active && a.showonmouseevent || (a.autohidedom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    }), a.zoom && a.zoom.stop().animate({
                        opacity: a.opt.cursoropacitymin
                    }), a.cursoractive = !1);
                    a.cursortimeout = 0
                }, b || a.opt.hidecursordelay))
            };
            this.noticeCursor = function(b, c, d) {
                a.showCursor(c, d);
                a.rail.active || a.hideCursor(b)
            };
            this.getContentSize = a.ispage ? function() {
                return {
                    w: Math.max(document.body.scrollWidth,
                        document.documentElement.scrollWidth),
                    h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            } : a.haswrapper ? function() {
                return {
                    w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) + parseInt(a.win.css("paddingRight")),
                    h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
                }
            } : function() {
                return {
                    w: a.docscroll[0].scrollWidth,
                    h: a.docscroll[0].scrollHeight
                }
            };
            this.onResize = function(b, c) {
                if (!a || !a.win) return !1;
                if (!a.haswrapper && !a.ispage) {
                    if ("none" ==
                        a.win.css("display")) return a.visibility && a.hideRail().hideRailHr(), !1;
                    a.hidden || a.visibility || a.showRail().showRailHr()
                }
                var d = a.page.maxh,
                    e = a.page.maxw,
                    f = a.view.h,
                    h = a.view.w;
                a.view = {
                    w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
                    h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
                };
                a.page = c ? c : a.getContentSize();
                a.page.maxh = Math.max(0, a.page.h - a.view.h);
                a.page.maxw = Math.max(0, a.page.w - a.view.w);
                if (a.page.maxh == d && a.page.maxw == e && a.view.w == h && a.view.h == f) {
                    if (a.ispage) return a;
                    d = a.win.offset();
                    if (a.lastposition && (e = a.lastposition, e.top == d.top && e.left == d.left)) return a;
                    a.lastposition = d
                }
                0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0), a.rail.scrollable = !1) : (a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom, a.rail.scrollable = !0);
                0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh.scrollable = !1) : (a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right,
                    a.railh.scrollable = !0);
                a.railslocked = a.locked || 0 == a.page.maxh && 0 == a.page.maxw;
                if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1;
                a.hidden || a.visibility ? a.hidden || a.railh.visibility || a.showRailHr() : a.showRail().showRailHr();
                a.istextarea && a.win.css("resize") && "none" != a.win.css("resize") && (a.view.h -= 20);
                a.cursorheight = Math.min(a.view.h, Math.round(a.view.h / a.page.h * a.view.h));
                a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
                a.cursorwidth =
                    Math.min(a.view.w, Math.round(a.view.w / a.page.w * a.view.w));
                a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
                a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder - (a.opt.railpadding.top + a.opt.railpadding.bottom);
                a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder - (a.opt.railpadding.left + a.opt.railpadding.right));
                a.ispage || a.updateScrollBar(a.view);
                a.scrollratio = {
                    x: a.page.maxw / a.scrollvaluemaxw,
                    y: a.page.maxh / a.scrollvaluemax
                };
                a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor());
                a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
                return a
            };
            this.resize = a.onResize;
            this.lazyResize = function(b) {
                b = isNaN(b) ? 30 : b;
                a.debounced("resize", a.resize, b);
                return a
            };
            this.jqbind = function(b,
                c, d) {
                a.events.push({
                    e: b,
                    n: c,
                    f: d,
                    q: !0
                });
                f(b).bind(c, d)
            };
            this.bind = function(b, c, d, f) {
                var h = "jquery" in b ? b[0] : b;
                "mousewheel" == c ? window.addEventListener || "onwheel" in document ? a._bind(h, "wheel", d, f || !1) : (b = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", n(h, b, d, f || !1), "DOMMouseScroll" == b && n(h, "MozMousePixelScroll", d, f || !1)) : h.addEventListener ? (e.cantouch && /mouseup|mousedown|mousemove/.test(c) && a._bind(h, "mousedown" == c ? "touchstart" : "mouseup" == c ? "touchend" : "touchmove", function(a) {
                    if (a.touches) {
                        if (2 >
                            a.touches.length) {
                            var b = a.touches.length ? a.touches[0] : a;
                            b.original = a;
                            d.call(this, b)
                        }
                    } else a.changedTouches && (b = a.changedTouches[0], b.original = a, d.call(this, b))
                }, f || !1), a._bind(h, c, d, f || !1), e.cantouch && "mouseup" == c && a._bind(h, "touchcancel", d, f || !1)) : a._bind(h, c, function(b) {
                    (b = b || window.event || !1) && b.srcElement && (b.target = b.srcElement);
                    "pageY" in b || (b.pageX = b.clientX + document.documentElement.scrollLeft, b.pageY = b.clientY + document.documentElement.scrollTop);
                    return !1 === d.call(h, b) || !1 === f ? a.cancelEvent(b) :
                        !0
                })
            };
            e.haseventlistener ? (this._bind = function(b, c, d, e) {
                a.events.push({
                    e: b,
                    n: c,
                    f: d,
                    b: e,
                    q: !1
                });
                b.addEventListener(c, d, e || !1)
            }, this.cancelEvent = function(a) {
                if (!a) return !1;
                a = a.original ? a.original : a;
                a.preventDefault();
                a.stopPropagation();
                a.preventManipulation && a.preventManipulation();
                return !1
            }, this.stopPropagation = function(a) {
                if (!a) return !1;
                a = a.original ? a.original : a;
                a.stopPropagation();
                return !1
            }, this._unbind = function(a, c, d, e) {
                a.removeEventListener(c, d, e)
            }) : (this._bind = function(b, c, d, e) {
                a.events.push({
                    e: b,
                    n: c,
                    f: d,
                    b: e,
                    q: !1
                });
                b.attachEvent ? b.attachEvent("on" + c, d) : b["on" + c] = d
            }, this.cancelEvent = function(a) {
                a = window.event || !1;
                if (!a) return !1;
                a.cancelBubble = !0;
                a.cancel = !0;
                return a.returnValue = !1
            }, this.stopPropagation = function(a) {
                a = window.event || !1;
                if (!a) return !1;
                a.cancelBubble = !0;
                return !1
            }, this._unbind = function(a, c, d, e) {
                a.detachEvent ? a.detachEvent("on" + c, d) : a["on" + c] = !1
            });
            this.unbindAll = function() {
                for (var b = 0; b < a.events.length; b++) {
                    var c = a.events[b];
                    c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b)
                }
            };
            this.showRail =
                function() {
                    0 == a.page.maxh || !a.ispage && "none" == a.win.css("display") || (a.visibility = !0, a.rail.visibility = !0, a.rail.css("display", "block"));
                    return a
                };
            this.showRailHr = function() {
                if (!a.railh) return a;
                0 == a.page.maxw || !a.ispage && "none" == a.win.css("display") || (a.railh.visibility = !0, a.railh.css("display", "block"));
                return a
            };
            this.hideRail = function() {
                a.visibility = !1;
                a.rail.visibility = !1;
                a.rail.css("display", "none");
                return a
            };
            this.hideRailHr = function() {
                if (!a.railh) return a;
                a.railh.visibility = !1;
                a.railh.css("display",
                    "none");
                return a
            };
            this.show = function() {
                a.hidden = !1;
                a.railslocked = !1;
                return a.showRail().showRailHr()
            };
            this.hide = function() {
                a.hidden = !0;
                a.railslocked = !0;
                return a.hideRail().hideRailHr()
            };
            this.toggle = function() {
                return a.hidden ? a.show() : a.hide()
            };
            this.remove = function() {
                a.stop();
                a.cursortimeout && clearTimeout(a.cursortimeout);
                a.doZoomOut();
                a.unbindAll();
                e.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
                !1 !== a.observer && a.observer.disconnect();
                !1 !== a.observerremover && a.observerremover.disconnect();
                !1 !== a.observerbody && a.observerbody.disconnect();
                a.events = null;
                a.cursor && a.cursor.remove();
                a.cursorh && a.cursorh.remove();
                a.rail && a.rail.remove();
                a.railh && a.railh.remove();
                a.zoom && a.zoom.remove();
                for (var b = 0; b < a.saved.css.length; b++) {
                    var c = a.saved.css[b];
                    c[0].css(c[1], "undefined" == typeof c[2] ? "" : c[2])
                }
                a.saved = !1;
                a.me.data("__nicescroll", "");
                var d = f.nicescroll;
                d.each(function(b) {
                    if (this && this.id === a.id) {
                        delete d[b];
                        for (var c = ++b; c < d.length; c++, b++) d[b] = d[c];
                        d.length--;
                        d.length && delete d[d.length]
                    }
                });
                for (var h in a) a[h] = null, delete a[h];
                a = null
            };
            this.scrollstart = function(b) {
                this.onscrollstart = b;
                return a
            };
            this.scrollend = function(b) {
                this.onscrollend = b;
                return a
            };
            this.scrollcancel = function(b) {
                this.onscrollcancel = b;
                return a
            };
            this.zoomin = function(b) {
                this.onzoomin = b;
                return a
            };
            this.zoomout = function(b) {
                this.onzoomout = b;
                return a
            };
            this.isScrollable = function(a) {
                a = a.target ? a.target : a;
                if ("OPTION" == a.nodeName) return !0;
                for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                    var c = f(a),
                        c = c.css("overflowY") || c.css("overflowX") ||
                        c.css("overflow") || "";
                    if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight;
                    a = a.parentNode ? a.parentNode : !1
                }
                return !1
            };
            this.getViewport = function(a) {
                for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                    var c = f(a);
                    if (/fixed|absolute/.test(c.css("position"))) return c;
                    var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || "";
                    if (/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight || 0 < c.getNiceScroll().length) return c;
                    a = a.parentNode ? a.parentNode : !1
                }
                return !1
            };
            this.triggerScrollEnd = function() {
                if (a.onscrollend) {
                    var b = a.getScrollLeft(),
                        c = a.getScrollTop();
                    a.onscrollend.call(a, {
                        type: "scrollend",
                        current: {
                            x: b,
                            y: c
                        },
                        end: {
                            x: b,
                            y: c
                        }
                    })
                }
            };
            this.onmousewheel = function(b) {
                if (!a.wheelprevented) {
                    if (a.railslocked) return a.debounced("checkunlock", a.resize, 250), !0;
                    if (a.rail.drag) return a.cancelEvent(b);
                    "auto" == a.opt.oneaxismousemode && 0 != b.deltaX && (a.opt.oneaxismousemode = !1);
                    if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable) return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) :
                        !0;
                    var c = +new Date,
                        d = !1;
                    a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
                    a.checkarea = c;
                    if (a.nativescrollingarea) return !0;
                    if (b = p(b, !1, d)) a.checkarea = 0;
                    return b
                }
            };
            this.onmousewheelhr = function(b) {
                if (!a.wheelprevented) {
                    if (a.railslocked || !a.railh.scrollable) return !0;
                    if (a.rail.drag) return a.cancelEvent(b);
                    var c = +new Date,
                        d = !1;
                    a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0);
                    a.checkarea = c;
                    return a.nativescrollingarea ?
                        !0 : a.railslocked ? a.cancelEvent(b) : p(b, !0, d)
                }
            };
            this.stop = function() {
                a.cancelScroll();
                a.scrollmon && a.scrollmon.stop();
                a.cursorfreezed = !1;
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                a.noticeCursor();
                return a
            };
            this.getTransitionSpeed = function(b) {
                var c = Math.round(10 * a.opt.scrollspeed);
                b = Math.min(c, Math.round(b / 20 * a.opt.scrollspeed));
                return 20 < b ? b : 0
            };
            a.opt.smoothscroll ? a.ishwscroll && e.hastransition && a.opt.usetransition && a.opt.smoothscroll ? (this.prepareTransition = function(b, c) {
                var d = c ? 20 <
                    b ? b : 0 : a.getTransitionSpeed(b),
                    f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : "";
                a.lasttransitionstyle && a.lasttransitionstyle == f || (a.lasttransitionstyle = f, a.doc.css(e.transitionstyle, f));
                return d
            }, this.doScrollLeft = function(b, c) {
                var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                a.doScrollPos(b, d, c)
            }, this.doScrollTop = function(b, c) {
                var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
                a.doScrollPos(d, b, c)
            }, this.doScrollPos = function(b, c, d) {
                var f = a.getScrollTop(),
                    h = a.getScrollLeft();
                (0 > (a.newscrolly -
                    f) * (c - f) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
                0 == a.opt.bouncescroll && (0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
                if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly) return !1;
                a.newscrolly = c;
                a.newscrollx = b;
                a.newscrollspeed = d || !1;
                if (a.timer) return !1;
                a.timer = setTimeout(function() {
                    var d = a.getScrollTop(),
                        f = a.getScrollLeft(),
                        h, k;
                    h = b - f;
                    k = c - d;
                    h = Math.round(Math.sqrt(Math.pow(h, 2) + Math.pow(k, 2)));
                    h = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(h);
                    a.newscrollspeed && 1 >= a.newscrollspeed && (h *= a.newscrollspeed);
                    a.prepareTransition(h, !0);
                    a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                    0 < h && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {
                        type: "scrollstart",
                        current: {
                            x: f,
                            y: d
                        },
                        request: {
                            x: b,
                            y: c
                        },
                        end: {
                            x: a.newscrollx,
                            y: a.newscrolly
                        },
                        speed: h
                    }), e.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0, a.bind(a.doc, e.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), a.scrollendtrapped =
                        setTimeout(a.onScrollTransitionEnd, h)), a.timerscroll = {
                        bz: new A(d, a.newscrolly, h, 0, 0, .58, 1),
                        bh: new A(f, a.newscrollx, h, 0, 0, .58, 1)
                    }, a.cursorfreezed || (a.timerscroll.tm = setInterval(function() {
                        a.showCursor(a.getScrollTop(), a.getScrollLeft())
                    }, 60)));
                    a.synched("doScroll-set", function() {
                        a.timer = 0;
                        a.scrollendtrapped && (a.scrollrunning = !0);
                        a.setScrollTop(a.newscrolly);
                        a.setScrollLeft(a.newscrollx);
                        if (!a.scrollendtrapped) a.onScrollTransitionEnd()
                    })
                }, 50)
            }, this.cancelScroll = function() {
                if (!a.scrollendtrapped) return !0;
                var b = a.getScrollTop(),
                    c = a.getScrollLeft();
                a.scrollrunning = !1;
                e.transitionend || clearTimeout(e.transitionend);
                a.scrollendtrapped = !1;
                a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
                a.prepareTransition(0);
                a.setScrollTop(b);
                a.railh && a.setScrollLeft(c);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                a.timerscroll = !1;
                a.cursorfreezed = !1;
                a.showCursor(b, c);
                return a
            }, this.onScrollTransitionEnd = function() {
                a.scrollendtrapped && a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd);
                a.scrollendtrapped = !1;
                a.prepareTransition(0);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                a.timerscroll = !1;
                var b = a.getScrollTop(),
                    c = a.getScrollLeft();
                a.setScrollTop(b);
                a.railh && a.setScrollLeft(c);
                a.noticeCursor(!1, b, c);
                a.cursorfreezed = !1;
                0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
                0 > c ? c = 0 : c > a.page.maxw && (c = a.page.maxw);
                if (b != a.newscrolly || c != a.newscrollx) return a.doScrollPos(c, b, a.opt.snapbackspeed);
                a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
                a.scrollrunning = !1
            }) : (this.doScrollLeft =
                function(b, c) {
                    var d = a.scrollrunning ? a.newscrolly : a.getScrollTop();
                    a.doScrollPos(b, d, c)
                }, this.doScrollTop = function(b, c) {
                    var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
                    a.doScrollPos(d, b, c)
                }, this.doScrollPos = function(b, c, d) {
                    function e() {
                        if (a.cancelAnimationFrame) return !0;
                        a.scrollrunning = !0;
                        if (n = 1 - n) return a.timer = s(e) || 1;
                        var b = 0,
                            c, d, g = d = a.getScrollTop();
                        if (a.dst.ay) {
                            g = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly;
                            c = g - d;
                            if (0 > c && g < a.newscrolly || 0 < c && g > a.newscrolly) g = a.newscrolly;
                            a.setScrollTop(g);
                            g == a.newscrolly && (b = 1)
                        } else b = 1;
                        d = c = a.getScrollLeft();
                        if (a.dst.ax) {
                            d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx;
                            c = d - c;
                            if (0 > c && d < a.newscrollx || 0 < c && d > a.newscrollx) d = a.newscrollx;
                            a.setScrollLeft(d);
                            d == a.newscrollx && (b += 1)
                        } else b += 1;
                        2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > g ? g = 0 : g > a.page.maxh && (g = a.page.maxh), 0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || g != a.newscrolly ? a.doScrollPos(d, g) : a.onscrollend && a.triggerScrollEnd()) :
                            a.timer = s(e) || 1
                    }
                    c = "undefined" == typeof c || !1 === c ? a.getScrollTop(!0) : c;
                    if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0;
                    a.timer && t(a.timer);
                    a.timer = 0;
                    var f = a.getScrollTop(),
                        h = a.getScrollLeft();
                    (0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - h) * (b - h)) && a.cancelScroll();
                    a.newscrolly = c;
                    a.newscrollx = b;
                    a.bouncescroll && a.rail.visibility || (0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh));
                    a.bouncescroll && a.railh.visibility || (0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw &&
                        (a.newscrollx = a.page.maxw));
                    a.dst = {};
                    a.dst.x = b - h;
                    a.dst.y = c - f;
                    a.dst.px = h;
                    a.dst.py = f;
                    var k = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2)));
                    a.dst.ax = a.dst.x / k;
                    a.dst.ay = a.dst.y / k;
                    var l = 0,
                        m = k;
                    0 == a.dst.x ? (l = f, m = c, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (l = h, m = b, a.dst.ax = 1, a.dst.px = 0);
                    k = a.getTransitionSpeed(k);
                    d && 1 >= d && (k *= d);
                    a.bzscroll = 0 < k ? a.bzscroll ? a.bzscroll.update(m, k) : new A(l, m, k, 0, 1, 0, 1) : !1;
                    if (!a.timer) {
                        (f == a.page.maxh && c >= a.page.maxh || h == a.page.maxw && b >= a.page.maxw) && a.checkContentSize();
                        var n = 1;
                        a.cancelAnimationFrame = !1;
                        a.timer = 1;
                        a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {
                            type: "scrollstart",
                            current: {
                                x: h,
                                y: f
                            },
                            request: {
                                x: b,
                                y: c
                            },
                            end: {
                                x: a.newscrollx,
                                y: a.newscrolly
                            },
                            speed: k
                        });
                        e();
                        (f == a.page.maxh && c >= f || h == a.page.maxw && b >= h) && a.checkContentSize();
                        a.noticeCursor()
                    }
                }, this.cancelScroll = function() {
                    a.timer && t(a.timer);
                    a.timer = 0;
                    a.bzscroll = !1;
                    a.scrollrunning = !1;
                    return a
                }) : (this.doScrollLeft = function(b, c) {
                var d = a.getScrollTop();
                a.doScrollPos(b, d, c)
            }, this.doScrollTop = function(b,
                c) {
                var d = a.getScrollLeft();
                a.doScrollPos(d, b, c)
            }, this.doScrollPos = function(b, c, d) {
                var e = b > a.page.maxw ? a.page.maxw : b;
                0 > e && (e = 0);
                var f = c > a.page.maxh ? a.page.maxh : c;
                0 > f && (f = 0);
                a.synched("scroll", function() {
                    a.setScrollTop(f);
                    a.setScrollLeft(e)
                })
            }, this.cancelScroll = function() {});
            this.doScrollBy = function(b, c) {
                var d = 0,
                    d = c ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
                if (a.bouncescroll) {
                    var e = Math.round(a.view.h / 2);
                    d < -e ? d = -e : d > a.page.maxh + e && (d = a.page.maxh + e)
                }
                a.cursorfreezed = !1;
                e = a.getScrollTop(!0);
                if (0 > d && 0 >= e) return a.noticeCursor();
                if (d > a.page.maxh && e >= a.page.maxh) return a.checkContentSize(), a.noticeCursor();
                a.doScrollTop(d)
            };
            this.doScrollLeftBy = function(b, c) {
                var d = 0,
                    d = c ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
                if (a.bouncescroll) {
                    var e = Math.round(a.view.w / 2);
                    d < -e ? d = -e : d > a.page.maxw + e && (d = a.page.maxw + e)
                }
                a.cursorfreezed = !1;
                e = a.getScrollLeft(!0);
                if (0 > d && 0 >= e || d > a.page.maxw && e >= a.page.maxw) return a.noticeCursor();
                a.doScrollLeft(d)
            };
            this.doScrollTo = function(b, c) {
                c && Math.round(b * a.scrollratio.y);
                a.cursorfreezed = !1;
                a.doScrollTop(b)
            };
            this.checkContentSize = function() {
                var b = a.getContentSize();
                b.h == a.page.h && b.w == a.page.w || a.resize(!1, b)
            };
            a.onscroll = function(b) {
                a.rail.drag || a.cursorfreezed || a.synched("scroll", function() {
                    a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                    a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
                    a.noticeCursor()
                })
            };
            a.bind(a.docscroll, "scroll", a.onscroll);
            this.doZoomIn = function(b) {
                if (!a.zoomactive) {
                    a.zoomactive = !0;
                    a.zoomrestore = {
                        style: {}
                    };
                    var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                        d = a.win[0].style,
                        h;
                    for (h in c) {
                        var k = c[h];
                        a.zoomrestore.style[k] = "undefined" != typeof d[k] ? d[k] : ""
                    }
                    a.zoomrestore.style.width = a.win.css("width");
                    a.zoomrestore.style.height = a.win.css("height");
                    a.zoomrestore.padding = {
                        w: a.win.outerWidth() - a.win.width(),
                        h: a.win.outerHeight() - a.win.height()
                    };
                    e.isios4 && (a.zoomrestore.scrollTop = f(window).scrollTop(), f(window).scrollTop(0));
                    a.win.css({
                        position: e.isios4 ? "absolute" : "fixed",
                        top: 0,
                        left: 0,
                        "z-index": x + 100,
                        margin: "0px"
                    });
                    c = a.win.css("backgroundColor");
                    ("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && a.win.css("backgroundColor", "#fff");
                    a.rail.css({
                        "z-index": x + 101
                    });
                    a.zoom.css({
                        "z-index": x + 102
                    });
                    a.zoom.css("backgroundPosition", "0px -18px");
                    a.resizeZoom();
                    a.onzoomin && a.onzoomin.call(a);
                    return a.cancelEvent(b)
                }
            };
            this.doZoomOut = function(b) {
                if (a.zoomactive) return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style),
                    e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({
                        "z-index": a.zindex
                    }), a.zoom.css({
                        "z-index": a.zindex
                    }), a.zoomrestore = !1, a.zoom.css("backgroundPosition", "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b)
            };
            this.doZoom = function(b) {
                return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b)
            };
            this.resizeZoom = function() {
                if (a.zoomactive) {
                    var b = a.getScrollTop();
                    a.win.css({
                        width: f(window).width() - a.zoomrestore.padding.w + "px",
                        height: f(window).height() - a.zoomrestore.padding.h + "px"
                    });
                    a.onResize();
                    a.setScrollTop(Math.min(a.page.maxh, b))
                }
            };
            this.init();
            f.nicescroll.push(this)
        },
        L = function(f) {
            var c = this;
            this.nc = f;
            this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0;
            this.snapy = this.snapx = !1;
            this.demuly = this.demulx = 0;
            this.lastscrolly = this.lastscrollx = -1;
            this.timer = this.chky = this.chkx = 0;
            this.time = function() {
                return +new Date
            };
            this.reset = function(f, k) {
                c.stop();
                var d = c.time();
                c.steptime = 0;
                c.lasttime = d;
                c.speedx = 0;
                c.speedy = 0;
                c.lastx = f;
                c.lasty = k;
                c.lastscrollx = -1;
                c.lastscrolly = -1
            };
            this.update = function(f, k) {
                var d = c.time();
                c.steptime = d - c.lasttime;
                c.lasttime = d;
                var d = k - c.lasty,
                    n = f - c.lastx,
                    p = c.nc.getScrollTop(),
                    a = c.nc.getScrollLeft(),
                    p = p + d,
                    a = a + n;
                c.snapx = 0 > a || a > c.nc.page.maxw;
                c.snapy = 0 > p || p > c.nc.page.maxh;
                c.speedx = n;
                c.speedy = d;
                c.lastx = f;
                c.lasty = k
            };
            this.stop = function() {
                c.nc.unsynched("domomentum2d");
                c.timer && clearTimeout(c.timer);
                c.timer = 0;
                c.lastscrollx = -1;
                c.lastscrolly = -1
            };
            this.doSnapy = function(f, k) {
                var d = !1;
                0 > k ? (k = 0, d = !0) : k > c.nc.page.maxh && (k = c.nc.page.maxh, d = !0);
                0 > f ? (f = 0, d = !0) : f > c.nc.page.maxw && (f = c.nc.page.maxw, d = !0);
                d ? c.nc.doScrollPos(f, k, c.nc.opt.snapbackspeed) : c.nc.triggerScrollEnd()
            };
            this.doMomentum = function(f) {
                var k = c.time(),
                    d = f ? k + f : c.lasttime;
                f = c.nc.getScrollLeft();
                var n = c.nc.getScrollTop(),
                    p = c.nc.page.maxh,
                    a = c.nc.page.maxw;
                c.speedx = 0 < a ? Math.min(60, c.speedx) : 0;
                c.speedy = 0 < p ? Math.min(60, c.speedy) : 0;
                d = d && 60 >= k - d;
                if (0 > n || n > p || 0 > f || f > a) d = !1;
                f = c.speedx && d ? c.speedx : !1;
                if (c.speedy && d && c.speedy || f) {
                    var s = Math.max(16, c.steptime);
                    50 < s && (f = s / 50, c.speedx *= f, c.speedy *= f, s =
                        50);
                    c.demulxy = 0;
                    c.lastscrollx = c.nc.getScrollLeft();
                    c.chkx = c.lastscrollx;
                    c.lastscrolly = c.nc.getScrollTop();
                    c.chky = c.lastscrolly;
                    var e = c.lastscrollx,
                        r = c.lastscrolly,
                        t = function() {
                            var d = 600 < c.time() - k ? .04 : .02;
                            c.speedx && (e = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = e, 0 > e || e > a) && (d = .1);
                            c.speedy && (r = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = r, 0 > r || r > p) && (d = .1);
                            c.demulxy = Math.min(1, c.demulxy + d);
                            c.nc.synched("domomentum2d", function() {
                                c.speedx && (c.nc.getScrollLeft() !=
                                    c.chkx && c.stop(), c.chkx = e, c.nc.setScrollLeft(e));
                                c.speedy && (c.nc.getScrollTop() != c.chky && c.stop(), c.chky = r, c.nc.setScrollTop(r));
                                c.timer || (c.nc.hideCursor(), c.doSnapy(e, r))
                            });
                            1 > c.demulxy ? c.timer = setTimeout(t, s) : (c.stop(), c.nc.hideCursor(), c.doSnapy(e, r))
                        };
                    t()
                } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
            }
        },
        w = f.fn.scrollTop;
    f.cssHooks.pageYOffset = {
        get: function(k, c, h) {
            return (c = f.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : w.call(k)
        },
        set: function(k, c) {
            var h = f.data(k, "__nicescroll") ||
                !1;
            h && h.ishwscroll ? h.setScrollTop(parseInt(c)) : w.call(k, c);
            return this
        }
    };
    f.fn.scrollTop = function(k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollTop() : w.call(this)
        }
        return this.each(function() {
            var c = f.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollTop(parseInt(k)) : w.call(f(this), k)
        })
    };
    var B = f.fn.scrollLeft;
    f.cssHooks.pageXOffset = {
        get: function(k, c, h) {
            return (c = f.data(k, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollLeft() : B.call(k)
        },
        set: function(k, c) {
            var h = f.data(k, "__nicescroll") || !1;
            h && h.ishwscroll ? h.setScrollLeft(parseInt(c)) : B.call(k, c);
            return this
        }
    };
    f.fn.scrollLeft = function(k) {
        if ("undefined" == typeof k) {
            var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1;
            return c && c.ishwscroll ? c.getScrollLeft() : B.call(this)
        }
        return this.each(function() {
            var c = f.data(this, "__nicescroll") || !1;
            c && c.ishwscroll ? c.setScrollLeft(parseInt(k)) : B.call(f(this), k)
        })
    };
    var C = function(k) {
        var c = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function(d) {
            for (var f =
                    0, h = 0; f < c.length; f++) d.call(c[f], h++);
            return c
        };
        this.push = function(d) {
            c[c.length] = d;
            c.length++
        };
        this.eq = function(d) {
            return c[d]
        };
        if (k)
            for (var h = 0; h < k.length; h++) {
                var m = f.data(k[h], "__nicescroll") || !1;
                m && (this[this.length] = m, this.length++)
            }
        return this
    };
    (function(f, c, h) {
        for (var m = 0; m < c.length; m++) h(f, c[m])
    })(C.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function(f, c) {
        f[c] = function() {
            var f = arguments;
            return this.each(function() {
                this[c].apply(this, f)
            })
        }
    });
    f.fn.getNiceScroll =
        function(k) {
            return "undefined" == typeof k ? new C(this) : this[k] && f.data(this[k], "__nicescroll") || !1
        };
    f.extend(f.expr[":"], {
        nicescroll: function(k) {
            return f.data(k, "__nicescroll") ? !0 : !1
        }
    });
    f.fn.niceScroll = function(k, c) {
        "undefined" != typeof c || "object" != typeof k || "jquery" in k || (c = k, k = !1);
        c = f.extend({}, c);
        var h = new C;
        "undefined" == typeof c && (c = {});
        k && (c.doc = f(k), c.win = f(this));
        var m = !("doc" in c);
        m || "win" in c || (c.win = f(this));
        this.each(function() {
            var d = f(this).data("__nicescroll") || !1;
            d || (c.doc = m ? f(this) : c.doc,
                d = new R(c, f(this)), f(this).data("__nicescroll", d));
            h.push(d)
        });
        return 1 == h.length ? h[0] : h
    };
    window.NiceScroll = {
        getjQuery: function() {
            return f
        }
    };
    f.nicescroll || (f.nicescroll = new C, f.nicescroll.options = I)
});

function initsmoothscroll() {
    (function() {
        var ac = {
            frameRate: 350,
            animationTime: 700,
            stepSize: 45,
            pulseAlgorithm: true,
            pulseScale: 4,
            pulseNormalize: 1,
            accelerationDelta: 50,
            accelerationMax: 3,
            keyboardSupport: true,
            arrowScroll: 50,
            fixedBackground: true,
            excluded: ""
        };
        var I = ac;
        var G = false;
        var C = false;
        var m = {
            x: 0,
            y: 0
        };
        var b = false;
        var K = document.documentElement;
        var h;
        var R;
        var t;
        var ai = [];
        var i;
        var ad = /^Mac/.test(navigator.platform);
        var B = {
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            spacebar: 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36
        };
        var T = {
            37: 1,
            38: 1,
            39: 1,
            40: 1
        };

        function am() {
            if (I.keyboardSupport) {
                k("keydown", H)
            }
        }

        function af() {
            if (b || !document.body) {
                return
            }
            b = true;
            var e = document.body;
            var ar = document.documentElement;
            var au = window.innerHeight;
            var at = e.scrollHeight;
            K = (document.compatMode.indexOf("CSS") >= 0) ? ar : e;
            h = e;
            am();
            if (top != self) {
                C = true
            } else {
                if (X && at > au && (e.offsetHeight <= au || ar.offsetHeight <= au)) {
                    var ap = document.createElement("div");
                    ap.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + K.scrollHeight + "px";
                    document.body.appendChild(ap);
                    var an;
                    t = function() {
                        if (an) {
                            return
                        }
                        an = setTimeout(function() {
                            if (G) {
                                return
                            }
                            ap.style.height = "0";
                            ap.style.height = K.scrollHeight + "px";
                            an = null
                        }, 500)
                    };
                    setTimeout(t, 10);
                    k("resize", t);
                    var aq = {
                        attributes: true,
                        childList: true,
                        characterData: false
                    };
                    R = new L(t);
                    R.observe(e, aq);
                    if (K.offsetHeight <= au) {
                        var ao = document.createElement("div");
                        ao.style.clear = "both";
                        e.appendChild(ao)
                    }
                }
            }
            if (!I.fixedBackground && !G) {
                e.style.backgroundAttachment = "scroll";
                ar.style.backgroundAttachment = "scroll"
            }
        }

        function d() {
            R && R.disconnect();
            a(S, u);
            a("mousedown", w);
            a("keydown", H);
            a("resize", t);
            a("load", af)
        }
        var V = [];
        var l = false;
        var v = Date.now();

        function ag(ap, ao, at) {
            M(ao, at);
            if (I.accelerationMax != 1) {
                var e = Date.now();
                var av = e - v;
                if (av < I.accelerationDelta) {
                    var ar = (1 + (50 / av)) / 2;
                    if (ar > 1) {
                        ar = Math.min(ar, I.accelerationMax);
                        ao *= ar;
                        at *= ar
                    }
                }
                v = Date.now()
            }
            V.push({
                x: ao,
                y: at,
                lastX: (ao < 0) ? 0.99 : -0.99,
                lastY: (at < 0) ? 0.99 : -0.99,
                start: Date.now()
            });
            if (l) {
                return
            }
            var au = D();
            var aq = (ap === au || ap === document.body);
            if (ap.$scrollBehavior == null && O(ap)) {
                ap.$scrollBehavior = ap.style.scrollBehavior;
                ap.style.scrollBehavior = "auto"
            }
            var an = function(ax) {
                var aw = Date.now();
                var aE = 0;
                var aD = 0;
                for (var az = 0; az < V.length; az++) {
                    var aG = V[az];
                    var aF = aw - aG.start;
                    var ay = (aF >= I.animationTime);
                    var aA = (ay) ? 1 : aF / I.animationTime;
                    if (I.pulseAlgorithm) {
                        aA = p(aA)
                    }
                    var aC = (aG.x * aA - aG.lastX) >> 0;
                    var aB = (aG.y * aA - aG.lastY) >> 0;
                    aE += aC;
                    aD += aB;
                    aG.lastX += aC;
                    aG.lastY += aB;
                    if (ay) {
                        V.splice(az, 1);
                        az--
                    }
                }
                if (aq) {
                    window.scrollBy(aE, aD)
                } else {
                    if (aE) {
                        ap.scrollLeft += aE
                    }
                    if (aD) {
                        ap.scrollTop += aD
                    }
                }
                if (!ao && !at) {
                    V = []
                }
                if (V.length) {
                    U(an, ap, (1000 / I.frameRate + 1))
                } else {
                    l = false;
                    if (ap.$scrollBehavior != null) {
                        ap.style.scrollBehavior = ap.$scrollBehavior;
                        ap.$scrollBehavior = null
                    }
                }
            };
            U(an, ap, 0);
            l = true
        }

        function u(ap) {
            if (!b) {
                af()
            }
            var aq = ap.target;
            if (ap.defaultPrevented || ap.ctrlKey) {
                return true
            }
            if (s(h, "embed") || (s(aq, "embed") && /\.pdf/i.test(aq.src)) || s(h, "object") || aq.shadowRoot) {
                return true
            }
            var an = -ap.wheelDeltaX || ap.deltaX || 0;
            var e = -ap.wheelDeltaY || ap.deltaY || 0;
            if (ad) {
                if (ap.wheelDeltaX && A(ap.wheelDeltaX, 120)) {
                    an = -120 * (ap.wheelDeltaX / Math.abs(ap.wheelDeltaX))
                }
                if (ap.wheelDeltaY && A(ap.wheelDeltaY, 120)) {
                    e = -120 * (ap.wheelDeltaY / Math.abs(ap.wheelDeltaY))
                }
            }
            if (!an && !e) {
                e = -ap.wheelDelta || 0
            }
            if (ap.deltaMode === 1) {
                an *= 40;
                e *= 40
            }
            var ao = Y(aq);
            if (!ao) {
                if (C && ah) {
                    Object.defineProperty(ap, "target", {
                        value: window.frameElement
                    });
                    return parent.wheel(ap)
                }
                return true
            }
            if (ak(e)) {
                return true
            }
            if (Math.abs(an) > 1.2) {
                an *= I.stepSize / 120
            }
            if (Math.abs(e) > 1.2) {
                e *= I.stepSize / 120
            }
            ag(ao, an, e);
            ap.preventDefault();
            r()
        }

        function H(e) {
            var au = e.target;
            var aq = e.ctrlKey || e.altKey || e.metaKey || (e.shiftKey && e.keyCode !== B.spacebar);
            if (!document.body.contains(h)) {
                h = document.activeElement
            }
            var an = /^(textarea|select|embed|object)$/i;
            var ao = /^(button|submit|radio|checkbox|file|color|image)$/i;
            if (e.defaultPrevented || an.test(au.nodeName) || s(au, "input") && !ao.test(au.type) || s(h, "video") || z(e) || au.isContentEditable || aq) {
                return true
            }
            if ((s(au, "button") || s(au, "input") && ao.test(au.type)) && e.keyCode === B.spacebar) {
                return true
            }
            if (s(au, "input") && au.type == "radio" && T[e.keyCode]) {
                return true
            }
            var ap, ay = 0,
                aw = 0;
            var at = Y(h);
            if (!at) {
                return (C && ah) ? parent.keydown(e) : true
            }
            var ar = at.clientHeight;
            if (at == document.body) {
                ar = window.innerHeight
            }
            switch (e.keyCode) {
                case B.up:
                    aw = -I.arrowScroll;
                    break;
                case B.down:
                    aw = I.arrowScroll;
                    break;
                case B.spacebar:
                    ap = e.shiftKey ? 1 : -1;
                    aw = -ap * ar * 0.9;
                    break;
                case B.pageup:
                    aw = -ar * 0.9;
                    break;
                case B.pagedown:
                    aw = ar * 0.9;
                    break;
                case B.home:
                    if (at == document.body && document.scrollingElement) {
                        at = document.scrollingElement
                    }
                    aw = -at.scrollTop;
                    break;
                case B.end:
                    var ax = at.scrollHeight - at.scrollTop;
                    var av = ax - ar;
                    aw = (av > 0) ? av + 10 : 0;
                    break;
                case B.left:
                    ay = -I.arrowScroll;
                    break;
                case B.right:
                    ay = I.arrowScroll;
                    break;
                default:
                    return true
            }
            ag(at, ay, aw);
            e.preventDefault();
            r()
        }

        function w(e) {
            h = e.target
        }
        var J = (function() {
            var e = 0;
            return function(an) {
                return an.uniqueID || (an.uniqueID = e++)
            }
        })();
        var o = {};
        var n = {};
        var ae;
        var al = {};

        function r() {
            clearTimeout(ae);
            ae = setInterval(function() {
                o = n = al = {}
            }, 1 * 1000)
        }

        function g(ap, ao, e) {
            var an = e ? o : n;
            for (var aq = ap.length; aq--;) {
                an[J(ap[aq])] = ao
            }
            return ao
        }

        function j(an, e) {
            return (e ? o : n)[J(an)]
        }

        function Y(ar) {
            var ao = [];
            var e = document.body;
            var an = K.scrollHeight;
            do {
                var aq = j(ar, false);
                if (aq) {
                    return g(ao, aq)
                }
                ao.push(ar);
                if (an === ar.scrollHeight) {
                    var at = W(K) && W(e);
                    var ap = at || N(K);
                    if (C && Z(K) || !C && ap) {
                        return g(ao, D())
                    }
                } else {
                    if (Z(ar) && N(ar)) {
                        return g(ao, ar)
                    }
                }
            } while ((ar = ar.parentElement))
        }

        function Z(e) {
            return (e.clientHeight + 10 < e.scrollHeight)
        }

        function W(e) {
            var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return (an !== "hidden")
        }

        function N(e) {
            var an = getComputedStyle(e, "").getPropertyValue("overflow-y");
            return (an === "scroll" || an === "auto")
        }

        function O(e) {
            var ao = J(e);
            if (al[ao] == null) {
                var an = getComputedStyle(e, "")["scroll-behavior"];
                al[ao] = ("smooth" == an)
            }
            return al[ao]
        }

        function k(ao, an, e) {
            window.addEventListener(ao, an, e || false)
        }

        function a(ao, an, e) {
            window.removeEventListener(ao, an, e || false)
        }

        function s(an, e) {
            return an && (an.nodeName || "").toLowerCase() === e.toLowerCase()
        }

        function M(e, an) {
            e = (e > 0) ? 1 : -1;
            an = (an > 0) ? 1 : -1;
            if (m.x !== e || m.y !== an) {
                m.x = e;
                m.y = an;
                V = [];
                v = 0
            }
        }
        if (window.localStorage && localStorage.SS_deltaBuffer) {
            try {
                ai = localStorage.SS_deltaBuffer.split(",")
            } catch (aj) {}
        }

        function ak(e) {
            if (!e) {
                return
            }
            if (!ai.length) {
                ai = [e, e, e]
            }
            e = Math.abs(e);
            ai.push(e);
            ai.shift();
            clearTimeout(i);
            i = setTimeout(function() {
                try {
                    localStorage.SS_deltaBuffer = ai.join(",")
                } catch (ap) {}
            }, 1000);
            var an = e > 120 && F(e);
            var ao = !F(120) && !F(100) && !an;
            if (e < 50) {
                return true
            }
            return ao
        }

        function A(an, e) {
            return (Math.floor(an / e) == an / e)
        }

        function F(e) {
            return (A(ai[0], e) && A(ai[1], e) && A(ai[2], e))
        }

        function z(ao) {
            var an = ao.target;
            var e = false;
            if (document.URL.indexOf("www.youtube.com/watch") != -1) {
                do {
                    e = (an.classList && an.classList.contains("html5-video-controls"));
                    if (e) {
                        break
                    }
                } while ((an = an.parentNode))
            }
            return e
        }
        var U = (function() {
            return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(ao, an, e) {
                window.setTimeout(ao, e || (1000 / 60))
            })
        })();
        var L = (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver);
        var D = (function() {
            var e = document.scrollingElement;
            return function() {
                if (!e) {
                    var ap = document.createElement("div");
                    ap.style.cssText = "height:10000px;width:1px;";
                    document.body.appendChild(ap);
                    var ao = document.body.scrollTop;
                    var an = document.documentElement.scrollTop;
                    window.scrollBy(0, 3);
                    if (document.body.scrollTop != ao) {
                        (e = document.body)
                    } else {
                        (e = document.documentElement)
                    }
                    window.scrollBy(0, -3);
                    document.body.removeChild(ap)
                }
                return e
            }
        })();

        function ab(e) {
            var ao, ap, an;
            e = e * I.pulseScale;
            if (e < 1) {
                ao = e - (1 - Math.exp(-e))
            } else {
                ap = Math.exp(-1);
                e -= 1;
                an = 1 - Math.exp(-e);
                ao = ap + (an * (1 - ap))
            }
            return ao * I.pulseNormalize
        }

        function p(e) {
            if (e >= 1) {
                return 1
            }
            if (e <= 0) {
                return 0
            }
            if (I.pulseNormalize == 1) {
                I.pulseNormalize /= ab(1)
            }
            return ab(e)
        }
        var Q = window.navigator.userAgent;
        var aa = /Edge/.test(Q);
        var ah = /chrome/i.test(Q) && !aa;
        var f = /safari/i.test(Q) && !aa;
        var c = /firefox/i.test(Q);
        var P = /mobile/i.test(Q);
        var y = /Windows NT 6.1/i.test(Q) && /rv:11/i.test(Q);
        var X = f && (/Version\/8/i.test(Q) || /Version\/9/i.test(Q));
        var x = false;
        try {
            window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                get: function() {
                    x = true
                }
            }))
        } catch (aj) {}
        var E = x ? {
            passive: false
        } : false;
        var S = "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
        if (S) {
            k(S, u, E);
            k("mousedown", w);
            k("load", af)
        }

        function q(an) {
            for (var e in an) {
                if (ac.hasOwnProperty(e)) {
                    I[e] = an[e]
                }
            }
        }
        q.destroy = d;
        if (window.SmoothScrollOptions) {
            q(window.SmoothScrollOptions)
        }
        if (typeof define === "function" && define.amd) {
            define(function() {
                return q
            })
        } else {
            if ("object" == typeof exports) {
                module.exports = q
            } else {
                window.SmoothScroll = q
            }
        }
    })();
}