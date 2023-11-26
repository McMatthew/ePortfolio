import React from "react";
import Link from "next/link";
import { Box, Group, Text } from "@mantine/core";
import styles from "@/app/sections/Me/meSection.module.css";

export const SocialPlate = ({
  url,
  placeHolder,
  icon,
  siteName,
  color,
}: {
  icon: React.ReactElement;
  placeHolder: string;
  url: string;
  siteName: string;
  color: string;
}) => {
  return (
    <Link target={"_blank"} href={url}>
      <Group
        style={{ "--brand-color": color }}
        className={styles.contact}
        pos={"relative"}
      >
        <Box className={styles.contact_plate} pos={"absolute"}>
          {placeHolder}
        </Box>
        <span className={styles.contact_icon}>{icon}</span>
        <Text size={"1.5rem"}>{siteName}</Text>
      </Group>
    </Link>
  );
};
