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
    title: "Personal Website",
    description:
      "Link to the public GitHub repository for my personal website.",
    image: "assets/project-img/personal-website.png",
    imgAlt: "Personal Website",
    date: "2025",
    link: "https://github.com/ashtonpowell/personal-website",
  },
  {
    id: 2,
    type: "project",
    discipline: "compSci",
    title: "Secure Password Manager",
    description:
      "Link to the public GitHub repository for the Secure Password Manager project.",
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
      "Link to the public GitHub repository for the Drug Shortages project.",
    image: "assets/project-img/openfda.png",
    imgAlt: "Drug Shortages Project",
    date: "2025",
    link: "https://github.com/ashtonpowell/drug-shortage-tracker",
  },
  {
    id: 4,
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
