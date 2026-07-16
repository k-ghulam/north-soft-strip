import { r as SERVICES } from "./site-BPt2AzFt.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-oGC-6yos.js
var $$splitErrorComponentImporter = () => import("./services._slug-Bdg1TFoy.mjs");
var $$splitNotFoundComponentImporter = () => import("./services._slug-DXJ3fy4a.mjs");
var $$splitComponentImporter = () => import("./services._slug-boklb8pR.mjs");
var Route = createFileRoute("/services/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const s = SERVICES.find((x) => x.slug === params.slug);
		if (!s) throw notFound();
		return s;
	},
	head: ({ loaderData }) => {
		const title = loaderData ? `${loaderData.title} Liverpool — North Soft Strip` : "Service — North Soft Strip";
		const desc = loaderData ? `${loaderData.title.toLowerCase()} in Liverpool & Merseyside. ${loaderData.short} Free quote from your local soft strip specialist.` : "";
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
					content: `/services/${loaderData?.slug ?? ""}`
				}
			],
			links: [{
				rel: "canonical",
				href: `/services/${loaderData?.slug ?? ""}`
			}],
			scripts: loaderData ? [{
				type: "application/ld+json",
				children: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Service",
					name: loaderData.title,
					description: loaderData.short,
					areaServed: {
						"@type": "City",
						name: "Liverpool"
					},
					provider: {
						"@type": "LocalBusiness",
						name: "North Soft Strip",
						areaServed: "Liverpool and Merseyside"
					}
				})
			}] : []
		};
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
