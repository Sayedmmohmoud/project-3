function animateBar(id, speed) {
    let bar = document.getElementById(id);
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) clearInterval(interval);
        else {
            width += 5;
            bar.style.width = width + "%";
        }
    }, speed);
}

animateBar("bar1", 100);
animateBar("bar2", 150);
animateBar("bar3", 200);
animateBar("bar4", 250)

// ###############################################
 document.querySelectorAll(".copyBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = btn.nextElementSibling; // الـ span اللي بعد الزرار
      msg.classList.remove("d-none");
      setTimeout(() => {
        msg.classList.add("d-none");
      }, 2000);
    });
  });

//################################################