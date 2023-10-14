"use client";

import { Divider, MantineProvider, createTheme } from "@mantine/core";
import { ReactNode } from "react";
import page_styles from "./app/page.module.css";

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    components: {
      Divider: Divider.extend({
        classNames: {
          label: page_styles.title_divider,
        },
      }),
    },
  });
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
