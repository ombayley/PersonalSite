import { FaPython, FaRust, FaGolang } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { Brain, ChartLine, GitBranch, Cpu, FlaskConical, Bot } from "lucide-react";

export const DATA = {
  name: "Dr. Olly Bayley",
  title: "Research Engineer • ML and Embedded Systems",
  location: "Auckland, NZ",
  target_location: "Auckland, NZ",
  email: "ollybayley1@gmail.com",
  links: {
    github: "https://github.com/ombayley",
    linkedin: "https://www.linkedin.com/in/ollybayleynz/",
    resume: "docs/obayley_cv.pdf",
    phdThesis: "/docs/obayley_phd_thesis.pdf",
    mastersThesis: "/docs/obayley_masters_thesis.pdf",
  },
  blurb:
    "A Kiwi Researcher with an interest in hardware automation, machine learning and chemical synthesis.",
  skills: {
    languages: [
      { name: "Python", level: "Primary", icon: <FaPython className="w-5 h-5" /> },
      { name: "C++", level: "Arduino / embedded", icon: <SiCplusplus className="w-5 h-5" /> },
      { name: "Rust", level: "Bare-metal, Embassy", icon: <FaRust className="w-5 h-5" /> },
      { name: "Go", level: "Familiar", icon: <FaGolang className="w-5 h-5" /> },
    ],
    groups: [
      {
        name: "Machine learning",
        icon: <Brain className="w-5 h-5" />,
        items: [
          "Bayesian optimisation (BoTorch)", "Gaussian processes", "Multi-objective & transfer learning",
          "XGBoost", "scikit-learn (RF, SVM, KNN, PLS, MLP)", "PyTorch & Lightning", "Optuna",
        ],
      },
      {
        name: "Data",
        icon: <ChartLine className="w-5 h-5" />,
        items: [
          "pandas", "NumPy", "SciPy", "Noisy 1D/2D signal pipelines", "Time-series instrument data",
          "matplotlib", "seaborn", "TensorBoard",
        ],
      },
      {
        name: "Software engineering",
        icon: <GitBranch className="w-5 h-5" />,
        items: [
          "Git", "GitHub Actions (CI)", "pytest", "Pydantic", "Hydra", "MkDocs + GitHub Pages",
          "PyQt", "Streamlit", "tkinter",
        ],
      },
      {
        name: "Hardware & robotics",
        icon: <Cpu className="w-5 h-5" />,
        items: [
          "C++ firmware (Arduino)", "Bare-metal Rust (RP2350)", "KiCad PCB design", "Klipper / Moonraker",
          "Raspberry Pi + STM32", "CAD (Autodesk Inventor)", "FDM 3D printing",
        ],
      },
      {
        name: "Cheminformatics & lab automation",
        icon: <FlaskConical className="w-5 h-5" />,
        items: [
          "RDKit", "Molecular descriptors", "ECFP/FCFP fingerprints", "HPLC", "UV-Vis", "MS", "NMR",
        ],
      },
      {
        name: "AI tools",
        icon: <Bot className="w-5 h-5" />,
        note: "Used daily for development, refactoring and code review",
        items: ["Claude Code", "Codex", "Windsurf"],
      },
    ],
  },
  // kind: "award" | "competition" | "scholarship" | "honour"
  awards: [
    { year: "2026", kind: "award", title: "RSC Poster Award", event: "Flow Chemistry Europe, Málaga" },
    { year: "2023", kind: "award", title: "Best Poster Award", event: "RSC 27th International Symposium, University of Oxford" },
    { year: "2023", kind: "award", title: "Best Talk Award", event: "ECR MASC Meeting, Francis Crick Institute, London" },
    { year: "2023", kind: "award", title: "Best Talk Award", event: "Final-Year Chemistry PhD Talks, University of Bristol" },
    { year: "2023", kind: "award", title: "Best Poster Award", event: "RSC South-West Meeting, University of Reading" },
    { year: "2021", kind: "competition", title: "Top 15 of 243 teams", event: "Annual Merck Compound Challenge" },
    { year: "2019", kind: "award", title: "Best Talk (Runner-up) Award", event: "VUW–Massey PGR Chemistry Symposium" },
    { year: "2018", kind: "scholarship", title: "Master's by Thesis Scholarship", event: "Te Herenga Waka – Victoria University of Wellington" },
    { year: "2016", kind: "scholarship", title: "Ngāti Kahungunu Iwi Scholarship", event: "Ngāti Kahungunu Iwi" },
    { year: "2015", kind: "honour", title: "Dean's List", event: "Victoria University of Wellington" },
  ],
  invitedTalks: ["Big Chem NL, Groningen", "UvA–Max Planck Symposium"],
  about:[
    "Trained as an organic synthetic chemist, my Masters (VUW - NZ) and industry work (ACSRC - NZ) focused on total synthesis and drug development. " +
    "I then moved to the UK (Bristol) to do my PhD focusing on the development of new Molecular Machines. Having spent considerable time building custom " +
    "analytical devices for the PhD, I subsequently moved to Amsterdam (The Netherlands) to focus on chemical automation (Post-Doc). " +
    "For the last three years I have designed self-driving laboratories where Bayesian optimisation (BO) agents choose experiment " +
    "conditions, custom-built hardware runs it, and automated data pipelines turn the raw instrument data into the next " +
    "training point. This work has produced three platforms (see publication list) and industrial collaborations with Novo " +
    "Nordisk, Covestro and Symeres. Having spent 3 years covering the full stack of theses systems, I'm now looker to delve deeper into " +
    "the embedded systems and machine learning elements."
  ],
  projects: [
    {
      name: "ChemRover",
      tagline: "MConfig-driven ML benchmark (8 models, Hydra/Optuna, RDKit) predicting azobenzene absorption maxima (R² ≈ 0.92).",
      description:
        "ML Prediction of azobenzene properties. To be paired with ChemKlipper for predictive exploration as a part of a research project",
      stack: ["Python","Scikit-Learn", "XGBoost", "Hydra", "optuna", "RDkit", "jupyter notebooks"],
      repo: "https://github.com/ombayley/ChemRover",
    },
      {
      name: "ChemKlipper",
      tagline: "Async Python control layer for a low-cost Klipper liquid-handling robot",
      description:
        "Automation system based on Klipper for chemical sampling and analysis. To be paired with ChemRover for predictive exploration as a part of a research project.",
      stack: ["Python", "Moonraker", "Klipper", "Pydantic", "websocket"],
      repo: "https://github.com/ombayley/ChemKlipper",
    },
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
      tagline: "Automated self-optimizing reaction platform [Currently Private]",
      description:
        "RoboChem is an automated, self-optimizing reaction platform designed for the automated optimisation of flow reactions. This system integrates an AI-driven package with an automated hardware platform to perform reaction optimization.",
      stack: ["Python", "C++", "Arduino", "PyTorch (BoTorch)", "pydantic", "PyQt", "pyserial", "socket"],
      repo: "https://github.com/Noel-Research-Group/RoboChem_1",
    },
      {
      name: "UPLC Data Analyser GUI",
      tagline: "GUI Application for automated analysis of Agilent OpenLab CDS raw data",
      description:
        "The UPLC Data Analyser is a GUI application designed to open and analyse chromatogram data stored in Agilent's proprietary .dx files. This application utilizes CustomTKinter for the user interface and Matplotlib+seaborn for plotting the chromatogram data. ",
      stack: ["Python", "(Custom)Tkinter", "Matplotlib", "Seaborn"],
      repo: "https://github.com/ombayley/UPLC_Data_Analyser",
    },
    {
      name: "EmbeddedRustSystems",
      tagline: "Bare-metal Rust on a raspberry pi pico",
      description:
        "Bare-metal (no std library) Rust system controllers on a raspberry pi pico using the embassy crate. Functions include a basic GPIO signalling and USB communication. The core design is to provide similar functionality and ease of control to the MicroPython build for the pi",
      stack: ["Rust", "Embassy", "RP2350"],
      repo: "https://github.com/ombayley/EmbeddedRustSystems",
    }
  ],
  experience: [
    {
      company: "University of Amsterdam (UvA)",
      location: "Amsterdam, NL",
      role: "Guest Research Fellow",
      period: "Jul 2026 — Present",
      summary:
        "Maintaining and refactoring the RoboChem self-driving-lab codebase, preparing manuscripts, and supervising PhD \n" +
          "students building the next generation of platforms",
      bullets: [
      ],
    },
    {
      company: "University of Amsterdam (UvA)",
      location: "Amsterdam, NL",
      role: "Postdoc",
      period: "Nov 2023 — Jun 2026",
      summary:
        "Research on the automation of chemical reaction development",
      bullets: [
        "Designed new hardware for reaction execution at 5% of the price of commercial systems",
        "Developed new software tools for the automated analysis of HPLC, Mass Spec, NMR and UV chromatograms and spectra",
        "Built high-level control architecture to drive autonomous reaction systems",
        "Wrote low-level control software to automate mechanical and robotic components"
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
        "Convergent 20-Step (total step count) Synthesis",
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
        "Introduction to nano-encapsulation techniques",
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
  // * = equal contribution; "…" = authors omitted
  publications: [
    {
      authors: ["*M. Regnier", "*O. Bayley", "G. Hopsort", "A. Brunetti", "E. Savino", "A. Gargano", "T. Noël"],
      title: "Autonomous Flow Electrolysis: A Self-Driving Platform for Electrochemical Reaction Optimization",
      year: "2026",
      journal: "Manuscript in preparation",
      doi: "",
      image: "/docs/graphical_abstracts/eRoboChem.png",
    },
    {
      authors: ["*M. Vanzella", "*O. Bayley", "…", "T. Noël"],
      title: "Autonomous Control of Polymer Upcycling with a Self-Driving Laboratory",
      year: "2026",
      journal: "ChemRxiv",
      doi: "10.26434/chemrxiv.15005284/v1",
      image: "/docs/graphical_abstracts/ChemRxiv_RoboChem-up.jpg",
    },
    {
      authors: ["J. Djossou", "M. Claros", "O. Bayley", "T. Noël"],
      title: "Redefining synthetic efficiency: Chemical and technological shortcuts",
      year: "2026",
      journal: "Chem",
      volume: "12",
      pages: "103139",
      doi: "10.1016/j.chempr.2026.103139",
      image: "/docs/graphical_abstracts/Chem_2026.jpg",
    },
    {
      authors: ["*S. Pilon", "*E. Savino", "*O. M. Bayley", "M. Vanzella", "…", "T. Noël"],
      title: "A flexible and affordable self-driving laboratory for automated reaction optimization",
      year: "2026",
      journal: "Nature Synthesis",
      doi: "10.1038/s44160-026-01053-0",
      image: "/docs/graphical_abstracts/Nat_Synth_2026.png",
    },
    {
      authors: ["*J. Djossou", "*F. Pasca", "…", "O. Bayley", "…", "T. Noël"],
      title: "Radical Disconnection Logic Enables Direct Conversion of α-Amino Acids into Differentiated Vicinal Diamines",
      year: "2026",
      journal: "J. Am. Chem. Soc.",
      doi: "10.1021/jacs.6c16323",
      image: "/docs/graphical_abstracts/JACS_2026.png",
    },
    {
      authors: ["N. Kaplaneris", "E. Savino", "…", "O. Bayley", "…", "T. Noël"],
      title: "Machine Learning-Guided Discovery of Robust Conditions for Photochemical Nickel-Catalyzed Cysteine Arylation",
      year: "2025",
      journal: "ChemRxiv",
      doi: "10.26434/chemrxiv-2025-zwqnt",
      image: "/docs/graphical_abstracts/ChemRxiv_Cys_Arylation.jpg",
    },
    {
      authors: ["*O. Bayley", "*E. Savino", "*A. Slattery", "T. Noël"],
      title: "Autonomous Chemistry: Navigating Self-Driving Labs in Chemical and Material Sciences",
      year: "2024",
      journal: "Matter",
      volume: "7",
      pages: "2382–2398",
      doi: "10.1016/j.matt.2024.06.003",
      image: "/docs/graphical_abstracts/Matter_7_7_2382_2024.jpg",
    },
  ],
};