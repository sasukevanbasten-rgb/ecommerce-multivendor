# E-Commerce MultiVendor Platform

A modern, scalable multi-vendor e-commerce platform built with Next.js 15 and React 19.

## Features

- 🏪 Multi-vendor support
- 🛍️ Product catalog management
- 🛒 Shopping cart functionality
- 💳 Payment processing
- 📦 Order management
- 👥 Vendor dashboard
- 📱 Responsive design

## Tech Stack

- **Frontend**: React 19, Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd ecommerce-multivendor
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Run development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint configuration
└── package.json         # Dependencies
```

## Development

### Code Style

This project uses ESLint for code quality. Run linter before committing:

```bash
npm run lint:fix
```

### TypeScript

All files are written in TypeScript. Make sure to maintain type safety throughout the project.

## Roadmap

1. Supabase Auth
2. Database users/roles
3. Produk dan kategori
4. Keranjang
5. Checkout
6. Pesanan
7. Seller management
8. Payment gateway

## Contributing

1. Create a feature branch
2. Make your changes
3. Run ESLint to check code quality
4. Submit a pull request

## License

MIT License - see LICENSE file for details
