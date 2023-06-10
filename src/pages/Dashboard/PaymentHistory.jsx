import React from 'react';
import useEnrolledClasses from '../../hooks/useEnrolledClasses';


const PaymentHistory = () => {

    const [ history ] = useEnrolledClasses();


    return (
        <div>
            <div className="overflow-x-auto ">
                        <table className="table table-xs">
                            <thead className="font-semibold bg bg-[#0f2248] text-white h-[50px]">
                                <tr className="text-center text-lg">
                                    {/* <th className="w-[14.29%]">Student Picture</th> */}
                                    {/* <th className="w-[14.29%]">Student Name</th> */}
                                    <th className="w-[14.29%]">Student Email</th>
                                    <th className="w-[14.29%]">Date</th>
                                    <th className="w-[14.29%]">Transaction Id</th>
                                    <th className="w-[14.29%]">Price</th>
                                    <th className="w-[14.29%]">Course Name</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((paymentHistory) => (
                                    <tr key={paymentHistory._id} className="text-center text-lg">
                                        {/* <td>
                                            <img
                                                className="w-[100%] p-4 rounded-[30px]"
                                                src={paymentHistory.studentPicture}
                                                alt=""
                                            />
                                        </td> */}
                                        {/* <td className="text-[16px]">{paymentHistory.studentName}</td> */}
                                        <td className="text-[16px]">{paymentHistory.email}</td>
                                        <td className="text-[16px]">{paymentHistory.date}</td>
                                        <td className="text-[16px]">{paymentHistory.transactionId}</td>
                                        <td className="text-[16px]">{paymentHistory.price}</td>
                                        <td className="text-[16px]">{paymentHistory.name}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default PaymentHistory;