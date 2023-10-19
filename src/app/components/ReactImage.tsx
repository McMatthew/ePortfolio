import { Box } from "@mantine/core";
import styles from "./ReactImage.module.css";

const ReactImage = () => {
  return (
    <Box className={styles.container}>
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
