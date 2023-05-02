import GodsWillImg from '../Images/GodsWill.jpg'
import jetBrainsImg from '../Images/Jetbrain.jpg'
import airbnbImg from '../Images/Airbnb.jpg'
import appleImg from '../Images/Apple.jpg'
import portfolioImg from '../Images/portfolio.jpg'
import JaneImg from '../Images/Jane.webp'
import Curator from '../Images/curator.png'

export const Link = [
    {
        linkName:'Home',
        href:'#home'
    },
    {
        linkName:'About',
        href:'#about'
    },
    {
        linkName:'Services',
        href:'#services'
    },
    {
        linkName:'Skills',
        href:'#skills'
    },
    {
        linkName:'Portfolio',
        href:'#portfolio'
    },
    {
        linkName:'Contact',
        href:'#contact'
    },
]

export const homePageContent = [
    {
        heading:[
            'Hello, I am Emmanuel',
            'A Frontend Developer',
            'And A Web Developer'
        ],
        description:`A Product Designer working at Facebook. 
        Separated they live in Bookmarksgrove right at the coast 
        of the Semantics, a large language ocean.`,
    }
]

export const ServiceContent = [
    {
        title:'Web Development',
        description:`Creation of web applications, web pages and
        websites using JavaScript frameworks and Libraries.`,
        icon:'fa-solid fa-code'
    },
    {
        title:'App Development',
        description:`Creation of fully functional multi-dimensional
        mobile apps using Java and Kotlin.`,
        icon:'fa-solid fa-mobile-screen'
    },
    {
        title:'UI/UX Design',
        description:`Conversion of Figma design and Prototype
        to HTML and React files. `,
        icon:'fa-solid fa-display'
    },
]


export const skillsIcon = [
    {
        iconName:'React',
        className:'fa-brands fa-react',
        iconColor:'#5ED3F3'
    },
    {
        iconName:'JavaScript',
        className:'fa-brands fa-square-js',
        iconColor:'#E6A328'
    },
    {
        iconName:'Angular',
        className:'fa-brands fa-angular',
        iconColor:'#DD0031'
    },
    {
        iconName:'Python',
        className:'fa-brands fa-python',
        iconColor:'#3A75A6'
    },
    {
        iconName:'Vue',
        className:'fa-brands fa-vuejs',
        iconColor:'#40B984'
    },
    {
        iconName:'WordPress',
        className:'fa-brands fa-wordpress',
        iconColor:'#2C8BAD'
    },
    {
        iconName:'NodeJS',
        className:'fa-brands fa-node',
        iconColor:'#7FC728'
    },
    {
        iconName:'HTML5',
        className:'fa-brands fa-html5',
        iconColor:'#DB4E25'
    },
    {
        iconName:'Git',
        className:'fa-brands fa-git-alt',
        iconColor:'#E84E32'
    },
    {
        iconName:'GitHub',
        className:'fa-brands fa-github',
        iconColor:'#000000'
    },
    {
        iconName:'Figma',
        className:'fa-brands fa-figma',
        iconColor:'#F87D7D'
    },
    {
        iconName:'Sass',
        className:'fa-brands fa-sass',
        iconColor:'#BA6191'
    }
]


export const flipBoxContent = [
    {
        img:GodsWillImg,
        heading:'Fully Responsive Church Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        githubLink:'',
        link:'https://dev-gods-will-pentecostal.pantheonsite.io/'
    },
    {
        img:Curator,
        heading:'Curator Video Migration',
        description:`Worked together with a team to migrate an 
        angular based project to React using React + 
        TypeScript + Scss + NextJS + StorybookJS`,
        githubLink:'https://github.com/curatorvideo/curator-react-frontend',
        link:'https://jetbrain-clone-project.vercel.app/',
        height:'100%',
        width:'150%'
    },
    {
        img:jetBrainsImg,
        heading:'Responsive Jetbrain Clone Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        githubLink:'https://github.com/EmmanuelVictor62/Jetbrain-clone-project',
        link:'https://jetbrain-clone-project.vercel.app/',
        height:'250%'
    },
    {
        img:airbnbImg,
        heading:'Responsive Airbnb Clone Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        githubLink:'https://github.com/EmmanuelVictor62/Airbnb-Clone/tree/main/airbnb',
        link:'https://airbnb-clone-ashen-two.vercel.app/'
    },
    {
        img:appleImg,
        heading:'Fully Responsive Apple Clone Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        githubLink:'https://github.com/EmmanuelVictor62/Apple.com',
        link:'https://royalmanuelapple.netlify.app/'
    },
    {
        img:portfolioImg,
        heading:'My Portfolio Website',
        description:`Lorem ipsum dolor sit amet consectetur 
        elit. Ipsa voluptatum ipsum, laudantium minima aliquam
        porro? Iste, Et, esta ah`,
        githubLink:'',
        link:''
    },
]

export const testimonialCardContent = [
    {
        name:'Sussie Dumond',
        content:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro?
        Iste, Et, esta ah Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa`,
        image:JaneImg
    },
    {
        name:'Jane Cole',
        content:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro?
        Iste, Et, esta ah`,
        image:JaneImg
    },
    {
        name:'Jane Cole',
        content:`Lorem ipsum dolor sit amet consectetur elit. 
        Ipsa voluptatum ipsum, laudantium minima aliquam porro?
        Iste, Et, esta ah`,
        image:JaneImg
    },
]

export const contactField = [
    {
       name:'Phone',
       className:'fa-solid fa-phone',
       content:'+2347049011040' 
    },
    {
        name:'Email',
        className:'fa-solid fa-paper-plane',
        content:'royalmanuel62@gmail.com' 
    },
    {
        name:'Website',
        className:'fa-solid fa-phone',
        content:'+2347049011040' 
    },
]