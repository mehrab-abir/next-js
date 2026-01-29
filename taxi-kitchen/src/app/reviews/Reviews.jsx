"use client"
import ReviewCard from '@/components/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './loading';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
        .then((res)=>res.json())
        .then((data)=>{
            setReviews(data.reviews);
            setLoading(false);
        });
    },[])

    if(loading) return <ReviewLoading></ReviewLoading>

    return (
      <div>
        <h1 className="text-2xl font-bold">
          Total Reviews Found ({reviews.length})
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                reviews.map((review)=>{
                    return (
                        <ReviewCard key={review.id} reviewData={review}></ReviewCard>
                    )
                })
            }
        </div>
      </div>
    );
};

export default Reviews;