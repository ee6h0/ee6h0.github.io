// ===== DARK/LIGHT MODE TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check if user has a saved theme preference
const savedTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '☀️ Light';
} else {
  body.classList.remove('light-mode');
  themeToggle.textContent = '🌙 Dark';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  if (body.classList.contains('light-mode')) {
    themeToggle.textContent = '☀️ Light';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.textContent = '🌙 Dark';
    localStorage.setItem('theme', 'dark');
  }
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== DROPDOWN MENU FUNCTIONALITY =====
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    // Close other dropdowns
    document.querySelectorAll('.dropdown-content').forEach(content => {
      if (content !== btn.nextElementSibling) {
        content.style.display = 'none';
      }
    });
    
    // Toggle current dropdown
    const dropdown = btn.nextElementSibling;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-content').forEach(content => {
    content.style.display = 'none';
  });
});

// Close dropdown when clicking a link inside it
document.querySelectorAll('.dropdown-content a').forEach(link => {
  link.addEventListener('click', () => {
    link.closest('.dropdown-content').style.display = 'none';
  });
});