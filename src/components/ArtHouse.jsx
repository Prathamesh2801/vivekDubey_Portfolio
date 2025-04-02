import React from "react";
import { motion } from "framer-motion";
import {
  landscapeImages,
  portraitImages,
  squareImages,
} from "../assets/data/artHousedata.js";
import { images } from "../assets/data/masonryImages.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { AnimatedTestimonials } from "./AnimatedTestominals.jsx";


const ImageGrid = ({ title, images, aspectRatio }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
    <h2 className="text-2xl font-semibold mb-8 text-center">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`relative ${aspectRatio}`}
          >
            <img
              src={image.img}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-lg font-semibold lg:px-3 lg:py-1">
                  {image.title}
                </h3>
                <p className="text-gray-200 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:px-3 lg:py-1">
                  {image.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function ArtHouse() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-base-content">
          Art House Collection
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Exploring the boundaries of visual storytelling through carefully
          crafted cinematographic moments
        </p>
      </motion.div>

      {/* Image Grids with new names */}
      <ImageGrid
        title="Cinematic Horizons"
        images={landscapeImages}
        aspectRatio="aspect-[16/9]"
      />

     <AnimatedTestimonials/>

      <ImageGrid
        title="Vertical Visions"
        images={portraitImages}
        aspectRatio="aspect-[3/4]"
      />

      {/* Bottom Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center mt-16"
      >
        <p className="text-gray-400 italic text-3xl">
          "Every frame tells a story, every shot captures an emotion"
        </p>
      </motion.div>

      {/* Masonry Grid */}
      <ResponsiveMasonry
        columnsCountBreakPoints={{330:1, 580:2, 720:3, 1024:4, 1280:4}}
       className=' mx-auto px-2 lg:px-4 py-16'
      >
        <Masonry gutter={"2rem"}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Masonry ${index + 1}`}
              
              style={{ borderRadius: "1.5rem" ,padding:"5px",width:"100%",height:"auto"}}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
   
    </div>
  );
}
