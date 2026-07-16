import { i as SITE, r as SERVICES } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SectionHeader } from "./SectionHeader-Bbi4m1_3.mjs";
import { u as Phone, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Route } from "./areas._slug-CUGPZVHU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas._slug-PvdvyTSz.js
var import_jsx_runtime = require_jsx_runtime();
var defaultHero = "/assets/house-strip-out.jpeg";
function Area() {
	const a = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: defaultHero,
					alt: "",
					width: 1920,
					height: 1200,
					className: "absolute inset-0 h-full w-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-navy/85" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-orange-soft",
							children: "Local Coverage"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-3 text-4xl md:text-6xl font-extrabold text-white leading-[1.05] max-w-4xl",
							children: ["Soft Strip Contractors in ", a.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 text-lg text-white/85 max-w-2xl",
							children: [
								"Trusted, local, fully insured strip out and clearance across ",
								a.name,
								" and the wider Merseyside area."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/quote",
								className: "btn-primary btn-primary-hover",
								children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "btn-outline hover:bg-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									SITE.phoneDisplay
								]
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: a.name,
					title: `Local soft strip contractors serving ${a.name}.`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-4 text-muted-foreground leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"We work across ",
						a.name,
						" on houses, flats, independent shops, cafés, salons and light commercial units. From single-room kitchen strips to full property clearances, we bring the same clean, insured and neighbour-friendly approach to every job."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Because we're based locally, response times are fast and pricing is fair — no long-distance travel loaded onto your quote." })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "Popular in this area",
					title: `Services we offer in ${a.name}`
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.slice(0, 9).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
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
export { Area as component };
