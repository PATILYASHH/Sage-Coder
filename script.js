// Get the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Get the current theme from localStorage or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';

// Apply the current theme on page load
document.body.classList.add(currentTheme);

// Set the button text based on the current theme
themeToggle.textContent = currentTheme === 'dark-mode' ? '☀️' : '🌙';

// Add an event listener to the theme toggle button
themeToggle.addEventListener('click', () => {
  // Determine the new theme
  const newTheme = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
  
  // Replace the current theme with the new theme
  document.body.classList.replace(currentTheme, newTheme);
  
  // Save the new theme in localStorage
  localStorage.setItem('theme', newTheme);

  // Update the button text
  themeToggle.textContent = newTheme === 'dark-mode' ? '☀️' : '🌙';
});
