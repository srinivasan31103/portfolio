# Srinivasan Portfolio - MERN Stack

A modern, professional portfolio website built with the MERN stack featuring stunning animations, glass morphism design, and a working contact form.

## Features

- **Modern UI/UX** - Dark theme with cyan/purple gradient accents
- **Smooth Animations** - Framer Motion powered transitions
- **Particle Background** - Interactive canvas-based particles
- **Glass Morphism** - Trendy translucent card designs
- **Responsive Design** - Works on all devices
- **Contact Form** - MongoDB storage + email notifications
- **Type Animation** - Dynamic role typing effect

## Tech Stack

### Frontend
- React 18 + Vite
- Framer Motion (animations)
- React Icons
- React Toastify (notifications)
- Axios (API calls)

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Nodemailer (email)
- CORS enabled

## Project Structure

```
portfolio-mern/
├── backend/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── public/
    │   └── profile.jpg (add your image)
    ├── src/
    │   ├── components/
    │   │   ├── Navbar.jsx/css
    │   │   ├── Hero.jsx/css
    │   │   ├── Services.jsx/css
    │   │   ├── Education.jsx
    │   │   ├── Experience.jsx
    │   │   ├── Timeline.css
    │   │   ├── Projects.jsx/css
    │   │   ├── Contact.jsx/css
    │   │   ├── Footer.jsx/css
    │   │   ├── ParticleBackground.jsx/css
    │   │   └── ScrollToTop.jsx/css
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    └── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### Installation

1. **Clone and navigate:**
   ```bash
   cd portfolio-mern
   ```

2. **Setup Backend:**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI and email credentials
   npm run dev
   ```

3. **Setup Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Add your profile image:**
   - Place `profile.jpg` in `frontend/public/`

5. **Visit:** http://localhost:3000

### Environment Variables

Create `backend/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Customization

### Update Your Info
Edit these files to add your information:
- `Hero.jsx` - Name, roles, description
- `Services.jsx` - Your services
- `Education.jsx` - Education history
- `Experience.jsx` - Work experience
- `Projects.jsx` - Your projects
- `Contact.jsx` - Contact details
- `Footer.jsx` - Social links

### Color Scheme
Modify colors in `index.css`:
```css
:root {
  --accent-primary: #00d4ff;
  --accent-secondary: #7c3aed;
  --accent-tertiary: #f472b6;
}
```

## Build for Production

```bash
# Frontend
cd frontend
npm run build

# Backend - use PM2 or similar
cd backend
npm start
```

## License

MIT License - Feel free to use for your portfolio!

---

**Developed by SRINIVASAN** | Full-Stack Developer
