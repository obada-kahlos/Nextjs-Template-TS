import Image from "next/image";
import React from "react";

const HereRegistration = () => {
  return (
    <div className="w-full h-screen bg-light_secondary_bg_color flex items-center justify-center">
      <Image
        alt="Digital building technology"
        src={"/Logo.png"}
        width={162}
        height={190}
      />
    </div>
  );
};

export default HereRegistration;
