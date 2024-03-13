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
  Tooltip,
} from "@mantine/core";
import styles from "./workSection.module.css";
import commonStyles from "../common.module.css";
import { badgeMark } from "../../fonts";
import { useRef } from "react";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { Projects } from "@/app/configs/projects";
import Drawer from "../../components/Drawer/Drawer";
import { IconTelescope, IconTool } from "@tabler/icons-react";
import { useNavigation } from "@/app/context/navigationContext";
import { Roadmap } from "@/app/sections/Work/components/roadmap";
import { useMediaQuery } from "@mantine/hooks";
import { KNOWN_TOOLS } from "@/app/configs/const";

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
              {KNOWN_TOOLS.map(({ src, alt }) => (
                <Tooltip
                  openDelay={500}
                  color={"gray.8"}
                  withArrow
                  key={alt}
                  label={alt}
                >
                  <Image alt={alt} src={src} />
                </Tooltip>
              ))}
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
