"use client";
import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import styles from "./meSection.module.css";
import { badgeMark, neon } from "@/app/fonts";
import {
  em,
  Flex,
  Grid,
  GridCol,
  Paper,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Marquee from "react-fast-marquee";
import { JobApplication } from "@/app/sections/Me/components/JobApplication";
import React from "react";
import { SocialPlate } from "@/app/sections/Me/components/socialPlate";
import { contacts } from "@/app/configs/contacts";
import { useMediaQuery } from "@mantine/hooks";
import MeSectionMobile from "@/app/sections/Me/meSectionMobile";

const MeSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Drawer
      title={
        <Text className={`${commonStyles.title} ${badgeMark.className}`}>
          <span className={commonStyles.capital}>M</span>e...
        </Text>
      }
      navigationTrigger={"me..."}
      styles={{ body: { height: "calc(100% - 107px)", position: "relative" } }}
    >
      <Marquee style={{ borderBottom: "1px solid gainsboro" }}>
        <Flex
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
                  Non esitare a contattarmi, per qualunque informazione su di me
                  o su delle opportunità da propormi
                </Text>
                <Stack w={"50%"}>
                  {contacts.map((props) => (
                    <SocialPlate key={props.siteName} {...props} />
                  ))}
                </Stack>
                <Title className={`${styles.contact_neon} ${neon.className}`}>
                  Get in touch!
                </Title>
              </Flex>
            </Paper>
          </GridCol>
        </Grid>
      )}
    </Drawer>
  );
};
export default MeSection;
