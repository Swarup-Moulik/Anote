import React from 'react';
import { 
  MousePointer2,
  Circle, 
  Square, 
  Dot,         
  Undo2,
  Redo2 
} from 'lucide-react';

const ToolButton = ({ icon, label }) => {
  return (
    <button 
      className='p-3 rounded-lg hover:bg-gray-200 text-gray-700' 
      title={label} 
    >
      {icon}
    </button>
  );
};

const ToolBar = () => {
  return (
    <div className='w-16 flex-shrink-0 bg-white border border-gray-300 rounded-lg p-2'>
      <div className='flex flex-col gap-2'>
        <ToolButton 
          icon={<MousePointer2 size={24} />} 
          label="Select" 
        />
        <ToolButton 
          icon={<Circle size={24} />} 
          label="Circle" 
        />
        <ToolButton 
          icon={<Square size={24} />} 
          label="Rectangle" 
        />
        <ToolButton 
          icon={<Dot size={24} />} 
          label="Point" 
        />
        <div className='border-b border-gray-300 my-1'></div>
        <ToolButton 
          icon={<Undo2 size={24} />} 
          label="Undo" 
        />
        <ToolButton 
          icon={<Redo2 size={24} />} 
          label="Redo" 
        />
      </div>
    </div>
  );
};

export default ToolBar;