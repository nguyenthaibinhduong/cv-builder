// app.js
const cvData = window.CV_DATA;
let currentLang = "en";
let currentView = "cv";

const UI_TEXT = {
  en: {
    portfolioBadge: "Portfolio Landing",
    portfolioTitle: "Build Products With A Clear, Modern Frontend",
    portfolioSubtitle:
      "A quick snapshot of selected projects. Open each demo directly in embedded web view for live client walkthrough.",
    quickStats: ["1.5+ years building UI", "Web + Mobile delivery", "Realtime experiences"],
    featuredProjects: "Featured Projects",
    techLabel: "Technologies",
    highlightsLabel: "Highlights",
    imageLabel: "Project Preview",
    imageUnavailable: "Preview image is updating",
    viewDemo: "View Embedded Demo",
    demoUnavailable: "Demo link not available yet",
    sourceCode: "Source Code",
    openNewTab: "Open in new tab",
    closeDemo: "Close",
    modalTip:
      "If this website blocks iframe embedding, use Open in new tab for full preview.",
    servicesTitle: "Freelance Services",
    processTitle: "Delivery Process",
    outcomesTitle: "Business Outcomes",
    contactTitle: "Ready To Ship Your Product?",
    contactText: "I can join as a freelance frontend developer for startup MVP, product optimization, and feature delivery.",
    contactPrimary: "Book a quick call",
    contactSecondary: "Email now",
    socialLabel: "Social",
    socialCta: "Quick contact",
    floatingContact: "Contact now",
    visualTitle: "Professional Delivery Capability",
    visualSubtitle: "I work with clear execution metrics so you can trust timeline, quality, and output consistency.",
    pricingTitle: "Service Packages & Pricing",
    pricingNote: "Select the services below to get an instant estimated quote.",
    quoteServiceList: "Service checklist",
    quoteSummary: "Estimated quote",
    quoteSelected: "Selected services",
    quoteEmpty: "No service selected yet.",
    quotePrimary: "Request this estimate",
    quoteSecondary: "Send via WhatsApp",
    quoteRateNote: "Estimated in USD with 1 USD = 25,000 VND",
    trustTitle: "Why Clients Feel Safe Working With Me",
    trustBoxes: [
      {
        icon: "💎",
        title: "Pixel Perfect UI",
        desc: "Meticulous attention to design details, ensuring the UI looks exactly like the mockup across all screens."
      },
      {
        icon: "⚡",
        title: "High Performance",
        desc: "Optimized code for fast loading times and smooth 60fps animations for a premium user feel."
      },
      {
        icon: "🛡️",
        title: "Clean & Scalable",
        desc: "Modular architecture using industry best practices, making it easy to maintain and expand in the future."
      },
      {
        icon: "🤝",
        title: "Partnership Mindset",
        desc: "I don't just code; I consult on UX and technical strategies to help your business grow."
      }
    ],
    workflowSectionTitle: "Clear Working Process",
    packageIncludes: "Includes",
    packageValue: "Business value",
    recommended: "Recommended",
    choosePackage: "Choose this package",
    viaZalo: "via Zalo",
    viaWhatsApp: "via WhatsApp",
    saleNow: "Register now - promo price",
    originalPrice: "Original",
    salePrice: "Sale",
    quoteItems: [
      { key: "landing", name: "Landing page development", priceVnd: 3500000 },
      { key: "business", name: "Business website (multi-page)", priceVnd: 8000000 },
      { key: "dashboard", name: "Dashboard / web app UI", priceVnd: 12000000 },
      { key: "api", name: "API integration package", priceVnd: 2500000 },
      { key: "seo", name: "Performance + SEO optimization", priceVnd: 2000000 },
      { key: "bugfix", name: "Fast bug fixing service (24-48h)", priceVnd: 1500000 },
    ],
    capabilityMetrics: [
      {
        title: "On-time Delivery",
        value: "95%",
        score: 95,
        desc: "Milestone-based execution and transparent weekly updates.",
      },
      {
        title: "Feature Completion",
        value: "92%",
        score: 92,
        desc: "Strong ownership from requirement alignment to final handoff.",
      },
      {
        title: "UI/UX Quality",
        value: "9.1/10",
        score: 91,
        desc: "Clean UI, responsive behavior, and stable interaction flows.",
      },
    ],
    clientValues: [
      {
        title: "Faster Go-live",
        desc: "Launch sooner with an implementation flow focused on priority features first.",
      },
      {
        title: "Lower Rework Cost",
        desc: "Clear scope and component architecture reduce change requests and maintenance cost.",
      },
      {
        title: "Trustworthy Collaboration",
        desc: "Proactive communication, progress updates, and clear deliverables every phase.",
      },
    ],
    servicePackages: [
      {
        name: "Starter Landing Page",
        price: "3,500,000 - 6,500,000 VND",
        salePrice: "2,900,000 - 5,400,000 VND",
        target: "Personal brand, portfolio, local business",
        includes: ["Responsive landing page", "Basic SEO setup", "Contact form and social links"],
        value: "Professional online presence and better trust from first-time visitors.",
      },
      {
        name: "Business Website",
        price: "8,000,000 - 18,000,000 VND",
        salePrice: "6,900,000 - 15,500,000 VND",
        target: "SME, agency, product showcase",
        recommended: true,
        includes: ["Multi-section website", "Performance optimization", "Analytics integration"],
        value: "Higher lead quality, stronger brand image, easier client conversion.",
      },
      {
        name: "Web App Frontend",
        price: "15,000,000+ VND",
        salePrice: "12,900,000+ VND",
        target: "Dashboard, SaaS, internal tools",
        includes: ["UI system and reusable components", "API integration", "Delivery support after handoff"],
        value: "Faster product iteration and maintainable codebase for long-term growth.",
      },
    ],
    trustItems: [
      "Clear timeline, clear milestone, clear deliverables before starting.",
      "Update progress frequently so you always know project status.",
      "Clean source code and structured handoff documentation.",
      "Support after delivery to fix urgent issues quickly.",
    ],
    workflowSteps: [
      {
        step: "Step 1",
        title: "Requirement Alignment",
        desc: "Discuss goals, target users, style direction, and define final scope.",
      },
      {
        step: "Step 2",
        title: "Design & Build",
        desc: "Implement UI, responsive behavior, interactions, and technical architecture.",
      },
      {
        step: "Step 3",
        title: "Integration & QA",
        desc: "Connect APIs, test key flows, and optimize performance for real-world usage.",
      },
      {
        step: "Step 4",
        title: "Handover & Support",
        desc: "Deliver source code, deployment guidance, and post-launch support.",
      },
    ],
    serviceItems: [
      {
        title: "Landing Page & Portfolio",
        desc: "Conversion-focused page design, modern UI, fast loading, responsive on all devices.",
      },
      {
        title: "Web App Features",
        desc: "Build dashboard, auth flow, table/form, API integration, and reusable component systems.",
      },
      {
        title: "Realtime Experience",
        desc: "Chat, notification, live status updates with stable and scalable frontend architecture.",
      },
    ],
    processItems: ["1) Discovery and scoping", "2) UI build and API integration", "3) QA, handoff, support"],
    outcomes: ["Clean code and maintainable structure", "Better UX and higher user retention", "Fast handover for long-term scaling"],
  },
  vi: {
    portfolioBadge: "Landing Page Portfolio",
    portfolioTitle: "Thiết Kế Sản Phẩm Frontend Hiện Đại, Trực Quan",
    portfolioSubtitle:
      "Tổng hợp nhanh các dự án tiêu biểu. Mỗi dự án có thể mở demo bằng web view nhúng để trình bày trực tiếp cho khách hàng.",
    quickStats: ["1.5+ năm phát triển UI", "Triển khai Web + Mobile", "Kinh nghiệm tính năng Realtime"],
    featuredProjects: "Dự Án Nổi Bật",
    techLabel: "Công nghệ",
    highlightsLabel: "Điểm nhấn",
    imageLabel: "Hình ảnh minh họa",
    imageUnavailable: "Đang cập nhật ảnh minh họa",
    viewDemo: "Xem Demo Nhúng",
    demoUnavailable: "Chưa có link demo",
    sourceCode: "Mã nguồn",
    openNewTab: "Mở tab mới",
    closeDemo: "Đóng",
    modalTip:
      "Nếu website chặn nhúng iframe, hãy bấm Mở tab mới để xem đầy đủ.",
    servicesTitle: "Dịch Vụ Freelancer",
    processTitle: "Quy Trình Triển Khai",
    outcomesTitle: "Giá Trị Mang Lại",
    contactTitle: "Sẵn Sàng Triển Khai Dự Án Của Bạn?",
    contactText: "Tôi có thể tham gia vai trò freelance frontend cho MVP startup, tối ưu sản phẩm và phát triển tính năng mới.",
    contactPrimary: "Đặt lịch trao đổi nhanh",
    contactSecondary: "Gửi email ngay",
    socialLabel: "Mạng xã hội",
    socialCta: "Liên hệ nhanh",
    floatingContact: "Liên hệ ngay",
    visualTitle: "Năng Lực Triển Khai Chuyên Nghiệp",
    visualSubtitle: "Tôi làm việc theo các chỉ số thực thi rõ ràng để bạn an tâm về tiến độ, chất lượng và kết quả.",
    pricingTitle: "Gói Dịch Vụ & Báo Giá",
    pricingNote: "Tích chọn dịch vụ bạn cần để xem báo giá dự kiến ngay lập tức.",
    quoteServiceList: "Danh sách dịch vụ",
    quoteSummary: "Báo giá dự kiến",
    quoteSelected: "Dịch vụ đã chọn",
    quoteEmpty: "Chưa chọn dịch vụ nào.",
    quotePrimary: "Gửi yêu cầu báo giá này",
    quoteSecondary: "Gửi qua WhatsApp",
    quoteRateNote: "Chế độ tiếng Anh sẽ quy đổi theo 1 USD = 25.000 VNĐ",
    trustTitle: "Lý Do Khách Hàng An Tâm Hợp Tác",
    trustBoxes: [
      {
        icon: "💎",
        title: "Giao Diện Pixel Perfect",
        desc: "Tỉ mỉ trong từng chi tiết layout, đảm bảo sản phẩm thực tế khớp 100% với bản thiết kế (Figma/Adobe XD)."
      },
      {
        icon: "⚡",
        title: "Hiệu Năng Vượt Trội",
        desc: "Tối ưu tốc độ tải trang cực nhanh và các chuyển động mượt mà, nâng tầm trải nghiệm người dùng."
      },
      {
        icon: "🛡️",
        title: "Code Sạch & Dễ Mở Rộng",
        desc: "Tuân thủ các best practices ngành, kiến trúc module hóa giúp dễ dàng bảo trì và nâng cấp về sau."
      },
      {
        icon: "🤝",
        title: "Tư Duy Đồng Hành",
        desc: "Không chỉ viết code, tôi còn tư vấn giải pháp UX và kỹ thuật tối ưu nhất cho mục tiêu kinh doanh của bạn."
      }
    ],
    workflowSectionTitle: "Quy Trình Làm Việc Rõ Ràng",
    packageIncludes: "Bao gồm",
    packageValue: "Giá trị mang lại",
    recommended: "Đề xuất",
    choosePackage: "Chọn gói này",
    viaZalo: "qua Zalo",
    viaWhatsApp: "qua WhatsApp",
    saleNow: "Đăng ký ngay - giá ưu đãi",
    originalPrice: "Giá gốc",
    salePrice: "Giá sale",
    quoteItems: [
      { key: "landing", name: "Phát triển landing page", priceVnd: 3500000 },
      { key: "business", name: "Website doanh nghiệp (nhiều trang)", priceVnd: 8000000 },
      { key: "dashboard", name: "Dashboard / giao diện web app", priceVnd: 12000000 },
      { key: "api", name: "Gói tích hợp API", priceVnd: 2500000 },
      { key: "seo", name: "Tối ưu hiệu năng + SEO", priceVnd: 2000000 },
      { key: "bugfix", name: "Dịch vụ fix bug nhanh (24-48h)", priceVnd: 1500000 },
    ],
    capabilityMetrics: [
      {
        title: "Đúng Tiến Độ",
        value: "95%",
        score: 95,
        desc: "Triển khai theo milestone và cập nhật tiến độ minh bạch mỗi tuần.",
      },
      {
        title: "Hoàn Thành Tính Năng",
        value: "92%",
        score: 92,
        desc: "Theo sát công việc từ lúc chốt yêu cầu đến bàn giao hoàn chỉnh.",
      },
      {
        title: "Chất Lượng UI/UX",
        value: "9.1/10",
        score: 91,
        desc: "UI sạch, responsive tốt, luồng tương tác ổn định trên thực tế.",
      },
    ],
    clientValues: [
      {
        title: "Ra Mắt Nhanh Hơn",
        desc: "Ưu tiên triển khai tính năng trọng tâm để đưa sản phẩm lên nhanh.",
      },
      {
        title: "Giảm Chi Phí Sửa Lại",
        desc: "Scope rõ ràng và kiến trúc component giúp giảm phát sinh chỉnh sửa.",
      },
      {
        title: "Hợp Tác Đáng Tin Cậy",
        desc: "Chủ động giao tiếp, cập nhật tiến độ và đầu ra rõ ràng ở từng giai đoạn.",
      },
    ],
    servicePackages: [
      {
        name: "Starter Landing Page",
        price: "3.500.000 - 6.500.000 VNĐ",
        salePrice: "2.900.000 - 5.400.000 VNĐ",
        target: "Thương hiệu cá nhân, portfolio, business nhỏ",
        includes: ["Landing page responsive", "SEO cơ bản", "Form liên hệ và social link"],
        value: "Tăng độ chuyên nghiệp và độ tin cậy khi khách hàng ghé xem lần đầu.",
      },
      {
        name: "Business Website",
        price: "8.000.000 - 18.000.000 VNĐ",
        salePrice: "6.900.000 - 15.500.000 VNĐ",
        target: "Doanh nghiệp SME, agency, giới thiệu sản phẩm",
        recommended: true,
        includes: ["Website nhiều section", "Tối ưu hiệu năng", "Tích hợp theo dõi analytics"],
        value: "Nâng chất lượng khách hàng tiềm năng và tăng khả năng chuyển đổi.",
      },
      {
        name: "Web App Frontend",
        price: "15.000.000+ VNĐ",
        salePrice: "12.900.000+ VNĐ",
        target: "Dashboard, SaaS, hệ thống nội bộ",
        includes: ["UI system và component tái sử dụng", "Tích hợp API", "Hỗ trợ sau bàn giao"],
        value: "Tăng tốc phát triển sản phẩm và dễ bảo trì trong dài hạn.",
      },
    ],
    trustItems: [
      "Timeline rõ ràng, milestone rõ ràng, đầu ra rõ ràng trước khi bắt đầu.",
      "Cập nhật tiến độ thường xuyên để bạn luôn nắm được tình hình.",
      "Code sạch, có cấu trúc và tài liệu bàn giao đầy đủ.",
      "Hỗ trợ sau bàn giao để xử lý nhanh các vấn đề phát sinh.",
    ],
    workflowSteps: [
      {
        step: "Bước 1",
        title: "Làm Rõ Yêu Cầu",
        desc: "Trao đổi mục tiêu, người dùng mục tiêu, phong cách thiết kế và chốt phạm vi.",
      },
      {
        step: "Bước 2",
        title: "Thiết Kế & Triển Khai",
        desc: "Xây dựng UI, responsive, tương tác và cấu trúc kỹ thuật phù hợp.",
      },
      {
        step: "Bước 3",
        title: "Tích Hợp & Kiểm Thử",
        desc: "Kết nối API, test luồng chính và tối ưu hiệu năng khi vận hành thực tế.",
      },
      {
        step: "Bước 4",
        title: "Bàn Giao & Hỗ Trợ",
        desc: "Bàn giao source code, hướng dẫn deploy và hỗ trợ sau khi lên production.",
      },
    ],
    serviceItems: [
      {
        title: "Landing Page & Portfolio",
        desc: "Thiết kế trang tập trung chuyển đổi, UI hiện đại, tải nhanh, responsive mọi thiết bị.",
      },
      {
        title: "Tính Năng Web App",
        desc: "Xây dashboard, auth flow, bảng/form, tích hợp API và hệ component tái sử dụng.",
      },
      {
        title: "Trải Nghiệm Realtime",
        desc: "Chat, thông báo, trạng thái trực tuyến với kiến trúc frontend ổn định, dễ mở rộng.",
      },
    ],
    processItems: ["1) Khảo sát yêu cầu và phạm vi", "2) Dựng UI và tích hợp API", "3) QA, bàn giao, hỗ trợ"],
    outcomes: ["Code sạch, dễ bảo trì", "UX tốt hơn, giữ chân người dùng tốt hơn", "Bàn giao nhanh để mở rộng lâu dài"],
  },
};

function getSocialLinks(contact) {
  const phoneDigits = (contact.phone || "").replace(/\D/g, "");

  return [
    {
      key: "facebook",
      label: "Facebook",
      href: contact.facebookUrl || "https://facebook.com",
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>`,
    },
    {
      key: "zalo",
      label: "Zalo",
      href: contact.zaloUrl || (phoneDigits ? `https://zalo.me/${phoneDigits}` : "https://zalo.me"),
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5C4 5.1 5.1 4 6.5 4h11C18.9 4 20 5.1 20 6.5v11c0 1.4-1.1 2.5-2.5 2.5h-11C5.1 20 4 18.9 4 17.5v-11z"/><path d="M8 9h3.2L8 15h3v1H6.7l3.2-6H8V9zm7.2 0H17l-2.6 3.2L17 16h-1.8l-1.9-2.5L11.5 16H9.7l2.7-3.8L9.9 9h1.8l1.7 2.3L15.2 9z"/></svg>`,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      href: contact.whatsappUrl || (phoneDigits ? `https://wa.me/${phoneDigits}` : "https://wa.me"),
      icon: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.8c0 4.7-3.8 8.5-8.5 8.5-1.5 0-2.9-.4-4.2-1.1L3.5 20.5l1.3-4.1c-.8-1.3-1.3-2.9-1.3-4.6 0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5z"/><path d="M9.7 8.7c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.6 2.5 4 3.4.5.2.9.3 1.2.4.5.1 1 .1 1.4.1.4-.1 1.3-.5 1.5-1 .2-.6.2-1 .1-1.1-.1-.1-.3-.2-.7-.4-.4-.2-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.8-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.5-1.3-.7-1.7z"/></svg>`,
    },
  ];
}

function buildSocialIcons(contact, lang, withLabel = false) {
  const txt = UI_TEXT[lang];
  const links = getSocialLinks(contact);

  const icons = links
    .map(
      (item) => `
      <a class="social-icon social-${item.key}" href="${item.href}" target="_blank" rel="noopener" aria-label="${item.label}" title="${item.label}">
        ${item.icon}
      </a>
    `
    )
    .join("");

  if (!withLabel) return `<div class="social-links">${icons}</div>`;

  return `
    <div class="contact-item contact-item-social">
      <span class="contact-label">${txt.socialLabel}</span>
      <div class="contact-value social-links">${icons}</div>
    </div>
  `;
}

function renderFloatingContact(contact, lang) {
  const txt = UI_TEXT[lang];
  const links = getSocialLinks(contact);

  let dock = document.getElementById("floating-contact");
  if (!dock) {
    dock = document.createElement("div");
    dock.id = "floating-contact";
    document.body.appendChild(dock);
  }

  dock.className = "floating-contact-dock";
  dock.innerHTML = `
    <span class="floating-label">${txt.floatingContact}</span>
    ${links
      .map(
        (item) => `
      <a class="social-icon social-${item.key}" href="${item.href}" target="_blank" rel="noopener" aria-label="${item.label}" title="${item.label}">
        ${item.icon}
      </a>
    `
      )
      .join("")}
  `;
}

function buildPackageContactLinks(contact, lang, packageName) {
  const phoneDigits = (contact.phone || "").replace(/\D/g, "");
  const message =
    lang === "vi"
      ? `Chao ban, toi muon tu van goi \"${packageName}\". Nho ban gui quy trinh va timeline trien khai.`
      : `Hi, I want to discuss the \"${packageName}\" package. Please share timeline and next steps.`;
  const encodedMessage = encodeURIComponent(message);

  const defaultZalo = phoneDigits ? `https://zalo.me/${phoneDigits}` : "https://zalo.me";
  const baseZalo = contact.zaloUrl || defaultZalo;
  const baseWhatsApp = contact.whatsappUrl || (phoneDigits ? `https://wa.me/${phoneDigits}` : "https://wa.me");

  const zaloLink = `${baseZalo}${baseZalo.includes("?") ? "&" : "?"}text=${encodedMessage}`;
  const whatsappLink = `${baseWhatsApp}${baseWhatsApp.includes("?") ? "&" : "?"}text=${encodedMessage}`;

  return { zaloLink, whatsappLink };
}

let titleRevealObserver = null;
let sectionRevealObserver = null;
const USD_RATE = 25000;

function initTitleReveal() {
  const titles = document.querySelectorAll(".reveal-title");
  if (!titles.length) return;

  if (titleRevealObserver) {
    titleRevealObserver.disconnect();
  }

  titleRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.35 }
  );

  titles.forEach((title) => {
    title.classList.remove("is-visible");
    titleRevealObserver.observe(title);
  });
}

function initSectionReveal() {
  const sections = document.querySelectorAll(".portfolio-scroll-section");
  if (!sections.length) return;

  if (sectionRevealObserver) {
    sectionRevealObserver.disconnect();
  }

  sectionRevealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          sectionRevealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.remove("is-visible");
    sectionRevealObserver.observe(section);
  });
}

function formatMoney(vndValue, lang) {
  if (lang === "en") {
    const usd = vndValue / USD_RATE;
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(usd);
  }

  return new Intl.NumberFormat("vi-VN").format(vndValue) + " VNĐ";
}

function initQuoteCalculator(lang, contact) {
  const root = document.querySelector(".quote-calculator");
  if (!root) return;

  const txt = UI_TEXT[lang];
  const checks = root.querySelectorAll(".quote-check");
  const totalEl = root.querySelector("#quote-total");
  const selectedEl = root.querySelector("#quote-selected");
  const primaryEl = root.querySelector("#quote-primary-link");
  const secondaryEl = root.querySelector("#quote-secondary-link");
  const rateEl = root.querySelector("#quote-rate-note");

  const phoneDigits = (contact.phone || "").replace(/\D/g, "");
  const defaultZalo = phoneDigits ? `https://zalo.me/${phoneDigits}` : "https://zalo.me";
  const baseZalo = contact.zaloUrl || defaultZalo;
  const baseWhatsApp = contact.whatsappUrl || (phoneDigits ? `https://wa.me/${phoneDigits}` : "https://wa.me");

  const update = () => {
    const selected = [];
    let totalVnd = 0;

    checks.forEach((check) => {
      if (check.checked) {
        const price = Number(check.getAttribute("data-price") || "0");
        const name = check.getAttribute("data-name") || "";
        selected.push({ name, price });
        totalVnd += price;
      }
    });

    selectedEl.innerHTML = selected.length
      ? selected.map((item) => `<li>${item.name}</li>`).join("")
      : `<li>${txt.quoteEmpty}</li>`;

    totalEl.textContent = formatMoney(totalVnd, lang);

    rateEl.textContent = lang === "en" ? txt.quoteRateNote : "";

    const names = selected.length ? selected.map((s) => s.name).join(", ") : txt.quoteEmpty;
    const totalMsg = formatMoney(totalVnd, lang);
    const message =
      lang === "vi"
        ? `Chao ban, toi muon nhan bao gia voi cac dich vu: ${names}. Tong du kien: ${totalMsg}.`
        : `Hi, I want a quote for: ${names}. Estimated total: ${totalMsg}.`;
    const encoded = encodeURIComponent(message);

    primaryEl.href = `${baseZalo}${baseZalo.includes("?") ? "&" : "?"}text=${encoded}`;
    secondaryEl.href = `${baseWhatsApp}${baseWhatsApp.includes("?") ? "&" : "?"}text=${encoded}`;
  };

  checks.forEach((check) => {
    check.addEventListener("change", update);
  });

  update();
}

function renderCV(lang) {
  const data = cvData[lang];
  const container = document.getElementById("cv-container");
  const socialInHeader = buildSocialIcons(data.contact, lang, true);

  const html = `
    <div class="header">
      <div class="header-left">
        <h1 class="name">${data.name}</h1>
        <p class="role">${data.role}</p>
        <p class="personal-info">${lang === "en" ? "Date of Birth" : "Ngày sinh"}: ${data.contact.dateOfBirth}</p>
        <p class="personal-info">${lang === "en" ? "Gender" : "Giới tính"}: ${data.contact.gender}</p>
        
      </div>
      <div class="header-right">
        <div class="contact-item">
          <span class="contact-label">${lang === "en" ? "Location" : "Địa chỉ"}</span>
          <span class="contact-value">${data.contact.location}</span>
        </div>
        <div class="contact-item">
          <span class="contact-label">${lang === "en" ? "Email" : "Email"}</span>
          <span class="contact-value"><a href="mailto:${data.contact.email}">${data.contact.email}</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-label">${lang === "en" ? "Phone" : "Điện thoại"}</span>
          <span class="contact-value"><a href="tel:${data.contact.phone}">${data.contact.phone}</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-label">${lang === "en" ? "GitHub" : "GitHub"}</span>
          <span class="contact-value"><a href="${data.contact.githubUrl}" target="_blank" rel="noopener">${data.contact.github}</a></span>
        </div>
        ${socialInHeader}
      </div>
    </div>

    <div class="grid">
      <div class="section">
        <h2>${lang === "en" ? "Profile" : "Tóm tắt"}</h2>
        <div class="block">
          <p class="sub">${data.profile}</p>
        </div>

        <h2>${lang === "en" ? "Work Experience" : "Kinh nghiệm làm việc"}</h2>
        ${data.experience
      .map(
        (exp) => `
          <div class="block" style="margin-top:12px;">
            <div class="row">
              <div>
                <h3>${exp.title}</h3>
                <p class="sub">${exp.period}</p>
              </div>
              <span class="pill">${exp.tag}</span>
            </div>
            <ul>
              ${exp.responsibilities.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </div>
        `
      )
      .join("")}
      </div>

      <div class="section">
        <h2>${lang === "en" ? "Technical Skills" : "Kỹ năng"}</h2>

        ${Object.values(data.skills)
      .map(
        (skill) => `
          <div class="block" style="margin-top:12px;">
            <h3>${skill.title}</h3>
            <div class="chips">
              ${skill.items.map((item) => `<span class="pill">${item}</span>`).join("")}
            </div>
            ${skill.description
            ? `
              <ul class="small">
                ${skill.description.map((desc) => `<li>${desc}</li>`).join("")}
              </ul>`
            : ""
          }
          </div>
        `
      )
      .join("")}

        <h2>${lang === "en" ? "Certifications" : "Chứng chỉ"}</h2>
        <div class="block">
          <ul>
            ${data.certifications.map((cert) => `<li>${cert}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>

    <div class="section-full">
      <h2>${lang === "en" ? "Education" : "Học vấn"}</h2>
      <div class="block">
        <h3>${data.education.degree}</h3>
        <p class="sub">${data.education.school}</p>
        <p class="muted small">${data.education.coursework}</p>
      </div>
    </div>

    <div class="section-full">
      <h2>${lang === "en" ? "Projects" : "Dự án"}</h2>
      ${data.projects
      .map(
        (proj) => `
        <div class="block" style="margin-top:12px;">
          <div class="row">
            <div>
              <h3>${proj.title}</h3>
              <p class="sub">${proj.role}</p>
            </div>
            ${proj.tag ? `<span class="pill">${proj.tag}</span>` : ""}
          </div>

          ${proj.technologies
            ? `<p class="muted small">${lang === "en" ? "Technologies" : "Công nghệ"}: ${proj.technologies}</p>`
            : ""
          }

          <div class="chips" style="margin-bottom: 8px;">
            <span class="pill">GitHub: ${proj.githubUrl
            ? `<a href="${proj.githubUrl}" target="_blank" rel="noopener">${proj.github}</a>`
            : `<span style="opacity: 0.6;">${proj.github}</span>`
          }</span>
            <span class="pill">Demo: <span style="opacity: 0.6;">${proj.demo}</span></span>
          </div>

          <ul>
            ${proj.highlights.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>
      `
      )
      .join("")}
    </div>

    <div class="footerNote">${data.footer}</div>
  `;

  container.innerHTML = html;
}

function renderPortfolio(lang) {
  const data = cvData[lang];
  const txt = UI_TEXT[lang];
  const container = document.getElementById("portfolio-container");
  const email = data.contact.email;
  const phone = data.contact.phone;
  const phoneClean = phone.replace(/\s+/g, "");
  const mailSubject = encodeURIComponent(lang === "en" ? "Freelance Frontend Collaboration" : "Trao đổi hợp tác Freelance Frontend");
  const socialIcons = buildSocialIcons(data.contact, lang, false);

  const html = `
    <section class="portfolio-hero portfolio-scroll-section section-light section-tone-hero">
      <div class="liquid-orb orb-1"></div>
      <div class="liquid-orb orb-2"></div>
      <div class="hero-content">
        <p class="hero-badge">${txt.portfolioBadge}</p>
        <h1 class="hero-title">${txt.portfolioTitle}</h1>
        <p class="hero-subtitle">${txt.portfolioSubtitle}</p>
        <div class="hero-stats">
          ${txt.quickStats.map((s) => `<span class="glass-chip">${s}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="portfolio-section portfolio-scroll-section section-tone-projects">
      <h2 class="portfolio-heading section-title-md reveal-title">${txt.featuredProjects}</h2>
      <p class="section-intro"><i class="fa-solid fa-diagram-project"></i> ${txt.quickStats[0]} • ${txt.quickStats[2]}</p>
      <div class="portfolio-grid grid-split">
        ${data.projects
      .map((proj) => {
        const hasDemo = Boolean(proj.demoUrl);
        const imageAlt = `${txt.imageLabel} - ${proj.title}`;
        const imageBlock = proj.imageUrl
          ? `<img class="project-image" src="${proj.imageUrl}" alt="${imageAlt}" loading="lazy">`
          : `<div class="project-image-placeholder">${txt.imageUnavailable}</div>`;
        return `
          <article class="portfolio-card card-horizontal">
            <div class="project-header-full">
              <h3 class="portfolio-heading section-title-md reveal-title is-visible">${proj.title}</h3>
              ${proj.tag ? `<span class="pill project-tag">${proj.tag}</span>` : ""}
            </div>

            <div class="project-content-split">
              <div class="project-media-wrapper">
                <div class="project-media${hasDemo ? " is-clickable" : ""}" ${hasDemo ? `data-demo-url="${proj.demoUrl}" data-demo-title="${proj.title}" role="button" tabindex="0"` : ""}>
                  ${imageBlock}
                  <div class="project-overlay-hit">View Project Details</div>
                </div>
              </div>

              <div class="project-info-wrapper">
                <p class="sub project-role">${proj.role}</p>
                ${proj.technologies ? `<p class="project-tech"><b>${txt.techLabel}:</b> ${proj.technologies}</p>` : ""}

                <div class="project-main-desc">
                  <p class="small"><b>${txt.highlightsLabel}</b></p>
                  <ul class="project-highlights">
                    ${proj.highlights.map((item) => `<li>${item}</li>`).join("")}
                  </ul>
                </div>

                <div class="portfolio-actions">
                  <button class="project-btn-premium" ${hasDemo ? `data-demo-url="${proj.demoUrl}" data-demo-title="${proj.title}"` : "disabled"}>
                    ${hasDemo ? txt.viewDemo : txt.demoUnavailable}
                  </button>
                  ${proj.githubUrl
            ? `<a class="project-link-premium" href="${proj.githubUrl}" target="_blank" rel="noopener">${txt.sourceCode}</a>`
            : `<span class="project-link-premium muted">${txt.sourceCode}</span>`}
                </div>
              </div>
            </div>
          </article>
        `;
      })
      .join("")}
      </div>
    </section>

    <section class="visual-title-wrap portfolio-scroll-section section-light section-tone-visual">
      <h2 class="portfolio-heading section-title-md reveal-title">${txt.visualTitle}</h2>
      <p class="capability-subtitle">${txt.visualSubtitle}</p>
      <div class="capability-layout">
        <div class="metrics-grid">
          ${txt.capabilityMetrics
      .map(
        (metric) => `
            <article class="metric-card">
              <div class="metric-head">
                <h3>${metric.title}</h3>
                <span class="metric-value">${metric.value}</span>
              </div>
              <div class="metric-bar">
                <span class="metric-fill" style="width:${metric.score}%"></span>
              </div>
              <p class="small muted">${metric.desc}</p>
            </article>
          `
      )
      .join("")}
        </div>

        <article class="value-panel">
          <h3>${txt.packageValue}</h3>
          <div class="value-list">
            ${txt.clientValues
      .map(
        (item) => `
              <div class="value-item">
                <h4>${item.title}</h4>
                <p class="small muted">${item.desc}</p>
              </div>
            `
      )
      .join("")}
          </div>
        </article>
      </div>
    </section>

    <section class="pricing-section portfolio-scroll-section section-tone-pricing">
      <h2 class="portfolio-heading section-title-md reveal-title">${txt.pricingTitle}</h2>
      <p class="pricing-note">${txt.pricingNote}</p>
      <div class="quote-calculator" data-lang="${lang}">
        <div class="quote-options">
          <h3>${txt.quoteServiceList}</h3>
          ${txt.quoteItems
      .map(
        (item) => `
            <label class="quote-option">
              <input type="checkbox" class="quote-check" data-price="${item.priceVnd}" data-name="${item.name}">
              <span class="quote-name">${item.name}</span>
            </label>
          `
      )
      .join("")}
        </div>

        <aside class="quote-summary-card">
          <h3>${txt.quoteSummary}</h3>
          <p class="small"><b>${txt.quoteSelected}</b></p>
          <ul id="quote-selected" class="quote-selected-list"></ul>
          <div class="quote-total-wrap">
            <span>Total</span>
            <strong id="quote-total"></strong>
          </div>
          <p id="quote-rate-note" class="small muted"></p>
          <div class="package-actions">
            <a id="quote-primary-link" class="package-btn" target="_blank" rel="noopener">${txt.quotePrimary}</a>
            <a id="quote-secondary-link" class="package-btn package-btn-alt" target="_blank" rel="noopener">${txt.quoteSecondary}</a>
          </div>
        </aside>
      </div>
    </section>

    <section class="trust-section portfolio-scroll-section section-light section-tone-trust">
      <h2 class="portfolio-heading section-title-md reveal-title">${txt.trustTitle}</h2>
      <p class="section-intro"><i class="fa-solid fa-shield-heart"></i> ${lang === "vi" ? "Pixel Perfect • Hiệu năng • Kiến trúc sạch" : "Pixel Perfect • Performance • Clean Architecture"}</p>
      <div class="trust-grid">
        ${txt.trustBoxes
      .map(
        (box) => `
          <article class="trust-box">
            <div class="trust-icon">${box.icon}</div>
            <div class="trust-content">
              <h3>${box.title}</h3>
              <p class="small muted">${box.desc}</p>
            </div>
          </article>
        `
      )
      .join("")}
      </div>
    </section>

    <section class="workflow-section portfolio-scroll-section section-tone-workflow">
      <h2 class="portfolio-heading section-title-md reveal-title">${txt.workflowSectionTitle}</h2>
      <p class="section-intro"><i class="fa-solid fa-route"></i> ${lang === "vi" ? "Chiến lược -> Thiết kế -> Triển khai -> Ra mắt" : "Strategy -> Design -> Build -> Launch"}</p>
      <div class="workflow-container">
        <div class="workflow-line"></div>
        <div class="workflow-grid-v2">
          ${data.workflow.steps
      .map(
        (step) => `
            <article class="workflow-step-card" tabindex="0">
              <div class="workflow-step-icon">${step.icon || "🚀"}</div>
              <div class="workflow-step-info">
                <span class="workflow-step-num">${step.n}</span>
                <h3>${step.t}</h3>
                <p class="workflow-step-desc">${step.p}</p>
              </div>
            </article>
          `
      )
      .join("")}
        </div>
      </div>
    </section>

    <section class="hire-cta portfolio-scroll-section section-tone-cta">
      <h2>${txt.contactTitle}</h2>
      <p>${txt.contactText}</p>
      <div class="cta-actions">
        <a class="cta-btn" href="mailto:${email}?subject=${mailSubject}">${txt.contactPrimary}</a>
        <a class="cta-link" href="mailto:${email}">${txt.contactSecondary}</a>
        <a class="cta-link" href="tel:${phoneClean}">${phone}</a>
      </div>
      <div class="social-cta">
        <span class="social-cta-label">${txt.socialCta}</span>
        ${socialIcons}
      </div>
    </section>
  `;

  container.innerHTML = html;
}

function switchView(view) {
  currentView = view === "portfolio" ? "portfolio" : "cv";

  const cv = document.getElementById("cv-container");
  const portfolio = document.getElementById("portfolio-container");
  const tabCV = document.getElementById("tab-cv");
  const tabPortfolio = document.getElementById("tab-portfolio");
  const exportBtn = document.getElementById("btn-export");

  const isCV = currentView === "cv";
  cv.classList.toggle("hidden", !isCV);
  portfolio.classList.toggle("hidden", isCV);

  tabCV.setAttribute("aria-selected", String(isCV));
  tabPortfolio.setAttribute("aria-selected", String(!isCV));

  exportBtn.classList.toggle("hidden", !isCV);
  document.body.classList.toggle("portfolio-mode", !isCV);

  try {
    localStorage.setItem("cv_view", currentView);
  } catch (e) { }
}

function openDemoModal(url, title) {
  const modal = document.getElementById("demo-modal");
  const frame = document.getElementById("demo-frame");
  const titleEl = document.getElementById("demo-title");
  const openNew = document.getElementById("demo-open-new");
  const note = document.getElementById("demo-note");
  const txt = UI_TEXT[currentLang];

  frame.src = url;
  titleEl.textContent = title || "Project Demo";
  openNew.href = url;
  openNew.textContent = txt.openNewTab;
  note.textContent = txt.modalTip;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeDemoModal() {
  const modal = document.getElementById("demo-modal");
  const frame = document.getElementById("demo-frame");
  frame.src = "about:blank";
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "vi" ? "vi" : "en";

  const btnEn = document.getElementById("btn-en");
  const btnVi = document.getElementById("btn-vi");

  const isEN = lang === "en";
  btnEn.setAttribute("aria-pressed", String(isEN));
  btnVi.setAttribute("aria-pressed", String(!isEN));

  renderCV(lang);
  renderPortfolio(lang);
  renderFloatingContact(cvData[lang].contact, lang);
  initTitleReveal();
  initSectionReveal();
  initQuoteCalculator(lang, cvData[lang].contact);

  document.getElementById("demo-close").textContent = UI_TEXT[lang].closeDemo;

  try {
    localStorage.setItem("cv_lang", lang);
  } catch (e) { }
}

function exportToPDF() {
  const card = document.querySelector(".card");
  document.body.classList.add("pdf-mode");

  requestAnimationFrame(() => {
    const opt = {
      margin: 0,
      filename: "NGUYEN_THAI_BINH_DUONG_CV.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        allowTaint: false, // nên để false
        backgroundColor: "#ffffff",
        onclone: (clonedDoc) => {
          // ép tất cả ảnh dùng CORS + no-referrer và cache-bust
          clonedDoc.querySelectorAll("img").forEach((img) => {
            try {
              img.setAttribute("crossorigin", "anonymous");
              img.setAttribute("referrerpolicy", "no-referrer");

              const src = img.getAttribute("src");
              if (src && /^https?:\/\//i.test(src)) {
                const hasQuery = src.includes("?");
                img.setAttribute("src", src + (hasQuery ? "&" : "?") + "v=" + Date.now());
              }
            } catch (e) { }
          });
        }
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait", compress: true },
      pagebreak: { mode: ["css", "legacy"] }
    };

    html2pdf().set(opt).from(card).save().finally(() => {
      document.body.classList.remove("pdf-mode");
    });
  });
}



(function init() {
  // bind events
  document.getElementById("btn-en").addEventListener("click", () => setLang("en"));
  document.getElementById("btn-vi").addEventListener("click", () => setLang("vi"));
  document.getElementById("btn-export").addEventListener("click", exportToPDF);
  document.getElementById("tab-cv").addEventListener("click", () => switchView("cv"));
  document.getElementById("tab-portfolio").addEventListener("click", () => switchView("portfolio"));

  document.getElementById("portfolio-container").addEventListener("click", (e) => {
    const button = e.target.closest("[data-demo-url]");
    if (!button) return;

    const url = button.getAttribute("data-demo-url");
    const title = button.getAttribute("data-demo-title") || "Project Demo";

    if (!url) return;
    openDemoModal(url, title);
  });

  document.getElementById("portfolio-container").addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;

    const target = e.target.closest(".project-media[data-demo-url]");
    if (!target) return;

    e.preventDefault();
    const url = target.getAttribute("data-demo-url");
    const title = target.getAttribute("data-demo-title") || "Project Demo";
    if (!url) return;
    openDemoModal(url, title);
  });

  document.getElementById("demo-close").addEventListener("click", closeDemoModal);
  document.getElementById("demo-backdrop").addEventListener("click", closeDemoModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDemoModal();
  });

  try {
    const saved = localStorage.getItem("cv_lang");
    const savedView = localStorage.getItem("cv_view");

    if (saved === "vi" || saved === "en") setLang(saved);
    else setLang("en");

    if (savedView === "portfolio" || savedView === "cv") switchView(savedView);
    else switchView("cv");
  } catch (e) {
    setLang("en");
    switchView("cv");
  }
})();
