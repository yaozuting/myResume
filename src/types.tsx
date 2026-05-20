import creditVideo from "./assets/credit_taiwan.mp4"
import rentalTWVideo from "./assets/rental_TW.mp4"
import residentialJBVideo from "./assets/residential_johor.mp4"
import dcf from "./assets/DCF_broadcom.mp4"
import MYEquityResearcher from './assets/my_llm.mp4'


import uniImg from "./assets/uni.png"
import hsImg from "./assets/highschool.png"
import profileImg from './assets/profile_image.jpeg'



export type introduction = {
    name:string
    email : string 
    phone : string
    graduation_date:string 
    brief_intro : string[] 
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
    brief_summary : string[]
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
    phone: "(+886) 984588946",
    graduation_date : '2026/06',
    brief_intro: [
  "I am a final-year Finance student at National Taiwan University with a strong interest in financial markets and investment analysis. Over the past four years, I have built a solid understanding in finance, accounting, and market research through both academic learning and hands-on projects.",

  "Beyond academics, I enjoy exploring and learning new tools such as Excel, VBA, Python, and Power BI, and applying them to financial-related projects. I have worked on projects involving discounted cash flow valuation, interactive dashboards, and property market analytics, which strengthened my ability to turn raw data into meaningful insights.",

  "I look forward for the opportunity to apply and further developing my financial and analytical skills in a professional environment."
],
    profile_pic: profileImg,
  },

  educations: {
    list_edu: [
      {
        school_name: "National Taiwan University",
        duration: "2022/9- Present",
        course:"Department of Finance",
        result : "CGPA : 3.94 / 4.30",
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
        name: "Power Point",
        url: "https://skill-progress-production.up.railway.app/progress?image=https://www.logo.wine/a/logo/Microsoft_PowerPoint/Microsoft_PowerPoint-Logo.wine.svg&level=2",
      },
      {
        name:'Microsoft Word',
        url:"https://skill-progress-production.up.railway.app/progress?image=https://download.logo.wine/logo/Microsoft_Word/Microsoft_Word-Logo.wine.png&level=2",
      },
      {
        name:'Bloomberg Terminal',
        url:"https://skill-progress-production.up.railway.app/progress?image=https://logos-world.net/wp-content/uploads/2022/01/Bloomberg-Emblem.png&level=2",
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
        name: "Bloomberg Market Concepts",
        secured_year: "2026-04-13",
        views : {
          view: "./certs/bloomberg market concepts.pdf",
          viewText : 'Download the File',
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
    
    ],
  },

  sideProjects: {
    list_project: [
      {
        name: "MYEquity Research AI",
        labels: ["Python","Web Scraping","Agno Framework",'Financial AI'],
        brief_summary:
  ["Inspired by the limited and fragmented coverage of ASEAN stock markets on platforms such as Bloomberg Terminal and OpenBB, this project aims to build an AI-powered equity research platform focused on ASEAN markets.","The platform aggregates financial statements, news, investment reports, and operational data to enable deeper fundamental stock analysis."," Built with Python and the AGNO framework, it connects LLMs with dedicated retrieval and analysis functions to provide up-to-date, context-aware insights for investors and researchers.\nStarting with the Malaysian stock market, the project aims to gradually expand coverage across other developed ASEAN equity markets."],
        pic: MYEquityResearcher,
          views:{
          view:"",
          viewText : "",
          isDownload:false
        }
      },
      {
        name: "Discounted Cash Flow of AVGO",
        labels: ["Excel", "Functions","Financial Model"],
        brief_summary:
  ["Built a discounted cash flow model for Broadcom (AVGO) in Excel, using financial statement inputs, forecast assumptions, and valuation functions to estimate intrinsic value. The model walks through revenue projections, margin assumptions, free cash flow calculation, discounting, and terminal value analysis."],
        pic: dcf,
          views:{
          view:"./files/DCF_broadcom.",
          viewText : "Download the File",
          isDownload:true
        }
      },
      {
        name: "Credit Card Market of Taiwan",
        labels: ["Excel", "VBA", "Pivot Table", "Dashboard"],
        brief_summary:
  ["Built an interactive Excel dashboard analyzing Taiwan’s credit card market using Pivot Tables, VBA automation, and dynamic visualizations. The project provides insights into transaction trends,and consumer spending behavior through automated data processing and user-friendly dashboard interactions."],
        pic: creditVideo,
        views:{
          view:"./files/credit_taiwan.xlsm",
          viewText : "Download the File",
          isDownload:true
        }
      },
      {
        name: "Taiwan Rental Market Analysis ",
        labels: ["Excel", "VBA", "Pivot Table", "Dashboard"],
        brief_summary:

 [ "An Excel dashboard analyzing Taiwan’s rental market with VBA, Pivot Tables, and interactive visuals using data sourced from Sinyi Realty Inc. The project explores rental price patterns, regional differences, property characteristics, and affordability trends."],
        pic: rentalTWVideo,
          views:{
          view:"./files/rental_taiwan.xlsm",
          viewText : "Download the File",
          isDownload:true
        }
      },
      {
        name: "Residential Market in Johor",
        labels: ["PowerBi", "Dashboard"],
        brief_summary:
          ["Prompted by my sister’s interest in the Johor residential market, I built an end-to-end property market analysis project using Python and Power BI. Property data was extracted from PropertyGuru, cleaned and transformed to handle inconsistencies, duplicates, and outliers, before being visualized in an interactive Power BI dashboard showcasing pricing trends, regional differences, and market insights."],
        pic: residentialJBVideo,
          views:{
          view:"./files/residential_johor_dashboard.pbix",
          viewText : "Download the File",
          isDownload:true
        }
      },

      // {
      //   name: "Property Swiper",
      //   labels: ["Typescript", "Python",'CSS'],
      //   brief_summary:
      //     "Created a data analysis project to compare rental prices across different districts and identify market patterns.",
      //   pic: propertySwiper,
      //     views:{
      //     view:"",
      //     viewText : "View the File",
      //     isDownload:false
      //   }
      // },
    
    ],
  },
};