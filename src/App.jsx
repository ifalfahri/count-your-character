import React, { useState, useEffect } from 'react'
import { FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa'

export default function CharacterCounter() {
  const [text, setText] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [showMoreFeatures, setShowMoreFeatures] = useState(false)

  useEffect(() => {
    setCharCount(text.length)
    setWordCount(text.trim().split(/\s+/).filter(Boolean).length)
  }, [text])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, ' ').trim())
  }

  const reverseText = () => {
    setText(text.split('').reverse().join(''))
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Text copied to clipboard!')
    })
  }

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4 font-mono relative">
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
        <div className="flex justify-center items-center bg-red-500 border-4 border-black p-4 mb-8">
          <div className="text-7xl font-bold text-white mr-4">
            {charCount}
          </div>
          <div className="text-2xl text-white uppercase">
            Characters
          </div>
        </div>
        <button 
          onClick={() => setShowMoreFeatures(!showMoreFeatures)}
          className="w-full bg-green-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center"
        >
          {showMoreFeatures ? 'Hide' : 'More'} Features
          {showMoreFeatures ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </button>
        {showMoreFeatures && (
          <div className="mt-8">
            <div className="flex justify-center items-center bg-purple-400 border-4 border-black p-4 mb-8">
              <div className="text-5xl font-bold text-white mr-4">
                {wordCount}
              </div>
              <div className="text-xl text-white uppercase">
                Words
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button 
                onClick={() => setText(text.toUpperCase())} 
                className="bg-blue-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Make Uppercase
              </button>
              <button 
                onClick={() => setText(text.toLowerCase())} 
                className="bg-pink-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Make Lowercase
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button 
                onClick={removeExtraSpaces} 
                className="bg-yellow-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Remove Extra Spaces
              </button>
              <button 
                onClick={reverseText} 
                className="bg-purple-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Reverse Text
              </button>
            </div>
            <button 
              onClick={copyToClipboard} 
              className="mt-4 w-full bg-red-400 text-black text-xl font-bold py-3 px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-4 bg-black text-white p-4 rounded-full hover:bg-gray-800 transition-colors duration-200"
      >
        <FaGithub size={24} />
      </a>
    </div>
  )
}