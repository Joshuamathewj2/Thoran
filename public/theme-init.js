// Apply the saved / system colour theme before first paint (external file keeps the CSP strict).
(function () {
  var theme = null;
  try {
    theme = localStorage.getItem('thoran:theme');
  } catch {
    theme = null;
  }
  if (theme !== 'dark' && theme !== 'light') {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.classList.toggle('dark', theme === 'dark');
})();
