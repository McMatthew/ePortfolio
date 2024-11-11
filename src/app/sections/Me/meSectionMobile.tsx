import React from "react";
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
import { badgeMark, lightFont, neon } from "@/fonts/fonts";
import Link from "next/link";
import { downloadFile } from "@/app/utils";
import { contacts } from "@/app/configs/contacts";
import { SocialPlate } from "@/app/sections/Me/components/socialPlate";

const MeSectionMobile = () => {
  return (
    <Box mt={16}>
      <Box className={styles.application}>
        <Group ml={"0.8rem"} gap={4}>
          <IconBriefcase color={"white"} size={18} />
          <Title order={4} c={"white"} fw={500} className={badgeMark.className}>
            Documenti per candidature
          </Title>
        </Group>
        <Paper m={16} miw={0} mih={0} className={styles.card}>
          <Box mih={100} className={styles.cardImage_cv} />
          <Box pos={"relative"} style={{ flexGrow: 1 }} p={"0.75rem"}>
            <Group c={"gray.2"} gap={2}>
              <IconFileFilled size={18} />
              <Title order={5} fw={500}>
                Curriculum vitae
              </Title>
            </Group>
            <Text
              pl={24}
              className={lightFont.className}
              fw={300}
              c={"gray.3"}
              size={"0.8rem"}
              mb={50}
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
        <Paper m={16} miw={0} mih={0} className={styles.card}>
          <Box mih={100} className={styles.cardImage_lp} />
          <Box pos={"relative"} style={{ flexGrow: 1 }} p={"0.75rem"}>
            <Group c={"gray.2"} gap={2}>
              <IconMailOpenedFilled size={18} />
              <Title order={5} fw={500}>
                Lettera di presentazione
              </Title>
            </Group>
            <Text
              pl={24}
              className={lightFont.className}
              fw={300}
              c={"gray.3"}
              size={"0.8rem"}
              mb={50}
            >
              Un personale riepilogo, molto sintetico, di quali strumenti
              conosco e le esperienze fatte fino ad oggi
            </Text>
            <Link download href={"/Lettera_presentazione.pdf"} />
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
      </Box>
      <Paper mt={16} h={"100%"} className={styles.contacts}>
        <Flex h={"100%"} direction={"column"}>
          <Title order={4} className={badgeMark.className}>
            Contatti
          </Title>
          <Text mb={"1.5rem"} fz={`clamp(0.8em, 2vw, 1.5em)`}>
            Non esitare a contattarmi, per qualunque informazione su di me o su
            delle opportunità da propormi
          </Text>
          <Flex justify={"space-evenly"} w={"100%"}>
            {contacts.map(({ url, icon, siteName }) => (
              <Link key={siteName} href={url}>
                <Box>{icon}</Box>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Paper>
    </Box>
  );
};

export default MeSectionMobile;
