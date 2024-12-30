import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaGithub, FaClipboard } from "react-icons/fa";

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [showMoreFeatures, setShowMoreFeatures] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", color: "" });

  useEffect(() => {
    setCharCount(text.length);
    setWordCount(text.trim().split(/\s+/).filter(Boolean).length);
  }, [text]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    showAlert("Extra spaces removed!", "bg-yellow-400");
  };

  const reverseText = () => {
    setText(text.split("").reverse().join(""));
    showAlert("Text reversed!", "bg-indigo-400");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert("Copied to clipboard!", "bg-cyan-400");
    });
  };

  const showAlert = (message, color) => {
    setAlert({ show: true, message, color });
    setTimeout(() => setAlert({ show: false, message: "", color: "" }), 2000);
  };

  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center p-4 font-mono relative">
      <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] rounded-none p-4 sm:p-8 w-full max-w-4xl transition-all">
        <h1 className="text-3xl sm:text-5xl font-bold text-black text-center mb-4 sm:mb-8 uppercase tracking-tight">
          Count Your Character
        </h1>
        <div className="relative mb-4 sm:mb-8">
          <textarea
            className="w-full h-40 sm:h-64 px-4 py-3 pr-12 text-lg sm:text-xl text-black bg-blue-200 border-4 border-black rounded-none resize-none focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-200"
            placeholder="Type or paste your text here..."
            value={text}
            onChange={handleTextChange}
          ></textarea>
          <button
            onClick={copyToClipboard}
            className="absolute top-3 right-4 bg-white text-black p-2 border-4 border-black transition duration-200 hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
          ><FaClipboard size={20} /></button>
        </div>
        <div
          className={`grid ${
            showMoreFeatures ? "grid-cols-2" : "grid-cols-1"
          } gap-4 mb-4 sm:mb-8`}
        >
          <div className="flex justify-center items-center bg-red-500 border-4 border-black p-4">
            <div className="text-3xl sm:text-5xl font-bold text-white mr-2 sm:mr-4">
              {charCount}
            </div>
            <div className="text-lg sm:text-2xl text-white uppercase">
              Characters
            </div>
          </div>
          {showMoreFeatures && (
            <div className="flex justify-center items-center bg-purple-400 border-4 border-black p-4">
              <div className="text-3xl sm:text-5xl font-bold text-white mr-2 sm:mr-4">
                {wordCount}
              </div>
              <div className="text-lg sm:text-2xl text-white uppercase">
                Words
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => setShowMoreFeatures(!showMoreFeatures)}
          className="w-full bg-blue-400 text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center"
        >
          {showMoreFeatures ? "Hide" : "More"} Features
          {showMoreFeatures ? (
            <FaChevronUp className="ml-2" />
          ) : (
            <FaChevronDown className="ml-2" />
          )}
        </button>
        {showMoreFeatures && (
          <div className="mt-4 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <button
                onClick={() => {
                  setText(text.toUpperCase());
                  showAlert("Text converted to uppercase!", "bg-blue-400");
                }}
                className="bg-green-400 text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Make Uppercase
              </button>
              <button
                onClick={() => {
                  setText(text.toLowerCase());
                  showAlert("Text converted to lowercase!", "bg-pink-400");
                }}
                className="bg-pink-400 text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Make Lowercase
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={removeExtraSpaces}
                className="bg-yellow-400 text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Remove Extra Spaces
              </button>
              <button
                onClick={reverseText}
                className="bg-indigo-400 text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
              >
                Reverse Text
              </button>
            </div>
            <button
              onClick={copyToClipboard}
              className="mt-4 w-full bg-cyan-400 text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)]"
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
      <a
        href="https://github.com/ifalfahri/count-your-character"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-slate-800 text-white text-xs font-bold py-2 px-2 border-4 border-black transition duration-200 uppercase hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-center"
      >
        <FaGithub size={20} className="mr-2" />
        GitHub
      </a>
      {alert.show && (
        <div
          className={`fixed top-8 left-1/2 transform -translate-x-1/2 ${alert.color} text-black text-lg sm:text-xl font-bold py-2 sm:py-3 px-4 sm:px-6 border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}
        >
          {alert.message}
        </div>
      )}
    </div>
  );
}
