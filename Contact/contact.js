const form = document.getElementById("contactForm");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const modalText = document.getElementById("modalText");
form.addEventListener("submit", (e) => {
e.preventDefault();
const name = document.getElementById("name").value.trim();
modalText.textContent = "Thanks, " + name + ". Your message has been prepared.";
overlay.classList.add("active");
});
function closeModal() {
overlay.classList.remove("active");
}
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
if (e.key === "Escape") closeModal();
});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}