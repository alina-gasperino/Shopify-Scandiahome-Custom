document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('unmute');
    const button = document.getElementById('unmuteButton');

    video.play();

    button.addEventListener('click', function() {
      video.muted = false;
      video.play().catch(error => console.log('Play with sound blocked:', error));
    });

    setTimeout(function() {
        button.click();
      }, 1000);
  });