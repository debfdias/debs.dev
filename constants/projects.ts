interface IProject {
  name: string
  description?: string
  link: string
  image: any
  imageAlt: string
}

import barbershop from "../assets/barbershop.png"
import blooddonate from "../assets/blooddonate.png"
import coffeedelivery from "../assets/coffeedelivery.png"
import esport from "../assets/esport.png"
import habits from "../assets/habits.png"
import igNews from "../assets/ignews_.png"
import perguntaai from "../assets/perguntaai.png"
import plantcare from "../assets/plantcare.png"
import valeluz from "../assets/valeluz_.png"

export const projects: IProject[] = [
  {
    name: "Vale Luz",
    description: "",
    image: valeluz.src,
    imageAlt: "",
    link: "/projects/valeluz",
  },
  {
    name: "ig News",
    description: "",
    image: igNews.src,
    imageAlt: "",
    link: "/projects/ignews",
  },
  {
    name: "e-sports duo",
    description: "",
    image: esport.src,
    imageAlt: "",
    link: "/projects/sportsduo",
  },
  {
    name: "Pergunta Ai",
    description: "",
    image: perguntaai.src,
    imageAlt: "",
    link: "/projects/perguntaai",
  },
  {
    name: "Plant Care",
    description: "",
    image: plantcare.src,
    imageAlt: "",
    link: "/projects/plantcare",
  },
  {
    name: "Coffee Delivery",
    description: "",
    image: coffeedelivery.src,
    imageAlt: "",
    link: "/projects/coffeedelivery",
  },
  {
    name: "Blood Donation",
    description: "",
    image: blooddonate.src,
    imageAlt: "",
    link: "/projects/blooddonation",
  },
  {
    name: "Habits Track",
    description: "",
    image: habits.src,
    imageAlt: "",
    link: "/projects/habitstrack",
  },
  {
    name: "Barber Time",
    description: "",
    image: barbershop.src,
    imageAlt: "",
    link: "/projects/barbershop",
  },
]
