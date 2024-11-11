"use client";
import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import styles from "./meSection.module.css";
import { badgeMark } from "@/fonts/fonts";
import {
  Box,
  Flex,
  Grid,
  GridCol,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Marquee from "react-fast-marquee";
import { JobApplication } from "@/app/sections/Me/components/JobApplication";
import React, { useEffect, useState } from "react";
import { SocialPlate } from "@/app/sections/Me/components/socialPlate";
import { contacts } from "@/app/configs/contacts";
import { useMediaQuery } from "@mantine/hooks";
import MeSectionMobile from "@/app/sections/Me/meSectionMobile";
import { TABS_TITLES } from "@/app/components/Navbar/navbar";
import Confetti from "react-dom-confetti";
import { ConfettiConfig } from "dom-confetti";
import { useNavigation } from "@/app/context/navigationContext";

const MeSection = () => {
  const [alreadyThrow, setAlreadyThrow] = useState(false);
  const { location } = useNavigation();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [confetti, setConfetti] = useState(false);
  const config: ConfettiConfig = {
    angle: 91,
    spread: 241,
    startVelocity: 65,
    elementCount: 200,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "661px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  useEffect(() => {
    if (!alreadyThrow) {
      setAlreadyThrow(true);
      setConfetti(TABS_TITLES.ME === location);
    }
  }, [location]);

  return (
    <>
      <Drawer
        title={
          <Text className={`${commonStyles.title} ${badgeMark.className}`}>
            <span className={commonStyles.capital}>M</span>e...
          </Text>
        }
        navigationTrigger={TABS_TITLES.ME}
        styles={{
          body: { height: "calc(100% - 107px)", position: "relative" },
        }}
      >
        <Box
          pos={"absolute"}
          display={"grid"}
          style={{
            placeItems: "center",
            overflow: "hidden",
            zIndex: 100,
            userSelect: "none",
            pointerEvents: "none",
          }}
          top={0}
          right={0}
          bottom={0}
          left={0}
        >
          <Confetti config={config} active={confetti} />
        </Box>
        <Marquee>
          <Flex
            mt={6}
            className={styles.opentoworkCarousel}
            w={"100vw"}
            justify={"space-around"}
            fw={"bold"}
          >
            <Text
              fz={`clamp(0.55em, 2vw, 1.5em)`}
              component={"span"}
              variant={"gradient"}
              fw={700}
              gradient={{ from: "grape.5", to: "pink.5", deg: 64 }}
            >
              #OPENTOWORK
            </Text>
            <Text
              fz={`clamp(0.55em, 2vw, 1.5em)`}
              component={"span"}
              variant={"gradient"}
              fw={700}
              gradient={{ from: "gray.9", to: "blue.9", deg: 64 }}
            >
              #APERTOALAVORARE
            </Text>
            <Text
              fz={`clamp(0.55em, 2vw, 1.5em)`}
              component={"span"}
              variant={"gradient"}
              fw={700}
              gradient={{ from: "red.8", to: "pink.9", deg: 64 }}
            >
              #OUVERTAUTRAVAIL
            </Text>
            <Text
              fz={`clamp(0.55em, 2vw, 1.5em)`}
              component={"span"}
              variant={"gradient"}
              fw={700}
              gradient={{ from: "teal.8", to: "orange.7", deg: 75 }}
            >
              #OFFENFÜRARBEIT
            </Text>
          </Flex>
        </Marquee>
        {isMobile ? (
          <MeSectionMobile />
        ) : (
          <Grid
            styles={{ inner: { height: "100%" } }}
            columns={30}
            h={"calc(100% - 5rem)"}
            mt={"2rem "}
          >
            <GridCol pos={"relative"} span={isMobile ? 30 : 22}>
              <JobApplication />
            </GridCol>
            <GridCol pos={"relative"} h={"100%"} span={8}>
              <Paper h={"100%"} className={styles.contacts}>
                <Flex h={"100%"} direction={"column"}>
                  <Title className={badgeMark.className}>Contatti</Title>
                  <Text mb={"1.5rem"} fz={`clamp(0.8em, 2vw, 1.5em)`}>
                    Non esitare a contattarmi, per qualunque informazione su di
                    me o su delle opportunità da propormi
                  </Text>
                  <Stack w={"50%"}>
                    {contacts.map((props) => (
                      <SocialPlate key={props.siteName} {...props} />
                    ))}
                  </Stack>
                </Flex>
              </Paper>
            </GridCol>
          </Grid>
        )}
      </Drawer>
    </>
  );
};
export default MeSection;
