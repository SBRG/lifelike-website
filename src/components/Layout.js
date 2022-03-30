import Head from "next/head";
import Script from "next/script";

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Lifelike</title>
        <meta name="description" content="A TinaCMS Application" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Patua+One&family=Playfair+Display&display=swap"
        />
      </Head>

      <Script src="https://kit.fontawesome.com/5d9e8add78.js" />

      <main>{props.children}</main>

      <div className="site-main">
        <div className="site-top">
          <Header />
          <Hero />
        </div>

        <section className="section-features">
          <div className="feature-table">
            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/img/workflow_step_1.png"
                  alt="Document annotations"
                />
              </div>
              <h2 className="feature-title">Extract concepts easily</h2>
              <div className="feature-description">
                Upload any PDF, auto-extract knowledge, create new annotations
                on the fly, quickly understand unstructured text and
                cross-connect it with other sources of knowledge.
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/img/workflow_step_2.png"
                  alt="Documents being collected"
                />
              </div>
              <h2 className="feature-title">Make new connections</h2>
              <div className="feature-description">
                Explore system extracted information, add additional curation
                and consolidate large amounts of knowledge into a big-picture
                view.
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <img
                  src="/img/workflow_step_3.png"
                  alt="Human head with a directed graph inside"
                />
              </div>
              <h2 className="feature-title">
                Leap beyond traditional research
              </h2>
              <div className="feature-description">
                Perform deep analytics against a knowledge graph that integrates
                data from many public databases, leveraging prior work and
                research investments. Extract enriched data for external
                processing.
              </div>
            </div>
          </div>
        </section>

        <section className="page-section section-catcher">
          <div className="wrapper">
            <h2 className="section-title">
              A graph-powered knowledge mining platform
            </h2>

            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                <img
                  src="/img/reveal_left.png"
                  alt="digital mind"
                  className="mw-100"
                  style={{ maxHeight: "500px" }}
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
                  algorithms can then be run across the combined user and global
                  datasets. In this way users can explore their own data in the
                  broader context of existing knowledge, discovering extended
                  paths comprised of new and previously known relationships.
                </p>
                <p>
                  Lifelike supports communication and collaboration by allowing
                  users to create Knowledge Maps. These are visual graph
                  documents that can be used informally to take "visual notes",
                  or in a more rigorous fashion to create highly curated models
                  that can be analyzed with graph algorithms. Knowledge Maps are
                  a great and easy to use tool to extract knowledge in a visual
                  fashion by simply dragging entities, text snippets, files etc.
                  onto the map. The user can then create new connections between
                  the entities, provide evidence for each connection and add
                  notes and links. The map content is very rich since the
                  entities retain their meta-data and hyperlinks.
                </p>
              </div>
            </div>
          </div>
        </section>

        <h2 className="section-divider">
          Fully integrated with a suite of technologies
        </h2>

        <section className="page-section section-points">
          <div className="wrapper">
            <div className="point-table">
              <div className="point-item row justify-content-center mr-lg-4 align-items-center">
                <div className="point-image col-md-4 mb-4 mb-lg-0">
                  <img
                    src="/img/point_nlp.png"
                    alt="Picture of a brain morphing into circuits"
                  />
                </div>
                <div className="point-body col-md-8 col-lg-6">
                  <h2 className="point-title">Natural Language Processing</h2>
                  <div className="point-description">
                    <p>
                      Lifelike uses Artificial Intelligence (AI) and rule-based
                      entity recognition to automatically recognize key
                      biological entities such as genes, proteins, diseases,
                      chemicals, phenomena, anatomy, proteins, species and
                      relationships between them. It also enables ‘on the fly’
                      custom annotations so users can define additional key
                      entities of interest.
                    </p>
                  </div>
                </div>
              </div>

              <div className="point-item row justify-content-center ml-lg-4 align-items-center">
                <div className="point-image col-md-4 order-md-2 mb-4 mb-lg-0">
                  <img
                    src="/img/point_kr.png"
                    alt="Picture of a graph with nodes consisting of different type of content"
                  />
                </div>
                <div className="point-body col-md-8 col-lg-6">
                  <h2 className="point-title">Knowledge Reconstruction</h2>
                  <div className="point-description">
                    <p>
                      Lifelike’s drawing canvas allows users to create connected
                      content and express relationships between biological
                      entities, provide evidence for those relationships
                      including hyperlinks and direct connections to literature
                      and other sources. Drag and drop from annotated papers and
                      enrichment tables allows for fast knowledge reconstruction
                      and visual note taking. Multiple maps can be merged into a
                      comprehensive knowledge graph for graph analysis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="point-item row justify-content-center mr-lg-4 align-items-center">
                <div className="point-image col-md-4 mb-4 mb-lg-0">
                  <img
                    src="/img/point_patterns.png"
                    alt="Picture of patterns in circles that look like snowflakes"
                  />
                </div>
                <div className="point-body col-md-8 col-lg-6">
                  <h2 className="point-title">
                    Knowledge Visualization & Enrichment
                  </h2>
                  <div className="point-description">
                    <p>
                      Lifelike provides an interactive knowledge graph
                      visualizer that clusters relationships by type to simplify
                      complex graphs. Graph nodes can be expanded and detailed
                      supporting data can be viewed. Structured data can be
                      uploaded and enriched against knowledge from many sources.
                      Statistical analysis against ontologies as well as
                      semantic analysis performed on text from public databases
                      enables users to move from big picture view to details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="point-item row justify-content-center ml-lg-4 align-items-center">
                <div className="point-image col-md-4 order-md-2 mb-4 mb-lg-0">
                  <img
                    src="/img/point_graph.png"
                    alt="Picture of a non-directed graph"
                  />
                </div>
                <div className="point-body col-md-8 col-lg-6">
                  <h2 className="point-title">
                    Search (Full Text and Graph Powered)
                  </h2>
                  <div className="point-description">
                    <p>
                      Full-text and graph-powered search enables users to find
                      non-obvious connections, and related concepts or find
                      content based on synonyms. This search is seamlessly
                      integrated throughout the application on a button click.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
