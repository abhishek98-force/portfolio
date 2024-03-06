import React from 'react';
import { volunteeringExperience } from '../data/timeline';
import VolunteerItem from './VolunteerItem';
import Title from './Title';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-15">
         <div className="w-full md:w-5/6">
            <Title>Volunteering Experience</Title>
            {volunteeringExperience.map(item => (
               <VolunteerItem 
                  year={item.year}
                  title={item.title}
                  company={item.company}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;