import React, { useState } from "react";
import "./index.css";
function Nav() {
  return (
    <nav className="nav">
      <a href="#features">Features</a>
      <a href="#services">Services</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    alert(`Thanks ${form.get("name") || "there"} — demo message received.`);
    e.target.reset();
  };

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#">ZET</a>
          <div style={{ display: open ? "flex" : "" }}><Nav /></div>
          <button className="menu-btn" onClick={()=>setOpen(!open)}>☰</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Build smarter. Launch faster.</h1>
              <p>ZET crafts modern web experiences — fast and beautiful on every device.</p>
            </div>
            <div className="hero-visual">
              <div className="card"><h3>Product Dashboard</h3></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input name="name" type="text" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message" rows="4"></textarea>
              <button className="btn primary" type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">© {new Date().getFullYear()} ZET</div>
      </footer>
    </div>
  );
}