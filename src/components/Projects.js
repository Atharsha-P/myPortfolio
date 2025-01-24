import React from 'react';
import './Projects.css'; // Import the CSS file

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img 
            src="https://i.gifer.com/X0XF.gif" 
            alt="SafeLens Project" 
            className="project-image"
          />
          <h3>SafeLens: Privacy Protection App</h3>
          <p>Real-time machine learning solution for camera security that detects and blurs nudity in live feeds.</p>
        </div>
        <div className="project-card">
          <img 
            src="https://media.newyorker.com/photos/59a9adb6690c17706eea38ca/master/w_2560%2Cc_limit/170911_r30493web-desktop.gif" 
            alt="Bone Cancer Prediction" 
            className="project-image"
          />
          <h3>Bone Cancer Prediction System</h3>
          <p>Machine learning-based system for cancer stage detection using CNNs on X-Ray images for early detection.</p>
        </div>
        <div className="project-card">
          <img 
            src="https://assets.grab.com/wp-content/uploads/sites/4/2024/10/18122242/Women-Passengers-Preferred.gif" 
            alt="Women Safety Analytics" 
            className="project-image"
          />
          <h3>Women Safety Analytics Platform</h3>
          <p>Analytics tool with SOS detection, gender analysis, and live location tracking, incorporating offline connectivity.</p>
        </div>
        <div className="project-card">
          <img 
            src="https://cdn.dribbble.com/users/22691/screenshots/2736160/tubik_application_recipes_and_cooking_dribbble_800x600.gif" 
            alt="Recipe Suggestion App" 
            className="project-image"
          />
          <h3>Recipe Suggestion App</h3>
          <p>Personalized recipe recommendations, grocery lists, and meal planning based on family dynamics and health.</p>

        </div>
      </div>
    </section>
  );
}

export default Projects;
