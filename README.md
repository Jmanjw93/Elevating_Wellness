# Elevating Wellness - Home Healthcare Website

A modern, feature-rich website for Elevating Wellness home healthcare services in St. Louis, Missouri.

## Features

### 🎨 Modern Design
- Beautiful gradient animations
- Responsive mobile-first design
- Smooth transitions and hover effects
- Professional healthcare aesthetic

### ✨ Unique Features
- **AI Chat Assistant** 🤖 - 24/7 AI-powered chat widget to help users with questions
- **Service Booking System** - Easy online consultation booking
- **Service Area Map** - Interactive ZIP code checker
- **Insurance Navigation** - Help with Medicaid, Medicare, and private insurance
- **Client Testimonials** - Social proof and reviews
- **Service Showcase** - 8 different healthcare services
- **Statistics Dashboard** - Key metrics display
- **24/7 Availability** - Round-the-clock care messaging

### 🤖 AI Chat Assistant
The AI assistant can help users with:
- Service information and details
- Insurance questions (Medicaid, Medicare, private)
- Scheduling consultations
- Service area information
- Pricing and payment options
- General inquiries
- Quick action buttons for common questions

**Note:** Currently uses a rule-based system. Can be upgraded to use OpenAI API for more advanced responses.

### 🚀 Tech Stack
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **OpenAI** (optional) - For advanced AI chat capabilities

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

3. (Optional) Set up OpenAI API for advanced AI chat:
   - Copy `.env.local.example` to `.env.local`
   - Add your OpenAI API key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
elevating-wellness/
├── app/
│   ├── api/
│   │   └── chat/          # AI chat API endpoint
│   ├── book-service/      # Service booking page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── AIChatWidget.tsx   # AI chat assistant widget
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Stats.tsx          # Statistics display
│   ├── WhyChooseUs.tsx    # Features section
│   ├── ServiceArea.tsx    # Service area map
│   ├── Testimonials.tsx   # Client reviews
│   └── CTA.tsx            # Call-to-action
└── public/                # Static assets
```

## Customization

### Update Contact Information
Edit the phone number and email in:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Hero.tsx`
- `components/CTA.tsx`
- `components/AIChatWidget.tsx`

### Modify Services
Update the services array in `components/Services.tsx`

### Change Colors
Modify the gradient colors in Tailwind classes throughout components (blue-600, green-600, etc.)

### Upgrade AI Chat to OpenAI
1. Get an OpenAI API key from https://platform.openai.com
2. Add it to `.env.local`:
   ```
   OPENAI_API_KEY=your_key_here
   ```
3. Update `app/api/chat/route.ts` to use OpenAI API instead of rule-based responses

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables if using OpenAI
4. Deploy automatically

### Other Platforms
- Netlify
- Render
- AWS Amplify

## Future Enhancements

- [x] AI Chat Assistant
- [ ] Client portal with login
- [ ] Online scheduling calendar
- [ ] Live chat support (human agents)
- [ ] Insurance verification API integration
- [ ] Caregiver matching algorithm
- [ ] Mobile app
- [ ] Telehealth integration
- [ ] Payment processing
- [ ] Care plan management system
- [ ] OpenAI integration for advanced AI responses

## License

Private - Elevating Wellness
