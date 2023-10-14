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
// Il mio nome è Matteo Bianchi.
//       <br />
//       Dal 2022 a questa parte sto dedicando me stesso nel diventare un web
//       developer a tutto tondo, dal front end al back end.
//       <br />
//       Ho avuto modo di utilizzare tecnologie più o meno avanzate in questi anni.
//       Dal percorso scolastico in C# ai progetti seguiti per lavoro in Kotlin o
//       React. Questo sito è il mio personale portfolio... creato grazie alle mie
//       conoscenze di UX/UI e di sviluppo.
//       <Space h={16} />
//       Se sei interessato naviga pure tra le sezioni, lì racconto cosa so e quali
//       strumenti utilizzo ogni giorno...
