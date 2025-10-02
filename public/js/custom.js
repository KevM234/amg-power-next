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
