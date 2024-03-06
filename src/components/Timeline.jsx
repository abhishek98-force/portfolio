import React from 'react';
import { workEperience } from '../data/timeline';
import { volunteeringExperience } from '../data/timeline';
import WorkExperienceItem from './WorkExperienceItem';
import VolunteerItem from './VolunteerItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-15 mb-10">
         <div className="w-full md:w-5/6">
            <Title>Work Experience</Title>
            {workEperience.map(item => (
               <WorkExperienceItem 
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  context={item.context}
                  details={item.details}
               />
            ))}
            {/* <Title>Volunteering Experience</Title>
            {volunteeringExperience.map(item => (
               <VolunteerItem 
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  details={item.details}
               />
            ))} */}
         </div>
      </div>
   )
}

export default Timeline;