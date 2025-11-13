# Photo Gallery App 📷

A modern, responsive photo gallery application built with Next.js that fetches and displays photos from the Lorem Picsum API with infinite scroll and detailed photo views.

![Next.js](https://img.shields.io/badge/Next.js-16.0.2-black)
![React](https://img.shields.io/badge/React-19.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation & Running

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Other Commands

```bash
npm run build  # Build for production
npm start      # Run production build
npm run lint   # Run ESLint
```

---

## ✨ Features

### 📸 Photo Grid Display
- **Responsive Grid Layout**: Adapts from 1 to 4 columns based on screen size
- **Thumbnail Images**: Optimized 400x400px images for fast loading
- **Author Information**: Displayed on hover (desktop) or always visible (mobile)
- **Interactive Hover Effects**: Scale transformation and shadow effects

### ♾️ Infinite Scroll
- **Auto-loading**: Fetches more photos as you scroll down
- **Pagination**: Loads 12 photos per page
- **Loading Indicator**: Visual feedback during data fetch
- **End Detection**: Shows "No more photos" message when list ends
- **Error Handling**: Retry functionality for failed requests
- **Performance**: Prevents multiple simultaneous requests

### 🌓 Dark Mode
- **Theme Toggle**: Switch between light and dark modes
- **Persistent Preference**: Saves your theme choice to localStorage
- **System Preference**: Respects your OS color scheme on first visit
- **Smooth Transitions**: Seamless theme switching across all components

### 🖼️ Photo Detail View
- **Full-size Display**: View images at 1200x1200px resolution
- **Complete Metadata**:
  - Photo ID
  - Author name
  - Image dimensions (width × height)
  - Descriptive text
- **Action Buttons**: Download original or view full-size
- **Easy Navigation**: Back to gallery button

### 🧭 Navigation & Routing
- **Routes**:
  - `/` - Photo gallery homepage
  - `/photos/[id]` - Individual photo detail page
- **Client-side Navigation**: Fast, seamless page transitions
- **Custom 404 Page**: User-friendly error page for invalid IDs

### 🔌 API Integration
- **Lorem Picsum API**: Reliable photo source
- **Endpoints Used**:
  - List: `https://picsum.photos/v2/list?page={page}&limit={limit}`
  - Details: `https://picsum.photos/id/{id}/info`
  - Images: `https://picsum.photos/id/{id}/{width}/{height}`
- **Loading States**: Clear feedback during data fetching
- **Error Management**: User-friendly error messages

### 🎨 Responsive Design
- **Mobile-first**: Optimized for all screen sizes
- **Tailwind CSS v4**: Modern, utility-first styling
- **Smooth Animations**: Polished transitions and hover effects
- **Sticky Header**: Navigation always accessible
- **Professional UI**: Gradients, shadows, and modern aesthetics

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.2 | React framework with App Router |
| **React** | 19.2.0 | UI library |
| **TypeScript** | 5.x | Type safety and better DX |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Lorem Picsum API** | - | Photo data source |

---

## 📁 Project Structure

```
wad-ia-05/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage with photo grid
│   ├── globals.css             # Global styles
│   └── photos/
│       └── [id]/
│           ├── page.tsx        # Photo detail page (dynamic route)
│           └── not-found.tsx   # 404 error page
├── components/
│   ├── PhotoCard.tsx           # Individual photo card component
│   ├── PhotoGrid.tsx           # Grid with infinite scroll logic
│   └── LoadingSpinner.tsx      # Loading indicator component
├── types/
│   └── photo.ts                # TypeScript type definitions
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── package.json                # Dependencies and scripts
```

---

## 🎯 Key Implementation Details

### Infinite Scroll Implementation
- **Intersection Observer API**: Monitors sentinel element at page bottom
- **Trigger Threshold**: Loads more when sentinel is 10% visible
- **State Management**: 
  - `page`: Current page number
  - `loading`: Fetch in progress flag
  - `hasMore`: More photos available flag
- **Performance**: Single concurrent request limit

### Photo Card Component
```tsx
- Hover effects with CSS transforms
- Next.js Image component for optimization
- Link wrapper for navigation
- Gradient overlay on hover
```

### Photo Detail Page
```tsx
- Server-side rendering for SEO
- Split layout (desktop) / stacked (mobile)
- Image optimization with Next.js Image
- Metadata display in organized sections
```

---

## 📱 Responsive Breakpoints

| Device | Screen Width | Grid Columns |
|--------|-------------|--------------|
| **Mobile** | < 640px | 1 column |
| **Tablet** | 640px - 1024px | 2 columns |
| **Desktop** | 1024px - 1280px | 3 columns |
| **Large Desktop** | > 1280px | 4 columns |

---

## 🚀 Performance Optimizations

- ✅ **Next.js Image Component**: Automatic image optimization
- ✅ **Lazy Loading**: Images load as they enter viewport
- ✅ **Intersection Observer**: Efficient scroll detection
- ✅ **Client-side Caching**: Loaded photos stay in memory
- ✅ **Pagination**: Limited initial data load
- ✅ **Responsive Images**: Proper srcset for different devices

---

## 💡 Usage Guide

### Browsing Photos
1. Open the app at `http://localhost:3000`
2. Scroll through the photo grid
3. New photos load automatically as you reach the bottom
4. Watch for the loading spinner during fetch

### Viewing Details
1. Click on any photo card
2. View full-size image and metadata
3. Click "Download Original" to save
4. Click "View Full Size" to open in new tab
5. Use "Back to Gallery" to return

### Testing Features
- **Infinite Scroll**: Scroll down and observe auto-loading
- **Responsive Design**: Resize browser window to see grid adapt
- **Error Handling**: Visit `/photos/99999` for 404 page
- **Performance**: Notice smooth transitions and loading

---

## 🎨 UI Features

- **Hover Effects**: Images scale and show gradient overlay
- **Smooth Transitions**: CSS transitions for all interactions
- **Loading States**: Spinner indicator during data fetch
- **Error Messages**: User-friendly error displays with retry
- **Sticky Header**: Navigation bar stays visible while scrolling
- **Professional Design**: Modern gradients, shadows, and spacing

---

## 🔧 Configuration

### Next.js Image Configuration
```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'picsum.photos',
      pathname: '/**',
    },
  ],
}
```

### TypeScript Path Aliases
```json
// tsconfig.json
"paths": {
  "@/*": ["./src/*"]
}
```

---

## 🐛 Troubleshooting

### Common Issues

**Images not loading:**
- Ensure `picsum.photos` is configured in `next.config.ts`
- Check your internet connection

**Infinite scroll not working:**
- Check browser console for JavaScript errors
- Ensure Intersection Observer is supported

**TypeScript errors:**
- Run `npm install` to ensure all dependencies are installed
- Check that `@/*` path alias is configured

---

## 🚀 Future Enhancements

Potential features to add:
- 🔍 Search functionality by author or ID
- 🎯 Filter photos by author
- 📊 Sort options (newest, oldest, random)
- ⭐ Favorites/bookmarks with local storage
- 📤 Share functionality (social media)
- 🧱 Masonry layout option
- 🌓 Dark mode toggle
- 🔎 Image zoom on detail page
- 💾 Offline support with service worker
- 📱 Progressive Web App (PWA) features

---

## 🚀 Deployment

- Deploy on Vercel for full Next.js features without limitations:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

- Or connect your GitHub repo to Vercel for automatic deployments.

---

## 📄 License

This project is built for educational purposes.

---

## 🙏 Acknowledgments

- **Lorem Picsum** - For providing the free photo API
- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework

---

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Check [Lorem Picsum API Docs](https://picsum.photos/)

---

**Built with ❤️ using Next.js 16 and React 19**
