import React, { useState } from 'react';
import Formheader from '../forms/Formheader';

function Details({ details = [], handleInputChange }) {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const areAllDetailsFilled = () => {
    return details.every(del => Object.values(del).every(val => val.trim() !== ''));
  };

  return (
    <>
      <div className="font-thin ">

      <div className='px-10 mt-7'>
        <h1 className='text-3xl font-semibold mb-3 '>What’s the best way for employers to contact you?</h1>
        <h1 className='text-sm'>We suggest including an email and phone number.</h1>
      </div>
        {areAllDetailsFilled() && (
          <div className=" top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-red-900 rounded-full"></div>
        )}
        {details.map((del, index) => (
          <div key={index} className=" mt-8 ">
            <div className="m-2 px-10  gap-3 w-full">
              <div className="">
                <div className="flex gap-10 justify-around ">
                  <div className="w-3/5 justify-center px-14">
                    {/* Display dummy profile picture */}
                    <img style={{height:'150px'}}
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      alt="Dummy Profile"
                      className=" p-2 "
                      onClick={() => {
                        document.getElementById(`fileInput-${index}`).click();
                      }}
                    />
                    <label
                      htmlFor="profilePicture"
                      className="block text-sm font-medium border-black  mb-4 text-center  py-2 rounded-full border-blue-950 border-2"
                    >
                      Profile Picture
                    </label>
                    {/* Hidden file input */}
                    <input
                      type="file"
                      accept="image/*"
                      id={`fileInput-${index}`}
                      name="profilePicture"
                      onChange={(e) => handleInputChange(e, index, 'details')}
                      className="hidden"
                    />
                  </div>
                  <div className="w-3/4">
                    <div className="">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={del.name}
                        onChange={(e) => handleInputChange(e, index, 'details')}
                        placeholder="Enter your First Name"
                        className="w-full p-2 mb-4 border border-black rounded-lg "
                      />
                    </div>
                    <div className="">
                      <label htmlFor="Profession" className="block text-sm font-medium text-gray-700 mb-2">
                        Profession
                      </label>
                      <input
                        type="text"
                        name="Profession"
                        value={del.Profession}
                        onChange={(e) => handleInputChange(e, index, 'details')}
                        placeholder="Enter your Profession"
                        className="w-full p-2 mb-4 border border-black rounded-lg "
                      />
                    </div>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-3/4">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={del.address}
                      onChange={(e) => handleInputChange(e, index, 'details')}
                      placeholder="Enter your address"
                      className="w-full p-2 mb-4 border border-black rounded-lg"
                    />
                  </div>

                  <div className="w-3/4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-black mb-2">
                      Phone
                    </label>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={del.phoneNumber}
                      onChange={(e) => handleInputChange(e, index, 'details')}
                      placeholder="Enter your phone number"
                      className="w-full p-2 mb-4 border border-black rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-3/4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={del.email}
                      onChange={(e) => handleInputChange(e, index, 'details')}
                      placeholder="Enter your email"
                      className="w-full p-2 mb-4 border border-black rounded-lg"
                      required
                    />
                  </div>

                  <div className="w-3/4">
                    <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
                      link:
                    </label>
                    <input
                      type="text"
                      name="link"
                      value={del.link}
                      onChange={(e) => handleInputChange(e, index, 'details')}
                      placeholder=" add link"
                      className="w-full p-2 mb-4 border border-black rounded-lg"
                    />
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Details;

