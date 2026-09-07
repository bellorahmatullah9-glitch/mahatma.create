function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
 
const modal = document.getElementById("modal");
const typeEl = document.getElementById("modal-type");
const titleEl = document.getElementById("modal-title");
const bodyEl = document.getElementById("modal-body");

const works = {
  qadr: {
    type: "Poem",
    title: "On Qadr",
    kind: "poem",
    paragraphs: [
      " O heart be still <br> If angels are crowding the earth,<br>let them find you awake<br>not chasing the world,<br>but returning to the One<br>who never left.<br>",
      
    "If my journey is being written,<br>let it be written in light<br>let it say:<br>She tried.<br>She trusted.<br>She come back.<br>",
      
      "For this is the night<br>when the unssen listens,<br>and the broken<br>are answered with peace.",
    ]
  },
  code: {
    type: "Article",
    title: "The Importance of Writing Comments in codes",
    kind: "article",
    paragraphs: [
      "At first I thought comments we're unneccesary. They don't make a website look better, and they don't make the code run faster. <br>It was till I wrote a code then hours later forgot why I wrote it, I realized their purpose",
      "Comments are like little notes programmers leave behind to explain what they're doing and why they're doing it.<br> They're not for the computer, <br> they're for us.",
      "Adding Comments to my code reminded me that good work isn't just about getting the right result. it's also about makin it easier to understand when you come back to it later."
    ]
  }
};

function openWork(card) {
  const work = works[card.dataset.work];
  if (!work) return;

  typeEl.textContent = work.type;
  titleEl.textContent = work.title;
  bodyEl.className = "modal-body " + work.kind;
  bodyEl.innerHTML = work.paragraphs
    .map(function (text) {
      return "<p>" + text + "</p>";
    })
    .join("");
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => openWork(card));
  card.querySelector(".read-more").addEventListener("click", (e) => {
    e.stopPropagation();
    openWork(card);
  });
});

document.getElementById("close-modal").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});