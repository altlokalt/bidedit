module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        green_300: "#83af83",
        bluegray_900_bf: "#292c38bf",
        bluegray_51: "#eef0f2",
        bluegray_50: "#eeeff8",
        white_A700_3f: "#ffffff3f",
        blue_A400: "#3772ff",
        gray_900_ab: "#181a26ab",
        gray_400_4c: "#cacaca4c",
        red_642: "#e23434",
        teal_500: "#00a57e",
        deep_purple_A201: "#6252fa",
        black_900_07: "#00000007",
        gray_804: "#4f4f4f",
        deep_purple_A200: "#6352fb",
        cyan_A700: "#00b2d6",
        black_900_05: "#00000005",
        white_A700_4c: "#ffffff4c",
        gray_900_26: "#130c1a26",
        gray_400: "#b7babc",
        black_900_0a: "#0000000a",
        gray_401: "#aeaeae",
        gray_802: "#335231",
        gray_803: "#373a46",
        amber_500: "#f0b90b",
        gray_800: "#373748",
        gray_404: "#babbc3",
        amber_501: "#fbbc05",
        gray_801: "#4a4f40",
        orange_200: "#faca7b",
        bluegray_800: "#3a4455",
        white_A700_66: "#ffffff66",
        indigo_A703: "#384bf2",
        indigo_A702: "#1b1bdd",
        indigo_A701: "#2129db",
        indigo_200: "#a2b1cf",
        indigo_A700: "#2f37ff",
        blue_100: "#d0e1f7",
        black_900_19: "#00000019",
        gray_52: "#fbfbfd",
        gray_51: "#f6f6fd",
        green_200: "#9bbf9b",
        gray_912: "#212529",
        light_blue_A400: "#00c1ff",
        gray_910: "#141414",
        gray_911: "#181a26",
        green_604: "#42a846",
        green_603: "#34a853",
        green_600: "#588958",
        gray_50: "#f6f8f9",
        white_A700_33: "#ffffff33",
        gray_905: "#141612",
        gray_906: "#1f221c",
        gray_903: "#15161d",
        gray_400_33: "#cacaca33",
        gray_904: "#111516",
        gray_909: "#24252d",
        yellow_100: "#fef0ca",
        gray_908: "#2a2d25",
        gray_501: "#a09f9f",
        gray_103: "#f4f5fb",
        gray_500: "#93989a",
        gray_901: "#191d24",
        gray_902: "#16181c",
        gray_900: "#111318",
        gray_101: "#f5f5f5",
        gray_102: "#f4f4fa",
        gray_100: "#f3f3f3",
        indigo_300: "#778dba",
        indigo_301: "#7d8db5",
        gray_900_3f: "#24252d3f",
        bluegray_700: "#38596a",
        indigo_A400: "#3d6dff",
        white_A700_7f: "#ffffff7f",
        white_A700_b2: "#ffffffb2",
        green_100: "#cddfcd",
        blue_A202: "#4285f4",
        red_600: "#f52424",
        red_200: "#e1959c",
        blue_A200: "#4196fa",
        blue_A201: "#518bf7",
        black_900_3f: "#0000003f",
        lime_A400: "#b5fb02",
        green_500: "#5f955f",
        white_A700_99: "#ffffff99",
        teal_700: "#006b7a",
        white_A700_ab: "#ffffffab",
        deep_orange_300: "#ff7062",
        white_A700_19: "#ffffff19",
        gray_600: "#848484",
        gray_601: "#7c876e",
        indigo_A200_54: "#6170eb54",
        gray_400_90: "#bcbcbc90",
        gray_900_67: "#15161d67",
        yellow_51: "#fffae5",
        yellow_50: "#fef8e4",
        gray_200: "#ebebeb",
        blue_50: "#e6effb",
        bluegray_202: "#afb5c3",
        bluegray_201: "#b7c1c6",
        gray_500_ab: "#93989aab",
        bluegray_200: "#a1becd",
        black_900_51: "#00000051",
        gray_900_5f: "#15161d5f",
        blue_300: "#6e9cf7",
        blue_301: "#6d9bf7",
        white_A700: "#ffffff",
        red_502: "#ea4335",
        red_501: "#ff3232",
        gray_500_3f: "#93989a3f",
        indigo_A200: "#6271eb",
        red_500: "#ff3131",
        amber_A400: "#ffc400",
        black_904: "#0a0b09",
        gray_900_a3: "#111318a3",
        black_903: "#0f0f0f",
        black_900: "#080a0c",
        black_902: "#000000",
        black_901: "#010101",
        pink_900_7f: "#7425257f",
        black_900_26: "#00000026",
        gray_303: "#dbdddd",
        red_500_4c: "#ff32324c",
        gray_304: "#e5e5e5",
        gray_301: "#e2e6e8",
        gray_302: "#e6e6e6",
        gray_305: "#dae7da",
        lime_800: "#b37e3d",
        indigo_50: "#e7e9f0",
        white_A700_a2: "#ffffffa2",
        blue_600: "#347ae2",
        bluegray_100: "#d4d7dd",
        gray_300: "#e2e4e8",
        teal_A401: "#00dbb6",
        teal_A400: "#00ffbb",
        bluegray_900: "#232931",
        cyan_300: "#57cbe6",
        bluegray_501: "#4d7a91",
        bluegray_500: "#637592",
        bluegray_102: "#d9d9d9",
        indigo_900: "#0a1393",
        indigo_901: "#25396f",
        bluegray_902: "#292c38",
        bluegray_901: "#2c3039",
      },
      fontFamily: {
        sora: "Sora",
        quicksand: "Quicksand",
        fractul: "Fractul",
        urbanist: "Urbanist",
        roboto: "Roboto",
        outfit: "Outfit",
        rubik: "Rubik",
        anektamil: "Anek Tamil",
        montserrat: "Montserrat",
        plusjakartasans: "Plus Jakarta Sans",
        inter: "Inter",
        poppins: "Poppins",
        sansita: "Sansita",
        ubuntu: "Ubuntu",
        dmsans: "DM Sans",
        lato: "Lato",
      },
      boxShadow: {
        bs4: "0px 4px  100px 0px #cacaca4c",
        bs: "0px 4px  100px 0px #cacaca33",
        bs10: "0px 4px  20px 0px #ff3232",
        bs3: "0px 4px  10px 0px #ff32324c",
        bs1: "0px 4px  4px 0px #0000003f",
        bs5: "0px 4px  80px 0px #93989a3f",
        bs9: "0px 9px  14px 0px #00000019",
        bs8: "10px 6px  25px 0px #0000000a",
        bs2: "2px 4px  15px 0px #00000026",
        bs7: "6px 6px  25px 0px #00000005",
        bs6: "6px 6px  25px 0px #00000007",
      },
      textShadow: { ts: "0px 4px  10px #ff32324c" },
      backgroundImage: {
        gradient: "linear-gradient(136deg ,#24252d,#24252d3f)",
        gradient1: "linear-gradient(90deg ,#6271eb,#6170eb54)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
