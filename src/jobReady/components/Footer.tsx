import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="mt-16 text-md flex justify-center items-center gap-2 p-4">
      Made By{' '}
      <a href="https://github.com/Waxer59" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
    </footer>
  )
}
