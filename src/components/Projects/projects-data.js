/*
type, title, description, image, imgAlt
type - project, publication
discipline - compSci, pharmacy, chemistry
*/

const projectData = [
  {
    id: 1,
    type: "project",
    discipline: "compSci",
    title: "Portfolio Website",
    description:
      "The website you're on now! Used to share my experience, skills, and works.",
    image: "assets/project-img/personal-website.png",
    imgAlt: "Portfolio Website",
    date: "2025",
    link: "https://github.com/ashtonpowell/personal-website",
  },
  {
    id: 2,
    type: "project",
    discipline: "compSci",
    title: "Secure Password Manager",
    description:
      "A browser application that allows users to safely store all their login credentials for different websites/apps in one place.",
    image: "assets/project-img/secure-password.png",
    imgAlt: "Secure Password Manager",
    date: "2025",
    link: "https://github.com/ashtonpowell/secure-password-manager",
  },
  {
    id: 3,
    type: "project",
    discipline: "compSci",
    title: "Drug Shortages",
    description:
      "Link to the public GitHub repository for the Drug Shortages project. (Work in Progress)",
    image: "assets/project-img/openfda.png",
    imgAlt: "Drug Shortages Project",
    date: "2025",
    link: "https://github.com/ashtonpowell/drug-shortage-tracker",
  },
  {
    id: 4,
    type: "project",
    discipline: "compSci",
    title: "RDT Python Simulation",
    description:
      "A Python-based simulation of a Reliable Data Transfer (RDT) protocol over an unreliable network channel.",
    image: "assets/project-img/rdt.png",
    imgAlt: "RDT Python Simulation",
    date: "2025",
    link: "https://github.com/ashtonpowell/rdt-python-simulation",
  },
  {
    id: 5,
    type: "project",
    discipline: "compSci",
    title: "ChessVar",
    description:
      "A Python implementation of a chess variant game with custom rules and pieces.",
    image: "assets/project-img/chess-var.png",
    imgAlt: "ChessVar",
    date: "2025",
    link: "https://github.com/ashtonpowell/chess-variant",
  },
  {
    id: 6,
    type: "project",
    discipline: "chemistry",
    title: "Undergraduate Research Thesis Project",
    description:
      "Enhancing the reprocessing of spent nuclear fuel; ways to recycle and reuse materials from the fission process",
    image: "assets/project-img/chemistry-research-project.png",
    imgAlt: "Undergraduate Research Thesis Project",
    date: "2016",
    link: "/assets/undergraduate-thesis.pdf",
  },
];

export default projectData;
