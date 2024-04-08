import { ReactNode } from "react";

export const Screen = ({ children }: { children: ReactNode }) => {
  return (
    // dark:bg-dark_bg_color
    // dark:text-[#fff]
    <div
      className={
        "w-full sm:min-h-[calc(100vh-80px)] h-auto dark:bg-dark_bg_color  dark:text-[#fff] bg-light_bg_color  text-[#000] flex items-center justify-center flex-col"
      }
    >
      {children}
    </div>
  );
};
