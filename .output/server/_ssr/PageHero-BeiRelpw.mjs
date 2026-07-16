import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-BeiRelpw.js
var import_jsx_runtime = require_jsx_runtime();
var heroImg = "/assets/house-strip-out.jpeg";
function PageHero({ eyebrow, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: heroImg,
				alt: "",
				width: 1920,
				height: 1200,
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(180deg, rgba(15,43,70,0.85) 0%, rgba(15,43,70,0.75) 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative",
				children: [
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-orange-soft",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] max-w-4xl",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed",
						children: description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						"aria-label": "Breadcrumb",
						className: "mt-6 text-sm text-white/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "hover:text-orange-soft",
								children: "Home"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mx-2",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: title.split("—")[0].trim()
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { PageHero as t };
