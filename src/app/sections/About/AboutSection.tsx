"use client";
import Drawer from "@/app/components/Drawer/Drawer";
import { Text } from "@mantine/core";
import styles from "./AboutSection.module.css";
import commonStyles from "../common.module.css";
import { badgeMark } from "../../fonts";

const About = () => {
  return (
    <Drawer
      navigationTrigger="about"
      title={
        <Text className={`${commonStyles.title} ${badgeMark.className}`}>
          <span className={commonStyles.capital}>A</span>bout
        </Text>
      }
    >
      AAAAAAAAAAAAAAAAA
    </Drawer>
  );
};
export default About;
