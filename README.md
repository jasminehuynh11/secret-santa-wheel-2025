# Secret Santa Wheel 2025 🎄🎅

A beautiful, interactive Secret Santa wheel web application for Christmas 2025 and New Year 2026. Spin the wheel to randomly assign Secret Santa partners with a festive, luxury-themed design.

## ✨ Features

- 🎡 **Interactive Spinning Wheel** - Smooth, animated wheel for random Secret Santa assignments
- 🎯 **One-to-One Assignment** - Ensures each person gets exactly one recipient (no duplicates)
- 🔒 **Private Results** - Each participant only sees their own assigned recipient
- 💾 **Persistent Assignments** - First spin results are saved and cannot be changed
- 🎨 **Luxury Christmas Theme** - Elegant color palette with deep burgundy, hunter green, and warm gold
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop devices
- ✨ **Animated Elements** - Snowflakes, smooth transitions, and festive decorations
- 👥 **Customizable Participants** - Easy to add or modify participant information

## 🚀 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Runtime**: React 18
- **Deployment**: Optimized for Vercel (works on any Next.js-compatible platform)

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/secret-santa-wheel-2025.git
   cd secret-santa-wheel-2025
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How It Works

1. Each participant selects their name from the dropdown menu
2. Click "Spin the Wheel" to receive a random Secret Santa assignment
3. The result is displayed in a modal (private to the spinner)
4. **Important**: The first spin result is final and saved - spinning again will show the same assignment
5. Each person gets exactly one unique recipient (no duplicates)

## 📁 Project Structure

```
secret-santa-wheel-2025/
├── app/                          # Next.js App Router directory
│   ├── api/                      # API routes
│   │   ├── assignment/[name]/    # Get assignment by name
│   │   └── spin/                 # Spin the wheel endpoint
│   ├── result/[name]/            # Result page (shareable link)
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main home page
├── components/                   # React components
│   ├── PersonInfo.tsx           # Person information card
│   ├── PersonSelector.tsx       # Name dropdown selector
│   ├── ResultModal.tsx          # Result display modal
│   └── WheelSpinner.tsx         # Spinning wheel component
├── data/                        # Data files
│   └── people.ts                # Participant data and types
├── lib/                         # Utility functions
│   └── assignments.ts           # Assignment logic
├── public/                      # Static assets (if any)
├── .eslintrc.json               # ESLint configuration
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## ⚙️ Configuration

### Updating Participants

Edit `data/people.ts` to modify participant information:

```typescript
{
  id: 'person-id',
  name: 'Person Name',
  aliases: ['Alias 1', 'Alias 2'],  // Optional
  gender: 'male' | 'female',
  starSign: 'Zodiac Sign',
  hint: 'Gift preferences and hints',
  avatar: '👤',  // Emoji avatar
}
```

### Customizing Party Information

Update the party details in `app/page.tsx`:

```typescript
const partyDate = "05:00 PM Sunday 28/12/2025 at N305/2 Lardelli Drive, Ryde, NSW";
const giftBudget = '$30';
```

### Styling & Colors

The luxury Christmas color palette is defined in `tailwind.config.ts`:

- **Deep Burgundy Red**: `#8B2635`
- **Hunter Green**: `#1B4332`
- **Warm Gold**: `#D4AF37`
- **Cream**: `#FFF8E7`

Modify these colors to match your theme preferences.

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Components

- **WheelSpinner**: Renders the interactive spinning wheel with participant names
- **PersonSelector**: Dropdown component for selecting participant names
- **ResultModal**: Modal dialog displaying Secret Santa assignment
- **PersonInfo**: Card component showing participant details and gift hints

## 🚀 Deployment

This project is optimized for deployment on **Vercel**, but can be deployed to any platform that supports Next.js.

### Quick Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js settings
4. Click "Deploy"

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Important Notes

- **Assignment Storage**: Assignments are stored in-memory and will reset on server restart
- **First Spin Rule**: Each participant's first spin determines their permanent assignment
- **No Duplicates**: The system ensures one-to-one assignments (each person gets one unique recipient)
- **Privacy**: Results are only visible to the person who spun the wheel

## 🎯 Event Information

- **Date & Time**: Sunday, December 28, 2025 at 5:00 PM
- **Location**: N305/2 Lardelli Drive, Ryde, NSW
- **Preparation Time**: Please arrive at 4:00 PM for cooking and preparation
- **Gift Budget**: $30 AUD
- **Participants**: 6 people

## 🤝 Contributing

This is a private project for a specific event. If you'd like to adapt it for your own use:

1. Fork the repository
2. Update participant data in `data/people.ts`
3. Customize colors and styling in `tailwind.config.ts`
4. Update party information in `app/page.tsx`
5. Deploy to your preferred platform

## 📄 License

This project is private and intended for personal use.

## 👤 Credits

Created by **@madebyJasmine12-2025**

---

Made with ❤️ for a wonderful Secret Santa celebration 🎁🎄
