import { FaPython, FaJava, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiCplusplus, SiJavascript, SiDotnet } from "react-icons/si";

export const DATA = {
  name: "Olly Bayley",
  title: "Organic Chemist • Backend Developer",
  location: "Amsterdam, NL",
  email: "ombayley@uva.nl",
  links: {
    github: "https://github.com/ombayley",
    linkedin: "https://www.linkedin.com/in/ollybayleynz/",
    resume: "docs/obayley_cv.pdf",
    phdThesis: "/docs/obayley_phd_thesis.pdf",
    mastersThesis: "/docs/obayley_masters_thesis.pdf",
  },
  blurb:
    "A Post-Doctoral Researcher at the University of Amsterdam (NRG) with a focus on chemical synthesis, hardware automation and autmoarted data analysis. ",
  highlights: [
    { label: "yrs chem", value: 10 },
    { label: "yrs code", value: 2 },
    { label: "education", value: "PhD" },
  ],
skills: [
  { name: "Python", icon: <FaPython className="w-5 h-5" /> },
  { name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
  { name: "C#", icon: <SiDotnet className="w-5 h-5" /> },
  { name: "Java", icon: <FaJava className="w-5 h-5" /> },
  { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-5 h-5" /> },
],
  about:[
    "Orginally a pure chemist, my focus has been on natural product total synthesis and drug development (NZ - Masters + Industry). After a few years of this I moved to Molecular Machine research (UK - PhD) and subsequently to chemical automation (Netherlands - Post-Doc)."
  ],
  projects: [
    {
      name: "ChromTroller",
      tagline: "Automated Hardware Control and Chemical Data Analysis",
      description:
        "Automated control and analysis software to automate the collection and analysis of UV data from an Agilent 1290 UPLC running on the closed OpenLab software",
      stack: ["Python", "C++", "Arduino", "OpenLab CDS"],
      repo: "https://github.com/ombayley/ChromTroller",
    },
    {
      name: "RoboChem",
      tagline: "Automated self-optimizing reaction platform",
      description:
        "RoboChem is an automated, self-optimizing reaction platform designed for the automated optimisation of flow reactions. This system integrates an AI-driven package with an automated hardware platform to perform reaction optimization.",
      stack: ["Python", "C++", "Arduino", "PyTorch (BoTorch)", "pydantic"],
      repo: "https://github.com/Noel-Research-Group/RoboChem_1",
    },
    {
      name: "Personal Website",
      tagline: "Personal Website",
      description:
        "Personal website built with Next.js and Tailwind CSS. Hosted on Vercel.",
      stack: ["Next.js", "Tailwind CSS", "TypeScript"],
      repo: "https://github.com/yourname/website",
    },
    {
      name: "UPLC Data Analyser GUI",
      tagline: "GUI Application for automated analysis of Agilen OpenLab CDS raw data",
      description:
        "The UPLC Data Analyser is a GUI application designed to open and analyse chromatogram data stored in Agilent's proprietary .dx files. This application utilizes CustomTKinter for the user interface and Matplotlib+seaborn for plotting the chromatogram data. ",
      stack: ["Python", "(Custom)Tkinter", "Matplotlib", "Seaborn"],
      repo: "https://github.com/ombayley/UPLC_Data_Analyser",
    },
  ],
  experience: [
    {
      company: "University of Amsterdam (UvA)",
      location: "Amsterdam, NL",
      role: "Postdoc",
      period: "Nov 2023 — Present",
      summary:
        "Research on the automation of chemical reaction development",
      bullets: [
        "Designed new hardware for reaction execution at 100th of the price of commercial systems",
        "Developed new software tools for the automated analysis of HPLC, Mass Spec, NMR and UV chromatograms and spectra",
        "Built high-level control architecture to drive autonomous reaction systems",
        "Wrote low-level control software to automate mechanical and robotinc components"
      ],
    },
    {
      company: "University of Auckland Cancer Society Research Centre (ACSRC)",
      location: "Auckland, NZ",
      role: "Post Graduate Research Assistant",
      period: "Jun 2019 — Dec 2019",
      summary:
        "Gram scale synthesis of anti-cancer compounds for the Faculty of Medicine and Health Science at the Auckland Cancer Society Research Centre",
      bullets: [
        "Convergant 20-Step (total step count) Synthesis",
        ">5g of final products",
        "Material used in pre-clinical trials"
      ],
    },
    {
      company: "Victoria University of Wellington",
      location: "Remote",
      role: "Post Graduate Research Assistant",
      period: "May 2019 - Jul 2019",
      summary:
        "Review and edit schemes for a book chapter",
      bullets: [
        ">100 Schemes",
        "Simple templating integration",
      ],
    },
        {
      company: "Callaghan Innovation",
      location: "Wellington, NZ",
      role: "Research Assistant",
      period: "Nov 2016 - Mar 2017",
      summary:
        "Project at a CRI (Crown Research Institute) focusing on nano/microencapsulation of nutraceutical oils",
      bullets: [
        "Introduction to nanoencapsualtion techniques",
      ],
    },
  ],
  education: [
    { 
      school: "University of Bristol",
      location: "Bristol, UK",
      program: "PhD, Chemistry",
      period: "Mar 2020 - Feb 2024",
      summary: "Development of A New Class of Molecular Machine: Light-Fuelled Single-Bond Rotors",
      file: "/docs/obayley_phd_thesis.pdf"
    },
    { 
      school: "Victoria University of Wellington",
      location: "Wellington, NZ",
      program: "Master of Drug Discovery and Development",
      period: " Feb 2018 - May 2019",
      summary: "Synthesis of Novel Pyran Fragments to Incorporate into Peloruside Analogues",
      file: "/docs/obayley_masters_thesis.pdf"
    },
    { 
      school: "Victoria University of Wellington",
      location: "Wellington, NZ",
      program: "Bachelor of Biomedical Science",
      period: "Feb 2015 - May 2018",
      summary: "Major in Molecular Pharmacology and Medicinal Chemistry"
    }
  ],
};