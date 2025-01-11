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
        position: 'center top',
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
      summary: ` I worked as a developer alongside an artist, writer and another developer. With our main challenge being time, I focused solely ensuring sure the game was fully playable by the deadline. After coming up with the idea of a multiple choice, mad libs style story game, each group split off to work on their part. I focused on understanding the visions of both the artist and writer and translated them into issues we could tackle on the software side. 
      
      After we knew our initial requirement the other developer got to work on the base game and I looked at what future problems we would need to solve. I found a software our writer could use to create and visualize branching story paths, trained them how to use it, and integrated it with the game for easy updates in the future. Then I listened to the artist's vision and found a way to implement their visual ideas into the game. In between I setup a Github action to deploy our game to itch.io whenever we pushed to the main branch, saving us time and coming in handy when itch.io went down shortly before the deadline as we already had most of our changes pushed and could easily retry the deployment.
      
      Then I moved to other issues such as tweaking the frontend, adding a tracker for ending the player had found, making a last minute music addition and many other changes to get the game to it's destination. The game was was released in time and received positive feedback from the jam host and other jammers. It ended up being a great learning experience in how to execute on a tight deadline and coordinate with others for an awesome outcome that players got to enjoy.`,
      backgroundColor: '#3b2d42',
    },
    realLion: {
      title: 'Real Lion',
      excerpt: 'A modern design for a budding technology consultancy.',
      image: {
        path: '/images/',
        name: 'realLionThumbnail',
        extension: '.jpg',
        alt: 'An screenshot of the Real Lion Website',
      },
      company: 'Nav Creative',
      url: '',
      roles: ['Project Manager', 'Designer'],
      years: '2022',
      technologies: ['Squarespace', 'Less', 'Javascript', 'Memberspace'],
      summary: ``,
      backgroundColor: '#0d2232',
    },
    'bat-ti': {
      title: 'BA-TTI',
      excerpt:
        'A rebranding and website refresh to better guide students and better market the brand for the Bay Area Teacher Training Institute.',
      image: {
        path: '/images/',
        name: 'battiThumbnail',
        extension: '.jpg',
        alt: 'A screenshot of the BA-TTI website',
      },
      company: 'Nav Creative',
      url: 'https://www.ba-tti.org/',
      roles: ['Project Manager', 'Designer'],
      years: '2022',
      technologies: ['Squarespace', 'Less', 'Javascript'],
      summary: ``,
    },
    travelGurus: {
      title: 'Travel Gurus',
      excerpt:
        'Travel Gurus reached out for their first website looking to inspire their customers to travel to new places.',
      image: {
        path: '/images/',
        name: 'travelGurusThumbnail',
        extension: '.jpg',
        alt: 'Screenshot of the Travel Gurus website',
        position: 'center top',
      },
      company: 'Nav Creative',
      url: 'https://www.travelgurusgroup.com/',
      roles: ['Project Manager', 'Developer'],
      years: '2022',
      technologies: ['Squarespace', 'Javascript', 'Less'],
      summary: ``,
      backgroundColor: '#060e1c',
      draft: false,
    },
    nextAdventure: {
      title: 'Next Adventure',
      excerpt:
        'Next Adventure was looking to stun visitor with visuals of safari wildlife while crafting a unique user experience based on how long until planned journey.',
      image: {
        path: '/images/',
        name: 'nextAdventureThumbnail',
        extension: '.jpg',
        alt: 'A screenshot of the Next Adventure homepage',
        position: 'center top',
      },
      company: 'Nav Creative',
      url: 'nextadventure.com',
      roles: ['Project Manager', 'Designer'],
      years: '2022',
      technologies: ['Squarespace', 'Javascript', 'Less'],
      summary: ``,
      backgroundColor: '#434d3f',
      draft: false,
    },
    Test: {
      title: 'Test',
      excerpt: 'Lorem Ipsum Dolor Amet',
      image: {
        path: '/images/',
        name: 'Test',
        extension: '.jpg',
        alt: 'Test alt text',
        position: 'center top',
      },
      company: 'Test Company',
      url: 'testurl.com',
      roles: ['Test Role'],
      years: '1234',
      technologies: ['Skill1', 'Skill2'],
      summary: ``,
      backgroundColor: '#ff0000',
      draft: true,
    },
  },
};

export default PortfolioItems;
