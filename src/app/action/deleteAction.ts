'use server';

import { redirect } from "next/navigation";

export async function deleteAction(prevState: any, id: string) {
    
    if (!id || typeof id !== 'number') return
    
    console.log('[+] id: ', id);
    // normally a mutation of the DB would happen here
    // const res = await fetch(`http://localhost:3000/api/delete/${id}`)

    // const data = await res.json();
    redirect('http://localhost:3000/');
}