export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          <div className="skill-category">
            <h4>
              <i className="fas fa-brain"></i> AI & Machine Learning
            </h4>
            <ul>
              <li>Machine Learning – building models that actually work</li>
              <li>
                Deep Learning (CNNs, RNNs, Transformers) – training models from
                scratch
              </li>
              <li>
                Natural Language Processing – teaching machines to understand
                text
              </li>
              <li>Large Language Models – fine-tuning and experimenting</li>
              <li>
                Retrieval-Augmented Generation – building smarter AI systems
              </li>
              <li>Agentic AI Systems – models that can act intelligently</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>
              <i className="fas fa-layer-group"></i> Frameworks & Libraries
            </h4>
            <ul>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>LangChain</li>
              <li>FastAPI</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>
              <i className="fas fa-code"></i> Programming
            </h4>
            <ul>
              <li>Python (Advanced)</li>
              <li>Java</li>
              <li>C & C++</li>
              <li>SQL & MySQL</li>
            </ul>
          </div>

          <div className="skill-category">
            <h4>
              <i className="fas fa-tools"></i> Tools & Platforms
            </h4>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>Render (Deployment)</li>
              <li>AWS / Google Cloud</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
