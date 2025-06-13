'use server';

import { redirect } from "next/navigation";

export async function deleteAction(prevState: any, name: string) {
    
    if (!name || typeof name !== 'string') throw Error('Incorrect id.')
    
    // normally a mutation of the DB would happen here
    const res = await fetch(`http://localhost:3000/api/image/${name}`, {
        method: 'DELETE'
    });

    const data = await res.json();

    if (data?.status !== 200) throw Error('Failed to delete image.')

    redirect('/');
}