# **Day 01 Workshop Outline**

## **Next.js + TypeScript Fundamentals & Initial Setup**

---

## **Day 01 Objective**

By the end of this session, participants will:

- Understand **what Next.js is and why it’s used**
- Know the difference between **React CSR vs Next.js SSR**
- Learn **App Router & file-based routing**
- Understand **Server vs Client Components**
- Get comfortable with **TypeScript basics for React**
- Understand **project structure & conventions**
- Successfully **connect MongoDB**
- Build a **basic homepage using prebuilt components**

---

## **1️⃣ What is Next.js (App Router Overview)**

### **Topics Covered**

- Next.js is a **React framework**
- Provides:

  - Routing
  - Rendering strategies
  - API handling
  - Performance optimization

- **App Router** is the modern routing system

### **App Router Concept**

- `app/` directory
- `page.tsx` → represents a route
- `layout.tsx` → shared UI

### **Key Takeaway**

> In Next.js, **folders define routes** and **files define behavior**

---

## **2️⃣ Next.js vs React (CSR vs SSR)**

### **Conceptual Takeaway**

| React (CSR)        | Next.js                  |
| ------------------ | ------------------------ |
| Renders in browser | Can render on server     |
| Slower first load  | Faster initial load      |
| SEO challenges     | SEO-friendly             |
| Client-heavy       | Hybrid (Server + Client) |

### **Rendering Types**

- Client-Side Rendering (CSR)
- Server-Side Rendering (SSR)
- Static Rendering

### **Workshop Tip**

Use **slides here**, no coding yet.

---

## **3️⃣ File-Based Routing**

### **Topics Covered**

- Folder name = route name
- `page.tsx` = entry point
- Nested routing via folders

### **Routing Concepts**

- `/` → homepage
- `/events` → events page
- `/dashboard` → dashboard page

> No need for React Router. Routing is automatic

---

## **4️⃣ Server vs Client Components**

### **Concepts Covered**

- By default, components are **Server Components**
- Client Components are used when:

  - State
  - Effects
  - Event handlers are needed

- Why server components improve performance
- When `"use client"` is required

> Data → Server & Interaction → Client

---

## **5️⃣ TypeScript Basics for React**

### **Topics Covered**

- Why TypeScript is used
- Type safety benefits
- Prevents runtime errors

### **Basic TS Concepts**

- Type annotations
- Props typing
- Interfaces vs types
- Optional properties

---

## **6️⃣ Project Structure & Conventions**

### **Folder Structure Explanation**

```
app/
 ├─ layout.tsx
 ├─ page.tsx
 ├─ events/
 ├─ dashboard/
components/
 ├─ ui/
 ├─ shared/
lib/
 ├─ db.ts
 ├─ constants.ts
```

---

## **7️⃣ Database Connection (MongoDB)**

### **Topics Covered**

- What is MongoDB?
- Why NoSQL?
- Document-based storage
- MongoDB Atlas overview

### **Steps to Connect**

1. Create MongoDB Atlas cluster
2. Get connection string
3. Use environment variables
4. Create reusable DB connection logic
5. Handle connection reuse

> Database logic should **never live inside components**

---

## **8️⃣ Create Homepage with Prebuilt Components**

### **Homepage Sections**

- Header / Navbar
- Hero section
- Event preview cards
- Footer

### **Topics Covered**

- Component composition
- Clean UI separation
- Preparing UI for future API data

---

## **9️⃣ Day 01 Wrap-Up**

### **What Students Learned**

- ✅ What Next.js is
- ✅ How routing works
- ✅ Difference between CSR & SSR
- ✅ Server vs Client Components
- ✅ TypeScript fundamentals
- ✅ Project structure best practices
- ✅ MongoDB connection
- ✅ Homepage UI setup

### **Preview of Day 02**

- Dynamic Routes
- API routes
- Authentication
- CRUD operations
- Data fetching
- Events management

---
