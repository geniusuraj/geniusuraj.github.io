<!DOCTYPE html>
<html>
  <head>
    <title>My Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <nav id="nav-menu">
      <ul>
        <li><a class="nav-link home" href="#home">Home</a></li>
        <li><a class="nav-link about" href="#about">About</a></li>
        <li><a class="nav-link skills" href="#skills">Skills</a></li>
        <li><a class="nav-link projects" href="#projects">Projects</a></li>
        <li><a class="nav-link contact" href="#contact">Contact</a></li>
        <li><a class="nav-link resume" href="#" target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
    <section id="home">
      <div class="container">
        <img class="home-img" src="professional-photo.png" alt="Professional Photo">
        <h1 id="user-detail-name">Your Name</h1>
        <p id="user-detail-intro">Formal introduction here.</p>
        <a id="resume-link-2" href="#" target="_blank" rel="noopener noreferrer"><button id="resume-button-2">Download Resume</button></a>
      </div>
    </section>
    <section id="about" class="about section">
      <div class="container">
        <h2>About Me</h2>
        <p>Some text about you.</p>
        <a id="resume-link-2" href="#" target="_blank" rel="noopener noreferrer"><button id="resume-button-2">Download Resume</button></a>
      </div>
    </section>
    <section id="skills">
      <div class="container">
        <h2>Skills</h2>
        <div class="skills-card">
          <img class="skills-card-img" src="skill1.png" alt="Skill 1">
          <h3 class="skills-card-name">Skill 1</h3>
        </div>
        <div class="skills-card">
          <img class="skills-card-img" src="skill2.png" alt="Skill 2">
          <h3 class="skills-card-name">Skill 2</h3>
        </div>
      </div>
    </section>
    <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="project-card">
          <img src="project1.png" alt="Project 1">
          <h3 class="project-title">Project 1</h3>
          <p class="project-description">Description of Project 1</p>
          <p class="project-tech-stack">Tech Stack used: HTML, CSS, JavaScript</p>
          <a class="project-github-link" href="https://github.com/project1" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
          <a class="project-deployed-link" href="#" target="_blank" rel="noopener noreferrer">Deployed Link or Video Link</a>
        </div>
        <div class="project-card">
          <img src="project2.png" alt="Project 2">
          <h3 class="project-title">Project 2</h3>
          <p       class="project-description">Description of Project 2</p>
      <p class="project-tech-stack">Tech Stack used: HTML, CSS, JavaScript</p>
      <a class="project-github-link" href="https://github.com/project2" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      <a class="project-deployed-link" href="#" target="_blank" rel="noopener noreferrer">Deployed Link or Video Link</a>
    </div>
  </div>
</section>
<section id="contact">
  <div class="container">
    <h2>Contact Me</h2>
    <ul>
      <li id="contact-github"><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      <li id="contact-linkedin"><a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      <li id="contact-phone">Phone: 123-456-7890</li>
      <li id="contact-email">Email: yourname@example.com</li>
    </ul>
  </div>
</section>
<section id="resume">
  <div class="container">
    <h2>Resume</h2>
    <a id="resume-link-1" href="#" target="_blank" rel="noopener noreferrer"><button id="resume-button-1">Download PDF</button></a>
  </div>
</section>
<div class="react-activity-calendar"></div>

<script>
  // Responsive navbar
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('.nav-link');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Github activity calendar
  new GitHubCalendar('.react-activity-calendar', 'yourusername');
</script>
</body>
</html>
