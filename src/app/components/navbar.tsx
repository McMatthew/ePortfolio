"use client";
import { Box, Button, Flex } from "@mantine/core";
import styles from "./navbar.module.css";
import { badgeMark } from "../fonts";

interface params {
  activeTab: string;
  setActivetab: (x: string) => void;
}

const Navbar = ({ activeTab, setActivetab }: params) => {
  enum TABS_TITLES {
    WORK = "work",
    ABOUT = "about",
    ME = "me...",
  }

  return (
    <Flex
      align={"center"}
      gap={8}
      className={`${styles.navbar} ${badgeMark.className}`}
    >
      <Box className={`${styles.badge} ${badgeMark.className}`}>MB</Box>
      <Button
        className={styles.tab_button}
        data-active={activeTab === TABS_TITLES.WORK}
        onClick={() => setActivetab(TABS_TITLES.WORK)}
      >
        {TABS_TITLES.WORK}
      </Button>
      <Button
        className={styles.tab_button}
        data-active={activeTab === TABS_TITLES.ABOUT}
        onClick={() => setActivetab(TABS_TITLES.ABOUT)}
      >
        {TABS_TITLES.ABOUT}
      </Button>
      <Button
        className={styles.tab_button}
        data-active={activeTab === TABS_TITLES.ME}
        onClick={() => setActivetab(TABS_TITLES.ME)}
      >
        {TABS_TITLES.ME}
      </Button>
    </Flex>
  );
};
export default Navbar;
