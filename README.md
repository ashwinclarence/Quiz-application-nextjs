
# Quiz

Welcome to Quiz, a dynamic and fun quiz application built with Next.js, TypeScript, and MongoDB, styled with shadcn/ui, and using Axios for handling HTTP requests. Quiz allows users to challenge themselves with various quizzes, track their progress, and compete with friends.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`MONGODB_CONNECTION_STRING`

`ADMIN_USERNAME`
`ADMIN_PASSWORD`

`SMTP_HOST`
`SMTP_PORT`
`SMTP_MAIL`
`SMTP_PASSWORD`

## Tech Stack

- **Next.js:**: A powerful React framework for building the front-end.
- **TypeScript:**: Type-safe development with JavaScript.
- **MongoDB:**: Database to store user data, quiz questions, and results.
- **shadcn/ui:**:  UI components styled with Tailwind CSS for a sleek look.
- **Axios**:   For making API requests to fetch quizzes, submit answers, etc.

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

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

