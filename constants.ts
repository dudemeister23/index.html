import { Experience, Education, Skill, PortfolioItem } from './types';

export const CONTACT_INFO = {
  name: "Fabian Bresan, MD",
  title: "Medical Education Strategist & Scientific Director",
  email: "fabianbresan@me.com",
  phone: "(561) 788-4408",
  location: "Palm Beach Gardens, FL",
  linkedin: "linkedin.com/in/fabianbresan/",
  summary: "MD-credentialed Medical Strategist with high-level expertise in content strategy, gap analysis, and CME program leadership. Proven track record of securing funding, engaging Key Opinion Leaders (KOLs), and managing complex project lifecycles in Neurology, Ophthalmology, and Psychiatry. Combines clinical authority with entrepreneurial business acumen to deliver commercially viable, scientifically rigorous educational programs."
};

export const CORE_COMPETENCIES: Skill[] = [
  {
    category: "Scientific Strategy",
    items: ["Gap Analysis", "Needs Assessments", "Instructional Design", "ACCME Compliance", "Adult Learning Principles"]
  },
  {
    category: "Therapeutic Expertise",
    items: ["Neurology", "Ophthalmology", "Psychiatry", "Dermatology", "Internal Medicine", "Immunology"]
  },
  {
    category: "Operational Leadership",
    items: ["Budgeting & P&L Management", "Cross-functional Team Leadership", "Vendor Negotiation", "Strategic Forecasting"]
  },
  {
    category: "Medical Communications",
    items: ["Publication Planning", "Grant Development", "Storyboarding", "Omnichannel Reach Optimization"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "ciq",
    role: "Principal / Director of Operations",
    company: "CIQ of Palm Beach",
    location: "Palm Beach Gardens, FL",
    period: "May 2025 – Present",
    description: "Leveraged entrepreneurial opportunity to build and scale an operational infrastructure, mastering P&L and resource management.",
    achievements: [
      "P&L & Strategic Growth: Manage full P&L oversight, strategic forecasting, and investor relations for a capital-intensive business unit.",
      "Operational Efficiency: Direct complex, multi-phase client projects; implemented Standard Operating Procedures (SOPs) that reduced project turnaround time.",
      "Team Leadership: Recruited and lead a cross-functional team of project coordinators and technical staff, establishing a culture of accountability.",
      "Vendor & Contract Negotiation: Negotiate high-value contracts and manage subcontractor partnerships to optimize profit margins."
    ]
  },
  {
    id: "mededicus",
    role: "Senior Content Manager",
    company: "MedEdicus",
    location: "Remote",
    period: "Dec. 2023 – Apr. 2025",
    description: "Operated as the strategic lead for a portfolio of CME programs, ensuring scientific accuracy and alignment with commercial goals.",
    achievements: [
      "Strategic Content Development: Directed comprehensive gap analyses for high-priority therapeutic areas (TED, NMOSD, Dry Eye), directly influencing curriculum design.",
      "KOL & Faculty Management: Cultivated and managed relationships with top-tier KOLs, ensuring alignment with emerging clinical data.",
      "Program Architecture: Architected multi-format educational initiatives resulting in increased learner engagement and retention.",
      "Cross-Functional Leadership: Partnered with grant, accreditation, and events teams to ensure 100% on-time delivery of compliant CME programs."
    ]
  },
  {
    id: "mededicus-dev",
    role: "Medical Education Content Developer",
    company: "MedEdicus",
    location: "Remote",
    period: "Nov. 2022 – Dec. 2023",
    achievements: [
      "Curriculum Design: Developed educational agendas and complex case studies for live symposia, translating high-science data into practical clinical applications.",
      "On-Site Scientific Lead: Provided on-site medical direction for live educational programs.",
      "Reach Optimization: Spearheaded the restructuring of digital content formats, significantly expanding distribution channels."
    ]
  },
  {
    id: "max-planck",
    role: "Medical Writer / Research Scientist",
    company: "Max Planck Florida Institute for Neuroscience",
    location: "Jupiter, FL",
    period: "Oct. 2020 – Nov. 2022",
    achievements: [
      "Grant Writing & Funding: Conceptualized and authored clinical references for 30+ grant applications, securing essential research funding.",
      "Scientific Communication: Served as editorial lead for high-impact scientific publications, ensuring data integrity and narrative clarity.",
      "Clinical Research: Conducted exhaustive literature reviews in Neurology and Psychiatry to support evidence-based content generation."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "goethe",
    degree: "MD, Medicine",
    institution: "Goethe University",
    location: "Frankfurt am Main, Germany",
    year: "2020",
    details: [
      "Thesis: Investigated travel as a risk factor for acquiring multi-resistant bacteria.",
      "Research: Developed patient interview forms, conducted statistical analysis, and managed a custom clinical database."
    ]
  },
  {
    id: "boca-raton",
    degree: "Medical Intern",
    institution: "Boca Raton Regional Hospital",
    location: "Boca Raton, FL",
    year: "Nov. 2019 – Oct. 2020",
    details: [
      "Completed clinical rotations in Neurology, Surgery, and Internal Medicine.",
      "Delivered oral presentations on updated guidelines and clinical data to department leadership."
    ]
  }
];

export const PORTFOLIO_PLACEHOLDERS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Neurology CME Symposium",
    category: "Live Event & Enduring Material",
    description: "Developed comprehensive curriculum and case studies for a major neurology symposium focusing on NMOSD.",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: "p2",
    title: "Ophthalmology Digital Series",
    category: "Digital Education",
    description: "Strategic content direction for a multi-module interactive series on Thyroid Eye Disease.",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: "p3",
    title: "Psychiatry Grant Strategy",
    category: "Grant Development",
    description: "Led gap analysis and needs assessment that secured funding for a new educational initiative in mental health.",
    image: "https://picsum.photos/600/400?random=3"
  }
];