import React from 'react';
import { Plus } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='w-80 flex-shrink-0 bg-white border border-gray-300 rounded-lg p-4'> 
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-3'>
          <h3 className='text-lg font-semibold'>Labels</h3>
          <button className='flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-lg hover:bg-blue-200'>
            <Plus size={16} /> Add
          </button>
        </div>
        <div className='border rounded-lg p-2 text-gray-400'>
          Add new label...
        </div>
        <div className='flex gap-2 mt-3'>
          <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>Person</span>
          <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>Car</span>
          <span className='bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm'>Building</span>
        </div>
      </div>
      <div>
        <h3 className='text-lg font-semibold mb-3'>Annotations (3)</h3>
        <div className='space-y-2'>
          <div className='text-sm text-gray-700'>• Person</div>
          <div className='text-sm text-gray-700'>• Car</div>
          <div className='text-sm text-gray-700'>• Building</div>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;