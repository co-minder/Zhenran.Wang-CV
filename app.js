(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      document.querySelector('.topbar')?.classList.remove('nav-open');
    });
  });

  // Keep the page self-contained while making external research links obvious.
  document.querySelectorAll('a[target="_blank"]').forEach((link) => {
    link.setAttribute('rel', 'noreferrer');
  });
})();
