document.addEventListener('DOMContentLoaded', function() {
    // Load content from data.js
    loadPortfolioContent();
    
    // Update copyright year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Project filtering functionality will be initialized after content is loaded
});

function loadPortfolioContent() {
    // Basic information
    document.getElementById('header-name').textContent = portfolioData.name;
    document.getElementById('footer-name').textContent = portfolioData.name;
    document.querySelector('.profile-img').alt = portfolioData.name;
    
    // Background
    document.getElementById('background-intro').textContent = portfolioData.background.intro;
    
    // Experience
    const experienceContainer = document.getElementById('experience-container');
    portfolioData.experience.forEach(job => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'experience-item';
        
        const title = document.createElement('h3');
        title.textContent = `${job.company} - ${job.role}`;
        
        const period = document.createElement('p');
        period.className = 'timeline';
        period.textContent = job.period;
        
        const achievementsList = document.createElement('ul');
        achievementsList.className = 'achievements';
        
        job.achievements.forEach(achievement => {
            const item = document.createElement('li');
            item.textContent = achievement;
            achievementsList.appendChild(item);
        });
        
        experienceItem.appendChild(title);
        experienceItem.appendChild(period);
        experienceItem.appendChild(achievementsList);
        
        // Add note if available
        if (job.note) {
            const noteElement = document.createElement('p');
            noteElement.className = 'experience-note';
            noteElement.textContent = job.note;
            experienceItem.appendChild(noteElement);
        }
        
        experienceContainer.appendChild(experienceItem);
    });
    
    // Education
    const educationContainer = document.getElementById('education-container');
    portfolioData.education.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'credential-item';
        
        const institution = document.createElement('h4');
        institution.textContent = edu.institution;
        
        const degree = document.createElement('p');
        degree.className = 'education-degree';
        degree.textContent = edu.degree;
        
        const period = document.createElement('p');
        period.className = 'education-period';
        period.textContent = edu.period;
        
        educationItem.appendChild(institution);
        educationItem.appendChild(degree);
        educationItem.appendChild(period);
        
        // Add highlights if available
        if (edu.highlights && edu.highlights.length > 0) {
            const highlightsContainer = document.createElement('div');
            highlightsContainer.className = 'education-highlights';
            
            edu.highlights.forEach(highlight => {
                const highlightItem = document.createElement('p');
                highlightItem.className = 'education-highlight-item';
                highlightItem.textContent = highlight;
                highlightsContainer.appendChild(highlightItem);
            });
            
            educationItem.appendChild(highlightsContainer);
        }
        
        educationContainer.appendChild(educationItem);
    });
    
    // Certifications
    const certificationsContainer = document.getElementById('certifications-container');
    portfolioData.certifications.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'cert-item';
        
        // Create certification name element
        const nameElement = document.createElement('p');
        nameElement.className = 'cert-name';
        nameElement.textContent = cert.name;
        
        // Create issuer element
        const issuerElement = document.createElement('p');
        issuerElement.className = 'cert-issuer';
        issuerElement.textContent = cert.issuer;
        
        // Create year element
        const yearElement = document.createElement('p');
        yearElement.className = 'cert-year';
        yearElement.textContent = cert.year;
        
        // Add all elements to certification item
        certItem.appendChild(nameElement);
        certItem.appendChild(issuerElement);
        certItem.appendChild(yearElement);
        
        certificationsContainer.appendChild(certItem);
    });
    
    // Project Categories/Filters
    const projectFilters = document.getElementById('project-filters');
    portfolioData.projectCategories.forEach((category, index) => {
        const filterBtn = document.createElement('button');
        filterBtn.className = 'filter-btn' + (index === 0 ? ' active' : '');
        filterBtn.setAttribute('data-filter', category.id);
        filterBtn.textContent = category.name;
        
        projectFilters.appendChild(filterBtn);
    });
    
    // Projects
    const projectsContainer = document.getElementById('projects-container');
    portfolioData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.setAttribute('data-category', project.category);
        
        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;
        
        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;
        
        // If project has multiple categories, create category badges
        if (project.category.includes(' ')) {
            const categoriesDiv = document.createElement('div');
            categoriesDiv.className = 'project-categories';
            
            const categories = project.category.split(' ');
            categories.forEach(catId => {
                const category = portfolioData.projectCategories.find(c => c.id === catId);
                if (category) {
                    const badge = document.createElement('span');
                    badge.className = 'category-badge';
                    badge.textContent = category.name;
                    categoriesDiv.appendChild(badge);
                }
            });
            
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(categoriesDiv);
            projectCard.appendChild(projectDesc);
        } else {
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectDesc);
        }
        
        projectsContainer.appendChild(projectCard);
    });
    
    // Skills
    const skillsCategoriesContainer = document.getElementById('skills-categories-container');
    
    // Generate skill categories from data
    portfolioData.skills.categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        // Create heading
        const heading = document.createElement('h3');
        heading.textContent = category.name;
        categoryDiv.appendChild(heading);
        
        // Create skills grid
        const skillsGrid = document.createElement('div');
        skillsGrid.className = 'skills-grid';
        skillsGrid.id = `${category.id}-container`;
        categoryDiv.appendChild(skillsGrid);
        
        // Add to container
        skillsCategoriesContainer.appendChild(categoryDiv);
        
        // Populate with skills
        const skills = portfolioData.skills[category.id];
        if (skills && skills.length > 0) {
            skills.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.textContent = skill;
                skillsGrid.appendChild(skillItem);
            });
        }
    });
    
    // Contact
    const contactContainer = document.getElementById('contact-container');
    
    // LinkedIn
    if (portfolioData.contact.linkedin) {
        const linkedinLink = document.createElement('a');
        linkedinLink.href = portfolioData.contact.linkedin;
        linkedinLink.className = 'contact-item';
        linkedinLink.innerHTML = '<i class="fab fa-linkedin"></i> LinkedIn';
        
        contactContainer.appendChild(linkedinLink);
    }
    
    // Initialize project filtering after content is loaded
    initProjectFiltering();
}

function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navigation items based on scroll position
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.add('active');
            } else {
                document.querySelector(`nav a[href="#${sectionId}"]`).classList.remove('active');
            }
        });
    });
} 