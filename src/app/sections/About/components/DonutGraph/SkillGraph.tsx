import { ISkill } from "@/app/configs/skills";
import {
  Box,
  Center,
  Flex,
  Group,
  Paper,
  rem,
  RingProgress,
  SimpleGrid,
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
            <Text c="dimmed" size="sm" tt="uppercase" fw={700}>
              {stat.label}
            </Text>
            <Text fw={700} size="xl">
              {stat.stats}
            </Text>
          </div>
        </Group>
      </Paper>
    );
  });

  return (
    <Box bg={"gray.0"} h={"100%"} p={12} className={styles.skills_paper}>
      <Title mb={"0.25rem"}>{title}</Title>
      <Text mb={"1.25rem"} size={"1.25rem"} c={"gray.7"}>
        {descr}
      </Text>
      <Flex gap={8} wrap={"wrap"}>
        {stats}
      </Flex>
    </Box>
  );
}
