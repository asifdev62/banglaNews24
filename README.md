# 📰 Bangla News 24

A modern Bangla news platform built with **Next.js, TypeScript, Tailwind CSS, MongoDB, and Better Auth**.

Bangla News 24 provides users with a clean and responsive interface to browse Bangla news, explore news categories, read individual articles, and manage their accounts.

## 🚀 Live Website

🔗 **Live Demo:** `(https://bangla-news24-kappa.vercel.app/)`

## 📌 Features

* 📰 Browse latest Bangla news
* 🔥 Most-read / popular news section
* 📂 Browse news by category
* 📖 Individual news details page
* 🔐 User authentication with Better Auth
* 👤 User profile
* ✏️ Profile information management
* 🔑 Sign In / Sign Up
* 🔒 Protected user routes
* 📱 Fully responsive design
* ⚡ Fast page loading with Next.js
* 🗄️ MongoDB database integration
* 🎨 Responsive UI with Tailwind CSS
* 🔔 Toast notifications
* 🌐 BBC Bangla news data integration

## 🛠️ Technologies Used

| Technology         | Purpose               |
| ------------------ | --------------------- |
| Next.js            | React framework       |
| TypeScript         | Type-safe development |
| Tailwind CSS       | Styling               |
| MongoDB            | Database              |
| Better Auth        | Authentication        |
| Next.js App Router | Routing               |
| React              | UI development        |
| Vercel             | Deployment            |

## 📁 Project Structure

```text
bangla-news-24/
├── public/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── categoryes/
│   │   ├── components/
│   │   ├── news/
│   │   ├── profile/
│   │   ├── signIn/
│   │   ├── signUp/
│   │   └── page.tsx
│   │
│   └── lib/
│       └── auth.tsx
│
├── .env.local
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/asifdev62/bangla-news-24.git
```

### 2. Go to the project directory

```bash
cd bangla-news-24
```

### 3. Install dependencies

```bash
npm install
```

### 4. Setup Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

> Never commit `.env.local` or expose your database credentials and authentication secrets.

### 5. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🔐 Authentication

Authentication is implemented using **Better Auth**.

The application supports:

* User registration
* User login
* User logout
* Session management
* Protected routes
* User profile
* Google authentication (if configured)

## 🗄️ Database

The project uses **MongoDB** for storing authentication and user-related data.

Database:

```text
bangla_news_24
```

Make sure your MongoDB Atlas network access and database user are correctly configured before running the application.

## 📱 Responsive Design

Bangla News 24 is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Laptop
* 🖥️ Desktop

## 🚀 Deployment

The application can be deployed easily using **Vercel**.

Build command:

```bash
npm run build
```

Before deploying, make sure the required environment variables are configured in your Vercel project.

## 🔒 Environment Variables

Do **not** upload sensitive values to GitHub.

Example:

```env
MONGODB_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
```

Add the actual values through your local `.env.local` file and Vercel Environment Variables.

## 🎯 Future Improvements

Some planned improvements:

* 🔎 News search
* ❤️ Bookmark / save news
* 💬 Comments
* 🔔 Breaking news notifications
* 🌙 Dark mode
* 🧑‍💻 Admin dashboard
* 📰 More news sources
* 📊 News analytics
* 🌍 English news section

## 👨‍💻 Developer

**Md Asif Ali**

Full-Stack Web Developer
BSc in Computer Science & Engineering

### Skills

```text
JavaScript
TypeScript
React
Next.js
Tailwind CSS
MongoDB
Better Auth
Git & GitHub
```

## 📄 License

This project is created for educational and portfolio purposes.

---

⭐ If you like this project, consider giving the repository a star!


