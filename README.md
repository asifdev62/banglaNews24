# 📰 Bangla News 24

### Your Trusted Platform for Bangla News

**Bangla News 24** is a modern, responsive Bangla news platform built with Next.js, TypeScript, Tailwind CSS, MongoDB, and Better Auth.

The platform allows users to browse the latest Bangla news, explore different news categories, read individual articles, and manage their accounts through a clean and user-friendly interface.

🌐 **Live Website:** [Bangla News 24](https://bangla-news24-kappa.vercel.app/)

📦 **GitHub Repository:** [bangla-news-24](https://github.com/asifdev62/bangla-news-24)

---

## 📸 Project Screenshot

<p align="center">
  <img
    src="./public/bangla-news-24-preview.png"
    alt="Bangla News 24 Homepage"
    width="100%"
  />
</p>

<p align="center">
  <em>Bangla News 24 — Stay informed with the latest Bangla news.</em>
</p>

> **Note:** Add your actual homepage screenshot to `public/bangla-news-24-preview.png` for the image to appear in this section.

---

## ✨ Features

- 📰 **Latest Bangla News** — Browse the latest available Bangla news.
- 🔥 **Popular News** — Explore popular and most-read news.
- 📂 **News Categories** — Browse news by category.
- 📖 **News Details** — Read individual news articles.
- 🔐 **User Authentication** — Sign up and sign in using Better Auth.
- 👤 **User Profile** — Access your personal profile.
- ✏️ **Profile Management** — Manage profile information.
- 🔒 **Protected Routes** — Restrict access to authenticated user pages.
- 🗄️ **MongoDB Integration** — Store authentication and user-related data.
- 🌐 **BBC Bangla Integration** — Retrieve news data from BBC Bangla.
- 🔔 **Toast Notifications** — Display feedback for user interactions.
- 📱 **Responsive Design** — Works across mobile, tablet, and desktop devices.
- ⚡ **Next.js Performance** — Built with Next.js for a modern web experience.

---

## 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | Building interactive user interfaces |
| TypeScript | Type-safe development |
| Tailwind CSS | Styling and responsive design |
| MongoDB | Database integration |
| Better Auth | Authentication and session management |
| REST API | Communication with API endpoints |
| BBC Bangla | News data source |
| Vercel | Application deployment |
| Git & GitHub | Version control and source code management |

---

## 📦 Dependencies

The project uses npm to manage its dependencies.

### Main Dependencies

The following packages may be used by the application, depending on your current implementation.

| Package | Purpose |
|---|---|
| `next` | Next.js framework |
| `react` | User interface library |
| `react-dom` | React DOM rendering |
| `typescript` | TypeScript support |
| `tailwindcss` | Styling and responsive layouts |
| `mongodb` | MongoDB database driver |
| `better-auth` | Authentication and session management |

### Development Dependencies

Common development tools may include:

- `eslint` — Code quality and linting.
- `eslint-config-next` — Next.js linting configuration.
- `@types/node` — Node.js type definitions.
- `@types/react` — React type definitions.
- `@types/react-dom` — React DOM type definitions.
- `typescript` — TypeScript compiler.

> **Important:** Verify the actual package names in `package.json`. Keep only the dependencies and development tools installed in this project. If you use a toast notification library, include its actual package name as well.

To install all dependencies, run:

```bash
npm install
```

---

## 📁 Project Structure

The following structure is based on the project's described organization. Adjust it to match the actual files and folders in your repository.

```text
bangla-news-24/
├── public/
│   ├── images/
│   └── bangla-news-24-preview.png
│
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── auth/
│   │   ├── categories/
│   │   ├── components/
│   │   ├── news/
│   │   ├── profile/
│   │   ├── signIn/
│   │   ├── signUp/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── lib/
│       └── auth.tsx
│
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

> **Note:** The directory names above are illustrative. If your actual folder is named `categoryes`, for example, do not rename it just for the README. Document the actual structure unless you intentionally change the application.

---

## 🚀 Getting Started

Follow these instructions to run Bangla News 24 on your local machine.

### Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- A MongoDB database, if required by your configuration

### 1. Clone the Repository

```bash
git clone https://github.com/asifdev62/bangla-news-24.git
```

### 2. Navigate to the Project Directory

```bash
cd bangla-news-24
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project's root directory.

Add the environment variables required by your application:

```env
MONGODB_URL=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
```

**Important:**

- Replace the example values with your actual configuration.
- Use the exact environment variable names expected by your code.
- Generate a secure secret for Better Auth.
- Configure MongoDB Atlas network access and database permissions if using MongoDB Atlas.
- Never commit real database credentials or authentication secrets to GitHub.

If your project uses `MONGODB_URI` instead of `MONGODB_URL`, use `MONGODB_URI` consistently in both your code and environment configuration.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Visit the following address in your browser:

```text
http://localhost:3000
```

Your local development server should now be running.

---

## 🔐 Authentication

Bangla News 24 uses **Better Auth** for user authentication and session management.

Depending on the current implementation, authentication features include:

- User registration.
- User login.
- User logout.
- Session management.
- Protected user routes.
- User profile access.
- Profile information management.
- Google authentication, if configured.

Authentication providers and protected routes require the appropriate application configuration.

---

## 🗄️ Database

The application uses **MongoDB** for authentication and user-related data.

### Database Information

```text
Database: bangla_news_24
```

Make sure your database connection string, database user permissions, and network access settings are correctly configured.

**Security:** Do not expose your MongoDB connection string or other private credentials in your source code or public repository.

---

## 📰 News Data Integration

Bangla News 24 integrates news data from BBC Bangla.

The application uses the available news data to present articles and news-related information through its interface.

The availability and freshness of news depend on the configured data source and API implementation.

---

## 📱 Responsive Design

Bangla News 24 is designed to provide a consistent experience across different screen sizes.

- 📱 Mobile phones
- 📲 Tablets
- 💻 Laptops
- 🖥️ Desktop computers

---

## 🏗️ Production Build

To create a production build, run:

```bash
npm run build
```

After the build completes successfully, start the production server:

```bash
npm start
```

The application should then be available at:

```text
http://localhost:3000
```

---

## 🚀 Deployment

Bangla News 24 is deployed using Vercel.

🌐 **Live Website:** [https://bangla-news24-kappa.vercel.app/](https://bangla-news24-kappa.vercel.app/)

To deploy your own version:

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Verify the MongoDB connection and authentication configuration.
5. Deploy the application.
6. Test the live website.

For production, set `BETTER_AUTH_URL` to the appropriate production URL and configure all required environment variables in Vercel.

---

## 🔒 Environment Variable Security

Never upload sensitive information to GitHub.

Ensure `.env.local` is listed in `.gitignore`.

Example `.gitignore` entries:

```gitignore
node_modules/
.next/
.env
.env.local
.env.*.local
```

Keep a safe example of the required configuration in the README rather than publishing real secrets.

---

## 🔮 Future Improvements

Potential improvements for future versions include:

- 🔎 Search news by title or keyword.
- ❤️ Bookmark and save articles.
- 💬 Add comments and discussions.
- 🔔 Introduce breaking news notifications.
- 🌙 Add dark mode.
- 🧑‍💻 Build an admin dashboard.
- 📰 Integrate additional news sources.
- 📊 Add news analytics.
- 🌍 Introduce an English news section.

These are planned enhancements and may not be available in the current version.

---

## 👨‍💻 Developer

**Md Asif Ali**

Full-Stack Web Developer | BSc in Computer Science & Engineering

### Skills

JavaScript · TypeScript · React.js · Next.js · Tailwind CSS · Node.js · Express.js · MongoDB

### Connect With Me

- **GitHub Profile:** [@asifdev62](https://github.com/asifdev62)
- **Live Project:** [Bangla News 24](https://bangla-news24-kappa.vercel.app/)
- **GitHub Repository:** [bangla-news-24](https://github.com/asifdev62/bangla-news-24)

---

## 📄 License

This project is created for educational and portfolio purposes.

If you want others to reuse, modify, or distribute the code under specific terms, add an appropriate `LICENSE` file to the repository.

---

<p align="center">
  <strong>📰 Bangla News 24 — Stay Informed, Stay Updated.</strong>
</p>

<p align="center">
  Made with ❤️ by Md Asif Ali
</p>
