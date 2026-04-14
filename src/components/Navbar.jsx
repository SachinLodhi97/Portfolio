import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleScroll = () => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (el) {
        const top = el.offsetTop - 120;
        const bottom = top + el.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(sec);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          SL<span>.</span>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          {["home", "about", "projects", "skills", "contact"].map((id) => (
            <li key={id}>
              <a
                className={active === id ? "active-link" : ""}
                onClick={() => handleClick(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}
