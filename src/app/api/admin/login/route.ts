import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        let reqBody = await request.json();
        let { username, password } = reqBody;
        if (username !== process.env.ADMIN_USERNAME && password !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ message: "Invalid username and password", success: false }, { status: 404 });
        }
        return NextResponse.json({ message: "Admin login successful", success: true }, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ success:false,error:error.message }, { status: 500 });
    }
}