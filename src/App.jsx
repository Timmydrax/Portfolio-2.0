import {
  Hero,
  Navbar,
  Technologies,
  Projects,
  Experience,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 anatialised">
        <section className="container mx-auto px-4 lg:px-8">
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </section>
      </div>
    </>
  );
};

export default App;
