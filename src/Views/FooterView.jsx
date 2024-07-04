import React from 'react'
function FooterView() {
  return (
    <>
            <footer className="footer bg-backgroundtwo w-full min-h-[200px] px-[100px] flex flex-col justify-center gap-[50px]">
                <div className='w-full h-fit flex items-center justify-between'>
                    <p className='text-secondary text-xs font-semibold font-Robto'>2023 Yourcompany</p>
                    <p id='Logo' className='font-bold text-[primary] text-2xl'>Landing</p>
                    <button className='px-4 py-2 min-w-[50px] bg-primary rounded-sm flex items-center justify-center text-[12px] text-slate-100 font-semibold font-Roboto '>Purchase Now</button>
                </div>
                <nav className='border-t-2 border-secondary min-h-[60px] flex justify-between items-center'>
                <ul className='flex text-secondary gap-7'>
                    <li className='cursor-pointer'><a href="">Home</a></li>
                    <li className='cursor-pointer'><a href="">About</a></li>
                    <li className='cursor-pointer'><a href="">Contact</a></li>
                </ul>
                </nav>

            </footer>
    </>
  )
}

export default FooterView