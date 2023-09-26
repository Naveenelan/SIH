import React, { useState, useEffect } from 'react';
import img from '../assets/6884036.jpg'
import axios from 'axios';
function Investor() {
    const [good, setgood] = useState([]);
    const [bad, setbad] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:2000/invest/items')
            .then((response) => {
                console.log(response.data);
                setgood(response.data.items1);
                setbad(response.data.items2);
                console.log(good);
                console.log(bad);
            })
            .catch(function (error) {
                alert(error.response.data)
                console.log(error);
            });

    }, []);
    return (
        <>
            <div className='flex w-screen h-screen overflow-y-hidden'>
                <div className=' w-3/5 h-full '>
                    <h1 className='absolute mt-32 ml-28 text-white'>Ministry Of Ayush</h1>
                    <img src={img} alt="" className='mt-52 ml-10 absolute h-1/2 border-2 rounded-full' />
                    <div className='h-full w-6/6 bg-[#4461F2] ' />
                </div>
                <div className='flex  w-3/5 h-4/5 items-center justify-center border-solid border-4 border-blue-500 ml-52 mt-20 mr-40 relative'>
                    <ul className='h-full w-full overflow-scroll m-12 py-12' id='scroll'>
                        <h2>GOOD:</h2><br />
                        {good.map((item) => (
                            <li key={item._id}>
                                <h3 className='para'>{item.title}</h3>
                                <p>{item.desc}</p>
                                Rating:{item.rating}
                                <hr className='w-full' />
                            </li>
                        ))}
                        <h2>BAD:</h2><br />
                        {bad.map((item) => (
                            <li key={item._id}>
                                <h3 className='para'>{item.title}</h3>
                                <p>{item.desc}</p>
                                Rating:{item.rating}
                                <hr className='w-full' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div></>


    );
}

export default Investor