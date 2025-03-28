// Share API Functionality
const shareButton = document.getElementById('shareButton');

shareButton.addEventListener('click', async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Check out this cool Writing & Drawing App!',
        text: 'Create your own masterpieces and save them directly.',
        url: window.location.href, // Share the current page URL
      });
      alert('Shared successfully. Enjoy!');
      console.log('Shared successfully. Enjoy!');
      
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    alert('Web Share API is not supported on your device/browser.');
  }
});
