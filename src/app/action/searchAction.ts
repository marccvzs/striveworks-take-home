'use server';

import { redirect } from "next/navigation";

export async function searchAction(prevState: any, formData: FormData) {
    // normally would santize the input and check perhaps a regex
    if (!(typeof formData.get('image') === 'string')) throw Error("Invalid input");

    const image = formData.get('image') as string;

    console.log('[+] image: ', parseInt(image, 10));

    redirect(`/image/${image}`)
}