import { skills } from '../data/skills'

function MarqueeRow({ items, direction = 'left', duration = 32 }) {
  // Double the set for seamless loop
  const doubled = [...items, ...items]

  return (
    <div className="marquee-mask overflow-hidden py-1">
      <div
        className={`flex w-max gap-3.5 hover:[animation-play-state:paused] ${
          direction === 'left' ? 'animate-marquee' : 'animate-marquee-reverse'
        } motion-reduce:animate-none`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((skill, index) => {
          const Icon = skill.Icon
          return (
            <div
              key={`${skill.name}-${index}`}
              className="group flex min-w-[172px] cursor-default items-center gap-3.5 border border-border bg-dark px-5 py-3.5 transition-all duration-300 hover:scale-[1.04] hover:border-white/40 hover:bg-[#202020]"
            >
              <Icon className="h-5 w-5 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" aria-hidden="true" />
              <div>
                <span className="block font-display text-xs font-medium tracking-[0.14em] text-white">
                  {skill.name}
                </span>
                <span className="block font-display text-[9px] tracking-[0.16em] text-muted">
                  {skill.category.toUpperCase()}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function SkillMarquee() {
  const rowOne = skills
  const rowTwo = [...skills].reverse()

  return (
    <div className="space-y-3.5">
      <MarqueeRow items={rowOne} direction="left" duration={32} />
      <MarqueeRow items={rowTwo} direction="right" duration={38} />
    </div>
  )
}
