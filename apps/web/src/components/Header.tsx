import React from 'react';
import logo from 'src/images/gov_bc_logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='w-full py-2 border-b-2 bg-bcBluePrimary border-bcYellowPrimary flex justify-center'>
      <div className='w-full 2xl:w-2/3 h-full flex flex-row items-center align-center justify-between px-2 md:px-12'>
        <div className='layout-grid gap-0 h-full flex flex-row items-center align-center'>
          <Link to='/'>
            <img src={logo} alt='government of british columbia' className='h-10' />
          </Link>
          <div className='ml-7 pl-7 border-l-2 border-bcYellowPrimary'>
            <h1 className=' font-semibold tracking-wider text-white lg:text-xl md:text-xl text-sm focus:outline-none'>
              COVID-19 Symptom Checker
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};
