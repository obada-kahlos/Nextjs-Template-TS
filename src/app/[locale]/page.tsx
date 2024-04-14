import { useTranslations } from "next-intl";
import React from "react";
import { Screen } from "@/components/screen";
import { TypographyRace } from "@/components/Typography/Typography";

export const metadata = {
  title: "Website",
  description: "Generated by Obada.Kahlous",
};

export default function Home() {
  const t = useTranslations("Index");

  return (
    <Screen>
      <TypographyRace
        content={t("title")}
        fontSize="2rem"
        fontWeight="700"
        marginBottom=""
      />
    </Screen>
  );
}
