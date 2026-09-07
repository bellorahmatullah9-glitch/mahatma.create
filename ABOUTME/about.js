const navLinks = document.querySelectorAll(".nav a");
const connectBtn = document.getElementById("connect-btn");
navLinks.forEach((link) => {
link.addEventListener("click", () => {
navLinks.forEach((item) => item.classList.remove("active"));
link.classList.add("active");
});
});
connectBtn.addEventListener("click", () => {
window.location.href = "mailto:hello@mahatmacreates.com";
});
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}