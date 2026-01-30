import { getDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(){
    const db = await getDb();
    const feedbackCollection = db.collection("feedbacks");

    const feedbacks = await feedbackCollection.find().toArray();

    return NextResponse.json({feedbacks});

}

export async function POST(req){
    const body = await req.json();

    const db = await getDb();

    const newFeedback = {
        message : body.message,
        created_at : new Date()
    }

    const result = await db.collection("feedbacks").insertOne(newFeedback);

    return NextResponse.json({
        message : "created",
        insertedId : result.insertedId,
        status : 201
    });
}
