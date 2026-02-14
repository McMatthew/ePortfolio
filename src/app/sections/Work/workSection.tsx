"use client";
import { Box, ScrollArea, SimpleGrid, Space, Stack, Tooltip } from "@mantine/core";
import styles from "./workSection.module.css";
import commonStyles from "../common.module.css";
import { badgeMark } from "@/fonts/fonts";
import { useEffect, useRef } from "react";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { Projects } from "@/app/configs/projects";
import { IconTool } from "@tabler/icons-react";
import { useNavigation } from "@/app/context/navigationContext";
import { Roadmap } from "@/app/sections/Work/components/roadmap";
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";
import { KNOWN_TOOLS } from "@/app/configs/const";
import { TABS_TITLES } from "@/app/components/Navbar/navbar";

const WorkSection = () => {
  const { location } = useNavigation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>();

  useEffect(() => {
    if (location === TABS_TITLES.WORK) scrollIntoView({ alignment: "end" });
  }, [location]);

  return (
    <Box ref={targetRef}>
      <Roadmap />
      <Box
        fz={"2rem"}
        className={`${commonStyles.title} ${badgeMark.className}`}
      >
        <IconTool /> Tool e Linguaggi
      </Box>
      <SimpleGrid
        mt={8}
        ml={22}
        className={styles.logos}
        cols={{ base: 3, sm: 3, md: 8 }}
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
      <Space h={"4rem"} />
      <SimpleGrid mx={isMobile ? 8 : 0} spacing={0} cols={{ base: 1, md: 2 }}>
        <Box mb={10}>
          <Box m={"0 auto"} w={isMobile ? "auto" : "60%"} fz={"2rem"} fw={600}>
            I progetti:
          </Box>
          <Box m={"0 auto"} fz={"1.6rem"} w={isMobile ? "auto" : "60%"}>
            Tutti i progetti che ho seguito, gli strumenti che ho usato e
            qualche informazione su cosa servano
          </Box>
        </Box>

        <Box mb={32} mx={isMobile ? 0 : 18}>
          <ScrollArea
            className={styles.scroll_projects}
            classNames={{ thumb: styles.scroll_projects_thumb }}
            offsetScrollbars
            h={"20rem"}
            ref={containerRef}
          >
            <Stack gap={"3rem"} className={styles.knoledge_gallery}>
              {Projects.map((p) => (
                <ProjectCard containerRef={containerRef} key={p.title} {...p} />
              ))}
            </Stack>
          </ScrollArea>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
export default WorkSection;
