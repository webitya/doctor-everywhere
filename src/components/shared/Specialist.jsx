


import React from 'react'

  const specialities = [
  "Best Dermatologist in Gurgaon",
  "Best Psychiatrist in Gurgaon",
  "Best Gynecologist in Gurgaon",
  "Best Dermatologist in Gurgaon",
  "Best Dentist in Gurgaon",
  "Best Gynecologist in Gurgaon",
  "Best ENT Specialist in Gurgaon",
  "Best General Physician in Gurgaon",
  "Best Neurologist in Gurgaon",
  "Best Orthopedist in Gurgaon",
  "Best Dermatologist in Gurgaon",
  "Best Psychiatrist in Gurgaon",
  "Best Gynecologist in Gurgaon",
  "Best Pediatrician in Gurgaon",
  "Best Orthopedist in Gurgaon",
  "Best General Physician in Gurgaon",
  "Best Andrologist in Gurgaon",
  "Best Urologist in Gurgaon",
  "Best Gastroentrologist in Gurgaon",
  "Best Dietitian in Gurgaon"
];


const moreSpecialities = [
  "Best Psychiatrist in Gurgaon",
  "Best Orthopedist in Gurgaon",
  "Best Dermatologist in Gurgaon",
  "Best Psychiatrist in Gurgaon",
  "Best Pediatrician in Gurgaon",
  "Best General Physician in Gurgaon",
  "Best Orthopedist in Gurgaon",
  "Best Pediatrician in Gurgaon",
  "Best Gynecologist in Gurgaon",
  "Best Urologist in Gurgaon",
  "Best General Physician in Gurgaon",
  "Best Orthopedist in Gurgaon",
  "Best Pediatrician in Gurgaon",
  "Best Gynecologist in Gurgaon",
  "Best Psychiatrist in Gurgaon",
  "Best Dermatologist in Gurgaon",
  "Best Neurologist in Gurgaon",
  "Best Endocrinologist in Gurgaon",
  "Best Diabetologist in Gurgaon",
  "Best Physiotherapist in Gurgaon"
];


const healthPackages = [
  "RTPCR Test in Gurgaon",
  "Complete Covid-19 Antibody Test in Gurgaon",
  "Basic Covid-19 igG Antibody Test in Gurgaon",
  "Covid Spike Protein Antibody Test in Gurgaon",
  "Full Body Checkup in Gurgaon",
  "Advance Full Body Checkup for Men in Gurgaon",
  "Advance Full Body Checkup for Women in Gurgaon",
  "Comprehensive Full Body Check for Men in Gurgaon",
  "Comprehensive Full Body Check for Women in Gurgaon",
  "Vital Full Body Checkup in Gurgaon",
  "Vitamin Profile Test Cost in Gurgaon",
  "Diabetes Screening Test in Gurgaon",
  "Obesity Assessment Test in Gurgaon",
  "PCOD Profile Test Cost in Gurgaon",
  "STD Risk Assessment Test in Gurgaon",
  "Cardiac Risk Assessment Test in Gurgaon",
  "Allergy Risk Assessment Test in Gurgaon",
  "Smoker's Risk Assessment Test in Gurgaon",
  "Stress Test in Gurgaon",
  "Dengue Screening Cost in Gurgaon"
];


const labTests = [
  "CBC Test Price in Gurgaon",
  "Vitamin B-12 Test Cost in Gurgaon",
  "CRP Test Price in Gurgaon",
  "Liver Function Test Cost in Gurgaon",
  "Urine Test Price in Gurgaon",
  "Lipid Profile Test Cost in Gurgaon",
  "HbA1c Blood Test Price in Gurgaon",
  "Pregnancy Test Cost in Gurgaon",
  "TSH Test Price in Gurgaon",
  "Double Marker Test Cost in Gurgaon",
  "Urine Test Price in Gurgaon",
  "Lipid Profile Test Cost in Gurgaon",
  "HbA1c Blood Test Price in Gurgaon",
  "Pregnancy Test Cost in Gurgaon",
  "TSH Test Price in Gurgaon",
  "Double Marker Test Cost in Gurgaon",
  "CBC Test Price in Gurgaon",
  "Vitamin B-12 Test Cost in Gurgaon",
  "CRP Test Price in Gurgaon",
  "Liver Function Test Cost in Gurgaon"
];


const scans = [
  "MRI Scan in Gurgaon",
  "CT Scan Brain in Gurgaon",
  "X-Ray in Gurgaon",
  "Ultrasound Scan in Gurgaon",
  "HRCT Chest Scan in Gurgaon",
  "PET Scan in Gurgaon",
  "MRI Scan Brain Cost in Gurgaon",
  "Pelvis X-Ray Cost in Gurgaon",
  "MRI LS Spine Cost in Gurgaon",
  "CT Scan Chest Cost in Gurgaon",
  "PET Scan Cost in Gurgaon",
  "MRI Scan Brain Cost in Gurgaon",
  "Pelvis X-Ray Cost in Gurgaon",
  "MRI LS Spine Cost in Gurgaon",
  "CT Scan Chest Cost in Gurgaon",
  "HRCT Scan Cost in Gurgaon",
  "X-Ray PNS Cost in Gurgaon",
  "PET Scan Cost in Gurgaon",
  "KUB Ultrasound Price in Gurgaon",
  "Echo Test Price in Gurgaon"
];




const Specialist = () => {


  return (
    <div  className='hidden md:grid grid-cols-5 p-2 gap-2' > 
   
   {/* ▒▒▒▒▒▒▒  Specialization  ▒▒▒▒▒▒▒ */}
      <div>
          <h1 className='font-bold mb-2 text-[13px] md:text-[18px]' >Specialities</h1>
          <ul className='flex flex-col gap-1 text-[12px]'> 
            
               {
                specialities && specialities.map((el, index)=>{ 
                          return <li 
                          className='text-[10px] md:text-[12px]'
                           key={index}> {el} </li>
                })
               }
          </ul>

      </div>

       
   {/* ▒▒▒▒▒▒▒  More Specialities  ▒▒▒▒▒▒▒ */}
      <div>
          <h1 className='font-bold mb-2 text-[13px] md:text-[18px]' >More Specialities</h1>
          <ul className='flex flex-col gap-1 text-[12px]'> 
            
               {
                moreSpecialities && moreSpecialities.map((el, index)=>{ 
                          return <li 
                          className='text-[10px] md:text-[12px]'
                           key={index}> {el} </li>
                })
               }
          </ul>

      </div> 

             
   {/* ▒▒▒▒▒▒▒   Health Packages  ▒▒▒▒▒▒▒ */}
      <div>
          <h1 className='font-bold mb-2 text-[13px] md:text-[18px]' > Health Packages </h1>
          <ul className='flex flex-col gap-1 text-[12px]'> 
            
               {
                 healthPackages && healthPackages.map((el, index)=>{ 
                          return <li 
                          className='text-[10px] md:text-[12px]'
                           key={index}> {el} </li>
                })
               }
          </ul>

      </div>


    {/* ▒▒▒▒▒▒▒  labTests  ▒▒▒▒▒▒▒ */}
      <div>
          <h1 className='font-bold mb-2 text-[13px] md:text-[18px]' >Lab Tests </h1>
          <ul className='flex flex-col gap-1 text-[12px]'> 
            
               {
                 labTests && labTests.map((el, index)=>{ 
                          return <li  
                          className='text-[10px] md:text-[12px]'
                           key={index}> {el} </li>
                })
               }
          </ul>

      </div>


       {/* ▒▒▒▒▒▒▒  Scans  ▒▒▒▒▒▒▒ */}
      <div>
          <h1 className='font-bold mb-2 text-[13px] md:text-[18px]' >Scans </h1>
          <ul className='flex flex-col gap-1 text-[12px]'> 
            
               {
                 scans && scans.map((el, index)=>{ 
                          return <li 
                          className='text-[10px] md:text-[12px]'
                           key={index}> {el} </li>
                })
               }
          </ul>

      </div>








   
      
    </div>
  )
}

export default Specialist
