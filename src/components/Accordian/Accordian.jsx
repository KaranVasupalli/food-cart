import React, { useState } from 'react';
import { questions } from './Accordian_data';
import MyAccordian from './MyAccordian';
import Footer from '../footer/Footer'

const Accordian = () => {
    const [data, setData] = useState(questions);
    return (
        <>
            <section>
                <h1 className=' text-center text-3xl mt-3'>FAQs</h1>
            {
                data.map((curElem) => {
                    const {id} = curElem;
                    return <MyAccordian key={id} {...curElem}/>
                })
            }
            </section>
            <Footer />
        </>
    );
}

export default Accordian;
