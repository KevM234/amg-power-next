document.addEventListener("DOMContentLoaded", function () {
  // ___________________________________________________
  // 1. FAQ Toggle
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    const toggle = item.querySelector(".toggle-faq");
    const answer = item.querySelector(".faq-answer");
    const arrow = item.querySelector("img");

    if (toggle && answer && arrow) {
      toggle.addEventListener("click", function () {
        answer.classList.toggle("d-none");
        arrow.classList.toggle("rotate-180");
      });
    }
  });

  // ___________________________________________________
  // 2. Modifica label select Venduto
  const vendutoWrap = document.querySelector(
    'span.wpcf7-form-control-wrap[data-name="Venduto"]'
  );
  if (vendutoWrap) {
    const vendutoSelect = vendutoWrap.querySelector("select");
    if (vendutoSelect && vendutoSelect.options.length > 0) {
      vendutoSelect.options[0].text = "Vendi già online? *";
    }
  }

  // ___________________________________________________
  // 3. Modifica label select Fatturato
  const fatturatoWrap = document.querySelector(
    'span.wpcf7-form-control-wrap[data-name="Fatturato"]'
  );
  if (fatturatoWrap) {
    const fatturatoSelect = fatturatoWrap.querySelector("select");
    if (fatturatoSelect && fatturatoSelect.options.length > 0) {
      fatturatoSelect.options[0].text = "Fatturato annuo azienda *";
    }
  }
});

// ___________________________________________________
// 4. Uniformare altezza card solo da md in su
function uniformCardHeights() {
  const mdBreakpoint = 768;
  const cards = document.querySelectorAll(".card-v3");

  if (window.innerWidth < mdBreakpoint) {
    // Reset per schermi piccoli
    cards.forEach((card) => {
      card.style.height = "auto";
    });
    return;
  }

  // Imposta tutte le card alla stessa altezza della più alta
  cards.forEach((card) => {
    card.style.height = "auto";
  });

  let maxHeight = 0;
  cards.forEach((card) => {
    const height = card.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  cards.forEach((card) => {
    card.style.height = `${maxHeight}px`;
  });
}

window.addEventListener("load", uniformCardHeights);
window.addEventListener("resize", uniformCardHeights);

// ___________________________________________________
// 5. Tracciamento Lead con Contact Form 7 (ID = 21)
document.addEventListener(
  "wpcf7mailsent",
  function (event) {
    if (event.detail.contactFormId == "21") {
      fbq("track", "Lead");
    }
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("form-container");
  if (!container) return;

  const form = container.closest("form");
  if (!form) return;

  const acceptance = form.querySelector(
    'input[type="checkbox"][name="acceptance-471"]'
  );
  if (!acceptance) return;

  const wrap =
    acceptance.closest(".wpcf7-form-control-wrap") || acceptance.parentElement;
  let errorTimeout = null;

  function showAcceptanceError() {
    if (!wrap.querySelector(".acceptance-error")) {
      const msg = document.createElement("span");
      msg.className = "wpcf7-not-valid-tip acceptance-error";
      msg.textContent = "Devi accettare la privacy policy per continuare.";
      wrap.appendChild(msg);
    }
    acceptance.setAttribute("aria-invalid", "true");
    wrap.scrollIntoView({ behavior: "smooth", block: "center" });

    if (errorTimeout) clearTimeout(errorTimeout);
    errorTimeout = setTimeout(clearAcceptanceError, 4000);
  }

  function clearAcceptanceError() {
    const msg = wrap.querySelector(".acceptance-error");
    if (msg) msg.remove();
    acceptance.removeAttribute("aria-invalid");
    errorTimeout = null;
  }

  acceptance.addEventListener("change", function () {
    if (acceptance.checked) clearAcceptanceError();
  });

  form.addEventListener(
    "submit",
    function (e) {
      if (!acceptance.checked) {
        e.preventDefault();
        e.stopPropagation();
        if (typeof e.stopImmediatePropagation === "function")
          e.stopImmediatePropagation();
        showAcceptanceError();
        acceptance.focus();
      }
    },
    true
  );

  document.addEventListener(
    "wpcf7mailsent",
    function (ev) {
      if (ev.target === form) clearAcceptanceError();
    },
    false
  );
});
