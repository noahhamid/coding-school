"use client"

import { useState, useEffect } from "react"

interface CodeDisplayProps {
  className?: string
  fileName?: string
}

export function TypingAnimation({ className, fileName = "script.js" }: CodeDisplayProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const typingSpeed = 50 // milliseconds per character

  const codeExample = `const typeEffect = (text, callback, speed = 100, i = 0) => {
  if (i < text.length) {
    callback(text[i]);
    setTimeout(() => typeEffect(text, callback, speed, i + 1), speed);
  }
};

// Example usage
typeEffect("Hello, World!", char => process.stdout.write(char), 80);`

  useEffect(() => {
    let currentIndex = 0
    let typingInterval: NodeJS.Timeout

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (currentIndex < codeExample.length) {
          setDisplayedText(codeExample.substring(0, currentIndex + 1))
          currentIndex++
        } else {
          clearInterval(typingInterval)
          setIsTyping(false)
        }
      }, typingSpeed)
    }

    return () => {
      clearInterval(typingInterval)
    }
  }, [isTyping, codeExample])

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xl">
      {/* VS Code-like title bar */}
      <div className="flex items-center bg-[#1E1E1E] border-b border-[#3C3C3C] px-3 py-2">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#EC6A5E]"></div>
          <div className="h-3 w-3 rounded-full bg-[#F4BF4F]"></div>
          <div className="h-3 w-3 rounded-full bg-[#61C554]"></div>
        </div>
        <div className="ml-4 text-sm font-medium text-[#CCCCCC]">{fileName}</div>
      </div>

      {/* Code content */}
      <div
        className={`font-mono p-4 ${className}`}
        style={{
          backgroundColor: "#1E1E1E",
          color: "#4FC1FF",
          lineHeight: "1.5",
          fontSize: "14px",
          fontFamily: 'Consolas, "Courier New", monospace',
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {displayedText}
        {isTyping && <span className="inline-block w-2 h-4 bg-white animate-pulse ml-0.5"></span>}
      </div>
    </div>
  )
}

