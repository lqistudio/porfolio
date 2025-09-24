/* Fuente estilo retro / juego pixel */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

/* Reset básico */
* { margin:0; padding:0; box-sizing:border-box; }
body { font-family:'Press Start 2P', monospace; background:#111; color:#fff; overflow-x:hidden; }

/* Header y menú */
header {
  position:fixed;
  top:0;
  left:0;
  z-index:1000;
  transition: all 0.5s ease;
}
header nav ul {
  list-style:none;
  display:flex;
  flex-direction:column;
  gap:20px;
  padding:20px 10px;
}
header nav ul li a {
  color:#fff;
  text-decoration:none;
  display:flex;
  align-items:center;
  gap:10px;
  position:relative;
  font-size:1.2em;
  transition: all 0.3s ease;
}
header nav ul li a .nav-text {
  position:absolute;
  left:100%;
  top:50%;
  transform:translateY(-50%);
  background:rgba(0,0,0,0.85);
  padding:5px 10px;
  border:2px solid #0ff;
  border-radius:4px;
  white-space:nowrap;
  opacity:0;
  pointer-events:none;
  transition:0.3s ease;
}
header nav ul li a:hover .nav-text { opacity:1; }

/* HUD lateral flotante */
header.scrolled {
  position:fixed;
  top:50%;
  left:10px;
  transform:translateY(-50%);
  width:80px;
  background:rgba(0,0,0,0.85);
  height:auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-right:2px solid #0ff;
  box-shadow:0 0 15px #0ff;
  padding:20px 0;
  border-radius:8px;
  z-index:2000;
}
header.scrolled nav ul { flex-direction:column; justify-content:center; gap:20px; }
header.scrolled nav ul li a { writing-mode: unset; text-align:center; font-size:1.2em; }

/* Main centrado */
main {
  padding:50px 20px;
  text-align:center;
  max-width:900px;
  margin:0 auto;
}
section { margin-bottom:50px; }
.section-title { font-size:1.8em; color:#0ff; margin-bottom:20px; text-align:center; }

/* Párrafos y listas */
p { font-size:0.95em; line-height:1.6; margin-bottom:15px; color:#fff; text-align:left; }
ul { list-style:none; padding-left:0; margin:15px 0; text-align:left; }
ul li { margin-bottom:10px; line-height:1.6; }

/* About Section */
.about-section {
  display:flex;
  flex-direction:column;
  gap:25px;
  padding:20px;
}
.about-section h3 {
  font-size:1.3em;
  color:#0ff;
  margin-bottom:10px;
  text-align:left;
  border-left:4px solid #0ff;
  padding-left:10px;
}
.about-section ul {
  background:#1a1a1a;
  border:2px solid #0ff;
  border-radius:8px;
  padding:15px 20px;
  margin-bottom:20px;
}
.about-section ul li { font-size:0.95em; }

/* Social Section */
.social-list li { margin-bottom:15px; }
.social-list li a {
  display:flex;
  align-items:center;
  gap:10px;
  color:#fff;
  text-decoration:none;
  border:2px solid #0ff;
  padding:10px 15px;
  border-radius:6px;
  transition:all 0.3s ease;
}
.social-list li a:hover {
  background:#0ff;
  color:#111;
  box-shadow:0 0 10px #0ff;
}

/* Logo container */
#logo-container {
  display:inline-block;
  padding:20px;
  border:2px solid #0ff;
  margin:30px auto;
  animation: float 2s ease-in-out infinite;
  text-align:center;
}
#logo-text {
  font-size:2.2em;
  color:#fff;
  animation: neonPulse 1.5s infinite alternate;
}

/* Neon y flotación */
@keyframes neonPulse {
  0% { text-shadow:0 0 2px #0ff;color:#fff; }
  50%{ text-shadow:0 0 10px #0ff,0 0 20px #00f;color:#fff; }
  100%{ text-shadow:0 0 2px #0ff;color:#fff; }
}
@keyframes float {
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-5px);}
}

/* Proyectos verticales y tarjetas */
#main-projects {
  display:flex;
  flex-direction:column;
  gap:40px;
  padding:50px 20px;
  max-width:900px;
  margin:0 auto 100px auto;
}
.project-card {
  background:#1a1a1a;
  border:2px solid #0ff;
  border-radius:8px;
  padding:30px 20px;
  opacity:0;
  transform:translateY(50px);
  transition: all 0.7s ease;
  cursor:pointer;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:15px;
}
.project-card img {
  width:100%;
  height:auto;
  border-radius:6px;
  cursor:pointer;
  transition: transform 0.3s ease;
}
.project-card img:hover { transform:scale(1.05); }
.project-card iframe {
  width:100%;
  height:300px;
  border-radius:6px;
}

/* Tarjetas visible y hover */
.project-card.visible { opacity:1; transform:translateY(0); }
.project-card:hover { box-shadow:0 0 15px #0ff,0 0 30px #0ff; transform:translateY(-5px); }
.project-card h2 { color:#0ff; margin-bottom:10px; }
.project-card p { color:#fff; line-height:1.6; text-align:left; }

/* Botones de formularios y links */
.button {
  display:inline-block;
  padding:10px 20px;
  margin:10px;
  background:#0ff;
  color:#111;
  font-weight:bold;
  text-decoration:none;
  border-radius:6px;
  border:2px solid #0ff;
  transition:0.3s ease;
}
.button:hover {
  background:#111;
  color:#0ff;
  box-shadow:0 0 10px #0ff;
}

/* Footer */
footer {
  padding:40px 20px;
  text-align:center;
  border-top:2px solid #0ff;
  margin-top:50px;
}
footer ul {
  list-style:none;
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
}
footer ul li { margin:10px; }
footer ul li a {
  color:#fff;
  text-decoration:none;
  transition:all 0.3s ease;
}
footer ul li a:hover {
  color:#0ff;
  text-shadow:0 0 10px #0ff;
  transform:translateY(-2px);
}

/* Modal para imágenes y videos */
.modal {
  display:none;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.9);
  justify-content:center;
  align-items:center;
  z-index:5000;
}
.modal-inner {
  max-width:90%;
  max-height:90%;
}
.modal .close {
  position:absolute;
  top:20px;
  right:30px;
  font-size:2em;
  color:#0ff;
  cursor:pointer;
}

/* Responsivo */
@media(max-width:768px){
  main { padding-left:0; }
  #main-projects { flex-direction:column; align-items:center; }
  header.scrolled {
    top:auto;
    left:auto;
    width:100%;
    height:auto;
    transform:none;
    flex-direction:row;
    justify-content:center;
    padding:10px;
    border-radius:0;
  }
  header.scrolled nav ul { flex-direction:row; gap:15px; }
  p, .about-section p, .skills-list li, .experience-list li, .education-list li, .additional-info-list li { text-align:left; font-size:0.85em; }
  .about-section h3 { font-size:1.1em; padding-left:8px; }
  .project-card iframe { height:200px; }
}
