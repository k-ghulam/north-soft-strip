import { i as SITE, r as SERVICES } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SectionHeader } from "./SectionHeader-Bbi4m1_3.mjs";
import { b as CircleCheck, d as MessageCircle, u as Phone, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./liverpool._slug-DfS0Jycn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/liverpool._slug-hkQeJmlt.js
var import_jsx_runtime = require_jsx_runtime();
var IMG = {
	hero: "/assets/house-strip-out.jpeg",
	kitchen: "/assets/kitchen-strip-out.jpeg",
	bathroom: "/assets/bathroom-strip-out.jpeg",
	ceiling: "/assets/ceiling-removal.jpeg",
	retail: "/assets/commercial-strip-out.jpeg"
};
function LiverpoolLanding() {
	const p = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: IMG[p.img],
					alt: "",
					width: 1920,
					height: 1200,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0",
					style: { background: "linear-gradient(180deg, rgba(15,43,70,0.75) 0%, rgba(15,43,70,0.92) 100%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-orange-soft",
							children: "Liverpool · Merseyside"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] max-w-4xl",
							children: p.h1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed",
							children: p.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/quote",
									className: "btn-primary btn-primary-hover",
									children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SITE.whatsappHref,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "btn-outline hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: SITE.phoneHref,
									className: "btn-outline hover:bg-white/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										" ",
										SITE.phoneDisplay
									]
								})
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Why North Soft Strip",
					title: `Trusted for ${p.h1.toLowerCase()}.`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-3",
					children: p.benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-navy",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-5 w-5 text-orange shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: b
						})]
					}, b))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-lift p-8 bg-navy text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-2xl font-bold",
							children: "Free quote in Liverpool"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-white/80",
							children: "Local team, local pricing, local response times."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-col gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/quote",
								className: "btn-primary btn-primary-hover justify-center",
								children: ["Request Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "btn-outline hover:bg-white/10 justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									SITE.phoneDisplay
								]
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Related Services",
					title: "Explore more of what we do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "card-lift p-5 flex items-center justify-between gap-3 group hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-navy",
							children: s.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-orange group-hover:translate-x-1 transition-transform" })]
					}, s.slug))
				})]
			})
		})
	] });
}
//#endregion
export { LiverpoolLanding as component };
