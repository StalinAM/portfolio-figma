import Project1 from '../assets/projects/project1.webp';
import Project2 from '../assets/projects/project2.webp';
import Project3 from '../assets/projects/project3.webp';
import Project4 from '../assets/projects/project4.webp';
const projectsData = [
    {
        id: 5, image: Project1, title: "Fylo", description: "Web presentation about cloud storage service and access from anywhere in the world.", tools: ["JavaScript", "CSS"], category: "complete", web: "https://stalinam.github.io/fylo/", github: "https://github.com/StalinAM/fylo"
    },
    {
        id: 1, image: Project2, title: "Advice Generator App", description: "Generate a new tip by clicking on the die icon via API connection.", tools: ["React.js", "CSS", "API Advice Slip"], category: "complete", web: "https://stalinam.github.io/adviceGeneratorApp/", github: "https://github.com/StalinAM/adviceGeneratorApp"
    },
    {
        id: 2, title: "Portfolio", description: "This is a app with JS", tools: ["js", "html", "css", "react"], category: "component"
        , web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    },
    {
        id: 3, image: Project3, title: "Crowdfunding", description: "Page to raise money through plans with progress bar and total number of sponsors.", tools: ["JavaScript", "CSS", ""], category: "complete", web: "https://stalinam.github.io/crowfunding-product-page/", github: "https://github.com/StalinAM/crowfunding-product-page"
    },
    {
        id: 4, title: "Portfolio", description: "This is a app with JS", tools: ["js", "html", "css", "react"], category: "component"
        , web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    }

    , {
        id: 6, image: Project4, title: "Template Portfolio", description: "Web developer portfolio template", tools: ["React.js", "Styled Components"], category: "complete", web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/PortfolioPersonal"
    },
    {
        id: 7, title: "Portfolio", description: "This is a app with JS", tools: ["js", "html", "css", "react"], category: "component"
        , web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    },
    {
        id: 8, title: "Portfolio", description: "This is a app with JS", tools: ["js", "html", "css", "react"], category: "component"
        , web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    },
    {
        id: 9, title: "Portfolio", description: "This is a app with JS", tools: ["js", "html", "css", "react"], category: "component"
        , web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    },
    {
        id: 10, title: "Portfolio", description: "This is a app with JS", tools: ["js", "html", "css", "react"], category: "component"
        , web: "https://stalinam.github.io/sunny-agengy/", github: "https://github.com/StalinAM/sunny-agengy"
    }
]
// SKILLS
const frontend = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Git' },
    { id: 5, name: 'Styled-Component' },
    { id: 6, name: 'React.js' },
]

const backend = [
    { id: 1, name: 'PHP' },
    { id: 2, name: 'Node Js', },
    { id: 3, name: 'Python' },
    { id: 4, name: 'MySQL' },
    { id: 5, name: 'Firebase' },
]
export { projectsData, frontend, backend }