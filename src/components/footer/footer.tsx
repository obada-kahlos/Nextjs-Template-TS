import React from "react";
import { TypographyRace } from "../Typography/Typography";

const Footer = () => {
  return (
    <footer>
      <div className="w-full dark:bg-dark_secondary_bg_color bg-light_secondary_bg_color">
        <div className="container mx-auto py-[70px] sm:px-0 px-4">
          <div className="grid grid-cols-12 gap-x-8 gap-y-8">
            <div className="lg:col-span-5 md:col-span-6 col-span-12">
              <TypographyRace
                fontSize="3rem"
                content={"ProjectX"}
                marginBottom={"2rem"}
                fontWeight={"600"}
              />
              <div className="w-8/12">
                <TypographyRace
                  fontSize="0.875rem"
                  content={
                    " Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore"
                  }
                  marginBottom={"2rem"}
                  fontWeight={"600"}
                />
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <TypographyRace
                fontSize="1.125rem"
                content={"Accessibility"}
                marginBottom={"1.125rem"}
                fontWeight={"600"}
              />

              <ul>
                <a>
                  <li className="text-[0.875rem] my-2 font-[500] dark:text-dark_heading_color text-light_heading_color">
                    Lorem ipsum
                  </li>
                </a>
                <a>
                  <li className="text-[0.875rem] my-2 font-[500] dark:text-dark_heading_color text-light_heading_color">
                    Lorem ipsum
                  </li>
                </a>
              </ul>
            </div>
            <div className="lg:col-span-2 md:col-span-6 col-span-12">
              <TypographyRace
                fontSize="1.125rem"
                content={"Help Center"}
                marginBottom={"1.125rem"}
                fontWeight={"600"}
              />
              <ul>
                <a>
                  <li className="text-[0.875rem] my-2 font-[500] dark:text-dark_heading_color text-light_heading_color">
                    +971 293 129 23
                  </li>
                </a>
                <a>
                  <li className="text-[0.875rem] my-2 font-[500] dark:text-dark_heading_color text-light_heading_color">
                    +971 949 214 12
                  </li>
                </a>
              </ul>
            </div>
            <div className="lg:col-span-2 md:col-span-6 col-span-12 dark:text-dark_heading_color text-light_heading_color">
              <TypographyRace
                fontSize="1.125rem"
                content={"Privacy&Terms"}
                marginBottom={"1.125rem"}
                fontWeight={"600"}
              />
              <ul>
                <a>
                  <li className="text-[0.875rem] my-2 font-[500] dark:text-dark_heading_color text-light_heading_color">
                    Terms
                  </li>
                </a>
                <a>
                  <li className="text-[0.875rem] my-2 font-[500] dark:text-dark_heading_color text-light_heading_color">
                    Conditions
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full dark:bg-dark_secondary_bg_color bg-light_secondary_bg_color h-[80px] flex items-center justify-center border-t border-[#E0E2E6]">
          <h1 className="font-[600] text-[#484848] text-[1rem]">
            <TypographyRace
              fontSize="1rem"
              content={"System Corporation © 2024"}
              marginBottom={"1.125rem"}
              fontWeight={"600"}
            />
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
