import HomePage from "./sections/Home/HomePage";
import styles from "./page.module.css";
import WorkSection from "./sections/Work/workSection";
import { NavigationProvider } from "./context/navigationContext";
import AboutSection from "./sections/About/AboutSection";
import MeSection from "@/app/sections/Me/meSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationProvider>
        <HomePage />
        <WorkSection />
        <AboutSection />
        <MeSection />
      </NavigationProvider>
    </main>
  );
}
