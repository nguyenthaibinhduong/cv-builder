// app.js
const cvData = window.CV_DATA;
let currentLang = "en";

function renderCV(lang) {
    const data = cvData[lang];
    const container = document.getElementById("cv-container");

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

function setLang(lang) {
    currentLang = lang;

    const btnEn = document.getElementById("btn-en");
    const btnVi = document.getElementById("btn-vi");

    const isEN = lang === "en";
    btnEn.setAttribute("aria-pressed", String(isEN));
    btnVi.setAttribute("aria-pressed", String(!isEN));

    renderCV(lang);

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

    try {
        const saved = localStorage.getItem("cv_lang");
        if (saved === "vi" || saved === "en") setLang(saved);
        else renderCV("en");
    } catch (e) {
        renderCV("en");
    }
})();
