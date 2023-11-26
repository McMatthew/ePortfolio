import { Box, Grid, Group, Stack } from "@mantine/core";
import commonStyles from "@/app/sections/common.module.css";
import { badgeMark } from "@/app/fonts";
import { IconRadar2 } from "@tabler/icons-react";
import styles from "@/app/sections/Work/workSection.module.css";
import descriptions from "@/app/sections/Work/lifePeriodDesc";
import Image from "next/image";
import hwu from "@/img/hwu.jpg";
import isis from "@/img/isis.jpg";
import sgc from "@/img/sida.svg";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

function setDotPosition(timelineStepIndex: number) {
  return timelineStepIndex * 80 + 10;
}

export function Roadmap() {
  const [stepIndex, setStepIndex] = useState(2);
  const isMobile = useMediaQuery("(max-width: 430px)");

  const lifeStep = [
    { label: "Tirocinio - Hardware Upgrade", isPast: true, Date: "1/6/2021" },
    { label: "Diploma di maturità", isPast: true, Date: "15/7/2022" },
    { label: "Front-end dev SIDA Autosoft", isPast: false, Date: "18/7/2022" },
  ];

  return (
    <>
      <Grid.Col>
        <Box
          fz={"2rem"}
          className={`${commonStyles.title} ${badgeMark.className}`}
        >
          <IconRadar2 /> La mia roadmap
        </Box>
      </Grid.Col>
      <Grid.Col ta={"left"} span={isMobile ? 12 : 4}>
        <Stack gap={0} className={styles.timeline}>
          {lifeStep.map((step, index) => (
            <Box
              key={step.label}
              pl={16}
              onClick={() => setStepIndex(index)}
              className={
                step.isPast ? styles.timeline_step_dashed : styles.timeline_step
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
      <Grid.Col ta="justify" span={isMobile ? 12 : 4}>
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
    </>
  );
}
