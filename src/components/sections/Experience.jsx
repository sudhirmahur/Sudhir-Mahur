import SectionTitle from "../SectionTitle";
import ExperienceCard from "../ExperienceCard";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          kicker="Experience"
          title="Where I've worked."
          description="Professional experience building and maintaining production frontend interfaces."
        />

        <div className="relative mt-14 flex flex-col gap-10">
          <div
            className="absolute left-3 top-2 bottom-2 w-px bg-[var(--border)] sm:left-4"
            aria-hidden="true"
          />
          {experience.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
