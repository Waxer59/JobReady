import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 }
      }}>
      {children}
    </motion.div>
  )
}

export function ScaleOnHover({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: 'tween',
        delay: 0
      }}
      className={className}>
      {children}
    </motion.div>
  )
}

export function FadeIn({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={className}>
      {children}
    </motion.div>
  )
}

export default function AnimateIncreaseNumber({
  number,
  className = ''
}: {
  number: number
  className?: string
}) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    const animation = animate(count, number, { duration: 10 })

    return animation.stop
  }, [])

  return (
    <motion.span
      className={`opacity-100 ${className}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        delay: number * 0.1
      }}>
      {rounded}
    </motion.span>
  )
}
