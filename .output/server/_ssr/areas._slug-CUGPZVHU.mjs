import { t as AREAS } from "./site-BPt2AzFt.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/areas._slug-CUGPZVHU.js
var $$splitErrorComponentImporter = () => import("./areas._slug-BOw9FNN_.mjs");
var $$splitNotFoundComponentImporter = () => import("./areas._slug-DoiMT4uH.mjs");
var $$splitComponentImporter = () => import("./areas._slug-PvdvyTSz.mjs");
var Route = createFileRoute("/areas/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const a = AREAS.find((x) => x.slug === params.slug);
		if (!a) throw notFound();
		return a;
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `Soft Strip ${loaderData.name} — Local Contractors | North Soft Strip` : "Area";
		const desc = loaderData ? `Local soft strip contractors in ${loaderData.name}. Residential and light commercial strip out, site clearance and property prep. Free quotes.` : "";
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
					content: `/areas/${loaderData?.slug ?? ""}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/areas/${loaderData?.slug ?? ""}`
			}]
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
