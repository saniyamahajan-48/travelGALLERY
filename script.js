// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Filter Function
function filterSelection(category) {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (category === "all") {
            card.classList.remove("hide");
        } else {
            if (card.classList.contains(category)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        }
    });
}
