# NFC Resurrection

## Overview

NFC Resurrection is a themed single-page application commemorating the North Fork Championship whitewater racing event. The application is built as a full-stack web application with a React frontend and Node.js/Express backend, featuring a dramatic biblical/religious theme around whitewater racing resurrection.

The application serves as both a memorial to the discontinued championship and a newsletter signup platform for potential future events.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom CSS variables for themed colors
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: TSX for TypeScript execution in development

### Project Structure
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- `migrations/` - Database migration files (Drizzle)

## Key Components

### Database Schema
Two main entities:
- **Users**: Basic user authentication with username/password
- **Newsletters**: Email subscription tracking with timestamps

### API Endpoints
- `POST /api/newsletter/subscribe` - Newsletter subscription with duplicate checking and themed error messages

### Frontend Pages
- **Home Page**: Single-page application with multiple themed sections:
  - Hero section with biblical theming
  - Timeline of championship history
  - Jacob's Ladder rapid description
  - Media vault/archives
  - Newsletter signup

### UI Theme
Custom color scheme with biblical/mystical theming:
- Golden highlights for divine elements
- Electric blue for water/racing elements
- Deep purple for judgment/mystical elements
- Earth brown and sacred white for natural elements

## Data Flow

1. **Newsletter Subscription Flow**:
   - User enters email in newsletter signup form
   - Frontend validates email with Zod schema
   - API checks for existing subscription
   - If new, creates newsletter record with timestamp
   - Returns themed success/error messages

2. **Static Content Rendering**:
   - All content is statically rendered
   - Images served via Unsplash API
   - Themed sections with custom CSS animations

## External Dependencies

### Frontend Dependencies
- React ecosystem (React, React DOM, React Router via Wouter)
- UI libraries (Radix UI components, Shadcn/ui, Tailwind CSS)
- Form handling (React Hook Form, Hookform Resolvers)
- Data fetching (TanStack Query)
- Utilities (class-variance-authority, clsx, date-fns)

### Backend Dependencies
- Express.js with middleware for JSON parsing and logging
- Database (Drizzle ORM, Neon Database connector)
- Session management (connect-pg-simple)
- Development tools (TSX, ESBuild for production builds)

### Development Tools
- TypeScript for type safety
- Vite for frontend development and building
- Drizzle Kit for database migrations
- ESBuild for backend production builds

## Deployment Strategy

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Development**: `npm run dev` - runs TSX server with Vite middleware
- **Production Build**: `npm run build` - builds frontend and backend
- **Production Start**: `npm run start` - runs compiled JavaScript

### Build Process
1. Frontend builds to `dist/public` using Vite
2. Backend builds to `dist/index.js` using ESBuild
3. Static assets served from built frontend
4. Database migrations applied via `npm run db:push`

### Environment Requirements
- `DATABASE_URL` environment variable for PostgreSQL connection
- Replit autoscale deployment target
- Port 5000 for local development, port 80 for external access

## Changelog
- June 22, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.