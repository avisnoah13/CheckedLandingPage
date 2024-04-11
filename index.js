function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("dimmer").style.opacity = 0.6;
    document.getElementById("dimmer").style.zIndex = "2";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  const btn = document.getElementById("submit-button")
  const thankYou = document.getElementById("thankYou")
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    btn.classList.add("button--loading");
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      btn.classList.remove("button--loading");
      btn.style.display = "block";
      form.style.display = "none";
      thankYou.style.display = "block";
    })
  });
});
