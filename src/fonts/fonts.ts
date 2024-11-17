import { Outfit, Poiret_One, Sacramento } from "next/font/google";

export const title = Poiret_One({ weight: "400", subsets: ["latin"] });
export const defaultFont = Outfit({
  weight: "300",
  subsets: ["latin"],
});
export const lightFont = Outfit({
  weight: "200",
  subsets: ["latin"],
});
export const badgeMark = Outfit({ weight: "variable", subsets: ["latin"] });

export const neon = Sacramento({ weight: "400", subsets: ["latin"] });
