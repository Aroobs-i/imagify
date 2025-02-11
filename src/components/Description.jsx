import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Description = () => {

  return (

    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      className='flex flex-col items-center justify-center
     my-24 p-6 md:px-8'>

      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images</h1>

      <p className='text-gray-500 mb-8'>Turn your imagination into visuals</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>

        <img src={assets.sample_img_1} className='w-80 xl:w-96 rounded-lg' />

        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>
            Introducing the AI-Powered Text to Image Generator</h2>

          <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with
            just a few clicks.Imagine it,describe it, and watch it come to life instantly. </p>

          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nisi natus doloribus repellendus officiis in non ducimus, officia aspernatur quam eos est
            voluptatibus! Impedit voluptas quia porro eos dicta modi! Maxime magni eius laborum recusandae
            nemo aut quam at, explicabo possimus!</p>
        </div>
      </div>
    </motion.div>
  )
}

export default Description
