document.addEventListener('DOMContentLoaded', () => {
     // Smooth scrolling for navigation links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
               e.preventDefault();
               document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
               });
          });
     });

     // Mobile menu toggle
     const menuBtn = document.querySelector('.menu-btn');
     const navLinks = document.querySelector('.nav-links');

     menuBtn.addEventListener('click', () => {
          navLinks.classList.toggle('active');
     });

     // Intersection Observer for fade-in animations
     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
               }
          });
     }, { threshold: 0.1 });

     // Observe all sections
     document.querySelectorAll('section').forEach(section => {
          observer.observe(section);
     });

     // Dynamic project loading (example)
     const projects = [
          {
               image: 'robot1.webp',
               title: 'Otonom Robot',
               description: 'Yapay zeka destekli navigasyon sistemi'
          },
          {
               image: 'robot2.webp',
               title: 'Drone Projesi',
               description: 'Hassas kontrol sistemli drone'
          },
          {
               image: 'robot3.webp',
               title: 'Robot Kol',
               description: '6 eksenli endüstriyel robot kol'
          }
     ];

     const projectGrid = document.querySelector('.project-grid');

     projects.forEach(project => {
          const projectCard = document.createElement('div');
          projectCard.className = 'project-card';
          projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
          projectGrid.appendChild(projectCard);
     });

     // Theme switching functionality
     function initTheme() {
          const themeToggle = document.querySelector('.theme-toggle');
          const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

          // Get theme from localStorage or system preference
          const currentTheme = localStorage.getItem('theme') ||
               (prefersDarkScheme.matches ? 'dark' : 'light');

          // Set initial theme
          document.documentElement.setAttribute('data-theme', currentTheme);
          updateThemeIcon(currentTheme);

          // Toggle theme on button click
          themeToggle.addEventListener('click', () => {
               const newTheme = document.documentElement.getAttribute('data-theme') === 'light'
                    ? 'dark'
                    : 'light';

               document.documentElement.setAttribute('data-theme', newTheme);
               localStorage.setItem('theme', newTheme);
               updateThemeIcon(newTheme);
          });
     }

     function updateThemeIcon(theme) {
          const icon = document.querySelector('.theme-toggle i');
          const text = document.querySelector('.theme-toggle span');
          const themeToggle = document.querySelector('.theme-toggle');

          // Add rotation animation class
          themeToggle.classList.add('switching');

          // Remove the class after animation completes
          setTimeout(() => {
               themeToggle.classList.remove('switching');
          }, 500);

          if (theme === 'light') {
               icon.className = 'fas fa-moon';
               text.textContent = 'Koyu Tema';
          } else {
               icon.className = 'fas fa-sun';
               text.textContent = 'Açık Tema';
          }
     }

     // Initialize theme when DOM is loaded
     initTheme();
}); 