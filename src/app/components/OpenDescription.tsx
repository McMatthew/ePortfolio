import { Box, Divider, Space } from "@mantine/core";
import Image from "next/image";
import code from "../../img/mb.png";
import styles from "./OpenDescription.module.css";

const OpenDescription = () => {
  return (
    <Box mx={12}>
      <Image alt="code" className={styles.image} src={code} />
    </Box>
  );
};
export default OpenDescription;
