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
  trigger.addEventListener("click", function(e) {
    e.preventDefault();

    // Check if the clicked trigger is for the "resume" panel
    if (this.classList.contains("resume")) {
      // If it's for the resume, open the resume.html page
      window.location.href = "resume.html"; // Replace with actual path to resume page
    } else {
      // Handle other modals if needed
      const modalID = this.dataset.modal;
      const content = document.getElementById(modalID);

      if(content && modal && modalContent) {
        modalContent.innerHTML = content.innerHTML;
        modal.classList.add("active");
      }
    }
  });
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
