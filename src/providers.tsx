"use client";

import { createTheme, Divider, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import page_styles from "./app/page.module.css";

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = createTheme({
    white: "#efeceb",
    black: "#232325",
    components: {
      Divider: Divider.extend({
        classNames: {
          label: page_styles.title_divider,
        },
      }),
    },
  });
  return (
    <MantineProvider forceColorScheme={"light"} theme={theme}>
      {children}
    </MantineProvider>
  );
};
