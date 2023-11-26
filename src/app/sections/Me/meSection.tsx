import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import styles from "./meSection.module.css";
import { badgeMark } from "@/app/fonts";
import {
  Box,
  Flex,
  Grid,
  GridCol,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import Marquee from "react-fast-marquee";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMailbox,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { JobApplication } from "@/app/sections/Me/components/JobApplication";
import React from "react";

function SocialPlate({
  url,
  placeHolder,
  Icon,
  sitename,
  color,
}: {
  Icon: React.ReactElement;
  placeHolder: string;
  url: string;
  sitename: string;
  color: string;
}) {
  return (
    <Link target={"_blank"} href={url}>
      <Group
        style={{ "--brand-color": color }}
        className={styles.contact}
        pos={"relative"}
      >
        <Box className={styles.contact_plate} pos={"absolute"}>
          {placeHolder}
        </Box>
        <span className={styles.contact_icon}>{Icon}</span>
        <Text size={"1.5rem"}>{sitename}</Text>
      </Group>
    </Link>
  );
}

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
              <Text mb={"1.5rem"} size={"sm"}>
                Non esitare a contattarmi, per qualunque informazione su di me o
                su delle opportunità da propormi
              </Text>
              <Stack w={"50%"}>
                <SocialPlate
                  placeHolder={"Gmail"}
                  Icon={<IconMailbox size={42} />}
                  url={"mailto:bianchimatteolab@gmail.com"}
                  sitename={"Email"}
                  color={"#ff5e5e"}
                />
                <SocialPlate
                  placeHolder={"392 275 8741"}
                  Icon={<IconPhone size={42} />}
                  url={"Tel:+393922758741"}
                  sitename={"Cellulare"}
                  color={"#f8ac1f"}
                />
                <SocialPlate
                  placeHolder={"Matteo Bianchi"}
                  Icon={<IconBrandLinkedin size={42} />}
                  url={"https://www.linkedin.com/in/matteo-bianchi-701b76263/"}
                  sitename={"LinkedIn"}
                  color={"#086ff5"}
                />
                <SocialPlate
                  placeHolder={"McMatthew"}
                  Icon={<IconBrandGithub size={42} />}
                  url={"https://github.com/McMatthew"}
                  sitename={"GitHub"}
                  color={"#9036f1"}
                />
              </Stack>
            </Flex>
          </Paper>
        </GridCol>
      </Grid>
    </Drawer>
  );
};
export default MeSection;
