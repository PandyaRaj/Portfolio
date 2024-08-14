const portfolio = [
  
    {
        "id": 1,
        "projectName": "React Rooks",
        "url": "https://react-rooks-ui.vercel.app/",
        "image": "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/buh_buh_lmao_dakmem_dakwa/php1rtwO1.png",
        "projectDetail": "React Rooks is a web-based chess game that allows users to play against an AI (Stockfish). It features game history, on-demand gameplay, real-time game analysis, player statistics, and three difficulty levels. The application includes user authentication for a personalized experience.",
        "technologiesUsed": [
            {
                "tech": "ReactJS"
            },
            {
                "tech": "TypeScript"
            },
            {
                "tech": "TailwindCSS"
            },
            {
                "tech": "Node.js"
            },
            {
                "tech": "Next.js"
            },
            {
                "tech": "MongoDB"
            },
            {
                "tech": "WebSockets"
            },
            {
                "tech": "Stockfish WASM"
            },
            {
                "tech": "JWT"
            },
            {
                "tech": "Chess.js"
            },
            {
                "tech": "React-Chessboard"
            }
        ]
    },
    {
        "id": 3,
        "projectName": "Weather Forecast",
        "url": "https://play.google.com/store/apps/details?id=com.nividata.weather_forecast",
        "image": "https://play-lh.googleusercontent.com/mQwylV85SKOB6tl56fmWyzGo_QYW0IjWmplc2haDprLLAceNY40YUGXTAQZ-hbPFxQ=w240-h480-rw",
        "projectDetail": "Weather Forecast gives you current weather, weather forecast, and history of any location you are in. The app allows you to search for a location, check its weather, and save a list of important locations. Key features include 5 days of weather history, auto-locating your current location, live data, unit display options, and saving previous location searches.",
        "technologiesUsed": [
            {
                "tech": "React Native"
            },
            {
                "tech": "JavaScript"
            },
            {
                "tech": "OpenWeather API"
            },
            {
                "tech": "SQLite"
            },
            {
                "tech": "Redux"
            }
        ]
    },   
    {
        "id": 4,
        "projectName": "Bank Transaction List App",
        "url": "https://github.com/PandyaRaj/BankTransactionApp",
        "image": "https://cdn2.iconfinder.com/data/icons/business-line-color-bg-strawberry-economy/512/transaction-1024.png",
        "projectDetail": "The Bank Transaction List App is a Spring-based application providing RESTful APIs for managing bank transactions. It allows users to retrieve transaction lists and calculate total amounts based on transaction types. Built with Maven, the app uses Tomcat 7 as an embedded web container, ensuring easy deployment and testing.",
        "technologiesUsed": [
            {
                "tech": "Spring Framework"
            },
            {
                "tech": "Maven"
            },
            {
                "tech": "Tomcat 7"
            },
            {
                "tech": "Java"
            },
            {
                "tech": "HTTPS"
            }
        ]
    },{
        "id": 5,
        "projectName": "E-commerce Microservices Application",
        "url": "https://github.com/PandyaRaj/E-Commerce_MicroServices",
        "image": "https://www.kindpng.com/picc/m/465-4654006_e-commerce-icon-illustration-hd-png-download.png",
        "projectDetail": "This project is a basic e-commerce application developed using a microservices architecture with the Spring Framework in Java. The application is containerized using Docker, with inter-service communication facilitated by REST APIs and Kafka for asynchronous messaging. It consists of multiple microservices handling various aspects of the e-commerce platform.",
        "technologiesUsed": [
            {
                "tech": "Spring Framework"
            },
            {
                "tech": "Docker"
            },
            {
                "tech": "Kafka"
            },
            {
                "tech": "Java 17"
            },
            {
                "tech": "Maven"
            },
            {
                "tech": "React"
            },
            {
                "tech": "PostgreSQL"
            }
        ],
        "features": [
            "Browse products, view details, and add items to a cart.",
            "Manage product information including name, description, price, image ID, and stock availability.",
            "Process customer orders, calculate total price, and update product stock.",
            "Manage admin operations such as creating, deleting, viewing, and updating products, and viewing all orders.",
            "Retrieve product images based on image ID.",
            "API Gateway for managing external requests and routing to microservices.",
            "Swagger documentation for API endpoints."
        ],
        "apiEndpoints": {
            "Products Service": "http://localhost:/products",
            "Orders Service": "http://localhost:/orders",
            "Admin Service": "http://localhost:/admin",
            "Image Service": "http://localhost:/images",
            "Swagger Documentation": "http://localhost:/swagger-ui.html"
        },
        "installation": [
            "Ensure Docker, Docker Compose, Java 17, and Maven are installed.",
            "Clone the repository: git clone https://github.com/PandyaRaj/E-Commerce_MicroServices.git",
            "Navigate to the project directory: cd e-commerce-microservices",
            "Build the project: mvn clean install",
            "Run Docker Compose: docker-compose up --build"
        ],
        "testing": "Import the provided Postman collection for easier testing of the endpoints. Use username: user and password: password for accessing secured endpoints.",
        "contributors": [
            "Umang Patel",
            "Raj Pandya"
        ],
        "license": "MIT License"
    },
    
     
    
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
