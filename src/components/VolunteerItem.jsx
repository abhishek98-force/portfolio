import React from 'react';
import {useState}  from 'react';

function VolunteerItem({ year, title, company, details }) {
    const [hidden, setHidden] = useState(true);
    function handlePopup(event) {
        setHidden(!hidden);
    }
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700" style={{cursor:'pointer'}} onClick={handlePopup}>
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 hover:bg-blue-400 dark:bg-white hover:dark:bg-blue-400 rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 hover:text-blue-400 dark:text-white hover:dark:text-blue-400">
                  {title}
               </h3>
               <h3 className="text-lg font-bold text-stone-900 dark:text-white">
                  {company}
               </h3>
               {/* <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </div> */}
             <div className={`my-2 text-base font-normal text-stone-500 dark:text-stone-400 ${hidden ? 'hidden': ""} `} >
            <ul>
               {details.map((data,index)=> {
                    return (
                            <li key={index}>{data}</li>
                    )
               })}
            </ul>
             </div>
         </li>
      </ol>
   )
}

export default VolunteerItem;