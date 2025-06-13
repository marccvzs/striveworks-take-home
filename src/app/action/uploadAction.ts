'use server';

type FileData = {
    size: number;
    type: string;
    name: string;
    lastModified: number;
}

export async function uploadAction(prevState: any, fileData: FileData) {
    console.log('[+] console.log: ', fileData);

}
