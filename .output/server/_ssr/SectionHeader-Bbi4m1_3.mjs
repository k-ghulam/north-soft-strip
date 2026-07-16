import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeader-Bbi4m1_3.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeader({ eyebrow, title, description, center = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `max-w-3xl ${center ? "mx-auto text-center" : ""}`,
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-3xl md:text-5xl font-extrabold leading-[1.05]",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base md:text-lg text-muted-foreground leading-relaxed",
				children: description
			})
		]
	});
}
//#endregion
export { SectionHeader as t };
