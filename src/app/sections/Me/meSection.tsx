import Drawer from "@/app/components/Drawer/Drawer";
import commonStyles from "@/app/sections/common.module.css";
import { badgeMark } from "@/app/fonts";
import { Text } from "@mantine/core";

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
      Ciao
    </Drawer>
  );
};
export default MeSection;
