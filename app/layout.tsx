import "../styles/globals.css";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Booking Dashboard",
  description: "Multi-Agent Booking & Commission Platform Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
