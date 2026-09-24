import SkillMarquee from './SkillMarquee'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills" className="relative z-20 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="font-display text-[11px] tracking-[0.32em] text-muted">02 — SKILLS</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">
            Tools I work with
          </h2>
        </Reveal>
      </div>
      <div className="mt-14">
        <SkillMarquee />
      </div>
    </section>
  )
}
