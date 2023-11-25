import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import styles from "./meSection.module.css";
import { badgeMark } from "@/app/fonts";
import img from "../../../img/secretary.png";
import {
  Box,
  Button,
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
  IconBriefcase,
  IconFileFilled,
  IconMailbox,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

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
          <Box className={styles.application}>
            <Group gap={4}>
              <IconBriefcase color={"white"} size={36} />
              <Title c={"white"} className={badgeMark.className}>
                Documenti per candidature
              </Title>
            </Group>
            <Flex p={"1rem"}>
              <Paper className={styles.card}>
                <Box className={styles.cardImage} />
                <Box pos={"relative"} style={{ flexGrow: 1 }} p={"0.75rem"}>
                  <Group c={"gray.2"} gap={2}>
                    <IconFileFilled />
                    <Title order={1} fw={500}>
                      Curriculum vitae
                    </Title>
                  </Group>
                  <Link download={"curriculum"} href={"/cvMatteo.pdf"} />
                  <Button
                    className={styles.cardButton}
                    radius={"3rem"}
                    variant={"outline"}
                  >
                    Scarica
                  </Button>
                </Box>
              </Paper>
              <Stack>
                <Box></Box>
              </Stack>
            </Flex>
          </Box>
        </GridCol>
        <GridCol h={"100%"} span={8}>
          <Paper h={"100%"} className={styles.contacts}>
            <Flex h={"100%"} direction={"column"}>
              <Title className={badgeMark.className}>Contatti</Title>
              <Text mb={"1.5rem"} size={"sm"}>
                Non esitare a contattarmi, per qualunque informazione su di me o
                su delle opportunità da propormi
              </Text>
              <Stack style={{ flexGrow: 1 }}>
                <Flex>
                  <IconMailbox />
                  <Text mr={4}>Email: </Text>
                  <Link
                    className={styles.link}
                    href={"mailto:matteo.bianchi003@outlook.it"}
                  >
                    matteo.bianchi003@outlook.it
                  </Link>
                </Flex>
                <Flex>
                  <IconPhone />
                  <Text mr={4}>Phone: </Text>
                  <Link className={styles.link} href={"phoneto:+393922758741"}>
                    +39 392 275 8741
                  </Link>
                </Flex>
                <Flex>
                  <IconBrandLinkedin />
                  <Text mr={4}>LinkedIn: </Text>
                  <Link
                    className={styles.link}
                    target={"_blank"}
                    href={
                      "https://www.linkedin.com/in/matteo-bianchi-701b76263/"
                    }
                  >
                    matteo-bianchi
                  </Link>
                </Flex>
                <Flex>
                  <IconBrandGithub />
                  <Text mr={4}>GitHub: </Text>
                  <Link
                    className={styles.link}
                    href={"https://github.com/McMatthew"}
                    target={"_blank"}
                  >
                    McMatthew
                  </Link>
                </Flex>
              </Stack>
              <Image
                className={styles.imageContact}
                src={img}
                alt={"secretary"}
              />
            </Flex>
          </Paper>
        </GridCol>
      </Grid>
    </Drawer>
  );
};
export default MeSection;
