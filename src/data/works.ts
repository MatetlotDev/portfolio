export type Work = {
  title: string;
  subTitle: string;
  description: string;
  image: string | null;
  role: string;
  url?: string;
  year?: string;
  technologies?: string[];
  status?: string;
  category?: string;
};

export const works: Work[] = [
  {
    title: "Urban Boulder",
    subTitle: "The #1 app for urban buildering.",
    description: "Find boulders, create, log, share beta and find communities.",
    image: "/urban-boulder.jpg",
    role: "Founder",
    url: "https://urban-boulder.app",
  },
  {
    title: "Wikly Food",
    subTitle: "Still in construction",
    description:
      "The only food planner AI you need to eat better, gain time, and save budget.",
    image: "/wikly-food.jpg",
    role: "Founder",
    url: "https://wikly.food"
  },
  {
    title: "Racclimb",
    subTitle: "E-commerce nutrition brand dedicated for climbers.",
    description: "",
    image: "/racclimb.jpg",
    role: "Founder",
    url: "https://racclimb.com",
  },
  {
    title: "Kodama Px",
    subTitle:
      "Non-profit organization developing nature prescriptions as a complementary approach to health promotion.",
    description: "",
    image: "/kodama.jpg",
    role: "Web Developer",
    url: "https://kodamapx.com",
  },
  {
    title: "Famoco",
    subTitle:
      "Company providing secure mobile solutions to help businesses manage operations, payments, identification and connected devices.",
    description: "",
    image: "/famoco.jpg",
    role: "Front-end Developer",
    url: "https://www.famoco.com",
  },
];
