// Full poem data
const poems = {
    1: {
    title: "Expectations",
    category: "Life · Growth",
    image: "Expectations.jpg",
    text: `When you say you like poetry,
    You expect beauty
    pain that behaves
    sadness trimmed into neat lines

    You expect words 
    that don't stare back too long
    truth softened enough 
    to be digestable

    But poetry isn't decor
    it's a confession,
    with no volume control
    
    It breaks rhythm
    it ruins comfort
    it tells the truth
    even when the truth has no ending
    
    So be honest
    
    When you say you like poetry
    ask yourself
    do you like the flowers
    or are you ready for the roots.`
    },
    2: {
    title: "A letter from my shadow",
    category: "Faith · Love",
    image: "Shadow.jpg",
    text: `I am not the stain in your light
    neither the proof that you are followed
    
    Do you know long
    I have waited 
    for you to turn around
    without fear?
    
    Not to fight me
    Not to outrun me
    But to recognize me.
    
    Listen
    I do not want to replace your light
    i want to complete it
    
    Even the moon
    is only beautiful
    because it does not hide
    it's darkness
    
    So why do you?
    
    Come and sit with me,
    at the edge of your silence.
    
    And bring your unspoken thoughts
    Your imperfect prayers.
    Your unfinished self.
    
    I am not hear to judge you
    I am you.
    
    And if you're brave enough
    to hold my hand
    without closing your eyes,
    
    You'll see
    that I was never your enemy
    
    I was your depth.`
    },
    3: {
    title: "On Qadr",
    category: "Faith · Growth",
    image: "Qadr.jpg",
    text: `O heart be still
    If angels are crowding the earth,
    let them find you awake
    not chasing the world,
    but returning to the One
    who never left.
    
    If my journey is being written,
    let it be written in light
    let it say:
    She tried.
    She trusted.
    She come back.
    
    For this is the night
    when the unssen listens,
    and the broken
    are answered with peace.`
    },
    4: {
    title: "Shallow",
    category: "Life · Love",
    image: "hearts.jpg",
    text: `Once hearts were handwritten letters
    creased, reread,
    kept close to the chest.
    Now they are notifications:
    felt quickly, dismissed faster.
    
    We want connection
    without the cost of commitment,
    love without endurance,
    union without sacrifice.
    
    But tell me
    when did roots become a burden?
    When did growing together
    lose it's poetry?
    
    I am young, yes,
    but even I know this:
    What is shallow dries first.
    What is deep survives seasons.
    
    It was never meant to be convienent.
    It was meant to be true.
    
    and truth,
    like old love,
    stays.`
    }
    };
    // Elements
    const cards = document.querySelectorAll('.poem-card');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('closeModal');
    const filterBtns = document.querySelectorAll('.filter-btn');
    // Open modal
    cards.forEach(card => {
    card.addEventListener('click', () => {
    const id = card.dataset.id;
    const poem = poems[id];
    document.getElementById('modalImage').src = poem.image;
    document.getElementById('modalTitle').textContent = poem.title;
    document.getElementById('modalCategory').textContent = poem.category;
    document.getElementById('modalPoem').textContent = poem.text;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    });
    });
    // Close modal
    function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    }
    closeBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
    });
    // Escape key
    document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
    });
    // Filter functionality
    filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    // Update active state
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    cards.forEach(card => {
    const categories = card.dataset.category.split(' ');
    if (filter === 'all' || categories.includes(filter)) {
    card.classList.remove('hidden');
    } else {
    card.classList.add('hidden');
    }
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