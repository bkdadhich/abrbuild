import React from 'react';
import profilephoto from '../images/profilephoto.png';

const Template8 = ({
  data = {},
  boxBgColor,
  font,
  textSize,
  sectionSpacing,
  paragraphSpacing,
  lineSpacing,
  isPreviewScreen,
  isTemplate1Previewing,
  predefinedText = {},
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
    <div className={`border p-7 break-all ${textSizeClass} ${sectionSpacingClass} ${lineHeightClass}`} style={{ fontFamily: font, backgroundColor:'#27384C' }}>
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
      <div className='bg-white  rounded-3xl'>
        <div className='bg-stone-300 flex justify-between px-10 rounded-3xl '>
        
          <div className='w-2/4'>
            <h5 className='font-extrabold  m-3'>ABOUT ME </h5>
            {summary.map((sum, index) => (
              <div key={index}>
                <p className={`${paragraphSpacingClass} text-sm md:text-base lg:text-lg w-2/2 break-all`}>{sum.summarydescription || "A brief summary"}</p>
                <br />
              </div>
            ))}
          </div>
          <div className='text-center pe-10 pt-4 w-1/3'>
            {details.map((del, index) => (
              <div key={index}>
                <h3 className="text-lg md:text-xl lg:text-1xl font-bold ">{del.name || "John Doe"}</h3>
                <p className='text-lg md:text-xl lg:text-lg mt-2'> {del.Profession || "Software Engineer"}</p>
              </div>
            ))}
          </div>

        </div>

        <div className='flex flex-col md:flex-row  rounded-t-none'>
          <div className='md:w-2/4 md:px-5 pt-4'>

            <h5 className='font-extrabold  m-3'>JOBS EXPERIENCE </h5>

            {experiences.map((exp, index) => (
              <div key={index}>
                <p>{exp.month1} - {exp.month2}</p>
                <h6 className='font-bold'>{exp.Company || "ABC Inc."}</h6>
                <ul className='m-1'>
                  <li>{exp.companydescription || "Description of job experience"}</li>
                </ul>
                <h6 className='font-semibold'>{exp.role || "Software Developer"}</h6>
                <br />
              </div>
            ))}

            <h5 className='font-extrabold  m-3'>SKILLS  </h5>
            {skills.map((skill, index) => (
              <div key={index}>
                <ul className="text-sm md:text-base lg:text-lg mt-2">
                  <li>
                    <span className="m-2">&#8226;</span>{skill.skillname || "Skill Name"}
                  </li>
                  <li>
                    <span className="m-2">&#8226;</span>{skill.skilldetails || "Skill Details"}
                  </li>
                </ul>
              </div>
            ))}
            <h5 className='font-extrabold  m-3'>Language  </h5>
            {details.map((del, index) => (
              <div key={index}>
                <ul>
                  <li className={`${del.Language ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
                  <a href={del.Language || "#"}>{del.Language || "English"}</a>
                  </li>
                </ul>
              </div>
            ))}

            <h5 className='font-extrabold  m-3'>Github  </h5>
            {details.map((del, index) => (
              <div key={index}>
                <ul>
                  <li className={`${del.github ? 'before:content-["●"] before:m-2' : ''} w-2/2 break-all`}>
                    <a href={del.github || "#"}>{del.github || "https://github.com/example"}</a>
                  </li>
                </ul>
              </div>
            ))}

          </div>
          <div className="md:w-1/3 h-full bg-slate-100  border-white mx-10 "style={{ backgroundColor: boxBgColor }} >

            <div className='w-11/12 h-full ms-2 bg-black border-white rounded-full border-8 text-center'>
            <img src={profilephoto} alt=""  className='rounded-full'/></div>


            <div style={{ backgroundColor: boxBgColor }} className='px-5 h-max'>
              <div >
                <h5 className='font-extrabold text-white  pt-5 '>CONTACT ME</h5>
                <ul className="text-sm md:text-base lg:text-lg text-white">
                  {details.map((del, index) => (
                    <React.Fragment key={index}>
                      <li><span className="m-2">&#8226;</span>{del.address || "123 Main St"}</li>
                      <li>
                        <span className="m-2">&#8226;</span>{del.phoneNumber || "123-456-7890"}
                      </li>
                      <li className='break-all'>
                        <span className="m-2">&#8226;</span>{del.email || "example@example.com"}
                      </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div><br />
              <h5 className='font-extrabold text-white'>EDUCATION </h5>
              {educations.map((edu, index) => (
                <div key={index}>
                  <ul className="text-sm md:text-base lg:text-lg text-white mt-2">
                    <li className='font-bold'>{edu.coursename || "Computer Science"}</li>
                    <li>{edu.schoolname || "ABC University"}</li>
                    <li>{edu.schoolplace || "City, Country"}</li>
                    <p className='text-slate-400'>{edu.edmonth1} - {edu.edmonth2}</p>
                  </ul>
                </div>
              ))} <br />

              <div>
                {sectionadd.map((section, index) => (
                  <div key={index} className="mt-5">
                    <h5 className="font-extrabold text-white">{section.sectiontitle || "Additional Section"}</h5>
                    <span className="text-white w-32">{section.sectionname || "Section Name"}</span>
                    <h6 className={`${paragraphSpacingClass} text-white break-all`}>{section.sectiondescription || "Section description"}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template8;