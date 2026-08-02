import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shalini Tummala",
  description:
    "Shalini Tummala is the Founding Engineer at Bechohub. Specializing in cloud architecture, DevOps, Kubernetes, CI/CD, and building robust backend systems.",
  keywords: [
    "Shalini Tummala",
    "Bechohub",
    "Founding Engineer Bechohub",
    "Shalini Tummala DevOps",
    "Shalini Tummala Bechohub",
    "DevOps Engineer",
    "Cloud Architect",
    "Kubernetes",
    "AWS",
    "Docker",
    "CI/CD",
    "Backend Engineer",
  ],
  authors: [{ name: "Shalini Tummala" }],
  creator: "Shalini Tummala",
  publisher: "Shalini Tummala",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Shalini Tummala",
    description:
      "Shalini Tummala is a DevOps Architect and Founding Engineer at Bechohub. I build the infrastructure that makes products scale.",
    url: "https://shalinitummala.vercel.app",
    siteName: "Shalini Tummala Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "Shalini Tummala Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shalini Tummala",
    description: "DevOps Architect and Founding Engineer at Bechohub.",
    images: ["/icon.png"],
  },
  verification: {
    google: "djI37PKo64NrkSMGuy-EWTUtdvQycy8IvPHMPzlJuKU",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shalini Tummala",
              url: "https://shalinitummala.vercel.app",
              jobTitle: "Founding Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Bechohub",
                url: "https://www.bechohub.com/",
              },
              sameAs: [
                "https://github.com/shalinitummala",
                "https://www.linkedin.com/in/shalinitummala",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased bg-zinc-950 text-zinc-50 selection:bg-sky-500/30 selection:text-sky-400">
        {children}
      </body>
    </html>
  );
}
