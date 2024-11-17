import { ISkill } from "@/app/configs/skills";
import {
  Box,
  Center,
  Flex,
  Group,
  Paper,
  rem,
  RingProgress,
  Text,
  Title,
} from "@mantine/core";
import styles from "./SkillGraph.module.css";

export function StatsRing({
  data,
  title,
  descr,
}: {
  data: ISkill[];
  title: string;
  descr: string;
}) {
  const stats = data.map((stat) => {
    const { icon: Icon } = stat;
    return (
      <Paper
        bg={"dark.8"}
        style={{ flexGrow: 1 }}
        withBorder
        radius="md"
        p={6}
        key={stat.label}
      >
        <Group gap={0}>
          <RingProgress
            size={80}
            roundCaps
            thickness={8}
            sections={[{ value: stat.progress, color: stat.color }]}
            label={
              <Center>
                <Icon
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={3}
                  color={stat.color}
                />
              </Center>
            }
          />
          <div>
            <Text c="gray.0" size="sm" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text ta={"left"} fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <Box bg={"gray.9"} h={"100%"} p={12} className={styles.skills_paper}>
      <Title c={"gray.1"} mb={"0.25rem"}>
        {title}
      </Title>
      <Text mb={"1.25rem"} size={"1.25rem"} c={"gray.3"}>
        {descr}
      </Text>
      <Flex gap={8} wrap={"wrap"}>
        {stats}
      </Flex>
    </Box>
  );
}
