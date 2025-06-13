import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const image = await req.formData();
    console.log('[+] image: ', image);
    if (!image) {
      return NextResponse.json(
        { error: "Invalid file type", 
          status: 400,
        }
      );
    }

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
