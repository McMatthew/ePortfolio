import { Box, MantineStyleProp } from "@mantine/core";
import styles from "./ReactImage.module.css";

const ReactImage = ({ style }: { style: MantineStyleProp }) => {
  return (
    <Box style={style} className={styles.container}>
      <Box className={styles.night} mx={12}>
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
        <Box className={styles.star} />
      </Box>
    </Box>
  );
};
export default ReactImage;
