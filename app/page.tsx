const appUrl = "https://homework-snap.vercel.app";

const features = [
  {
    title: "Snap or Upload",
    text: "Use camera for paper homework or upload files like PDF, TXT, and DOCX."
  },
  {
    title: "Hint-First Learning",
    text: "Students can ask for a hint before a full answer to build real understanding."
  },
  {
    title: "Step-by-Step + Check My Work",
    text: "Kids get guided steps and can verify their own answers with friendly feedback."
  },
  {
    title: "Parent-Friendly Insights",
    text: "Track weekly usage, subject trends, and progress without overcomplication."
  }
];

const faqs = [
  {
    q: "Who is HomeworkSnap for?",
    a: "HomeworkSnap is designed for K-8 students and families who want fast, supportive homework help."
  },
  {
    q: "Can students upload files instead of photos?",
    a: "Yes. Students can upload images plus PDF, TXT, and DOCX files."
  },
  {
    q: "Does it only give answers?",
    a: "No. HomeworkSnap is learning-first, with Hint, Step-by-Step, and Check My Work modes."
  },
  {
    q: "Is it parent-friendly?",
    a: "Yes. Parent login, student profile settings, and clean weekly progress insights are included."
  }
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <nav className="nav container">
          <div className="brand">HomeworkSnap</div>
          <a className="btn btn-ghost" href={appUrl} target="_blank" rel="noreferrer">
            Open App
          </a>
        </nav>

        <div className="container hero-grid">
          <section>
            <p className="kicker">AI Homework Helper for Families</p>
            <h1>Snap Homework. Learn Smarter.</h1>
            <p className="lead">
              HomeworkSnap helps students get fast, clear homework support from a photo or file upload — with hint-first learning built in.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={appUrl} target="_blank" rel="noreferrer">
                Try HomeworkSnap
              </a>
              <a className="btn btn-secondary" href="#how">
                See How It Works
              </a>
            </div>
          </section>

          <aside className="hero-card">
            <h3>Why parents choose it</h3>
            <ul>
              <li>Hint-first by default</li>
              <li>Supports photo + digital homework files</li>
              <li>Grade-level personalization</li>
              <li>Simple weekly learning insights</li>
            </ul>
          </aside>
        </div>
      </header>

      <section className="section container" id="how">
        <h2>How it works</h2>
        <div className="steps">
          <article>
            <span>1</span>
            <h3>Add homework</h3>
            <p>Take a photo or upload the assignment file.</p>
          </article>
          <article>
            <span>2</span>
            <h3>Choose help mode</h3>
            <p>Pick Hint, Step-by-Step, Check My Work, or Full Answer.</p>
          </article>
          <article>
            <span>3</span>
            <h3>Learn and improve</h3>
            <p>Get clear explanations and track progress over time.</p>
          </article>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Built for real homework routines</h2>
          <div className="feature-grid">
            {features.map((item) => (
              <article className="feature" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section cta-final">
        <div className="container cta-panel">
          <h2>Ready to make homework easier?</h2>
          <p>Start using HomeworkSnap today.</p>
          <a className="btn btn-primary" href={appUrl} target="_blank" rel="noreferrer">
            Launch HomeworkSnap
          </a>
        </div>
      </section>

      <footer className="footer container">
        <p>© {new Date().getFullYear()} HomeworkSnap. All rights reserved.</p>
      </footer>
    </main>
  );
}

