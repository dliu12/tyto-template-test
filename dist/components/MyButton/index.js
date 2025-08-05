import { jsx as r } from "react/jsx-runtime";
import { c as _ } from "../../clsx-OuTLNxxd.js";
import '../../assets/index3.css';const s = "_button_31ovf_1", t = {
  button: s,
  "button--primary": "_button--primary_31ovf_15",
  "button--small": "_button--small_31ovf_27",
  "button--medium": "_button--medium_31ovf_37",
  "button--large": "_button--large_31ovf_47"
};
function a({ primary: n = !1, size: o = "medium", label: u, ...b }) {
  const m = _(t.button, {
    [t["button--primary"]]: n,
    [t[`button--${o}`]]: o
  });
  return /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      className: m,
      ...b,
      children: u
    }
  );
}
export {
  a as MyButton
};
