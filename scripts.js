 document.addEventListener('DOMContentLoaded', () => {
      const hamburgerBtn = document.getElementById('hamburger-btn');
      const closeBtn = document.getElementById('close-btn');
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      const sidebarLinks = document.querySelectorAll('.sidebar-link');

      const openSidebar = () => {
        hamburgerBtn.classList.add('open');
        sidebar.classList.add('open');
        overlay.classList.add('active');
      };
      
      const closeSidebar = () => {
        hamburgerBtn.classList.remove('open');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      };

      hamburgerBtn.addEventListener('click', openSidebar);
      closeBtn.addEventListener('click', closeSidebar);
      overlay.addEventListener('click', closeSidebar);
      
      sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
      });
    });

