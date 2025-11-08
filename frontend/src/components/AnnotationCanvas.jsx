import React from 'react';
import { ImageUp } from 'lucide-react'; 

const AnnotationCanvas = () => {
  return (
    <div className='flex-grow bg-white border border-gray-300 rounded-lg p-4'>
      <div className='flex flex-col justify-center items-center h-full border-2 border-dashed border-gray-300 rounded-lg'>
        <ImageUp size={48} className='text-gray-400 mb-4' />
        <h3 className='text-xl font-semibold text-gray-700'>No Image Loaded</h3>
        <p className='text-gray-500 mb-4'>Upload an image to start annotating</p>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default AnnotationCanvas;