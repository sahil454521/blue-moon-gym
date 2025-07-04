# 🌙 Blue Moon Gym - Website Prototype

A modern, responsive website prototype for Blue Moon Gym, a premier fitness center located in Kalewadi, Pimpri-Chinchwad, Pune.

## 🏋️‍♂️ About Blue Moon Gym

Blue Moon Gym is Kalewadi's leading fitness center offering:
- **Personal Training** - One-on-one coaching tailored to your goals
- **CrossFit Workouts** - High-intensity functional movements
- **Yoga Classes** - Morning sessions for flexibility and mindfulness  
- **Zumba** - Fun dance fitness classes
- **Diet Consulting** - Personalized nutrition plans
- **Steam Bath** - Premium recovery facilities

**Location**: Near D-Mart, Kalewadi, Pimpri-Chinchwad, Pune  
**Phone**: +91 88620 38061  
**Hours**: Mon-Sat: 6:00 AM - 10:00 PM, Sunday: 7:00 AM - 8:00 PM

## 🚀 Features

### ✨ Modern Design
- **Responsive layout** that works on all devices
- **Smooth animations** and micro-interactions
- **Professional branding** with motivational messaging
- **Glass morphism effects** and modern UI elements

### 🎯 User Experience
- **Smooth scrolling navigation** between sections
- **Interactive service cards** with hover effects
- **Animated testimonials** and membership plans
- **Contact form** for lead generation
- **Mobile-responsive** hamburger menu

### 🎨 Advanced Animations
- **Scroll-triggered animations** using Intersection Observer
- **CSS keyframe animations** (bounce, pulse, float, glow)
- **3D transform effects** on cards and buttons
- **Gradient animations** and color transitions
- **Performance-optimized** animations using CSS transforms

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0 + Vite 7.0.0
- **Styling**: Modern CSS with animations and transitions
- **Animations**: CSS Keyframes + Intersection Observer API
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized with lazy loading and efficient animations

## 🚀 Live Demo

[View Live Demo](https://your-username.github.io/blue-moon-gym)

## 💻 Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/blue-moon-gym.git
cd blue-moon-gym
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
blue-moon-gym/
├── public/
│   └── vite.svg
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Styles and animations
│   ├── index.css        # Global styles
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Palette
- **Primary**: Blue (#4fc3f7) - Representing the "Blue Moon" brand
- **Secondary**: Red (#f44336) - For call-to-action buttons
- **Dark**: Navy (#1a1a2e) - For headers and text
- **Light**: Gray (#f8f9fa) - For section backgrounds

### Typography
- **Headings**: Bold, modern font stack
- **Body**: Clean, readable Arial/sans-serif
- **Special**: Gradient text effects for branding

### Animations
- **Entrance**: Fade-in and slide-up effects
- **Hover**: Scale, rotate, and glow effects
- **Background**: Floating gradient animations
- **Interactive**: Pulse and bounce effects

## 📱 Responsive Design

- **Desktop**: Full-width layout with grid systems
- **Tablet**: Adjusted spacing and font sizes
- **Mobile**: Stacked layout with hamburger navigation
- **Touch**: Optimized button sizes and interactions

## 🔧 Customization

### Updating Content
- Edit text and content in `src/App.jsx`
- Modify styles in `src/App.css`
- Update contact information and branding as needed

### Adding New Sections
1. Add the JSX structure in `App.jsx`
2. Create corresponding CSS classes in `App.css`
3. Add navigation links if needed

### Modifying Animations
- Animation keyframes are defined at the top of `App.css`
- Scroll animations use the `.animate-on-scroll` class
- Hover effects are defined per component

## 🚀 Deployment

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Build and deploy: `npm run build && npm run deploy`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import project from GitHub
2. Framework preset: Vite
3. Deploy automatically

## 📈 Performance

- **Fast loading** with Vite's optimized build
- **Efficient animations** using CSS transforms
- **Lazy loading** for scroll-triggered content
- **Optimized images** and assets
- **Minimal bundle size** with modern tooling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Designed for Blue Moon Gym, Kalewadi, Pune
- Built with modern web technologies
- Inspired by fitness industry best practices
- Optimized for user experience and conversions

## 📞 Contact

For questions about this website prototype, please contact:
- **GitHub**: [Your GitHub Profile](https://github.com/your-username)
- **Project**: [Blue Moon Gym Repository](https://github.com/your-username/blue-moon-gym)

---

**Made with ❤️ for Blue Moon Gym** - *Nothing Will Work Unless You Do!*

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
