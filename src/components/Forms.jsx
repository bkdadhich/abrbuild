// Import useState and useEffect hooks
import React, { useState, useEffect, useRef } from 'react';

// Import other components and dependencies
import Details from './inputFields/details';
import Experience from './inputFields/Experince';
import Education from './inputFields/Education';
import Skills from './inputFields/Skills';
import Language from './inputFields/Language';
import SectionAdd from './inputFields/SectionAdd';
import Slider from './Slider';
import PreviewSection from './forms/PreviewSection';
import SimpleCVGenerator from './forms/SimpleCVGenerator';
import { useReactToPrint } from 'react-to-print';
import 'react-quill/dist/quill.snow.css';
import Summary from './inputFields/Summary';
import Experiencescreen from './loadingscreens/experiencescreen';
import Educationscreen from './loadingscreens/educationscreen';
import SkillScreen from './loadingscreens/skillScreen';
import Summaryscreen from './loadingscreens/summaryscreen';

function Form() {
  // State variables
  const [showComponent, setShowComponent] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('formData');
    return savedData
      ? JSON.parse(savedData)
      : {
          details: [{ name: '', profession: '', address: '', phoneNumber: '', email: '', link: '' }],
          language: [{ Languagename1: '', Languagename2: '' }],
          experiences: [{ company: '', role: '', companydescription: '', month1: '', month2: '', companyplace: '' }],
          educations: [{ coursename: '', schoolplace: '', schoolname: '', edmonth1: '', edmonth2: '' }],
          skills: [{ skillname: '', skilldetails: '' }],
          summary: [{ summarydescription: '' }],
          sectionadd: [],
          sectionadd2: []
        };
  });
  const [isSaving, setIsSaving] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [currentStepColor, setCurrentStepColor] = useState('bg-blue-950');
  const cvRef = useRef(null);
  const [sections, setSections] = useState([]);

  // Define the screen components mapping
  const screenComponents = {
    Details: <Experiencescreen />,
    Experience: <Educationscreen />, // Example for a different screen
    Education: <SkillScreen />,
    Skills: <Summaryscreen />,
    
    
  };

  // Handle the next button click
  const handleNext = () => {
    if (currentStep < sectionsList.length - 1) {
      // Show the screen component for the current section for 5 seconds
      setShowComponent(true);
      setTimeout(() => {
        setShowComponent(false);
        setCurrentStep(currentStep + 1);
      }, 2000); // 5000 milliseconds = 5 seconds
    } else {
      setIsPreviewing(true); // Preview the form
    }
  };
  


// Define the isDetailsComplete function
const isDetailsComplete = () => {
  const detailsFields = formData.details[0];
  return (
    detailsFields.name.trim() !== '' &&
    detailsFields.profession.trim() !== '' &&
    detailsFields.phoneNumber.trim() !== '' &&
    detailsFields.email.trim() !== '' &&
    detailsFields.link.trim() !== '' &&
    detailsFields.address.trim() !== '' &&
    detailsFields.description.trim() !== ''
  );
};
const isDetailsComplete2 = () => {
  // Check if experiences array exists and is not empty
  if (formData.experiences && formData.experiences.length > 0) {
    // Check if the first experience object has all required fields filled
    const experienceFields = formData.experiences[0];
    return (
      experienceFields.company.trim() !== '' &&
      experienceFields.month1.trim() !== '' &&
      experienceFields.role.trim() !== '' &&
      experienceFields.companydescription.trim() !== '' 
    );
  }
  return false; // Return false if experiences array is empty or undefined
};

const isDetailsComplete3 = () => {
  // Check if experiences array exists and is not empty
  if (formData.education && formData.education.length > 0) {
    // Check if the first experience object has all required fields filled
    const education = formData.education[0];
    return (
      education.schoolname.trim() !== '' &&
      education.edmonth1.trim() !== '' &&
      education.edmonth2.trim() !== '' &&
      education.coursename.trim() !== '' 
    );
  }
  return false; // Return false if experiences array is empty or undefined
};

const isDetailsComplete4 = () => {
  // Check if experiences array exists and is not empty
  if (formData.skill && formData.skill.length > 0) {
    // Check if the first experience object has all required fields filled
    const skill = formData.skill[0];
    return (
      skill.skillname.trim() !== '' &&
      skill.skilldetails.trim() !== '' 
    );
  }
  return false; // Return false if experiences array is empty or undefined
};
const isDetailsComplete5 = () => {
  // Check if experiences array exists and is not empty
  if (formData.section && formData.section.length > 0) {
    // Check if the first experience object has all required fields filled
    const section = formData.section[0];
    return (
      section.sectiontitle.trim() !== '' &&
      section.sectiondescription.trim() !== ''  
    );
  }
  return false; // Return false if experiences array is empty or undefined
};

const isDetailsComplete6 = () => {
  // Check if experiences array exists and is not empty
  if (formData.summary && formData.summary.length > 0) {
    // Check if the first experience object has all required fields filled
    const summary = formData.summary[0];
    return (
      
      summary.summarydescription.trim() !== ''  
    );
  }
  return false; // Return false if experiences array is empty or undefined
};



useEffect(() => {
  // Check if all required details fields are filled whenever the current step changes
  if (currentStep === 0 && isDetailsComplete()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete2()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete3()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete4()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete5()) {
    setCurrentStepColor('bg-blue-950');
  } else if (currentStep === 1 && isDetailsComplete6()) {
    setCurrentStepColor('bg-blue-950');
  } else {
    setCurrentStepColor('bg-blue-950');
  }
}, [currentStep, formData.details, formData.experiences]);

const handleInputChange = (e, index, section) => {
  const { name, value } = e.target;

  // If the input field is companydescription and a double newline is entered,
  // replace it with a single newline character
  const updatedValue = name === 'companydescription' ? value.replace(/\n\n/g, '\n') : value;

  const updatedSection = formData[section].map((item, i) =>
    i === index ? { ...item, [name]: updatedValue } : item
  );
  setFormData({ ...formData, [section]: updatedSection });
  setIsSaving(true);
};



const handleKeyPress = (e, index, section) => {
  console.log('Event target name:', e.target.name);
  console.log('Pressed key:', e.key);

  if (e.key === 'Enter' && e.target.name === 'companydescription') {
    e.preventDefault(); // Prevent default form submission
    console.log('Enter key pressed in companydescription field');
    const updatedDescription = `${e.target.value}\n`; // Add newline character
    console.log('Updated description:', updatedDescription);
    handleInputChange(e, index, section, { companydescription: updatedDescription });
  }
};





const handlePrevious = () => {
  if (currentStep > 0) {
    setCurrentStep(currentStep - 1);
  }
};

const handlePrint = useReactToPrint({
  content: () => cvRef.current
});

const sectionsList = [
  'Details',
  'Experience',
  'Education',
  'Skills',
  'summary',
  'SectionAdd'
];

const handleTemplateChange = (template) => {
  setSelectedTemplate(template);
};

const addField = (section) => {
  const newField =
    section === 'experiences'
      ? { company: '', role: '', companydescription: '', month1: '', month2: '' }
      : section === 'educations'
      ? { coursename: '', schoolplace: '', schoolname: '', edmonth1: '', edmonth2: '' }
      : { skillname: '', skilldetails: '' };
  setFormData({ ...formData, [section]: [...formData[section], newField] });
};

const deleteField = (index, section) => {
  const updatedSection = formData[section].filter((_, i) => i !== index);
  setFormData({ ...formData, [section]: updatedSection });
};

const handleSectionInputChange = (e, index) => {
  const { name, value } = e.target;
  const updatedSectionAdd = formData.sectionadd.map((item, i) =>
    i === index ? { ...item, [name]: value } : item
  );
  setFormData({ ...formData, sectionadd: updatedSectionAdd });
  setIsSaving(true);
};

const handleSectionInputChange2 = (e, index) => {
  const { name, value } = e.target;
  const updatedSectionAdd = formData.sectionadd2.map((item, i) =>
    i === index ? { ...item, [name]: value } : item
  );
  setFormData({ ...formData, sectionadd2: updatedSectionAdd });
  setIsSaving(true);
};

const addSectionAdd = () => {
  setFormData({
    ...formData,
    sectionadd: [...formData.sectionadd, { sectionname: '', sectiondescription: '', sectiontitle: '' }]
  });
};

const addSectionAdd2 = () => {
  setFormData({
    ...formData,
    sectionadd2: [...formData.sectionadd2, { addlanguage1:'',addlanguage2:'' }]
  });
};

const addSectionAdd3 = () => {
  setFormData({
    ...formData,
    sectionadd2: [...formData.sectionadd2, { addaward1:'',addaward2:'' }]
  });
};

const addSectionAdd4 = () => {
  setFormData({
    ...formData,
    sectionadd2: [...formData.sectionadd2, { addrefernces1:'',addrefernces2:'' }]
  });
};

const deleteSectionAdd = (index) => {
  const updatedSectionAdd = formData.sectionadd.filter((_, i) => i !== index);
  setFormData({ ...formData, sectionadd: updatedSectionAdd });
};

return (
  <div className="h-screen">
    {!isPreviewing ? (
      <>
        <div className="flex justify-between border-2 p-2 bg-slate-300">
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-white px-10 py-2 rounded font-bold"
            disabled={currentStep === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`${currentStepColor} text-white px-10 py-2 rounded font-bold`}
          >
            Next
          </button>
        </div>
        <div className="flex">
          <div className="w-1/5 h-full bg-slate-300">
            <Slider
              sectionsList={sectionsList}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              isDetailsComplete={isDetailsComplete}
              Step={currentStep}
             
              isDetailsComplete2={isDetailsComplete2}
              isDetailsComplete3={isDetailsComplete3}
              isDetailsComplete4={isDetailsComplete4}
              isDetailsComplete5={isDetailsComplete5}
              isDetailsComplete6={isDetailsComplete6}
            />
          </div>
          <div className="flex w-4/5">
            <div className="absolute h-screen">
              {/* Conditionally render the screen component based on the current section */}
              {showComponent && screenComponents[sectionsList[currentStep]]}
            </div>
            <div className="w-4/5 p-3 h-screen">
              {/* Render Active Section */}
              {(() => {
                switch (sectionsList[currentStep]) {
                  case 'Details':
                    return <Details details={formData.details} handleInputChange={handleInputChange} />;
                  case 'Experience':
                    return (
                      <>
                        <Experience
                          experiences={formData.experiences}
                          handleInputChange={handleInputChange}
                          handleKeyPress={handleKeyPress}
                          addExperience={() => addField('experiences')}
                          deleteExperience={(index) => deleteField(index, 'experiences')}
                        />
                        
                      </>
                    );
                  case 'Education':
                    return (
                      <Education
                        educations={formData.educations}
                        handleInputChange={handleInputChange}
                        addEducation={() => addField('educations')}
                        deleteEducation={(index) => deleteField(index, 'educations')}
                      />
                    );
                  case 'Skills':
                    return (
                      <Skills
                        skills={formData.skills}
                        handleInputChange={handleInputChange}
                        addSkill={() => addField('skills')}
                        deleteSkill={(index) => deleteField(index, 'skills')}
                        selectedTemplate={selectedTemplate}
                      />
                    );
                  case 'summary':
                    return <Summary summary={formData.summary} handleInputChange={handleInputChange} />;
                  case 'Language':
                    return (
                      <Language
                        formData={formData.language}
                        handleInputChange={handleInputChange}
                        selectedTemplate={selectedTemplate}
                      />
                    );
                  case 'SectionAdd':
                    return (
                      <SectionAdd
                        sectionadd={formData.sectionadd}
                        sectionadd2={formData.sectionadd2}
                        handleInputChange={handleSectionInputChange}
                        handleInputChange2={handleSectionInputChange2}
                        addSectionAdd={addSectionAdd}
                        addSectionAdd2={addSectionAdd2}
                        addSectionAdd3={addSectionAdd3}
                        addSectionAdd4={addSectionAdd4}
                        deleteSectionAdd={deleteSectionAdd}
                        selectedTemplate={selectedTemplate}
                      />
                    );
                  default:
                    return null;
                }
              })()}
            </div>
            <div className="w-3/5 overflow-y-auto overflow-x-auto h-full justify-center p-10">
              <SimpleCVGenerator
                ref={cvRef}
                data={formData}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
              />
            </div>
          </div>
        </div>
      </>
    ) : (
      <PreviewSection
        handlePrint={handlePrint}
        setIsPreviewing={setIsPreviewing}
        isSaving={isSaving}
        selectedTemplate={selectedTemplate}
        cvRef={cvRef}
        formData={formData}
        handleSectionInputChange={handleSectionInputChange}
        addSectionAdd={addSectionAdd}
        deleteSectionAdd={deleteSectionAdd}
        setSelectedTemplate={setSelectedTemplate}
        hideIsDetailsComplete={true}
      />
    )}
  </div>
);
}

export default Form;