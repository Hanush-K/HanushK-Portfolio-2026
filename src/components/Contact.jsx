import { useState } from 'react'
import { ArrowUpRight, Mail, Copy, Check } from 'lucide-react'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa6'
import { site } from '../data/site'
import Reveal from './Reveal'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard.writeText(site.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const links = [
    {
      label: 'Email',
      href: site.mailto,
      detail: site.email,
      Icon: Mail,
      external: false,
      hasCopy: true,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/Hanush-K',
      detail: 'Hanush-K',
      Icon: SiGithub,
      external: true,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/hanush-k/',
      detail: 'hanush-k',
      Icon: FaLinkedin,
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative z-20 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-display text-[11px] tracking-[0.32em] text-muted">05 — CONTACT</p>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white md:text-6xl">
            Let’s connect
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {links.map((item) => {
            const Icon = item.Icon
            return (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="group flex items-center justify-between gap-4 py-6 transition-colors hover:bg-white/[0.03] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-white"
              >
                <span className="flex items-center gap-4">
                  <div className="rounded border border-border/80 bg-dark p-2.5 transition-colors group-hover:border-white/40">
                    <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <span>
                    <span className="block font-display text-lg font-medium text-white">{item.label}</span>
                    <span className="mt-0.5 block text-sm text-muted">{item.detail}</span>
                  </span>
                </span>
                
                <div className="flex items-center gap-3">
                  {item.hasCopy && (
                    <button
                      type="button"
                      onClick={handleCopy}
                      title="Copy email to clipboard"
                      className="flex items-center gap-1.5 rounded border border-border bg-dark px-3 py-1.5 font-display text-[10px] tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-black focus-visible:outline focus-visible:outline-1 focus-visible:outline-white"
                    >
                      {copied ? (
                        <>
                          <Check size={12} className="text-white" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} className="text-muted" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  )}
                  <ArrowUpRight className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" size={18} />
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
