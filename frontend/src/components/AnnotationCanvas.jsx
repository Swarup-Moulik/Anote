import React, { useState } from 'react';
import { ImageUp } from 'lucide-react';

const AnnotationCanvas = () => {
  const [image, setImage] = useState(null);
  return (
    <div className='flex-grow bg-white border border-gray-300 rounded-lg p-4'>
      <div className='flex flex-col justify-center items-center h-full border-2 border-dashed border-gray-300 rounded-lg'>
        {image ?
          <div className='py-4'>
            <img src={URL.createObjectURL(image)} alt='Image' />
          </div>
          :
          <div>
            <ImageUp size={48} className='text-gray-400 mb-4' />
            <h3 className='text-xl font-semibold text-gray-700'>No Image Loaded</h3>
            <p className='text-gray-500 mb-4'>Upload an image to start annotating</p>
            <input type='file' id='image-upload' className='hidden' accept="image/*" onChange={(e) => setImage(e.target.files[0])}></input>
            <label htmlFor="image-upload" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">Choose Image</label>
          </div>
        }

      </div>
    </div>
  );
};

export default AnnotationCanvas;