"use client";
import {
  Box,
  Button,
  Flex,
  Group,
  Paper,
  Stack,
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
import { downloadFile } from "@/app/utils";

export const JobApplication = () => {
  return (
    <Box className={styles.application}>
      <Group ml={"1rem"} gap={4}>
        <IconBriefcase size={36} />
        <Title order={3} fw={500} className={badgeMark.className}>
          Documenti per candidature
        </Title>
      </Group>
      <Flex
        className={styles.carousel}
        justify={"space-evenly"}
        gap={10}
        p={"1rem"}
      >
        <Paper className={styles.card}>
          <Box className={styles.cardImage_cv} />
          <Box pos={"relative"} style={{ flexGrow: 1 }} m={"0.75rem"}>
            <Group gap={2}>
              <IconFileFilled size={20} />
              <Title order={5} fw={500}>
                Curriculum vitae
              </Title>
            </Group>
            <Stack h={"calc(100% - 1.50rem)"} gap={0}>
              <Text
                ta={"left"}
                pl={24}
                className={lightFont.className}
                fw={300}
                fz={14}
                style={{ flexGrow: 1 }}
              >
                Un personale riepilogo, molto sintetico, di quali strumenti
                conosco e le esperienze fatte fino ad oggi
              </Text>
              <Link download href={"/cvMatteo.pdf"} />
              <Flex w={"100%"} justify={"flex-end"}>
                <Button
                  radius={"3rem"}
                  variant={"outline"}
                  onClick={() => downloadFile("/ePortfolio/cvMatteo.pdf")}
                >
                  Scarica
                </Button>
              </Flex>
            </Stack>
          </Box>
        </Paper>
        <Paper miw={100} className={styles.card}>
          <Box className={styles.cardImage_lp} />
          <Box pos={"relative"} style={{ flexGrow: 1 }} p={"0.75rem"}>
            <Group align={"center"} gap={2}>
              <IconMailOpenedFilled size={20} />
              <Title order={5} lh={"normal"} fw={500}>
                Lettera di presentazione
              </Title>
            </Group>
            <Stack h={"calc(100% - 1.50rem)"} gap={0}>
              <Text
                ta={"left"}
                pl={24}
                className={lightFont.className}
                fw={300}
                fz={14}
                style={{ flexGrow: 1 }}
              >
                Presentarsi bene è il primo passo verso una buona impressione.
                <br />
                Perciò ho scritto questa lettera per motivare un possibile
                datore di lavoro ad assumermi
              </Text>
              <Flex justify={"flex-end"}>
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
              </Flex>
            </Stack>
          </Box>
        </Paper>
      </Flex>
    </Box>
  );
};
