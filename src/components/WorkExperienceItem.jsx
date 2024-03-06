import React, {useState} from 'react';

function WorkExperienceItem({ year, title, company, context, details }) {
    const [hidden, setHidden] = useState(true);
    function handlePopup(event) {
        setHidden(!hidden);
    }
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700" style={{cursor:'pointer'}} onClick={handlePopup}>
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
          
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 dark:hover:bg-blue-400 bg-stone-900 dark:bg-white rounded-md hover:bg-blue-400">
                  {year}
               </span>
               
               <h3 className="block text-lg font-semibold text-stone-900 dark:text-white dark:hover:text-blue-400 hover:text-blue-400">
                  {title}
               </h3>
                <h3 className="block text-lg font-bold text-stone-900 dark:text-white">
                  {company}
               </h3>
               <p className="italic">{context}</p>
         
            <p className={`my-2 text-base font-normal text-stone-500 dark:text-stone-400 p-2 ${hidden ? "hidden" : "" }`}>
            <ul className='list-disc'>
               {details.map((data,index)=> {
                    return (
                            <>
                            <li key={index}>{data}</li>
                            <br />
                            </>
                    )
               })}
            </ul>
            </p>
         </li>
      </ol>
   )
}

export default WorkExperienceItem;