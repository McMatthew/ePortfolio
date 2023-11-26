import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailbox,
  IconPhone,
} from "@tabler/icons-react";

interface Contact {
  placeHolder: string;
  url: string;
  siteName: string;
  icon: React.ReactElement;
  color: string;
}

export const contacts: Contact[] = [
  {
    color:
      "linear-gradient(160deg, rgba(135,86,116,1) 0%, rgba(83,29,37,1) 100%)",
    icon: <IconPhone size={42} />,
    placeHolder: " 392 275 8741",
    siteName: "Cellulare",
    url: "Tel:+393922758741",
  },
  {
    color:
      "linear-gradient(160deg, rgba(67,143,99,1) 0%, rgba(29,59,60,1) 100%)",
    icon: <IconMailbox size={42} />,
    placeHolder: " Gmail",
    siteName: "Email",
    url: "mailto:bianchimatteolab@gmail.com",
  },
  {
    color:
      "linear-gradient(160deg, rgba(45,96,153,1) 0%, rgba(31,45,96,1) 100%)",
    icon: <IconBrandLinkedin size={42} />,
    placeHolder: " Matteo Bianchi",
    siteName: "LinkedIn",
    url: "https://www.linkedin.com/in/matteo-bianchi-701b76263/",
  },
  {
    color:
      "linear-gradient(160deg, rgba(114,47,142,1) 0%, rgba(38,31,96,1) 100%",
    icon: <IconBrandGithub size={42} />,
    placeHolder: " McMatthew",
    siteName: "GitHub",
    url: "https://github.com/McMatthew",
  },
];
