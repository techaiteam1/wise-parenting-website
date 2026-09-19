import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Arrow, Download, InstagramIcon, MailIcon, Spark, WhatsAppIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { programs, resources, testimonials } from "@/data/content";

const philosophy = [
  ["01", "Notice", "Become curious about the feelings, patterns and expectations underneath the moment."],
  ["02", "Regulate", "Build the capacity to pause, steady yourself and choose a response with intention."],
  ["03", "Connect", "Create safety through repair, empathy and a relationship that can hold imperfection."],
];

export default function Home() {
  return (
    <main id="top">
      <div className="hero-shell">
        <Header />
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Parenting education for mothers</p>
            <h1 id="hero-title">The way we grow shapes the way they bloom.</h1>
            <p className="hero-intro">
              A thoughtful space to understand your emotions, meet your patterns with compassion, and build a more connected relationship with your child.
            </p>
            <div className="hero-actions">
              <a className="button" href="#programs">Explore programs <Arrow /></a>
              <a className="text-link" href="#framework">Discover the approach <Arrow /></a>
            </div>
            <div className="hero-note">
              <Spark />
              <p><strong>You do not need to be a perfect parent.</strong><br />You need space to understand what is happening within you.</p>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <Image
              className="hero-art"
              src="/images/wise-parenting-hero.png"
              alt="Abstract layered paper forms gently nested together, suggesting connection and growth"
              width={1112}
              height={1390}
              priority
            />
            <div className="hero-caption"><span>01</span><p>A gentler way to understand<br />yourself and your child.</p></div>
          </div>
        </section>
        <div className="hero-scroll" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </div>

      <section id="about" className="about section-pad section-space" aria-labelledby="about-title">
        <div className="about-portrait reveal">
          <div className="portrait-card">
            <div className="portrait-arch">
              <Image
                className="portrait-image"
                src="/images/alizah-portrait.jpeg"
                alt="Alizah Taha, founder of Wise Parenting"
                width={960}
                height={1280}
                sizes="(max-width: 680px) 82vw, (max-width: 1100px) 34vw, 390px"
              />
            </div>
            <p>Alizah Taha</p>
          </div>
          <div className="portrait-tag">MBBS<br />Parenting Coach<br />&amp; Educator</div>
        </div>
        <div className="about-copy reveal reveal-delay">
          <p className="eyebrow"><span /> Who am I</p>
          <h2 id="about-title">I&apos;m Alizah — and I believe that when parents grow in self-awareness and emotional regulation, children naturally begin to thrive.</h2>
          <div className="about-text-grid">
            <p>
              My work helps mothers understand themselves more deeply: the emotions they carry, the moments that activate them, and the patterns that can quietly shape family life.
            </p>
            <p>
              I support mothers in becoming more steady, intentional, and connected, so they can build healthier relationships with their children and raise emotionally grounded human beings.
            </p>
          </div>
          <a className="text-link" href="#framework">Learn more about my approach <Arrow /></a>
          <div className="signature-block">
            <span>Alizah Taha</span>
            <p>Founder, wise parenting</p>
          </div>
        </div>
      </section>

      <section id="framework" className="framework section-space" aria-labelledby="framework-title">
        <div className="section-pad">
          <div className="framework-heading reveal">
            <div>
              <p className="eyebrow light"><span /> The wise parenting framework</p>
              <h2 id="framework-title">A way of seeing the whole relationship — not only the behaviour.</h2>
            </div>
          </div>

          <div className="framework-stage reveal">
            <Image
              className="framework-art"
              src="/images/wise-parenting-framework.jpeg"
              alt="The five-part Wise Parenting Method: know yourself, know your child, connect before you correct, create a nurturing home, and grow together"
              width={1254}
              height={1254}
              sizes="(max-width: 680px) calc(100vw - 58px), (max-width: 1100px) calc(100vw - 110px), 960px"
              priority
            />
          </div>

          <div className="philosophy-grid">
            {philosophy.map(([number, title, text]) => (
              <article className="philosophy-item" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="resources section-pad section-space" aria-labelledby="resources-title">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow"><span /> Resources &amp; tools</p>
            <h2 id="resources-title">Small places to begin.</h2>
          </div>
          <p>Thoughtful guides for slowing down, reflecting, and bringing more awareness into everyday parenting.</p>
        </div>

        <div className="resource-grid">
          {resources.map((resource, index) => (
            <article className="resource-card reveal" key={resource.title}>
              <div className={`resource-cover ${resource.accent}`}>
                <div className="cover-brand">wise parenting</div>
                <div className="cover-mark"><span /><i /></div>
                <p>{resource.category}</p>
                <strong>{resource.title}</strong>
                <small>by Alizah Taha</small>
                <span className="cover-number">0{index + 1}</span>
              </div>
              <div className="resource-body">
                <div className="meta-row"><span>{resource.category}</span><span>{resource.format}</span></div>
                {/* <h3>{resource.title}</h3> */}
                <br/>
                <p>{resource.description}</p>
                <a href={resource.href} download={resource.filename}>Download PDF <Download /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="section-bottom-note">Download the guide that meets you where you are today.</div>
      </section>

      <section id="programs" className="programs section-space" aria-labelledby="programs-title">
        <div className="section-pad">
          <div className="section-heading programs-heading reveal">
            <div>
              <p className="eyebrow"><span /> Ways to work together</p>
              <h2 id="programs-title">Support that meets you where you are.</h2>
            </div>
            <p>Explore guided spaces designed for reflection, practical learning and meaningful change — at your own pace.</p>
          </div>

          <div className="program-list">
            {programs.map((program, index) => (
              <article className={program.featured ? "program-card featured reveal" : "program-card reveal"} key={program.title}>
                <div className="program-index">0{index + 1}</div>
                <div className="program-main">
                  <div className="status"><i /> {program.status}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
                <div className="program-details">
                  <div><small>When</small><span>{program.date}</span></div>
                  <div><small>Investment</small><span>{program.price}</span></div>
                </div>
                <a className={program.featured ? "button button-light" : "round-link"} href={program.href} aria-label={`${program.ctaLabel}: ${program.title}`}>
                  {program.featured && <span>{program.ctaLabel}</span>}<Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials section-pad section-space" aria-labelledby="testimonials-title">
        <div className="testimonial-heading reveal">
          <p className="eyebrow"><span /> In their words</p>
          <h2 id="testimonials-title">Reflections from mothers I&apos;ve had the privilege to support.</h2>
        </div>
        <div className="testimonial-layout">
          <article className="featured-quote reveal">
            <div className="quote-mark">“</div>
            <blockquote>{testimonials[0].quote}</blockquote>
            <div className="quote-author"><span>{testimonials[0].name}</span><small>{testimonials[0].context}</small></div>
          </article>
          <div className="small-quotes">
            {testimonials.slice(1).map((testimonial) => (
              <article className="small-quote reveal" key={testimonial.name}>
                <span>“</span>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="quote-author"><span>{testimonial.name}</span><small>{testimonial.context}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-pad section-space" aria-labelledby="contact-title">
        <div className="contact-card">
          <div className="contact-organic" aria-hidden="true"><span /><i /></div>
          <div className="contact-copy reveal">
            <p className="eyebrow light"><span /> Let&apos;s connect</p>
            <h2 id="contact-title">Let&apos;s talk about your parenting journey.</h2>
            <p>If something here feels familiar, you&apos;re welcome to reach out. There is no pressure to have the right words or know exactly what you need.</p>
            <div className="contact-links">
              <a href="https://wa.me/+923312796944" aria-label="Contact Alizah on WhatsApp"><span><WhatsAppIcon />WhatsApp</span><Arrow /></a>
              <a href="https://instagram.com/wise_parenting._/" aria-label="Visit wise parenting on Instagram"><span><InstagramIcon />Instagram</span><Arrow /></a>
              <a href="mailto:alizataha.wiseparenting@gmail.com"><span><MailIcon />Email</span><Arrow /></a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="footer section-pad">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top" aria-label="wise parenting home">
            <Image className="brand-logo" src="/images/wise-parenting-logo.png" alt="" width={1254} height={1254} />
            <span className="brand-copy"><strong>Wise Parenting</strong><small>with Alizah Taha</small></span>
          </a>
          <p>A calm, compassionate space for mothers learning to understand themselves — and connect more deeply with their children.</p>
        </div>
        <div className="footer-bottom">
          <span>© 2026 wise parenting</span>
          <div><a href="#about">About</a><a href="#programs">Programs</a><a href="#contact">Contact</a></div>
          <span>Made with care for mothers</span>
        </div>
      </footer>
    </main>
  );
}
