"use client";
import Drawer from "@/app/components/Drawer/Drawer";
import { skill_resume } from "@/app/configs/skills";
import {
  Box,
  Divider,
  Flex,
  Group,
  Slider,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconRocket, IconStar, IconUserQuestion } from "@tabler/icons-react";
import Image from "next/image";
import me from "../../../img/me.png";
import { badgeMark } from "../../fonts";
import commonStyles from "../common.module.css";
import styles from "./AboutSection.module.css";
import { StatsRing } from "./components/DonutGraph/SkillGraph";
import arrow from "../../../img/arrow.png";
import { useEffect, useState } from "react";
import { useNavigation } from "@/app/context/navigationContext";

const AboutSection = () => {
  const [vibrationCount, setVibrationCount] = useState<number>(0);
  const { setLocation } = useNavigation();
  const yearFromDegree = new Date().getFullYear() - 2022;
  const vibrationStyle = {
    "--vibration-width": `${vibrationCount / 10}px`,
  };

  useEffect(() => {
    if (vibrationCount === 100) setLocation("me...");
  }, [vibrationCount]);

  return (
    <Drawer
      navigationTrigger="about"
      title={
        <Text className={`${commonStyles.title} ${badgeMark.className}`}>
          <span className={commonStyles.capital}>A</span>bout
        </Text>
      }
    >
      <Box className={styles.section} mx={"1rem"}>
        <Box
          style={{
            ...vibrationStyle,
            animation: "departure 0.1s linear both infinite alternate",
          }}
        >
          <Box
            ta={"center"}
            fw={300}
            mb={26}
            className={`${styles.title} ${badgeMark.className}`}
          >
            <IconUserQuestion /> Chi sono?
          </Box>
          <Flex mb={"0.5rem"}>
            <Image alt={"arrow"} src={arrow} />
            <Stack>
              <Text ta={"justify"} lh="2rem" size="1.5rem">
                Beh se non si fosse ancora capito, io sono Matteo... Bianchi
                Matteo per la precisione, un nome un bel pò comune lo so; però
                il mio obiettivo è farmi riconoscere e se non dal nome dalla
                qualità del mio lavoro. Mi sono diplomato nel 2022, ormai{" "}
                {yearFromDegree} ann
                {yearFromDegree === 1 ? "o" : "i"} fa. Da luglio di quell'anno
                però ho lavorato a qualche progetto frontend in React e,
                principalmente, ad una applicazione in Cloud. Sono sempre
                disposto a "cambiare aria", non si sa mai cosa ha in serbo il
                futuro... Detto ciò ecco un piccolo riepilogo delle mie abilità
                (autovalutate)
              </Text>
              <Group mt={64} justify="center">
                <IconStar stroke={2.25} color="#ffcc00" size={40} />
                <IconStar color="#ffcc00" size={48} />
                <IconStar stroke={2.25} color="#ffcc00" size={40} />
              </Group>
              <Stack>
                <Title c={"gray.8"} ta={"center"}>
                  “Non domandarti mai dove vai, solo fallo bene.”
                </Title>
                <Text mr={50} c={"gray.6"} ta={"right"}>
                  {" "}
                  - Chandra Livia Candiani
                </Text>
              </Stack>
            </Stack>
          </Flex>
          <Flex mb={"1rem"} gap={"4rem"}>
            <Image
              src={me}
              className={styles.profile_picture}
              alt="Matteo Bianchi"
            />
            <Divider orientation="vertical" />
            <Flex style={{ flexGrow: 1, alignItems: "flex-start" }} gap={12}>
              {skill_resume.map((resume) => (
                <StatsRing
                  key={resume.title}
                  data={resume.skills}
                  title={resume.title}
                  descr={resume.description}
                />
              ))}
            </Flex>
          </Flex>
        </Box>
        <Flex
          style={{ zIndex: 1001, position: "relative" }}
          direction="column"
          gap={"2rem"}
          align={"center"}
          mt="2rem"
        >
          <Title order={2}>Scorri alla prossima sezione...</Title>
          <Slider
            value={vibrationCount}
            onChange={setVibrationCount}
            thumbSize={50}
            thumbChildren={<IconRocket />}
            color="gray.8"
            radius={12}
            size={30}
            w={600}
          />
        </Flex>
      </Box>
    </Drawer>
  );
};
export default AboutSection;
