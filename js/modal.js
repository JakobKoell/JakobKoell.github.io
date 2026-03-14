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

  // Check if the clicked trigger is for the "resume" panel (no modal)
  if (trigger.classList.contains("resume")) {
    trigger.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent any modal behavior
      window.location.href = "resume.html"; // Directly navigate to the resume page
    });
  } else {
    // For other panels, continue with the modal behavior
    trigger.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default action

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
