import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import { badgeMark } from "@/app/fonts";
import { Flex, Text } from "@mantine/core";
import Marquee from "react-fast-marquee";

const MeSection = () => {
  return (
    <Drawer
      title={
        <Text className={`${commonStyles.title} ${badgeMark.className}`}>
          <span className={commonStyles.capital}>M</span>e...
        </Text>
      }
      navigationTrigger={"me..."}
    >
      <Marquee style={{ borderBottom: "1px solid gainsboro" }}>
        <Flex mx={"15vw"} gap={"15vw"} fz={"1.25rem"} fw={"bold"}>
          <span>#OPENTOWORK</span> <span>#APERTOALAVORARE</span>{" "}
          <span>#OUVERTAUTRAVAIL</span>
          <span>#OFFENFÜRARBEIT</span>
        </Flex>
      </Marquee>
      Ciao
    </Drawer>
  );
};
export default MeSection;
