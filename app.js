// =======================
// DỮ LIỆU PHIM (24 phim)
const movies = [
  {
    title: "Titanic",
    year: 1997,
    genre: ["Romance", "Drama"],
    poster: "titanic.jpg",
    description: "Bộ phim kể về chuyện tình giữa Jack một chàng trai nghèo và Rose một cô gái tầng lớp thượng lưu, diễn ra trên tàu Titanic.",
    director: "James Cameron",
    actors: "Leonardo DiCaprio, Kate Winslet",
    duration: "195 phút"
  },
  {
    title: "Avengers: END GAME",
    year: 2012,
    genre: ["Action", "Adventure"],
    poster: "avenger.jpg",
    description: "Bộ phim về nhóm Avengers gồm các siêu anh hùng cùng nhau hợp lực chống lại Loki, một nhân vật phản diện xâm chiếm trái đất. Phim tập trung vào tinh thần đồng đội, xung đột giữa các siêu anh hùng và các trận chiến.",
    director: "Joss Whedon",
    actors: "Robert Downey Jr., Chris Evans",
    duration: "143 phút"
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: ["Sci-Fi", "Action"],
    poster: "matrix.jpg",
    description: "Bộ phim về Neo, một lập trình viên máy tính, phát hiện ra rằng thế giới mà con người đang sống thực ra là một mô phỏng ảo do máy móc kiểm soát được gọi là Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    actors: "Keanu Reeves, Laurence Fishburne",
    duration: "136 phút"
  },
  {
    title: "Interstellar",
    year: 2014,
    genre: ["Sci-Fi", "Drama"],
    poster: "intertellar.jpg",
    description: "Trong tương lai gần, trái đất đối mặt với nạn khủng hoảng lương thực. Nhóm phi hành gia được dẫn đầu bởi Cooper, thực hiện chiến hành trình tìm kiếm hành tinh có thể sinh sống cho nhân loại.",
    director: "Christopher Nolan",
    actors: "Matthew McConaughey, Anne Hathaway",
    duration: "169 phút"
  },
  {
    title: "Joker",
    year: 2019,
    genre: ["Drama", "Crime"],
    poster: "joker.jpg",
    description: "Câu chuyện về Arthur Fleck, một diễn viên hài thất bại trong xã hội Gotham đầy bất công và bạo lực. Chịu nhiều áp lực từ nghèo khó, bị xã hội ruồng bỏ và dần trở nên điên dại.",
    director: "Todd Phillips",
    actors: "Joaquin Phoenix, Robert De Niro",
    duration: "122 phút"
  },
  {
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime"],
    poster: "darknight.jpg",
    description: "Nói về cuộc chiến giữa Batman và Joker một tội phạm cực đoan tại thành phố Gotham. Khai phá về chủ đề công lý, đạo đức, ranh giới giữa thiện ác.",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger",
    duration: "152 phút"
  },
  {
    title: "Spider-Man: No Way Home",
    year: 2021,
    genre: ["Action", "Adventure"],
    poster: "nowayhome.jpg",
    description: "Câu chuyện về Spider-Man bị tiết lộ danh tính, Peter Parker đã tìm đến Doctor Strange để nhờ một phép thuật giúp mọi người quên đi bản thân là Spider-Man, nhưng quá trình có sai sót dẫn đến cuộc hội ngộ của người nhện đa vũ trụ.",
    director: "Jon Watts",
    actors: "Tom Holland, Zendaya",
    duration: "148 phút"
  },
  {
    title: "Forrest Gump",
    year: 1994,
    genre: ["Drama", "Romance"],
    poster: "gump.jpg",
    description: "Cuộc đời Forrest Gump, một người ngây thơ có trái tim nhân hậu, sống qua nhiều thập niên lịch sử Mỹ từ thập niên 1950 đến 1980.",
    director: "Robert Zemeckis",
    actors: "Tom Hanks, Robin Wright",
    duration: "142 phút"
  },
  {
    title: "Gladiator",
    year: 2000,
    genre: ["Action", "Drama"],
    poster: "gladia.jpg",
    description: "Bộ phim về Maximus, một tướng quân la mã trung thành, bị phản bội và gia đình bị giết bởi hoàng đế Commodus, và cuộc hành trình đấu tranh tìm lại tự do của Maximus trước Commodus.",
    director: "Ridley Scott",
    actors: "Russell Crowe, Joaquin Phoenix",
    duration: "155 phút"
  },
  {
    title: "Black Panther",
    year: 2018,
    genre: ["Action", "Adventure"],
    poster: "panner.jpg",
    description: "Sau cái chết của cha, T'Challa trở về Wakanda một quốc gia giả tưởng giàu công nghệ tại Châu Phi nhằm kế vị làm vua và lên làm một Black Panther.",
    director: "Ryan Coogler",
    actors: "Chadwick Boseman, Michael B. Jordan",
    duration: "134 phút"
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: ["Drama"],
    poster: "redemption.jpg",
    description: "Câu chuyện về Andy Dufresne, một nhân viên ngân hàng tưởng chừng bị kết oan do tội giết vợ và nhân tình bị giam tại nhà tù Shawshank. Tại đây anh kết bạn với Red và dần thực hiện kế hoạch trốn thoát.",
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman",
    duration: "142 phút"
  },
  {
    title: "The Godfather",
    year: 1972,
    genre: ["Crime", "Drama"],
    poster: "father.jpg",
    description: "Gia đình mafia Corleone tại Mỹ. Khi Vito Corleone trùm mafia gặp nguy hiểm con trai là Micheal không muốn dính liếu vào công việc gia đình, nhưng sau bi kịch anh dần dấn thân vào con đường quyền lực.",
    director: "Francis Ford Coppola",
    actors: "Marlon Brando, Al Pacino",
    duration: "175 phút"
  },
  {
    title: "Deadpool",
    year: 2016,
    genre: ["Action", "Comedy"],
    poster: "deadpool.jpg",
    description: "Siêu anh hùng hài hước, Wade Wilson một cựu lính đánh thuê mắc bệnh ưng thư, tham gia vào chương trình biến đổi gen và trở thành anh hùng Deadpool.",
    director: "Tim Miller",
    actors: "Ryan Reynolds, Morena Baccarin",
    duration: "108 phút"
  },
  {
    title: "Doctor Strange",
    year: 2016,
    genre: ["Action", "Adventure"],
    poster: "trange.jpg",
    description: "Stephen Strange một bác sĩ phẫu thuật thần kinh tài năng nhưng lại kêu ngạo. Sau tai nạn xe khiến bản thân không thể phẫu thuật, ông bắt đầu tìm kiếm và học pháp thuật tối thượng.",
    director: "Scott Derrickson",
    actors: "Benedict Cumberbatch, Chiwetel Ejiofor",
    duration: "115 phút"
  },
];

// =======================
// DOM ELEMENTS
const movieList = document.getElementById("movie-list");
const genreFilters = document.getElementById("genre-filters");
const searchInput = document.getElementById("search-input");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.getElementById("close-modal");
const toggleBtn = document.getElementById("toggle-theme");

// =======================
// RENDER PHIM
function renderMovies(list) {
  movieList.innerHTML = "";
  list.forEach(movie => {
    const div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
    `;

    // Click vào card để mở modal
    div.addEventListener("click", () => openModal(movie));

    movieList.appendChild(div);
  });
}

// =======================
// MODAL
function openModal(movie) {
  modal.classList.remove("hidden");
  modal.style.zIndex = "9999"; // luôn nổi trên cùng
  modalBody.innerHTML = `
    <h2>${movie.title} (${movie.year})</h2>
    <img src="${movie.poster}" width="250">
    <p><strong>Mô tả:</strong> ${movie.description}</p>
    <p><strong>Đạo diễn:</strong> ${movie.director}</p>
    <p><strong>Diễn viên:</strong> ${movie.actors}</p>
    <p><strong>Thời lượng:</strong> ${movie.duration}</p>
    <p><strong>Thể loại:</strong> ${movie.genre.join(", ")}</p>
  `;
}

function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

// Đóng modal khi click X
closeBtn.addEventListener("click", closeModal);
// Click ngoài modal content
modal.addEventListener("click", e => { if(e.target === modal) closeModal(); });
// ESC
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

// =======================
// DARK/LIGHT MODE
function updateIcon() {
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}

function loadTheme() {
  const saved = localStorage.getItem("theme");
  if(saved === "dark") document.body.classList.add("dark-mode");
  updateIcon();
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  updateIcon();
});

// =======================
// TẠO DANH SÁCH THỂ LOẠI HÀNG DỌC
const genres = [...new Set(movies.flatMap(m => m.genre))];
genres.forEach(g => {
  const label = document.createElement("label");
  label.style.display = "block"; // hàng dọc
  label.innerHTML = `<input type="checkbox" value="${g}"> ${g}`;
  genreFilters.appendChild(label);
});

// =======================
// FILTER + SEARCH + DEBOUNCE
function filterMovies() {
  const checked = Array.from(genreFilters.querySelectorAll("input:checked")).map(i => i.value);
  const keyword = searchInput.value.toLowerCase();

  const filtered = movies.filter(m => {
    const matchGenre = checked.length === 0 || m.genre.some(g => checked.includes(g));
    const matchSearch = m.title.toLowerCase().includes(keyword);
    return matchGenre && matchSearch;
  });

  renderMovies(filtered);
}

let debounceTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(filterMovies, 400);
});
genreFilters.addEventListener("change", filterMovies);

// =======================
// INIT
renderMovies(movies);
loadTheme();
