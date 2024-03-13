"use client";
import {
  Box,
  Button,
  Divider,
  Overlay,
  Title,
  Transition,
} from "@mantine/core";
import styles from "./HomePage.module.css";
import Navbar from "../../components/Navbar/navbar";
import { title } from "@/app/fonts";
import ReactImage from "@/app/components/ReactImage";
import { IconRocket } from "@tabler/icons-react";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useNavigation } from "@/app/context/navigationContext";
import { useMediaQuery } from "@mantine/hooks";

const HomePage = () => {
  const [ref, entry] = useIntersectionObserver<HTMLDivElement>({
    root: undefined,
    rootMargin: "0px",
  });
  const { setLocation } = useNavigation();
  const matches = useMediaQuery("(min-width: 850px)");

  return (
    <>
      <Transition mounted={matches === false}>
        {(theme) => (
          <Overlay
            display={"grid"}
            style={{ placeItems: "center", ...theme }}
            blur={15}
            zIndex={1000}
            pos={"relative"}
          >
            <video
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              autoPlay
              muted
              loop
              id="myVideo"
            >
              <source src={"/galaxy.mp4"} type="video/mp4" />
            </video>

            <Box top={"40%"} pos={"absolute"}>
              <Title
                style={{ textShadow: "0px 0px 6px #333333" }}
                c={"white"}
                tt={"uppercase"}
                ta={"center"}
              >
                Responsive design
                <br />
                coming soon...
              </Title>
            </Box>
          </Overlay>
        )}
      </Transition>
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
