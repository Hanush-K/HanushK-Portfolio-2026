import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative z-20 border-t border-border px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name}</p>
        <p>{site.degree}</p>
      </div>
    </footer>
  )
}
