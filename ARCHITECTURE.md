# Architecture

## Overview

The project follows a **layered architecture** to separate UI, business logic, state management and API communication. The primary goal was to keep the codebase simple, maintainable and easy to extend while satisfying the assignment requirements.

```
Pages
   │
Components
   │
React Query Hooks
   │
Service Layer (Axios)
   │
JSON Server API
```

Global UI state is managed by Redux, while server state is handled by React Query.

---

## Why I didn't use Feature-Based Architecture

For large-scale applications, a feature-based structure is usually the preferred choice because it improves scalability and team collaboration.

However, this project is relatively small and centered around a single domain (Issue Management). Introducing a full feature-based architecture would have added unnecessary complexity without providing significant benefits.

Instead, I kept a simpler layered structure where responsibilities remain clearly separated:

* **pages** → Route-level screens
* **components** → Reusable UI components
* **services** → API communication
* **app/store** → Global state management
* **utils** → Shared helper functions

This keeps the project easy to navigate while still being scalable enough for the scope of this assignment.

---

## State Management Strategy

The application intentionally separates **UI State** from **Server State**.

### Redux

Redux is responsible only for application UI state that needs to be shared across multiple components:

* Filters
* Pagination
* Sorting

Keeping these values in Redux allows different parts of the application to stay synchronized and avoids prop drilling.

---

### React Query

React Query manages all server state:

* Fetching issues
* Caching API responses
* Loading & error states
* Automatic refetching
* Cache invalidation after Create, Update and Delete operations

I intentionally avoided storing API responses inside Redux to prevent duplicated state and unnecessary synchronization logic.

---

## API Layer

All HTTP requests are isolated inside the service layer.

Responsibilities include:

* CRUD operations
* Query parameter generation
* Pagination
* Filtering
* Sorting

This keeps React components focused only on rendering UI.

---

## Component Design

The UI is built from reusable components.

Examples:

* Issue Table
* Issue Cards
* Filter Bar
* Issue Form
* Confirmation Dialog
* App State (Loading / Error / Empty)

Each component has a single responsibility, making the code easier to test and maintain.

---

## Styling

Material UI is used as the primary UI library.

SCSS is used for global styles and design tokens to maintain a consistent color palette and spacing system across the application.

---

## Design Decisions

Some notable implementation decisions include:

* Redux implemented **without Redux Toolkit** as required.
* React Query used only for server state.
* Strict TypeScript with no usage of `any`.
* Axios service layer abstracts API implementation.
* Reusable form component for both Create and Edit pages.
* Responsive UI with different layouts for desktop and mobile.
* Dynamic assignee options derived from API data instead of hardcoded values to avoid duplication.

This architecture keeps responsibilities separated, minimizes duplicated state, and allows the application to scale without introducing unnecessary complexity.
