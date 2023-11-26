import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import styles from "./meSection.module.css";
import { badgeMark, neon } from "@/app/fonts";
import { Flex, Grid, GridCol, Paper, Stack, Text, Title } from "@mantine/core";
import Marquee from "react-fast-marquee";
import { JobApplication } from "@/app/sections/Me/components/JobApplication";
import React from "react";
import { SocialPlate } from "@/app/sections/Me/components/socialPlate";
import { contacts } from "@/app/configs/contacts";

const MeSection = () => {
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
          fz={"1.25rem"}
          fw={"bold"}
        >
          <Text
            size={"lg"}
            component={"span"}
            variant={"gradient"}
            fw={700}
            gradient={{ from: "grape.5", to: "pink.5", deg: 64 }}
          >
            #OPENTOWORK
          </Text>
          <Text
            size={"lg"}
            component={"span"}
            variant={"gradient"}
            fw={700}
            gradient={{ from: "gray.9", to: "blue.9", deg: 64 }}
          >
            #APERTOALAVORARE
          </Text>
          <Text
            size={"lg"}
            component={"span"}
            variant={"gradient"}
            fw={700}
            gradient={{ from: "red.8", to: "pink.9", deg: 64 }}
          >
            #OUVERTAUTRAVAIL
          </Text>
          <Text
            size={"lg"}
            component={"span"}
            variant={"gradient"}
            fw={700}
            gradient={{ from: "teal.8", to: "orange.7", deg: 75 }}
          >
            #OFFENFÜRARBEIT
          </Text>
        </Flex>
      </Marquee>
      <Grid
        styles={{ inner: { height: "100%" } }}
        columns={30}
        h={"calc(100% - 5rem)"}
        mt={"2rem "}
      >
        <GridCol pos={"relative"} span={22}>
          <JobApplication />
        </GridCol>
        <GridCol pos={"relative"} h={"100%"} span={8}>
          <Paper h={"100%"} className={styles.contacts}>
            <Flex h={"100%"} direction={"column"}>
              <Title className={badgeMark.className}>Contatti</Title>
              <Text mb={"1.5rem"} size={"lg"}>
                Non esitare a contattarmi, per qualunque informazione su di me o
                su delle opportunità da propormi
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
    </Drawer>
  );
};
export default MeSection;
