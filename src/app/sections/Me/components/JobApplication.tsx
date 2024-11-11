"use client";
import {
  Box,
  Button,
  Flex,
  Group,
  Paper,
  ScrollArea,
  Text,
  Title,
} from "@mantine/core";
import styles from "@/app/sections/Me/meSection.module.css";
import {
  IconBriefcase,
  IconFileFilled,
  IconMailOpenedFilled,
} from "@tabler/icons-react";
import { badgeMark, lightFont } from "@/fonts/fonts";
import Link from "next/link";
import { useMediaQuery } from "@mantine/hooks";
import { downloadFile } from "@/app/utils";

export const JobApplication = () => {
  return (
    <Box className={styles.application}>
      <Group ml={"1rem"} gap={4}>
        <IconBriefcase size={36} />
        <Title fw={500} className={badgeMark.className}>
          Documenti per candidature
        </Title>
      </Group>
      <Flex
        className={styles.carousel}
        align={"center"}
        justify={"space-evenly"}
        gap={10}
        p={"1rem"}
      >
        <Paper className={styles.card}>
          <Box className={styles.cardImage_cv} />
          <Box pos={"relative"} style={{ flexGrow: 1 }} p={"0.75rem"}>
            <Group gap={2}>
              <IconFileFilled />
              <Title order={1} fw={500}>
                Curriculum vitae
              </Title>
            </Group>
            <Text
              pl={24}
              className={lightFont.className}
              fw={300}
              size={"1.2rem"}
            >
              Un personale riepilogo, molto sintetico, di quali strumenti
              conosco e le esperienze fatte fino ad oggi
            </Text>
            <Link download href={"/cvMatteo.pdf"} />
            <Button
              className={styles.cardButton}
              radius={"3rem"}
              variant={"outline"}
              onClick={() => downloadFile("/ePortfolio/cvMatteo.pdf")}
            >
              Scarica
            </Button>
          </Box>
        </Paper>
        <Paper miw={700} className={styles.card}>
          <Box className={styles.cardImage_lp} />
          <Box pos={"relative"} style={{ flexGrow: 1 }} p={"0.75rem"}>
            <Group align={"center"} gap={2}>
              <IconMailOpenedFilled />
              <Title lh={"normal"} order={1} fw={500}>
                Lettera di presentazione
              </Title>
            </Group>
            <Text
              pl={24}
              className={lightFont.className}
              fw={300}
              size={"1.2rem"}
            >
              Presentarsi bene è il primo passo verso una buona impressione.{" "}
              <br />
              Perciò ho scritto questa lettera per motivare un possibile datore
              di lavoro ad assumermi
            </Text>
            <Button
              color={"teal"}
              className={styles.cardButton}
              radius={"3rem"}
              variant={"outline"}
              onClick={() =>
                downloadFile("/ePortfolio/Lettera_presentazione.pdf")
              }
            >
              Scarica
            </Button>
          </Box>
        </Paper>
      </Flex>
    </Box>
  );
};
