import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/liverpool._slug-DfS0Jycn.js
var $$splitErrorComponentImporter = () => import("./liverpool._slug-DTpwiAvX.mjs");
var $$splitNotFoundComponentImporter = () => import("./liverpool._slug-CyPzwq_s.mjs");
var $$splitComponentImporter = () => import("./liverpool._slug-hkQeJmlt.mjs");
var PAGES = [
	{
		slug: "house-strip-out-liverpool",
		title: "House Strip Out Liverpool — Residential Soft Strip Specialists",
		h1: "House Strip Out in Liverpool",
		intro: "Full residential soft strip for terraces, semis and detached houses across Liverpool. Careful room-by-room removal of kitchens, bathrooms, ceilings, partitions and floor coverings — handed back clean.",
		benefits: [
			"Fully insured Liverpool crew",
			"Fixed written quotes",
			"All waste removed with duty-of-care paperwork",
			"Neighbour-friendly, low-noise working"
		],
		img: "hero"
	},
	{
		slug: "garage-strip-out-liverpool",
		title: "Garage Strip Out Liverpool — Clearance & Preparation",
		h1: "Garage Strip Out in Liverpool",
		intro: "Full garage strip out and internal preparation across Liverpool — ready for conversion, workshop or a full refit.",
		benefits: [
			"Attached & detached garages",
			"Old fixtures, shelving & partitions removed",
			"Site left swept and prep-ready",
			"Same-week starts across Merseyside"
		],
		img: "ceiling"
	},
	{
		slug: "kitchen-strip-out-liverpool",
		title: "Kitchen Strip Out Liverpool — Careful Removal & Prep",
		h1: "Kitchen Strip Out in Liverpool",
		intro: "Units, worktops, tiles, splashbacks and appliances carefully removed. We leave Liverpool kitchens clean, capped and ready for the new fit-out.",
		benefits: [
			"Careful isolation of services",
			"Tiles & adhesive removed to substrate",
			"Floor coverings lifted",
			"Waste bagged and cleared same day"
		],
		img: "kitchen"
	},
	{
		slug: "bathroom-strip-out-liverpool",
		title: "Bathroom Strip Out Liverpool — Suite, Tile & Pipework Removal",
		h1: "Bathroom Strip Out in Liverpool",
		intro: "Suites, tiles, boxing and pipework carefully removed with full dust control across Liverpool. Ready for your plumber and tiler.",
		benefits: [
			"Dust sheeting & floor protection",
			"Tiles removed to the wall",
			"Pipework capped safely",
			"All rubble taken away"
		],
		img: "bathroom"
	},
	{
		slug: "commercial-strip-out-liverpool",
		title: "Commercial Strip Out Liverpool — Shops, Salons & Offices",
		h1: "Commercial Soft Strip in Liverpool",
		intro: "Independent shops, cafés, salons, clinics and boutique offices across Liverpool — stripped, cleared and ready for the incoming trade.",
		benefits: [
			"Out-of-hours and weekend working",
			"Suspended ceilings and partitions removed",
			"Shopfittings & signage taken down",
			"Licensed waste removal included"
		],
		img: "retail"
	},
	{
		slug: "property-preparation-liverpool",
		title: "Property Preparation Liverpool — Handover-Ready Clearance",
		h1: "Property Preparation in Liverpool",
		intro: "End-to-end property preparation for Liverpool landlords, builders and refurbishment teams — from soft strip through to a clean, empty, handover-ready shell.",
		benefits: [
			"One team from quote to handover",
			"Detailed condition photos throughout",
			"Scheduled to your refurb programme",
			"Fully insured & compliant"
		],
		img: "hero"
	},
	{
		slug: "site-clearance-liverpool",
		title: "Site Clearance Liverpool — Licensed Waste Removal",
		h1: "Site Clearance in Liverpool",
		intro: "Post-strip site clearance and licensed waste removal across Liverpool. One visit — everything gone, paperwork issued.",
		benefits: [
			"Registered waste carrier",
			"Full duty-of-care paperwork",
			"Same or next-day turnaround",
			"Recycling prioritised where possible"
		],
		img: "ceiling"
	}
];
var Route = createFileRoute("/liverpool/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const p = PAGES.find((x) => x.slug === params.slug);
		if (!p) throw notFound();
		return p;
	},
	head: ({ loaderData }) => {
		const title = loaderData?.title ?? "Liverpool Soft Strip";
		const desc = loaderData ? `${loaderData.h1} by North Soft Strip. ${loaderData.intro.slice(0, 130)}` : "";
		return {
			meta: [
				{ title },
				{
					name: "description",
					content: desc
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: desc
				},
				{
					property: "og:url",
					content: `/liverpool/${loaderData?.slug ?? ""}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/liverpool/${loaderData?.slug ?? ""}`
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
