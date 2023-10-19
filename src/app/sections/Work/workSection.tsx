"use client";
import {
  Box,
  Button,
  Grid,
  Group,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import styles from "./workSection.module.css";
import commonStyles from "../common.module.css";
import { badgeMark } from "../../fonts";
import { useRef, useState } from "react";
import descriptions from "./lifePeriodDesc";
import Image from "next/image";
import sgc from "../../../img/sida.svg";
import isis from "../../../img/isis.jpg";
import hwu from "../../../img/hwu.jpg";
import bun from "../../../img/languages/bun.png";
import c from "../../../img/languages/c.png";
import js from "../../../img/languages/js.png";
import html from "../../../img/languages/html.png";
import css from "../../../img/languages/css.png";
import node from "../../../img/languages/node.png";
import vite from "../../../img/languages/vite.png";
import next from "../../../img/languages/next.png";
import cra from "../../../img/languages/cra.svg";
import redux from "../../../img/languages/redux.svg";
import react from "../../../img/languages/react.png";
import parcel from "../../../img/languages/parcel.png";
import php from "../../../img/languages/php.png";
import jquery from "../../../img/languages/jquery.png";
import git from "../../../img/languages/git.png";
import gitlab from "../../../img/languages/gitlab.svg";
import kotlin from "../../../img/languages/kotlin.png";
import kube from "../../../img/languages/kube.png";
import quarkus from "../../../img/languages/quarkus.png";
import npm from "../../../img/languages/npm.png";
import yarn from "../../../img/languages/yarn.png";
import sql from "../../../img/languages/sql.png";
import fire from "../../../img/languages/firebase.png";
import aws from "../../../img/languages/aws.jpg";
import ProjectCard from "./components/ProjectCard";
import { Projects } from "@/app/configs/projects";
import Drawer from "../../components/Drawer/Drawer";
import { IconRadar2, IconTelescope, IconTool } from "@tabler/icons-react";
import { useNavigation } from "@/app/context/navigationContext";

function setDotPosition(timelineStepIndex: number) {
  return timelineStepIndex * 80 + 10;
}

const WorkSection = () => {
  const { setLocation } = useNavigation();
  const [stepIndex, setStepIndex] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);
  const lifeStep = [
    { label: "Tirocinio - Hardware Upgrade", isPast: true, Date: "1/6/2021" },
    { label: "Diploma di maturità", isPast: true, Date: "15/7/2022" },
    { label: "Front-end dev SIDA Autosoft", isPast: false, Date: "18/7/2022" },
  ];

  return (
    <Drawer
      title={
        <Text className={`${commonStyles.title} ${badgeMark.className}`}>
          <span className={commonStyles.capital}>E</span>xperience
        </Text>
      }
      navigationTrigger={"experience"}
    >
      <Box className={commonStyles.section}>
        <Grid mih={"13rem"} justify="center" p={12}>
          <Grid.Col>
            <Box
              fz={"2rem"}
              className={`${commonStyles.title} ${badgeMark.className}`}
            >
              <IconRadar2 /> La mia roadmap
            </Box>
          </Grid.Col>
          <Grid.Col ta={"left"} span={4}>
            <Stack gap={0} className={styles.timeline}>
              {lifeStep.map((step, index) => (
                <Box
                  key={step.label}
                  pl={16}
                  onClick={() => setStepIndex(index)}
                  className={
                    step.isPast
                      ? styles.timeline_step_dashed
                      : styles.timeline_step
                  }
                >
                  {!step.isPast && (
                    <Box
                      top={setDotPosition(stepIndex)}
                      className={styles.timeline_step_dot}
                    />
                  )}
                  <Box className={styles.timeline_step_date}>{step.Date}</Box>
                  {step.label}
                </Box>
              ))}
            </Stack>
          </Grid.Col>
          <Grid.Col ta="justify" span={4}>
            <Box>{descriptions[stepIndex]}</Box>
          </Grid.Col>
          <Grid.Col>
            <Group mt={12} gap={"1rem"} justify="center">
              <Image
                data-highlight={stepIndex === 0}
                className={styles.logo}
                src={hwu}
                alt="Logo Hardware Upgrade"
              />
              <Image
                data-highlight={stepIndex === 1}
                className={styles.logo}
                src={isis}
                alt="Logo isis Luino"
              />
              <Image
                data-highlight={stepIndex === 2}
                className={styles.logo}
                src={sgc}
                alt="Logo Sida autosoft multimedia srl"
              />
            </Group>
          </Grid.Col>
          <Grid.Col>
            <Space h={"4rem"} />
          </Grid.Col>
          <Grid.Col>
            <Box
              fz={"2rem"}
              className={`${commonStyles.title} ${badgeMark.className}`}
            >
              <IconTool /> Tool e Linguaggi
            </Box>
          </Grid.Col>
          <Grid.Col>
            <SimpleGrid ml={22} className={styles.logos} cols={8}>
              <Image alt="bun" src={bun} />
              <Image alt="vite" src={vite} />
              <Image alt="next" src={next} />
              <Image alt="cra" src={cra} />
              <Image alt="parcel" src={parcel} />
              <Image alt="react" src={react} />
              <Image alt="redux" src={redux} />
              <Image alt="html" src={html} />
              <Image alt="js" src={js} />
              <Image alt="php" src={php} />
              <Image alt="jquery" src={jquery} />
              <Image alt="sql" src={sql} />
              <Image alt="css" src={css} />
              <Image alt="c#" src={c} />
              <Image alt="kotlin" src={kotlin} />
              <Image alt="node js" src={node} />
              <Image alt="kube" src={kube} />
              <Image alt="quarkus" src={quarkus} />
              <Image alt="git" src={git} />
              <Image alt="gitlab" src={gitlab} />
              <Image alt="npm" src={npm} />
              <Image alt="yarn" src={yarn} />
              <Image alt="fire" src={fire} />
              <Image alt="aws" src={aws} />
            </SimpleGrid>
          </Grid.Col>
          <Grid.Col>
            <Space h={"4rem"} />
          </Grid.Col>
          <Grid.Col ta={"left"} span={6}>
            <Box m={"0 auto"} w="60%" fz={"2rem"} fw={600}>
              I progetti:
            </Box>
            <Box m={"0 auto"} fz={"1.6rem"} w="60%">
              Tutti i progetti che ho seguito, gli strumenti che ho usato e
              qualche informazione su cosa servano
            </Box>
            <Box m={"0 auto"} w="60%">
              <Button
                onClick={() => setLocation("about")}
                className={styles.goto_about}
              >
                <IconTelescope /> Continua l'esplorazione
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={6}>
            <ScrollArea
              className={styles.scroll_projects}
              classNames={{ thumb: styles.scroll_projects_thumb }}
              offsetScrollbars
              h={"20rem"}
              ref={containerRef}
            >
              <Stack gap={"3rem"} className={styles.knoledge_gallery}>
                {Projects.map((p) => (
                  <ProjectCard
                    containerRef={containerRef}
                    key={p.title}
                    {...p}
                  />
                ))}
              </Stack>
            </ScrollArea>
          </Grid.Col>
        </Grid>
      </Box>
    </Drawer>
  );
};
export default WorkSection;
