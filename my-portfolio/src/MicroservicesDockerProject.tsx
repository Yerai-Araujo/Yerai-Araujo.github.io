import { Link } from 'react-router-dom';
import './App.css';

const MicroservicesDockerProject = () => {
  return (
    <div className="content">
      <h1>Microservices and Docker project</h1>
      <div className="project-header">
        <h2>Project overview</h2>
        <a
          href="https://github.com/Yerai-Araujo/microservices-docker"
          className="github-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub Repository
        </a>
      </div>
      <p>
      This project is a containerized microservices architecture consisting of two Spring Boot 
      applications: <br />
      user-service for user management and product-service for product management, both 
      communicating over HTTP. <br />
      The services are built with Java, use Docker volumes for data persistence 
      with separate schemas, and are orchestrated using Docker Compose for simplified multi-container 
      management. <br />
      The user-service handles registration, authentication, and profile management, 
      secured with JWT-based access control, while the product-service manages product information. <br />
      Designed to be modular and scalable, the architecture supports independent development and 
      deployment of services, enabling easier maintenance and updates. <br />
      Docker and Docker Compose 
      streamline deployment, making setup and configuration straightforward, showcasing a modern 
      approach to building and deploying microservices with Spring Boot and Docker. <br />
      </p>
      <p>
      <h2>Project architecture</h2>
      <strong>user-service:</strong> Handles user registration, authentication, and profile management using JWT.<br />
      <strong>product-service:</strong> Manages product information and is protected by JWT-based access control.<br />
      Both services use Spring Boot and are orchestrated with Docker Compose.
      </p>
      <p>
      <h2>Persistence</h2>
      Each service uses its own isolated MySQL database container, which means there is true service
      independence because of no tight coupling or shared DB tables between services.<br />
      It also improves the scalability and performance isolation. We can scale one service without 
      impacting another's DB load, and in a cloud setup, each DB could live on different optimized 
      hardware.<br />
      Finally it provides easier CI/CD and test environments, because services can spin up and 
      tear down their own DB instances during tests. There won't be cross-contamination of test 
      data between services.<br />
      On the other hand, data is persisted using Docker volumes, they are portable and backup-friendly,
      we can inspect, back up, or even move the volume. Besides it is ready for production, volumes 
      simulate what managed DBs do in the cloud. We can also migrate from a volume to a cloud DB 
      without changing our app.<br />
      </p>
      {/* Use Link for internal navigation */}
      <Link to="/" className="back-to-home-link">Back to Home</Link>
    </div>
  );
};

export default MicroservicesDockerProject;