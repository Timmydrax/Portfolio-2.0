import profilePic from "../assets/hero-image-two.png";
import { HERO_CONTENT } from "../constants";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Hero = () => {
  return (
    <>
      <section className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8 ">
              <motion.img
                src={profilePic}
                alt="A 3D picture of Timmy Alade"
                className="border border-stone-900 dark:border-stone-900 rounded-3xl"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                width={600}
                height={600}
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center lg:items-start mt-10"
            >
              <motion.h1
                variants={childVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-7xl"
              >
                {" "}
                Timmy Alade
              </motion.h1>
              <motion.span className="bg-gradient-to-r from-stone-300 dark:from-stone-300 to-stone-400 dark:to-stone-400 bg-clip-text text-3xl tracking-tight text-transparent text-center">
                Frontend Engineer
              </motion.span>
              <motion.p
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-center lg:text-start"
              >
                {HERO_CONTENT}
              </motion.p>

              <motion.a
                variants={childVariants}
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white dark:bg-white rounded-lg p-4 text-sm text-stone-800 dark:text-stone-800 mb-10 transition hover:bg-stone-100 dark:hover:bg-stone-100"
              >
                {" "}
                View Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
