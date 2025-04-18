import { Link } from 'react-router-dom';
import './App.css'

const ProjectsPage = () => {
  return (
    <div className="content">
      <h2>Spring Security project</h2>
      <ul>
        <li>
          Building an <strong>E-commerce</strong> and securing it with Spring Security.
        </li>
        <li>
          Technologies: <strong>Java, Spring, and SQL</strong>
        </li>
        <li>
          <Link to="/projects/spring_security_project">More information about this project</Link>
        </li>
      </ul>

      <h2>Microservices and Docker project</h2>
      <ul>
        <li>
          Building some microservices and deploying them with Docker.
        </li>
        <li>
          Technologies: <strong>Microservices, Docker, Java and Spring</strong>
        </li>
        <li>
          <Link to="/projects/microservices_docker_project">More information about this project</Link>
        </li>
      </ul>
      {/* Use Link for internal navigation */}
      <Link to="/" className="back-to-home-link">Back to Home</Link>
    </div>
  );
};

export default ProjectsPage;