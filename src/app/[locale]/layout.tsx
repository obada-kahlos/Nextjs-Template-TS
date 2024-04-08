import "./global.css";
import ProviderComponent from "@/store/ProviderComponnt";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"} className="dark">
      <body className="dark:bg-dark_bg_color bg-light_bg_color">
        <ProviderComponent>
          <Navbar />
          {children}
          <Footer />
        </ProviderComponent>
      </body>
    </html>
  );
}
