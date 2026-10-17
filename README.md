# 🌐 Lakshay Porwal — Personal Engineering Portfolio & Atom AI

A refined, recruiter-ready personal engineering portfolio and profile-grounded AI assistant built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Vercel Serverless Functions**.

- 🔗 **Live Website:** [https://lakshay-portfolio-q7ck.vercel.app/](https://lakshay-portfolio-q7ck.vercel.app/)
- 💻 **GitHub Repository:** [https://github.com/lakshay-porwal/lakshay-portfolio](https://github.com/lakshay-porwal/lakshay-portfolio)
- 🎓 **Education:** B.Tech Computer Science Engineering, Rajasthan Technical University (RTU), Kota (2023 – 2027) | **CGPA: 9.10 / 10**

---

## ✨ Features & Architecture

### 1. 🤖 Atom — Personal Profile AI Assistant
- **Strictly Profile-Grounded:** Answers inquiries specifically about Lakshay Porwal's background, education, projects, skills, internship, achievements, and contact channels.
- **Robust Guardrails:** Blocks out-of-scope queries (general trivia, homework coding, weather, etc.), safely refuses prompt injections, and cleanly falls back when facts are undisclosed.
- **Dual Runtime Support:**
  - **Local Development:** Handled seamlessly by Vite dev middleware (`/api/atom`).
  - **Production:** Deployed as a Vercel Serverless Function (`api/atom.js`).
  - **Deterministic Knowledge Fallback:** 100% operational out of the box with zero external API key dependencies, and automatically utilizes Google Gemini / OpenAI when configured in `.env`.
- **Coordinated Placement:** Floating **"Ask Atom"** launcher positioned directly above the floating **"Hire Me"** action in the bottom-right corner.

### 2. 🚀 Featured & Retained Engineering Projects
Interactive project gallery with responsive filtering (**All**, **Full Stack**, **AI / ML**, **Blockchain**) and case-study modals:
- **VoteChain:** Decentralized Ethereum voting platform using Solidity, Web3.js, Hardhat, and React (~25% gas optimization).
- **Garuda AI:** Full-stack conversational AI assistant with streaming responses, persistent memory, and MongoDB.
- **Recipedia:** Fast culinary search application with optimized rendering and ~30% lower search latency.
- **EagleSyncAI:** AI career intelligence and technical interview preparation workspace (React 19 + TypeScript).
- **Orbit:** Engineering team workspace and project collaboration platform (SoftSensor AI project).
- **Lumora:** Smart building analytics and energy-optimization platform.
- **AlgoChat (CHATBOT_DSA):** Educational chatbot teaching DSA concepts via structured decision-tree workflows.
- **SnapdragonAI (VibeGuard):** Edge AI predictive vibration maintenance on Qualcomm Hexagon NPU.
- **TaskFLOW & EyeExpense:** Full-stack task management and privacy-first local financial analytics.

### 3. 🎨 Authentic & Minimal Engineering Aesthetics
- Clean typography (Inter + JetBrains Mono) with balanced spacing and restrained visual hierarchy.
- **Real Portrait & Photography:** Authentic photograph of Lakshay integrated into the hero section and about section.
- **Complete Dark / Light Mode System:** Persisted in `localStorage`, respecting system color preferences, with zero flash and accessible contrast.
- **Accessible UI:** WCAG AA contrast compliance, keyboard focus rings, Escape-key dialog dismissals, and `prefers-reduced-motion` support.

---

## 🛠 Tech Stack

- **Frontend:** React 19, Vite 7, Tailwind CSS v4, Lucide Icons, React Icons
- **Backend / AI Route:** Node.js, Vercel Serverless Functions (`/api/atom`), Gemini API / OpenAI API SDK support
- **Contact & Email:** EmailJS integration
- **Deployment:** Vercel

---

## ⚙️ Environment Variables

Create a `.env` file in the project root (see `.env.example`):

```bash
# Optional: Provide Google Gemini API Key for dynamic LLM generation
GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Provide OpenAI API Key as an alternative provider
# OPENAI_API_KEY=your_openai_api_key_here
```

> **Note:** If no external API key is provided, Atom's internal verified deterministic knowledge engine handles all incoming requests accurately with zero latency and zero downtime.

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/lakshay-porwal/lakshay-portfolio.git
cd lakshay-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 🧪 Testing & Verification

```bash
# Code style and lint checks
npm run lint

# Production build test
npm run build
```

---

## 📬 Contact & Links

- 📧 **Email:** [lakshayporwal28@gmail.com](mailto:lakshayporwal28@gmail.com)
- 💼 **LinkedIn:** [https://www.linkedin.com/in/lakshay-porwal](https://www.linkedin.com/in/lakshay-porwal)
- 💻 **GitHub:** [https://github.com/lakshay-porwal](https://github.com/lakshay-porwal)
- 🏆 **GeeksforGeeks:** [https://www.geeksforgeeks.org/user/lakshaypo8y3i/](https://www.geeksforgeeks.org/user/lakshaypo8y3i/)
