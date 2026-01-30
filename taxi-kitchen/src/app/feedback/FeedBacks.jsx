"use client"
import React, { useEffect, useState } from 'react';

const FeedBacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    const [newFeedback, setNewFeedback] = useState('');

    useEffect(()=>{
        fetch("http://localhost:3000/api/feedback")
        .then((res)=>res.json())
        .then((data)=>{
            setFeedbacks(data.feedbacks);
            setLoading(false);
        });
    },[])

    //post a feedback
    const handleSubmit = ()=>{
        const body = {
            message : newFeedback
        }

        fetch("http://localhost:3000/api/feedback",{
            method : 'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(body)
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.message === "created"){
                alert("Posted successfully");
            }
        })
        .catch((err)=>console.log("Post error: ",err));
    }

    if(loading){
        return <p className='text-center italic'>Loading...</p>
    }

    // console.log("Data", feedbacks);
    return (
        <div>
            <h2 className="text-2xl font-bold">Feedback found ({feedbacks.length})</h2>

            {/* map all feedbacks in ui */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                {
                    feedbacks.map((feedback)=>{
                        return (
                            <div key={feedback._id} className='border border-gray-500 p-3 rounded-lg'>
                                <p>{feedback.message}</p>
                                <p className='text-sm text-muted'>Date: {new Date(feedback.created_at).toLocaleString()}</p>
                            </div>
                        )
                    })
                }
            </div>

            {/* post a feedback */}
            <div className='mt-10'>
                <h2 className="text-xl font-bold">Write a feedback</h2>
                <div className='flex gap-2 items-center'>
                    <input type="text" className='input border border-gray-300 py-1 px-4 outline-none rounded-md' onChange={(e)=>setNewFeedback(e.target.value)}  placeholder='write your feedback...' />
                <button className='bg-blue-600 text-white cursor-pointer py-1 px-2 rounded-md' onClick={()=>handleSubmit()}>Submit</button>
                </div>
                
            </div>
           
        </div>
    );
};

export default FeedBacks;