# Portfolio Website

A modern portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Responsive design
- Smooth animations and transitions
- Modern UI components
- Contact form
- Project showcase
- About section
- Mobile-friendly navigation

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - Scroll animations

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── layout/         # Layout components
│   ├── home/           # Home page components
│   ├── about/          # About section components
│   ├── work/           # Work section components
│   └── contact/        # Contact section components
├── styles/             # Global styles
├── lib/                # Utility functions
└── types/              # TypeScript type definitions
```

## Customization

1. Update the content in the components to match your information
2. Add your own projects to the `WorkSection` component
3. Customize the color scheme in `tailwind.config.js`
4. Add your own images and assets

## Deployment

The site can be deployed to any platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
