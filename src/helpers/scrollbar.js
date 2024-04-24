import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const scrollbar = () => {
  const scrollbarTl = gsap.timeline({
    scrollTrigger: {
      trigger: 'body',
      start: 'top 0%',
      end: 'bottom 100%',
      scrub: 1,
    },
  })

  scrollbarTl.to('.scrollbar-holder', { marginTop: 'auto', ease: 'linear' })
}
