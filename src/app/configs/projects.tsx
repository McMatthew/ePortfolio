import { StaticImport } from "next/dist/shared/lib/get-img-props";
import sgc from "../../img/sida.svg";
import isis from "../../img/isis.jpg";

export enum BADGE_LABELS {
  Js = "JS",
  React = "React",
  Kotlin = "Kotlin",
  NoSql = "NoSQL",
  Sql = "SQL",
  Rest = "REST",
  Quarkus = "Quarkus",
  Kube = "Kube",
  Aws = "AWS",
  Fire = "Firebase",
  Redux = "Redux",
  Next = "Next",
}

export interface Project {
  title: string;
  description: string | React.ReactElement;
  badgeList: BADGE_LABELS[] | [];
  img?: string | StaticImport;
}

export const Projects: Project[] = [
  {
    title: "Cloud Web App",
    description: (
      <>
        Una potente app cloud per la gestione della autoscuola, dagli
        appuntamenti coi candidati alla contabilità.
        <br />
        La architettura Kubernetes, il client React, il backend Kotlin e le
        interfacce REST gli permettono di sfruttare le migliori ottimizzazione e
        le più moderne tecnologie per svolgere molto efficaciemente ogni
        operazione
      </>
    ),
    img: sgc,
    badgeList: [
      BADGE_LABELS.Kotlin,
      BADGE_LABELS.Kube,
      BADGE_LABELS.Quarkus,
      BADGE_LABELS.React,
      BADGE_LABELS.Aws,
      BADGE_LABELS.Rest,
    ],
  },
  {
    title: "Messaging App",
    description: (
      <>
        Una app di messaggi volta al riunire tutte le comunicazioni da diversi
        protocolli di comunicazione (mail, messaggi e WhatsApp).
        <br />
        Creata utilizzando un frontend React con NextJS e Redux per le REST
        Apis.
      </>
    ),
    img: sgc,
    badgeList: [BADGE_LABELS.React, BADGE_LABELS.Redux, BADGE_LABELS.Next],
  },
  {
    title: "Controllo simulatore",
    description: (
      <>
        Un'interfaccia in Electron capace di comunicare con un simulatore di
        guida per stipulare un "report" sul candidato. <br />
        L'app ha lo scopo di creare un report per il medico che valuta il
        candidato che esegue la prova, se è idoneo alla guida pur avendo
        disabilità.
      </>
    ),
    img: sgc,
    badgeList: [BADGE_LABELS.React, BADGE_LABELS.Redux, BADGE_LABELS.Next],
  },
  {
    title: "Surveys platform - SONDA",
    description: (
      <>
        Il mio ultimo progetto scolastico, portato in prova orale alla maturità.
        Come primo progetto indipendente ovviamente non utilizza grandi
        tecnologie, ma è servito sopratutto per imparare ad utilizzare SQL e ad
        apprendere come strutturare un diagramma ER efficiente.
        <br />
        Lo ho voluto inserire un pò per ricordo e un pò per amore verso il
        progetto.
      </>
    ),
    img: isis,
    badgeList: [BADGE_LABELS.Sql, BADGE_LABELS.Js],
  },
];
