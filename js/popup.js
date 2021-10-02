document.addEventListener("DOMContentLoaded", () => {
  const textCheck = document.getElementById('ok_text').innerText;

  document.querySelector('.content_image').classList.remove('ok');
  if (textCheck) {
    document.querySelector('.content_image').classList.add('ok');
  } else {
    document.querySelector('.content_image').classList.remove('ok');
  }
  
  closeBtn = document.querySelector('.end_image');
  closeBtn.onclick = e => {
    window.close();
  }
});