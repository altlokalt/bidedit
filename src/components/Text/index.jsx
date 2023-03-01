import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[41px] md:text-[47px] text-[55px]",
  h2: "sm:text-[30px] md:text-[32px] text-[34px]",
  h3: "sm:text-[28px] md:text-[30px] text-[32px]",
  h4: "sm:text-[24px] md:text-[26px] text-[28px]",
  h5: "sm:text-[22px] md:text-[24px] text-[26px]",
  h6: "sm:text-[20px] md:text-[22px] text-[24px]",
  body1: "sm:text-[18px] md:text-[20px] text-[22px]",
  body2: "text-[20px]",
  body3: "text-[18px]",
  body4: "text-[16px]",
  body5: "font-normal text-[15px]",
  body6: "text-[14px]",
  body7: "text-[12px]",
  body8: "font-bold text-[10.11px]",
  body9: "text-[10px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
