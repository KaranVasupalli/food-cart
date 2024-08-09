import React from 'react';

const MyReview = ({name,review}) => {
    return (
        <>
        <div className=' w-full flex justify-center '>
            <div className=' flex flex-col w-[800px] pt-3 mt-4'>
                <h1 className=' border border-green-400 bg-green-300 px-2 text-2xl  h-[50px]'>{name}</h1>
                <p className=' border border-green-400 bg-green-200 px-3 h-16'>{review}</p>
            </div>
        </div>
        
        </>
    );
}

export default MyReview;
