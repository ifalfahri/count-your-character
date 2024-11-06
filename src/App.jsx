import { useState, useEffect } from 'react'


export default function App() {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    setCharCount(text.length)
  }, [text])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4 font-mono">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] rounded-none p-8 w-full max-w-4xl transition-all hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
        <h1 className="text-5xl font-bold text-black text-center mb-8 uppercase tracking-tight">
          Count Your Character
        </h1>
        <div className="relative mb-8">
          <textarea
            className="w-full h-64 px-4 py-3 text-xl text-black bg-blue-200 border-4 border-black rounded-none resize-none focus:outline-none focus:ring-4 focus:ring-red-500 transition duration-200"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
        </div>
        <div className="flex justify-center items-center bg-red-500 border-4 border-black p-4">
          <div className="text-7xl font-bold text-white mr-4">
            {charCount}
          </div>
          <div className="text-2xl text-white uppercase">
            Characters
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button 
            onClick={() => setText(text.toUpperCase())} 
            className="bg-green-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          >
            Make Uppercase
          </button>
          <button 
            onClick={() => setText(text.toLowerCase())} 
            className="bg-purple-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          >
            Make Lowercase
          </button>
        </div>
      </div>
    </div>
  )
}