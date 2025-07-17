import namelogo from './namelogo.png'
import uberCover from './ubercouverture.jpg'
import uberLogo from './uberprofile.webp'
import googleCover from './googlecouverture.jpg'
import googleLogo from './googleprofile.jpg'
import microsoftcouverture from './microsoftcouverture.jpg'
import microsoftprofile from './microsoftprofile.webp'
import netflixCover from './netflixcouverture.jpg'
import jobsection from './jobsection.png'
import jobsection2 from './jobsection2.png'
import candidaturesection from './candidaturesection.png'
import quote from './forumlogo.png'

import headingvideo from './headingvideo.mp4'

// Glovo
import glovoLogo from './glovoprofile.jpg';
import glovoCover from './glovocouverture.jpg';



// Ooredoo Tunisie
import ooredooLogo from './ooreedooprofile.png';
import ooredooCover from './ooreedoocouverture.jpg';

// Orange Tunisie
import orangeLogo from './orangeprofile.jpg';
import orangeCover from './orangecouverture.jpg';

// Tunisie Telecom
import tunisieTelecomLogo from './telecomprofile.jpg';
import tunisieTelecomCover from './telecomcouverture.jpg';

// Vermeg
import vermegLogo from './vermegprofile.png';
import vermegCover from './vermegcouverture.jpg';

// Telnet
import telnetLogo from './telnetprofile.jpg';
import telnetCover from './telecomcouverture.jpg';

// Sofrecom Tunisie
import sofrecomLogo from './sofrecomprofile.jpg';
import sofrecomCover from './sofrecomcouverture.jpg';

// Wevioo
import weviooLogo from './wevioprofile.png';
import weviooCover from './weviocouverture.jpg';


// Talan Tunisie
import talanLogo from './talanprofile.png';
import talanCover from './talancouverture.png';

import flouciLogo from './flouciprofile.png';
import flouciCover from './floucicouverture.webp';

import inDriveLogo from './indriveprofile.png';
import inDriveCover from './indrivecouverture.png';

import spotifyLogo from './spotifyprofile.webp';
import spotifyCover from './spotifycouverture.avif';

import claraPhoto from './user1.avif';
import yassinePhoto from './user2.avif';
import fatimaPhoto from './user3.avif';
import leoPhoto from './user4.jpg';
import amiraPhoto from './user5.jpg';
import matchgorforum from './matchgorforum.png';

export const assets = {
    namelogo,
    headingvideo,
    jobsection,
    jobsection2,
    candidaturesection,
    quote,
    matchgorforum
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
    firstName: 'Sophie',
    lastName: 'Martinez',
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


export const companies  = [
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
    category: "Tech",
    jobTitle: "UI/UX Designer",
    jobSlots: 3
  },
  {
    id: 2,
    name: "Spotify",
    logo: spotifyLogo,
    cover: spotifyCover,
    description: "Music streaming service giving access to millions of songs and podcasts.",
    location: "paris, france",
    category: "Tech",
    jobTitle: "UI/UX Designer",
    jobSlots: 2
  },
  {
    id: 3,
    name: "Glovo",
    logo: glovoLogo,
    cover: glovoCover,
    description: "On-demand delivery platform connecting users to local couriers.",
    location: "Tunis, Tunisia",
    category: "Logistics / Delivery",
    jobTitle: "Mobile App Developer",
    jobSlots: 4
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
