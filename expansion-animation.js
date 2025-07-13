const allDetails = document.querySelectorAll('details');
allDetails.forEach((details) => {
  const summary = details.querySelector('summary');
  const content = details.querySelector('.details-content');

  summary.addEventListener('click', (event) => {
    event.preventDefault();
    
    if (details.open) {
      const openAnimation = content.animate(
        { height: [`${content.offsetHeight}px`, '0px'],
          padding: ['1em 0.5em 1em 0.5em', '0 0.5em 0 0.5em']
         },
        { duration: 400, easing: 'ease-in-out' }
      );
      
      openAnimation.onfinish = () => {
        details.removeAttribute('open');
      };
    } else {
      details.setAttribute('open', '');
      content.animate(
        { height: ['0px', `${content.scrollHeight}px`],
          padding: ['0 0.5em 0 0.5em', '1em 0.5em 1em 0.5em']
         },
        { duration: 400, easing: 'ease-in-out' }
      );
    }
  });
});