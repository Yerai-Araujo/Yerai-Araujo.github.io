import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ProjectsPage from './ProjectsPage.tsx';
import SpringSecurityProject from './SpringSecurityProject.tsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="header">
        <h1>Yerai Araujo</h1>
        <img src="/assets/images/my_cv_img.jpg" alt="Profile Picture" className="profile-picture" />
      </div>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="content">
              <h2>About me</h2>
              <p>
                💻 I am a Software Engineer passionate about software development.<br />
                🎓 I have a degree in Software Engineering from the Polytechnic University of Madrid.<br />
                🔍 Looking for job opportunities.<br />
                🛠️ Skills: Java, SQL, Spring, Python, TypeScript, JavaScript, React, Html and Css.<br />
                I have work experience in web application development using technologies such as Spring, React and SQL.<br />
                I have been working almost a year as a Junior Java Developer in a company.<br />
                I am a fast learner and I am always looking for new challenges to improve my skills.
              </p>
              <h2>Projects</h2>
              <ul>
                <li>
                  <Link to="/projects">View my projects</Link>
                </li>
              </ul>
              <h2>Contact</h2>
              <p>
                Email: <strong>yeraiaraujo227@gmail.com</strong><br />
                GitHub: <a href="https://github.com/Yerai-Araujo">https://github.com/Yerai-Araujo</a> <br />
                LinkedIn: <a href="https://www.linkedin.com/in/yerai-araujo/">https://www.linkedin.com/in/yerai-araujo/</a>
              </p>
            </div>
          }
        />
        {/* Projects Page */}
        <Route path="/projects" element={<ProjectsPage />} />
        {/* Spring Security Project Page */}
        <Route path="/projects/spring_security_project" element={<SpringSecurityProject />} />
      </Routes>
    </Router>
  );
}

export default App;
