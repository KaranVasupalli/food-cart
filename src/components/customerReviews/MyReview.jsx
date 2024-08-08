import React from 'react';

const MyReview = ({name,review}) => {
    return (
        <>
        <div className=' w-full flex justify-center'>
            <div className=' flex flex-col w-[700px] pt-3'>
                <h1 className=' border border-slate-400 bg-slate-500 px-2 text-2xl text-red-300'>{name}</h1>
                <p className=' border border-slate-400 bg-slate-200 px-3'>{review}</p>
            </div>
        </div>
        
        </>
    );
}

export default MyReview;
