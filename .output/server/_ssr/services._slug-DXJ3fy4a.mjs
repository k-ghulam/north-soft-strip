import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-DXJ3fy4a.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "pt-40 text-center",
	children: [
		"Service not found. ",
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/services",
			className: "text-orange",
			children: "See all services"
		}),
		"."
	]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
