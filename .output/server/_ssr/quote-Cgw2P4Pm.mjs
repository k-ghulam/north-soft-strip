import { n as __toESM } from "../_runtime.mjs";
import { i as SITE, r as SERVICES, t as AREAS } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BeiRelpw.mjs";
import { b as CircleCheck, d as MessageCircle, i as Upload, u as Phone } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-Cgw2P4Pm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Quote() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSent(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Free Quote",
		title: "Request a free, no-obligation quote.",
		description: "A couple of details and — if you have them — a few photos. That's all we need to get you a fixed price."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x grid gap-10 lg:grid-cols-[1.5fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "card-lift p-8",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center py-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto h-14 w-14 rounded-full bg-orange/10 grid place-items-center text-orange",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-5 text-2xl font-bold",
							children: "Thanks — request received."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: "We'll get back to you shortly, usually within the hour during working hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "btn-primary btn-primary-hover",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " Call us"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.whatsappHref,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-ghost-dark",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
							})]
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "grid gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your name",
								name: "name",
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone number",
								name: "phone",
								type: "tel",
								required: true
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email",
								name: "email",
								type: "email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Property postcode",
								name: "postcode"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid sm:grid-cols-2 gap-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								label: "Service needed",
								name: "service",
								options: SERVICES.map((s) => s.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
								label: "Area",
								name: "area",
								options: AREAS.map((a) => a.name)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Property type",
							name: "propertyType",
							placeholder: "e.g. 3-bed terraced house, independent shop unit…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "text-sm font-semibold text-navy",
							children: "Tell us about the job"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							name: "message",
							rows: 5,
							required: true,
							placeholder: "Rooms involved, what's staying, timeline…",
							className: "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm font-semibold text-navy",
							children: "Photos (optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 rounded-2xl border-2 border-dashed border-border p-6 text-center hover:border-orange transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-6 w-6 mx-auto text-muted-foreground" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: [
										"Drag & drop or ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
											htmlFor: "file",
											className: "text-orange font-semibold cursor-pointer",
											children: "browse"
										}),
										" — up to 6 photos."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "file",
									name: "photos",
									type: "file",
									multiple: true,
									accept: "image/*",
									className: "sr-only"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-primary btn-primary-hover justify-center py-4 text-base",
							children: "Send Quote Request"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground text-center",
							children: [
								"By submitting you agree to our ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "underline",
									href: "/privacy",
									children: "Privacy Policy"
								}),
								"."
							]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "card-lift p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-bold text-lg",
							children: "Prefer to talk?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Give us a call or send a quick WhatsApp — most quotes done same day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex flex-col gap-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "btn-primary btn-primary-hover justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									SITE.phoneDisplay
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.whatsappHref,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-ghost-dark justify-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Us"]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl bg-navy text-white p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-bold text-lg text-white",
						children: "What happens next"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4 space-y-3 text-sm text-white/85",
						children: [
							"We reply, usually within the hour.",
							"Free on-site survey (or from your photos).",
							"Fixed, written quote — no obligation.",
							"Book a start date that suits you."
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-6 w-6 shrink-0 rounded-full bg-orange text-white text-xs font-bold grid place-items-center",
								children: i + 1
							}), s]
						}, i))
					})]
				})]
			})]
		})
	})] });
}
function Field({ label, name, type = "text", required, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		htmlFor: name,
		className: "text-sm font-semibold text-navy",
		children: [label, required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-orange",
			children: " *"
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		id: name,
		name,
		type,
		required,
		placeholder,
		className: "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
	})] });
}
function Select({ label, name, options }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		htmlFor: name,
		className: "text-sm font-semibold text-navy",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		id: name,
		name,
		className: "mt-2 w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: "Choose…"
		}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: o,
			children: o
		}, o))]
	})] });
}
//#endregion
export { Quote as component };
