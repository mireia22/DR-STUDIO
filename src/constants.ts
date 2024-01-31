import { v4 as uuidv4 } from "uuid";
import { ProjectType } from "./types/Types";
export const PROJECTS: ProjectType[] = [
  {
    id: uuidv4(),
    title: "Lluèrnia",
    mainImage: "../foc.png",
    images: ["/1.png", "/2.png", "/3.png"],
    description: `Lluèrnia 2022 💛🔥 VÖLK

    Instal·lació feta per @ariruni @noeeliia.23 i jo, amb l'ajuda de els companys de classe de @eadreus
    
    És una instal·lació que vol representar el pas de la vida. Fent referència a tots els alt i baixos que passem durant la nostra vida. El foc vol simbolitzar que mentre es manté encès la persona és viva.`,
  },
  {
    id: uuidv4(),

    title: "Tesla Event",
    mainImage: "/tesla.png",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),

    title: "Interior Home Design",
    mainImage: "/interior.png",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),

    title: "Television Plate",
    mainImage: "/platon.png",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),

    title: "Open Spaces",
    mainImage: "/efimera.png",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),
    title: "COMING SOON",
    mainImage: "",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),
    title: "COMING SOON",
    mainImage: "",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),

    title: "COMING SOON",
    mainImage: "",
    images: [],
    description: "",
  },
  {
    id: uuidv4(),

    title: "COMING SOON",
    mainImage: "",
    images: [],
    description: "",
  },
];
