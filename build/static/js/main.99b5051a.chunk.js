(this["webpackJsonptip-calculator"] =
  this["webpackJsonptip-calculator"] || []).push([
  [0],
  {
    10: function (e, t, c) {},
    17: function (e, t, c) {},
    19: function (e, t, c) {
      "use strict";
      c.r(t);
      var n = c(1),
        s = c(4),
        l = c.n(s),
        i = (c(9), c(10), c(2)),
        a = (c(11), c(17), c(0)),
        j = function () {
          var e = Object(n.useState)(0),
            t = Object(i.a)(e, 2),
            c = t[0],
            s = t[1],
            l = Object(n.useState)(0),
            j = Object(i.a)(l, 2),
            o = j[0],
            r = j[1],
            b = Object(n.useState)(""),
            u = Object(i.a)(b, 2),
            d = u[0],
            O = u[1],
            h = Object(n.useState)(""),
            p = Object(i.a)(h, 2),
            x = p[0],
            m = p[1],
            N = function () {
              O(f * (x / 100));
            },
            v = function (e) {
              O(f * (e / 100));
            },
            f = c / o;
          return Object(a.jsxs)("div", {
            className: "body",
            children: [
              Object(a.jsx)("h2", { children: "Spliter bill" }),
              Object(a.jsxs)("div", {
                className: "box",
                children: [
                  Object(a.jsxs)("div", {
                    className: "Container",
                    children: [
                      Object(a.jsxs)("div", {
                        className: "bill-container",
                        children: [
                          Object(a.jsx)("label", {
                            htmlFor: "bill",
                            children: "Bill",
                          }),
                          Object(a.jsx)("input", {
                            type: "number",
                            min: "1",
                            id: "bill",
                            className: "inputBill",
                            value: c,
                            onChange: function (e) {
                              s(e.target.value);
                            },
                          }),
                        ],
                      }),
                      Object(a.jsxs)("div", {
                        children: [
                          Object(a.jsx)("p", { children: "Select Tip %" }),
                          Object(a.jsxs)("div", {
                            className: "buttonContainer",
                            children: [
                              Object(a.jsx)("button", {
                                className: "button",
                                onClick: function () {
                                  return v(5);
                                },
                                children: "5%",
                              }),
                              Object(a.jsx)("button", {
                                className: "button",
                                onClick: function () {
                                  return v(10);
                                },
                                children: "10%",
                              }),
                              Object(a.jsx)("button", {
                                className: "button",
                                onClick: function () {
                                  return v(15);
                                },
                                children: "15%",
                              }),
                              Object(a.jsx)("button", {
                                className: "button",
                                onClick: function () {
                                  return v(25);
                                },
                                children: "25%",
                              }),
                              Object(a.jsx)("button", {
                                className: "button",
                                onClick: function () {
                                  return v(50);
                                },
                                children: "50%",
                              }),
                              Object(a.jsx)("input", {
                                className: "custom",
                                value: x,
                                onChange: function (e) {
                                  m(e.target.value), console.log(x);
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(a.jsxs)("div", {
                        children: [
                          Object(a.jsx)("label", {
                            htmlFor: "people",
                            children: "Number of People",
                          }),
                          Object(a.jsx)("input", {
                            type: "number",
                            min: "1",
                            value: o,
                            id: "people",
                            onChange: function (e) {
                              r(e.target.value), N();
                            },
                          }),
                          Object(a.jsx)("button", {
                            className: "button",
                            onClick: N,
                            children: "check",
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(a.jsxs)("div", {
                    className: "outputContainer",
                    children: [
                      Object(a.jsxs)("div", {
                        className: "output",
                        children: [
                          Object(a.jsxs)("div", {
                            children: [
                              Object(a.jsx)("p", {
                                className: "content",
                                children: "Tip Amount",
                              }),
                              Object(a.jsx)("p", {
                                className: "light",
                                children: "/person",
                              }),
                            ],
                          }),
                          Object(a.jsx)("div", {
                            className: "display",
                            children: d > 0 ? d : "rs 00.00",
                          }),
                        ],
                      }),
                      Object(a.jsxs)("div", {
                        className: "output",
                        children: [
                          Object(a.jsxs)("div", {
                            children: [
                              Object(a.jsx)("p", {
                                className: "content",
                                children: "person Total",
                              }),
                              Object(a.jsx)("p", {
                                className: "light",
                                children: "/person",
                              }),
                            ],
                          }),
                          Object(a.jsx)("div", {
                            className: "display",
                            children: f > 0 ? f : "rs 00.00",
                          }),
                        ],
                      }),
                      Object(a.jsx)("button", {
                        className: "reset",
                        onClick: function () {
                          O(""), s(""), r(""), m("");
                        },
                        children: "reset",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var o = function () {
        return Object(a.jsx)("div", {
          className: "App",
          children: Object(a.jsx)(j, {}),
        });
      };
      l.a.render(Object(a.jsx)(o, {}), document.getElementById("root"));
    },
    9: function (e, t, c) {},
  },
  [[19, 1, 2]],
]);
//# sourceMappingURL=main.99b5051a.chunk.js.map
