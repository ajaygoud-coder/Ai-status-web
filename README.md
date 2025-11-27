# AI Status Studio - Full Project (Ready for GitHub)

This repository is a ready-to-deploy Next.js project scaffold for the AI Status Studio.
It includes:
- NextAuth authentication (placeholders)
- OpenAI integration (text)
- Image generation endpoints (placeholders for OpenAI/Replicate)
- Cloudinary signed upload example
- MongoDB templates API
- Replicate webhook handler
- Redis-backed rate limiter (optional)
- Admin template designer (UI)
- Cleanup script for Cloudinary
- Basic analytics endpoint

## How to use
1. Copy `.env.example` to `.env.local` and set values.
2. `npm install`
3. `npm run dev`
4. Visit http://localhost:3000

For deployment, push this repo to GitHub and connect to Vercel. Set environment variables on Vercel (see .env.example).
