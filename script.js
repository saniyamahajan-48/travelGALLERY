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

/* ---------------- Modal Functionality ---------------- */

// Place descriptions
const placeData = {
    "Bali": { desc: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs." },
    "Paris": { desc: "Paris, the capital of France, is known for its art, gastronomy, fashion, and the iconic Eiffel Tower." },
    "Switzerland": { desc: "Switzerland is famous for its mountains, lakes, chocolates, and precision watches." },
    "Maldives": { desc: "Maldives is a tropical nation in the Indian Ocean known for its beaches, blue lagoons, and extensive reefs." },
    "Dubai": { desc: "Dubai is a city in the United Arab Emirates known for luxury shopping, ultramodern architecture and lively nightlife." },
    "Hawaii": { desc: "Hawaii is a U.S. state comprising volcanic islands known for its tropical climate, beaches, and surfing spots." }
};

// Get modal elements
const modal = document.getElementById("placeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

// Add click event to each card
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const placeName = card.querySelector("h2").innerText;
        modalTitle.innerText = placeName;
        modalDesc.innerText = placeData[placeName].desc;
        modalImg.src = card.querySelector("img").src;
        modalImg.alt = placeName;
        modal.style.display = "block";
    });
});

// Close modal when clicking on X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
    }
});
