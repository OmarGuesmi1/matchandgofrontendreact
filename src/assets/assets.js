import namelogo from './namelogo.png'
import ubercouverture from './ubercouverture.jpg'
import uberprofile from './uberprofile.webp'
import googlecouverture from './googlecouverture.jpg'
import googleprofile from './googleprofile.jpg'
import microsoftcouverture from './microsoftcouverture.jpg'
import microsoftprofile from './microsoftprofile.webp'
import netflixcouverture from './netflixcouverture.jpg'
import netflixprofile from './netflixprofile.webp'
import headingvideo from './headingvideo.mp4'

export const assets = {
    namelogo,
    headingvideo
}


export const jobCategories = [
  "Information Technology",
  "Electronics",
  "Electrical Engineering",
  "Telecommunications",
  "Mechanical Engineering",
  "Energy",
  "Automation and Robotics",
  "Civil Engineering",
  "Architecture",
  "Finance",
  "Accounting",
  "Marketing",
  "Business Management",
  "Human Resources",
  "International Trade",
  "Logistics and Transportation",
  "Law",
  "Healthcare",
  "Social Sciences",
  "Education and Training"
];


export const companyList = [
  {
    name: "Google",
    logo: googleprofile,
    cover: googlecouverture
  },
  {
    name: "Microsoft",
    logo: microsoftprofile,
    cover: microsoftcouverture
  },
  {
    name: "Netflix",
    logo: netflixprofile,
    cover: netflixcouverture
  }, 
  {
    name: "Uber",
    logo: uberprofile,
    cover: ubercouverture
  }
  
];
