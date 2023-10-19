"use client";
import { Box, Button, Divider, Title } from "@mantine/core";
import styles from "./HomePage.module.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import { title } from "@/app/fonts";
import ReactImage from "@/app/components/ReactImage";
import { IconChevronDown, IconRocket } from "@tabler/icons-react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useNavigation } from "@/app/context/navigationContext";

const HomePage = () => {
  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    root: undefined,
    rootMargin: "0px",
  });
  const { setLocation } = useNavigation();

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
      {entry?.isIntersecting && <ReactImage />}
      <Button
        onClick={() => setLocation("experience")}
        className={styles.goto_next_section}
      >
        <IconRocket /> Inizia spedizione
      </Button>
    </>
  );
};

export default HomePage;
