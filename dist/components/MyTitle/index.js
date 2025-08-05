import { jsx as s } from "react/jsx-runtime";
import { c as o } from "../../clsx-OuTLNxxd.js";
import '../../assets/index.css';const c = "_title_izbg1_1", t = {
  title: c,
  "title--primary": "_title--primary_izbg1_13"
};
function n({ primary: i = !1, title: e, ...l }) {
  const r = o(t.title, {
    [t["title--primary"]]: i
  });
  return /* @__PURE__ */ s(
    "h1",
    {
      className: r,
      ...l,
      children: e
    }
  );
}
export {
  n as MyTitle
};
