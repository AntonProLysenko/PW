export default {
  "projects":{
    "apartmentWebsite":{
      "title":"Apartments Website",
      "overview":"This Apartment Website I created provides an engaging and user-friendly interface for new and existing residents. The website combines the distinct design aesthetic of the apartment complex, interactivity, and practical tools for property management. Visitors can explore apartments virtually, check availability, navigate, and contact the property without extra steps like copying and pasting contact information or directions—everything is accessible with a single click on the website.",
      "highlights":[
        {"Interactive Admin Dashboard": ["A separate admin site allows property managers to create, update, and manage apartment listings."]},
        {"Visitor Statistics and Analytics": ["The website collects IP addresses to provide admins with detailed analytics on unique visitors by city."]},
        {"Responsive Design for All Devices": ["The websites are optimized for excellent performance on devices of all sizes, from small mobile phones (e.g., iPhone 4) to tablets."]},
        {"Interactive Contact Features":[
          "A functional email form powered by EmailJS allows users to send inquiries directly from the site.",
          "Clickable phone numbers and email links improve user convenience, pre-filling relevant details for quick communication.",
          ]
        },
        {"Tech-Driven Backend": ["The backend, built with Node.js and MongoDB, provides efficient handling of user data and listings.",
                                  "Secure admin authentication and account management using JWT"]},
        {"Virtual Apartment Tours": ["An integrated 3D virtual tour lets potential residents explore the property directly on the website, providing a realistic experience."]}
      ],
      "tools":[
        {"Frontend": ["React.js", "HTML", "CSS"]},
        {"Backend": ["Node.js"," MongoDB"]},
        {"Authentication": ["JWT (JSON Web Token)"]},
        {"Libraries & Tools":[
          "FSLightbox (for gallery lightbox functionality)",
          "EmailJS (email form integration)",
          "AOS (Animation on Scroll for dynamic elements)"
          ]
        },
        {"Other Features": ["Google Maps integration", "3D virtual tour"]}
      ],
      "codeLink":"https://github.com/AntonProLysenko/Apartments-Website",
      "images":["/assets/img/SalemDevicesMockup.png","/assets/img/SalemContactUs.jpg","/assets/img/SalemAdminPage.jpg","assets/img/SalemEdit.jpg"]
    },
    "coinbaseClone":{
      "title":"Coinbase Clone",
    "overview":"I created this project as a pixel-perfect clone of the Coinbase landing page to showcase my ability to replicate a web page from a provided design. I focused on making the layout fully responsive, so it    looks great on mobile, desktop, and tablets. To add a functional touch, I integrated live cryptocurrency data through API connections, making the page both visually accurate and dynamic.",
      "highlights":"",
      "tools":[
        {"Frontend": ["React.js (TypeScript)", "HTML", "SCSS"]},
        {"Backend": ["Node.js"]},
        {"APIs": ["CryptoCompare", "CoinMarketCap"]},
        {"Other Features": ["Responsive design for all devices"]}
      ],
      "codeLink":"https://github.com/AntonProLysenko/Coinbase",
      "images":["./assets/img/CoinbaseDevicesMockup.png","./assets/img/CoinbaseHeaderDevices.png"]
  },
    "agileBoard":{
      "title":"Agile Board",
      "overview":"Agile Board is a light clone of the Trello board, designed to refine my skills in JWT authentication, dynamic data handling, and intuitive user interaction. This multi-user application allows each user to manage their own tasks seamlessly while using a single backend that processes requests efficiently. The app focuses on task organization, status tracking, and enhanced user experience with markdown editing and visually appealing backgrounds.",
      "highlights":"",
      "tools":[
        {"Frontend": ["React.js", "CSS"]},
        {"Backend": ["Node.js"]},
        {"Database": ["MongoDB"]},
        {"Authentication": ["JWT (JSON Web Token)"]},
        {"Libraries & Tools": [
          "React Markdown Editor (task notes editing)",
          "Picksome (dynamic background images)"
        ]}
      ],
      "codeLink":"https://github.com/AntonProLysenko/Task-Tacker",
      "images":["./assets/img/TrelloDevicesMockup.png","./assets/img/TrelloLogin.jpg","./assets/img/TrelloCardView.jpg","./assets/img/TrelloEditCard.jpg","./assets/img/TrelloArchive.jpg"]
    },
    "triviaGame":{
      "title":"Trivia Game",
      "overview":"",
      "highlights":"",
      "tools":"",
      "codeLink":"https://github.com/AntonProLysenko/Trivia_minigame",
      "images":["screenshot1","screenshot2","screenshot3","screenshot4"]
    },
    "TheFrogGame":{
      "title":"The Frog Platformer",
      "overview":"The Frog is a single-level platformer game built completly with vanilla JavaScript.With this project I was trying to showcase my early programming skills and creative game design. The game features a parallax scrolling background, engaging gameplay with a variety of enemies, and a charming visual style.",
      "highlights":"",
      "tools":[
        {"Frontend": ["HTML", "CSS", "Vanilla JavaScript"]},
        {"Features": ["Parallax background"]}
      ],
      "codeLink":"https://github.com/AntonProLysenko/Frog-Minigame",
      "images":[,"./assets/img/TheFrogMainMenu.jpg", "./assets/img/TheFrogGame.jpg","./assets/img/TheFrogGameOver.jpg"]
    }
  }
}