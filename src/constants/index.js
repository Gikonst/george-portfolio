import CertiLand from "../assets/projects/CertiLandProject.png";
import MyPortfolio from "../assets/projects/My_Portfolio.jpg";
import SeoImage from "../components/seoImage";
import preview_image from "../assets/preview_image.jpg";

export const HERO_CONTENT = `I am a passionate .NET developer with a strong focus on creating robust and scalable RESTful APIs and backend solutions. After three years of self-study and completing a bootcamp, I honed my skills in technologies such as C# and .NET, along with MS SQL Server, React.js, and Python. I have also completed several certifications, further solidifying my knowledge in these areas. Additionally, I possess foundational and solid knowledge in machine learning, having undertaken specific projects that enhanced my understanding of data-driven solutions. I am eager to leverage my expertise to craft innovative solutions that drive business growth, enhance the robustness of systems, and improve user experiences. As a newcomer to the market, I look forward to contributing my creativity and technical knowledge to impactful projects and collaborating with like-minded professionals.`;

export const ABOUT_TEXT = `Before making the leap into programming, I used to be a lawyer and later an EU Tech Policy Advisor. After three years of self-study while working in Brussels and completing a Software Development bootcamp, I successfully entered the programming field by dedicating my after-work hours to study and practice. My previous corporate experience provides me with a valuable perspective that I apply to my work as a developer. Throughout my journey, I have gained proficiency in various programming languages, including Python, C#, and JavaScript, and have explored diverse programming concepts and algorithms. Currently, I am focused on building web APIs and backend servers using ASP.NET Core, and I aspire to further develop my skills as a developer while continuing to learn about new concepts in the field.
`;

export const EXPERIENCES = [
  {
    year: "2024 - 2025",
    role: "Software Developer",
    company: "PeopleCert",
    description: `I attended a full-time intensive programming bootcamp, where I was exposed to various technologies and programming languages. During the bootcamp, I completed multiple projects and earned certifications to validate my skills. For my final project, I wrote the backend for a certification website and led the project's team comprising six developers in total. In this capacity, I facilitated the connection and communication between the backend and the frontend, while also contributing code to the frontend development.`,
    technologies: ["C#", "ASP .NET", "JavaScript", "React.js", "MS SQL", "HTML-CSS", "Postman"],
  },
  {
    year: "2023 - 2024",
    role: "Pro Bono AI Consultant",
    company: "Rythmisis",
    description: `I led a project focused on developing a chatbot for the EU AI Act Regulation, where I managed a team of an AI engineer and legal experts. My responsibilities included organizing the data collection procedure for the project's dataset, ensuring that all necessary information was accurately gathered and structured. I also worked to facilitate communication among team members from different disciplines, fostering collaboration and ensuring that both technical and legal perspectives were integrated effectively throughout the project.`,
    technologies: ["Artificial Intelligence", "Data Collection", "Tech Policy", "EU AI Act"],
  },
  {
    year: "2019 - 2024",
    role: "Senior EU Tech Policy Advisor / Competition Lawyer",
    company: "Lighthouse Europe (Last Company)",
    description: `I worked with notable organizations such as AWS, Ingenico, and ACT | The App Association, where I represented clients before key European institutions, including the European Commission, the European Parliament, the EU Council, and national authorities. In this role, I led technology policy campaigns focusing on critical topics such as artificial intelligence (AI), cloud computing, and Standard Essential Patents (SEPs). My efforts were aimed at influencing policy decisions and advocating for the interests of our clients in the rapidly evolving tech landscape.`,
    technologies: ["Tech Policy", "EU Competition Law", "AI", "SEPs"],
  },

];

export const PROJECTS = [
  {
    title: "Backend - Certification Website",
    image: CertiLand,
    link: "https://github.com/Gikonst/MyExamsBackend",
    description:
      "A fully functional certification website with features like exams and certifications, feature editing by the admin and user authentication.",
    technologies: ["C#", "ASP .NET", "Entity Framework", "Identity-JWT", "MS SQL", "React.js"],
  },
  {
    title: "Small Projects Portfolio",
    image: MyPortfolio,
    link: "https://github.com/Gikonst/My-portfolio",
    description:
      "My very first repository. A collection of small projects that showcase my skills and expertise in various technologies.",
    technologies: ["Python", "C#", "JavaScript", "React"]
  },
];

export const CONTACT = {
  address: "Athens, Greece",
  email: "gskonstantin@hotmail.com",
};

export const Head = () => {
  <SeoImage customImage={"https://gikonst.github.io/george-portfolio" + preview_image}/>
}
