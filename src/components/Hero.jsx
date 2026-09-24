import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'motion/react'
import { site } from '../data/site'
import profile from '../assets/profile/hanush-k.jpeg'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

function MobileProfileHero() {
  const reduced = usePrefersReducedMotion()
  const { scrollY } = useScroll()

  // Spring smoothing for mobile
  const smoothY = useSpring(scrollY, {
    stiffness: 85,
    damping: 24,
    mass: 0.5,
  })

  const scale = useTransform(
    smoothY,
    [0, 240],
    reduced ? [1, 1] : [0.85, 0.98],
  )

  const rotateY = useTransform(
    smoothY,
    [0, 240],
    reduced ? [0, 0] : [0, 180],
  )

  const grayscale = useTransform(
    smoothY,
    [0, 240],
    reduced ? [0, 0] : [100, 0],
  )

  const filter = useMotionTemplate`grayscale(${grayscale}%)`

  return (
    <div
      className="my-8 flex justify-center py-2 lg:hidden"
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="will-change-transform relative h-[235px] w-52 sm:h-[270px] sm:w-60"
        style={{
          scale,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Face: Grayscale */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[24px] border border-neutral-800 bg-neutral-900 shadow-xl"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <motion.img
            src={profile}
            alt="Portrait of Hanush K"
            width={350}
            height={440}
            className="h-full w-full object-cover object-[center_14%]"
            style={{ filter }}
          />
        </div>

        {/* Back Face: Full natural color, unmirrored at 180deg */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[24px] border border-neutral-800 bg-neutral-900 shadow-xl"
          style={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            src={profile}
            alt="Portrait of Hanush K"
            width={350}
            height={440}
            className="h-full w-full object-cover object-[center_14%]"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-20 flex min-h-[100svh] items-center px-6 pt-24 pb-16 md:px-10 lg:-mt-[100vh] lg:pt-0 lg:pb-0"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="grid grid-cols-12 items-center gap-8 lg:gap-12">
          {/* Left Column: Hello, I'm, Hanush K, Professional Phrase */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            {/* HELLO I'M */}
            <div className="space-y-0.5">
              <p className="font-display text-xs sm:text-sm font-medium tracking-[0.28em] text-neutral-400">
                HELLO
              </p>
              <p className="font-display text-xs sm:text-sm font-medium tracking-[0.28em] text-neutral-400">
                I'M
              </p>
            </div>

            {/* HANUSH K */}
            <h1 className="mt-4 font-display text-[16vw] sm:text-[14vw] md:text-[11vw] lg:text-[7.8rem] xl:text-[9.2rem] 2xl:text-[10.2rem] font-bold leading-[0.86] tracking-[-0.04em] text-white">
              HANUSH
              <span className="block text-[#6B6B6B]">K</span>
            </h1>

            {/* Mobile & tablet interactive profile image */}
            <MobileProfileHero />

            {/* Short professional phrase */}
            <p className="mt-6 max-w-lg font-['Inter',sans-serif] text-sm sm:text-base leading-relaxed text-neutral-300 font-normal md:mt-8">
              {site.heroPhrase}
            </p>

            {/* Academic badge line */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs tracking-[0.16em] text-neutral-500 font-display">
              <span>{site.year.toUpperCase()}</span>
              <span>•</span>
              <span>{site.college.toUpperCase()}</span>
            </div>
          </div>

          {/* Right Column: Visual balance spacer for desktop profile image */}
          <div className="hidden lg:col-span-5 lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
