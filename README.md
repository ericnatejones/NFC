# NFC Project - Vercel Deployment Guide

This project is configured for deployment on Vercel. It consists of a React frontend and an Express backend.

## Deployment Instructions

### Prerequisites
- A Vercel account
- Vercel CLI (optional for local testing)

### Deploying to Vercel

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect your repository to Vercel**:
   - Log in to your Vercel account
   - Click "New Project"
   - Import your repository
   - Select the repository containing this project

3. **Configure the project**:
   - Framework Preset: Select "Other"
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`

4. **Environment Variables**:
   - Add any necessary environment variables in the Vercel project settings

5. **Deploy**:
   - Click "Deploy"

### Local Development

To run the project locally:

```bash
npm install
npm run dev
```

The server will start on port 5000.

### Project Structure

- `/client`: React frontend code
- `/server`: Express backend code
- `/shared`: Shared code between frontend and backend
- `/dist`: Build output (generated during build)

## Notes

- The project uses a custom server configuration to handle both API routes and static file serving
- The `vercel.json` file configures routing for the Vercel deployment
- Backend API routes are available under the `/api` path
