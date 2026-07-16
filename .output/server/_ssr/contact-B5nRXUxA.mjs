import { i as SITE } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BeiRelpw.mjs";
import { d as MessageCircle, m as Mail, p as MapPin, u as Phone, y as Clock } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-B5nRXUxA.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Let's talk about your project.",
			description: "Call, WhatsApp, email or drop us a message — usually answered within the hour."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.phoneHref,
							className: "card-lift p-6 flex items-center gap-4 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground tracking-wider",
								children: "Phone"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-navy text-lg",
								children: SITE.phoneDisplay
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: SITE.whatsappHref,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "card-lift p-6 flex items-center gap-4 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-2xl grid place-items-center text-white",
								style: { background: "var(--whatsapp)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground tracking-wider",
								children: "WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-navy text-lg",
								children: "Message us anytime"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${SITE.email}`,
							className: "card-lift p-6 flex items-center gap-4 hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground tracking-wider",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-navy text-lg",
								children: SITE.email
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lift p-6 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase font-bold text-muted-foreground tracking-wider",
								children: "Based in"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-navy text-lg",
								children: "Liverpool, Merseyside"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "card-lift p-6 flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-12 w-12 rounded-2xl bg-orange/10 grid place-items-center text-orange",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-6 w-6" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase font-bold text-muted-foreground tracking-wider",
									children: "Hours"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-navy text-lg",
									children: SITE.hours
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: "Emergency call-outs available"
								})
							] })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-3xl overflow-hidden card-lift",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Liverpool map",
						src: "https://www.google.com/maps?q=Liverpool&output=embed",
						className: "w-full h-[520px]",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-16 bg-navy text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x max-w-3xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-orange-soft justify-center",
						children: "Emergency response"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-4xl font-extrabold text-white",
						children: "Urgent strip out or clearance?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-white/80",
						children: "If it's urgent — post-flood, post-fire, insurance work, or a tight refurb window — call us direct. We reshape schedules to fit."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.phoneHref,
						className: "btn-primary btn-primary-hover mt-6 inline-flex",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
							" ",
							SITE.phoneDisplay
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { Contact as component };
