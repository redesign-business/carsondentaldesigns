const CTA = "Book an appointment";

const services = [
  {
    eyebrow: "Everyday care",
    title: "General & family",
    copy: "Thoughtful exams, gentle cleanings, white fillings and a new-patient experience built around your concerns.",
    image: "/images/beautiful-female-smile-320x200-ebf558b2d8.jpg",
  },
  {
    eyebrow: "Precise planning",
    title: "Implant dentistry",
    copy: "Every implant patient receives a 3D Conebeam scan for accurate planning and predictable, lasting results.",
    image: "/images/dental-implant-representationrendering-320x200-fdc231fdbc.jpg",
  },
  {
    eyebrow: "Smile confidently",
    title: "Cosmetic dentistry",
    copy: "Minimally invasive options including porcelain veneers, metal-free restorations and smile design.",
    image: "/images/dental-exam-with-tools-320x200-e8943ffcc1.jpg",
  },
  {
    eyebrow: "When it can't wait",
    title: "Emergency care",
    copy: "Open appointments during regular office hours help us see many urgent dental needs the same day.",
    image: "/images/childs-first-dental-cleaning-320x200-e05c259027.jpg",
  },
];

const faqs = [
  ["Do you see dental emergencies?", "Yes. New and returning patients can call for emergency care, and same-day dentistry is often available during regular office hours."],
  ["What makes implant planning different?", "Every implant patient receives a 3D Conebeam scan so treatment can be planned with accuracy and precision."],
  ["Do you offer metal-free dentistry?", "Yes. The practice uses white composite fillings and porcelain crowns, and offers a non-titanium implant option for patients with metal allergies."],
  ["Are there options for patients without insurance?", "An in-house insurance program is available, and patients have reported that it helped them save money."],
];

export default function Home() {
  return (
    <main>
      <div className="topbar">Monday–Thursday 8–5 · Friday 8–12 <span>412 W John St #100, Carson City</span></div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Carson Dental Designs home">
          <img src="/images/carson-dental-designs-logo-color-9774782709.png" alt="Carson Dental Designs" />
        </a>
        <div className="navlinks">
          <a href="#services">Services</a>
          <a href="#proof">Why us</a>
          <a href="#doctor">Dr. West</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="button small" href="tel:7758824122">{CTA}</a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Carson City’s own smileologist</p>
          <h1>Healthy smiles.<br /><em>Human</em> care.</h1>
          <p className="lede">Modern family dentistry that listens first, treats gently, and gives you a clear path to feeling good about your smile.</p>
          <div className="hero-actions">
            <a className="button" href="tel:7758824122">{CTA}</a>
            <a className="phone" href="tel:7758824122">(775) 882-4122 <span>↗</span></a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="sun" />
          <div className="portrait-frame">
            <img src="/images/ron-west-reno-dental-designs-ac28fe3e50.png" alt="Dr. Ron West" />
          </div>
          <div className="hero-note"><strong>Same-day help</strong><br />for dental emergencies</div>
        </div>
      </section>

      <div className="trustbar">
        <span>Family dentistry</span><i />
        <span>3D-guided implants</span><i />
        <span>Same-day emergencies</span><i />
        <span>Metal-free options</span>
      </div>

      <section className="services" id="services">
        <div className="section-head">
          <div><p className="kicker">Care for real life</p><h2>One practice.<br />A lifetime of smiles.</h2></div>
          <p>From a child’s first visit to complex smile restoration, you’ll find attentive care and current technology under one roof.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service" key={service.title}>
              <div className="service-image"><img src={service.image} alt="" /></div>
              <div className="service-body">
                <span className="count">0{index + 1}</span>
                <p className="eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="proof" id="proof">
        <div className="proof-title">
          <p className="kicker light">Proof, not promises</p>
          <h2>Reasons to<br /><em>smile easier.</em></h2>
        </div>

        <article className="proof-card reviews">
          <div className="proof-number">01</div>
          <div>
            <p className="eyebrow">Loved across the web</p>
            <blockquote>“Actually makes going to the dentist stress free.”</blockquote>
            <p className="quote-by">Brett S. · Facebook review</p>
            <div className="review-logos" aria-label="Reviews on Google, Facebook, Yelp, and Angie's List">
              <img src="/images/google-a7b5b89902.jpg" alt="Google Reviews" />
              <img src="/images/facebook-review-dcf2c4db37.jpg" alt="Facebook reviews" />
              <img src="/images/yelp-review-a8f2794637.jpg" alt="Yelp reviews" />
              <img src="/images/angieslist-review-35872fcc94.jpg" alt="Angie's List reviews" />
            </div>
          </div>
        </article>

        <article className="proof-card guarantee">
          <div className="guarantee-image">
            <img src="/images/tooth-whitening-before-after-320x200-397456cc5c.jpg" alt="Teeth whitening before and after" />
          </div>
          <div className="guarantee-copy">
            <div className="proof-number">02</div>
            <p className="eyebrow">A guarantee with teeth</p>
            <h3>Whiter smile,<br />or your money back.</h3>
            <p>Choose in-office or take-home whitening. Either way, your treatment is guaranteed to make your smile whiter.</p>
            <a className="text-link" href="tel:7758824122">{CTA} →</a>
          </div>
        </article>

        <article className="proof-card veteran">
          <div className="veteran-copy">
            <div className="proof-number">03</div>
            <p className="eyebrow">Service that continues</p>
            <h3>Standing with Northern Nevada veterans.</h3>
            <p>As a proud Adopt A Vet Program member and Air Force veteran, Dr. West donates full dental treatment to local veterans in need. Veteran discounts are also offered.</p>
          </div>
          <div className="veteran-mark"><span>USAF</span><strong>Pro bono care</strong><small>Adopt A Vet Program</small></div>
        </article>
      </section>

      <section className="doctor" id="doctor">
        <div className="doctor-image">
          <img src="/images/doctor-writing-reno-d135d7870e.png" alt="Dr. Ron West speaking with a patient" />
        </div>
        <div className="doctor-copy">
          <p className="kicker">Meet your dentist</p>
          <h2>Dr. Ron West</h2>
          <p className="intro">A Reno native, Air Force veteran, former UNLV clinical instructor, and Carson Dental Designs owner since 2011.</p>
          <p>Dr. West pairs minimally invasive treatment with state-of-the-art technology to help patients achieve a healthy smile free from pain. His path from F-15E crew chief to dentist shaped a practice grounded in precision, service, and calm under pressure.</p>
          <img className="signature" src="/images/signature-2-15e4787d95.png" alt="Ron West signature" />
          <a className="button" href="tel:7758824122">{CTA}</a>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-copy">
          <p className="kicker">Good to know</p>
          <h2>Questions,<br />meet answers.</h2>
          <div className="questions">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
        <div className="faq-image">
          <img src="/images/patient-views-dental-results-320x200-57dfd6df16.jpg" alt="Patient viewing her dental results" />
          <div><strong>Clear options.</strong><br />No pressure. Just answers.</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-image"><img src="/images/dental-braces-320x200-009212b292.jpg" alt="A healthy smile" /></div>
        <div>
          <p className="kicker light">Your new dental home</p>
          <h2>Let’s make your next visit the easy one.</h2>
          <a className="button cream" href="tel:7758824122">{CTA}</a>
        </div>
      </section>

      <footer>
        <img src="/images/carson-dental-designs-logo-white-9342af1ceb.png" alt="Carson Dental Designs" />
        <div><strong>Visit</strong><br />412 W John St #100<br />Carson City, NV 89703</div>
        <div><strong>Hours</strong><br />Mon–Thu 8:00–5:00<br />Friday 8:00–12:00</div>
        <div><strong>Contact</strong><br /><a href="tel:7758824122">(775) 882-4122</a><br /><a href="mailto:carsondentaldesigns@gmail.com">Email the office</a></div>
        <small>© 2026 Carson Dental Designs</small>
      </footer>

      <style>{`
        :root{--ink:#173b45;--blue:#087e95;--sky:#d9f0f1;--cream:#f8f2e8;--coral:#ef795f;--white:#fff}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--cream);color:var(--ink);font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}img{display:block;max-width:100%}.topbar{padding:9px 5vw;background:var(--ink);color:#fff;text-align:center;font-size:11px;letter-spacing:.11em;text-transform:uppercase}.topbar span{margin-left:30px;color:#b9d5d9}nav{height:88px;padding:0 5vw;display:flex;align-items:center;justify-content:space-between;background:#fff}.brand img{width:205px}.navlinks{display:flex;gap:32px;font-size:13px;font-weight:700}.navlinks a:hover{color:var(--blue)}.button{display:inline-flex;align-items:center;justify-content:center;padding:17px 25px;background:var(--coral);color:#fff;font-weight:800;font-size:13px;letter-spacing:.03em;border-radius:2px}.button.small{padding:13px 18px}.hero{min-height:650px;display:grid;grid-template-columns:51% 49%;overflow:hidden;background:var(--sky)}.hero-copy{padding:90px 6vw 70px 9vw;position:relative;z-index:2}.kicker,.eyebrow{font-size:11px;font-weight:900;letter-spacing:.19em;text-transform:uppercase;color:var(--blue)}h1,h2,h3,blockquote{font-family:Georgia,'Times New Roman',serif}h1{font-size:clamp(58px,7vw,104px);line-height:.89;letter-spacing:-.055em;margin:27px 0}h1 em,h2 em{font-weight:400;color:var(--blue)}.lede{font-family:Georgia,serif;font-size:19px;line-height:1.6;max-width:535px}.hero-actions{display:flex;align-items:center;gap:28px;margin-top:34px}.phone{font-size:13px;font-weight:800;border-bottom:1px solid #7da6ac;padding:10px 0}.phone span{color:var(--coral)}.hero-visual{position:relative;background:var(--blue);display:flex;align-items:flex-end;justify-content:center}.sun{position:absolute;width:440px;height:440px;border-radius:50%;background:#f1c65a;top:53px;right:-70px}.portrait-frame{position:relative;z-index:1;width:min(90%,560px)}.portrait-frame img{width:100%;max-height:580px;object-fit:contain;object-position:bottom}.hero-note{position:absolute;z-index:2;bottom:45px;left:-35px;padding:18px 25px;background:#fff;box-shadow:0 12px 35px #17404a33;font-family:Georgia,serif;line-height:1.5;transform:rotate(-2deg)}.hero-note strong{color:var(--coral)}.trustbar{background:#fff;min-height:75px;padding:22px 6vw;display:flex;align-items:center;justify-content:center;gap:35px;font-size:11px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}.trustbar i{width:4px;height:4px;background:var(--coral);border-radius:50%}.services{padding:110px 7vw}.section-head{display:grid;grid-template-columns:1fr 1fr;gap:10vw;align-items:end;margin-bottom:55px}.section-head h2,.proof-title h2,.doctor h2,.faq h2,.final-cta h2{font-size:clamp(44px,5vw,72px);line-height:.96;letter-spacing:-.04em;margin:17px 0}.section-head>p{font-family:Georgia,serif;font-size:18px;line-height:1.65;max-width:480px}.service-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}.service{display:grid;grid-template-columns:44% 56%;min-height:290px;background:#fff}.service-image{overflow:hidden}.service-image img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.service:hover .service-image img{transform:scale(1.04)}.service-body{position:relative;padding:32px}.service-body .count{position:absolute;top:20px;right:22px;font-family:Georgia,serif;color:#9bb9bd}.service h3{font-size:29px;margin:13px 0}.service-body>p:last-child{font-size:14px;line-height:1.65;color:#526c72}.proof{padding:110px 7vw;background:var(--ink);color:#fff}.light{color:#7fc7d1}.proof-title{margin-bottom:55px}.proof-title h2 em{color:#f1c65a}.proof-card{position:relative}.proof-number{font-family:Georgia,serif;font-size:16px;color:var(--coral);margin-bottom:24px}.reviews{display:grid;grid-template-columns:80px 1fr;background:#fff;color:var(--ink);padding:50px 6vw}.reviews blockquote{font-size:clamp(34px,4vw,58px);line-height:1.13;max-width:900px;margin:16px 0}.quote-by{font-size:12px;font-weight:800}.review-logos{display:flex;gap:10px;align-items:center;margin-top:35px}.review-logos img{width:64px;height:42px;object-fit:contain;border:1px solid #d8e2e3;padding:5px}.guarantee{display:grid;grid-template-columns:1fr 1fr;margin-top:26px;background:#f1c65a;color:var(--ink)}.guarantee-image img{width:100%;height:100%;min-height:430px;object-fit:cover;image-rendering:auto}.guarantee-copy{padding:55px}.guarantee-copy h3,.veteran h3{font-size:clamp(38px,4vw,60px);line-height:1;margin:17px 0}.guarantee-copy>p:last-of-type,.veteran-copy>p:last-child{line-height:1.7;max-width:540px}.text-link{display:inline-block;margin-top:20px;font-weight:900;font-size:12px;text-transform:uppercase;letter-spacing:.08em;border-bottom:2px solid var(--ink);padding-bottom:6px}.veteran{display:grid;grid-template-columns:1.5fr .7fr;margin-top:26px;background:var(--blue)}.veteran-copy{padding:58px}.veteran-mark{background:#086d81;min-height:390px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border-left:1px solid #ffffff30}.veteran-mark span{border:1px solid #fff;padding:10px;font-size:12px;letter-spacing:.2em}.veteran-mark strong{font-family:Georgia,serif;font-size:31px;margin:20px 0 7px}.veteran-mark small{text-transform:uppercase;letter-spacing:.12em;color:#bce1e5}.doctor{display:grid;grid-template-columns:1fr 1fr;background:#fff}.doctor-image{background:var(--sky);display:flex;align-items:flex-end}.doctor-image img{width:100%;max-height:700px;object-fit:cover;object-position:center bottom}.doctor-copy{padding:100px 8vw}.doctor-copy .intro{font-family:Georgia,serif;font-size:21px;line-height:1.55}.doctor-copy>p:not(.kicker):not(.intro){font-size:14px;line-height:1.8;color:#536c72}.signature{width:145px;margin:24px 0}.faq{padding:110px 7vw;display:grid;grid-template-columns:1.2fr .8fr;gap:7vw;align-items:stretch}.questions{margin-top:40px;border-top:1px solid #b9cecf}.questions details{border-bottom:1px solid #b9cecf;padding:22px 0}.questions summary{cursor:pointer;list-style:none;font-family:Georgia,serif;font-size:19px;display:flex;justify-content:space-between}.questions summary::-webkit-details-marker{display:none}.questions summary span{color:var(--coral);font-family:Arial}.questions details p{line-height:1.7;color:#587078;font-size:14px;padding-right:40px}.faq-image{position:relative;min-height:560px}.faq-image img{width:100%;height:100%;object-fit:cover}.faq-image div{position:absolute;left:-30px;bottom:40px;background:var(--coral);color:#fff;padding:25px 30px;font-family:Georgia,serif;font-size:18px;line-height:1.5;transform:rotate(2deg)}.final-cta{display:grid;grid-template-columns:.8fr 1.2fr;background:var(--blue);color:#fff;align-items:stretch}.final-image{min-height:420px}.final-image img{width:100%;height:100%;object-fit:cover}.final-cta>div:last-child{padding:75px 8vw}.final-cta h2{max-width:760px}.button.cream{background:#f1c65a;color:var(--ink)}footer{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:40px;padding:60px 6vw 35px;background:var(--ink);color:#b8d0d4;font-size:13px;line-height:1.8}footer>img{width:190px;filter:brightness(1.2)}footer strong{color:#fff;text-transform:uppercase;font-size:10px;letter-spacing:.16em}footer a:hover{color:#fff}footer small{grid-column:1/-1;border-top:1px solid #ffffff22;padding-top:24px;font-size:10px}
        @media(max-width:900px){.navlinks{display:none}.hero{grid-template-columns:1fr}.hero-copy{padding:70px 7vw}.hero-visual{min-height:500px}.hero-note{left:20px}.trustbar{overflow:auto;justify-content:flex-start}.section-head,.doctor,.faq{grid-template-columns:1fr}.service-grid{grid-template-columns:1fr}.faq-image{min-height:430px}.faq-image div{left:15px}.doctor-image{max-height:600px}.final-cta{grid-template-columns:1fr}.final-image{min-height:300px}footer{grid-template-columns:1fr 1fr}}
        @media(max-width:560px){nav{height:74px}.brand img{width:155px}.button.small{font-size:0;padding:12px}.button.small:after{content:'Call';font-size:12px}.topbar span{display:none}.hero-copy{padding-top:55px}h1{font-size:56px}.hero-visual{min-height:400px}.sun{width:330px;height:330px}.trustbar{gap:18px}.services,.proof,.faq{padding:75px 5vw}.section-head{gap:20px}.service{grid-template-columns:1fr}.service-image{height:220px}.reviews{grid-template-columns:1fr;padding:38px 25px}.review-logos{flex-wrap:wrap}.guarantee,.veteran{grid-template-columns:1fr}.guarantee-image img{min-height:260px}.guarantee-copy,.veteran-copy{padding:38px 25px}.veteran-mark{min-height:260px;border-left:0}.doctor-copy{padding:75px 7vw}.final-cta>div:last-child{padding:65px 7vw}footer{grid-template-columns:1fr}footer small{grid-column:auto}}
      `}</style>
    </main>
  );
}
