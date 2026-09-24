import { site } from '../data/site'
import Reveal from './Reveal'

const facts = [
  { label: 'Degree', value: site.degree },
  { label: 'Current Year', value: site.year },
  { label: 'College', value: site.college },
  { label: 'CGPA', value: site.cgpa },
  { label: '12th Board', value: site.twelfthPercentage },
  { label: 'Graduation Year', value: site.graduation },
  { label: 'Location', value: site.location },
]

export default function About() {
  return (
    <section id="about" className="relative z-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Column: Bio & Academic Info */}
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.32em] text-neutral-400">01 — ABOUT</p>
              <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                Building toward
                <span className="block text-neutral-400">practical software.</span>
              </h2>
            </Reveal>

            <div className="mt-10 space-y-6 text-[15px] leading-7 text-neutral-300 md:text-base md:leading-8 font-normal">
              <Reveal>
                <p>{site.about[0]}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <p>{site.about[1]}</p>
              </Reveal>
            </div>

            <Reveal className="mt-14" delay={0.1}>
              <div className="border-t border-border pt-8">
                <p className="mb-5 font-display text-[11px] tracking-[0.28em] text-neutral-400">
                  ACADEMIC BACKGROUND
                </p>
                <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div key={fact.label} className="border-b border-border/70 pb-3.5">
                      <dt className="font-display text-[10px] tracking-[0.24em] text-neutral-400">
                        {fact.label.toUpperCase()}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-white md:text-[15px]">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean landing zone for Profile Image (no extra text) */}
          <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
