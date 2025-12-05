# CLI-Themed Portfolio

A unique, interactive portfolio website designed as a command-line interface with DevOps workflow animations, Windows XP-style desktop, and fun Easter eggs. Experience a nostalgic terminal environment with modern web technologies.

![Portfolio Preview](https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1200&h=630&fit=crop)

##  Features

###  Core Functionality
- **Realistic Terminal Interface**: Fully functional command-line interface with personalized prompt (`anirudhan@portfolio`)
- **Windows XP Desktop**: Nostalgic Windows XP-style loading screen and desktop environment
- **DevOps Pipeline Animation**: Authentic CI/CD pipeline visualization during loading
- **Interactive Commands**: 12+ commands including help, about, skills, projects, contact, and more
- **Draggable Windows**: Spring-animated, draggable windows displaying content as clean bash scripts
- **Real-time Clock**: Live Kolkata timezone clock in the taskbar

###  User Experience
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + K` - Clear terminal
  - `Ctrl/Cmd + L` - Focus terminal input
  - `Esc` - Close all windows
  - Arrow Up/Down - Command history navigation
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dynamic Document Titles**: Page title changes based on active window
- **Command History**: Navigate through previous commands with arrow keys
- **Auto-scroll**: Terminal automatically scrolls to latest output

###  Easter Eggs
- **Blue Screen of Death**: Triggers after 7 commands (excluding `help` and `clear`)
- **Sudo Command**: Humorous Linux sudo message
- **Whoami Command**: Fun self-identification response
- **Hidden Terminal Messages**: Discover various witty responses throughout

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

## Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/cli-portfolio.git
cd cli-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Build for production**
```bash
npm run build
# or
yarn build
```

5. **Preview production build**
```bash
npm run preview
# or
yarn preview
```

##  Available Commands

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | View information about me |
| `skills` | Explore my technical skills with clickable icons |
| `projects` | Browse my portfolio projects |
| `contact` | Get in touch via social media (clickable logos) |
| `achievements` | View my accomplishments and certifications |
| `experience` | See my work experience |
| `education` | View my educational background |
| `quote` | Get an inspiring quote |
| `whoami` | Fun self-identification command |
| `sudo` | Try using sudo (Easter egg) |
| `clear` | Clear the terminal screen |
| `close` | Close all open windows |

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

### Deploy to Netlify

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

### Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/cli-portfolio"
}
```

3. **Deploy**
```bash
npm run deploy
```

### Deploy to Cloudflare Pages

1. **Build the project**
```bash
npm run build
```

2. **Deploy**
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set build output directory: `dist`
   - Deploy!

## Project Structure

```
cli-portfolio/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── BSOD.tsx            # Blue Screen of Death
│   │   ├── Desktop.tsx         # Windows XP Desktop
│   │   ├── LoadingScreen.tsx   # DevOps pipeline loading
│   │   ├── Terminal.tsx        # Main terminal interface
│   │   └── Window.tsx          # Draggable window component
│   ├── styles/
│   │   └── globals.css  # Global styles and Tailwind config
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

##  Customization

### Update Personal Information

1. **Edit `/components/Terminal.tsx`**
   - Update the `about` command content
   - Modify skills, projects, experience, education sections
   - Change contact links (LinkedIn, GitHub, Twitter, Email)

2. **Change Terminal Prompt**
```tsx
// In Terminal.tsx, find:
<span className="text-green-400">anirudhan@portfolio</span>
// Replace 'anirudhan' with your name
```

3. **Update Clock Timezone**
```tsx
// In Desktop.tsx, find:
.toLocaleTimeString('en-IN', { 
  timeZone: 'Asia/Kolkata',
  // Change to your timezone
})
```

4. **Modify Skills**
```tsx
// In Terminal.tsx, update the skills array with your technologies
const skills = [
  { name: 'Your Skill', icon: YourIcon, link: 'your-link' },
  // Add more skills
];
```

5. **Add/Remove Commands**
```tsx
// In Terminal.tsx handleSubmit function, add new commands:
if (input === 'yourcommand') {
  addCommand(input, ['Your output here']);
  return;
}
```

### Customize Styling

Edit `/styles/globals.css` to change:
- Color scheme (update CSS variables)
- Typography
- Window styles
- Terminal colors

### Adjust Easter Eggs

- **BSOD Trigger**: Change the number in Terminal.tsx (currently 7 commands)
- **BSOD Duration**: Modify timeout in `/components/BSOD.tsx` (currently 5 seconds)
- **BSOD Message**: Edit the text in BSOD.tsx component

##  Troubleshooting

### Terminal not responding
- Press `Ctrl/Cmd + L` to focus the input
- Refresh the page if issues persist

### Windows not draggable on mobile
- This is expected behavior - mobile users can scroll within windows instead

### Build errors
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

##  License

MIT License - feel free to use this project for your own portfolio!

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

##  Author

**Anirudhan**



##  Show Your Support

Give a star if you like this project!



### Desktop View
- Windows XP Loading Screen
- Terminal Interface with Commands
- Draggable Windows
- Blue Screen of Death Easter Egg

### Mobile View
- Responsive Terminal
- Touch-optimized Interface

---

**Made with love and lots of coffee ☕**

*Experience the nostalgia of command-line interfaces with modern web technology!*
