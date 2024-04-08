import React, { ReactElement } from "react";

interface button {
  width: string;
  height: string;
  padding: string;
  rounded: string;
  title: string;
  border: string;
  icon?: ReactElement;
  textColor?: string;
}

const ButtonRace = ({
  icon,
  height,
  rounded,
  padding,
  width,
  title,
  border,
  textColor,
}: button) => {
  return (
    <button
      style={{
        width: width,
        padding: padding,
        height: height,
        borderRadius: rounded,
        border: border,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        color: textColor,
      }}
      type="submit"
      className="dark:bg-[orange] bg-[orange] bg:text-white text-white"
    >
      {icon ? <span>{icon}</span> : null}
      <span>{title}</span>
    </button>
  );
};

export default ButtonRace;
