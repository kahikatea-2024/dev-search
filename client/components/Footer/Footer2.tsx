import React from 'react'
import { motion } from 'framer-motion'

export const Footer2 = () => {
  return (
    <footer className="w-full bg-bg py-10 text-center">
      <div className="flex flex-col items-center justify-center">
        <section className="gradient flex flex-wrap justify-center text-lg font-semibold">
          <FlipLink animation="fromBottom">&nbsp; Made with</FlipLink>
          <div className="flex flex-wrap items-center justify-center">
            <FlipLink animation="rotate">&nbsp;Passion,</FlipLink>
            <FlipLink animation="fromTop">&nbsp; Team Work &</FlipLink>
            <FlipLink animation="fromBottom">&nbsp; Creativity</FlipLink>
            <FlipLink animation="rotate">&nbsp;By&nbsp;</FlipLink>
            <FlipLink
              href="https://github.com/aimee-mcneil-melville"
              animation="flip"
            >
              Aimee
            </FlipLink>
            <FlipLink animation="rotate">,&nbsp;</FlipLink>
            <FlipLink href="https://github.com/bradacraig" animation="flip">
              Brad
            </FlipLink>
            <FlipLink animation="rotate">,&nbsp;</FlipLink>
            <FlipLink href="https://github.com/fatima-yar" animation="flip">
              Fatima
            </FlipLink>
            <FlipLink animation="rotate">&nbsp;&&nbsp;</FlipLink>
            <FlipLink href="https://github.com/robert-hall-24" animation="flip">
              Rob
            </FlipLink>
            <FlipLink animation="rotate">!&nbsp;</FlipLink>
          </div>
        </section>
        <p className="mt-4 text-sm text-gray-400">
          © 2024 Dev Search. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

const DURATION = 1
// const STAGGER = 0.05

const variants = {
  rotate: {
    initial: { rotateX: 90, opacity: 0 },
    animate: { rotateX: 0, opacity: 1 },
  },
  fromTop: {
    initial: { y: '-50px', opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  fromBottom: {
    initial: { y: '50px', opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  flip: {
    initial: { rotateY: 90, opacity: 0 },
    animate: { rotateY: 0, opacity: 1 },
  },
}

const FlipLink = ({
  children,
  href,
  animation,
}: {
  children: string
  href: string
  animation: keyof typeof variants
}) => {
  return (
    <motion.a
      href={href}
      className="inline-block"
      initial="initial"
      animate="animate"
      variants={variants[animation]}
      transition={{
        duration: DURATION,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.a>
  )
}
