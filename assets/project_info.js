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
      "highlights":[
        {"Pixel-Perfect Design": ["This app exactly replicates the original Coinbase landing page, with precise attention to padding, sizing, and layout.",
                                  "Responsive design ensures the page looks perfect on all screen sizes, from small smartphones to large desktop monitors."
                                  ]
        },
        {"Dynamic Cryptocurrency Pricing": ["Cryptocurrency prices are dynamically fetched from multiple APIs (CryptoCompare and CoinMarketCap).",
          "A Node.js server combines the API data into a unified JSON file"
        ]},
        {"Skill Demonstration": ["Showcases the ability to deliver high-quality, design-driven applications by replicating professional-grade web page."]}
      ],
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
      "highlights":[
        {"Multi-User Simulation": ["Each user accesses only their unique board from the backend, showcasing multi-user simulation capabilities."]},
        {"Dynamic Task Management": ["Tasks are categorized by status (To Do, Pending, Complete) and can be moved between columns with a button click.",
          "The backend leverages the reduce function for efficient sorting of tasks into appropriate columns based on status."
        ]},
        {"Rich Task Notes": ["Each task supports notes, which can be edited directly in the frontend using the React Markdown Editor."]},
        {"Trash Can Feature":["Archived tasks are stored in a trash can, with the ability to be restored to their original columns."]},
        {"Backend Efficiency": ["Tasks are stored in a single MongoDB collection, reducing complexity and improving database management."]}
      ],
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
      "highlights":[
        {"Core JavaScript Focus": ["Built entirely with vanilla JavaScript, showcasing an understanding of DOM manipulation, event handling, and game logic."]},
        {"Parallax Scrolling": ["The dynamic background employs a parallax effect, creating an immersive sense of depth and movement."]},
        {"Variety of Enemies": ["Players face multiple enemy types, each each with different speed of movement."]},
      ],
      "tools":[
        {"Frontend": ["HTML", "CSS", "Vanilla JavaScript"]},
        {"Features": ["Parallax background"]}
      ],
      "codeLink":"https://github.com/AntonProLysenko/Frog-Minigame",
      "images":["./assets/img/TheFrogMainMenu.jpg", "./assets/img/TheFrogGame.jpg","./assets/img/TheFrogGameOver.jpg"]
    },
    "FlyMeToTheMoon":{
      "title":"Fly Me To The Moon",
      "overview":"Fly Me to the Moon is a VB.NET Windows Forms application designed as a comprehensive flight management system. This app simulates a real-world airline operation by providing tailored experiences for employees (admins, pilots, and attendants) and passengers. The app includes advanced role-based functionality, a dynamic ticket pricing algorithm, and a SQL database backend for robust data management.",
      "highlights":[
        {"Dynamic Ticket Pricing Algorithm": ["Adjusts prices dynamically based on demand.","Offers discounts for seniors, children, and seat selection charges."]},
        {"Advanced Input Validation": ["Ensures unique IDs for passengers and employees.",
                                    "Prevents duplication in assigning individuals to flights.",
                                    "Comprehensive input verification"]},
        {"Interactive Seat Selection": ["Visual plane layout with interactive checkboxes for seat selection. Taken seats are marked as inactive for clarity."]},
        {"Role-Based Employee System": ["Supports three distinct employee roles: Admin, Pilot, and Attendant.","Dynamic login system detects employee role and loads appropriate forms and content."]},
        {"Normalized Database":["SQL Database passed 3 first forms of normalization"]},
        {"Extra Features": ["Loading screens throughout the app for smooth user experience"]},
      ],
      "tools":[
        {"VB.NET": ["For front-end Windows Forms development."]},
        {"Microsoft SQL Database": ["For data storage"]}
      ],
      "codeLink":"https://github.com/AntonProLysenko/FlyMe2TheMoon",
      "images":["./assets/img/FlyMe2TheMoonMainMenu.JPG",
        "./assets/img/FlyMe2TheMoonLoadingScreen.JPG",
        "./assets/img/FlyMe2TheMoonPassengerLogin.JPG",
        "./assets/img/FlyMe2TheMoonPassengerMenu.JPG",
        "./assets/img/FlyMe2TheMoonPassengerBookFlight.JPG",
        "./assets/img/flyme2TheMoonPassengerSeatSelector.JPG",
        "./assets/img/FlyMe2TheMoonPassengerEditInfo.JPG",
        "./assets/img/FlyMe2TheMoonPassenger Past Flights.JPG",
        "./assets/img/FlyMe2TheMoonAdminMenu.JPG",
        "./assets/img/FlyMe2TheMoonAdminStatistics.JPG",
        "./assets/img/FlyMe2TheMoonAdminManage.JPG",
        "./assets/img/FlyMe2TheMoonAdminAddToFlight.JPG",
        "./assets/img/FlyMe2TheMoonAdminAddFlight.JPG",
        "./assets/img/FlyMe2TheMoonPilotMenu.JPG"
      ]
    }
  }
}