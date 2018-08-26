parcelRequire = (function(e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      p.resolve = function(r) {
        return e[n][1][r] || r;
      };
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {}
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define && define.amd
        ? define(function() {
            return c;
          })
        : t && (this[t] = c);
  }
  return u;
})(
  {
    "39eF": [
      function(require, module, exports) {
        var n = (function() {
            return function(n, t) {
              if (Array.isArray(n)) return n;
              if (Symbol.iterator in Object(n))
                return (function(n, t) {
                  var r = [],
                    e = !0,
                    o = !1,
                    u = void 0;
                  try {
                    for (
                      var i, c = n[Symbol.iterator]();
                      !(e = (i = c.next()).done) &&
                      (r.push(i.value), !t || r.length !== t);
                      e = !0
                    );
                  } catch (n) {
                    (o = !0), (u = n);
                  } finally {
                    try {
                      !e && c.return && c.return();
                    } finally {
                      if (o) throw u;
                    }
                  }
                  return r;
                })(n, t);
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            };
          })(),
          t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(n) {
                  return typeof n;
                }
              : function(n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                };
        function r(n, t, r) {
          return (
            t in n
              ? Object.defineProperty(n, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (n[t] = r),
            n
          );
        }
        var e = function(n) {
            return null != n && NaN !== n;
          },
          o = function(n) {
            return function(r) {
              return e(r) && (void 0 === r ? "undefined" : t(r)) === n;
            };
          },
          u = o("function"),
          i = o("object"),
          c = o("string"),
          f = o("number"),
          a = o("boolean"),
          l = Array.isArray,
          s = function(n) {
            throw new TypeError(n);
          },
          y = function(n) {
            return function(t) {
              return console.log(n, t), t;
            };
          },
          b = function n(t) {
            return {
              andThen: function(r) {
                return n(r(t));
              },
              value: function() {
                return t;
              }
            };
          },
          p = function(n, t) {
            return (
              !(!i(t) || !l(n)) &&
              0 ===
                n.filter(function(n) {
                  return !t.hasOwnProperty(n);
                }).length
            );
          },
          v = function(t, e) {
            var o = n(e, 2),
              u = o[0],
              i = o[1];
            return Object.assign(t, r({}, u, i));
          },
          d = function(n) {
            return function(t) {
              return e(t) && Object.setPrototypeOf(t, n), t;
            };
          },
          m = function(n, t) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function(n) {
                      return n;
                    },
              u = r({}, n, function(r) {
                return b(o(r))
                  .andThen(function(e) {
                    return t(e)
                      ? e
                      : s(
                          "Value '" +
                            r +
                            "' is not of expected type '" +
                            n +
                            "'"
                        );
                  })
                  .andThen(d({ constructor: u[n] }))
                  .value();
              });
            return (
              (u[n].is = function(r) {
                return e(r) && r.prototype && r.prototype.constructor
                  ? r.prototype.constuctor === u[n]
                  : t(r);
              }),
              (u[n].toString = function() {
                return n + "(x)";
              }),
              (u[n].inspect = function() {
                return n + "(x)";
              }),
              u[n]
            );
          },
          g = m("String", c, String),
          h = m("Object", i, Object),
          O = m("Number", f, Number),
          j = m("Boolean", a, Boolean),
          S = m("Boolean", Array.isArray, Array),
          A = {};
        (A[String] = g),
          (A[Object] = h),
          (A[Number] = O),
          (A[Boolean] = j),
          (A[Array] = S);
        var T = function(n) {
            return void 0 !== A[n] ? A[n] : n;
          },
          N = function t(r) {
            return Object.entries(r)
              .map(function(r) {
                var e = n(r, 2),
                  o = e[0],
                  u = e[1];
                return [o, i(u) ? t(u) : T(u)];
              })
              .reduce(v, {});
          },
          k = i,
          w = function(t) {
            return function(r) {
              return (
                i(r) &&
                p(Object.keys(t), r) &&
                0 ===
                  Object.entries(t).filter(function(t) {
                    var e = n(t, 2),
                      o = e[0];
                    return !e[1].is(r[o]);
                  }).length
              );
            };
          },
          x = function(t) {
            return function(r) {
              return Object.entries(t)
                .map(function(t) {
                  var e = n(t, 2),
                    o = e[0];
                  return [o, (0, e[1])(r[o])];
                })
                .reduce(v, {});
            };
          },
          B = function(n, t) {
            return k(t)
              ? b(N(t))
                  .andThen(function(t) {
                    return m(n, w(t), x(t));
                  })
                  .value()
              : s(
                  "Data: Type definition must consist only of functions and objects containing functions"
                );
          },
          E = function(n) {
            return (
              0 ===
              Object.values(n).filter(function(n) {
                return !u(n);
              }).length
            );
          },
          P = function(t, r) {
            return function(e) {
              var o = Object.entries(t)
                  .filter(function(t) {
                    var e = n(t, 2);
                    e[0];
                    return e[1].is(r);
                  })
                  .map(function(t) {
                    var r = n(t, 2),
                      e = r[0];
                    r[1];
                    return e;
                  })[0],
                u = e[o];
              return u ? u(r) : s(o + " is not in the object!");
            };
          },
          D = function(t, r) {
            return E(r)
              ? b(N(r))
                  .andThen(function(r) {
                    return Object.entries(r)
                      .map(function(t) {
                        var r = n(t, 2),
                          e = r[0],
                          o = r[1];
                        return [e, m(e, o.is, o)];
                      })
                      .reduce(
                        v,
                        Object.create({
                          toString: function() {
                            return t;
                          },
                          is: function(n) {
                            return (
                              Object.values(r).filter(function(t) {
                                return t.is(n);
                              }).length > 0
                            );
                          },
                          case: function(n, t) {
                            return P(r, n)(t);
                          }
                        })
                      );
                  })
                  .value()
              : s("Union: Type definition must consist only of functions");
          },
          M = m("Any", function(n) {
            return e(n);
          }),
          R = m(
            "Nothing",
            function(n) {
              return !e(n);
            },
            function(n) {}
          ),
          U = D("Maybe", { Just: M, Nothing: R }),
          I = m(
            "Ok",
            function(n) {
              return i(n) && !0 === n.ok && M.is(n.value);
            },
            function(n) {
              return { ok: !0, value: M(n) };
            }
          ),
          J = m(
            "Error",
            function(n) {
              return i(n) && !1 === n.ok && g.is(n.error);
            },
            function(n) {
              return { ok: !1, error: String(n) };
            }
          ),
          V = D("Result", { Ok: I, Err: J });
        module.exports = {
          Type: m,
          Data: B,
          Union: D,
          Maybe: U,
          Result: V,
          String: g,
          Object: h,
          Number: O,
          Boolean: j,
          Array: S,
          Any: M,
          Nothing: R,
          Success: I,
          Error: J
        };
      },
      {}
    ]
  },
  {},
  ["39eF"],
  null
);
//# sourceMappingURL=/types.map
