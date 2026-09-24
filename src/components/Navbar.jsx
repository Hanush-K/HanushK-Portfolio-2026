import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

const links = [
  { href: '#about', id: 'about', label: 'ABOUT' },
  { href: '#skills', id: 'skills', label: 'SKILLS' },
  { href: '#certificates', id: 'certificates', label: 'CERTIFICATES' },
  { href: '#profiles', id: 'profiles', label: 'PROFILES' },
  { href: '#contact', id: 'contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const sectionIds = ['about', 'skills', 'certificates', 'profiles', 'contact']

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block pointer-events-none">
        <nav
          className="pointer-events-auto flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.35)] border border-neutral-200/90 font-['Inter',sans-serif]"
          aria-label="Primary"
        >
          {links.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-[11px] font-medium tracking-[0.16em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black ${
                  isActive
                    ? 'text-black font-semibold bg-neutral-100 shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>
      </header>

      {/* Mobile Floating Pill Navbar */}
      <div className="fixed top-4 inset-x-4 z-50 block md:hidden pointer-events-auto">
        <div className="mx-auto max-w-sm rounded-full bg-white px-5 py-2.5 shadow-[0_10px_32px_rgba(0,0,0,0.4)] border border-neutral-200 flex items-center justify-between font-['Inter',sans-serif]">
          <a
            href="#top"
            className="font-display text-xs font-semibold tracking-[0.2em] text-black focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
          >
            HANUSH K
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium tracking-[0.14em] text-black transition-colors hover:bg-neutral-100 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
          >
            <span>{open ? 'CLOSE' : 'MENU'}</span>
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>

        {/* Mobile Dropdown Card */}
        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-nav-panel"
              initial={reduced ? false : { opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduced ? { opacity: 1 } : { opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-sm overflow-hidden rounded-2xl bg-white p-2 shadow-2xl border border-neutral-200 font-['Inter',sans-serif]"
            >
              <ul className="flex flex-col divide-y divide-neutral-100">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-xs tracking-[0.18em] transition-colors rounded-xl ${
                        activeSection === link.id
                          ? 'bg-neutral-100 font-semibold text-black'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-black'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
