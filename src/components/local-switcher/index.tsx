import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";
import { usePathname } from "next/navigation";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();


  // let pathname = "/en/login";
  // const languages = ["/en", "/ar"];

  // languages.forEach((lang) => {
  //   if (pathname.startsWith(lang)) {
  //     pathname = pathname.replace(lang, "");
  //   }
  // });

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocal = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocal}`);
    });
  };

  return (
    <select
      defaultValue={localActive}
      disabled={isPending}
      onChange={onSelectChange}
      className={
        "border border-[#D6DDEB] w-full h-[43px] pl-4 rounded-[6px]"
      }
    >
      <option value={"en"}> English </option>
      <option value={"ar"}> Arabic </option>
    </select>
  );
}
