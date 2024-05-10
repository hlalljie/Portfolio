const PortfolioItems = {
  Featured: ["Platinum Advisors", "Block Broker", "Inquizity"],
  Projects: {
    "Platinum Advisors": {
      title: "Platinum Advisors",
      excerpt:
        "Redesigned Platinum Advisors' website to more effectively communicate their professionalism and expertise to clients.",
      image: {
        path: "/images/",
        name: "PlatinumAdvisorsThumbnail",
        extension: ".png",
        alt: "A screenshot of Platinum Advisors' homepage",
      },
      company: "Nav Creative",
      link: "https://www.platinumadvisors.com/",
      roles: ["Solo Designer"],
      years: "2023",
      technologies: ["Squarespace", "Less", "Javascript", "HTML"],
      github: "https://github.com/Username/Repo",
    },
    "Block Broker": {
      title: "Block Broker",
      excerpt:
        "Worked as solo frontend dev and team lead on this Web3 Hackathon project to democratize freelance contracting.",
      image: {
        path: "/images/",
        name: "blockBrokerThumbnail",
        extension: ".jpg",
        alt: "A screenshot of of the homepage of the Block Brokers frontend application",
      },
      company: "MLH Web3 Hackathon",
      link: "",
      roles: ["Solo Designer"],
      years: "2023",
      technologies: ["React", "CSS", "Javascript"],
      github: "https://github.com/Username/Repo",
    },
    Inquizity: {
      title: "Inquizity",
      excerpt:
        "Product to save teachers time and give students a more efficient way of learning through AI quiz question generation.",
      image: {
        path: "/images/inquizityThumbnail.jpg",
        alt: "A screenshot of the content generating loading icon from the Inquizity first iteration",
      },
      company: "Test Company",
      link: "https://example.com",
      roles: ["Developer", "Designer"],
      years: "2023",
      technologies: ["React", "Flask", "Llama2"],
      github: "https://github.com/Username/Repo",
    },
    "Test Project": {
      title: "Test Project",
      excerpt:
        "This is a test project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, unsalad dayas arem ovem.",
      image: { path: "https://picsum.photos/500/400" },
      company: "Test Company",
      link: "https://example.com",
      roles: ["Developer", "Designer"],
      years: "2023",
      technologies: ["Python", "Javascript"],
      github: "https://github.com/Username/Repo",
    },
  },
};

export default PortfolioItems;
