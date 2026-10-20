const MEMBERS = [
  { id: "me", label: "Mẹ", title: "mẹ", vocative: "mẹ", pronoun: "con", dear: "Gửi mẹ yêu dấu,", salute: "Thưa mẹ,", closing: "Thương mẹ rất nhiều," },
  { id: "ba-noi", label: "Bà nội", title: "bà nội", vocative: "bà", pronoun: "cháu", dear: "Gửi bà nội yêu dấu,", salute: "Thưa bà nội,", closing: "Cháu thương bà nhiều lắm," },
  { id: "ba-ngoai", label: "Bà ngoại", title: "bà ngoại", vocative: "bà", pronoun: "cháu", dear: "Gửi bà ngoại yêu dấu,", salute: "Thưa bà ngoại,", closing: "Cháu thương bà nhiều lắm," },
  { id: "co", label: "Cô", title: "cô", vocative: "cô", pronoun: "cháu", dear: "Gửi cô yêu dấu,", salute: "Thưa cô,", closing: "Cháu thương cô nhiều," },
  { id: "di", label: "Dì", title: "dì", vocative: "dì", pronoun: "cháu", dear: "Gửi dì yêu dấu,", salute: "Thưa dì,", closing: "Cháu thương dì nhiều," },
  { id: "thim", label: "Thím", title: "thím", vocative: "thím", pronoun: "cháu", dear: "Gửi thím yêu dấu,", salute: "Thưa thím,", closing: "Cháu thương thím nhiều," },
  { id: "o", label: "O", title: "o", vocative: "o", pronoun: "cháu", dear: "Gửi o yêu dấu,", salute: "Thưa o,", closing: "Cháu thương o nhiều," },
  { id: "mo", label: "Mợ", title: "mợ", vocative: "mợ", pronoun: "cháu", dear: "Gửi mợ yêu dấu,", salute: "Thưa mợ,", closing: "Cháu thương mợ nhiều," },
  { id: "bac", label: "Bác", title: "bác", vocative: "bác", pronoun: "cháu", dear: "Gửi bác yêu dấu,", salute: "Thưa bác,", closing: "Cháu thương bác nhiều," },
  { id: "chi", label: "Chị", title: "chị", vocative: "chị", pronoun: "em", dear: "Gửi chị yêu,", salute: "Chị ơi,", closing: "Em thương chị nhiều," },
  { id: "em", label: "Em", title: "em", vocative: "em", pronoun: "con", dear: "Gửi em yêu,", salute: "Em ơi,", closing: "Anh/chị thương em nhiều," },
  { id: "vo", label: "Vợ", title: "em", vocative: "em", pronoun: "anh", dear: "Gửi em yêu,", salute: "Em ơi,", closing: "Anh thương em rất nhiều," },
  { id: "con-gai", label: "Con gái", title: "con gái", vocative: "con", pronoun: "cha/mẹ", dear: "Gửi con gái yêu,", salute: "Con gái ơi,", closing: "Cha/mẹ thương con nhiều lắm," },
];

const WISH_TEMPLATES = [
  "Hôm nay {pronoun} ngồi viết vài dòng này, không phải vì lịch nào nhắc, mà vì trong lòng vẫn còn bao điều chưa kịp nói với {title}. Cảm ơn {vocative} vì đã là chỗ dựa dịu dàng nhất của {pronoun}.",
  "Nếu cuộc đời là một ngôi nhà, thì {title} chính là ánh đèn luôn để sẵn. Chúc {vocative} luôn khỏe, luôn vui, và luôn được yêu thương như {vocative} đã yêu thương mọi người.",
  "{pronounCapital} nhớ những lần {title} cười rất khẽ — chỉ cần vậy thôi cũng đủ làm ngày dài trở nên ấm lại. Nhân 20/10, xin được ôm {vocative} bằng những dòng chữ này.",
  "Có lẽ {pronoun} không nói giỏi bằng cách {title} đã hy sinh thầm lặng. Nhưng hôm nay, xin được nói thật rõ: {pronoun} biết ơn {vocative}, và mãi yêu thương {vocative}.",
  "Chúc {title} một ngày thật chậm, thật nhẹ — có hoa, có nắng, có tiếng cười, và có ai đó thì thầm bên tai rằng {vocative} rất đáng quý.",
  "Dù lớn bao nhiêu, trong mắt {pronoun} {title} vẫn là người làm thế giới này dịu dàng hơn. Chúc {vocative} luôn bình an và hạnh phúc như đóa hoa được nâng niu.",
  "{pronounCapital} muốn {title} biết rằng những bữa cơm, những lời dặn dò, những lần chờ cửa — tất cả đều đã thành kỷ niệm ấm trong lòng {pronoun}. Cảm ơn {vocative} rất nhiều.",
  "20/10 này, {pronoun} không mang theo lời chúc hoa mỹ. {pronounCapital} chỉ muốn nói: hãy để {title} được nghỉ ngơi, được yêu thương, và được hạnh phúc theo cách {vocative} xứng đáng nhất.",
  "Mỗi khi nhớ về nhà, {pronoun} lại nhớ đến {title} trước tiên. Chúc {vocative} luôn mạnh khỏe, luôn rạng rỡ, và luôn biết rằng có một trái tim đang hướng về {vocative}.",
  "Nếu được chọn lại, {pronoun} vẫn muốn được lớn lên bên {title}. Cảm ơn vì đã dạy {pronoun} biết yêu thương — bằng chính cách {vocative} sống.",
  "Xin gửi đến {title} một cái ôm thật lâu qua trang giấy này. Chúc {vocative} ngày hôm nay ngọt ngào, và mọi ngày sau này cũng dịu dàng như thế.",
  "Có những điều đẹp không cần nói thành lời — nhưng hôm nay {pronoun} vẫn muốn viết: {titleCapital} là món quà lớn nhất cuộc đời {pronoun} được nhận.",
  "Chúc {title} luôn giữ được nụ cười ấy, ánh mắt ấy, và trái tim rộng mở ấy. Thế giới này cần những người dịu dàng như {vocative}.",
  "{pronounCapital} biết {title} đã mệt rất nhiều vì mọi người. Hôm nay, xin {vocative} hãy nhận lại một chút yêu thương — dù chỉ là vài dòng chữ chân thành này.",
  "Nhân ngày tôn vinh người phụ nữ Việt Nam, {pronoun} muốn tôn vinh riêng {title}: người đã lặng lẽ làm nên hạnh phúc của cả nhà.",
  "Mong {title} luôn được lắng nghe, được nâng niu, và được sống thật thảnh thơi. {pronounCapital} sẽ cố gắng trở thành người khiến {vocative} tự hào.",
  "Lá thư này ngắn thôi, nhưng tình cảm thì dài. Chúc {title} sức khỏe dồi dào, tâm hồn nhẹ nhàng, và luôn có hoa trên đường đi.",
  "Cảm ơn {title} vì đã ở bên — trong những ngày vui cũng như những ngày khó. {pronounCapital} thương {vocative}, hôm nay và cả những ngày sau nữa.",
  "Chúc {title} như đóa sen giữa hồ: thanh khiết, vững vàng, và luôn nở rộ dù gió có thổi qua. {titleCapital} xứng đáng với mọi điều tốt lành.",
  "Gấp lá thư này lại, {pronoun} vẫn muốn thì thầm thêm một câu: hãy luôn nhớ rằng {title} được yêu thương nhiều hơn {vocative} nghĩ.",
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
const siteHeader = document.getElementById("siteHeader");
const envelope = document.getElementById("envelope");
const waxSeal = document.getElementById("waxSeal");
const sprigs = Array.from(document.querySelectorAll(".sprig"));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
    .replaceAll("{vocative}", member.vocative)
    .replaceAll("{pronoun}", member.pronoun)
    .replaceAll("{pronounCapital}", capitalize(member.pronoun));
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
  letterTo.textContent = member.dear;
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

function syncEnvelopeReady() {
  if (!envelope) return;
  envelope.classList.toggle("is-ready", Boolean(memberSelect.value));
}

function openWelcome() {
  welcome.hidden = false;
  welcome.classList.remove("is-leaving");
  welcome.removeAttribute("aria-hidden");
  document.body.classList.add("locked");
  window.scrollTo(0, 0);
  startBtn.disabled = !memberSelect.value;
  syncEnvelopeReady();
  window.setTimeout(() => memberSelect.focus(), 50);
}

function startCelebration() {
  const id = memberSelect.value;
  if (!id) return;
  setMember(id, { animateWish: false, persist: true });
  burstPetals();
  closeWelcome();
}

/* —— Hiệu ứng cánh hoa bắn ra khi mở lá thư —— */
function burstPetals() {
  if (reduceMotion || !petalField) return;

  const origin = waxSeal
    ? {
        x: waxSeal.getBoundingClientRect().left + waxSeal.offsetWidth / 2,
        y: waxSeal.getBoundingClientRect().top + waxSeal.offsetHeight / 2,
      }
    : { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  const count = 20;
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    petal.className = "petal petal-burst";
    petal.style.left = `${origin.x}px`;
    petal.style.top = `${origin.y}px`;
    petal.style.setProperty("--size", `${9 + Math.random() * 12}px`);
    petalField.appendChild(petal);

    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 220;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance - 130;
    const spin = 200 + Math.random() * 520;

    const animation = petal.animate(
      [
        { transform: "translate3d(0, 0, 0) rotate(0deg)", opacity: 0 },
        { opacity: 0.9, offset: 0.12 },
        {
          transform: `translate3d(${dx}px, ${dy}px, 0) rotate(${spin}deg)`,
          opacity: 0,
        },
      ],
      {
        duration: 1500 + Math.random() * 900,
        easing: "cubic-bezier(0.2, 0.7, 0.3, 1)",
        fill: "forwards",
      }
    );

    animation.onfinish = () => petal.remove();
  }
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
    ["export-to", member.dear],
    ["export-salute", member.salute],
    ["export-body", wish],
    ["export-closing", member.closing],
    ["export-sign", "Với tất cả yêu thương"],
  ];

  rows.forEach(([className, text]) => {
    const p = document.createElement("p");
    p.className = className;
    if (className === "export-body" && text) {
      const dropcap = document.createElement("span");
      dropcap.className = "export-dropcap";
      dropcap.textContent = text.charAt(0);
      p.appendChild(dropcap);
      p.appendChild(document.createTextNode(text.slice(1)));
    } else {
      p.textContent = text;
    }
    node.appendChild(p);
  });

  const flourish = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  flourish.setAttribute("class", "export-flourish");
  flourish.setAttribute("viewBox", "0 0 260 24");
  flourish.setAttribute("fill", "none");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M2 16C40 16 62 8 100 8c26 0 44 6 62 6 26 0 44-6 96-6"
  );
  path.setAttribute("stroke", "currentColor");
  path.setAttribute("stroke-width", "1.2");
  path.setAttribute("stroke-linecap", "round");
  flourish.appendChild(path);
  node.appendChild(flourish);

  const footer = document.createElement("p");
  footer.className = "export-footer";
  footer.textContent = "Chúc mừng Ngày Phụ nữ Việt Nam — 20 · 10";
  node.appendChild(footer);

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
  if (reduceMotion) return;

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

/* —— Hiện dần khi cuộn tới —— */
function observeReveals() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  items.forEach((item) => io.observe(item));
}

/* —— Header đổi trạng thái khi cuộn —— */
function updateHeader() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 24);
}

/* —— Cành lá nghiêng theo con trỏ —— */
function initParallax() {
  if (reduceMotion || !sprigs.length) return;

  let frame = null;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const render = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    sprigs.forEach((sprig, index) => {
      const factor = index === 0 ? 1 : -1;
      sprig.style.setProperty("--px", `${(currentX * 18 * factor).toFixed(2)}px`);
      sprig.style.setProperty("--py", `${(currentY * 14 * factor).toFixed(2)}px`);
    });
    frame = window.requestAnimationFrame(render);
  };

  window.addEventListener(
    "pointermove",
    (event) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;
      if (frame === null) frame = window.requestAnimationFrame(render);
    },
    { passive: true }
  );
}

function init() {
  memberSelect.addEventListener("change", () => {
    startBtn.disabled = !memberSelect.value;
    syncEnvelopeReady();
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
  observeReveals();
  initParallax();
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

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
