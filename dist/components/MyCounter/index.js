import { jsxs as a, jsx as o } from "react/jsx-runtime";
import { useState as f } from "react";
import { MyButton as r } from "../MyButton/index.js";
import '../../assets/index2.css';const y = "_container_rjlrw_1", C = "_text_rjlrw_11", m = {
  container: y,
  text: C
};
function h({
  initialValue: c = 0,
  step: s = 1,
  min: i = -1 / 0,
  max: l = 1 / 0
}) {
  const [t, e] = f(c), u = () => {
    e((n) => Math.min(n + s, l));
  }, d = () => {
    e((n) => Math.max(n - s, i));
  }, x = () => {
    e(c);
  };
  return /* @__PURE__ */ a("section", { className: m.container, children: [
    /* @__PURE__ */ a("p", { className: m.text, children: [
      "Count: ",
      t
    ] }),
    /* @__PURE__ */ o(
      r,
      {
        label: "Increment",
        onClick: u,
        disabled: t >= l
      }
    ),
    /* @__PURE__ */ o(
      r,
      {
        label: "Decrement",
        onClick: d,
        disabled: t <= i
      }
    ),
    /* @__PURE__ */ o(
      r,
      {
        label: "Reset",
        onClick: x,
        primary: !0
      }
    )
  ] });
}
export {
  h as MyCounter
};
