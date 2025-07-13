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

    const allDetails = document.querySelectorAll('details');

      allDetails.forEach((details) => {
        const summary = details.querySelector('summary');
        const content = details.querySelector('.details-content');

        summary.addEventListener('click', (event) => {
          // Impede o comportamento padrão de abrir/fechar
          event.preventDefault();
          
          if (details.open) {
            // Se estiver aberto, inicia a animação de fechamento
            const openAnimation = content.animate(
              { height: [`${content.offsetHeight}px`, '0px'] },
              { duration: 400, easing: 'ease-in-out' }
            );
            
            // Quando a animação terminar, remove o atributo 'open'
            openAnimation.onfinish = () => {
              details.removeAttribute('open');
            };
          } else {
            // Se estiver fechado, abre e inicia a animação
            details.setAttribute('open', '');
            content.animate(
              { height: ['0px', `${content.scrollHeight}px`] },
              { duration: 400, easing: 'ease-in-out' }
            );
          }
        });
      });