const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Humber College',
                degree: 'Information Technology Solutions',
                detail: "Post-secondary education in Information Technology Solutions with a GPA of 82.7/100.",
                year: 'January 2023 – August 2024',
                location: 'Toronto, ON, CA'
            },
            {
                id: 1,
                title: 'Gujarat Technology University, Rajkot',
                degree: 'Bachelor of Computer Science',
                detail: "Bachelor's Degree in Computer Science with a GPA of 8.4/10.",
                year: 'April 2019 – August 2022',
                location: 'Rajkot, GJ, IN'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'J&M Group',
                role: 'Full Stack Developer (Industry Capstone Internship)',
                url: 'no website',
                desc: "Developed a high-performance Job notification system using React, Spring Boot, PostgreSQL, and Redis, supporting 10,000+ concurrent users. Implemented Kafka for real-time job notifications and used Kubernetes for container orchestration.",
                year: 'April 2024 – Present',
                location: 'Toronto, ON, CA'
            },
            {
                id: 2,
                title: 'Nivi Data Consultant',
                role: 'Mobile Application Developer',
                url: 'https://play.google.com/store/apps',
                desc: "Developed a cross-platform application using Flutter, achieving 1000+ downloads on the play store. Utilized open-weather API for real-time weather information.",
                year: 'January 2022 – July 2022',
                location: 'Remote'
            },
        ]
    }
]

export default function handler(req, res) {
    res.status(200).json(background)
}
