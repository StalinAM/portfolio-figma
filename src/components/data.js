import Project1 from '../assets/projects/project1.webp';
import Project2 from '../assets/projects/project2.webp';
import Project3 from '../assets/projects/project3.webp';
import Project4 from '../assets/projects/project4.webp';
import Project5 from '../assets/projects/project5.webp';
import Project6 from '../assets/projects/project6.webp';
const projectsData = [
    {
        id: 1, image: Project1, title: "Fylo", description: "Web presentation about cloud storage service and access from anywhere in the world.", tools: ["JavaScript", "CSS"], category: "complete", web: "https://stalinam.github.io/fylo/", github: "https://github.com/StalinAM/fylo"
    },
    {
        id: 2, image: Project2, title: "Advice Generator App", description: "Generate a new tip by clicking on the die icon via API connection.", tools: ["React.js", "CSS", "API Advice Slip"], category: "complete", web: "https://stalinam.github.io/adviceGeneratorApp/", github: "https://github.com/StalinAM/adviceGeneratorApp"
    },
    {
        id: 3, image: Project3, title: "Crowdfunding", description: "Page to raise money through plans with progress bar and total number of sponsors.", tools: ["JavaScript", "CSS"], category: "complete", web: "https://stalinam.github.io/crowfunding-product-page/", github: "https://github.com/StalinAM/crowfunding-product-page"
    },
    {
        id: 4, image: Project4, title: "Sunnyside", description: "Page to raise money through plans with progress bar and total number of sponsors.", tools: ["JavaScript", "CSS"], category: "complete", web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    }
    , {
        id: 5, image: Project5, title: "Template Portfolio", description: "Web developer portfolio template", tools: ["React.js", "Styled Components"], category: "complete", web: "https://template-portfolio-svam.netlify.app/", github: "https://github.com/StalinAM/PortfolioPersonal"
    },
    {
        id: 6, title: "Expenses chart ", description: "Spend chart component marking current day", tools: ["JavaScript", "CSS"], category: "component"
        , web: "https://stalinam.github.io/expenses-chart-component/", github: "https://github.com/StalinAM/expenses-chart-component"
    },
    {
        id: 7, title: "Interactive rating component", description: "Rating component on the service provided", tools: ["JavaScript", "CSS"], category: "component"
        , web: "https://stalinam.github.io/InteractiveCardDetailsForm/", github: "https://github.com/StalinAM/InteractiveCardDetailsForm"
    },
    {
        id: 8, title: "NFT Card", description: "Sample nft letter with buyer information", tools: ["HTML", "CSS"], category: "component"
        , web: "https://stalinam.github.io/NFT-PreviewCard/", github: "https://github.com/StalinAM/NFT-PreviewCard"
    }, {
        id: 9, image: Project6, title: "Portfolio (current)", description: "Web developer portfolio template", tools: ["React.js", "Styled Components", "React Router"], category: "complete", web: "https://svam.netlify.app/", github: "https://github.com/StalinAM/portfolio-figma"
    }
].reverse()
// SKILLS
const frontend = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Styled-Component' },
    { id: 5, name: 'React.js' },
]

const backend = [
    { id: 1, name: 'Git' },
    { id: 2, name: 'Python', },
    { id: 3, name: 'MySQL' },
    { id: 4, name: 'Firebase' },
]
// MENU

const listMenu = [
    { id: 1, link: '#home', title: 'home' },
    { id: 2, link: '#projects', title: 'works' },
    { id: 3, link: '#about', title: 'about' },
    { id: 4, link: '#contact', title: 'contact' },
]
export { projectsData, frontend, backend, listMenu }