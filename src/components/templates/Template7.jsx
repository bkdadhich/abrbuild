import React from 'react';

const Template7 = ({
  data,
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen 
}) => {
  // Define classes based on props
  const textSizeClass = textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg';
  const sectionSpacingClass = sectionSpacing === 'small' ? 'space-y-2' : sectionSpacing === 'medium' ? 'space-y-4' : 'space-y-6';
  const paragraphSpacingClass = paragraphSpacing === 'small' ? 'mb-2' : paragraphSpacing === 'medium' ? 'mb-4' : 'mb-6';
  const lineHeightClass = lineSpacing === '1' ? 'leading-tight' : lineSpacing === '1.5' ? 'leading-snug' : 'leading-relaxed';

  // Provide default values for data properties
  const { details = [], experiences = [], educations = [], skills = [], sectionadd = [], summary = [] } = data || {};

  // Generic function to check if all required fields are filled
  const areAllFieldsFilled = (item, fields) => {
    return fields.every(field => item[field] && item[field].trim() !== '');
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
    areAllFieldsFilled(summar, ['summarydescription'])
  );

  return (
    <div
      className={`border-2 border-gray-300 px-5 ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`}
      style={{ fontFamily: font }}
    >
      {/* Red circle indicating all fields are filled */}
      {!isPreviewScreen && (
        <div className="">
          {allDetailsFilled && (
            <div className="w-9 h-9 ps-3.5 pt-0.5 bg-white rounded-2xl absolute top-32 left-9 font-bold">1</div>
          )}
          {allDetailsFilled2 && (
            <div className="w-9 h-9 ps-3.5 pt-0.5 mt-2 bg-white rounded-2xl absolute top-44 left-9 font-bold">2</div>
          )}
          {allDetailsFilled3 && (
            <div className="w-9 h-9 ps-3.5 pt-1 mt-3.5 bg-white rounded-2xl absolute top-56 left-9 font-bold">3</div>
          )}
          {allDetailsFilled4 && (
            <div className="w-9 h-9 ps-3.5 pt-1 mt-1.5 bg-white rounded-2xl absolute top-72 left-9 font-bold">4</div>
          )}
          {allDetailsFilled5 && (
            <div className="w-9 h-9 ps-3.5 pt-1  bg-white rounded-2xl absolute bottom-72 left-9 font-bold">6</div>
          )}
          
        </div>
      )}

      <div className='flex'>
        <div className='w-2/3 px-10 '>
          {details.map((del, index) => (
            <div key={index}>
              <h3 className="text-lg md:text-xl lg:text-3xl text-orange-800 font-bold">{del.name}</h3>
              <p className='font-medium'>{del.Profession}</p> <br />
            </div>
          ))}

         

          {experiences.length > 0 && (
            <div>
              <h5 className='text-orange-700 font-bold'>WORK EXPERIENCE</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              {experiences.map((exp, index) => (
                <div key={index} className='mt-4'>
                  <div className='flex justify-between'>
                    <h6 className='font-bold'>{exp.Company}</h6>
                    <p>{exp.month1} - {exp.month2}</p>
                  </div>
                  <h6>{exp.role}</h6>
                  <ul className={`m-2 ${paragraphSpacingClass}`}>
                    <li>{exp.companydescription}</li>
                  </ul>
                </div>
              ))}
            </div>
          )}

         
        </div>

        <div className="w-1/3 p-4 bg-orange-100" style={{ backgroundColor: boxBgColor }}>
          <div>
            <h5 className='text-orange-700 font-bold'>CONTACT</h5>
            <div className="flex-grow border-t border-gray-300 align-super"></div>
            <ul className="text-xs md:text-xs lg:text-xs mt-2">
              {details.map((del, index) => (
                <React.Fragment key={index}>
                  <li className="flex items-center">
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    {del.address}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs flex items-center'>
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    {del.phoneNumber}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs break-all flex items-center'>
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    {del.email}
                  </li>
                  <li className='text-xs md:text-xs lg:text-xs flex items-center'>
                    <span className="h-1 w-1 bg-red-600 rounded-full mr-2 inline-block"></span>
                    <a href={del.link}>{del.link}</a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          {skills.length > 0 && (
            <div>
              <h5 className='text-orange-700 font-bold'>SKILLS</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              <ul className="mt-2">
                {skills.map((skill, index) => (
                  <li key={index}>
                    <span className="font-bold">{skill.skillname}</span>: {skill.skilldetails}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {educations.length > 0 && (
            <div>
              <h5 className='text-orange-700 font-bold'>EDUCATION</h5>
              <div className="flex-grow border-t border-gray-300 align-super"></div>
              <ul className="mt-2">
                {educations.map((edu, index) => (
                  <li key={index}>
                    {edu.coursename} at {edu.schoolname}, {edu.schoolplace}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Template7;
