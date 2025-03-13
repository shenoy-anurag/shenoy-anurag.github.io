// Skills Icons
// import htmlIcon from "./images/html.svg"
// import cssIcon from "./images/css.svg"
// import jsIcon from "./images/javascript.svg"
// import designIcon from "./images/design.svg"
// import codeIcon from "./images/code.svg"
import reactIcon from "./images/react.svg"
import pythonIcon from "./images/python.svg"
import tensorflowIcon from "./images/tensorflow.svg"
import golangIcon from "./images/golang-gopher.svg"
import dockerIcon from "./images/docker.svg"
import numpyIcon from "./images/numpylogo2.svg"
import pandasIcon from "./images/pandas2.svg"
import nlpIcon from "./images/NLP.png"
import mongodbIcon from "./images/mongodb.svg"
import sqlIcon from "./images/sql.png"
import ollamaIcon from "./images/ollama.svg"
import virtualThereminImg from "./images/virtual-theremin.png"
import gestureXDemoGIF from "./images/gesturex-project-demo.gif"
import hinDictGIF from "./images/hindict/hindict-demo-aadhyatmik-sm.gif"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedInIcon from "./images/linkedin.svg"
import twitterIcon from "./images/twitter.svg"
import kaggleIcon from "./images/kaggle.svg"

const BEGINNER = "beginner"
const INTERMEDIATE = "intermediate"
const ADVANCED = "advanced"
const EXPERT = "expert"

export default {
  //   Header Details ---------------------
  name: "Anurag Shenoy",
  firstName: "Anurag",
  lastName: "Shenoy",
  headerTagline: "Building digital products, and obtaining insights from data using deep learning",
  headerTaglines: [
    "I’m a Software Engineer based in the US,",
    "passionate about AI-driven solutions."
  ],
  //   Header Paragraph
  headerParagraph:
    "Software Engineer specialized in ML with over 5 years of experience in building ML / AI models and web applications.",

  //Contact Email
  contactEmail: "anuragshenoy21@gmail.com",

  // End Header Details -----------------------

  // Projects Section ------------------------
  projects: [
    {
      title: "HinDict",
      para:
        "An LLM app which helps you to find definitions of Hindi words and their English counterparts.", 
      imageSrc: hinDictGIF,
      url: "https://hindict.anuragshenoy.in/",
    },
    {
      title: "Virtual Theremin",
      para:
        "A virtual Theremin powered by Google's mediapipe AI hand detection model.", 
      imageSrc: virtualThereminImg,
      url: "https://virtualtheremin.netlify.app/",
    },
    {
      title: "Aggre-Gator",
      para:
        "Hackathon Winning Project! A News aggregator service which scrapes news networks for articles, and provides user with a feed. Built using Python, Flask, Celery, MongoDB, RabbitMQ, and ElasticSearch and deployed on Amazon LightSail.",
      imageSrc:
        "https://i.imgur.com/Sls8KNp.png",
      url: "https://github.com/shenoy-anurag/Aggre-Gator",
    },
    {
      title: "Simple Reddit",
      para:
        "Reddit clone using Golang, Angular & MongoDB. We have used Software Engineering best practices and Agile methodologies.",
      imageSrc:
        "https://i.imgur.com/ITitoe2.png",
      url: "blog/simple-reddit",
    },
    {
      title: "Data Science Chatbot",
      para:
        "A chatbot named Gyan who can teach you concepts of machine learning and data science.",
      imageSrc:
        "https://i.imgur.com/lJwrF4O.png",
      url: "https://github.com/shenoy-anurag/data-science-chatbot",
    },
    {
      title: "Baits", 
      para:
        "Probes/Baits extraction from DNA Sequences",
      imageSrc:
        "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
      url: "blog/bioinformatics-proj-proposal/",
    },
    {
      title: "Hand Gesture Recognition",
      para:
        "A Hand Gesture Recognition App being built for Human Computer Interaction project. We are comparing hand gestures with tangible interaction to research usability, and naturalness of both interaction methods.", 
      imageSrc: gestureXDemoGIF,
      url: "https://gesturex.netlify.app/",
    },
    /*
    ,{
        title: 'Project Seven',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Projects Section -----------------------

  // About Section --------------
  aboutParaOne:
    "Graduated with a Masters in Computer Science from the University of Florida, and am actively looking for opportunities.",
  aboutParaTwo:
    "I use Natural Language Processing and other Deep Learning technologies to enable computers to interact with the world around them. I’m intrigued by the human brain and its capacity to process information, categorize objects, recognize patterns and form intelligent thoughts seemingly effortlessly unlike machines (so far).",
  aboutParaThree:
    "When I’m not developing software or being lost in thought, I like to read books, play football (soccer), play the piano, listen to music, hiking, biking and leather-crafting.",
  aboutImage:
    "https://i.imgur.com/0rnoUPB.png",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: pythonIcon,
      para: "5 years of professional experience. 6.5 years overall.",
      level: EXPERT,
    },
    {
      img: numpyIcon,
      para: "5 years of work experience wrangling and working with data.",
      level: EXPERT,
    },
    {
      img: pandasIcon,
      para: "5 years of work experience wrangling and working with data.",
      level: EXPERT,
    },
    {
      img: tensorflowIcon,
      para: "3 years of work experience designing deep learning models for NLP and CV.",
      level: ADVANCED,
    },
    {
      img: nlpIcon,
      para: "3 years of work experience designing NLP and NLU models.",
      level: ADVANCED,
    },
    {
      img: mongodbIcon,
      para: "3 years of work experience with MongoDB.",
      level: ADVANCED,
    },
    {
      img: sqlIcon,
      para: "6 months of work experience with PostgreSQL.",
      level: INTERMEDIATE,
    },
    {
      img: dockerIcon,
      para: "3 years of work experience working with containers.",
      level: INTERMEDIATE,
    },
    {
      img: ollamaIcon,
      para: "Deployed Local Large Language models such as llama 3.2 7B",
      level: INTERMEDIATE,
    },
    {
      img: reactIcon,
      para: "6 months of experience working on personal and class projects.",
      level: INTERMEDIATE,
    },
    {
      img: golangIcon,
      para: "4 months of experience working on a class project.",
      level: INTERMEDIATE,
    },
    // {
    //   img: htmlIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
    // {
    //   img: cssIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
    // {
    //   img: jsIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's build something great together",
  contactPhoneNumber: "+1 (352)-888-9648",
  resume: {
    urlPdf: "https://drive.google.com/file/d/1VlPHVgvttEx-UtJzm7N_Lzt5GHOepcUZ/view?usp=sharing",
    urlDoc: "https://docs.google.com/document/d/1jY9xVGwHeCfXm0dQ-lRzO9Y888IM-mRU/edit?usp=sharing&ouid=107150247661293569256&rtpof=true&sd=true",
  },

  // -------------- End Contact Section ---------------

  // -------------- Footer Section --------------
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/shenoy-anurag"
    },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/anuragshenoy/",
    },
    {
      img: kaggleIcon,
      url: "https://www.kaggle.com/anurags397",
    },
    {
      img: twitterIcon,
      url: "https://twitter.com/anurag397",
    },
    {
      img: "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=anuragshenoy&button_colour=000001&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00",
      url: "https://buymeacoffee.com/anuragshenoy",
    }
  ],
  // -------------- End Footer Section ---------------
}
