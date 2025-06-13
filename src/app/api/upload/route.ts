import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const image = await req.formData();

    if (!image) {
      return NextResponse.json(
        { error: "Invalid file type", 
          status: 400,
        }
      );
    }

    // normally this image would uploaded to a DB
    // we could use an ORM like prisma or drizzle to accomplish this

    return NextResponse.json({image, 
      status: 200,
    });
  } catch (error) {
    console.error("Error uploading the file: ", error);

    return NextResponse.json(
      { error: "Internal Server Error", status: 500 }
    );
  }
}
