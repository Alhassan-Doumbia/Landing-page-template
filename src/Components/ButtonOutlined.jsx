import React from 'react';

function ButtonOutlined({ label = 'label' }) {
  return (
    <>
      <button className='px-4 py-1 w-[150px] border-2 border-primary rounded-sm flex items-center justify-center font-semibold font-Roboto'>
        {label}
      </button>
    </>
  );
}

export default ButtonOutlined;
