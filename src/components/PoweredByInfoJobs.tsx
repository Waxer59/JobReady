import { InfoJobsIconReduced } from './Icons'
import { motion } from 'framer-motion'

export default function PoweredByInfoJobs() {
  return (
    <motion.a
      className="fixed right-5 bottom-5 flex items-center font-thin text-lg"
      whileHover={{ scale: 1.1 }}
      href="https://www.infojobs.net/"
      target="_blank"
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
      Powered By <InfoJobsIconReduced />
    </motion.a>
  )
}
