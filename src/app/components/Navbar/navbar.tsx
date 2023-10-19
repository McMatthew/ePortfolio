"use client";
import { Box, Button, Flex } from "@mantine/core";
import styles from "./navbar.module.css";
import { badgeMark } from "../../fonts";
import { useNavigation } from "@/app/context/navigationContext";

enum TABS_TITLES {
  WORK = "experience",
  ABOUT = "about",
  ME = "me...",
}
const Navbar = () => {
  const { location, setLocation } = useNavigation();

  return (
    <Flex
      align={"center"}
      gap={8}
      className={`${styles.navbar} ${badgeMark.className}`}
    >
      <Box className={`${styles.badge} ${badgeMark.className}`}>MB</Box>
      <Button
        className={styles.tab_button}
        data-active={location === TABS_TITLES.WORK}
        onClick={() => setLocation(TABS_TITLES.WORK)}
      >
        {TABS_TITLES.WORK}
      </Button>
      <Button
        className={styles.tab_button}
        data-active={location === TABS_TITLES.ABOUT}
        onClick={() => setLocation(TABS_TITLES.ABOUT)}
      >
        {TABS_TITLES.ABOUT}
      </Button>
      <Button
        className={styles.tab_button}
        data-active={location === TABS_TITLES.ME}
        onClick={() => setLocation(TABS_TITLES.ME)}
      >
        {TABS_TITLES.ME}
      </Button>
    </Flex>
  );
};
export default Navbar;
