const navLinks = document.querySelectorAll(".nav a");
const connectBtn = document.getElementById("connect-btn");
const filterBtns = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
 
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
 
if (connectBtn) {
  connectBtn.addEventListener("click", () => {
    window.location.href = "mailto:bellorahmatullah9@gmail.com";
  });
}
 
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
 
    filterBtns.forEach((item) => item.classList.remove("active"));
    btn.classList.add("active");
 
    projectCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
    });
  });
});
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex';
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none';
}
