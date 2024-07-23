import React, { useState } from 'react';
import Image1 from "./Assets/Image1.jpg";
import Image2 from "./Assets/Image2.jpg";
import Image3 from "./Assets/Image3.jpg";
import Image4 from "./Assets/Image4.jpg";
import Image5 from "./Assets/Image5.jpg";
import { motion } from 'framer-motion';



 const ImageSliderr = () => {

    
    const images = [
        Image1 ,
        Image2 ,
        Image3 ,
        Image4 ,
        Image5 ,


    ]

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
      ];
      const imageVariants = {
        center: { x: "0%", scale: 1, zIndex: 5 },
        left1: { x: "-50%", scale: 0.7, zIndex: 2 },
        left: { x: "-90%", scale: 0.5, zIndex: 1 },
        right: { x: "90%", scale: 1, zIndex: 1 },
        right1: { x: "50%", scale: 0.7, zIndex: 2 }
      };

   
    const[positionindex , setpositionindex] = useState([0,1,2,3,4]);
    const handleNext = () => {
        setpositionindex((prevIndexes) =>{
            const UpdatedInexes = prevIndexes.map((prevIndexe)=>(prevIndexe + 1) % 5) // five 5 images 
            return UpdatedInexes;
        })
   
    }
  return (
    <div className='flex items-center flex-col justify-center bg-black h-screen'>
        
       {images.map((image , index)=>(
        <motion.img
        key = {index}
        src={image}
        alt={image}
        className="rounded-[12px]"
        initial="center"
        animate = {positions[positionindex[index]]}
        variants={imageVariants}
        transition={{duration : 0.5}}
        style={{width : "40%" , position : "absolute"}}
        />
       ))}
       <button className='text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4' onClick={handleNext}>Next</button>
    </div>
  )
}

export default ImageSliderr ;
