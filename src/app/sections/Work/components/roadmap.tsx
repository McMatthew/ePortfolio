import { Box, Grid, Group, SimpleGrid, Stack } from "@mantine/core";
import commonStyles from "@/app/sections/common.module.css";
import { badgeMark } from "@/fonts/fonts";
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
  const isMobile = useMediaQuery("(max-width: 768px)");

  const lifeStep = [
    { label: "Tirocinio - Hardware Upgrade", isPast: true, Date: "1/6/2021" },
    { label: "Diploma di maturità", isPast: true, Date: "15/7/2022" },
    { label: "Front-end dev SIDA Autosoft", isPast: false, Date: "18/7/2022" },
  ];

  return (
    <>
      <Box
        fz={"2rem"}
        className={`${commonStyles.title} ${badgeMark.className}`}
      >
        <IconRadar2 /> La mia roadmap
      </Box>
      <SimpleGrid mt={8} spacing={30} mx={20} cols={{ sm: 2 }}>
        <Box
          style={{
            justifySelf: isMobile ? "center" : "flex-end",
            flexGrow: 1,
          }}
          ta={"left"}
        >
          <Stack
            pr={60}
            gap={0}
            className={isMobile ? styles.timeline_mobile : styles.timeline}
          >
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
        </Box>
        <Box ta={"left"}>{descriptions[stepIndex]}</Box>
      </SimpleGrid>
      <Group my={24} gap={"1rem"} justify="center">
        <Image
          style={{ borderRadius: "100vw" }}
          data-highlight={stepIndex === 0}
          className={styles.logo}
          src={hwu}
          alt="Logo Hardware Upgrade"
        />
        <Image
          style={{ borderRadius: "100vw" }}
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
    </>
  );
}
