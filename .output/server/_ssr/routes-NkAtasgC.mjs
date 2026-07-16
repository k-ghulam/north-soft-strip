import { n as __toESM } from "../_runtime.mjs";
import { i as SITE, n as PROPERTY_TYPES, r as SERVICES, t as AREAS } from "./site-BPt2AzFt.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SectionHeader } from "./SectionHeader-Bbi4m1_3.mjs";
import { _ as HardHat, a as Store, b as CircleCheck, c as Shield, d as MessageCircle, h as House, l as PoundSterling, o as Star, r as Users, s as Sparkles, u as Phone, w as ArrowRight, y as Clock } from "../_libs/lucide-react.mjs";
import { t as faqs } from "./routes-7qMR4Lx2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-NkAtasgC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		img: "/assets/house-strip-out.jpeg",
		eyebrow: "Residential Specialists",
		title: "Residential House Soft Strip",
		copy: "Precision soft strip for terraces, semis and detached homes across Liverpool & Merseyside."
	},
	{
		img: "/assets/kitchen-strip-out.jpeg",
		eyebrow: "Kitchen Preparation",
		title: "Kitchen Strip Out & Preparation",
		copy: "Units, worktops, tiles and appliances carefully removed — ready for your new fit-out."
	},
	{
		img: "/assets/bathroom-strip-out.jpeg",
		eyebrow: "Bathroom Clear-out",
		title: "Bathroom Strip Out & Clear-out",
		copy: "Suites, tiles and pipework removed cleanly, with all waste taken away."
	},
	{
		img: "/assets/ceiling-removal.jpeg",
		eyebrow: "Structural Prep",
		title: "Garage Strip Out & Structural Prep",
		copy: "Full garage clearance and internal preparation, ready for conversion."
	},
	{
		img: "/assets/commercial-strip-out.jpeg",
		eyebrow: "Commercial Services",
		title: "Commercial Soft Strip Services",
		copy: "Shops, cafés, salons and light commercial units stripped ready for refit."
	}
];
function HeroSlider() {
	const [i, setI] = (0, import_react.useState)(0);
	const timerRef = (0, import_react.useRef)(null);
	const startTimer = () => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setI((p) => (p + 1) % SLIDES.length);
		}, 6e3);
	};
	(0, import_react.useEffect)(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, []);
	const handleSlideSelect = (idx) => {
		setI(idx);
		startTimer();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] flex items-center overflow-hidden",
		children: [
			SLIDES.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: s.img,
				alt: s.title,
				width: 1920,
				height: 1200,
				className: `absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-in-out ${idx === i ? "opacity-100 scale-[1.04]" : "opacity-0 scale-100"}`,
				style: { transitionProperty: "opacity, transform" },
				fetchPriority: idx === 0 ? "high" : "low"
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#0f2b46]/55 to-[#0f2b46]/90" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative pt-32 pb-24 md:pt-40 md:pb-32",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full bg-orange/15 border border-orange/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-soft backdrop-blur",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-orange animate-pulse" }),
								SLIDES[i].eyebrow,
								" · Liverpool"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.02] tracking-tight",
							children: SLIDES[i].title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed",
							children: SLIDES[i].copy
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp Us"]
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid grid-cols-3 gap-4 max-w-xl",
							children: [
								{
									k: "12+",
									l: "Years experience"
								},
								{
									k: "500+",
									l: "Projects completed"
								},
								{
									k: "100%",
									l: "Fully insured"
								}
							].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl bg-white/10 border border-white/15 backdrop-blur px-4 py-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-2xl md:text-3xl font-extrabold text-white",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-white/85 mt-0.5",
									children: s.l
								})]
							}, s.l))
						})
					]
				}, i), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10",
					children: SLIDES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => handleSlideSelect(idx),
						"aria-label": `Go to slide ${idx + 1}`,
						className: `h-1.5 rounded-full transition-all duration-300 ${idx === i ? "w-10 bg-orange" : "w-5 bg-white/60 hover:bg-white/70"}`
					}, idx))
				})]
			})
		]
	});
}
var imgMap = {
	"house-strip-out": "/assets/house-strip-out.jpeg",
	"flat-strip-out": "/assets/flat-strip-out.jpeg",
	"kitchen-strip-out": "/assets/kitchen-strip-out.jpeg",
	"bathroom-strip-out": "/assets/bathroom-strip-out.jpeg",
	"ceiling-removal": "/assets/ceiling-removal.jpeg",
	"partition-wall-removal": "/assets/partition-wall-removal.jpeg",
	"floor-covering-removal": "/assets/floor-covering-removal.jpeg",
	"garage-strip-out": "/assets/garage-strip-out.jpeg",
	"office-strip-out": "/assets/office-strip-out.jpeg",
	"retail-strip-out": "/assets/commercial-strip-out.jpeg",
	"commercial-strip-out": "/assets/commercial-strip-out.jpeg",
	"internal-strip-out": "/assets/house-strip-out.jpeg",
	"site-clearance": "/assets/site-clearance.jpeg",
	"waste-removal": "/assets/waste-removal.jpeg",
	"property-preparation": "/assets/property-preparation.jpeg"
};
var trustBadges = [
	{
		icon: Shield,
		label: "Fully Insured"
	},
	{
		icon: HardHat,
		label: "Professional Team"
	},
	{
		icon: Clock,
		label: "Fast Response"
	},
	{
		icon: PoundSterling,
		label: "Competitive Pricing"
	},
	{
		icon: Sparkles,
		label: "Clean-Site Guarantee"
	},
	{
		icon: House,
		label: "Residential & Commercial"
	},
	{
		icon: Users,
		label: "Liverpool Based"
	},
	{
		icon: CircleCheck,
		label: "Free Quotations"
	}
];
var testimonials = [
	{
		name: "Sarah H.",
		location: "Wavertree, Liverpool",
		text: "Fantastic team. Turned up when they said, stripped the whole terrace in three days, cleaner than when they arrived. Handed over ready for our builder.",
		rating: 5
	},
	{
		name: "Marcus D.",
		location: "Bootle",
		text: "Used North Soft Strip for a salon fit-out prep. Careful with the neighbours, tidy, and priced fairly. Would 100% use again.",
		rating: 5
	},
	{
		name: "Priya S.",
		location: "Wirral",
		text: "Two-bed flat completely stripped ready for refurb. Great communication, honest quote, no surprises. Really appreciated the daily updates.",
		rating: 5
	},
	{
		name: "Tom & Rachel",
		location: "Aigburth",
		text: "Kitchen and bathroom strip in a Victorian semi. Meticulous work — protected the stairs, bagged everything, took all waste away with paperwork.",
		rating: 5
	}
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy border-y border-white/10 py-6 overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex animate-marquee gap-14 whitespace-nowrap",
				children: [...trustBadges, ...trustBadges].map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5 text-white/80 text-sm font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "h-4 w-4 text-orange" }),
						" ",
						b.label
					]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "services",
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "What We Do",
						title: "Soft strip services, done properly.",
						description: "A focused range of services for residential and light commercial projects. No heavy structural demolition — just careful, clean strip out and clearance."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services",
						className: "btn-ghost-dark",
						children: ["All services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
					children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "group card-lift overflow-hidden hover:-translate-y-1 hover:shadow-lift",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3] overflow-hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: imgMap[s.img],
									alt: s.title,
									loading: "lazy",
									width: 1200,
									height: 900,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-navy/70 via-navy/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute bottom-4 left-4 right-4 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-white text-lg font-bold",
										children: s.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-9 w-9 rounded-full grid place-items-center bg-orange text-white group-hover:translate-x-1 transition-transform",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "p-5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: s.short
							})
						})]
					}, s.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28 bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					center: true,
					eyebrow: "Our Process",
					title: "Before · During · Completed",
					description: "Every project follows the same clear stages so you always know exactly what happens next."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-3",
					children: [
						{
							img: "/assets/flat-strip-out.jpeg",
							tag: "01 · Before",
							title: "We survey the property",
							body: "Free on-site walk-through, transparent scope and a fixed quote. No hidden extras."
						},
						{
							img: "/assets/partition-wall-removal.jpeg",
							tag: "02 · During",
							title: "We strip it out",
							body: "Fixtures, fittings, kitchens, bathrooms, ceilings, partitions and floor coverings — carefully removed, room by room."
						},
						{
							img: "/assets/property-preparation.jpeg",
							tag: "03 · Completed",
							title: "We hand it back clean",
							body: "Waste removed, floors swept, ready for your builder. A blank canvas — not a building site."
						}
					].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lift overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[4/3]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: step.img,
								alt: step.title,
								loading: "lazy",
								width: 1200,
								height: 900,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy",
								children: step.tag
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold",
								children: step.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: step.body
							})]
						})]
					}, step.tag))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
						eyebrow: "Properties We Work On",
						title: "Residential and light commercial — done properly.",
						description: "From two-up two-downs to high-street shops. We're specialists in the properties most contractors either won't touch or don't do properly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-navy text-white px-4 py-2 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "h-3.5 w-3.5" }), " Residential"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 rounded-full bg-orange text-white px-4 py-2 text-xs font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "h-3.5 w-3.5" }), " Light commercial"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted-foreground",
						children: [
							"We ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "do not"
							}),
							" undertake heavy or industrial demolition, factories, warehouses, tower blocks or bridge works."
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5",
					children: PROPERTY_TYPES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-mist border border-border px-3.5 py-3 text-sm font-medium text-navy flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-orange shrink-0" }),
							" ",
							p
						]
					}, p))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "py-20 md:py-28 bg-navy text-white relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 opacity-[0.05]",
				style: {
					backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)",
					backgroundSize: "24px 24px"
				}
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow text-orange-soft",
							children: "Areas We Cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl md:text-5xl font-extrabold text-white",
							children: "Working across Liverpool & Merseyside."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-white/75 text-lg",
							children: "Local team, local pricing, local response times."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 md:grid-cols-4 gap-3",
					children: AREAS.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/areas/$slug",
						params: { slug: a.slug },
						className: "group rounded-2xl border border-white/15 bg-white/5 backdrop-blur px-5 py-6 hover:bg-orange hover:border-orange transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-white",
								children: a.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-white/85 group-hover:text-white/90",
							children: ["Soft strip ", a.name]
						})]
					}, a.slug))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28 bg-mist",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					center: true,
					eyebrow: "Reviews",
					title: "Homeowners, landlords & local businesses trust us."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-5 md:grid-cols-2",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "card-lift p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-orange",
								children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-current" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "mt-4 text-lg font-medium text-navy leading-relaxed",
								children: [
									"\"",
									t.text,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-10 w-10 rounded-full bg-navy text-white grid place-items-center font-bold text-sm",
									children: t.name.split(" ").map((n) => n[0]).join("")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-bold text-navy text-sm",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: t.location
								})] })]
							})
						]
					}, t.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
					eyebrow: "FAQ",
					title: "Everything you need to know.",
					description: "Can't see your question? Give us a call or drop us a WhatsApp — happy to help."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: SITE.phoneHref,
						className: "btn-primary btn-primary-hover self-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
							" ",
							SITE.phoneDisplay
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/faq",
						className: "btn-ghost-dark self-start",
						children: ["All FAQs ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 md:py-28 bg-gradient-to-br from-navy to-navy-deep text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x text-center max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-orange-soft justify-center",
						children: "Ready when you are"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl md:text-5xl font-extrabold text-white",
						children: "Get a free, no-obligation quote today."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-white/80 text-lg",
						children: "Same-day response. Fixed pricing. Fully insured team. Local to Liverpool."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap justify-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/quote",
								className: "btn-primary btn-primary-hover",
								children: ["Get Free Quote ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.phoneHref,
								className: "btn-outline hover:bg-white/10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
									" ",
									SITE.phoneDisplay
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SITE.whatsappHref,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "btn-outline hover:bg-white/10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " WhatsApp"]
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { Index as component };
