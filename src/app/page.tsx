import HomePage from "./sections/Home/HomePage";
import styles from "./page.module.css";
import classesCommon from "./sections/common.module.css";
import WorkSection from "./sections/Work/workSection";
import { NavigationProvider } from "./context/navigationContext";
import AboutSection from "./sections/About/AboutSection";
import MeSection from "@/app/sections/Me/meSection";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationProvider>
        <HomePage />
        <Box className={classesCommon.section}>
          <WorkSection />
          <AboutSection />
          <MeSection />
        </Box>
      </NavigationProvider>
    </main>
  );
}
