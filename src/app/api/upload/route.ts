import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const image = form.get('image') as File;

    if (!image) {
      return NextResponse.json(
        { error: "Invalid file type", 
          status: 400,
        }
      );
    }

    // normally this image would uploaded to a DB
    // we could use an ORM like prisma or drizzle to accomplish this

    const responseFromDB = {
      name: image.name,
      type: image.type,
      size: image.size,
      id: Math.floor(Math.random() * 100) + 1
    };
    
    return NextResponse.json({ image: responseFromDB, 
      status: 200,
    });
  } catch (error) {
    console.error("Error uploading the file: ", error);

    return NextResponse.json(
      { error: "Internal Server Error", status: 500 }
    );
  }
}
