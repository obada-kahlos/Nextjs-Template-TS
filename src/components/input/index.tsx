import React, { ReactElement, ReactEventHandler } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { TypographyRace } from "../Typography/Typography";

interface InputProps {
  type: string;
  label: string;
  name: string;
  icon?: ReactElement;
  placeholder: string;
  passwordIcon?: ReactElement;
  onChange?: ReactEventHandler;
  toggleIcon?: boolean;
  onClick?: ReactEventHandler;
}

export const InputRace = ({
  type,
  label,
  name,
  placeholder,
  onChange,
  icon,
  onClick,
  toggleIcon,
}: InputProps) => {
  const direction = window.localStorage.getItem("direction") || "ltr";

  return (
    <React.Fragment>
      <div className="">
        {/* <label className={`${direction === "ltr" ? "label-en" : "label-ar"}`}>
          {label}
        </label> */}

        <TypographyRace
          content={label}
          fontSize="18px"
          fontWeight="500"
          marginBottom="6px"
        />

        <input
          type={type}
          className={
            "border border-[#D6DDEB] w-full h-[43px] pl-4 rounded-[6px]"
          }
          placeholder={placeholder}
          name={name}
          autoComplete="off"
          onChange={onChange}
        />
      </div>
    </React.Fragment>
  );
};
