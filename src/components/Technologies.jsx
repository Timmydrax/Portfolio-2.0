import { DiGithub, DiRedis } from "react-icons/di";
import {
  RiCss3Fill,
  RiGitBranchFill,
  RiGithubFill,
  RiGithubLine,
  RiHtml5Fill,
  RiNpmjsFill,
  RiReactjsLine,
  RiTailwindCssFill,
  RiVercelFill,
  RiVuejsFill,
} from "react-icons/ri";
import {
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = () => {
  return (
    <>
      <section className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="p-4">
            <RiHtml5Fill className="text-6xl text-[#E34F26]" />
          </div>

          <div className="p-4">
            <RiCss3Fill className="text-6xl text-[#264DE4]" />
          </div>

          <div className="p-4">
            <SiJavascript className="text-7xl text-amber-300" />
          </div>

          <div className="p-4">
            <RiTailwindCssFill className="text-6xl text-cyan-500" />
          </div>

          <div className="p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>

          <div className="p-4">
            <TbBrandNextjs className="text-7xl text-stone-100" />
          </div>

          <div className="p-4">
            <SiTypescript className="text-6xl text-[#3178C6]" />
          </div>

          <div className="p-4">
            <RiGithubFill className="text-7xl text-stone-100" />
          </div>

          <div className="p-4">
            <RiNpmjsFill className="text-6xl text-[#CB3837]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
