# Elevating Wellness - Home Healthcare Website

A modern, feature-rich website for Elevating Wellness home healthcare services in St. Louis, Missouri.

## Features

### 🎨 Modern Design
- Beautiful gradient animations
- Responsive mobile-first design
- Smooth transitions and hover effects
- Professional healthcare aesthetic

### ✨ Unique Features
- **Service Booking System** - Easy online consultation booking
- **Service Area Map** - Interactive ZIP code checker
- **Insurance Navigation** - Help with Medicaid, Medicare, and private insurance
- **Client Testimonials** - Social proof and reviews
- **Service Showcase** - 8 different healthcare services
- **Statistics Dashboard** - Key metrics display
- **24/7 Availability** - Round-the-clock care messaging

### 🚀 Tech Stack
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd elevating-wellness
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
elevating-wellness/
├── app/
│   ├── book-service/    # Service booking page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── Stats.tsx       # Statistics display
│   ├── WhyChooseUs.tsx # Features section
│   ├── ServiceArea.tsx # Service area map
│   ├── Testimonials.tsx # Client reviews
│   └── CTA.tsx         # Call-to-action
└── public/             # Static assets
```

## Customization

### Update Contact Information
Edit the phone number and email in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/CTA.tsx`

### Modify Services
Update the services array in `components/Services.tsx`

### Change Colors
Modify the gradient colors in Tailwind classes throughout components (blue-600, green-600, etc.)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Render
- AWS Amplify

## Future Enhancements

- [ ] Client portal with login
- [ ] Online scheduling calendar
- [ ] Live chat support
- [ ] Insurance verification API integration
- [ ] Caregiver matching algorithm
- [ ] Mobile app
- [ ] Telehealth integration
- [ ] Payment processing
- [ ] Care plan management system

## License

Private - Elevating Wellness
