import { useState } from 'react'
import { List, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react"
import './App.css'

export default function App() {

  const [menuIcon, setMenuIcon] = useState(false);



  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src="../public/vite.svg" alt="" />
          </div>
          <div className="menu-icon" onClick={() => { setMenuIcon(!menuIcon) }}>
            <List size={32} />
          </div>
          <ul className={menuIcon ? "" : "hidden"}>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Portofolio</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="main-container">
          <section className="hero">
            <div className="hero-left">
              <h3 className="pre-title">MY NAME IS..</h3>
              <h1 className="hero-name">Mirza Ali Abhipraya</h1>
              <p className="hero-desc">Seorang fullstack web developer yang terus belajar dan berkembang hingga meraih tujuan.</p>
            </div>
            <div className="hero-right">
              <img src="../public/hero.svg" alt="" />
            </div>
          </section>
        </div>
      </header>
      <section className="about-me">
        <div className="about-me-title">
          <h1 className="pre-title">About Me</h1>
          <h3 className="section-title about-me-title">Here you will find more
            information about me, what I do, and my current skills mostly in
            terms of programming and technology</h3>
        </div>
        <div className="about-me-main-container">
          <div className="about-me-left">
            <h2>Get To Know Me</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur sunt exercitationem illum, architecto nihil earum corrupti similique obcaecati ipsum quo expedita dolores dignissimos. Animi, inventore! Ab rerum explicabo doloremque?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla pariatur sunt exercitationem illum, architecto nihil earum corrupti similique obcaecati ipsum quo expedita dolores dignissimos. Animi, inventore! Ab rerum explicabo doloremque?</p>
          </div>
          <div className="about-me-right">
            <h2>My Skills</h2>
            <div className="skill-grid">
              <div className="skill">Fullstack</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">JavaScript</div>
              <div className="skill">React</div>
              <div className="skill">Node.js</div>
              <div className="skill">Express.js</div>
              <div className="skill">GIT</div>
              <div className="skill">Github</div>
              <div className="skill">Responsive Design</div>
            </div>
          </div>
        </div>
      </section>
      <section className="portofolio">
        <div className="portofolio-title">
          <h3 className="pre-title">Portofolio</h3>
          <h1 className="section-title portofolio-title">My Case Study</h1>
        </div>
        <div className="portofolio-main-container">
          <div className="portofolio-grid-item">
            <img src="../public/vite.svg" alt="" />
            <h2>Nigga</h2>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className="portofolio-grid-item">
            <img src="../public/vite.svg" alt="" />
            <h2>Nigga</h2>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className="portofolio-grid-item">
            <img src="../public/vite.svg" alt="" />
            <h2>Nigga</h2>
            <p>lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="contact-title">
          <h1 className="pre-title">Contact</h1>
          <h3 className="section-title contact-title">Feel free to Contact me through email, phone or by submitting the form below and I will get back to you as soon as possible</h3>
        </div>
        <div className="contact-forms">
          <form action="">
            <label htmlFor="fullname">Name</label>
            <input className="contact-text" type="text" id="fullname" placeholder="John Doe" />
            <label htmlFor="email">Email</label>
            <input className="contact-text" type="text" id="email" placeholder="johndoe@gmail.com" />
            <label htmlFor="message">Message</label>
            <input className="contact-text" type="text" id="message" placeholder='Your message here...' />
            <input className="contact-submit" type="submit" value="Submit" />
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-container-top">
          <div className="footer-title">
            <h6>About</h6>
            <p className="text-justify">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>
          </div>

          <div className="footer-categories">
            <h6>Contact Me</h6>
            <ul className="footer-links">
              <li>mirzaaliabhipraya@gmail.com</li>
              <li>(+62) 85747524052</li>
            </ul>
          </div>

          <div className="footer-quick">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/privacy-policy/">Home</a></li>
              <li><a href="http://scanfcode.com/about/">About Me</a></li>
              <li><a href="http://scanfcode.com/contact/">Portofolio</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contact</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Resume</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-container-bottom">
          <div className="footer-copyright">
            <p className="copyright-text">Created by
              <a href="#"> Mirza Ali Abhipraya</a>.
            </p>
          </div>

          <div className="footer-social">
            <ul className="social-icons">
              <InstagramLogo size={32} />
              <LinkedinLogo size={32} />
              <WhatsappLogo size={32} />
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}
