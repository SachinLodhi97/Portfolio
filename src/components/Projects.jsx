import { useState } from "react";

const projects = [
  {
    title: "Movie Recommendation System",
    desc: "AI-Based Movie Recommendation System - Developed a movie recommendation system using machine learning clustering techniques to suggest similar movies based on user preferences. Integrated the TMDB API to fetch trending movies, enable search functionality, and display trailers in real time. Built the backend using FastAPI to efficiently serve model predictions, and developed the frontend with React to create a smooth and interactive user experience.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "FastAPI",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "TMDB API",
    ],
    github: {
      frontend:
        "https://github.com/SachinLodhi97/AI-Movie-Recommendation-Frontend",
      backend:
        "https://github.com/SachinLodhi97/Movie-Recommendation-ai-backend",
    },
    live: "https://ai-movie-recommendation-frontend.vercel.app/",
    video: "https://www.youtube.com/embed/8ECq6wupJjo",
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

              <div className="tags">
                {p.tech.map((t, index) => (
                  <span key={index} className="tag">
                    {t === "Python" && <i className="fa-brands fa-python"></i>}
                    {t === "Java" && <i className="fa-brands fa-java"></i>}
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {typeof p.github === "object" ? (
                  <>
                    <a
                      href={p.github.frontend}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-github"></i> Frontend
                    </a>

                    <a href={p.github.backend} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github"></i> Backend
                    </a>
                  </>
                ) : (
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github"></i> Code
                  </a>
                )}

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
