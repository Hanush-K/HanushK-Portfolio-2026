import { ArrowUpRight } from 'lucide-react'

export default function ProfileCard({ profile }) {
  const Icon = profile.Icon

  return (
    <a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 border border-border bg-black p-6 transition-all duration-300 hover:border-white/50 hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-white"
    >
      <div className="flex items-start gap-4">
        <div className="rounded border border-border/80 bg-dark p-2.5 transition-colors duration-300 group-hover:border-white/40">
          <Icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
        </div>
        <div>
          <p className="font-display text-lg font-medium tracking-[-0.02em] text-white transition-colors group-hover:text-white">
            {profile.platform}
          </p>
          <p className="mt-0.5 font-display text-xs tracking-[0.12em] text-muted">
            {profile.username}
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            {profile.description}
          </p>
        </div>
      </div>
      <ArrowUpRight
        size={17}
        className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
        aria-hidden="true"
      />
      <span className="sr-only">Opens in a new tab</span>
    </a>
  )
}
