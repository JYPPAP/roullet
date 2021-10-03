document.addEventListener("DOMContentLoaded", () => {
  let textCheck = document.getElementById('ok_text').innerText;
  
  if (textCheck) {
    document.querySelector('.content_image').classList.add('ok');
  }
  closeBtn = document.querySelector('.end_image');
  closeBtn.onclick = e => {
    window.close();
  }
});