const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am a skilled Full Stack developer with expertise in building robust web applications using React, Next.js, Node.js, and JavaScript/TypeScript. I have a deep understanding of server-side rendering, API integration, and database management with MySQL, PostgreSQL, MongoDB, and Firebase. I also possess experience in microservices architecture and containerization using Docker.',
    },
    {
        id: 1,
        title: 'Microservices and Distributed Systems',
        desc: "I have significant experience in designing and developing microservices using Java, Spring Boot, and Kafka. My knowledge extends to building scalable and resilient systems that can handle high concurrency and real-time processing. I am proficient in using ORM tools like Drizzle and Hibernate to streamline database interactions.",
    },
    {
        id: 2,
        title: 'Front-End Development and UI/UX Design',
        desc: 'I specialize in front-end development using React, Next.js, and Tailwind CSS, focusing on building responsive and user-friendly interfaces. My UI/UX design skills are complemented by practical experience in using tools like Figma and Adobe XD to create intuitive and visually appealing designs.',
    },
    {
        id: 3,
        title: 'Version Control and CI/CD',
        desc: "Git and GitHub are integral to my development process. I utilize GitHub Actions for CI/CD pipelines, ensuring that code is tested and deployed efficiently. My familiarity with Vercel allows me to deploy and manage web applications seamlessly.",
    },
    {
        id: 4,
        title: 'Real-Time Applications and WebSockets',
        desc: 'I have experience in building real-time applications using WebSockets, enabling live communication between users. This expertise has been applied in projects like multiplayer games and job notification systems, where real-time data processing is crucial.',
    },
    {
        id: 5,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I regularly contribute to open source projects on weekends, which allows me to learn from the best practices of other developers and contribute to the community for the greater good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
