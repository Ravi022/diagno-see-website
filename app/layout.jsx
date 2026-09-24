import "@/styles/style.css";
import "@/styles/experience.css";
import "@/styles/editorial.css";
import "@/styles/clarity.css";
import "@/styles/ppt-design.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SiteDialogs from "@/components/SiteDialogs";
import Motion from "@/components/Motion";
export const metadata = {
  title: { default: "DiagnoSee", template: "%s | DiagnoSee" },
  description:
    "Connecting Imaging to Actionable Care. Strengthening Healthcare.",
  icons: { icon: "/favicon.svg" },
};
export const viewport = { themeColor: "#edf6fa" };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="top">
        <Header />
        {children}
        <Footer />
        <SiteDialogs />
        <Motion />
      </body>
    </html>
  );
}
