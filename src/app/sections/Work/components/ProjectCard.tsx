import { Badge, Box, Flex, Group } from "@mantine/core";
import Image from "next/image";
import styles from "../workSection.module.css";
import { Project } from "@/app/configs/projects";
import { useIntersection } from "@mantine/hooks";
import { MutableRefObject } from "react";

const ProjectCard = ({
  badgeList,
  description,
  title,
  img,
  containerRef,
}: Project & {
  containerRef: MutableRefObject<HTMLDivElement | null> | null;
}) => {
  const { ref, entry } = useIntersection({
    root: containerRef?.current,
    threshold: 0.8,
  });

  return (
    <Box className={styles.project_card} data-visible={entry?.isIntersecting}>
      <Flex direction={"row"} align={"flex-start"} wrap="nowrap">
        <Box className={styles.infos}>
          <Box ref={ref} className={styles.title}>
            {title}
          </Box>
          <Box className={styles.description}>{description}</Box>
        </Box>
        {img && <Image src={img} alt="sida logo" />}
      </Flex>
      <Group mt={24} className={styles.badge_list}>
        {badgeList.map((badge) => (
          <Badge
            key={badge}
            className={styles.badge}
            variant="light"
            id={badge}
          >
            {badge}
          </Badge>
        ))}
      </Group>
    </Box>
  );
};
export default ProjectCard;
