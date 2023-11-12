"use client";
import Drawer from "@/app/components/Drawer/Drawer";
import { skill_resume } from "@/app/configs/skills";
import { Box, Divider, Flex, Space, Text } from "@mantine/core";
import { IconRoute, IconUserQuestion } from "@tabler/icons-react";
import Image from "next/image";
import me from "../../../img/me.png";
import { badgeMark } from "../../fonts";
import commonStyles from "../common.module.css";
import styles from "./AboutSection.module.css";
import { StatsRing } from "./components/DonutGraph/SkillGraph";
import arrow from "../../../img/arrow.png";

const AboutSection = () => {
  const yearFromDegree = new Date().getFullYear() - 2022;
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
          ta={"center"}
          fw={300}
          mb={26}
          className={`${styles.title} ${badgeMark.className}`}
        >
          <IconUserQuestion /> Chi sono?
        </Box>
        <Flex mb={"0.5rem"}>
          <Image alt={"arrow"} src={arrow} />
          <Text ta={"justify"} size="1.25rem">
            Beh se non si fosse ancora capito, io sono Matteo... Bianchi Matteo
            per la precisione, un nome un bel pò comune lo so; però il mio
            obiettivo è farmi riconoscere e se non dal nome dalla qualità del
            mio lavoro. Mi sono diplomato nel 2022, ormai {yearFromDegree} ann
            {yearFromDegree === 1 ? "o" : "i"} fa. Da luglio di quell'anno però
            ho lavorato a qualche progetto frontend in React e, principalmente,
            ad una applicazione in Cloud. Sono sempre disposto a "cambiare
            aria", non si sa mai a cosa ha in serbo il futuro... Detto ciò ecco
            un piccolo riepilogo delle mie abilità (autovalutate)
          </Text>
        </Flex>
        <Flex gap={"4rem"}>
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
        <Space h={"6rem"} />
        <Box
          ta={"center"}
          fw={300}
          mb={26}
          className={`${styles.title} ${badgeMark.className}`}
        >
          <IconRoute /> Come sono arrivato qui...
        </Box>
      </Box>
    </Drawer>
  );
};
export default AboutSection;
