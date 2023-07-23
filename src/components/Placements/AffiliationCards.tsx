import React from 'react';
// import issue1 from './KKK.pdf';

const AffiliationCards = ({ item }: any) => {
  return (
    <div className='mt-4 px-16'>
      <div className='primary-bg-color p-2'>
        <div className='  border border-dashed border-white py-6  text-white '>
          <div className='text-center text-xl font-bold text-white'>
            {item?.name}
          </div>
          <div className='mt-2 flex  justify-center   p-2'>
            <a
              className=' rounded-md bg-[#32727a]  p-2 '
              href='./KKK.pdf'
              target='_blank'
              // download='pdf'
              rel='noreferrer'
            >
              {' '}
              click here
            </a>
          </div>
          <div className='mt-2 flex  justify-center   p-2'>
            <a
              className=' rounded-md bg-[#32727a]  p-2 '
              href='LKCTC-2022-23.PDF'
              target='_blank'
              rel='noreferrer'
            >
              {' '}
              click here22
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliationCards;
