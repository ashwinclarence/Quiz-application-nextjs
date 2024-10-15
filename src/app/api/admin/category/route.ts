import { NextRequest, NextResponse } from "next/server";
import categorySchema from "@/models/category";

export async function POST(request: NextRequest) {
  try {
    let reqBody = await request.json();
    let { category } = reqBody;

    if (!category) {
      return NextResponse.json(
        { message: "Cannot find the category. category cannot be empty" },
        { status: 404 }
      );
    }
    let newCategory = new categorySchema({
      category,
    });

    await newCategory.save();

    return NextResponse.json(
      { message: "Category added successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
