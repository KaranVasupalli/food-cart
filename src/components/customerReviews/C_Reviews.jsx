import React, {useState} from 'react';
import { reviews } from './C_Reviews_Data';
import MyReview from './MyReview';


const C_Reviews = () => {
    const [data, setData] = useState(reviews);
    return (
        <>
            <section>
                {
                    data.map((currElem) => {
                        const {id} = currElem;
                        return<MyReview key={id} {...currElem}/>
                    })
                }
            </section>
        </>
    );
}

export default C_Reviews;
