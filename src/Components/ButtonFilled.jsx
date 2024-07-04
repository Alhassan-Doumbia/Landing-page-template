import React from 'react'

function ButtonFilled({label='label'}) {
  return (
    <>
        <button className='px-4 py-2 w-[150px] bg-primary rounded-sm flex items-center justify-center text-[16px] text-slate-100 font-semibold font-Roboto '>{label}</button>
    </>
  )
}

export default ButtonFilled