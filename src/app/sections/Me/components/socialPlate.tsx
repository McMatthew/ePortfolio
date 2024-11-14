import React from "react";
import Link from "next/link";
import { Group, Text } from "@mantine/core";
import styles from "@/app/sections/Me/meSection.module.css";

export const SocialPlate = ({
  url,
  placeHolder,
  icon,
  color,
  mini,
}: {
  icon: React.ReactElement;
  placeHolder: string;
  url: string;
  color: string;
  mini?: boolean;
}) => {
  return (
    <Link target={"_blank"} href={url}>
      <Group
        style={{ "--brand-color": color }}
        className={styles.contact}
        pos={"relative"}
      >
        <span className={mini ? styles.contact_icon_mini : styles.contact_icon}>
          {icon}
        </span>
        <Text size={mini ? "1rem" : "1.5rem"}>{placeHolder}</Text>
      </Group>
    </Link>
  );
};
