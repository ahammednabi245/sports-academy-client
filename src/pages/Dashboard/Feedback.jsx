import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Feedback = () => {
    const { id } = useParams();
    const [classData, setClassData] = useState(null);


    useEffect(() => {
        fetch(`http://localhost:5000/classes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setClassData(data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }, [id]);

    if (!classData) {
        return <div className="flex justify-center items-center">
            <p className="loading loading-spinner text-[#0f2248] loading-lg  my-[200px]"></p>
        </div>
    }

    return (
        <div>

            <div className='flex justify-center items-center mt-[200px] text-xl'>
                <p> {classData.feedback}</p>
            </div>

        </div>
    );
};

export default Feedback;
