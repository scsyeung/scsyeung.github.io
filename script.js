document.addEventListener("DOMContentLoaded", () => {
    const sections = {
      about: document.getElementById("about"),
      education: document.getElementById("education"),
      experience: document.getElementById("experience"),
      projects: document.getElementById("projects"),
      skills: document.getElementById("skills"),
      certifications: document.getElementById("certifications"),
      contact: document.getElementById("contact")
    };
  
    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      hamburger.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
    });
  
    // Close menu when clicking a link
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.textContent = "☰";
      });
    });
  
    // Populate sections
    sections.about.innerHTML = `<h2>> whoami</h2><p>${portfolioData.about}</p>`;
  
    sections.education.innerHTML = `<h2>> education</h2><ul>${portfolioData.education
      .map(ed => `<li>${ed.degree} - ${ed.school} (${ed.year})${ed.details ? `<br>${ed.details}` : ""}</li>`)
      .join("")}</ul>`;
  
    sections.experience.innerHTML = `<h2>> experience</h2><ul>${portfolioData.experience
      .map(exp => `<li>${exp.role} @ ${exp.company} (${exp.duration}): ${exp.desc}</li>`)
      .join("")}</ul>`;
  
    // Projects rendering (no [Link] issue already fixed)
    sections.projects.innerHTML = `<h2>> dir projects</h2><ul>${portfolioData.projects
      .map(proj => `<li>${proj.title}: ${proj.desc}</li>`)
      .join("")}</ul>`;
  
    // Display categorized skills
    let skillsHTML = "<h2>> skills</h2>";
    for (const [category, skillList] of Object.entries(portfolioData.skills)) {
      skillsHTML += `<h3>${category}</h3><p>${skillList.join(", ")}</p>`;
    }
    sections.skills.innerHTML = skillsHTML;
  
    sections.certifications.innerHTML = `<h2>> certifications</h2><ul>${portfolioData.certifications
      .map(cert => `<li>${cert.title} - ${cert.issuer} (${cert.year})</li>`)
      .join("")}</ul>`;
  
    // Shortened LinkedIn display in contact
    sections.contact.innerHTML = `<h2>> contact</h2><p><a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a></p>`;
  
    // Shortened LinkedIn display in footer
    document.querySelector("footer p").innerHTML = `
      <a href="${portfolioData.contact.linkedin}" target="_blank">LinkedIn</a> | Inspired by global developers and Grok
    `;
  });