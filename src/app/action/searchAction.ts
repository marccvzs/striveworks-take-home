'use server';

import { redirect } from "next/navigation";

/*
    There are number of ways to do this
    We could redirect based on valid input to a user where the component, from the server,
    will take a param and run a query to find the image by name. If the image is not
    found, the user will see a Not Found page.
*/

export async function searchAction(prevState: any, formData: FormData) {
    // normally would santize the input and check perhaps a regex
    if (!(typeof formData.get('image') === 'string')) throw Error("Invalid input");

    const image = formData.get('image') as string;

    redirect(`/image/${image}`)
}