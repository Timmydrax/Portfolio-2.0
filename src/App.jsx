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
        <div className="fixed inset-0 -z-10">
          {/*Background snippet */}
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

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
