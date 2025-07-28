import namelogo from './namelogo.png'

import jobsection from './jobsection.png'
import jobsection2 from './jobsection2.png'
import candidaturesection from './candidaturesection.png'
import quote from './forumlogo.png'

import headingvideo from './headingvideo.mp4'

// Glovo
import glovoLogo from './glovoprofile.jpg';
import glovoCover from './glovocouverture.jpg';


import GetFound from './GetFound.jpeg'
// Ooredoo Tunisie
import ooredooLogo from './ooreedooprofile.png';
import ooredooCover from './ooreedoocouverture.jpg';

// Orange Tunisie
import orangeLogo from './orangeprofile.jpg';
import orangeCover from './orangecouverture.jpg';


// Sofrecom Tunisie
import sofrecomLogo from './sofrecomprofile.jpg';
import sofrecomCover from './sofrecomcouverture.jpg';



// Talan Tunisie
import talanLogo from './talanprofile.png';
import talanCover from './talancouverture.png';


import spotifyLogo from './spotifyprofile.webp';
import spotifyCover from './spotifycouverture.avif';

import claraPhoto from './user1.avif';
import yassinePhoto from './user2.avif';
import fatimaPhoto from './user3.avif';
import leoPhoto from './user4.jpg';
import amiraPhoto from './user5.jpg';
import matchgorforum from './matchgorforum.png';
import auth from './1.png'
import auth2 from './2.png'
import auth3 from './3.png'
import signinback1 from './signinback1.jpg'
import signinback2 from './signinback2.jpg'
import signinback3 from './signinback3.jpg'
import sideimage from './sideimage.jpg'

import matchgoauth from './Match&Goauth.png'


export const assets = {
    namelogo,
    headingvideo,
    jobsection,
    jobsection2,
    candidaturesection,
    quote,
    auth,
    auth2,
    auth3,
    matchgorforum,
    matchgoauth,
    signinback1,
    signinback2,
    signinback3,
    sideimage,
    GetFound
}


 export const categories = [
    "All",
    "Tech",
    "Advertising / Marketing",
    "Culture / Media",
    "Consulting / Audit",
    "Education / Training",
    "Engineering / Construction",
    "Finance / Banking"
  ];

export const forumPosts = [
  {
    id: 1,
    firstName: 'Yosr',
    lastName: 'Mrabet',
    userPhoto: claraPhoto,
    role: 'Tech Recruiter - Google',
    content: 'We’re hiring junior full-stack devs 🚀! Drop your CVs!',
    likes: 120,
    comments: 45,
  },
  {
    id: 2,
    firstName: 'Ali',
    lastName: 'Ben Salah',
    userPhoto: yassinePhoto,
    role: 'HR Manager - Orange',
    content: 'Great CVs coming from Tunisia 🇹🇳 this year! Keep it up.',
    likes: 98,
    comments: 34,
  },
  {
    id: 3,
    firstName: 'Julie',
    lastName: 'Moreau',
    userPhoto: fatimaPhoto,
    role: 'Talent Acquisition - Capgemini',
    content: 'Looking for fresh UI/UX designers for freelance projects 💼.',
    likes: 87,
    comments: 28,
  },
  {
    id: 4,
    firstName: 'Omar',
    lastName: 'Guesmi',
    userPhoto: leoPhoto,
    role: 'Lead Recruiter - DevCore',
    content: 'Thanks to everyone who applied! You’re amazing 🔥.',
    likes: 75,
    comments: 20,
  },
  {
    id: 5,
    firstName: 'Lina',
    lastName: 'Kacem',
    userPhoto: amiraPhoto,
    role: 'Recruiter - Ubisoft',
    content: 'Game developer positions now open 🎮! DM me for details.',
    likes: 68,
    comments: 19,
  },
];


export const companies = [
  {
    id: 1,
    name: "Sofrecom",
    logo: sofrecomLogo,
    cover: sofrecomCover,
    description: "Sofrecom is a consulting company specializing in telecommunications.",
    location: "Tunis, Tunisia",
    category: "Engineering / Construction",
    jobTitle: "Frontend Developer",
    jobSlots: 3
  },
  {
    id: 2,
    name: "Sofrecom",
    logo: sofrecomLogo,
    cover: sofrecomCover,
    description: "Sofrecom is a consulting company specializing in telecommunications.",
    location: "Tunis, Tunisia",
    category: "Culture / Media",
    jobTitle: "UI/UX Designer",
    jobSlots: 3
  },
  {
    id: 3, // ✅ changé de 2 à 3
    name: "Spotify",
    logo: spotifyLogo,
    cover: spotifyCover,
    description: "Music streaming service giving access to millions of songs and podcasts.",
    location: "Paris, France",
    category: "Culture / Media",
    jobTitle: "UI/UX Designer",
    jobSlots: 2
  },
  {
    id: 4,
    name: "Glovo",
    logo: glovoLogo,
    cover: glovoCover,
    description: "On-demand delivery platform connecting users to local couriers.",
    location: "Tunis, Tunisia",
    category: "Engineering / Construction",
    jobTitle: "Mobile App Developer",
    jobSlots: 4
  },
  {
    id: 5,
    name: "Ooredoo Tunisia",
    logo: ooredooLogo,
    cover: ooredooCover,
    description: "Leading telecommunications company providing mobile, internet and corporate services.",
    location: "Tunis, Tunisia",
    category: "Telecommunications",
    jobTitle: "Network Engineer",
    jobSlots: 2
  },
  {
    id: 6,
    name: "Orange Tunisia",
    logo: orangeLogo,
    cover: orangeCover,
    description: "Telecom operator offering mobile, internet and digital services across Tunisia.",
    location: "Tunis, Tunisia",
    category: "Telecommunications",
    jobTitle: "Software Engineer",
    jobSlots: 3
  },
  {
    id: 7,
    name: "Talan Tunisia",
    logo: talanLogo,
    cover: talanCover,
    description: "Consulting firm focused on digital transformation and innovation.",
    location: "Tunis, Tunisia",
    category: "Consulting / IT",
    jobTitle: "Business Analyst",
    jobSlots: 2
  }
];

export const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    description: "Develop responsive web interfaces with React.js.",
    salary: "3000 TND",
    location: "Tunis, Tunisia",
    degrees: ["Bachelor's in Computer Science", "Software Engineer"],
    keywords: ["frontend", "react", "javascript"],
    companyId: 1,
    type: "Full-time",
    experienceLevel: "Mid",
    postedAt: "2025-07-20",
    remote: true,
    technologies: ["React", "HTML", "CSS", "TypeScript"],
    benefits: ["Meal Voucher", "Flexible Remote"],
    languages: ["French", "English"],
    sector: "IT",
    status: "active",
    expiresAt: "2025-08-31"
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Design user-friendly interfaces and improve UX flows.",
    salary: "2800 TND",
    location: "Tunis, Tunisia",
    degrees: ["Graphic Design", "UX Design"],
    keywords: ["design", "figma", "ux"],
    companyId: 2,
    type: "Fixed-term",
    experienceLevel: "Junior",
    postedAt: "2025-07-18",
    remote: false,
    technologies: ["Figma", "Adobe XD", "Sketch"],
    benefits: ["Transport Provided", "Monthly Bonus"],
    languages: ["French"],
    sector: "Design",
    status: "active",
    expiresAt: "2025-08-25"
  },
  {
    id: 3,
    title: "Mobile App Developer",
    description: "Build performant mobile apps using Flutter or React Native.",
    salary: "3200 TND",
    location: "Tunis, Tunisia",
    degrees: ["Mobile Development", "Computer Science"],
    keywords: ["mobile", "flutter", "react native"],
    companyId: 4,
    type: "Full-time",
    experienceLevel: "Senior",
    postedAt: "2025-07-15",
    remote: true,
    technologies: ["Flutter", "Dart", "React Native"],
    benefits: ["Health Insurance", "Flexible Hours"],
    languages: ["English"],
    sector: "Mobile",
    status: "active",
    expiresAt: "2025-08-30"
  },
  {
    id: 4,
    title: "Network Engineer",
    description: "Manage and optimize telecom networks and infrastructure.",
    salary: "3500 TND",
    location: "Tunis, Tunisia",
    degrees: ["Telecom Networks", "Network Engineering"],
    keywords: ["network", "telecom", "infrastructure"],
    companyId: 5,
    type: "Full-time",
    experienceLevel: "Mid",
    postedAt: "2025-07-19",
    remote: false,
    technologies: ["Cisco", "Linux", "Switching", "Routing"],
    benefits: ["Company Car", "Company Phone"],
    languages: ["French"],
    sector: "Telecom",
    status: "active",
    expiresAt: "2025-09-01"
  },
  {
    id: 5,
    title: "Software Engineer",
    description: "Build scalable software systems and APIs.",
    salary: "4000 TND",
    location: "Tunis, Tunisia",
    degrees: ["Computer Science", "Software Engineering"],
    keywords: ["backend", "api", "nodejs"],
    companyId: 6,
    type: "Full-time",
    experienceLevel: "Senior",
    postedAt: "2025-07-12",
    remote: true,
    technologies: ["Node.js", "Express", "MongoDB", "Docker"],
    benefits: ["100% Remote", "Laptop Provided"],
    languages: ["English"],
    sector: "IT",
    status: "active",
    expiresAt: "2025-08-20"
  },
  {
    id: 6,
    title: "Business Analyst",
    description: "Analyze business needs and deliver data-driven insights.",
    salary: "3100 TND",
    location: "Tunis, Tunisia",
    degrees: ["Business Intelligence", "Management Information Systems"],
    keywords: ["data", "analysis", "business"],
    companyId: 7,
    type: "Full-time",
    experienceLevel: "Mid",
    postedAt: "2025-07-14",
    remote: false,
    technologies: ["Power BI", "Excel", "SQL"],
    benefits: ["Continuous Training", "Health Insurance"],
    languages: ["French", "English"],
    sector: "Business",
    status: "active",
    expiresAt: "2025-09-05"
  },
  {
    id: 7,
    title: "Digital Marketing Specialist",
    description: "Plan and execute online marketing campaigns.",
    salary: "2700 TND",
    location: "Tunis, Tunisia",
    degrees: ["Digital Marketing", "Communications"],
    keywords: ["seo", "marketing", "ads"],
    companyId: 2,
    type: "Fixed-term",
    experienceLevel: "Junior",
    postedAt: "2025-07-21",
    remote: false,
    technologies: ["Google Ads", "Meta Business", "SEO Tools"],
    benefits: ["Performance Bonus", "Team Events"],
    languages: ["French"],
    sector: "Marketing",
    status: "active",
    expiresAt: "2025-09-10"
  },
  {
    id: 8,
    title: "DevOps Engineer",
    description: "Maintain CI/CD pipelines and cloud infrastructure.",
    salary: "4500 TND",
    location: "Tunis, Tunisia",
    degrees: ["Computer Systems", "Cloud Computing"],
    keywords: ["devops", "docker", "kubernetes", "aws"],
    companyId: 1,
    type: "Full-time",
    experienceLevel: "Senior",
    postedAt: "2025-07-10",
    remote: true,
    technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
    benefits: ["100% Remote", "Annual Bonus"],
    languages: ["English"],
    sector: "IT",
    status: "active",
    expiresAt: "2025-08-15"
  },
  {
    id: 9,
    title: "QA Engineer",
    description: "Ensure product quality through automated testing.",
    salary: "3200 TND",
    location: "Tunis, Tunisia",
    degrees: ["Software Testing", "Quality Assurance"],
    keywords: ["qa", "testing", "selenium"],
    companyId: 6,
    type: "Full-time",
    experienceLevel: "Mid",
    postedAt: "2025-07-11",
    remote: false,
    technologies: ["Selenium", "Jest", "Cypress"],
    benefits: ["Quality Bonus", "Supplemental Insurance"],
    languages: ["French"],
    sector: "IT",
    status: "active",
    expiresAt: "2025-08-20"
  },
  {
    id: 10,
    title: "Data Scientist",
    description: "Build predictive models and analyze datasets.",
    salary: "5000 TND",
    location: "Tunis, Tunisia",
    degrees: ["Data Science", "Statistics", "AI"],
    keywords: ["data", "machine learning", "python"],
    companyId: 7,
    type: "Full-time",
    experienceLevel: "Senior",
    postedAt: "2025-07-16",
    remote: true,
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
    benefits: ["Stock Options", "International Conferences"],
    languages: ["English"],
    sector: "Data",
    status: "active",
    expiresAt: "2025-09-10"
  },
  {
    id: 11,
    title: "Technical Support Engineer",
    description: "Provide technical assistance to customers and resolve issues.",
    salary: "2500 TND",
    location: "Tunis, Tunisia",
    degrees: ["Computer Science", "Technical Support"],
    keywords: ["support", "helpdesk", "clients"],
    companyId: 5,
    type: "Full-time",
    experienceLevel: "Junior",
    postedAt: "2025-07-13",
    remote: false,
    technologies: ["Zendesk", "Windows", "Networking"],
    benefits: ["Monthly Bonuses", "Free Parking"],
    languages: ["French", "English"],
    sector: "Support",
    status: "active",
    expiresAt: "2025-08-25"
  },
  {
    id: 12,
    title: "Product Manager",
    description: "Define product strategy and coordinate development.",
    salary: "4800 TND",
    location: "Paris, France",
    degrees: ["Project Management", "Software Engineering"],
    keywords: ["product", "management", "strategy"],
    companyId: 3,
    type: "Full-time",
    experienceLevel: "Senior",
    postedAt: "2025-07-22",
    remote: true,
    technologies: ["Jira", "Confluence", "Notion"],
    benefits: ["Variable Compensation", "Flight Tickets Provided"],
    languages: ["English", "French"],
    sector: "Management",
    status: "active",
    expiresAt: "2025-09-15"
  }
];


{/**/}