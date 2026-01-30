import { getDb } from "@/lib/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req,{params}){
    const {id} = params;
    const db = await getDb();

    let feedback = null;

    try{
        feedback = await db.collection("feedbacks").findOne({_id : new ObjectId(id)});
    }
    catch{
        return NextResponse.json({message : "something went wrong. Check id and other data", status : 400});
    }

    if(!feedback){
        return NextResponse.json({
            message : "not found",
            status : 404
        });
    }

    return NextResponse.json({feedback});
}