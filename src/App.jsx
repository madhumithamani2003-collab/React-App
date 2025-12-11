import React, { useState } from 'react'

function Nav() {
  return (
    <nav className="nav">
      <a href="#product">Product Dashboard</a>
      <a href="#services">Services</a>
      <a href="#features">Features</a>
      <a href="#about">About us</a>
      <a href="#contact">Contact</a>
    </nav>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.target)
    alert(`Thanks ${form.get('name') || 'there'} — we received your message.`)
    e.target.reset()
  }

  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo" href="#">ZET</a>
          <div style={{ display: open ? 'flex' : 'none' }}>
            <Nav />
          </div>
          <button className="menu-btn" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Build smarter. Launch faster.</h1>
              <p>ZET crafts modern web experiences — fast, reliable, and beautiful on every device.</p>
              <div className="cta-row">
                <a className="btn primary" href="#contact">Get a Quote</a>
                <a className="btn ghost" href="#services">Our Services</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="card">
                <h2>Product Dashboard</h2>
                <p>Mobile apps, web designing, digital marketing, UI/UX designing, AI automation and more.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-visual">
              <div className="card">
                <h2>"Empowering businesses with cutting-edge solutions."</h2>
                <p>We are a forward-thinking IT company specializing in innovative technology solutions that drive business transformation. From software development to IT consulting, we deliver tailored services to enhance efficiency, streamline processes, and foster growth for businesses of all sizes.</p>
                <h3>Solutions that power success</h3>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2>Our Services</h2>
            
            <section className="hero">
              <div className="hero-visual">
                <div className="card">
                  <h3>UI/UX Design</h3>
                  <p>Mobile applications can be built for specific operating systems, such as iOS and Android, or as cross-platform apps that work on multiple systems.</p>
                </div>
              </div>
            </section>

            <section className="hero">
              <div className="hero-visual">
                <div className="card">
                  <h3>Digital Marketing</h3>
                  <p>Digital marketing and branding design focuses on creating a cohesive brand identity. It combines visual elements, messaging, and strategy to enhance recognition.</p>
                </div>
              </div>
            </section>

            <section className="hero">
              <div className="hero-visual">
                <div className="card">
                  <h3>Web Development</h3>
                  <p>Developers can deploy hybrid apps across multiple platforms like iOS and Android, saving time and cost compared to building separate native apps.</p>
                </div>
              </div>
            </section>

            <section className="hero">
              <div className="hero-visual">
                <div className="card">
                  <h3>AI and Automation</h3>
                  <p>AI enables systems to perform tasks that typically require human cognitive abilities such as learning, problem-solving, and decision-making.</p>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="card">
              <h2>With vast experience in project management, our team delivers practical expertise.</h2>
              <h3>ABOUT US</h3>
              <p>Founded in 2015, ZET has grown into one of the leading and most innovative IT companies in the industry. With a team of over 120 talented professionals, we specialize in delivering cutting-edge technology solutions that drive business success. Our commitment to innovation, excellence, and customer satisfaction has positioned us as a trusted partner for businesses seeking to leverage technology for growth and efficiency.</p>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>Why ZET?</h2>
            <div className="grid">
              <article className="feature">
                <h3>Performance</h3>
                <p>We perform web designing, web development, app development and more.</p>
              </article>
              <article className="feature">
                <h3>Tools</h3>
                <p>We use the latest tools and technologies to deliver high-quality solutions.</p>
              </article>
              <article className="feature">
                <h3>User Friendly</h3>
                <p>Our solutions are designed with the user in mind, ensuring intuitive and seamless experiences.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input name="name" type="text" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Email address" required />
              <textarea name="message" placeholder="How can we help?" rows="4"></textarea>
              <button className="btn primary" type="submit">Send</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} ZET — All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
