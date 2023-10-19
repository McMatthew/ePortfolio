import HomePage from "./sections/Home/HomePage";
import styles from "./page.module.css";
import WorkSection from "./sections/Work/workSection";
import { NavigationProvider } from "./context/navigationContext";
import About from "./sections/About/AboutSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavigationProvider>
        <HomePage />
        <WorkSection />
        <About />
      </NavigationProvider>
    </main>
  );
}
