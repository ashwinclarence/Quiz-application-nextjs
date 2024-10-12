
import { connect } from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function POST(request: NextRequest) {
    try {
        let reqBody = await request.json();
        let { username, password } = reqBody;

        // validate the username and password from .env
        if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
            return NextResponse.json({message:"login successful",success:true},{status:200})
        } else {
            return NextResponse.json({message:"Invalid login credentials",success:false},{status:400})
            
        }

    } catch (error:any) {
        return NextResponse.json({message:"cannot proceed with admin login",error:error.message,success:false},{status:500})
    }
}