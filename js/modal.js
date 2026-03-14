/* =========================================
UNIVERSAL MODAL SYSTEM
========================================= */

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".modal-close");

/* =========================
MODAL TRIGGERS
========================= */

const triggers = document.querySelectorAll("[data-modal]");

triggers.forEach(trigger => {

  // Check if it's the "resume" panel
  if (trigger.classList.contains("resume")) {
    trigger.addEventListener("click", function(e) {
      e.preventDefault();  // Prevent default behavior
      window.location.href = "resume.html";  // Navigate directly to resume.html
    });
  } else {
    // For all other panels, continue modal behavior
    trigger.addEventListener("click", function(e) {
      e.preventDefault();  // Prevent default behavior

      const modalID = this.dataset.modal;
      const content = document.getElementById(modalID);

      if (content && modal && modalContent) {
        modalContent.innerHTML = content.innerHTML;
        modal.classList.add("active");
      }
    });
  }
});

/* =========================
CLOSE BUTTON
========================= */

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
}

/* =========================
CLICK OUTSIDE CLOSE
========================= */

if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
}
