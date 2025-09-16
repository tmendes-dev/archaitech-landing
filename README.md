# 🌐 ArchAItechs Landing Page

Bilingual landing page (**Portuguese 🇧🇷 / English 🇺🇸**) for **ArchAItechs**, a consulting company specialized in **Software Architecture, Artificial Intelligence, Machine Learning, and Business Intelligence**.  
Built with **Next.js 14 (App Router)**, **TailwindCSS**, and **next-intl** for internationalization, following best practices for **SEO** and **performance**.

---

## 🚀 Tech Stack
- [Next.js 14](https://nextjs.org/) — App Router, Server Components
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/) — i18n (multi-language)
- SEO ready: per-locale metadata, OpenGraph/Twitter Cards, `sitemap.ts`, `robots.ts`
- JSON-LD (Organization + Persons)
- Contact form at `/api/contact`

---

## 📦 Project Structure
```
app/
  (marketing)/[locale]/   # Language routes (/pt, /en)
    layout.tsx            # Layout + SEO metadata
    page.tsx              # Landing Page
    messages/{pt,en}.json # Translations
  api/contact/route.ts    # Contact POST endpoint
lib/
  i18n.ts                 # i18n configuration
public/images/            # Logo and images
styles/globals.css        # Tailwind base styles
sitemap.ts                # Sitemap generation
robots.ts                 # Robots.txt rules
```

---

## 🛠️ Requirements
- Node.js 18+ (20 recommended)
- npm, pnpm or yarn

---

## ▶️ Running Locally

Clone the repository and install dependencies:

```bash
npm install
# or
pnpm install
```

Start development mode:

```bash
npm run dev
# open http://localhost:3000/pt or /en
```

Build for production:

```bash
npm run build
npm start
```

---

## 🌍 Languages
- **Portuguese** → `/pt`  
- **English** → `/en`  
Language switch available in the header.

---

## 📬 Contact Form
- **Endpoint:** `POST /api/contact`  
- Currently logs form data to console.  
- Easy to integrate with **EmailJS, Resend, SendGrid**, or CRM.

---

## 🔑 SEO & Marketing
- Per-locale metadata (title, description, OpenGraph, Twitter).  
- Automatic `sitemap.xml` and `robots.txt`.  
- JSON-LD structured data with organization and partners:  
  - [René Mendes (AI/ML/BI)](https://github.com/reneamendes)  
  - [Thomas Mendes (Architecture/Dev)](https://github.com/tmendes-dev)

---

## 📂 Deployment
Best cost-effective hosting options:
- **[Vercel](https://vercel.com/)** → recommended (free tier covers landing page, GitHub integration, free SSL).  
- **Netlify / Render / Cloudflare Pages** → alternatives.

---

## 📜 License
Internal use for ArchAItechs.
