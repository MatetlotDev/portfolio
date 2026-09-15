export type Service = {
  title: string;
  description: string;
  technologies?: string[];
  starting_price?: string;
  cta?: string;
};

export const services: Service[] = [
  {
    title: "Web development",
    description:
      "Websites & web apps built to fit your needs. React, Next.js, Vue, WordPress — from a simple website to a more complex web application.",
  },
  {
    title: "E-commerce",
    description:
      "Build, improve or maintain your online store. Shopify and custom e-commerce solutions, from setup and development to improvements and integrations.",
  },
  {
    title: "MVP & product development",
    description:
      "Turn an idea into a working product. I help shape, build and launch web-based MVPs, from the first idea to a usable product.",
  },
];
