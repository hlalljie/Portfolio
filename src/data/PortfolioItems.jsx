const PortfolioItems = {
  Featured: ['platinumAdvisors', 'blockBroker', 'inquizity'],
  Projects: {
    platinumAdvisors: {
      title: 'Platinum Advisors',
      excerpt:
        "Redesigned Platinum Advisors' website to more effectively communicate their professionalism and expertise to clients.",
      image: {
        path: '/images/',
        name: 'PlatinumAdvisorsThumbnail',
        extension: '.png',
        alt: "A screenshot of Platinum Advisors' homepage",
      },
      company: 'Nav Creative',
      url: 'https://www.platinumadvisors.com/',
      roles: ['Solo Designer'],
      years: '2023',
      technologies: ['Squarespace', 'Less', 'Javascript', 'HTML'],
      summary: `As the sole designer and developer from our studio, I led a website redesign for Platinum Advisors, a national advocacy firm looking to showcase their expanded reach. Working with two client representatives who represented key stakeholders, I managed the project from initial wireframes through custom development in Squarespace. 
        
        Despite challenges with an expanding scope and indirect stakeholder communication, I delivered a modern, premium design that effectively organized complex information and incorporated custom styling elements, including the Will Meyers Slideshow plugin and specialized portrait frames. The project concluded successfully with stakeholder approval, though it required careful budget management and rapid feedback coordination to meet deadlines.`,
      backgroundColor: '#282c34',
    },
    blockBroker: {
      title: 'Block Broker',
      excerpt:
        'Worked as solo frontend dev and team lead on this Web3 Hackathon project to democratize freelance contracting.',
      image: {
        path: '/images/',
        name: 'blockBrokerThumbnail',
        extension: '.jpg',
        alt: 'A screenshot of of the homepage of the Block Brokers frontend application',
      },
      company: 'MLH Web3 Hackathon',
      roles: ['Solo Designer'],
      years: '2023',
      technologies: ['React', 'CSS', 'Javascript'],
      github: 'https://github.com/Topupchips/MLH-Web3-Hackathon',
    },
    inquizity: {
      title: 'Inquizity',
      excerpt:
        'Product to save teachers time and give students a more efficient way of learning through AI quiz question generation.',
      image: {
        path: '/images/',
        name: 'inquizityThumbnail',
        extension: '.jpeg',
        alt: 'A visual representation of Inquizity the quiz generation app',
      },
      company: 'Test Company',
      roles: ['Developer', 'Designer'],
      years: '2023',
      technologies: ['React', 'Flask', 'Llama2'],
      github: 'https://github.com/hlalljie/QuizGeneratorFlaskReact',
    },
    dontGetSwatted: {
      title: "Don't Get Swatted",
      excerpt:
        'A branching story game built in 10 days for the 2024 One Button Jam',
      image: {
        path: '/images/',
        name: 'DontGetSwattedThumbnail',
        extension: '.png',
        alt: "An image of Don't Get Swatted's main screen",
      },
      company: 'One Button Jam',
      url: 'https://haydondo.itch.io/dont-get-swatted',
      roles: ['Developer'],
      years: '2024',
      technologies: ['Javascript', 'Twine'],
      summary: ` I worked as a developer alongside an artist, writer and another developer. With our main challenge being time, I focused solely on making sure the game was fully playable by the deadline. After coming up with the idea of a multiple choice, mad libs style story game, each group split off to flesh out the idea. I focused on understanding the visions of both the artist and writer translated them into issues we could tackle on the software side. 
      
      After we knew our initial requirement the other developer got to work on the base game and I looked into the future at what problems we would need to solve before the end. In doing this I found a software our writer could use to create and visualize branching story paths, trained them how to use it, and integrated it with the game for easy updates in the future. I then listened to the artist's vision and found a way to implement their ideas into the game. In between all of this I also worked to setup a Github action to deploy our game to itch.io whenever we pushed to the main branch, saving us time and coming in handy when itch.io went down shortly before the deadline as we already had most of our changes pushed and could easily retry the deployment.
      
      I then moved to other issues such as tweaking the frontend, adding a tracker for ending the player had found, making a last minute music addition and many other changes to get the game to it's destination. The game was was released in time and received positive feedback from the jam host and other jammers. It ended up being a great learning experience in how to execute on a tight deadline and coordinate with others for an awesome outcome that players got to enjoy.`,
      backgroundColor: '#3b2d42',
    },
  },
};

export default PortfolioItems;
