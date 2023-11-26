import {
  IconBulb,
  IconCat,
  IconGlassFullFilled,
  IconHammer,
  IconPhone,
  IconSchool,
  IconStars,
  IconTestPipe,
  IconUsers,
  TablerIconsProps,
} from "@tabler/icons-react";

export interface ISkillGraph {
  [key: string]: {
    value: number;
    color: string;
    tooltip?: React.ReactNode;
  }[];
}

export type ISkill = {
  label: string;
  stats: string;
  progress: number;
  color: string;
  icon: (props: TablerIconsProps) => JSX.Element;
};

type ISkills = {
  title: string;
  description: string;
  skills: ISkill[];
}[];

export const skill_resume = [
  {
    title: "Hard skills",
    description:
      'Un riepilogo sintetico delle "skills" tecnice acquisite riguardo la programmazione e lo sviluppo',
    skills: [
      {
        label: "Testing",
        stats: "70%",
        progress: 70,
        color: "#15f113",
        icon: IconTestPipe,
      },
      {
        label: "Clean code",
        stats: "80%",
        progress: 80,
        color: "#03dffc",
        icon: IconStars,
      },
      {
        label: "Responsive",
        stats: "75%",
        progress: 75,
        color: "#ffb452",
        icon: IconPhone,
      },
      {
        label: "Best practise",
        stats: "100%",
        progress: 100,
        color: "#ff52ae",
        icon: IconHammer,
      },
    ],
  },
  {
    title: "Soft skills",
    description:
      "Un insieme di abilità imparate al di là della programmazione in se, rafforzate dal lavoro nei vari anni",
    skills: [
      {
        label: "Agile",
        stats: "90%",
        progress: 90,
        color: "#7892eb",
        icon: IconCat,
      },
      {
        label: "Team work",
        stats: "100%",
        progress: 100,
        color: "#c354ff",
        icon: IconUsers,
      },
      {
        label: "Pensiero critico",
        stats: "90%",
        progress: 90,
        color: "#a8aeb3",
        icon: IconGlassFullFilled,
      },
      {
        label: "Problem Solving",
        stats: "100%",
        progress: 100,
        color: "#FFD024",
        icon: IconBulb,
      },
      {
        label: "Iniziativa",
        stats: "80%",
        progress: 80,
        color: "#f02450",
        icon: IconSchool,
      },
    ],
  },
] as ISkills;
