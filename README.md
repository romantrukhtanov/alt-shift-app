# Alt+Shift – Job Application Assistant

> A modern AI-powered text generator designed to streamline the job application process

🌐 **Live Demo:** [alt-shift-app.vercel.app](https://alt-shift-app.vercel.app)

## 📋 Overview

Alt+Shift is a modern web application that leverages OpenAI's powerful language models to help users create professional job application materials. Built with React 19 and TypeScript, this tool provides an intuitive interface for generating customized cover letters, resumes, and other application documents.

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **React Hook Form** - Performant form management
- **Zod** - Schema validation
- **Zustand** - Lightweight state management
- **React Router** - Client-side routing
- **React Toastify** - Toast notifications
- **React Responsive** - Responsive utilities

### Backend
- **Vercel Serverless Functions** - API endpoints
- **OpenAI API** - AI text generation

### Development Tools
- **ESLint** - Code linting with multiple plugins
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Run linters on staged files
- **git-cz** - Conventional commits
- **PostCSS** - CSS processing

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** >= 20.0.0
- **pnpm** >= 9.0.0

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alt-shift-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a local `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Add your OpenAI API key to the `.env` file:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

### Development

Start the development server with Vercel CLI (recommended for API routes):
```bash
pnpm run vercel:dev
```

Or use Vite dev server (frontend only):
```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building

Build the application for production:
```bash
pnpm run build
```

Preview the production build:
```bash
pnpm run preview
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm run dev` | Start Vite development server |
| `pnpm run build` | Build for production |
| `pnpm run preview` | Preview production build |
| `pnpm run vercel:dev` | Start Vercel development server (with API routes) |
| `pnpm run vercel:deploy` | Deploy to Vercel production |
| `pnpm run lint` | Run ESLint |
| `pnpm run lint:fix` | Run ESLint with auto-fix |
| `pnpm run ts` | Run TypeScript type checking |
| `pnpm run format` | Format code with Prettier |
| `pnpm run format:check` | Check code formatting |
| `pnpm run cm` | Create a conventional commit |
| `pnpm run branch` | Create a new branch with naming convention |

## 🏗 Project Structure

The project follows Feature-Sliced Design (FSD) architecture:

```
alt-shift-app/
├── api/                      # Serverless API functions
│   ├── application/          # Application-related endpoints
│   │   └── generate/         # Application generation logic
│   ├── lib/                  # Shared API utilities
│   └── utils/                # Helper functions
├── src/
│   ├── app/                  # Application initialization
│   │   ├── entrypoint/       # Entry point
│   │   ├── layout/           # App layout
│   │   └── providers/        # App providers (Router, Toast, etc.)
│   ├── features/             # Feature modules
│   │   └── applications/     # Application features
│   │       ├── generate/     # Generation feature
│   │       └── progress/     # Progress tracking
│   ├── widgets/              # Complex UI components
│   ├── shared/               # Shared utilities and components
│   └── pages/                # Page components
├── public/                   # Static assets
└── scripts/                  # Build and utility scripts
```

## 🔧 Development Workflow

### Branch Naming Convention

This project enforces a strict branch naming convention via git hooks:

```
<type>/(AS)-<issue-number>_<description>
```

**Types**: `test`, `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `ci`, `perf`, `hotfix`

**Example**: `feat/(AS)-123_add_login_feature`

Use the helper script to create branches:
```bash
pnpm run branch
```

### Commit Convention

The project uses Conventional Commits. Use the following command to create commits:
```bash
pnpm run cm
```

### Git Hooks

- **pre-commit**: Runs lint-staged, TypeScript compilation, and validates branch name

## 👤 Author

**Roman Trukhtanov**

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [OpenAI](https://openai.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Version**: 0.0.1

For questions or support, please open an issue in the repository.
