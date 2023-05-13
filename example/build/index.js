(() => {
  // output/Control.Semigroupoid/index.js
  var semigroupoidFn = {
    compose: function(f2) {
      return function(g2) {
        return function(x2) {
          return f2(g2(x2));
        };
      };
    }
  };

  // output/Control.Category/index.js
  var identity = function(dict) {
    return dict.identity;
  };
  var categoryFn = {
    identity: function(x2) {
      return x2;
    },
    Semigroupoid0: function() {
      return semigroupoidFn;
    }
  };

  // output/Data.Function/index.js
  var flip = function(f2) {
    return function(b2) {
      return function(a2) {
        return f2(a2)(b2);
      };
    };
  };
  var $$const = function(a2) {
    return function(v2) {
      return a2;
    };
  };

  // output/Data.Unit/foreign.js
  var unit = void 0;

  // output/Type.Proxy/index.js
  var $$Proxy = /* @__PURE__ */ function() {
    function $$Proxy2() {
    }
    ;
    $$Proxy2.value = new $$Proxy2();
    return $$Proxy2;
  }();

  // output/Data.Functor/index.js
  var map = function(dict) {
    return dict.map;
  };
  var mapFlipped = function(dictFunctor) {
    var map1 = map(dictFunctor);
    return function(fa) {
      return function(f2) {
        return map1(f2)(fa);
      };
    };
  };
  var $$void = function(dictFunctor) {
    return map(dictFunctor)($$const(unit));
  };

  // output/Control.Apply/index.js
  var identity2 = /* @__PURE__ */ identity(categoryFn);
  var apply = function(dict) {
    return dict.apply;
  };
  var applySecond = function(dictApply) {
    var apply1 = apply(dictApply);
    var map3 = map(dictApply.Functor0());
    return function(a2) {
      return function(b2) {
        return apply1(map3($$const(identity2))(a2))(b2);
      };
    };
  };

  // output/Control.Applicative/index.js
  var pure = function(dict) {
    return dict.pure;
  };
  var liftA1 = function(dictApplicative) {
    var apply3 = apply(dictApplicative.Apply0());
    var pure13 = pure(dictApplicative);
    return function(f2) {
      return function(a2) {
        return apply3(pure13(f2))(a2);
      };
    };
  };

  // output/Control.Bind/index.js
  var bind = function(dict) {
    return dict.bind;
  };
  var bindFlipped = function(dictBind) {
    return flip(bind(dictBind));
  };

  // output/Data.Foldable/foreign.js
  var foldrArray = function(f2) {
    return function(init) {
      return function(xs) {
        var acc = init;
        var len = xs.length;
        for (var i2 = len - 1; i2 >= 0; i2--) {
          acc = f2(xs[i2])(acc);
        }
        return acc;
      };
    };
  };
  var foldlArray = function(f2) {
    return function(init) {
      return function(xs) {
        var acc = init;
        var len = xs.length;
        for (var i2 = 0; i2 < len; i2++) {
          acc = f2(acc)(xs[i2]);
        }
        return acc;
      };
    };
  };

  // output/Data.Semigroup/foreign.js
  var concatArray = function(xs) {
    return function(ys) {
      if (xs.length === 0)
        return ys;
      if (ys.length === 0)
        return xs;
      return xs.concat(ys);
    };
  };

  // output/Data.Symbol/index.js
  var reflectSymbol = function(dict) {
    return dict.reflectSymbol;
  };

  // output/Record.Unsafe/foreign.js
  var unsafeGet = function(label) {
    return function(rec) {
      return rec[label];
    };
  };
  var unsafeSet = function(label) {
    return function(value) {
      return function(rec) {
        var copy = {};
        for (var key in rec) {
          if ({}.hasOwnProperty.call(rec, key)) {
            copy[key] = rec[key];
          }
        }
        copy[label] = value;
        return copy;
      };
    };
  };
  var unsafeDelete = function(label) {
    return function(rec) {
      var copy = {};
      for (var key in rec) {
        if (key !== label && {}.hasOwnProperty.call(rec, key)) {
          copy[key] = rec[key];
        }
      }
      return copy;
    };
  };

  // output/Data.Semigroup/index.js
  var semigroupArray = {
    append: concatArray
  };
  var append = function(dict) {
    return dict.append;
  };

  // output/Data.Bounded/foreign.js
  var topChar = String.fromCharCode(65535);
  var bottomChar = String.fromCharCode(0);
  var topNumber = Number.POSITIVE_INFINITY;
  var bottomNumber = Number.NEGATIVE_INFINITY;

  // output/Data.Show/foreign.js
  var showIntImpl = function(n2) {
    return n2.toString();
  };

  // output/Data.Show/index.js
  var showInt = {
    show: showIntImpl
  };
  var show = function(dict) {
    return dict.show;
  };

  // output/Data.Maybe/index.js
  var Nothing = /* @__PURE__ */ function() {
    function Nothing2() {
    }
    ;
    Nothing2.value = new Nothing2();
    return Nothing2;
  }();
  var Just = /* @__PURE__ */ function() {
    function Just2(value0) {
      this.value0 = value0;
    }
    ;
    Just2.create = function(value0) {
      return new Just2(value0);
    };
    return Just2;
  }();

  // output/Data.Either/index.js
  var Left = /* @__PURE__ */ function() {
    function Left2(value0) {
      this.value0 = value0;
    }
    ;
    Left2.create = function(value0) {
      return new Left2(value0);
    };
    return Left2;
  }();
  var Right = /* @__PURE__ */ function() {
    function Right2(value0) {
      this.value0 = value0;
    }
    ;
    Right2.create = function(value0) {
      return new Right2(value0);
    };
    return Right2;
  }();

  // output/Data.Monoid/index.js
  var mempty = function(dict) {
    return dict.mempty;
  };

  // output/Data.Tuple/index.js
  var Tuple = /* @__PURE__ */ function() {
    function Tuple2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Tuple2.create = function(value0) {
      return function(value1) {
        return new Tuple2(value0, value1);
      };
    };
    return Tuple2;
  }();

  // output/Data.Foldable/index.js
  var foldr = function(dict) {
    return dict.foldr;
  };
  var traverse_ = function(dictApplicative) {
    var applySecond2 = applySecond(dictApplicative.Apply0());
    var pure3 = pure(dictApplicative);
    return function(dictFoldable) {
      var foldr2 = foldr(dictFoldable);
      return function(f2) {
        return foldr2(function($454) {
          return applySecond2(f2($454));
        })(pure3(unit));
      };
    };
  };
  var foldableMaybe = {
    foldr: function(v2) {
      return function(v1) {
        return function(v22) {
          if (v22 instanceof Nothing) {
            return v1;
          }
          ;
          if (v22 instanceof Just) {
            return v2(v22.value0)(v1);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v2.constructor.name, v1.constructor.name, v22.constructor.name]);
        };
      };
    },
    foldl: function(v2) {
      return function(v1) {
        return function(v22) {
          if (v22 instanceof Nothing) {
            return v1;
          }
          ;
          if (v22 instanceof Just) {
            return v2(v1)(v22.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v2.constructor.name, v1.constructor.name, v22.constructor.name]);
        };
      };
    },
    foldMap: function(dictMonoid) {
      var mempty2 = mempty(dictMonoid);
      return function(v2) {
        return function(v1) {
          if (v1 instanceof Nothing) {
            return mempty2;
          }
          ;
          if (v1 instanceof Just) {
            return v2(v1.value0);
          }
          ;
          throw new Error("Failed pattern match at Data.Foldable (line 138, column 1 - line 144, column 27): " + [v2.constructor.name, v1.constructor.name]);
        };
      };
    }
  };
  var foldMapDefaultR = function(dictFoldable) {
    var foldr2 = foldr(dictFoldable);
    return function(dictMonoid) {
      var append3 = append(dictMonoid.Semigroup0());
      var mempty2 = mempty(dictMonoid);
      return function(f2) {
        return foldr2(function(x2) {
          return function(acc) {
            return append3(f2(x2))(acc);
          };
        })(mempty2);
      };
    };
  };
  var foldableArray = {
    foldr: foldrArray,
    foldl: foldlArray,
    foldMap: function(dictMonoid) {
      return foldMapDefaultR(foldableArray)(dictMonoid);
    }
  };

  // output/Effect/foreign.js
  var pureE = function(a2) {
    return function() {
      return a2;
    };
  };
  var bindE = function(a2) {
    return function(f2) {
      return function() {
        return f2(a2())();
      };
    };
  };

  // output/Control.Monad/index.js
  var ap = function(dictMonad) {
    var bind2 = bind(dictMonad.Bind1());
    var pure3 = pure(dictMonad.Applicative0());
    return function(f2) {
      return function(a2) {
        return bind2(f2)(function(f$prime) {
          return bind2(a2)(function(a$prime) {
            return pure3(f$prime(a$prime));
          });
        });
      };
    };
  };

  // output/Effect/index.js
  var $runtime_lazy = function(name2, moduleName, init) {
    var state3 = 0;
    var val;
    return function(lineNumber) {
      if (state3 === 2)
        return val;
      if (state3 === 1)
        throw new ReferenceError(name2 + " was needed before it finished initializing (module " + moduleName + ", line " + lineNumber + ")", moduleName, lineNumber);
      state3 = 1;
      val = init();
      state3 = 2;
      return val;
    };
  };
  var monadEffect = {
    Applicative0: function() {
      return applicativeEffect;
    },
    Bind1: function() {
      return bindEffect;
    }
  };
  var bindEffect = {
    bind: bindE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var applicativeEffect = {
    pure: pureE,
    Apply0: function() {
      return $lazy_applyEffect(0);
    }
  };
  var $lazy_functorEffect = /* @__PURE__ */ $runtime_lazy("functorEffect", "Effect", function() {
    return {
      map: liftA1(applicativeEffect)
    };
  });
  var $lazy_applyEffect = /* @__PURE__ */ $runtime_lazy("applyEffect", "Effect", function() {
    return {
      apply: ap(monadEffect),
      Functor0: function() {
        return $lazy_functorEffect(0);
      }
    };
  });
  var functorEffect = /* @__PURE__ */ $lazy_functorEffect(20);

  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function h(n2, l2) {
    for (var u2 in l2)
      n2[u2] = l2[u2];
    return n2;
  }
  function v(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
  }
  function y(l2, u2, i2) {
    var t2, r2, o2, f2 = {};
    for (o2 in u2)
      "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
    if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
      for (o2 in l2.defaultProps)
        void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
    return p(l2, f2, t2, r2, null);
  }
  function p(n2, i2, t2, r2, o2) {
    var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u : o2 };
    return null == o2 && null != l.vnode && l.vnode(f2), f2;
  }
  function _(n2) {
    return n2.children;
  }
  function k(n2, l2) {
    this.props = n2, this.context = l2;
  }
  function b(n2, l2) {
    if (null == l2)
      return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u2; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e)
        return u2.__e;
    return "function" == typeof n2.type ? b(n2) : null;
  }
  function g(n2) {
    var l2, u2;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
        if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
          n2.__e = n2.__c.base = u2.__e;
          break;
        }
      return g(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
  }
  function w() {
    var n2, l2, u2, i2, r2, o2, e2, c2;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l2 = t.length, i2 = void 0, r2 = void 0, e2 = (o2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (r2 = h({}, o2)).__v = o2.__v + 1, L(c2, o2, r2, u2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [e2] : null, i2, null == e2 ? b(o2) : e2, o2.__h), M(i2, o2), o2.__e != e2 && g(o2)), t.length > l2 && t.sort(f));
    w.__r = 0;
  }
  function x(n2, l2, u2, i2, t2, r2, o2, f2, e2, a2) {
    var h2, v2, y2, d, k2, g2, m2, w2 = i2 && i2.__k || s, x2 = w2.length;
    for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
      if (null != (d = u2.__k[h2] = null == (d = l2[h2]) || "boolean" == typeof d || "function" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? p(null, d, null, null, d) : Array.isArray(d) ? p(_, { children: d }, null, null, null) : d.__b > 0 ? p(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d)) {
        if (d.__ = u2, d.__b = u2.__b + 1, null === (y2 = w2[h2]) || y2 && d.key == y2.key && d.type === y2.type)
          w2[h2] = void 0;
        else
          for (v2 = 0; v2 < x2; v2++) {
            if ((y2 = w2[v2]) && d.key == y2.key && d.type === y2.type) {
              w2[v2] = void 0;
              break;
            }
            y2 = null;
          }
        L(n2, d, y2 = y2 || c, t2, r2, o2, f2, e2, a2), k2 = d.__e, (v2 = d.ref) && y2.ref != v2 && (m2 || (m2 = []), y2.ref && m2.push(y2.ref, null, d), m2.push(v2, d.__c || k2, d)), null != k2 ? (null == g2 && (g2 = k2), "function" == typeof d.type && d.__k === y2.__k ? d.__d = e2 = A(d, e2, n2) : e2 = C(n2, d, y2, w2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = b(y2));
      }
    for (u2.__e = g2, h2 = x2; h2--; )
      null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $(i2).nextSibling), S(w2[h2], w2[h2]));
    if (m2)
      for (h2 = 0; h2 < m2.length; h2++)
        O(m2[h2], m2[++h2], m2[++h2]);
  }
  function A(n2, l2, u2) {
    for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
      (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? A(i2, l2, u2) : C(u2, i2, i2, t2, i2.__e, l2));
    return l2;
  }
  function C(n2, l2, u2, i2, t2, r2) {
    var o2, f2, e2;
    if (void 0 !== l2.__d)
      o2 = l2.__d, l2.__d = void 0;
    else if (null == u2 || t2 != r2 || null == t2.parentNode)
      n:
        if (null == r2 || r2.parentNode !== n2)
          n2.appendChild(t2), o2 = null;
        else {
          for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
            if (f2 == t2)
              break n;
          n2.insertBefore(t2, r2), o2 = r2;
        }
    return void 0 !== o2 ? o2 : t2.nextSibling;
  }
  function $(n2) {
    var l2, u2, i2;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
        if ((u2 = n2.__k[l2]) && (i2 = $(u2)))
          return i2;
    }
    return null;
  }
  function H(n2, l2, u2, i2, t2) {
    var r2;
    for (r2 in u2)
      "children" === r2 || "key" === r2 || r2 in l2 || T(n2, r2, null, u2[r2], i2);
    for (r2 in l2)
      t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || T(n2, r2, l2[r2], u2[r2], i2);
  }
  function I(n2, l2, u2) {
    "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a.test(l2) ? u2 : u2 + "px";
  }
  function T(n2, l2, u2, i2, t2) {
    var r2;
    n:
      if ("style" === l2)
        if ("string" == typeof u2)
          n2.style.cssText = u2;
        else {
          if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
            for (l2 in i2)
              u2 && l2 in u2 || I(n2.style, l2, "");
          if (u2)
            for (l2 in u2)
              i2 && u2[l2] === i2[l2] || I(n2.style, l2, u2[l2]);
        }
      else if ("o" === l2[0] && "n" === l2[1])
        r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? z : j, r2) : n2.removeEventListener(l2, r2 ? z : j, r2);
      else if ("dangerouslySetInnerHTML" !== l2) {
        if (t2)
          l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
          try {
            n2[l2] = null == u2 ? "" : u2;
            break n;
          } catch (n3) {
          }
        "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
    var s2, a2, v2, y2, p2, d, b2, g2, m2, w2, A2, P, C2, $2, H2, I2 = u2.type;
    if (void 0 !== u2.constructor)
      return null;
    null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l.__b) && s2(u2);
    try {
      n:
        if ("function" == typeof I2) {
          if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], w2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i2.__c ? b2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(g2, w2) : (u2.__c = a2 = new k(g2, w2), a2.constructor = I2, a2.render = q), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {}), a2.context = w2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h({}, a2.__s)), h(a2.__s, I2.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
            null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(g2, a2.__s, w2) || u2.__v === i2.__v) {
              for (u2.__v !== i2.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
                n3 && (n3.__ = u2);
              }), A2 = 0; A2 < a2._sb.length; A2++)
                a2.__h.push(a2._sb[A2]);
              a2._sb = [], a2.__h.length && f2.push(a2);
              break n;
            }
            null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
              a2.componentDidUpdate(y2, p2, d);
            });
          }
          if (a2.context = w2, a2.props = g2, a2.__P = n2, P = l.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a2.state = a2.__s, a2.__d = false, P && P(u2), s2 = a2.render(a2.props, a2.state, a2.context), $2 = 0; $2 < a2._sb.length; $2++)
              a2.__h.push(a2._sb[$2]);
            a2._sb = [];
          } else
            do {
              a2.__d = false, P && P(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
            } while (a2.__d && ++C2 < 25);
          a2.state = a2.__s, null != a2.getChildContext && (t2 = h(h({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d = a2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === _ && null == s2.key ? s2.props.children : s2, x(n2, Array.isArray(H2) ? H2 : [H2], u2, i2, t2, r2, o2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), b2 && (a2.__E = a2.__ = null), a2.__e = false;
        } else
          null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N(i2.__e, u2, i2, t2, r2, o2, f2, c2);
      (s2 = l.diffed) && s2(u2);
    } catch (n3) {
      u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l.__e(n3, u2, i2);
    }
  }
  function M(n2, u2) {
    l.__c && l.__c(u2, n2), n2.some(function(u3) {
      try {
        n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
          n3.call(u3);
        });
      } catch (n3) {
        l.__e(n3, u3.__v);
      }
    });
  }
  function N(l2, u2, i2, t2, r2, o2, f2, e2) {
    var s2, a2, h2, y2 = i2.props, p2 = u2.props, d = u2.type, _2 = 0;
    if ("svg" === d && (r2 = true), null != o2) {
      for (; _2 < o2.length; _2++)
        if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d && (d ? s2.localName === d : 3 === s2.nodeType)) {
          l2 = s2, o2[_2] = null;
          break;
        }
    }
    if (null == l2) {
      if (null === d)
        return document.createTextNode(p2);
      l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, p2.is && p2), o2 = null, e2 = false;
    }
    if (null === d)
      y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
    else {
      if (o2 = o2 && n.call(l2.childNodes), a2 = (y2 = i2.props || c).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
        if (null != o2)
          for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
            y2[l2.attributes[_2].name] = l2.attributes[_2].value;
        (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
      }
      if (H(l2, p2, y2, r2, e2), h2)
        u2.__k = [];
      else if (_2 = u2.props.children, x(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d, o2, f2, o2 ? o2[0] : i2.__k && b(i2, 0), e2), null != o2)
        for (_2 = o2.length; _2--; )
          null != o2[_2] && v(o2[_2]);
      e2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d && !_2 || "option" === d && _2 !== y2.value) && T(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && T(l2, "checked", _2, y2.checked, false));
    }
    return l2;
  }
  function O(n2, u2, i2) {
    try {
      "function" == typeof n2 ? n2(u2) : n2.current = u2;
    } catch (n3) {
      l.__e(n3, i2);
    }
  }
  function S(n2, u2, i2) {
    var t2, r2;
    if (l.unmount && l.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O(t2, null, u2)), null != (t2 = n2.__c)) {
      if (t2.componentWillUnmount)
        try {
          t2.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u2);
        }
      t2.base = t2.__P = null, n2.__c = void 0;
    }
    if (t2 = n2.__k)
      for (r2 = 0; r2 < t2.length; r2++)
        t2[r2] && S(t2[r2], u2, i2 || "function" != typeof n2.type);
    i2 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l2, u2) {
    return this.constructor(n2, u2);
  }
  function B(u2, i2, t2) {
    var r2, o2, f2;
    l.__ && l.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L(i2, u2 = (!r2 && t2 || i2).__k = y(_, null, [u2]), o2 || c, c, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), M(f2, u2);
  }
  n = s.slice, l = { __e: function(n2, l2, u2, i2) {
    for (var t2, r2, o2; l2 = l2.__; )
      if ((t2 = l2.__c) && !t2.__)
        try {
          if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o2 = t2.__d), o2)
            return t2.__E = t2;
        } catch (l3) {
          n2 = l3;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, k.prototype.setState = function(n2, l2) {
    var u2;
    u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u2), this.props)), n2 && h(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), m(this));
  }, k.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l2) {
    return n2.__v.__b - l2.__v.__b;
  }, w.__r = 0, e = 0;

  // output/Muon/foreign.js
  var render_ = (run2) => () => {
    class C2 extends k {
      constructor(props2) {
        super(props2);
        props2.run(this)();
      }
      render() {
        return this.state;
      }
    }
    B(y(C2, { run: run2 }, []), document.body);
  };
  var html_ = (i2) => (s2) => () => {
    i2.setState(s2);
  };
  var text_ = (t2) => t2;
  var emptyProps_ = () => {
  };
  var insertAttr_ = (k2) => (v2) => (px) => {
    let res = { ...px };
    res[k2] = v2;
    return res;
  };
  var insertHandler_ = (k2) => (f2) => (px) => {
    let res = { ...px };
    res["on" + k2] = (e2) => f2(e2)();
    return res;
  };
  var el_ = (tag) => (props2) => (children) => {
    return y(tag, props2, children);
  };
  var eventTargetValue_ = (nothing) => (just) => (e2) => {
    if (e2.target && e2.target.value) {
      return just(e2.target.value);
    } else {
      return nothing;
    }
  };

  // output/Effect.Aff/foreign.js
  var Aff = function() {
    var EMPTY = {};
    var PURE = "Pure";
    var THROW = "Throw";
    var CATCH = "Catch";
    var SYNC = "Sync";
    var ASYNC = "Async";
    var BIND = "Bind";
    var BRACKET = "Bracket";
    var FORK = "Fork";
    var SEQ = "Sequential";
    var MAP = "Map";
    var APPLY = "Apply";
    var ALT = "Alt";
    var CONS = "Cons";
    var RESUME = "Resume";
    var RELEASE = "Release";
    var FINALIZER = "Finalizer";
    var FINALIZED = "Finalized";
    var FORKED = "Forked";
    var FIBER = "Fiber";
    var THUNK = "Thunk";
    function Aff2(tag, _1, _2, _3) {
      this.tag = tag;
      this._1 = _1;
      this._2 = _2;
      this._3 = _3;
    }
    function AffCtr(tag) {
      var fn = function(_1, _2, _3) {
        return new Aff2(tag, _1, _2, _3);
      };
      fn.tag = tag;
      return fn;
    }
    function nonCanceler(error2) {
      return new Aff2(PURE, void 0);
    }
    function runEff(eff) {
      try {
        eff();
      } catch (error2) {
        setTimeout(function() {
          throw error2;
        }, 0);
      }
    }
    function runSync(left, right, eff) {
      try {
        return right(eff());
      } catch (error2) {
        return left(error2);
      }
    }
    function runAsync(left, eff, k2) {
      try {
        return eff(k2)();
      } catch (error2) {
        k2(left(error2))();
        return nonCanceler;
      }
    }
    var Scheduler = function() {
      var limit = 1024;
      var size = 0;
      var ix = 0;
      var queue = new Array(limit);
      var draining = false;
      function drain() {
        var thunk;
        draining = true;
        while (size !== 0) {
          size--;
          thunk = queue[ix];
          queue[ix] = void 0;
          ix = (ix + 1) % limit;
          thunk();
        }
        draining = false;
      }
      return {
        isDraining: function() {
          return draining;
        },
        enqueue: function(cb) {
          var i2, tmp;
          if (size === limit) {
            tmp = draining;
            drain();
            draining = tmp;
          }
          queue[(ix + size) % limit] = cb;
          size++;
          if (!draining) {
            drain();
          }
        }
      };
    }();
    function Supervisor(util) {
      var fibers = {};
      var fiberId = 0;
      var count = 0;
      return {
        register: function(fiber) {
          var fid = fiberId++;
          fiber.onComplete({
            rethrow: true,
            handler: function(result) {
              return function() {
                count--;
                delete fibers[fid];
              };
            }
          })();
          fibers[fid] = fiber;
          count++;
        },
        isEmpty: function() {
          return count === 0;
        },
        killAll: function(killError, cb) {
          return function() {
            if (count === 0) {
              return cb();
            }
            var killCount = 0;
            var kills = {};
            function kill(fid) {
              kills[fid] = fibers[fid].kill(killError, function(result) {
                return function() {
                  delete kills[fid];
                  killCount--;
                  if (util.isLeft(result) && util.fromLeft(result)) {
                    setTimeout(function() {
                      throw util.fromLeft(result);
                    }, 0);
                  }
                  if (killCount === 0) {
                    cb();
                  }
                };
              })();
            }
            for (var k2 in fibers) {
              if (fibers.hasOwnProperty(k2)) {
                killCount++;
                kill(k2);
              }
            }
            fibers = {};
            fiberId = 0;
            count = 0;
            return function(error2) {
              return new Aff2(SYNC, function() {
                for (var k3 in kills) {
                  if (kills.hasOwnProperty(k3)) {
                    kills[k3]();
                  }
                }
              });
            };
          };
        }
      };
    }
    var SUSPENDED = 0;
    var CONTINUE = 1;
    var STEP_BIND = 2;
    var STEP_RESULT = 3;
    var PENDING = 4;
    var RETURN = 5;
    var COMPLETED = 6;
    function Fiber(util, supervisor, aff) {
      var runTick = 0;
      var status = SUSPENDED;
      var step = aff;
      var fail = null;
      var interrupt = null;
      var bhead = null;
      var btail = null;
      var attempts = null;
      var bracketCount = 0;
      var joinId = 0;
      var joins = null;
      var rethrow = true;
      function run2(localRunTick) {
        var tmp, result, attempt;
        while (true) {
          tmp = null;
          result = null;
          attempt = null;
          switch (status) {
            case STEP_BIND:
              status = CONTINUE;
              try {
                step = bhead(step);
                if (btail === null) {
                  bhead = null;
                } else {
                  bhead = btail._1;
                  btail = btail._2;
                }
              } catch (e2) {
                status = RETURN;
                fail = util.left(e2);
                step = null;
              }
              break;
            case STEP_RESULT:
              if (util.isLeft(step)) {
                status = RETURN;
                fail = step;
                step = null;
              } else if (bhead === null) {
                status = RETURN;
              } else {
                status = STEP_BIND;
                step = util.fromRight(step);
              }
              break;
            case CONTINUE:
              switch (step.tag) {
                case BIND:
                  if (bhead) {
                    btail = new Aff2(CONS, bhead, btail);
                  }
                  bhead = step._2;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case PURE:
                  if (bhead === null) {
                    status = RETURN;
                    step = util.right(step._1);
                  } else {
                    status = STEP_BIND;
                    step = step._1;
                  }
                  break;
                case SYNC:
                  status = STEP_RESULT;
                  step = runSync(util.left, util.right, step._1);
                  break;
                case ASYNC:
                  status = PENDING;
                  step = runAsync(util.left, step._1, function(result2) {
                    return function() {
                      if (runTick !== localRunTick) {
                        return;
                      }
                      runTick++;
                      Scheduler.enqueue(function() {
                        if (runTick !== localRunTick + 1) {
                          return;
                        }
                        status = STEP_RESULT;
                        step = result2;
                        run2(runTick);
                      });
                    };
                  });
                  return;
                case THROW:
                  status = RETURN;
                  fail = util.left(step._1);
                  step = null;
                  break;
                case CATCH:
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case BRACKET:
                  bracketCount++;
                  if (bhead === null) {
                    attempts = new Aff2(CONS, step, attempts, interrupt);
                  } else {
                    attempts = new Aff2(CONS, step, new Aff2(CONS, new Aff2(RESUME, bhead, btail), attempts, interrupt), interrupt);
                  }
                  bhead = null;
                  btail = null;
                  status = CONTINUE;
                  step = step._1;
                  break;
                case FORK:
                  status = STEP_RESULT;
                  tmp = Fiber(util, supervisor, step._2);
                  if (supervisor) {
                    supervisor.register(tmp);
                  }
                  if (step._1) {
                    tmp.run();
                  }
                  step = util.right(tmp);
                  break;
                case SEQ:
                  status = CONTINUE;
                  step = sequential2(util, supervisor, step._1);
                  break;
              }
              break;
            case RETURN:
              bhead = null;
              btail = null;
              if (attempts === null) {
                status = COMPLETED;
                step = interrupt || fail || step;
              } else {
                tmp = attempts._3;
                attempt = attempts._1;
                attempts = attempts._2;
                switch (attempt.tag) {
                  case CATCH:
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      status = RETURN;
                    } else if (fail) {
                      status = CONTINUE;
                      step = attempt._2(util.fromLeft(fail));
                      fail = null;
                    }
                    break;
                  case RESUME:
                    if (interrupt && interrupt !== tmp && bracketCount === 0 || fail) {
                      status = RETURN;
                    } else {
                      bhead = attempt._1;
                      btail = attempt._2;
                      status = STEP_BIND;
                      step = util.fromRight(step);
                    }
                    break;
                  case BRACKET:
                    bracketCount--;
                    if (fail === null) {
                      result = util.fromRight(step);
                      attempts = new Aff2(CONS, new Aff2(RELEASE, attempt._2, result), attempts, tmp);
                      if (interrupt === tmp || bracketCount > 0) {
                        status = CONTINUE;
                        step = attempt._3(result);
                      }
                    }
                    break;
                  case RELEASE:
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail), attempts, interrupt);
                    status = CONTINUE;
                    if (interrupt && interrupt !== tmp && bracketCount === 0) {
                      step = attempt._1.killed(util.fromLeft(interrupt))(attempt._2);
                    } else if (fail) {
                      step = attempt._1.failed(util.fromLeft(fail))(attempt._2);
                    } else {
                      step = attempt._1.completed(util.fromRight(step))(attempt._2);
                    }
                    fail = null;
                    bracketCount++;
                    break;
                  case FINALIZER:
                    bracketCount++;
                    attempts = new Aff2(CONS, new Aff2(FINALIZED, step, fail), attempts, interrupt);
                    status = CONTINUE;
                    step = attempt._1;
                    break;
                  case FINALIZED:
                    bracketCount--;
                    status = RETURN;
                    step = attempt._1;
                    fail = attempt._2;
                    break;
                }
              }
              break;
            case COMPLETED:
              for (var k2 in joins) {
                if (joins.hasOwnProperty(k2)) {
                  rethrow = rethrow && joins[k2].rethrow;
                  runEff(joins[k2].handler(step));
                }
              }
              joins = null;
              if (interrupt && fail) {
                setTimeout(function() {
                  throw util.fromLeft(fail);
                }, 0);
              } else if (util.isLeft(step) && rethrow) {
                setTimeout(function() {
                  if (rethrow) {
                    throw util.fromLeft(step);
                  }
                }, 0);
              }
              return;
            case SUSPENDED:
              status = CONTINUE;
              break;
            case PENDING:
              return;
          }
        }
      }
      function onComplete(join3) {
        return function() {
          if (status === COMPLETED) {
            rethrow = rethrow && join3.rethrow;
            join3.handler(step)();
            return function() {
            };
          }
          var jid = joinId++;
          joins = joins || {};
          joins[jid] = join3;
          return function() {
            if (joins !== null) {
              delete joins[jid];
            }
          };
        };
      }
      function kill(error2, cb) {
        return function() {
          if (status === COMPLETED) {
            cb(util.right(void 0))();
            return function() {
            };
          }
          var canceler = onComplete({
            rethrow: false,
            handler: function() {
              return cb(util.right(void 0));
            }
          })();
          switch (status) {
            case SUSPENDED:
              interrupt = util.left(error2);
              status = COMPLETED;
              step = interrupt;
              run2(runTick);
              break;
            case PENDING:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                if (status === PENDING) {
                  attempts = new Aff2(CONS, new Aff2(FINALIZER, step(error2)), attempts, interrupt);
                }
                status = RETURN;
                step = null;
                fail = null;
                run2(++runTick);
              }
              break;
            default:
              if (interrupt === null) {
                interrupt = util.left(error2);
              }
              if (bracketCount === 0) {
                status = RETURN;
                step = null;
                fail = null;
              }
          }
          return canceler;
        };
      }
      function join2(cb) {
        return function() {
          var canceler = onComplete({
            rethrow: false,
            handler: cb
          })();
          if (status === SUSPENDED) {
            run2(runTick);
          }
          return canceler;
        };
      }
      return {
        kill,
        join: join2,
        onComplete,
        isSuspended: function() {
          return status === SUSPENDED;
        },
        run: function() {
          if (status === SUSPENDED) {
            if (!Scheduler.isDraining()) {
              Scheduler.enqueue(function() {
                run2(runTick);
              });
            } else {
              run2(runTick);
            }
          }
        }
      };
    }
    function runPar(util, supervisor, par, cb) {
      var fiberId = 0;
      var fibers = {};
      var killId = 0;
      var kills = {};
      var early = new Error("[ParAff] Early exit");
      var interrupt = null;
      var root = EMPTY;
      function kill(error2, par2, cb2) {
        var step = par2;
        var head = null;
        var tail = null;
        var count = 0;
        var kills2 = {};
        var tmp, kid;
        loop:
          while (true) {
            tmp = null;
            switch (step.tag) {
              case FORKED:
                if (step._3 === EMPTY) {
                  tmp = fibers[step._1];
                  kills2[count++] = tmp.kill(error2, function(result) {
                    return function() {
                      count--;
                      if (count === 0) {
                        cb2(result)();
                      }
                    };
                  });
                }
                if (head === null) {
                  break loop;
                }
                step = head._2;
                if (tail === null) {
                  head = null;
                } else {
                  head = tail._1;
                  tail = tail._2;
                }
                break;
              case MAP:
                step = step._2;
                break;
              case APPLY:
              case ALT:
                if (head) {
                  tail = new Aff2(CONS, head, tail);
                }
                head = step;
                step = step._1;
                break;
            }
          }
        if (count === 0) {
          cb2(util.right(void 0))();
        } else {
          kid = 0;
          tmp = count;
          for (; kid < tmp; kid++) {
            kills2[kid] = kills2[kid]();
          }
        }
        return kills2;
      }
      function join2(result, head, tail) {
        var fail, step, lhs, rhs, tmp, kid;
        if (util.isLeft(result)) {
          fail = result;
          step = null;
        } else {
          step = result;
          fail = null;
        }
        loop:
          while (true) {
            lhs = null;
            rhs = null;
            tmp = null;
            kid = null;
            if (interrupt !== null) {
              return;
            }
            if (head === null) {
              cb(fail || step)();
              return;
            }
            if (head._3 !== EMPTY) {
              return;
            }
            switch (head.tag) {
              case MAP:
                if (fail === null) {
                  head._3 = util.right(head._1(util.fromRight(step)));
                  step = head._3;
                } else {
                  head._3 = fail;
                }
                break;
              case APPLY:
                lhs = head._1._3;
                rhs = head._2._3;
                if (fail) {
                  head._3 = fail;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, fail === lhs ? head._2 : head._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail === null) {
                        join2(fail, null, null);
                      } else {
                        join2(fail, tail._1, tail._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                } else if (lhs === EMPTY || rhs === EMPTY) {
                  return;
                } else {
                  step = util.right(util.fromRight(lhs)(util.fromRight(rhs)));
                  head._3 = step;
                }
                break;
              case ALT:
                lhs = head._1._3;
                rhs = head._2._3;
                if (lhs === EMPTY && util.isLeft(rhs) || rhs === EMPTY && util.isLeft(lhs)) {
                  return;
                }
                if (lhs !== EMPTY && util.isLeft(lhs) && rhs !== EMPTY && util.isLeft(rhs)) {
                  fail = step === lhs ? rhs : lhs;
                  step = null;
                  head._3 = fail;
                } else {
                  head._3 = step;
                  tmp = true;
                  kid = killId++;
                  kills[kid] = kill(early, step === lhs ? head._2 : head._1, function() {
                    return function() {
                      delete kills[kid];
                      if (tmp) {
                        tmp = false;
                      } else if (tail === null) {
                        join2(step, null, null);
                      } else {
                        join2(step, tail._1, tail._2);
                      }
                    };
                  });
                  if (tmp) {
                    tmp = false;
                    return;
                  }
                }
                break;
            }
            if (tail === null) {
              head = null;
            } else {
              head = tail._1;
              tail = tail._2;
            }
          }
      }
      function resolve(fiber) {
        return function(result) {
          return function() {
            delete fibers[fiber._1];
            fiber._3 = result;
            join2(result, fiber._2._1, fiber._2._2);
          };
        };
      }
      function run2() {
        var status = CONTINUE;
        var step = par;
        var head = null;
        var tail = null;
        var tmp, fid;
        loop:
          while (true) {
            tmp = null;
            fid = null;
            switch (status) {
              case CONTINUE:
                switch (step.tag) {
                  case MAP:
                    if (head) {
                      tail = new Aff2(CONS, head, tail);
                    }
                    head = new Aff2(MAP, step._1, EMPTY, EMPTY);
                    step = step._2;
                    break;
                  case APPLY:
                    if (head) {
                      tail = new Aff2(CONS, head, tail);
                    }
                    head = new Aff2(APPLY, EMPTY, step._2, EMPTY);
                    step = step._1;
                    break;
                  case ALT:
                    if (head) {
                      tail = new Aff2(CONS, head, tail);
                    }
                    head = new Aff2(ALT, EMPTY, step._2, EMPTY);
                    step = step._1;
                    break;
                  default:
                    fid = fiberId++;
                    status = RETURN;
                    tmp = step;
                    step = new Aff2(FORKED, fid, new Aff2(CONS, head, tail), EMPTY);
                    tmp = Fiber(util, supervisor, tmp);
                    tmp.onComplete({
                      rethrow: false,
                      handler: resolve(step)
                    })();
                    fibers[fid] = tmp;
                    if (supervisor) {
                      supervisor.register(tmp);
                    }
                }
                break;
              case RETURN:
                if (head === null) {
                  break loop;
                }
                if (head._1 === EMPTY) {
                  head._1 = step;
                  status = CONTINUE;
                  step = head._2;
                  head._2 = EMPTY;
                } else {
                  head._2 = step;
                  step = head;
                  if (tail === null) {
                    head = null;
                  } else {
                    head = tail._1;
                    tail = tail._2;
                  }
                }
            }
          }
        root = step;
        for (fid = 0; fid < fiberId; fid++) {
          fibers[fid].run();
        }
      }
      function cancel(error2, cb2) {
        interrupt = util.left(error2);
        var innerKills;
        for (var kid in kills) {
          if (kills.hasOwnProperty(kid)) {
            innerKills = kills[kid];
            for (kid in innerKills) {
              if (innerKills.hasOwnProperty(kid)) {
                innerKills[kid]();
              }
            }
          }
        }
        kills = null;
        var newKills = kill(error2, root, cb2);
        return function(killError) {
          return new Aff2(ASYNC, function(killCb) {
            return function() {
              for (var kid2 in newKills) {
                if (newKills.hasOwnProperty(kid2)) {
                  newKills[kid2]();
                }
              }
              return nonCanceler;
            };
          });
        };
      }
      run2();
      return function(killError) {
        return new Aff2(ASYNC, function(killCb) {
          return function() {
            return cancel(killError, killCb);
          };
        });
      };
    }
    function sequential2(util, supervisor, par) {
      return new Aff2(ASYNC, function(cb) {
        return function() {
          return runPar(util, supervisor, par, cb);
        };
      });
    }
    Aff2.EMPTY = EMPTY;
    Aff2.Pure = AffCtr(PURE);
    Aff2.Throw = AffCtr(THROW);
    Aff2.Catch = AffCtr(CATCH);
    Aff2.Sync = AffCtr(SYNC);
    Aff2.Async = AffCtr(ASYNC);
    Aff2.Bind = AffCtr(BIND);
    Aff2.Bracket = AffCtr(BRACKET);
    Aff2.Fork = AffCtr(FORK);
    Aff2.Seq = AffCtr(SEQ);
    Aff2.ParMap = AffCtr(MAP);
    Aff2.ParApply = AffCtr(APPLY);
    Aff2.ParAlt = AffCtr(ALT);
    Aff2.Fiber = Fiber;
    Aff2.Supervisor = Supervisor;
    Aff2.Scheduler = Scheduler;
    Aff2.nonCanceler = nonCanceler;
    return Aff2;
  }();
  var _pure = Aff.Pure;
  var _throwError = Aff.Throw;
  var _liftEffect = Aff.Sync;
  var makeAff = Aff.Async;
  function _makeFiber(util, aff) {
    return function() {
      return Aff.Fiber(util, null, aff);
    };
  }
  var _delay = function() {
    function setDelay(n2, k2) {
      if (n2 === 0 && typeof setImmediate !== "undefined") {
        return setImmediate(k2);
      } else {
        return setTimeout(k2, n2);
      }
    }
    function clearDelay(n2, t2) {
      if (n2 === 0 && typeof clearImmediate !== "undefined") {
        return clearImmediate(t2);
      } else {
        return clearTimeout(t2);
      }
    }
    return function(right, ms) {
      return Aff.Async(function(cb) {
        return function() {
          var timer = setDelay(ms, cb(right()));
          return function() {
            return Aff.Sync(function() {
              return right(clearDelay(ms, timer));
            });
          };
        };
      });
    };
  }();
  var _sequential = Aff.Seq;

  // output/Data.Traversable/foreign.js
  var traverseArrayImpl = function() {
    function array1(a2) {
      return [a2];
    }
    function array2(a2) {
      return function(b2) {
        return [a2, b2];
      };
    }
    function array3(a2) {
      return function(b2) {
        return function(c2) {
          return [a2, b2, c2];
        };
      };
    }
    function concat2(xs) {
      return function(ys) {
        return xs.concat(ys);
      };
    }
    return function(apply3) {
      return function(map3) {
        return function(pure3) {
          return function(f2) {
            return function(array) {
              function go(bot, top2) {
                switch (top2 - bot) {
                  case 0:
                    return pure3([]);
                  case 1:
                    return map3(array1)(f2(array[bot]));
                  case 2:
                    return apply3(map3(array2)(f2(array[bot])))(f2(array[bot + 1]));
                  case 3:
                    return apply3(apply3(map3(array3)(f2(array[bot])))(f2(array[bot + 1])))(f2(array[bot + 2]));
                  default:
                    var pivot = bot + Math.floor((top2 - bot) / 4) * 2;
                    return apply3(map3(concat2)(go(bot, pivot)))(go(pivot, top2));
                }
              }
              return go(0, array.length);
            };
          };
        };
      };
    };
  }();

  // output/Partial.Unsafe/foreign.js
  var _unsafePartial = function(f2) {
    return f2();
  };

  // output/Partial/foreign.js
  var _crashWith = function(msg) {
    throw new Error(msg);
  };

  // output/Partial/index.js
  var crashWith = function() {
    return _crashWith;
  };

  // output/Partial.Unsafe/index.js
  var crashWith2 = /* @__PURE__ */ crashWith();
  var unsafePartial = _unsafePartial;
  var unsafeCrashWith = function(msg) {
    return unsafePartial(function() {
      return crashWith2(msg);
    });
  };

  // output/Effect.Aff/index.js
  var $$void2 = /* @__PURE__ */ $$void(functorEffect);
  var ffiUtil = /* @__PURE__ */ function() {
    var unsafeFromRight = function(v2) {
      if (v2 instanceof Right) {
        return v2.value0;
      }
      ;
      if (v2 instanceof Left) {
        return unsafeCrashWith("unsafeFromRight: Left");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 412, column 21 - line 414, column 54): " + [v2.constructor.name]);
    };
    var unsafeFromLeft = function(v2) {
      if (v2 instanceof Left) {
        return v2.value0;
      }
      ;
      if (v2 instanceof Right) {
        return unsafeCrashWith("unsafeFromLeft: Right");
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 407, column 20 - line 409, column 55): " + [v2.constructor.name]);
    };
    var isLeft = function(v2) {
      if (v2 instanceof Left) {
        return true;
      }
      ;
      if (v2 instanceof Right) {
        return false;
      }
      ;
      throw new Error("Failed pattern match at Effect.Aff (line 402, column 12 - line 404, column 21): " + [v2.constructor.name]);
    };
    return {
      isLeft,
      fromLeft: unsafeFromLeft,
      fromRight: unsafeFromRight,
      left: Left.create,
      right: Right.create
    };
  }();
  var makeFiber = function(aff) {
    return _makeFiber(ffiUtil, aff);
  };
  var launchAff = function(aff) {
    return function __do2() {
      var fiber = makeFiber(aff)();
      fiber.run();
      return fiber;
    };
  };
  var launchAff_ = function($74) {
    return $$void2(launchAff($74));
  };

  // output/Record/index.js
  var insert = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function() {
        return function(l2) {
          return function(a2) {
            return function(r2) {
              return unsafeSet(reflectSymbol2(l2))(a2)(r2);
            };
          };
        };
      };
    };
  };
  var get = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function(l2) {
        return function(r2) {
          return unsafeGet(reflectSymbol2(l2))(r2);
        };
      };
    };
  };
  var $$delete = function(dictIsSymbol) {
    var reflectSymbol2 = reflectSymbol(dictIsSymbol);
    return function() {
      return function() {
        return function(l2) {
          return function(r2) {
            return unsafeDelete(reflectSymbol2(l2))(r2);
          };
        };
      };
    };
  };

  // output/Signal/foreign.js
  function make(initial) {
    var subs = [];
    var val = initial;
    var sig = {
      subscribe: function(sub2) {
        subs.push(sub2);
        sub2(val);
      },
      get: function() {
        return val;
      },
      set: function(newval) {
        val = newval;
        subs.forEach(function(sub2) {
          sub2(newval);
        });
      }
    };
    return sig;
  }
  var constant = make;
  function mapSig(fun) {
    return function(sig) {
      var out = make(fun(sig.get()));
      sig.subscribe(function(val) {
        out.set(fun(val));
      });
      return out;
    };
  }
  function applySig(fun) {
    return function(sig) {
      var out = make(fun.get()(sig.get()));
      var produce = function() {
        out.set(fun.get()(sig.get()));
      };
      fun.subscribe(produce);
      sig.subscribe(produce);
      return out;
    };
  }
  function runSignal(sig) {
    return function() {
      sig.subscribe(function(val) {
        val();
      });
      return {};
    };
  }

  // output/Signal/index.js
  var functorSignal = {
    map: mapSig
  };
  var applySignal = {
    apply: applySig,
    Functor0: function() {
      return functorSignal;
    }
  };
  var applicativeSignal = {
    pure: constant,
    Apply0: function() {
      return applySignal;
    }
  };

  // output/Signal.Channel/foreign.js
  function channelP(constant2) {
    return function(v2) {
      return function() {
        return constant2(v2);
      };
    };
  }
  function sendP(chan) {
    return function(v2) {
      return function() {
        chan.set(v2);
      };
    };
  }
  function subscribe(chan) {
    return chan;
  }

  // output/Signal.Channel/index.js
  var send = sendP;
  var channel = /* @__PURE__ */ channelP(constant);

  // output/Muon/index.js
  var pure2 = /* @__PURE__ */ pure(applicativeEffect);
  var pure1 = /* @__PURE__ */ pure(applicativeSignal);
  var append2 = /* @__PURE__ */ append(semigroupArray);
  var apply2 = /* @__PURE__ */ apply(applySignal);
  var map2 = /* @__PURE__ */ map(functorSignal);
  var mapFlipped2 = /* @__PURE__ */ mapFlipped(functorSignal);
  var traverse_2 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableArray);
  var Attr = /* @__PURE__ */ function() {
    function Attr2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Attr2.create = function(value0) {
      return function(value1) {
        return new Attr2(value0, value1);
      };
    };
    return Attr2;
  }();
  var Handler = /* @__PURE__ */ function() {
    function Handler2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Handler2.create = function(value0) {
      return function(value1) {
        return new Handler2(value0, value1);
      };
    };
    return Handler2;
  }();
  var Muon = /* @__PURE__ */ function() {
    function Muon2(value0, value1) {
      this.value0 = value0;
      this.value1 = value1;
    }
    ;
    Muon2.create = function(value0) {
      return function(value1) {
        return new Muon2(value0, value1);
      };
    };
    return Muon2;
  }();
  var statefulRLNilRowRowRow = {
    stateRL: function(v2) {
      return function(v1) {
        return pure2(new Tuple(pure1({}), {}));
      };
    }
  };
  var functorMuon = {
    map: function(f2) {
      return function(v2) {
        return new Muon(v2.value0, f2(v2.value1));
      };
    }
  };
  var applyMuon = {
    apply: function(v2) {
      return function(v1) {
        return new Muon(append2(v2.value0)(v1.value0), v2.value1(v1.value1));
      };
    },
    Functor0: function() {
      return functorMuon;
    }
  };
  var applicativeMuon = /* @__PURE__ */ function() {
    return {
      pure: Muon.create([]),
      Apply0: function() {
        return applyMuon;
      }
    };
  }();
  var text = text_;
  var stateRL = function(dict) {
    return dict.stateRL;
  };
  var statefulRLCons = function(dictIsSymbol) {
    var $$delete2 = $$delete(dictIsSymbol)()();
    var get3 = get(dictIsSymbol)();
    var insert2 = insert(dictIsSymbol)()();
    return function() {
      return function() {
        return function() {
          return function() {
            return function() {
              return function() {
                return function() {
                  return function(dictStatefulRL) {
                    var stateRL1 = stateRL(dictStatefulRL);
                    return {
                      stateRL: function(v2) {
                        return function(rec) {
                          return function __do2() {
                            var v1 = stateRL1($$Proxy.value)($$delete2($$Proxy.value)(rec))();
                            var chan = channel(get3($$Proxy.value)(rec))();
                            var s$prime = apply2(map2(insert2($$Proxy.value))(subscribe(chan)))(v1.value0);
                            var t$prime = insert2($$Proxy.value)(send(chan))(v1.value1);
                            return new Tuple(s$prime, t$prime);
                          };
                        };
                      }
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };
  var statefulRecordSignalRecor = function() {
    return function(dictStatefulRL) {
      return {
        state: stateRL(dictStatefulRL)($$Proxy.value)
      };
    };
  };
  var state2 = function(dict) {
    return dict.state;
  };
  var props = /* @__PURE__ */ function() {
    var insert2 = function(prop) {
      if (prop instanceof Attr) {
        return insertAttr_(prop.value0)(prop.value1);
      }
      ;
      if (prop instanceof Handler) {
        return insertHandler_(prop.value0)(prop.value1);
      }
      ;
      throw new Error("Failed pattern match at Muon (line 184, column 17 - line 188, column 25): " + [prop.constructor.name]);
    };
    return foldr(foldableArray)(insert2)(emptyProps_(unit));
  }();
  var on = /* @__PURE__ */ function() {
    return Handler.create;
  }();
  var keyup = "keyup";
  var eventTargetValue = /* @__PURE__ */ function() {
    return eventTargetValue_(Nothing.value)(Just.create);
  }();
  var el$prime = function(tag) {
    return el_(tag)(emptyProps_(unit));
  };
  var hr$prime = /* @__PURE__ */ el$prime("hr")([]);
  var el = function(tag) {
    return function(px) {
      return function(cx) {
        return el_(tag)(props(px))(cx);
      };
    };
  };
  var input = /* @__PURE__ */ flip(/* @__PURE__ */ el("input"))([]);
  var div$prime = /* @__PURE__ */ el$prime("div");
  var cmd = function(v2) {
    return launchAff_(v2.value0);
  };
  var muon = function(sig) {
    return render_(function(inst) {
      return runSignal(mapFlipped2(sig)(function(v2) {
        return function __do2() {
          html_(inst)(v2.value1)();
          return traverse_2(cmd)(v2.value0)();
        };
      }));
    });
  };
  var click = "click";
  var button = /* @__PURE__ */ el("button");
  var attr = /* @__PURE__ */ function() {
    return Attr.create;
  }();

  // output/Main/index.js
  var mapFlipped3 = /* @__PURE__ */ mapFlipped(functorSignal);
  var pure12 = /* @__PURE__ */ pure(applicativeMuon);
  var traverse_3 = /* @__PURE__ */ traverse_(applicativeEffect)(foldableMaybe);
  var show2 = /* @__PURE__ */ show(showInt);
  var app = function __do() {
    var v2 = state2(statefulRecordSignalRecor()(statefulRLCons({
      reflectSymbol: function() {
        return "i";
      }
    })()()()()()()()(statefulRLCons({
      reflectSymbol: function() {
        return "s";
      }
    })()()()()()()()(statefulRLNilRowRowRow))))({
      i: 0,
      s: "something"
    })();
    return mapFlipped3(v2.value0)(function(v1) {
      var decrement = $$const(v2.value1.i(v1.i - 1 | 0));
      var increment = $$const(v2.value1.i(v1.i + 1 | 0));
      return pure12(div$prime([div$prime([div$prime([text(v1.s)]), input([attr("type")("text"), attr("value")(v1.s), on(keyup)(function() {
        var $42 = traverse_3(v2.value1.s);
        return function($43) {
          return $42(eventTargetValue($43));
        };
      }())])]), hr$prime, div$prime([div$prime([text(show2(v1.i))]), button([on(click)(decrement)])([text("-")]), button([on(click)(increment)])([text("+")])])]));
    });
  };
  var main = /* @__PURE__ */ bindFlipped(bindEffect)(muon)(app);

  // <stdin>
  main();
})();
