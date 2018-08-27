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
                    u = !1,
                    o = void 0;
                  try {
                    for (
                      var i, c = n[Symbol.iterator]();
                      !(e = (i = c.next()).done) &&
                      (r.push(i.value), !t || r.length !== t);
                      e = !0
                    );
                  } catch (n) {
                    (u = !0), (o = n);
                  } finally {
                    try {
                      !e && c.return && c.return();
                    } finally {
                      if (u) throw o;
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
          u = function(n) {
            return function(r) {
              return e(r) && (void 0 === r ? "undefined" : t(r)) === n;
            };
          },
          o = u("function"),
          i = u("object"),
          c = u("string"),
          f = u("number"),
          a = u("boolean"),
          l = Array.isArray,
          s = function(n) {
            throw new TypeError(n);
          },
          y = function(n) {
            return function(t) {
              return console.log(n, t), t;
            };
          },
          p = function n(t) {
            return {
              andThen: function(r) {
                return n(r(t));
              },
              value: function() {
                return t;
              }
            };
          },
          b = function(n, t) {
            return (
              !(!i(t) || !l(n)) &&
              0 ===
                n.filter(function(n) {
                  return !t.hasOwnProperty(n);
                }).length
            );
          },
          v = function(t, e) {
            var u = n(e, 2),
              o = u[0],
              i = u[1];
            return Object.assign(t, r({}, o, i));
          },
          h = function(n) {
            return function(t) {
              return e(t) && Object.setPrototypeOf(t, n), t;
            };
          },
          d = function n(t, u) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : function(n) {
                      return n;
                    },
              i = r({}, t, function(n) {
                return p(o(n))
                  .andThen(function(r) {
                    return u(r)
                      ? r
                      : s(
                          "Value '" +
                            n +
                            "' is not of expected type '" +
                            t +
                            "'"
                        );
                  })
                  .andThen(h({ constructor: i[t] }))
                  .value();
              });
            return (
              (i[t].is = function(n) {
                return e(n) && n.prototype && n.prototype.constructor
                  ? n.prototype.constuctor === i[t]
                  : u(n);
              }),
              (i[t].check = function(n) {
                return i[t].is(n)
                  ? n
                  : s("Check: Failed: Expect type '" + t + "'");
              }),
              (i[t].of = function(r) {
                return n(
                  t,
                  function(n) {
                    return i[t].is(n) && n === r;
                  },
                  function() {
                    return r;
                  }
                );
              }),
              (i[t].toString = function() {
                return t + "(x)";
              }),
              i[t]
            );
          },
          m = d("String", c, String),
          O = d("Object", i, Object),
          g = d("Number", f, Number),
          j = d("Boolean", a, Boolean),
          T = d("Boolean", Array.isArray, Array),
          A = {};
        (A[String] = m),
          (A[Object] = O),
          (A[Number] = g),
          (A[Boolean] = j),
          (A[Array] = T);
        var S = function(n) {
            return void 0 !== A[n] ? A[n] : n;
          },
          k = function t(r) {
            return Object.entries(r)
              .map(function(r) {
                var e = n(r, 2),
                  u = e[0],
                  o = e[1];
                return [u, i(o) ? t(o) : S(o)];
              })
              .reduce(v, {});
          },
          N = i,
          E = function(t) {
            return function(r) {
              return (
                i(r) &&
                b(Object.keys(t), r) &&
                0 ===
                  Object.entries(t).filter(function(t) {
                    var e = n(t, 2),
                      u = e[0];
                    return !e[1].is(r[u]);
                  }).length
              );
            };
          },
          w = function(t) {
            return function(r) {
              return Object.entries(t)
                .map(function(t) {
                  var e = n(t, 2),
                    u = e[0];
                  return [u, (0, e[1])(r[u])];
                })
                .reduce(v, {});
            };
          },
          x = function(n, t) {
            return N(t)
              ? p(k(t))
                  .andThen(function(t) {
                    return d(n, E(t), w(t));
                  })
                  .value()
              : s(
                  "Data: Type definition must consist only of functions and objects containing functions"
                );
          },
          B = function(n) {
            return (
              0 ===
              Object.values(n).filter(function(n) {
                return !o(n);
              }).length
            );
          },
          P = function(t, r) {
            return function(e) {
              var u = Object.entries(t)
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
                o = e[u];
              return o ? o(r) : s(u + " is not in the object!");
            };
          },
          z = function(t, r) {
            return B(r)
              ? p(k(r))
                  .andThen(function(r) {
                    return Object.entries(r)
                      .map(function(t) {
                        var r = n(t, 2),
                          e = r[0],
                          u = r[1];
                        return [e, d(e, u.is, u)];
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
                          check: function(n) {
                            return this.is(n)
                              ? n
                              : s("Check: Failed: Expect type '" + t + "'");
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
          C = d("Any", function(n) {
            return e(n);
          }),
          D = d(
            "Nothing",
            function(n) {
              return !e(n);
            },
            function(n) {}
          ),
          F = z("Maybe", { Just: C, Nothing: D }),
          M = d(
            "Ok",
            function(n) {
              return i(n) && !0 === n.ok && C.is(n.value);
            },
            function(n) {
              return { ok: !0, value: C(n) };
            }
          ),
          R = d(
            "Error",
            function(n) {
              return i(n) && !1 === n.ok && m.is(n.error);
            },
            function(n) {
              return { ok: !1, error: m(n) };
            }
          ),
          U = z("Result", { Ok: M, Err: R }),
          Z = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          I = d(
            "Email",
            function(n) {
              return m.is(n) && Z.test(n);
            },
            m
          );
        module.exports = {
          Type: d,
          Data: x,
          Union: z,
          Maybe: F,
          Result: U,
          StringType: m,
          ObjectType: O,
          NumberType: g,
          BooleanType: j,
          ArrayType: T,
          AnyType: C,
          NothingType: D,
          EmailType: I
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
