import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { certificates } from '../data/certificates'
import CertificateCard from './CertificateCard'
import Reveal from './Reveal'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

export default function Certificates() {
  const [active, setActive] = useState(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!active) return undefined

    const originalHtmlOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow

    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow
      document.body.style.overflow = originalBodyOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="certificates" className="relative z-20 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-[11px] tracking-[0.32em] text-neutral-400">03 — CERTIFICATES</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
            Selected credentials
          </h2>
        </Reveal>

        {/* 2 per row on desktop with ~50px horizontal gap between cards, centered, 1 per row on mobile */}
        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-[50px] md:gap-y-6">
          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              onOpen={setActive}
            />
          ))}
        </div>
      </div>

      {/* Render modal directly to document.body via Portal to prevent any stacking context / overlap issues */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {active && (
              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduced ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="certificate-dialog-title"
                onClick={() => setActive(null)}
              >
                <motion.div
                  initial={reduced ? false : { opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 10 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative my-auto flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl"
                  onClick={(event) => event.stopPropagation()}
                >
                  {/* Modal Header */}
                  <div className="flex shrink-0 items-center justify-between gap-4 border-b border-neutral-800 bg-neutral-900 px-5 py-4">
                    <div>
                      <h3
                        id="certificate-dialog-title"
                        className="font-display text-base font-medium text-white sm:text-lg"
                      >
                        {active.title}
                      </h3>
                      <p className="font-display text-xs tracking-[0.1em] text-neutral-400">
                        {active.organization}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActive(null)}
                      className="rounded-full border border-neutral-700 bg-neutral-800 p-2 text-neutral-300 transition-colors hover:border-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
                    >
                      <X size={18} />
                      <span className="sr-only">Close certificate</span>
                    </button>
                  </div>

                  {/* Modal Scrollable Image Container */}
                  <div className="max-h-[calc(92vh-125px)] overflow-y-auto overflow-x-hidden bg-black p-3 sm:p-6 flex items-center justify-center">
                    <img
                      src={active.image}
                      alt={`${active.title} certificate from ${active.organization}`}
                      className="mx-auto h-auto max-h-[72vh] w-full rounded-lg object-contain shadow-lg"
                    />
                  </div>

                  {/* Modal Footer */}
                  {active.link && (
                    <div className="flex shrink-0 items-center justify-between border-t border-neutral-800 bg-neutral-900 px-5 py-3.5">
                      <span className="text-xs text-neutral-400">Official Verification</span>
                      <a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-display text-[11px] font-medium tracking-[0.18em] text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                      >
                        VERIFY CREDENTIAL
                        <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  )
}
