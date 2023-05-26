import { HiOutlinePaperAirplane } from 'react-icons/hi'
import { useState, useRef, useEffect } from 'react'
import { toast } from 'sonner'

interface IMessages {
  isHuman: boolean
  message: string
}

export default function QuestionaireChat() {
  const [messages, setMessages] = useState<IMessages[]>([])

  const messageInput = useRef<HTMLInputElement>(null)
  const messageEl = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messageEl.current) {
      messageEl.current.scrollTop = messageEl.current.scrollHeight
    }
  }, [messages])

  function handleSendMessage() {
    if (!messageInput.current?.value) {
      toast.error('Please enter a message')
      return
    }

    const newMessage = { isHuman: true, message: messageInput.current.value }

    setMessages((prevMessages) => [...prevMessages, newMessage])
    messageInput.current.value = ''
  }

  return (
    <div className="overflow-auto">
      <h3 className="mt-24 text-xl font-medium text-center">Interview</h3>
      <div
        className="mt-10 overflow-auto h-[650px] overflow-x-hidden scroll-x- w-full flex flex-col max-w-[800px] mx-auto gap-10"
        ref={messageEl}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.message}
            isHuman={message.isHuman}
          />
        ))}
      </div>
      <div className="flex justify-between mx-auto gap-6 max-w-[800px]">
        <div className="flex items-center w-full gap-2 justify-center">
          <input
            type="text"
            ref={messageInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage()
              }
            }}
            className="p-2 focus:outline-none border-[1px] rounded-md border-gray-300 w-full"
            placeholder="Type your answer here..."
          />
          <button
            onClick={() => handleSendMessage()}
            className="text-xl text-gray-400">
            <HiOutlinePaperAirplane />
          </button>
        </div>
      </div>
    </div>
  )
}

function ChatMessage({
  message,
  isHuman
}: {
  message: string
  isHuman: boolean
}) {
  return (
    <p
      className={`${
        isHuman ? 'bg-zinc-300' : 'bg-slate-200'
      } p-2 rounded-md w-1/2 ${isHuman ? 'self-end' : ''}`}>
      {message}
    </p>
  )
}
