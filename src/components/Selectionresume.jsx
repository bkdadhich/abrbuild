// Selectionresume.js
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../components/images/WhatsApp Image 2024-06-04 at 18.27.02_2464e7dc.jpg'
import upload from '../components/images/upload.png'
import edit from '../components/images/edit.png'
import UploadScreen from "../components/loadingscreens/uploadscreen";

function Selectionresume() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
  
    const handleClick2 = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate('/uploadresume');
      }, 5000);
    };

    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          navigate('/form');
        }, 5000);
      };

  return (
    <>
    {loading ? (
        <UploadScreen />
      ) : (
        <>
         <div className="flex justify-between  p-2 h-16 " style={{backgroundColor:'#022B5F'}}>
          
          <img src={logo} alt="" />
            </div>
          <div className="text-center my-10">
            <h1 className="font-bold text-3xl mb-3">Are you uploading an existing resume?</h1>
            <h6 className="text-sm font-medium text-slate-500">Just review, edit, and update it with new information</h6>
          </div>
    
          <div className="flex text-center justify-center gap-10">
          <button onClick={handleClick2}>
          <div className=" my-10 p-10 px-16 border rounded-md border-gray-400">
          <img src={upload} alt="" style={{height:'50px'}} className="ms-28"/>
            <h1 className="font-bold text-lg mb-2 text-slate-700">Yes, upload from my resume</h1>
            <h6 className="text-xs ">We'll give you expert guidance to fill out your info <br /> and enchance your resume, from start to finish</h6>
          </div></button>
          <button onClick={handleClick}>
          <div className=" my-20 p-10 border rounded-md border-gray-400">
          <img src={edit} alt="" style={{height:'50px'}} className="ms-32"/>
            <h1 className="font-bold text-lg mb-2 text-slate-700">No, start from scratch</h1>
            <h6 className="text-xs ">We'll give you guide you through the whole process so your <br /> skill can be shine</h6>
          </div>
          </button>
    
          </div>
        </>
      )}
      
    </>
  );
}

export default Selectionresume;
