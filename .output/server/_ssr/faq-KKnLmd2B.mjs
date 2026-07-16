import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BeiRelpw.mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as faqs } from "./faq-CSiwh7F6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faq-KKnLmd2B.js
var import_jsx_runtime = require_jsx_runtime();
function FAQ() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "FAQ",
		title: "Frequently asked questions.",
		description: "Everything you might want to know before booking — and if it's not here, just ask."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x max-w-3xl space-y-3",
			children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "group card-lift px-6 py-5 [&_summary::-webkit-details-marker]:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "flex cursor-pointer items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-bold text-navy text-lg",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "h-8 w-8 rounded-full bg-mist grid place-items-center text-navy group-open:bg-orange group-open:text-white transition-colors",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 rotate-90 group-open:-rotate-90 transition-transform" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground leading-relaxed",
					children: f.a
				})]
			}, i))
		})
	})] });
}
//#endregion
export { FAQ as component };
