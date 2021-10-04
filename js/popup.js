document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const textCheck = document.getElementById('ok_text').innerText;
    
    if (!textCheck) {
      document.querySelector('.content_image').classList.add('sorry');
    }
  }, 150);
  closeBtn = document.querySelector('.end_image');
  closeBtn.onclick = e => {
    window.close();
  }
});