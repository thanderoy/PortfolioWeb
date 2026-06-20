import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Nav } from "~/components/nav/nav";

const EMAIL = "roy.thande@gmail.com";

const SOCIALS = [
  { href: "https://github.com/thanderoy", img: "/images/github.png", label: "GitHub" },
  { href: "https://twitter.com/thande_roy", img: "/images/twitter.png", label: "Twitter" },
  { href: "https://linkedin.com/in/roy-thande-trf44", img: "/images/linkedin.png", label: "LinkedIn" },
];

const SERVICES = [
  {
    title: "Build Websites from Scratch",
    body: "I can design and code stunning websites which are responsive from scratch or build from existing templates as required by the clients.",
    icon: (
      <path d="M8 18l-6-6 6-6M16 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    ),
  },
  {
    title: "Fix Bugs and add Features",
    body: "I can also fix issues/bugs on existing websites, do some UI/UX facelift and add more functionality to improve the website's appearance and performance.",
    icon: (
      <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.5 2.5-2.5-.6-.6-2.5 2.6-2.5z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    ),
  },
  {
    title: "Integrate APIs",
    body: "I can integrate or connect your website to APIs meant to improve the operations of your website or business — including payment gateways like PayPal, Visa and MasterCard.",
    icon: (
      <path d="M10 3v3a2 2 0 11-4 0V3M3 10h3a2 2 0 110 4H3m11 7v-3a2 2 0 114 0v3m4-11h-3a2 2 0 100 4h3M7 7h10v10H7z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" />
    ),
  },
];

const PROJECTS = [
  { title: "Project 1 — Coming Soon", img: "/images/book.jpg" },
  { title: "Project 2 — Coming Soon", img: "/images/sourcecode.jpg" },
  { title: "Project 3 — Coming Soon", img: "/images/headphones.jpg" },
];

export default component$(() => {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <section class="hero" id="home">
          <h1>Thande Roy</h1>
          <span class="hero__role">Web Developer</span>
          <ul class="socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                  <img src={s.img} alt={s.label} width={18} height={18} />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* About */}
        <section class="about" id="about">
          <div class="container">
            <h2 class="section-title">About</h2>
            <div class="accent-bar"></div>
            <p>
              Hello, I am a Full-stack Web Developer with 3 years of experience building stunning and
              functional websites. I help my clients boost their businesses, organizations, careers
              and hobbies by creating relevant websites for them. I would love to work with you and I
              assure quality and timely work.
            </p>
          </div>
        </section>

        {/* Services */}
        <section class="services" id="services">
          <div class="container">
            <h2 class="section-title">Services</h2>
            <div class="accent-bar"></div>
            <p>
              With building websites, I work with HTML5/CSS3/JS, Django/Python, Amazon Web Services
              (AWS&nbsp;S3, AWS&nbsp;RDS), PostgreSQL and WordPress/WooCommerce to create beautiful work.
            </p>
            <div class="card-grid">
              {SERVICES.map((s) => (
                <article class="card" key={s.title}>
                  <svg class="card__icon" width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
                    {s.icon}
                  </svg>
                  <h2>{s.title}</h2>
                  <div class="accent-bar"></div>
                  <p>{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section class="portfolio" id="portfolio">
          <div class="container">
            <h2 class="section-title">Portfolio</h2>
            <div class="accent-bar"></div>
            <p>Some of the work and projects I've done to date.</p>
            <div class="card-grid">
              {PROJECTS.map((p) => (
                <article class="card project" key={p.title}>
                  <div class="project__thumb">
                    <img src={p.img} alt={p.title} width={400} height={250} />
                  </div>
                  <div class="project__body">
                    <h2>{p.title}</h2>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section class="contact" id="contact">
          <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="accent-bar" style="margin-inline:auto"></div>
            <p>
              Got a project in mind or just want to say hi? I'd love to hear from you. Drop me a
              message and I'll get back to you.
            </p>
            <a class="btn" href={`mailto:${EMAIL}?subject=Project%20Inquiry`}>
              Get in touch
            </a>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container">
          <a href="#home">
            <img src="/images/logo.png" alt="Thande Roy" height={36} />
          </a>
          <p>&copy; {new Date().getFullYear()} Thande Roy</p>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Thande Roy | Web Developer",
  meta: [
    {
      name: "description",
      content:
        "Thande Roy — Full-stack Web Developer. I build stunning, functional and responsive websites.",
    },
  ],
};
