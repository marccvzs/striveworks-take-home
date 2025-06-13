import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: Promise<{ name: string}>}) {
    const { name } = await params;

    const res = await fetch(`https://api.slingacademy.com/v1/sample-data/photos/${name}`)

    const data = await res.json();

    if (!data.success) {
        return NextResponse.json({ error: 'Error fetching image' }, { status: 400 })
    }

    return NextResponse.json(data);
}