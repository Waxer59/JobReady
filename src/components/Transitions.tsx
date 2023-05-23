import { motion } from 'framer-motion'

export function FadeInWhenVisible({ children }: { children: any }) {
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
  children: any
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
