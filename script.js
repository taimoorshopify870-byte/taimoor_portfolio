// Data
const projects = [
  {
    name: "MoxieLash",
    tag: "Beauty · DTC · 8-figure brand",
    image: "assets/project-moxielash.jpg",
    problem: "MoxieLash ke product pages slow load ho rahe the aur conversion rate plateau pe tha. Mobile par LCP 4.8s tha aur subscription upsell flow toot raha tha.",
    solution: "Custom Liquid sections banaye for swatches & bundle builder, Shopify Storefront API se headless cart sync kiya, aur lazy-loaded media + critical CSS inline ke zariye site speed boost ki.",
    impact: ["LCP 4.8s → 1.6s", "+34% mobile conversion", "+22% AOV via bundle"],
    stack: ["Shopify Liquid", "Storefront API", "Tailwind CSS", "Klaviyo"],
  },
  {
    name: "ProlonLife",
    tag: "Health & Wellness · Subscription",
    image: "assets/project-prolon.jpg",
    problem: "ProlonLife ke pas complex subscription tiers thay aur ek custom quiz funnel chahiye tha jo product recommend kare — default theme is workflow ko handle nahi kar sakti thi.",
    solution: "End-to-end quiz funnel banaya React + Liquid hybrid pe, Recharge API integrate ki for subscription logic, aur theme-wide CRO experiments setup kiye via A/B sections.",
    impact: ["+48% quiz-to-checkout", "−61% checkout drop-off", "Core Web Vitals: all green"],
    stack: ["Shopify Plus", "Recharge API", "JavaScript", "GSAP"],
  },
  {
    name: "Atelier Maison",
    tag: "Luxury Fashion · Editorial Commerce",
    image: "assets/project-fashion.jpg",
    problem: "Brand ko ek editorial-grade storefront chahiye tha jisme lookbook, made-to-order requests aur multi-currency seamless ho — aur SEO score 90+ rahe.",
    solution: "Fully custom Dawn-based theme banayi with metaobject-driven lookbook, made-to-order app block, aur structured data (Product + Article) for rich snippets.",
    impact: ["Lighthouse 98", "+71% organic traffic", "12 countries live"],
    stack: ["Liquid", "Metaobjects", "Hydrogen", "Tailwind CSS"],
  },
];

const skills = [
  { ico: "</>", name: "Shopify Liquid" },
  { ico: "⚡", name: "Storefront / Admin API" },
  { ico: "✦", name: "Hydrogen & Headless" },
  { ico: "</>", name: "JavaScript / TypeScript" },
  { ico: "◆", name: "React & Next.js" },
  { ico: "✦", name: "Tailwind CSS" },
  { ico: "⚡", name: "Speed Optimization" },
  { ico: "🛒", name: "Shopify CRO" },
];

const services = [
  { ico: "◆", title: "Custom Sections & Themes", text: "Brand ke liye scratch se sections, blocks aur theme settings — merchandiser-friendly aur fully editable from theme editor." },
  { ico: "⚡", title: "Speed Optimization", text: "Core Web Vitals audit, asset diet, critical CSS, lazy hydration aur app cleanup — Lighthouse 90+ guaranteed." },
  { ico: "📈", title: "Shopify CRO", text: "Funnel analysis, A/B testing, bundle builders, sticky carts aur upsell flows jo AOV aur conversion dono badhayein." },
];

// Render projects
const projectsEl = document.getElementById("projects");
projects.forEach((p, i) => {
  const article = document.createElement("article");
  article.className = "project reveal" + (i % 2 === 1 ? " reverse" : "");
  article.innerHTML = `
    <div class="project-img">
      <img src="${p.image}" alt="${p.name} project" loading="lazy" />
    </div>
    <div>
      <p class="tag">${p.tag}</p>
      <h3>${p.name}</h3>
      <div class="block"><h4>The Problem</h4><p>${p.problem}</p></div>
      <div class="block"><h4>My Solution</h4><p>${p.solution}</p></div>
      <ul class="impact">${p.impact.map(x => `<li>${x}</li>`).join("")}</ul>
      <div class="stack">${p.stack.map(s => `<span>${s}</span>`).join("")}</div>
    </div>
  `;
  projectsEl.appendChild(article);
});

// Render skills
const skillsEl = document.getElementById("skills-grid");
skills.forEach(s => {
  const div = document.createElement("div");
  div.className = "skill";
  div.innerHTML = `<span class="ico">${s.ico}</span><span>${s.name}</span>`;
  skillsEl.appendChild(div);
});

// Render services
const servicesEl = document.getElementById("services-grid");
services.forEach(s => {
  const div = document.createElement("div");
  div.className = "service reveal";
  div.innerHTML = `<div class="ico">${s.ico}</div><h3>${s.title}</h3><p>${s.text}</p>`;
  servicesEl.appendChild(div);
});

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
