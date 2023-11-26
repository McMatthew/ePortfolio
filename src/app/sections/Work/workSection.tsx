"use client";
import {
  Box,
  Button,
  Grid,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import styles from "./workSection.module.css";
import commonStyles from "../common.module.css";
import { badgeMark } from "../../fonts";
import { useRef } from "react";
import Image from "next/image";
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
import { IconTelescope, IconTool } from "@tabler/icons-react";
import { useNavigation } from "@/app/context/navigationContext";
import { Roadmap } from "@/app/sections/Work/components/roadmap";
import { useMediaQuery } from "@mantine/hooks";

const WorkSection = () => {
  const { setLocation } = useNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 430px)");

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
          <Roadmap />
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
            <SimpleGrid
              ml={22}
              className={styles.logos}
              cols={isMobile ? 4 : 8}
            >
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
          <Grid.Col ta={"left"} span={isMobile ? 12 : 6}>
            <Box
              m={"0 auto"}
              w={isMobile ? "auto" : "60%"}
              fz={"2rem"}
              fw={600}
            >
              I progetti:
            </Box>
            <Box m={"0 auto"} fz={"1.6rem"} w={isMobile ? "auto" : "60%"}>
              Tutti i progetti che ho seguito, gli strumenti che ho usato e
              qualche informazione su cosa servano
            </Box>
            <Box m={"0 auto"} w={isMobile ? "auto" : "60%"}>
              <Button
                size={"lg"}
                onClick={() => setLocation("about")}
                className={styles.goto_about}
              >
                <IconTelescope /> Continua l'esplorazione
              </Button>
            </Box>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 6}>
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
