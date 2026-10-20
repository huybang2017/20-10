const MEMBERS = [
  { id: "me", label: "Mẹ", title: "mẹ", vocative: "mẹ", salute: "Thưa mẹ,", closing: "Thương mẹ rất nhiều," },
  { id: "ba-noi", label: "Bà nội", title: "bà nội", vocative: "bà", salute: "Thưa bà nội,", closing: "Cháu thương bà nhiều lắm," },
  { id: "ba-ngoai", label: "Bà ngoại", title: "bà ngoại", vocative: "bà", salute: "Thưa bà ngoại,", closing: "Cháu thương bà nhiều lắm," },
  { id: "co", label: "Cô", title: "cô", vocative: "cô", salute: "Thưa cô,", closing: "Cháu thương cô nhiều," },
  { id: "di", label: "Dì", title: "dì", vocative: "dì", salute: "Thưa dì,", closing: "Cháu thương dì nhiều," },
  { id: "thim", label: "Thím", title: "thím", vocative: "thím", salute: "Thưa thím,", closing: "Cháu thương thím nhiều," },
  { id: "o", label: "O", title: "o", vocative: "o", salute: "Thưa o,", closing: "Cháu thương o nhiều," },
  { id: "mo", label: "Mợ", title: "mợ", vocative: "mợ", salute: "Thưa mợ,", closing: "Cháu thương mợ nhiều," },
  { id: "bac", label: "Bác", title: "bác", vocative: "bác", salute: "Thưa bác,", closing: "Cháu thương bác nhiều," },
  { id: "chi", label: "Chị", title: "chị", vocative: "chị", salute: "Gửi chị yêu,", closing: "Em thương chị nhiều," },
  { id: "em", label: "Em", title: "em", vocative: "em", salute: "Gửi em yêu,", closing: "Anh/chị thương em nhiều," },
  { id: "vo", label: "Vợ", title: "em yêu", vocative: "em", salute: "Gửi em yêu của anh,", closing: "Anh thương em rất nhiều," },
  { id: "con-gai", label: "Con gái", title: "con gái", vocative: "con", salute: "Gửi con gái yêu,", closing: "Cha/mẹ thương con nhiều lắm," },
];

const WISH_TEMPLATES = [
  "Hôm nay con ngồi viết vài dòng này, không phải vì lịch nào nhắc, mà vì trong lòng vẫn còn bao điều chưa kịp nói với {title}. Cảm ơn {vocative} vì đã là chỗ dựa dịu dàng nhất của con.",
  "Nếu cuộc đời là một ngôi nhà, thì {title} chính là ánh đèn luôn để sẵn. Chúc {vocative} luôn khỏe, luôn vui, và luôn được yêu thương như {vocative} đã yêu thương mọi người.",
  "Con nhớ những lần {title} cười rất khẽ — chỉ cần vậy thôi cũng đủ làm ngày dài trở nên ấm lại. Nhân 20/10, xin được ôm {vocative} bằng những dòng chữ này.",
  "Có lẽ con không nói giỏi bằng cách {title} đã hy sinh thầm lặng. Nhưng hôm nay, xin được nói thật rõ: con biết ơn {vocative}, và mãi yêu thương {vocative}.",
  "Chúc {title} một ngày thật chậm, thật nhẹ — có hoa, có nắng, có tiếng cười, và có ai đó thì thầm bên tai rằng {vocative} rất đáng quý.",
  "Dù lớn bao nhiêu, trong mắt con {title} vẫn là người làm thế giới này dịu dàng hơn. Chúc {vocative} luôn bình an và hạnh phúc như đoá hoa được nâng niu.",
  "Con muốn {title} biết rằng những bữa cơm, những lời dặn dò, những lần chờ cửa — tất cả đều đã thành kỷ niệm ấm trong lòng con. Cảm ơn {vocative} rất nhiều.",
  "20/10 này, con không mang theo lời chúc hoa mỹ. Con chỉ muốn nói: hãy để {title} được nghỉ ngơi, được yêu thương, và được hạnh phúc theo cách {vocative} xứng đáng nhất.",
  "Mỗi khi nhớ về nhà, con lại nhớ đến {title} trước tiên. Chúc {vocative} luôn mạnh khỏe, luôn rạng rỡ, và luôn biết rằng có một trái tim đang hướng về {vocative}.",
  "Nếu được chọn lại, con vẫn muốn được lớn lên bên {title}. Cảm ơn vì đã dạy con biết yêu thương — bằng chính cách {vocative} sống.",
  "Xin gửi đến {title} một cái ôm thật lâu qua trang giấy này. Chúc {vocative} ngày hôm nay ngọt ngào, và mọi ngày sau này cũng dịu dàng như thế.",
  "Có những điều đẹp không cần nói thành lời — nhưng hôm nay con vẫn muốn viết: {titleCapital} là món quà lớn nhất cuộc đời con được nhận.",
  "Chúc {title} luôn giữ được nụ cười ấy, ánh mắt ấy, và trái tim rộng mở ấy. Thế giới này cần những người dịu dàng như {vocative}.",
  "Con biết {title} đã mệt rất nhiều vì mọi người. Hôm nay, xin {vocative} hãy nhận lại một chút yêu thương — dù chỉ là vài dòng chữ chân thành này.",
  "Nhân ngày tôn vinh người phụ nữ Việt Nam, con muốn tôn vinh riêng {title}: người đã lặng lẽ làm nên hạnh phúc của cả nhà.",
  "Mong {title} luôn được lắng nghe, được nâng niu, và được sống thật thảnh thơi. Con sẽ cố gắng trở thành người khiến {vocative} tự hào.",
  "Lá thư này ngắn thôi, nhưng tình cảm thì dài. Chúc {title} sức khỏe dồi dào, tâm hồn nhẹ nhàng, và luôn có hoa trên đường đi.",
  "Cảm ơn {title} vì đã ở bên — trong những ngày vui cũng như những ngày khó. Con thương {vocative}, hôm nay và cả những ngày sau nữa.",
  "Chúc {title} như đóa sen giữa hồ: thanh khiết, vững vàng, và luôn nở rộ dù gió có thổi qua. {titleCapital} xứng đáng với mọi điều tốt lành.",
  "Gấp lá thư này lại, con vẫn muốn thì thầm thêm một câu: hãy luôn nhớ rằng {title} được yêu thương nhiều hơn {vocative} nghĩ.",
];

const PS_TEMPLATES = {
  me: "Cảm ơn mẹ vì những bữa cơm ấm, vì những lần chờ cửa, vì nụ cười khiến mọi mệt mỏi tan biến. Nhân ngày 20/10, xin được giữ lấy bàn tay mẹ thêm một lần nữa — và thì thầm: con yêu mẹ nhiều lắm.",
  "ba-noi": "Cảm ơn bà nội vì những câu chuyện cũ, vì bàn tay nhăn mà ấm, vì tình thương không bao giờ vơi. Cháu mãi là cháu nhỏ của bà.",
  "ba-ngoai": "Cảm ơn bà ngoại vì đã chiều cháu bằng cả trái tim. Chúc bà luôn vui, luôn khỏe, và luôn có cháu bên cạnh thì thầm gọi 'bà ơi'.",
  co: "Cảm ơn cô vì những lời động viên dịu dàng và vì đã cho cháu thêm một chỗ dựa trong họ hàng. Cháu thương cô nhiều.",
  di: "Cảm ơn dì vì sự quan tâm ấm áp. Dù gần hay xa, cháu vẫn nhớ đến dì và gửi lời chúc tốt lành nhất trong ngày hôm nay.",
  thim: "Cảm ơn thím vì đã làm cho gia đình thêm gần gũi và ấm cúng. Chúc thím luôn vui vẻ và được yêu thương.",
  o: "Cảm ơn o vì những quan tâm ấm áp và tình thương dành cho cháu. Nhân ngày 20/10, cháu xin gửi đến o một lá thư đầy yêu thương.",
  mo: "Cảm ơn mợ vì những quan tâm thầm lặng. Cháu xin gửi đến mợ một lá thư nhỏ đầy tình cảm trong ngày 20/10.",
  bac: "Cảm ơn bác vì đã dành cho cháu tình thương như người trong nhà. Chúc bác luôn mạnh khỏe và hạnh phúc.",
  chi: "Cảm ơn chị vì đã vừa là chị, vừa như một người bạn. Em biết ơn vì có chị trong đời.",
  em: "Cảm ơn em vì đã mang đến bao niềm vui. Chúc em luôn xinh đẹp, vững vàng và được yêu thương đúng mức.",
  vo: "Cảm ơn em vì đã cùng anh xây một mái nhà. Anh muốn nói nhiều hơn nữa — nhưng hôm nay chỉ cần: anh yêu em.",
  "con-gai": "Cảm ơn con vì đã lớn lên thật đáng yêu và kiên cường. Cha/mẹ luôn tự hào về con — hôm nay và mãi về sau.",
};

const STORAGE_KEY = "pnvn-2010-member";

const welcome = document.getElementById("welcome");
const memberSelect = document.getElementById("memberSelect");
const memberSelectInline = document.getElementById("memberSelectInline");
const startBtn = document.getElementById("startBtn");
const wishText = document.getElementById("wishText");
const wishCaption = document.getElementById("wishCaption");
const letterSalute = document.getElementById("letterSalute");
const letterClosing = document.getElementById("letterClosing");
const letterTo = document.getElementById("letterTo");
const letterSign = document.getElementById("letterSign");
const heroLead = document.getElementById("heroLead");
const heroScript = document.getElementById("heroScript");
const psText = document.getElementById("psText");
const letterBody = document.querySelector(".letter-body");
const randomWishBtn = document.getElementById("randomWishBtn");
const copyWishBtn = document.getElementById("copyWishBtn");
const imageWishBtn = document.getElementById("imageWishBtn");
const changeMemberBtn = document.getElementById("changeMemberBtn");
const copyToast = document.getElementById("copyToast");
const petalField = document.getElementById("petalField");

let currentMember = null;
let currentIndex = 0;
let isAnimating = false;
let isExporting = false;
let toastTimer = null;

function getMember(id) {
  return MEMBERS.find((m) => m.id === id) || null;
}

function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function fillTemplate(template, member) {
  return template
    .replaceAll("{title}", member.title)
    .replaceAll("{titleCapital}", capitalize(member.title))
    .replaceAll("{vocative}", member.vocative);
}

function buildWish(index, member) {
  return fillTemplate(WISH_TEMPLATES[index], member);
}

function buildFullLetter(member, wish) {
  return [
    letterTo.textContent,
    "",
    member.salute,
    wish,
    "",
    member.closing,
    "Với tất cả yêu thương",
  ].join("\n");
}

function populateInlineSelect(selectedId) {
  memberSelectInline.innerHTML = MEMBERS.map(
    (m) =>
      `<option value="${m.id}"${m.id === selectedId ? " selected" : ""}>${m.label}</option>`
  ).join("");
}

function updateCopyForMember(member) {
  letterTo.textContent = `Gửi ${member.title} yêu dấu,`;
  letterSalute.textContent = member.salute;
  letterClosing.textContent = member.closing;
  letterSign.textContent = "Với tất cả yêu thương";
  heroScript.textContent = `Gửi đến ${member.title}…`;
  heroLead.textContent = `Có những lời yêu thương cứ để trong lòng mãi — hôm nay, xin được viết thành một lá thư chỉ dành cho ${member.title}.`;
  psText.textContent = PS_TEMPLATES[member.id] || PS_TEMPLATES.me;
}

function pickRandomIndex(exclude) {
  if (WISH_TEMPLATES.length <= 1) return 0;
  let next = exclude;
  while (next === exclude) {
    next = Math.floor(Math.random() * WISH_TEMPLATES.length);
  }
  return next;
}

function showWish(index, { animate = true } = {}) {
  if (!currentMember) return;

  const text = buildWish(index, currentMember);
  currentIndex = index;
  wishCaption.textContent = `Trang thư · ${index + 1}`;

  if (!animate) {
    wishText.textContent = text;
    return;
  }

  isAnimating = true;
  letterBody.classList.remove("is-in");
  letterBody.classList.add("is-out");

  window.setTimeout(() => {
    wishText.textContent = text;
    letterBody.classList.remove("is-out");
    letterBody.classList.add("is-in");
    isAnimating = false;
  }, 320);
}

function setMember(id, { animateWish = true, persist = true } = {}) {
  const member = getMember(id);
  if (!member) return;

  currentMember = member;
  if (persist) {
    try {
      sessionStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore */
    }
  }

  memberSelect.value = id;
  populateInlineSelect(id);
  updateCopyForMember(member);
  showWish(
    animateWish
      ? pickRandomIndex(currentIndex)
      : Math.floor(Math.random() * WISH_TEMPLATES.length),
    { animate: animateWish }
  );
}

function closeWelcome() {
  welcome.classList.add("is-leaving");
  document.body.classList.remove("locked");

  window.setTimeout(() => {
    welcome.hidden = true;
    welcome.classList.remove("is-leaving");
    welcome.setAttribute("aria-hidden", "true");
  }, 550);
}

function openWelcome() {
  welcome.hidden = false;
  welcome.classList.remove("is-leaving");
  welcome.removeAttribute("aria-hidden");
  document.body.classList.add("locked");
  window.scrollTo(0, 0);
  startBtn.disabled = !memberSelect.value;
  window.setTimeout(() => memberSelect.focus(), 50);
}

function startCelebration() {
  const id = memberSelect.value;
  if (!id) return;
  setMember(id, { animateWish: false, persist: true });
  closeWelcome();
}

function showToast(message) {
  copyToast.textContent = message;
  copyToast.hidden = false;
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    copyToast.hidden = true;
  }, 1800);
}

function buildExportNode(member, wish) {
  const node = document.createElement("div");
  node.className = "letter-export";

  const rows = [
    ["export-date", "Ngày 20 tháng 10"],
    ["export-to", `Gửi ${member.title} yêu dấu,`],
    ["export-salute", member.salute],
    ["export-body", wish],
    ["export-closing", member.closing],
    ["export-sign", "Với tất cả yêu thương"],
    ["export-footer", "Chúc mừng Ngày Phụ nữ Việt Nam — 20 · 10"],
  ];

  rows.forEach(([className, text]) => {
    const p = document.createElement("p");
    p.className = className;
    p.textContent = text;
    node.appendChild(p);
  });

  return node;
}

async function downloadImage() {
  if (!currentMember || isExporting) return;

  if (typeof html2canvas === "undefined") {
    showToast("Không tải được thư viện ảnh. Thử lại khi có mạng.");
    return;
  }

  isExporting = true;
  imageWishBtn.classList.add("is-loading");
  imageWishBtn.textContent = "Đang tạo ảnh…";

  const wish = wishText.textContent.trim();
  const exportNode = buildExportNode(currentMember, wish);
  // Đặt trong viewport nhưng ngoài màn hình để font render đúng
  exportNode.style.left = "0";
  exportNode.style.top = "0";
  exportNode.style.transform = "translateX(-120%)";
  document.body.appendChild(exportNode);

  const fileName = `La-thu-20-10-${currentMember.label}.png`;

  try {
    // Đợi font chữ tải xong cho đẹp
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }

    const canvas = await html2canvas(exportNode, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#fff6f4",
      logging: false,
    });

    const link = document.createElement("a");
    link.download = fileName;
    link.href = canvas.toDataURL("image/png");
    link.click();
    showToast("Đã tải ảnh lá thư");
  } catch {
    showToast("Không tạo được ảnh. Vui lòng thử lại.");
  } finally {
    exportNode.remove();
    isExporting = false;
    imageWishBtn.classList.remove("is-loading");
    imageWishBtn.textContent = "Tải ảnh";
  }
}

function randomWish() {
  if (isAnimating || !currentMember) return;
  showWish(pickRandomIndex(currentIndex));
}

async function copyWish() {
  if (!currentMember) return;
  const text = buildFullLetter(currentMember, wishText.textContent.trim());
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    document.execCommand("copy");
    document.body.removeChild(area);
  }

  showToast("Đã sao chép lá thư");
}

function createPetals() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const count = window.innerWidth < 640 ? 7 : 12;
  petalField.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.setProperty("--x", `${Math.random() * 100}%`);
    petal.style.setProperty("--size", `${10 + Math.random() * 14}px`);
    petal.style.setProperty("--dur", `${14 + Math.random() * 16}s`);
    petal.style.setProperty("--delay", `${-Math.random() * 18}s`);
    petal.style.setProperty("--drift", `${-40 + Math.random() * 80}px`);
    petal.style.setProperty("--rot", `${Math.random() * 60}deg`);
    petalField.appendChild(petal);
  }
}

function observeNotes() {
  const items = document.querySelectorAll(".ps-notes li");
  if (!items.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.35 }
  );

  items.forEach((item) => io.observe(item));
}

function init() {
  memberSelect.addEventListener("change", () => {
    startBtn.disabled = !memberSelect.value;
  });

  startBtn.addEventListener("click", startCelebration);
  randomWishBtn.addEventListener("click", randomWish);
  copyWishBtn.addEventListener("click", copyWish);
  imageWishBtn.addEventListener("click", downloadImage);
  changeMemberBtn.addEventListener("click", openWelcome);

  memberSelectInline.addEventListener("change", () => {
    setMember(memberSelectInline.value, { animateWish: true });
  });

  createPetals();
  observeNotes();

  // Luôn hiện màn chọn người nhận khi vào trang
  let savedId = null;
  try {
    savedId = sessionStorage.getItem(STORAGE_KEY);
  } catch {
    savedId = null;
  }

  if (savedId && getMember(savedId)) {
    memberSelect.value = savedId;
    startBtn.disabled = false;
  }

  openWelcome();
}

init();

let resizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(createPetals, 250);
});
