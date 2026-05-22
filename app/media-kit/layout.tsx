import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Kit | Lorizia LLC",
  description:
    "Brand assets, company overview, and partnership information for Lorizia LLC — a Houston-based performance marketing company.",
};

export default function MediaKitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
