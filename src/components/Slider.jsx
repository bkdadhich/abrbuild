import React from 'react';
import logo from '../components/images/WhatsApp Image 2024-06-04 at 18.27.02_2464e7dc.jpg';

const Slider = ({
  currentStep,
  setCurrentStep,
  isDetailsComplete,
  isDetailsComplete2,
  isDetailsComplete3,
  isDetailsComplete4,
  isDetailsComplete5,
  isDetailsComplete6,
}) => {
  const sections = ['Heading', 'Work History', 'Education', 'Skills', 'Summary', 'Finalize'];
  const progress = Math.floor(((currentStep + 1) / sections.length) * 100);

  const completeness = [
    isDetailsComplete(),
    isDetailsComplete2(),
    isDetailsComplete3(),
    isDetailsComplete4(),
    isDetailsComplete5(),
    isDetailsComplete6(),
  ];

  const getClassNameForStep = (index) => {
    let className =
      'cursor-pointer text-lg rounded-full border-2 p-1 flex items-center justify-center ';
    if (currentStep === index) {
      className += 'text-blue-900 bg-white font-bold ';
    } else {
      className += 'hover:text-blue-950 ';
    }
    if (completeness[index]) {
      className += 'bg-white-500 text-blue'; // Mark as complete with green color
    } else {
      className += 'bg-blue-950 text-white'; // Default incomplete state
    }
    return className;
  };

  return (
    <div className="bg-blue-950 h-full pb-96">
      <div className="p-9 flex">
        <ul className="space-y-4 pt-8">
          {sections.map((section, index) => (
            <li
              key={index}
              className={getClassNameForStep(index)}
              onClick={() => setCurrentStep(index)}
            >
              <div className="relative">
                <div className={`rounded-full px-2 ${currentStep === index ? 'text-black' : ''}`}>{index + 1}</div>
                {index !== sections.length - 1 && (
                  <div className="h-4 w-px bg-white absolute top-8 left-1/2 transform -translate-x-1/2"></div>
                )}
              </div>
            </li>
          ))}
        </ul>
        <ul className="space-y-8 py-9">
          {sections.map((section, index) => (
            <li
              key={index}
              className={`cursor-pointer align-middle px-2 ${
                currentStep === index ? 'font-bold text-white' : 'hover:text-blue-800 text-white'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-9">
        <p className="text-white mb-1 text-xs">RESUME PROGRESS {progress}%</p>
        <div className="bg-white h-3 w-full rounded-full">
          <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className='text-white m-10 mt-24 text-xs'>
        <p>Powered By <a href="https://blog.abroadium.com/">Abroadium.com</a></p>
        <img src={logo} className='w-24 my-2' alt="" />
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Slider;
