interface IProject {
  name: string
  description?: string
  link: string
  image: any
  imageAlt: string
}

import defaultImage from "../assets/default.png"
import igNews from "../assets/ignews.png"

export const projects: IProject[] = [
  {
    name: "Vale Luz",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/valeluz",
  },
  {
    name: "Coffee Delivery",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/coffeedelivery",
  },
  {
    name: "ig News",
    description: "",
    image: igNews.src,
    imageAlt: "",
    link: "/projects/ignews",
  },
  {
    name: "Habits Track",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/habitstrack",
  },
  {
    name: "e-sports duo",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/sportsduo",
  },
  {
    name: "Blood Donation",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/blooddonation",
  },
  {
    name: "Plant Care",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/plantcare",
  },
  {
    name: "Delivery Now",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/deliverynow",
  },
  {
    name: "World Cup Bet",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/cupbet",
  },
  {
    name: "Pergunta Ai",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/perguntaai",
  },
  {
    name: "Go Barber",
    description: "",
    image: defaultImage.src,
    imageAlt: "",
    link: "/projects/gobarber",
  },
]
