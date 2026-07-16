import { i as SITE } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageHero } from "./PageHero-BeiRelpw.mjs";
import { t as SectionHeader } from "./SectionHeader-Bbi4m1_3.mjs";
import { C as Award, b as CircleCheck, c as Shield, g as Heart, r as Users, w as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-C2YoW0O0.js
var import_jsx_runtime = require_jsx_runtime();
var stageDuring = "/assets/partition-wall-removal.jpeg";
function About() {
	const values = [
		{
			icon: Shield,
			title: "Safety first",
			body: "Full PPE, safe methods, dust control and site protection on every job — every time."
		},
		{
			icon: Heart,
			title: "Respectful",
			body: "We work in people's homes and premises. Tidy, quiet where we can be, and courteous with neighbours."
		},
		{
			icon: Award,
			title: "Properly finished",
			body: "A strip out isn't finished until the floor is swept and the last skip bag is gone."
		},
		{
			icon: Users,
			title: "Local team",
			body: "A tight-knit Liverpool crew. You'll see the same faces from quote to handover."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "Liverpool's soft strip specialists.",
			description: "We're not a heavy structural demolition contractor. We do one thing extremely well — careful, clean strip out for the properties most in demand across Merseyside."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: stageDuring,
					alt: "North Soft Strip team at work",
					width: 1200,
					height: 900,
					loading: "lazy",
					className: "rounded-3xl shadow-lift"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Our Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-extrabold",
						children: "Founded by tradespeople, run for tradespeople and homeowners."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground leading-relaxed",
						children: "North Soft Strip was set up to fill a gap in the Liverpool market — a reliable, insured, fairly priced team for the strip out jobs bigger demolition firms won't turn out for."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: "Today we work with homeowners, landlords, builders, letting agents and business owners across the whole of Merseyside — from single-room kitchen strips to full flat and shop clearances."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 grid sm:grid-cols-2 gap-2 text-sm",
						children: [
							"Fully insured",
							"Licensed waste carrier",
							"Free written quotes",
							"Fixed pricing",
							"PPE & site protection",
							"Neighbour-friendly"
						].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-orange" }),
								" ",
								v
							]
						}, v))
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						center: true,
						eyebrow: "How We Work",
						title: "Four values on every job."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
						children: values.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lift p-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-6 w-6" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-5 text-lg font-bold",
									children: v.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: v.body
								})
							]
						}, v.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							className: "btn-primary btn-primary-hover",
							children: ["Work with us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: [
								"Or call ",
								SITE.phoneDisplay,
								" — we'll pick up."
							]
						})]
					})
				]
			})
		})
	] });
}
//#endregion
export { About as component };
