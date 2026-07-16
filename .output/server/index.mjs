globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-14T00:51:04.813Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/llms.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"762-TgJuAr2gHBJWisrFim7znRhCYzI\"",
		"mtime": "2026-07-14T00:51:11.849Z",
		"size": 1890,
		"path": "../public/llms.txt"
	},
	"/assets/about-B3wzDX4M.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb3-k9z3+mRvU2JeZ8SN/62LGdGFdsc\"",
		"mtime": "2026-07-16T16:22:34.454Z",
		"size": 4019,
		"path": "../public/assets/about-B3wzDX4M.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"54-ztDv6yD92J+s6d5s9ny1MJU1E7A\"",
		"mtime": "2026-07-14T00:51:15.096Z",
		"size": 84,
		"path": "../public/robots.txt"
	},
	"/assets/areas._slug-BgdRIfSd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-tpgYUdBepi1jt2+ux349Tvfe/YU\"",
		"mtime": "2026-07-16T16:22:34.456Z",
		"size": 195,
		"path": "../public/assets/areas._slug-BgdRIfSd.js"
	},
	"/assets/areas.index-Coox-TJn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"460-y6rE9W5Kd6Mav2HJkgjCSl5DbQg\"",
		"mtime": "2026-07-16T16:22:34.458Z",
		"size": 1120,
		"path": "../public/assets/areas.index-Coox-TJn.js"
	},
	"/assets/areas._slug-CwBS7y4b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11f-yH8IpDULmaK4JTF++ao9f35Hd9I\"",
		"mtime": "2026-07-16T16:22:34.456Z",
		"size": 287,
		"path": "../public/assets/areas._slug-CwBS7y4b.js"
	},
	"/assets/areas._slug-Bia5ZRDt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b25-5oUnaXcEeViG2LjEDvj/JNBvMjM\"",
		"mtime": "2026-07-16T16:22:34.456Z",
		"size": 2853,
		"path": "../public/assets/areas._slug-Bia5ZRDt.js"
	},
	"/assets/arrow-right-BqsCz2N4.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-yufz3lyTT8lLaZmgSEUsYjnowVY\"",
		"mtime": "2026-07-16T16:22:34.458Z",
		"size": 154,
		"path": "../public/assets/arrow-right-BqsCz2N4.js"
	},
	"/assets/bathroom-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1a6b5-E8cK7/wkKwNRqguickEb8z3xF+c\"",
		"mtime": "2026-07-15T19:32:14.051Z",
		"size": 108213,
		"path": "../public/assets/bathroom-strip-out.jpeg"
	},
	"/assets/bathroom-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a6b5-E8cK7/wkKwNRqguickEb8z3xF+c\"",
		"mtime": "2026-07-15T19:32:14.051Z",
		"size": 108213,
		"path": "../public/assets/bathroom-strip-out.jpg"
	},
	"/assets/ceiling-removal.jpeg": {
		"type": "image/jpeg",
		"etag": "\"23a53-6c/XJ6anjbe55tFp1Fm1TY3AlHk\"",
		"mtime": "2026-07-15T19:33:57.156Z",
		"size": 146003,
		"path": "../public/assets/ceiling-removal.jpeg"
	},
	"/assets/ceiling-removal.jpg": {
		"type": "image/jpeg",
		"etag": "\"23a53-6c/XJ6anjbe55tFp1Fm1TY3AlHk\"",
		"mtime": "2026-07-15T19:33:57.156Z",
		"size": 146003,
		"path": "../public/assets/ceiling-removal.jpg"
	},
	"/assets/commercial-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"246c7-j2N+82Y8769DMBe5HgT9BIp5w5Y\"",
		"mtime": "2026-07-15T19:41:15.279Z",
		"size": 149191,
		"path": "../public/assets/commercial-strip-out.jpeg"
	},
	"/assets/circle-check-BLj2pd_S.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a7-PinJFxTvJUOv9QzcYy0L/sXBN7Y\"",
		"mtime": "2026-07-16T16:22:34.459Z",
		"size": 167,
		"path": "../public/assets/circle-check-BLj2pd_S.js"
	},
	"/assets/commercial-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"246c7-j2N+82Y8769DMBe5HgT9BIp5w5Y\"",
		"mtime": "2026-07-15T19:41:15.279Z",
		"size": 149191,
		"path": "../public/assets/commercial-strip-out.jpg"
	},
	"/assets/flat-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"238b3-DPFxcWt9byQM8NRXJsUGTWt82n8\"",
		"mtime": "2026-07-15T19:21:03.032Z",
		"size": 145587,
		"path": "../public/assets/flat-strip-out.jpeg"
	},
	"/assets/faq-Cr3q1tK6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4a5-BxBE/VayJKk43wcrL+eHYRicauo\"",
		"mtime": "2026-07-16T16:22:34.461Z",
		"size": 1189,
		"path": "../public/assets/faq-Cr3q1tK6.js"
	},
	"/assets/contact-zrydqc6b.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1044-t/exmsUSro6SMKKLcTnFZAqlwL4\"",
		"mtime": "2026-07-16T16:22:34.461Z",
		"size": 4164,
		"path": "../public/assets/contact-zrydqc6b.js"
	},
	"/assets/flat-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"238b3-DPFxcWt9byQM8NRXJsUGTWt82n8\"",
		"mtime": "2026-07-15T19:21:03.032Z",
		"size": 145587,
		"path": "../public/assets/flat-strip-out.jpg"
	},
	"/assets/garage-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"250d9-piAmQ/XelOxC8lQszQYWdyJnBUU\"",
		"mtime": "2026-07-15T19:40:23.413Z",
		"size": 151769,
		"path": "../public/assets/garage-strip-out.jpg"
	},
	"/assets/garage-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"250d9-piAmQ/XelOxC8lQszQYWdyJnBUU\"",
		"mtime": "2026-07-15T19:40:23.413Z",
		"size": 151769,
		"path": "../public/assets/garage-strip-out.jpeg"
	},
	"/assets/gallery-DsaCAFH5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dff-jKJmXf4Z7SeHRyVKflnORVR/bYQ\"",
		"mtime": "2026-07-16T16:22:34.462Z",
		"size": 7679,
		"path": "../public/assets/gallery-DsaCAFH5.js"
	},
	"/assets/house-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"28b7a-UvwmKz4VfZmV66bxLeMTbltqKE0\"",
		"mtime": "2026-07-15T19:19:58.645Z",
		"size": 166778,
		"path": "../public/assets/house-strip-out.jpeg"
	},
	"/assets/floor-covering-removal.jpeg": {
		"type": "image/jpeg",
		"etag": "\"da185-d/sEy2DGlISXpskrcZLtvm6VGXU\"",
		"mtime": "2026-07-16T01:50:06.835Z",
		"size": 893317,
		"path": "../public/assets/floor-covering-removal.jpeg"
	},
	"/assets/house-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"28b7a-UvwmKz4VfZmV66bxLeMTbltqKE0\"",
		"mtime": "2026-07-15T19:19:58.645Z",
		"size": 166778,
		"path": "../public/assets/house-strip-out.jpg"
	},
	"/assets/kitchen-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"1dde6-gRxeq0DJwNrtMIzNzO+HWQnI2po\"",
		"mtime": "2026-07-15T19:30:51.202Z",
		"size": 122342,
		"path": "../public/assets/kitchen-strip-out.jpg"
	},
	"/assets/jsx-runtime-DGeXAQPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ab-mgnSm9dUpwL2+z7tKxJ2MsN0fOM\"",
		"mtime": "2026-07-16T16:22:34.462Z",
		"size": 939,
		"path": "../public/assets/jsx-runtime-DGeXAQPT.js"
	},
	"/assets/kitchen-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1dde6-gRxeq0DJwNrtMIzNzO+HWQnI2po\"",
		"mtime": "2026-07-15T19:30:51.202Z",
		"size": 122342,
		"path": "../public/assets/kitchen-strip-out.jpeg"
	},
	"/assets/liverpool._slug-BgdRIfSd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-tpgYUdBepi1jt2+ux349Tvfe/YU\"",
		"mtime": "2026-07-16T16:22:34.464Z",
		"size": 195,
		"path": "../public/assets/liverpool._slug-BgdRIfSd.js"
	},
	"/assets/index-B_hd39Di.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54936-oQlimdeF8hXnKx05PvGV3loGFwQ\"",
		"mtime": "2026-07-16T16:22:34.453Z",
		"size": 346422,
		"path": "../public/assets/index-B_hd39Di.js"
	},
	"/assets/liverpool._slug-DEtKL1YW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"e77-28faYKvDvwn+iLDRYv0jjD9squc\"",
		"mtime": "2026-07-16T16:22:34.464Z",
		"size": 3703,
		"path": "../public/assets/liverpool._slug-DEtKL1YW.js"
	},
	"/assets/liverpool._slug-Dv3rsMNj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"114-+Uf8svclFn6OgSZV1qFDozXmL4E\"",
		"mtime": "2026-07-16T16:22:34.466Z",
		"size": 276,
		"path": "../public/assets/liverpool._slug-Dv3rsMNj.js"
	},
	"/assets/link-CGAuXtgO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"85ec-0zs7CIiTAJwGlyub+fxvExzTlZ4\"",
		"mtime": "2026-07-16T16:22:34.464Z",
		"size": 34284,
		"path": "../public/assets/link-CGAuXtgO.js"
	},
	"/assets/logo.png": {
		"type": "image/png",
		"etag": "\"23b42-MEaMZGgL+W1lclRRlI3l2FW7lsw\"",
		"mtime": "2026-07-16T01:50:15.305Z",
		"size": 146242,
		"path": "../public/assets/logo.png"
	},
	"/assets/office-strip-out.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2351e-kfSx+LWSTdgeOogKA2sfsHRYK74\"",
		"mtime": "2026-07-15T19:39:06.771Z",
		"size": 144670,
		"path": "../public/assets/office-strip-out.jpeg"
	},
	"/assets/PageHero-DIUmozpH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4b2-XFhKspHW/xVSB8IjPvD/13erRhw\"",
		"mtime": "2026-07-16T16:22:34.453Z",
		"size": 1202,
		"path": "../public/assets/PageHero-DIUmozpH.js"
	},
	"/assets/office-strip-out.jpg": {
		"type": "image/jpeg",
		"etag": "\"2351e-kfSx+LWSTdgeOogKA2sfsHRYK74\"",
		"mtime": "2026-07-15T19:39:06.771Z",
		"size": 144670,
		"path": "../public/assets/office-strip-out.jpg"
	},
	"/assets/privacy-DK5qjfXo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50f-H0wUyLhaXddKjPMXRurosBwNFx8\"",
		"mtime": "2026-07-16T16:22:34.466Z",
		"size": 1295,
		"path": "../public/assets/privacy-DK5qjfXo.js"
	},
	"/assets/partition-wall-removal.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1eaac-ChPk8O4DELDuaTmrTBBiSwJdrbI\"",
		"mtime": "2026-07-15T19:35:08.057Z",
		"size": 125612,
		"path": "../public/assets/partition-wall-removal.jpeg"
	},
	"/assets/partition-wall-removal.jpg": {
		"type": "image/jpeg",
		"etag": "\"1eaac-ChPk8O4DELDuaTmrTBBiSwJdrbI\"",
		"mtime": "2026-07-15T19:35:08.057Z",
		"size": 125612,
		"path": "../public/assets/partition-wall-removal.jpg"
	},
	"/assets/projects-DPnIyTkG.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"cac-ZyGDa+Wx320VbhVowkpnTrgcLQU\"",
		"mtime": "2026-07-16T16:22:34.467Z",
		"size": 3244,
		"path": "../public/assets/projects-DPnIyTkG.js"
	},
	"/assets/quote--8Ml9iWl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"186f-UJq7Jd56ZzUDFBZVpU/yIIOAiYc\"",
		"mtime": "2026-07-16T16:22:34.467Z",
		"size": 6255,
		"path": "../public/assets/quote--8Ml9iWl.js"
	},
	"/assets/routes-2x-kh2V8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"471f-7RgLwsQsDSVwTysT0oEBaU/3j2k\"",
		"mtime": "2026-07-16T16:22:34.469Z",
		"size": 18207,
		"path": "../public/assets/routes-2x-kh2V8.js"
	},
	"/assets/property-preparation.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1e132-HYM+IKQcaAollPNtjh+tRX31RZQ\"",
		"mtime": "2026-07-15T19:44:45.435Z",
		"size": 123186,
		"path": "../public/assets/property-preparation.jpeg"
	},
	"/assets/property-preparation.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e132-HYM+IKQcaAollPNtjh+tRX31RZQ\"",
		"mtime": "2026-07-15T19:44:45.435Z",
		"size": 123186,
		"path": "../public/assets/property-preparation.jpg"
	},
	"/assets/SectionHeader-CdCAdFmn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1dc-230XavltsBZgYjZXGEts3k3XpYA\"",
		"mtime": "2026-07-16T16:22:34.454Z",
		"size": 476,
		"path": "../public/assets/SectionHeader-CdCAdFmn.js"
	},
	"/assets/services._slug-BgdRIfSd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c3-tpgYUdBepi1jt2+ux349Tvfe/YU\"",
		"mtime": "2026-07-16T16:22:34.469Z",
		"size": 195,
		"path": "../public/assets/services._slug-BgdRIfSd.js"
	},
	"/assets/services.index-BbsY3H4U.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"991-MenvCMQXpZfBizZPIxmnB938Ock\"",
		"mtime": "2026-07-16T16:22:34.470Z",
		"size": 2449,
		"path": "../public/assets/services.index-BbsY3H4U.js"
	},
	"/assets/services._slug-Ctk52qG6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14ec-6kagcq/szHtmb5Tp46YsUECWcn8\"",
		"mtime": "2026-07-16T16:22:34.470Z",
		"size": 5356,
		"path": "../public/assets/services._slug-Ctk52qG6.js"
	},
	"/assets/services._slug-W3TwMlXI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"128-TNQnCMpXXSvGRGWAARORtl2UDbU\"",
		"mtime": "2026-07-16T16:22:34.470Z",
		"size": 296,
		"path": "../public/assets/services._slug-W3TwMlXI.js"
	},
	"/assets/site-clearance.jpg": {
		"type": "image/jpeg",
		"etag": "\"1ff59-4j8A0hB3jpyMD19q3cy/+w8ScOU\"",
		"mtime": "2026-07-15T19:42:19.441Z",
		"size": 130905,
		"path": "../public/assets/site-clearance.jpg"
	},
	"/assets/users-DQq0LB9N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"202-xV1XdLbAutVusjFI7yxXEEWmQV0\"",
		"mtime": "2026-07-16T16:22:34.472Z",
		"size": 514,
		"path": "../public/assets/users-DQq0LB9N.js"
	},
	"/assets/terms-BvqEyTmo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"50b-FZFU6pp7AR6yw1GxQMC/Xg40xfs\"",
		"mtime": "2026-07-16T16:22:34.472Z",
		"size": 1291,
		"path": "../public/assets/terms-BvqEyTmo.js"
	},
	"/assets/styles-DKxmYBds.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16508-rGrD8luVYIKt+mAS6W4iohuFv4g\"",
		"mtime": "2026-07-16T16:22:34.474Z",
		"size": 91400,
		"path": "../public/assets/styles-DKxmYBds.css"
	},
	"/assets/waste-removal.jpeg": {
		"type": "image/jpeg",
		"etag": "\"3277a-Bk1eR9h2TNjyQbzoo0L/asltb8c\"",
		"mtime": "2026-07-15T19:43:03.154Z",
		"size": 206714,
		"path": "../public/assets/waste-removal.jpeg"
	},
	"/assets/site-clearance.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1ff59-4j8A0hB3jpyMD19q3cy/+w8ScOU\"",
		"mtime": "2026-07-15T19:42:19.441Z",
		"size": 130905,
		"path": "../public/assets/site-clearance.jpeg"
	},
	"/assets/waste-removal.jpg": {
		"type": "image/jpeg",
		"etag": "\"3277a-Bk1eR9h2TNjyQbzoo0L/asltb8c\"",
		"mtime": "2026-07-15T19:43:03.154Z",
		"size": 206714,
		"path": "../public/assets/waste-removal.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_5hGxCt = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_5hGxCt
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
