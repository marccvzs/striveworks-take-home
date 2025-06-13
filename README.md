This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This demo took me approximately 8 hours to complete. This application utilizes various NextJs features,  most notably RSC (React Server Components), route handlers, and server actions.

Components: 

Header
It has a simple input field in the header along with a file upload button. These components render client side due to click event nature of them. On upload, the click event calls a route hander to upload the file to an image server. The images are also stored in a database.
The search input field works as mostly a server component. On submit a server action is fired that redirects the user to the image they input

Routes:
    /upload - method: POST
    /image/${id} - method: DELETE
    /images - method: GET
    /image/${name} - method: GET

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

