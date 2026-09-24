import { ArrowUpRight } from 'lucide-react'

export default function CertificateCard({ certificate, onOpen }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-neutral-950 transition-all duration-300 hover:border-neutral-500 hover:shadow-[0_10px_30px_rgba(255,255,255,0.03)]">
      <button
        type="button"
        onClick={() => onOpen(certificate)}
        className="flex h-full w-full flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white cursor-pointer"
      >
        <div className="overflow-hidden border-b border-border bg-dark">
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate from ${certificate.organization}`}
            loading="lazy"
            className="aspect-[16/10] w-full object-cover object-top grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
          <div>
            <div className="flex items-center justify-between gap-2">
              <p className="font-display text-[10px] tracking-[0.24em] text-neutral-400">
                {certificate.organization.toUpperCase()}
              </p>
              {certificate.date && (
                <span className="font-display text-[10px] tracking-[0.14em] text-neutral-400">
                  {certificate.date}
                </span>
              )}
            </div>
            <h3 className="mt-2.5 font-display text-lg font-medium tracking-[-0.02em] text-white transition-colors group-hover:text-white">
              {certificate.title}
            </h3>
            {certificate.meta && (
              <p className="mt-1 font-display text-xs tracking-[0.1em] text-neutral-400">
                {certificate.meta}
              </p>
            )}
            <p className="mt-3 text-sm leading-6 text-neutral-300">
              {certificate.description}
            </p>
          </div>
          <div className="mt-6 border-t border-border/40 pt-4">
            <span className="inline-flex items-center gap-2 font-display text-[11px] font-medium tracking-[0.2em] text-white transition-colors group-hover:text-white">
              VIEW CERTIFICATE
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </button>
    </article>
  )
}
