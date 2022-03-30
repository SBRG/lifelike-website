import Examples from './components/Examples';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Points from './components/Points';
import Section from './components/Section';
import './stylesheets/index.scss';

function App() {
  return (
    <>
      <main>
        <div className="site-main">
          <div className="site-top">
            <Header />
            <Section name="intro">
              <Hero
                title={
                  <>
                    From Big Data
                    <br />
                    to Big Picture
                  </>
                }
                subtitle={
                  <>
                    Turning big data into contextualized knowledge, creating a
                    360-degree view and big picture understanding, augmenting
                    our intelligence in solving complex problems.
                  </>
                }
                actions={
                  <button className="btn btn-intro-primary btn-lg">
                    Request a Demo
                  </button>
                }
              />
            </Section>
          </div>

          <Section name="features">
            <Features />
          </Section>

          <Section
            name="catcher"
            title="A graph-powered knowledge mining platform"
            isPageSection
          >
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                  <img
                    src="/images/reveal_left.png"
                    alt="digital mind"
                    className="mw-100"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <p>
                    Lifelike has several integrated features that support
                    knowledge mining and collaboration among users in the
                    biosciences field.
                  </p>
                  <p>
                    Users can upload their own structured and unstructured data.
                    The data is annotated in real-time using NLP and rule-based
                    techniques allowing it to be contextualized and connected to
                    global knowledge. Graph and statistical knowledge mining
                    algorithms can then be run across the combined user and
                    global datasets. In this way users can explore their own
                    data in the broader context of existing knowledge,
                    discovering extended paths comprised of new and previously
                    known relationships.
                  </p>
                  <p>
                    Lifelike supports communication and collaboration by
                    allowing users to create Knowledge Maps. These are visual
                    graph documents that can be used informally to take "visual
                    notes", or in a more rigorous fashion to create highly
                    curated models that can be analyzed with graph algorithms.
                    Knowledge Maps are a great and easy to use tool to extract
                    knowledge in a visual fashion by simply dragging entities,
                    text snippets, files etc. onto the map. The user can then
                    create new connections between the entities, provide
                    evidence for each connection and add notes and links. The
                    map content is very rich since the entities retain their
                    meta-data and hyperlinks.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          <Section
            name="points"
            withDivider="Fully integrated with a suite of technologies"
            isPageSection
          >
            <div className="wrapper">
              <Points />
            </div>
          </Section>

          <Section
            name="examples"
            withDivider="Knowledge graph examples"
            isPageSection
          >
            <div className="wrapper">
              <Examples />
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
