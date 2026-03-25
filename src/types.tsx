import creditVideo from "./assets/credit_taiwan.mp4"
import rentalTWVideo from "./assets/credit_taiwan.mp4"
import rentalJBVideo from "./assets/rental_johor.mp4"
import dcf from "./assets/rental_johor.mp4"
import propertySwiper from "./assets/property_swiper.mp4"

import catImg from "./assets/cat.avif"
import uniImg from "./assets/uni.png"
import hsImg from "./assets/highschool.png"



export type introduction = {
    name:string
    email : string 
    phone : string
    brief_intro : string 
    profile_pic?:string 
}

export type view ={
  view : string
  viewText : string 
  isDownload : boolean 
}
//education 
type education = { 
    school_name :string 
    course?: string
    duration : string
    result:string
    img:string
    views : view
}

export type educations = {
   list_edu : education[]
}

//skills and langs 
type skill = {
    name : string 
    url?: string 
    level? : number
}

export type languages  = { 
    list_langs : skill[]
}

export type skillsets = { 
    list_skills : skill[]
}

//certifications 
type certification = {
    name : string 
    secured_year :string
    views : view
}
export type certifications = { 
    list_cert : certification[]
}

//side projects 
export type project ={ 
    name : string 
    labels : string[]
    brief_summary : string 
    pic : string 
    views : view
}

export type sideProjects = {
    list_project : project[]
}


// my profile 
type profileSchema = { 
    introduction : introduction
    educations : educations
    languages : languages
    skillsets : skillsets
    certifications : certifications
    sideProjects :sideProjects
}

export const myProfile: profileSchema = {
  introduction: {
    name: "Ting Yao Zu",
    email: "yaozu04@gmail.com",
    phone: "+886 0984588946",
    brief_intro:
      "Final-year Finance student at National Taiwan University with a strong interest in data-driven financial analysis. Passionate about investment research and using data to uncover actionable insights. Eager to bridge academic knowledge with practical application in real-world financial decision-making.",
    profile_pic: catImg,
  },

  educations: {
    list_edu: [
      {
        school_name: "National Taiwan University",
        duration: "2022/9- Present",
        course:"Department of Finance",
        result : "CGPA : 4.05",
        img:uniImg,
        views : {
          view: "./certs/Uni_Transcript.pdf",
          viewText : 'Download the File',
          isDownload : true
        }
      },
      {
        school_name: "Taiping HuaLian High School",
        duration: "2016/1-2021/12",
        result : "UEC : 9A",
        img:hsImg,
        views : {
          view: "./certs/UEC.pdf",
          viewText : 'Download the File',
          isDownload : true
        }
      },
    ],
  },

  languages: {
    list_langs: [
      {
        name: "Mandarin",
        level: 90,
      },
      {
        name: "English",
        level: 70,
      },
      {
        name: "Malay",
        level: 40,
      },
    ],
  },

  skillsets: {
    list_skills: [
      {
        name: "Excel",
        url: `https://skill-progress-production.up.railway.app/progress?image=https://www.logo.wine/a/logo/Microsoft_Excel/Microsoft_Excel-Logo.wine.svg&level=4`,
      },
       {
        name: "Python",
        url: "https://skill-progress-production.up.railway.app/progress?skill=py&level=4",
      },
      {
        name: "Power Bi",
        url: "https://skill-progress-production.up.railway.app/progress?image=https://brandlogos.net/wp-content/uploads/2025/04/microsoft_power_bi-logo_brandlogos.net_1gwgj-512x667.png&level=3",
      },
      {
        name: "SQL",
        url: "https://skill-progress-production.up.railway.app/progress?image=https://png.pngtree.com/png-vector/20220726/ourmid/pngtree-design-a-uiux-app-logo-with-a-sql-database-icon-vector-png-image_25084656.png&level=3",
      },
      {
        name: "Power Point",
        url: "https://skill-progress-production.up.railway.app/progress?image=https://www.logo.wine/a/logo/Microsoft_PowerPoint/Microsoft_PowerPoint-Logo.wine.svg&level=2",
      },
      {
        name:'Microsoft Word',
        url:"https://skill-progress-production.up.railway.app/progress?image=https://download.logo.wine/logo/Microsoft_Word/Microsoft_Word-Logo.wine.png&level=2",
      }
    ],
  },

  certifications: {
    list_cert: [
      {
        name: "Certificate Of Financial Management Associate (FMA)",
        secured_year: "2024-08-01",
        views : {
          view: "./certs/Financial Management Associate.pdf.pdf",
          viewText : 'Download the file',
          isDownload : true
        }
      },
      {
        name: "Virtual Experience Program in “Commercial Banking” by Forage",
        secured_year: "2025-01-20",
        views : {
          view: "./certs/Commercial Banking.pdf",
          viewText : 'Download the File',
          isDownload : true
        }

      },
      {
        name: " Virtual Experience Program in “Sustainability in Banking” by Forage",
        secured_year: "2025-06-10",
        views : {
          view: "./certs/Sustainability in Banking.pdf",
          viewText : 'Download the File',
          isDownload : true
        }
      },
    ],
  },

  sideProjects: {
    list_project: [
      {
        name: "Credit Card Market of Taiwan ",
        labels: ["Excel", "Macro", "Pivot Table", "Dashboard"],
        brief_summary:
          "Built a web dashboard that visualizes company financial metrics, valuation ratios, and historical trends for retail investors.",
        pic: creditVideo,
        views:{
          view:"/files/credit_taiwan.xlsm",
          viewText : "Download the File",
          isDownload:true
        }
      },
      {
        name: "Taiwan Rental Market Analysis ",
        labels: ["Excel", "Macro", "Pivot Table", "Dashboard"],
        brief_summary:
          "Created a data analysis project to compare rental prices across different districts and identify market patterns.",
        pic: rentalTWVideo,
          views:{
          view:"/files/rental_taiwan.xlsm",
          viewText : "Download the File",
          isDownload:true
        }
      },
      {
        name: "Johor Rental Market Analysis ",
        labels: ["PowerBi", "Dashboard"],
        brief_summary:
          "Created a data analysis project to compare rental prices across different districts and identify market patterns.",
        pic: rentalJBVideo,
          views:{
          view:"/files/rental_johor.pbix",
          viewText : "Download the File",
          isDownload:true
        }
      },
       {
        name: "Discounted Cash Flow of Broadcom.inc",
        labels: ["Excel", "Functions","Financial Model"],
        brief_summary:
          "Created a data analysis project to compare rental prices across different districts and identify market patterns.",
        pic: dcf,
          views:{
          view:"/files/rental_johor.pbix",
          viewText : "Download the File",
          isDownload:true
        }
      },
      {
        name: "Property Swiper",
        labels: ["Typescript", "Python",'CSS'],
        brief_summary:
          "Created a data analysis project to compare rental prices across different districts and identify market patterns.",
        pic: propertySwiper,
          views:{
          view:"",
          viewText : "View the File",
          isDownload:false
        }
      },
    
    ],
  },
};