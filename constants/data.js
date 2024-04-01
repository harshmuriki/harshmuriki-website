const userData = {
  githubUsername: "harshmuriki",
  name: "Harsh Muriki",
  designation: "Student",
  avatarUrl: "/avatar.png",
  email: "harshsuhith@gmail.com",
  // phone: "+1 000 000 0000",
  address: "Atlanta, Georgia, USA.",
  projects: [
    {
      title: "Stereo-Vision-Finger-Tracker",
      link: "https://github.com/harshmuriki/Stereo-Vision-Finger-Tracker.git",
      imgUrl: "/stereovisiontracker.jpeg",
      tools: ["Python, OpenCV"],
      description: "A python module to track finger movements using a webcam in the 3D space.",
      siteLink: "Stereo-Vision-Finger-Tracker",
      longDescription: ["A python module to track finger movements using a webcam in the 3D space.", ["ewdewd dwedewdwd dwedwedwed"]],
    },
    {
      title: "RoboticGuitar",
      link: "",
      imgUrl: "/roboticguitar.jpg",
      tools: ["Python, Arduino, Raspberry Pi"],
      description: "A robotic guitar that plays music using a robotic arm and a guitar.",
      siteLink: "roboticguitar",
    },
    {
      title: "EvoCal",
      link: "https://evocal.vercel.app/",
      imgUrl: "/evocal.jpeg",
      tools: ["React, Node.js, Express, MongoDB"],
      description: "A web app to integrate Outlook/Gmail with Google Calendar.",
      siteLink: "evocal",
    },
    {
      title: "ResumeGPT",
      link: "https://github.com/harshmuriki",
      imgUrl: "/resumeGPT.jpeg",
      tools: ["Python, OpenAI, Streamlit"],
      description: "A GPT-3 based resume editor.",
      siteLink: "resumegpt",
    },
    {
      title: "SpotifyYoutube",
      link: "https://spotifyyoutube.vercel.app/",
      imgUrl: "/SpotifyYoutube.jpeg",
      tools: ["React, Node.js, Express, MongoDB"],
      description: "A web app to play Spotify songs on Youtube.",
      siteLink: "spotifyyoutube",
    },
    {
      title: "appie-AI-Chatbot",
      link: "https://github.com/harshmuriki/appie-AI-ChatBot",
      imgUrl: "/chatbot.jpeg",
      tools: ["Python, OpenAI, Streamlit"],
      description: "A chatbot that uses GPT-3.5 to chat with appian's customers.",
      siteLink: "appie-ai-chatbot",
    },
    {
      title: "Image2Plate",
      link: "https://image2plate.streamlit.app/",
      imgUrl: "/image2plate.jpeg",
      tools: ["Python, Streamlit"],
      description: "A web app to convert images to recipes.",
      siteLink: "image2plate",
    },
    {
      title: "Personal Portfolio",
      link: "https://harshmuriki-website.vercel.app/",
      imgUrl: "/portfolio.png",
      tools: ["React, Node.js, Express, MongoDB"],
      description: "My personal portfolio website.",
      siteLink: "personal-portfolio",
    },
    {
      title: "MemoryGPT",
      link: "https://github.com/harshmuriki/GPT-4-Based-Memory-Game",
      imgUrl: "/memorygame.jpeg",
      tools: ["Python, OpenAI, Streamlit"],
      description: "A memory game that uses GPT-4 to generate cards or colors.",
      siteLink: "gpt-4-based-memory-game",
    },
    {
      title: "MealPirates",
      link: "https://mealpirates.app/",
      imgUrl: "/mealpirates.jpeg",
      tools: ["React, Node.js, Express, MongoDB"],
      description: "A startup to deliver restaurant quality food at restaurant prices.",
      siteLink: "mealpirates",
    },
    {
      title: "Phone Pose",
      link: "https://github.com/harshmuriki/Find_Center_Phone_CV",
      imgUrl: "/phonecenter.jpeg",
      tools: ["Python, OpenCV, Streamlit"],
      description: "A computer vision project to find the center of a phone.",
      siteLink: "cv-finding-center-of-phone",
    },
  ],
  about: {
    title:
      "I'm a current senior at Georgia Tech majoring in Computer Science. I like to build software products in the fields of Robotics, Computer Vision, ML and AI.",
    description: [
      `I started coding directly with C++ in 6th Grade (which wasn't a great idea ;) ). Since then I have learnt (self-taught or courses or Chat-GPT-ing) languages like Python, JavaScript, React, Node.js, C++, C, Assembly (I go all the way).`,
      `I have got into this field when I wanted to break open my RC car that was given to me on my birthday just to see what was inside of it. Ever since then, I have been building and breaking (both physical and code) things.`,
      `I have since built projects like an AI chatbot, a GPT-4 based memory game, a GPT-3 based resume generator, a Spotify-Youtube music player, a startup to deliver restaurant quality food at restaurant prices, an AI/CV website to convert images to recipes, a computer vision project to find the center of a phone, and a website to showcase all my projects.`
    ],
    currentProject: "Stereo-Vision-Finger-Tracker",
    currentProjectUrl: "https://github.com/harshmuriki/Stereo-Vision-Finger-Tracker.git",
  },
  experience: [
    {
      title: "Software Engineer Intern",
      company: "Appian",
      year: "2023",
      companyLink: "https://appian.com",
      desc: "Developed robust API request mocking product leveraging Kubernetes for enhanced resource efficiency and scalability",
      detail_desc: [
        `Developed robust API request mocking product, leveraging Kubernetes for enhanced resource efficiency and scalability`,
        `Created Kubernetes Custom Resource Definition (CRD) and Python controller tailored to testing requirements`,
        `Programmed software tool using Python that optimizes file dependency visualization across multiple Git repositories using .toml files, saving nearly $15k yearly`
      ],
      siteLink: "appian",
      photos: ["/appian1.png", "/appian2.png", "/appian3.png"],
      tools: ["Python, Kubernetes, Docker, React, GitHub, GitLab, Jenkins, JUnit"],
    },
    {
      title: "Undergraduate Student Researcher",
      company: "Georgia Tech",
      year: "2021-2023",
      companyLink: "https://arxiv.org/abs/2209.08690",
      desc: "Designed and constructed an autonomous robotic system that captures multiple 2D plant images, transforming them into 3D reconstructions for comprehensive volumetric analysis.",
      detail_desc: [
        `Applied filtering CV algorithms coded in Python to accurately position robot arm for optimal position with respect to plant, which reduced manual workload by 50%`,
        `Employed PyTorch and OpenCV libraries to modify 3D point clouds to convert them to use for volumetric analysis`,
        `Developed a path-planning algorithm for the movement of the cable robot to accurately position it to every grid in system`,
        `Built ROS algorithms to enable autonomous control from remote locations using C++ and Python libraries`,
        `Utilized the Linux environment to process 3D reconstructions using the A100 GPU`
      ],
      siteLink: "research",
      photos: ["/research1.png", "/research2.png", "/research3.png"],
      tools: ["Python, Computer Vision, OpenCV, Open3D, Linus, C++, ROS, GitHub, Raspberry PI, Ubuntu, Arduino"],
      other: ["https://arxiv.org/abs/2209.08690"]
    },
    {
      title: "Co-Founder & Developer",
      company: "MealPirates",
      year: "2022-2023",
      companyLink: "https://mealpirates.app/",
      desc: "Developed a service which delivers resturant quality food at resturant prices.",
      detail_desc: [
        `Founded a service to deliver restaurant food at prices lower than competitors`,
        `Led ideation and backend development; utilized Python and Twilio API to integrate mass text messaging to customers`,
        `Scaled the idea up to 1000 orders with total revenue of over $8000 in 5 months`,
        `Selected by Georgia Tech CreateX Startup launch program, offered $400K in seed funding to launch the product`
      ],
      siteLink: "mealpirates",
      photos: ["/mealpirates.png", "/mealpirates.png", "/mealpirates.png"],
      tools: ["Leadership, Public Speaking, Customer Discovery, Netowrking, Python, API Development, React, Next.js, Node.js,"],
    },
    {
      title: "Software Developer Intern",
      company: "Campus Talk",
      year: "2020-2021",
      companyLink: "https://harshmuriki.com/",
      desc: "Managed QA for iOS and Android apps, conducted competitive analysis, and oversaw the development and launch of new connectivity features.",
      detail_desc: ["abcd", "efgh", "ijkl"],
      siteLink: "campustalk",
      photos: ["/campustalk1.png", "/campustalk2.png", "/campustalk3.png"],
      tools: ["Customer Discovery, Product Development, Competitor Analysis"],
    },
    {
      title: "Robotics Intern",
      company: "Marut Drones",
      year: "2020",
      companyLink: "https://marutdrones.com/",
      desc: "Helped build an agricultural industrial drone.",
      detail_desc: [
        `Co-Built an autonomous agricultural drone that sprays pesticides over lakes to kill mosquitos that is more effective than conventional means`,
        `Used a hexacopter equipped with 10 kV brushless motors powered by two 20,000 mAh LiPo batteries with a flight time of 30 min`
      ],
      siteLink: "marutdrones",
      photos: ["/marutdrones1.png", "/marutdrones2.png", "/marutdrones3.png"],
      tools: ["Drone development, Python, Arduino, Raspberry Pi"],
    },
  ],
  resumeUrl:
    "https://drive.google.com/drive/folders/1_b_-1BgjPf5m0V7V37Eqt4clDv68yPfl?usp=sharing",
  socialLinks: {
    instagram: "https://www.instagram.com/harshmuriki24/",
    twitter: "https://twitter.com/Harshmuriki24",
    linkedin: "https://www.linkedin.com/in/venkata-harsh-muriki/",
    github: "https://github.com/harshmuriki",
    peerlist: "https://peerlist.io/harshmuriki",
    playbook: "https://www.playbook.com/s/blurredreality/QN1CshVfAwyQfCiMg1CyfMju"
  },
};

export default userData;
