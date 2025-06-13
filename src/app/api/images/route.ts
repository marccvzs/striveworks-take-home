import { NextResponse } from "next/server";

export async function GET() {
    // ideally fetching from a DB here
    const data = await fetch('https://api.slingacademy.com/v1/sample-data/photos?limit=10');

    const res = await data.json();

    // Send bad request response if data fails to fetch
    if (!res.success) {
        return NextResponse.json({ error: 'Error fetching data' }, { status: 400 } )
    }

    // Could do ETL here if needed to smooth the data before returning it

    return NextResponse.json(res);
}