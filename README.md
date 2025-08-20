# React Jobs 2025 🧑‍💻💼

A **Job Board Web Application** built with **React 19**, **Vite 7**, **TailwindCSS 4**, and **JSON Server**.  
Users can:

- ➕ Add new jobs
- ✏️ Edit existing jobs
- ❌ Delete jobs
- 📄 Browse all jobs and view a single job page

---

## 🚀 Features

- **Home Page** — quick intro and navigation
- **Jobs Page** — list of all jobs with search/filter (if implemented)
- **Single Job Page** — full job details
- **CRUD** — create, read, update, delete jobs via `json-server`
- **Routing** — React Router v7
- **UX** — toast notifications & loading spinners
- **Styling** — TailwindCSS (via `@tailwindcss/vite`)

---

## 🛠️ Tech Stack

- React 19, React DOM
- Vite (dev/build/preview)
- React Router v7
- TailwindCSS 4 (`@tailwindcss/vite`)
- React Icons, React Toastify, React Spinners
- JSON Server (mock API)

---

## ⚙️ Getting Started

```bash
# 1) Clone the repository
git clone https://github.com/your-username/react-jobs-2025.git
cd react-jobs-2025

# 2) Install dependencies
npm install

# 3) Start the mock API (JSON Server)
npm run server
# → API: http://localhost:8000
# → Jobs resource: http://localhost:8000/jobs

# 4) Start the React dev server (in a separate terminal)
npm run dev
# → App: http://localhost:5173

# 5) (Optional) Production build & local preview
npm run build
npm run preview
# → Preview: http://localhost:4173
```

---

## 📦 Available Scripts (from `package.json`)

- `npm run dev` — start Vite dev server
- `npm run build` — build the app
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint on the project
- `npm run server` — start JSON Server at `http://localhost:8000` watching `src/jobs.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "server": "json-server --watch src/jobs.json --port 8000"
  }
}
```

---

## 📌 API (JSON Server)

**Base URL:** `http://localhost:8000`

**Resources:**

- `GET /jobs` — list all jobs
- `GET /jobs/:id` — get a single job
- `POST /jobs` — create a job
- `PUT /jobs/:id` — replace a job
- `PATCH /jobs/:id` — update part of a job
- `DELETE /jobs/:id` — delete a job

**Example Job Object:**

```json
{
  "id": 1,
  "title": "Frontend Developer",
  "company": "Tech Corp",
  "location": "Remote",
  "salary": "$80,000 - $100,000",
  "description": "We are looking for a skilled frontend developer..."
}
```

> Data is stored in `src/jobs.json`. JSON Server provides CORS and REST routes out of the box.

---

## 📂 Suggested Project Structure

```
react-jobs-2025/
├─ public/
├─ src/
│  ├─ components/          # Reusable UI components
│  ├─ pages/               # Home, Jobs, JobDetails, etc.
│  ├─ routes/              # Route definitions (if separated)
│  ├─ hooks/               # Custom hooks (optional)
│  ├─ styles/              # Tailwind entry e.g. index.css (v4)
│  ├─ jobs.json            # Mock data consumed by JSON Server
│  ├─ App.jsx
│  └─ main.jsx
├─ package.json
└─ README.md
```

---

## 🧩 Integration Notes

- **API base URL**: point your fetch/axios calls to `http://localhost:8000` (e.g., `/jobs`).
- **Tailwind v4**: uses `@tailwindcss/vite`. A separate `tailwind.config.js` isn’t required unless you customize.
- **Routing**: ensure routes for `/`, `/jobs`, `/jobs/:id`, `/add` (and `/edit/:id` if editing on a separate page).

---

## 📝 License

Open-source under the **MIT License**. See `LICENSE` for details.
