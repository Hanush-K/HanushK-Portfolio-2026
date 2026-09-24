import { profiles } from '../data/profiles'
import ProfileCard from './ProfileCard'
import Reveal from './Reveal'

export default function Profiles() {
  return (
    <section id="profiles" className="relative z-20 border-t border-border px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-[11px] tracking-[0.32em] text-muted">04 — PROFILES</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">
            Find me online
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profiles.map((profile) => (
            <ProfileCard key={profile.platform} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  )
}
