"use client";
import { Box, Divider, Title, Transition } from "@mantine/core";
import styles from "./HomePage.module.css";
import Navbar from "../../components/Navbar/navbar";
import { title } from "@/fonts/fonts";
import ReactImage from "@/app/components/ReactImage";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const HomePage = () => {
  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    root: undefined,
    rootMargin: "0px",
  });

  return (
    <>
      <Navbar />
      <Box className={styles.title}>
        <Title ref={ref} fz={64} className={title.className} tt={"uppercase"}>
          Matteo Bianchi
        </Title>
        <Divider
          labelPosition="center"
          label="portfolio"
          variant="solid"
          size={"sm"}
          color="gray.5"
          mt={16}
          c={"white"}
        />
      </Box>
      <Transition
        transition={"fade"}
        duration={700}
        mounted={!!entry?.isIntersecting}
      >
        {(styles) => <ReactImage style={styles} />}
      </Transition>
    </>
  );
};

export default HomePage;
