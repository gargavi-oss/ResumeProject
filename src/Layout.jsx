import React from 'react';
import {useState,useId} from 'react';
import { Button, Edit, InputBox
 } from './components';
 import {Outlet,NavLink} from 'react-router-dom'


function Layout() {
    const [name,setName]= useState("");
    const [email,setEmail]= useState("");
    const [number,setNumber] = useState("");
    const [degree,setDegree] = useState("");
    const [university,setUniversity] = useState("");
    const [date,setDate] = useState("2025-03-18");
    const [company,setCompany] = useState("");
    const [position,setPosition]= useState("");
    const [responsibility,setResponsibility] = useState("");
    const [from,setFrom] = useState("2025-03-18");
    const [to,setTo] = useState("2025-04-18");
    const [isEditingGeneralInfo, setIsEditingGeneralinfo] = useState(true);
    const [isEditingEducationInfo, setIsEditingEducationinfo] = useState(true);
    const [isEditingExpierenceInfo,setIsEditingExpierenceInfo] = useState(true);

const labelId = useId();
const labelId1 = useId();
const labelId2 = useId();
const labelId3 = useId();
const labelId4 = useId();
const labelId5 = useId();
const labelId6 = useId();
const labelId7 = useId();
const labelId8 = useId();
const labelId9 = useId();
const labelId10 = useId();

const submitGeneralInfo = (e)=>{
  e.preventDefault();
  setIsEditingGeneralinfo(false); // Edit mode off after submit
}
const submitEducationInfo = (e)=>{
   e.preventDefault();
   setIsEditingEducationinfo(false)
}
const submitExperience = (e)=>{
   e.preventDefault();
   setIsEditingExpierenceInfo(false)
}
const editGeneralInfo = (e)=>{
 setIsEditingGeneralinfo(true)
 console.log("edited");
}
const editEducationInfo = (e)=>{
  setIsEditingEducationinfo(true);
}
const editExperience = ()=>{
 setIsEditingExpierenceInfo(true);
}
 const cvData = {
  name,
  email,
  number,
  degree,
  university,
  date,
  company,
  position,
  responsibility,
  from,
  to,
 };


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
<div className="w-100 bg-neutral-800 h-screen p-4 overflow-y-auto text-white">
        <div className="text-3xl font-bold text-center text-rose-500">CV Builder</div>
         <div className='flex flex-col my-6'>
       <div className='font-bold text-xl'>General Information</div>
          <div className='flex flex-col mt-2 mb-3'>
          <form onSubmit={submitGeneralInfo}>
            <div className='flex flex-col gap-2'>
            <label htmlFor={labelId}>Full Name</label>
           {isEditingGeneralInfo ? <InputBox id={labelId} placeHolder="Enter full name" type="text" value = {name} onChange={(e)=>setName(e.target.value)}
            /> : (
             < InputBox id={labelId} placeHolder="Enter full name" type="text" value = {name} 
              /> 
            )}
            <label htmlFor={labelId1}>Email</label>
            {isEditingGeneralInfo ? <InputBox id={labelId1} placeHolder="example@email.com" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> : (
                 <InputBox id={labelId1} placeHolder="example@email.com" type="email" value={email} />)}
            <label htmlFor={labelId2}>Phone Number</label>
         {isEditingGeneralInfo? <InputBox id={labelId2} placeHolder="+91 XXXXX 88888" type="number" value ={number} onChange={(e)=>setNumber(e.target.value)}/> : (
               <InputBox id={labelId2} placeHolder="+91 XXXXX 88888" type="number" value ={number} />)}
          
            </div>

            <div className='flex flex-row gap-1 mt-2'>
<Button  text="Submit" onClick={submitGeneralInfo}  />
<Edit className='' text="Edit" onClick={editGeneralInfo}/>
            </div>

</form>
            </div> 
           
         </div>
         <div className='flex flex-col my-3'>
    <div className='font-bold text-xl'>Education</div>
             <div className='flex flex-col mt-2 mb-3'>
          <form onSubmit={submitEducationInfo}>
            <div className='flex flex-col gap-2'>
            <label htmlFor={labelId3}>Degree</label>
           {isEditingEducationInfo ? <InputBox id={labelId3} placeHolder="Degree name" type="text" value = {degree} onChange={(e)=>setDegree(e.target.value)}
            /> : (
              <InputBox id={labelId3} placeHolder="Degree name" type="text" value = {degree} 
            /> 
            )}
            <label htmlFor={labelId4}>University</label>
            {isEditingEducationInfo ? <InputBox id={labelId4} placeHolder="University Name" type="text" value={university} onChange={(e)=>{setUniversity(e.target.value)}}/> : (
                  <InputBox id={labelId4} placeHolder="University Name" type="text" value={university} />)}
            <label htmlFor={labelId5}>Graduation Date</label>
         {isEditingEducationInfo? <InputBox id={labelId5} placeHolder="24/03/2028" type="date" value ={date} onChange={(e)=>setDate(e.target.value)}/> : (
            <InputBox id={labelId5} placeHolder="24/03/2028" type="date" value ={date}/> )}
          
            </div>

            <div className='flex flex-row gap-1 mt-2'>
<Button  text="Submit" onClick={submitEducationInfo}  />
<Edit className='' text="Edit" onClick={editEducationInfo}/>
            </div>

</form>
            </div> 
           
         </div>
         <div className='flex flex-col my-3'>
           <div className='font-bold text-xl'>Work Experience</div>
             <div className='flex flex-col mt-2 mb-3'>
          <form onSubmit={submitExperience}>
            <div className='flex flex-col gap-2'>
            <label htmlFor={labelId6}>Company</label>
           {isEditingExpierenceInfo ? <InputBox id={labelId6} placeHolder="Company Name" type="text" value = {company} onChange={(e)=>setCompany(e.target.value)}
            /> : (
              <InputBox id={labelId6} placeHolder="Company Name" type="text" value = {company} 
              />
            )}
            <label htmlFor={labelId7}>Position</label>
            {isEditingExpierenceInfo ? <InputBox id={labelId7} placeHolder="Job Title" type="text" value={position} onChange={(e)=>{setPosition(e.target.value)}}/> : (
                  <InputBox id={labelId7} placeHolder="Job Title" type="text" value={position} />)}
            <label htmlFor={labelId8}>Responsibilities</label>
         {isEditingExpierenceInfo? <InputBox id={labelId8} placeHolder="Breifly describe your work.." type="textarea" value ={responsibility} onChange={(e)=>setResponsibility(e.target.value)}/> : (
              <InputBox id={labelId8} placeHolder="Breifly describe your work.." type="textarea" value ={responsibility}/>)}
                   <label htmlFor={labelId9}>From</label>
         {isEditingExpierenceInfo? <InputBox id={labelId9} placeHolder="From" type="date" value ={from} onChange={(e)=>setFrom(e.target.value)}/> : (
              <InputBox id={labelId9} placeHolder="From" type="date" value ={from} />)}
                     <label htmlFor={labelId10}>Until</label>
         {isEditingExpierenceInfo? <InputBox id={labelId10} placeHolder="To" type="date" value ={to} onChange={(e)=>setTo(e.target.value)}/> : (
                <InputBox id={labelId10} placeHolder="To" type="date" value ={to} /> )}
               </div>
                <div className='flex flex-row gap-1 mt-3'>
                  <Button  text="Submit" onClick={submitExperience}  />
                  <Edit className='' text="Edit" onClick={editExperience}/>
                </div>
              </form>
            </div> 
         </div>
    </div>
    <div className="w-200  bg-white h-screen overflow-y-auto">
        <div className="w-200  bg-white h-screen overflow-y-auto">
        <Navbar />
        <div className="p-10 mt-10  top-0 left-0 flex justify-center">
          <Outlet context={cvData} />
        </div>
      </div>
</div>
  </div>
  )
}

const Navbar = () => (
  <nav className="fixed top-0 left-auto w-full md:w-2/3 bg-gray-100 p-4 z-10 flex justify-center">
    <ul className="flex gap-6">
      <li>
        <NavLink to="/TemplateOne" className={navClass}>Template One</NavLink>
      </li>
      <li>
        <NavLink to="/TemplateTwo" className={navClass}>Template Two</NavLink>
      </li>
    </ul>
  </nav>
);
const navClass = ({ isActive }) =>
  `block py-2 px-4 duration-200 ${isActive ? 'text-orange-600' : 'text-gray-100'} hover:text-orange-700`;

export default Layout