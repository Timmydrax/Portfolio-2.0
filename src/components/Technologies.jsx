import {
  RiCss3Fill,
  RiGithubFill,
  RiHtml5Fill,
  RiNpmjsFill,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
// eslint-disable-next-line no-unused-vars
import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <section className="pb-24">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h2>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5.5)}
            className="p-4"
          >
            <RiHtml5Fill className="text-6xl text-[#E34F26]" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4.5)}
            className="p-4"
          >
            <RiCss3Fill className="text-6xl text-[#264DE4]" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}
            className="p-4"
          >
            <SiJavascript className="text-7xl text-amber-300" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <RiTailwindCssFill className="text-6xl text-cyan-500" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5.5)}
            className="p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <TbBrandNextjs className="text-7xl text-stone-100" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6)}
            className="p-4"
          >
            <SiTypescript className="text-6xl text-[#3178C6]" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(6.5)}
            className="p-4"
          >
            <RiGithubFill className="text-7xl text-stone-100" />
          </motion.div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(4)}
            className="p-4"
          >
            <RiNpmjsFill className="text-6xl text-[#CB3837]" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Technologies;
