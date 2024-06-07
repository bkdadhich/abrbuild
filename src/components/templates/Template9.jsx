import React from 'react';
import { useState } from 'react';
const Template9 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isTemplate1Previewing,
  isPreviewScreen 
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [{}], experiences = [], educations = [], skills = [], sectionadd = [] ,summary=[]} = data || {};

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
  };
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        console.log("Uploaded image data:", reader.result);
        const updatedImages = [...images];
        updatedImages[index] = reader.result;
        setImages(updatedImages);
      };
      reader.readAsDataURL(file);
    }
  };
  
  // Check if all details are filled
  const allDetailsFilled = details.every(detail =>
    areAllFieldsFilled(detail, ['Profession', 'phoneNumber', 'email', 'link', 'address', 'name'])
  );

  const allDetailsFilled2 = experiences.every(experience =>
    areAllFieldsFilled(experience, ['Company', 'month1', 'role', 'companydescription'])
  );

  const allDetailsFilled3 = educations.every(education =>
    areAllFieldsFilled(education, ['schoolname', 'edmonth1', 'edmonth2', 'coursename'])
  );

  const allDetailsFilled4 = skills.every(skill =>
    areAllFieldsFilled(skill, ['skillname', 'skilldetails'])
  );

  const allDetailsFilled5 = sectionadd.every(section =>
    areAllFieldsFilled(section, ['sectiontitle', 'sectiondescription'])
  );
const allDetailsFilled6 = summary.every(summar =>
    areAllFieldsFilled(summar, [ 'summarydescription'])
  );

  const [images, setImages] = useState(() => {
    if (details && details.length > 0) {
      return details.map(() => null);
    }
    return [];

    
  });
  return (
    <div className={`border break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font }}>
      {!isPreviewScreen && !isTemplate1Previewing &&(
        <div className="">
          {allDetailsFilled && (
            <div className="w-7 h-7 ps-2.5  mt-3 bg-white rounded-2xl absolute top-48 left-10 font-bold">1</div>
          )}
          {allDetailsFilled2 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-60 left-10 font-bold">2</div>
          )}
          {allDetailsFilled3 && (
            <div className="w-7 h-8 ps-2.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-72 left-10 font-bold">3</div>
          )}
          {allDetailsFilled4 && (
            <div className="w-7 h-8 ps-2.5  mt-6 bg-white rounded-2xl absolute top-80 left-10 font-bold">4</div>
          )}
          {allDetailsFilled5 && (
            <div className="w-7 h-7 ps-2.5  mt-14 bg-white rounded-2xl absolute top-96 left-10 font-bold">6</div>
          )}
          {allDetailsFilled6 && (
            <div className="w-7 h-7 ps-2.5  mt-2  bg-white rounded-2xl absolute top-96 left-10 font-bold">5</div>
          )}
        </div>
      )}
      <div className='flex '>
        
        <div className="md:w-1/ md:p-4 bg-slate-100 text-white overflow-auto justify-center " style={{ backgroundColor: boxBgColor }}>
          <div>
          <div className="w-32 h-32 border-blue-950 bg-white rounded-full border-8 text-center break-all">
 
</div>
{details.map((del, index) => (
  <React.Fragment key={index}>
    {/* Display uploaded image */}
    <img
                style={{ height: '150px' }}
                src={images[index] || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                alt="Profile"
                className="p-2 cursor-pointer"
                
              />
               <input
                type="file"
                accept="image/*"
                id={`fileInput-${index}`}
                name="profilePicture"
                onChange={(e) => handleFileChange(e, index)}
                className="hidden"
              />


    {/* File input for image upload */}
    
  </React.Fragment>
))}


            <h5 className=' text-sm pt-5'>CONTACT </h5>
            <div className="flex-grow  border-t border-white align-super mt-3"></div>
            <ul className=" text-xs md:text-xs lg:text-xs mt-2">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li><span className="m-2">&#8226;</span>{del.address}</li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span>{del.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all'>
                    <span className="m-2">&#8226;</span>{del.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs'>
                    <span className="m-2">&#8226;</span><a href="">{del.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div><br />
          <h5 className='text-sm'>EDUCATION </h5><br />
          <div className="flex-grow border-t border-white align-super"></div>
          {educations.map((edu, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li className='font-bold'>{edu.coursename}</li>
                <li className='text-xs md:text-xs lg:text-sm mt-2'>{edu.schoolname}</li>
                <li className='text-xs md:text-xs lg:text-xs mt-2'>{edu.schoolplace}</li>
              </ul>
            </div>
          ))} <br />
          <h5 className='text-sm '>SKILLS  </h5>
          <div className="flex-grow border-t border-white align-super mt-2"></div>
          {skills.map((skill, index) => (
            <div key={index}>
              <ul className=" text-xs md:text-xs lg:text-xs mt-2">
                <li>
                  <span className="m-2">&#8226;</span>{skill.skillname}
                </li>
                <li className='text-xs md:text-xs lg:text-xs'>
                  <span className="m-2">&#8226;</span>{skill.skilldetails}
                </li>
              </ul>
            </div>
          ))}
          <div>
            {sectionadd.map((section, index) => (
              <div key={index} className="mt-5">
                <h5 className="text-blue-800  break-all">{section.sectiontitle}</h5>
                <div className="flex-grow border-t border-white align-super my-2 "></div>
                <span className="font-bold text-xs w-32">{section.sectionname}</span>
                <h6 className={`${paragraphSpacingClass} text-xs  break-all`}>{section.sectiondescription}</h6>
              </div>
            ))}
          </div>
        </div>


        <div className='md:w-2/3 md:px-4 white'>
        
          {details.map((del, index) => (
            <div key={index}><br />
              <h3 className="text-lg md:text-xl lg:text-3xl text-gray-700 font-bold ">{del.name}</h3>
              <p className='text-sm md:text-sm lg:text-sm mt-2'> {del.Profession}</p> <br /> <br />
              <h5 className='font-bold mb-2 '>About Me </h5>
              <div className="flex-grow border-t border-gray-900 align-super"></div>
              {summary.map((sum, index) => (
      <div key={index}>
        <p className={`${paragraphSpacingClass} text-sm md:text-sm lg:text-sm  w-2/2 break-all`}>{sum.summarydescription}</p>
        <br />
      </div>
    ))}
              
              <h5 className='font-bold mb-2'>Work Experience </h5>
              <div className="flex-grow border-t border-gray-900 align-super"></div>
              {experiences.map((exp, index) => (
                <div key={index}>
                  <div className='flex justify-between mt-4'>
                    <h6 className='font-bold'>{exp.Company} </h6>
                    <p>{exp.month1}- {exp.month2}</p>
                  </div>
                  <h6>{exp.role}</h6>
                  <ul className='m-2'>
                    <li>{exp.companydescription}</li>
                  </ul>
                  <br />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Template9;
