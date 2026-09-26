import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import SkillCard from "../SkillCard";
import { skillCategories } from "../../data/skills";
import { staggerContainer } from "../../hooks/useScrollAnimation";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Skills"
          title="Tools I reach for every day."
          description="A practical toolkit for building, styling, and shipping accessible frontend interfaces — with enough backend to be dangerous."
        />

        <div className="mt-14 flex flex-col gap-14">
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-4 font-display text-lg font-medium">{category.title}</h3>
              <motion.div
                {...staggerContainer()}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
