# Next Event – Project Documentation

## 1. Project Overview

- **Project Name:** NextEvent
- **Project Type:** Event Management Web Application
- **Architecture:** Full‑stack (Frontend + Backend + Database)

NextEvent is a **simple yet realistic event management system** built to help students understand how modern web applications are structured using **Next.js App Router**, **TypeScript**, and **MongoDB**. The project demonstrates how public users can explore events while organizers can manage events through a dashboard.

---

## 2. Project Purpose

The purpose of NextEvent is to:

- Teach real‑world Next.js application architecture
- Demonstrate database‑driven applications
- Explain server‑side vs client‑side responsibilities
- Introduce CRUD operations using MongoDB
- Help learners understand scalable project structure

This project is designed for **learning, and hands on practice**.

---

## 3. Project Objectives

### Primary Objectives

- Build a fully functional event listing platform
- Implement CRUD operations for events
- Use MongoDB as a persistent data store
- Maintain full type safety with TypeScript
- Follow Next.js App Router best practices

### Learning Objectives

- Understand file‑based routing in Next.js
- Work with server components and API routes
- Design REST‑style APIs
- Structure a dashboard‑based application
- Apply clean folder organization

---

## 4. Core Features

### Public Features

- View all upcoming events
- View individual event details

### Organizer Features

- Dashboard interface
- Create new events
- View and manage existing events

---

## 5. Technology Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes (Route Handlers)
- REST‑style architecture

### Database

- MongoDB (Atlas)

### Development Tools

- Node.js
- VS Code
- Git & GitHub

---

## 6. Database Design

### Event Collection

Each event document includes:

- Event ID
- Title
- Description
- Date
- Location
- Creation timestamp

The database follows a **document‑based structure**, optimized for flexibility and readability.

---

## 7. API Endpoints (CRUD Operations)

### Base Path

```
/api
```

### 7.1 Create Event

- **Method:** POST
- **Endpoint:** /api/events
- **Purpose:** Create a new event
- **Used By:** Organizer dashboard

### 7.2 Read All Events

- **Method:** GET
- **Endpoint:** /api/events
- **Purpose:** Fetch all events
- **Used By:** Public event listing, dashboard

### 7.3 Read Single Event

- **Method:** GET
- **Endpoint:** /api/events/{id}
- **Purpose:** Fetch details of a single event
- **Used By:** Dynamic event details page

### 7.4 Update Event

- **Method:** PUT
- **Endpoint:** /api/events/{id}
- **Purpose:** Update event information
- **Used By:** Organizer (future extension)

### 7.5 Delete Event

- **Method:** DELETE
- **Endpoint:** /api/events/{id}
- **Purpose:** Remove an event
- **Used By:** Organizer (future extension)

## 8. Folder Structure Overview

- `app/` – Routing and layouts
- `app/api/` – API route handlers
- `components/` – Reusable UI components
- `lib/` – Database and utility logic
- `public/` – Static assets

This structure promotes **separation of concerns** and scalability.

---

**End of Project Documentation**
