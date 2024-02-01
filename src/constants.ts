import { ProjectType } from "./types/Types";
export const PROJECTS: ProjectType[] = [
  {
    id: "1",
    title: "Avant",
    mainImage: "../avant/virtual/virtual-avant-1.png",
    virtualImages: [
      "../avant/virtual/virtual-avant-1.png",
      "../avant/virtual/virtual-avant-2.png",
    ],
    tecnicImages: [
      "../avant/planols/planol-avant-1.png",
      "../avant/planols/planol-avant-2.png",
      "../avant/planols/planol-avant-3.png",
      "../avant/planols/planol-avant-4.png",
    ],
    description: `Trabajo para exposición de trabajos de exalumnos. El concepto de l'exposición seria SENCILLEZ, y su nombre hacee referencia a seguir adelante con los conocimientos adquiridos. `,
    category: "interior",
    pdf: "/AVANT.pdf",
    color: "#0183aa",
  },
  {
    id: "2",
    title: "Silla",
    mainImage: "../cadira/real/real-cadira-6.png",
    realImages: [
      "../cadira/real/real-cadira-1.png",
      "../cadira/real/real-cadira-2.png",
      "../cadira/real/real-cadira-3.png",
      "../cadira/real/real-cadira-4.png",
      "../cadira/real/real-cadira-5.png",
    ],
    tecnicImages: [
      "../cadira/planols/planol-cadira-1.png",
      "../cadira/planols/planol-cadira-2.png",
      "../cadira/planols/planol-cadira-3.png",
      "../cadira/planols/planol-cadira-4.png",
    ],
    description: `Silla creada con DM sin utilizar ningun tipo de material adesivo, solo con encajes. `,
    category: "interior",
    pdf: ".../cadira/CADIRA.pdf",
    color: "#1d1d1d",
  },
  {
    id: "3",
    title: "Remodelación Planta CosmoCaixa",
    mainImage: "../cosmocaixa/virtual/virtual-cosmocaixa-5.png",
    virtualImages: [
      "../cosmocaixa/virtual/virtual-cosmocaixa-1.png",
      "../cosmocaixa/virtual/virtual-cosmocaixa-2.png",
      "../cosmocaixa/virtual/virtual-cosmocaixa-3.png",
      "../cosmocaixa/virtual/virtual-cosmocaixa-4.png",
      "../cosmocaixa/virtual/virtual-cosmocaixa-5.png",
    ],
    tecnicImages: [
      "../cosmocaixa/planols/planol-cosmocaixa-1.png",
      "../cosmocaixa/planols/planol-cosmocaixa-2.png",
    ],
    description: `Propuesta de remodelación de una de las plantas de CosmoCaixa. Los hexagonos són elementos protagonistas en el diseño, aportando referencias naturales. `,
    category: "interior",
    pdf: "/COSMOCAIXA.pdf",
    color: "#1d1d1d",
  },
  {
    id: "4",
    title: "Àrea recreativa per a gossos.",
    mainImage: "../habitacola/virtual/virtual-habitacola-11.png",
    virtualImages: [
      "../habitacola/virtual/virtual-habitacola-1.png",
      "../habitacola/virtual/virtual-habitacola-2.png",
      "../habitacola/virtual/virtual-habitacola-3.png",
      "../habitacola/virtual/virtual-habitacola-4.png",
      "../habitacola/virtual/virtual-habitacola-5.png",
      "../habitacola/virtual/virtual-habitacola-6.png",
      "../habitacola/virtual/virtual-habitacola-7.png",
      "../habitacola/virtual/virtual-habitacola-8.png",
      "../habitacola/virtual/virtual-habitacola-9.png",
      "../habitacola/virtual/virtual-habitacola-10.png",
      "../habitacola/virtual/virtual-habitacola-11.png",
      "../habitacola/virtual/virtual-habitacola-12.png",
      "../habitacola/virtual/virtual-habitacola-13.png",
    ],

    description: `La nostra proposta es basa en l'elecció de
    formes orgàniques per a la creació d'un límit
    entre la carretera adjacent i l'interior que no
    només dones solució a l'àrea d'esbarjo per a
    gossos sinó també un espai per a la comunitat veïnal. Això està creat a partir d'uns llistons tant verticals com horitzontals que
    tenen incorporats unes lluminàries per donar
    resposta a la nit. Seguint amb aquest material els altres tres límits se segueix amb la
    proposta de llistons. A l'interior trobaríem
    una sèrie de camins de formigó que et portarien cap a dues places amb una font cadascuna tant per a ús de la mascota com per
    l'amo. Com a vegetació s'ha fet una recerca
    de vegetació autòctona i hem fet una selecció de la natura que voldríem aplicar.`,
    category: "interior",
    pdf: "/HABITACOLA.pdf",
    color: "#1d1d1d",
    video: "../public/habitacola/Cal mero.mp4",
  },
  {
    id: "5",
    title: "Lluèrnia",
    mainImage: "../lluernia/planols/planol-lluernia-1.png",
    virtualImages: [
      "../lluernia/virtual/virtual-lluernia-1.png",
      "../lluernia/virtual/virtual-lluernia-2.png",
    ],
    tecnicImages: ["../lluernia/planols/planol-lluernia-1.png"],
    realImages: [
      "../lluernia/real/real-lluernia-1.png",
      "../lluernia/real/real-lluernia-2.png",
      "../lluernia/real/real-lluernia-3.png",
      "../lluernia/real/real-lluernia-4.png",
      "../lluernia/real/real-lluernia-5.png",
      "../lluernia/real/real-lluernia-6.png",
      "../lluernia/real/real-lluernia-7.png",
    ],
    description: `Volem visibilitzar algo tan obvi com el pas del temps.
    Sempre creiem que tenim temps per fer tot el que volem i a vegades ho deixem per un dia que potser no arriba mai.
    Però a vegades, a certes persones els hi falta per fer tot el que es proposen.
    Amb la nostra intervenció volem crear un recorregut unint el terra i la paret, mostrant així les baixades i pujades que tenim durant la vida. La corda
    serà la que ens mostrarà el camí i el foc el pas del temps.
    Aquesta intervenció està molt relacionada amb l’espai gràcies a la corda que ens relaciona l’intervenció amb el rocòdrom situat en aquesta
    ubicació.`,
    category: "exterior",
    pdf: "/LLUERNIA.pdf",
    color: "#ffe001",
  },
];
