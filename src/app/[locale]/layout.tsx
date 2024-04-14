import "./global.css";
import ProviderComponent from "@/store/ProviderComponnt";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useTranslations } from "next-intl";


export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  const t = useTranslations("Index");

  const Transition = {
    login: t("login"),
  };


  return (
    <html lang={locale} dir={locale === "en" ? "ltr" : "rtl"} className="dark">
      <body className="dark:bg-dark_bg_color bg-light_bg_color">
        <ProviderComponent>
          <Navbar Transition={Transition}/>
          {children}
          <Footer />
        </ProviderComponent>
      </body>
    </html>
  );
}
