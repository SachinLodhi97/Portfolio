import { useState } from "react";

const projects = [
  {
    title: "Movie Recommendation System",
    desc: "System that learns user taste and suggests movies.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "#",
    live: "https://movie-recommendation-ai-ui.onrender.com/",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Sun Baby AI",
    desc: "AI voice assistant that performs real-time tasks.",
    tech: ["Java", "Python", "AI APIs"],
    github: "#",
    live: "#",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function Projects() {
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects I’ve Built</h2>

        <div className="grid">
          {projects.map((p, i) => (
            <div className="card" key={i}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              {/* TECH TAGS */}
              <div className="tags">
                {p.tech.map((t, index) => (
                  <span key={index} className="tag">
                    {t === "Python" && <i className="fa-brands fa-python"></i>}
                    {t === "Java" && <i className="fa-brands fa-java"></i>}
                    {t}
                  </span>
                ))}
              </div>

              {/* LINKS WITH ICONS */}
              <div className="project-links">
                <a href={p.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github"></i> Code
                </a>

                <a href={p.live} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-up-right-from-square"></i> Live
                </a>

                <button
                  className="video-btn"
                  onClick={() => setOpenVideo(openVideo === i ? null : i)}
                >
                  <i className="fa-solid fa-video"></i> Video
                </button>
              </div>

              {/* VIDEO */}
              {openVideo === i && (
                <div className="video-box">
                  <iframe
                    src={p.video}
                    title="project video"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
