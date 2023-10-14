"use client";
import { Box, Divider, Grid, GridCol, Space, Title } from "@mantine/core";
import Navbar from "./navbar";
import styles from "./HomePage.module.css";
import { useState } from "react";
import { title } from "../fonts";
import OpenDescription from "./OpenDescription";

const HomePage = () => {
  const [activeTab, setActivetab] = useState<string>("");

  return (
    <>
      <Navbar activeTab={activeTab} setActivetab={setActivetab} />
      <Grid pt={20} gutter={0} pos={"relative"} p={0} h={"100vh"}>
        <GridCol pos={"relative"} h={"100%"} span={7}>
          <Box className={styles.title}>
            <Title fz={64} className={title.className} tt={"uppercase"}>
              Matteo Bianchi
            </Title>
            <Divider
              style={styles}
              labelPosition="center"
              label="portfolio"
              variant="solid"
              size={"sm"}
              color="gray.5"
              mt={16}
              c={"white"}
            />
          </Box>
        </GridCol>
        <GridCol pos={"relative"} h={"100%"} span={5}>
          <Space h={75} />
          <OpenDescription />
        </GridCol>
      </Grid>
    </>
  );
};

export default HomePage;
