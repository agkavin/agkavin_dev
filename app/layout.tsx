import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kavin AG — Applied AI Engineer",
  description: "Applied AI Engineer specializing in multi-agent systems, agentic RAG, and production-ready GenAI solutions. Building enterprise AI integrations with LangGraph, Azure AI, and modern orchestration frameworks.",
  keywords: [
    "Gen-AI",
    "Cognizant",
    "Multi-Agent Systems",
    "Agentic AI",
    "LangGraph",
    "Azure AI",
    "RAG Pipelines",
    "Applied AI Engineer",
    "ServiceNow Integration",
    "Shopify AI",
    "Azure AI Foundry",
    "Mastra AI",
    "MCP Protocol",
    "Enterprise AI",
    "Chennai Institute of Technology",
    "CIT",
    "AIML",
    "Artificial Intelligence Machine Learning",
    "Computer Science"
  ],
  authors: [{ name: "Kavin AG" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Kavin AG — Applied AI Engineer",
    description: "Building production-ready GenAI systems, multi-agent workflows, and enterprise AI integrations. Specialized in agentic RAG, LangGraph, and Azure AI platforms.",
    type: "website",
    url: "https://agkavin.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kavin AG — Applied AI Engineer",
    description: "Building production-ready GenAI systems and multi-agent workflows",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground selection:bg-cyan-500/30 selection:text-cyan-200`}
      >
        {children}
      </body>
    </html>
  );
}
