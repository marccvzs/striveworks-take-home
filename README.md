This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This demo took me approximately 8 hours to complete. This application utilizes various NextJs features,  most notably RSC (React Server Components), route handlers, and server actions.

Components: 

Header
It has a simple input field in the header along with a file upload button. These components render client side due to click event nature of them. On upload, the click event calls a route hander to upload the file to an image server. The images are also stored in a database.
The search input field works as mostly a server component. On submit a server action is fired that redirects the user to the image they input

ImageContainer:
Houses an array of JSX of ImageCards that the user will see on the homepage. This list of cards are also links to their individual pages.

ImageCard:
A reusable component to display Image information like name and title as well as the image.

Forms:
Search
Takes an input from a user and fires a server action on submit. The server action will redirect to the individual card page.

Simple
Take a click event from a user to trigger a file upload. The component will only accept images. 

Routes:
    /upload - method: POST
    /image/${id} - method: DELETE
    /images - method: GET
    /image/${name} - method: GET

I left comments where I felt useful - My last 2 - 3 commits are the zustand instantiation
Normally, I would not use a global state for this small of an application but I wanted to demonstrate that ability.
I would have kept the source of truth with the apis ideally..

I have implemented:
Upload button - mock api response
Search - individual image page
Image count
Zustand store 
Delete function - mock api response

Things I would love to add:
    Better loading states
    Update the list of images on upload
    Load more - pagination
    An actual DB instance - i wanted to implement prisma but was unsure of the 0 dependencies directive

    Proper SEO
    Extension sanitation 

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

