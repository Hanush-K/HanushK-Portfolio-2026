import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'motion/react'
import profile from '../assets/profile/hanush-k.jpeg'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

export default function ProfileImage({ trackRef }) {
  const reduced = usePrefersReducedMotion()

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  })

  // Spring physics for smooth momentum (~0.5s settle when stopping scroll)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 20,
    mass: 0.5,
    restDelta: 0.001,
  })

  // Exactly ONE complete flip: single smooth 180° Y-axis rotation (0deg to 180deg)
  // Proportional across the scroll journey from Hero into About [0, 0.48]
  const rotateY = useTransform(
    smoothProgress,
    [0, 0.48],
    reduced ? [0, 0] : [0, 180],
  )

  // Smooth scale increase
  const scale = useTransform(
    smoothProgress,
    [0, 0.48],
    reduced ? [1, 1] : [0.88, 1.10],
  )

  // Grayscale to natural color
  const grayscale = useTransform(
    smoothProgress,
    [0, 0.48],
    reduced ? [0, 0] : [100, 0],
  )

  // Subtle natural nudge towards right alignment without excessive movement
  const x = useTransform(
    smoothProgress,
    [0, 0.48],
    reduced ? ['0px', '0px'] : ['0px', '12px'],
  )

  const filter = useMotionTemplate`grayscale(${grayscale}%)`

  return (
    <div
      className="pointer-events-none sticky top-0 z-10 hidden h-screen items-center overflow-hidden lg:flex"
      style={{ perspective: 1400 }}
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-12 items-center gap-8 px-6 md:px-10 lg:gap-12">
        {/* Left column empty for Hero & About content */}
        <div className="col-span-7" />

        {/* Right column: Profile image container positioned on the right */}
        <div className="col-span-5 flex justify-center lg:justify-end">
          <motion.div
            className="will-change-transform relative h-[365px] w-[330px] xl:h-[400px] xl:w-[360px]"
            style={{
              x,
              scale,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front Face: Grayscale portrait, visible from 0deg to 90deg */}
            <div
              className="absolute inset-0 overflow-hidden rounded-[28px] border border-neutral-800 bg-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <motion.img
                src={profile}
                alt="Portrait of Hanush K"
                width={720}
                height={900}
                className="h-full w-full object-cover object-[center_14%]"
                style={{ filter }}
              />
            </div>

            {/* Back Face: Full natural color portrait, turned 180deg so at rotateY(180deg) it faces forward unmirrored! */}
            <div
              className="absolute inset-0 overflow-hidden rounded-[28px] border border-neutral-800 bg-neutral-900 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <img
                src={profile}
                alt="Portrait of Hanush K"
                width={720}
                height={900}
                className="h-full w-full object-cover object-[center_14%]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
