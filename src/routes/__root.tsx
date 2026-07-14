import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet, createRootRouteWithContext, useRouter,
  HeadContent, Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingActions } from "@/components/FloatingActions";
import { QuotePopup } from "@/components/QuotePopup";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-navy">404</h1>
        <h2 className="mt-4 text-xl font-bold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved.
        </p>
        <a href="/" className="mt-6 btn-primary btn-primary-hover inline-flex">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 pt-24">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary btn-primary-hover">Try again</button>
          <a href="/" className="btn-ghost-dark">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "North Soft Strip — Liverpool Soft Strip Contractors" },
      { name: "description", content: "Trusted Liverpool soft strip contractors for houses, flats, shops and light commercial units. Clean, insured, fast turnaround across Merseyside." },
      { name: "theme-color", content: "#0F2B46" },
      { property: "og:site_name", content: "North Soft Strip" },
      { property: "og:title", content: "North Soft Strip — Liverpool Soft Strip Contractors" },
      { property: "og:description", content: "Trusted Liverpool soft strip contractors for houses, flats, shops and light commercial units. Clean, insured, fast turnaround across Merseyside." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "North Soft Strip — Liverpool Soft Strip Contractors" },
      { name: "twitter:description", content: "Trusted Liverpool soft strip contractors for houses, flats, shops and light commercial units. Clean, insured, fast turnaround across Merseyside." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a21e0f14-0e2e-4f56-a7b1-0c7b53d6156f/id-preview-8204f03a--7e3757ee-6ac5-47c1-889c-4a270ea6919b.lovable.app-1783630725387.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a21e0f14-0e2e-4f56-a7b1-0c7b53d6156f/id-preview-8204f03a--7e3757ee-6ac5-47c1-889c-4a270ea6919b.lovable.app-1783630725387.png" },
      { name: "google-site-verification", content: "xDga_rCMoS00bSrZnFbxNIO6ZQLUkwjNbrpozKz9V-o" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800;900&display=swap" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "North Soft Strip",
        image: "https://northsoftstrip.co.uk/logo.png",
        telephone: "+44 7340 000 0583",
        email: "info@northsoftstrip.co.uk",
        priceRange: "££",
        address: { "@type": "PostalAddress", addressLocality: "Liverpool", addressRegion: "Merseyside", addressCountry: "GB" },
        areaServed: ["Liverpool", "Wirral", "Bootle", "Knowsley", "Sefton", "Southport", "St Helens", "Merseyside"],
        description: "Soft strip contractors for residential and light commercial projects across Liverpool and Merseyside.",
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main className="pb-20 md:pb-0">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
      <QuotePopup />
    </QueryClientProvider>
  );
}
