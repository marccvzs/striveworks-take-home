This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This demo took me approximately 8 hours to complete. 

Components: 

    Header - It has a simple input field in the header along with a file upload button. These components render client side due to click event nature of them. On upload, the click event calls a route hander to upload the file to an image server. The images are also stored in a database. 

Routes:
    /upload - method: POST
    /delete - method: DELETE
    /images - method: GET
    /image - method: GET

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

