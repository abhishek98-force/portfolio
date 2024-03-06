import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Abhishek Unnithan</h1>
         <p className="text-base md:text-xl mb-6 font-medium">Software Engineer | Web Developer | Salesforce Developer</p>
         <div className="bg-stone-900 max-w-3xl mb-4 p-2 rounded-lg text-white">
           <p clasName="text-sm font-bold">
            Hello :). I am a Master's student at pursuing Software Engineering Systems Northeastern University. I am a passionate software developer 
            who finds joy in creating memorable web experiences, with keen interest in 
            both client and server-side development.
            <br />
            <br />
            Prior to my Master's, I worked as a Salesforce Developer at Wipro, where I developed and implemented Salesforce
            Platforms. I enjoyed leveraging the capabilites of the Salesforce platform to build effiecient and 
            effective solutions that meet business needs.
            <br />
            <br />
            In my spare time, I love exploring new technologies tinkering with code, and seeking out creative challenges. With 
            a blend of experience in web development and Salesforce, I am always eager to tackle exciting projects
            and make meaningful contributions to world of software engineering.
            </p>
         </div>
      </div>
   )
}

export default Intro;