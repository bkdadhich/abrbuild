import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';

function Tooltip() {
  const linesOfText = [
    "Our AI Enabled Resume Builder",
    "Is Result Oriented",
    "Globally Accepted Formats",
    "AI Powered At Every Step",
    "Increases 50% Chances Of Getting Hired",
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let interval;
    if (showTooltip) {
      interval = setInterval(() => {
        if (currentLineIndex < linesOfText.length - 1) {
          setCurrentLineIndex(prevIndex => prevIndex + 1);
        } else {
          setShowTooltip(false); // Stop displaying tooltip after all lines have been shown
          clearInterval(interval); // Stop the interval
        }
      }, 1000); // Change the delay time (in milliseconds) as needed
    }

    return () => clearInterval(interval);
  }, [showTooltip, currentLineIndex, linesOfText]);

  useEffect(() => {
    if (showTooltip) {
      setVisibleLines(prevLines => [...prevLines, linesOfText[currentLineIndex]]);
    }
  }, [showTooltip, currentLineIndex]);

  useEffect(() => {
    if (!showTooltip) {
      // Reset visibleLines when hiding the tooltip
      setVisibleLines([]);
      setCurrentLineIndex(0); // Reset currentLineIndex when hiding the tooltip
    }
  }, [showTooltip]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <FontAwesomeIcon icon={faLightbulb} className="mr-1 mt-3 text-yellow-500" style={{ height: '20px' }} />
        <span
          className="text-yellow-500 font-bold underline cursor-pointer relative z-10"
          onClick={() => setShowTooltip(!showTooltip)}
          title="Click for Tips"
        >
          Tips
        </span>
        {showTooltip && (
          <div className="absolute bg-white border-2 border-gray-300 p-4 rounded-lg shadow w-80 right-16 top-1">
            <div className="absolute w-4 h-4 bg-white border-t border-r border-gray-300 transform rotate-45 top -right-2" />

            {visibleLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Tooltip;
