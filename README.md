# 🐞 Issue Tracker

A responsive Issue Tracker application built with **React**, **TypeScript**, **Redux**, **React Query**, **Material UI**, and **SCSS**.

This project was developed as a frontend technical assessment with a focus on clean architecture, maintainable code, reusable components, and a good user experience.

---

# ✨ Features

## Issue Management

* View all issues
* View issue details
* Create a new issue
* Edit an existing issue
* Delete an issue with confirmation dialog

---

## Filtering

* Filter by Status
* Filter by Priority


---


## Pagination

* Server-side pagination
* Configurable page size

---

## Responsive Design

* Desktop table layout
* Mobile card layout
* Responsive navigation
* Mobile-friendly forms

---

## UI States

* Loading State
* Empty State
* Error State
* 404 Page

---

# 🛠️ Tech Stack

* React
* TypeScript
* Redux (without Redux Toolkit)
* React Query
* React Router
* Material UI
* Axios
* React Hook Form
* Zod
* JSON Server

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone <repository-url>
```

```bash
cd issue-tracker
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Start the Mock API

```bash
npx json-server db.json --port 3001
```

The API will be available at:

```
http://localhost:3001
```

---

## 4. Start the application

```bash
npm run dev
```

---

# 📁 Project Structure

```text
src
│
├── app
│   └── store
│       ├── issues
│       ├── rootReducer.ts
│       └── store.ts
│
├── components
│   ├── AppState
│   ├── Layout
│   ├── common
│   └── issue
│
├── pages
│   ├── Home
│   ├── CreateIssue
│   ├── EditIssue
│   ├── IssueDetails
│   └── NotFound
│
├── services
│   └── issue
│       ├── hooks
│       ├── issue.service.ts
│       └── types.ts
│
├── styles
│
├── utils
│
└── router
```

---

# 🧠 Architecture

The application separates **UI State** from **Server State**.

## Redux

Redux is responsible for managing global UI state:

* Filters
* Pagination
* Sorting

Using Redux for these values allows the application to keep UI behavior predictable across different components.

---

## React Query

React Query is responsible for:

* Fetching data
* Caching server responses
* Synchronizing server state
* Handling loading and error states
* Invalidating queries after mutations

This avoids duplicating API data inside Redux.

---

## API Layer

The application uses a dedicated service layer for all HTTP requests.

Responsibilities include:

* CRUD operations
* Query parameter generation
* Pagination
* Filtering
* Sorting

---

## Component Design

The project is organized around reusable components.

Examples include:

* Issue Table
* Issue Card
* Issue Form
* Filter Bar
* Confirmation Dialog
* App State

This keeps components small, reusable, and easy to maintain.

---

# 🎨 Styling

The UI is built using:

* Material UI components
* Responsive layouts

Design focuses on:

* Consistency
* Accessibility
* Responsive behavior
* Maintainability

---

# 📌 Technical Decisions

* TypeScript used throughout the project
* No usage of `any`
* Redux implemented without Redux Toolkit
* React Query used for server state management
* Axios used for API communication
* Forms built with React Hook Form and Zod
* Reusable UI components to reduce duplication
