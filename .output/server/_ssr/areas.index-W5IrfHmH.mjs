import { t as AREAS } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./PageHero-BeiRelpw.mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas.index-W5IrfHmH.js
var import_jsx_runtime = require_jsx_runtime();
function Areas() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Areas Covered",
		title: "Local across Liverpool & Merseyside.",
		description: "Same crew, same standards, whether you're in the city centre or out toward Southport."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/areas/$slug",
				params: { slug: a.slug },
				className: "card-lift p-6 group hover:-translate-y-1 hover:shadow-lift",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-navy text-lg",
						children: a.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-orange group-hover:translate-x-1 transition-transform" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted-foreground",
					children: ["Soft strip ", a.name]
				})]
			}, a.slug))
		})
	})] });
}
//#endregion
export { Areas as component };
