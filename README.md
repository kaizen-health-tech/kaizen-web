[![Netlify Status](https://api.netlify.com/api/v1/badges/56716e4a-3863-4835-94db-b97e35bfe67c/deploy-status)](https://app.netlify.com/projects/kaizenhealth/deploys)

# Kaizen Health Web

The web application for Kaizen Health - an AI-powered health assistant that helps users understand their medical information and get answers to health questions.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **AI:** OpenAI API (GPT-4o-mini)
- **Animations:** Framer Motion
- **Deployment:** Netlify

## Getting Started

### Prerequisites

- Node.js 22+
- Yarn 4+

### Installation

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

The app will be available at [localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
```

## Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server with Turbopack |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |

## Project Structure

```
├── app/                  # Next.js App Router
│   ├── (site)/          # Main site pages
│   └── api/             # API routes
├── components/          # React components
├── types/               # TypeScript type definitions
├── public/              # Static assets
└── styles/              # Global styles
```

## Live Site

[https://www.kaizenhealth.io](https://www.kaizenhealth.io)
