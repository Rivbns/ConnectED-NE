// Header, footer, chat widget compartidos + interacciones simples
(function () {
    const path = location.pathname.split("/").pop() || "index.html";
  
    const nav = [
      { href: "index.html", label: "Sobre nosotros" },
      { href: "servicios.html", label: "Servicios" },
      { href: "actividades.html", label: "Actividades e iniciativas" },
      { href: "contenido.html", label: "Contenido" },
      { href: "apoyo.html", label: "Apoyo psicológico" },
    ];
  
    const header = `
      <header class="header">
        <div class="container header-inner">
          <a class="brand" href="index.html">
            <span class="brand-mark">♥</span> ConnectEd
          </a>
          <nav class="nav" id="mainNav">
            ${nav.map(n => `<a href="${n.href}" class="${n.href === path ? "active" : ""}">${n.label}</a>`).join("")}
          </nav>
          <button class="menu-btn" aria-label="Menú" onclick="document.getElementById('mainNav').classList.toggle('open')">☰</button>
        </div>
      </header>
    `;
  
    const footer = `
      <footer class="footer">
        <div class="container footer-grid">
          <div>
            <div class="brand"><span class="brand-mark">♥</span> ConnectEd</div>
            <p class="text-muted mt-4" style="max-width:440px;font-size:14px;">
              Tu bienestar emocional también es parte de tu educación.
              Acompañamos a escolares, familias y equipos directivos con un espacio seguro,
              confidencial y guiado por profesionales certificados.
            </p>
          </div>
          <div>
            <h3>Explora</h3>
            <ul>
              ${nav.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h3>Contacto y privacidad</h3>
            <ul>
              <li>✉ ConnectEd@gmail.com</li>
              <li>🛡 Todos tus datos están cifrados y solo son vistos por el equipo autorizado.</li>
            </ul>
          </div>
        </div>
        <div class="footer-note">
          <div class="container">
            <span>© ${new Date().getFullYear()} ConnectEd. Hecho con cuidado.</span>
            <span>Confidencialidad garantizada · Equipo profesional certificado</span>
          </div>
        </div>
      </footer>
    `;
  
    const chat = `
      <button class="chat-fab" onclick="document.getElementById('chatPanel').classList.toggle('open')">
        💬 Coni
      </button>
      <div class="chat-panel" id="chatPanel">
        <div class="chat-header">Coni · Asistente virtual</div>
        <div class="chat-body" id="chatBody">
          <div class="chat-msg bot">¡Hola! Soy Coni. Puedo ayudarte a navegar la página o responder dudas sobre ConnectEd.</div>
        </div>
        <form class="chat-input" onsubmit="event.preventDefault();sendChat();">
          <input id="chatInput" placeholder="Escribe tu mensaje..." />
          <button type="submit">Enviar</button>
        </form>
      </div>
    `;
  
    document.getElementById("site-header").innerHTML = header;
    document.getElementById("site-footer").innerHTML = footer;
    const chatMount = document.getElementById("chat-widget");
    if (chatMount) chatMount.innerHTML = chat;
  
    window.sendChat = function () {
      const input = document.getElementById("chatInput");
      const body = document.getElementById("chatBody");
      const text = input.value.trim();
      if (!text) return;
      const u = document.createElement("div");
      u.className = "chat-msg user"; u.textContent = text; body.appendChild(u);
      input.value = "";
      setTimeout(() => {
        const b = document.createElement("div");
        b.className = "chat-msg bot";
        b.textContent = "Gracias por escribirme. En la versión con IA responderé al instante — por ahora te dejo un mensaje de ejemplo. 💙";
        body.appendChild(b);
        body.scrollTop = body.scrollHeight;
      }, 500);
      body.scrollTop = body.scrollHeight;
    };
  
    window.openModal = function (id) { document.getElementById(id).classList.add("open"); };
    window.closeModal = function (id) { document.getElementById(id).classList.remove("open"); };
  })();
  