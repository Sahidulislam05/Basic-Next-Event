# **Next.js + TS Project Setup Guide**

### **1. Create Next.js Project with TypeScript**

```bash
npx create-next-app@latest
```

---

### **2. Clear Default Pages & Setup Layout**

- Remove contents from `app/page.tsx`.
- In `app/layout.tsx`:

---

### **3. Fix CSS Type Errors** (If Occurs)

- Create `index.d.ts` in `src` (or root):

```ts
declare module "*.css";
```

---

### **4. Install Shadcn UI Components**

- Install Shadcn

```bash
npx shadcn@latest init
```

- Add Components

```bash
npx shadcn@latest add button
```

---

### **5. Add Homepage Components**

- Create components in `app/components` or directly in `app/page.tsx`.
- Example:

```tsx
import { Button } from "@shadcn/ui";

export default function HomePage() {
  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
      <Button>Click Me</Button>
    </main>
  );
}
```

---

### **6. Install MongoDB & Setup DB Connection**

```bash
npm install mongodb
```

- Create `src/lib/mongodb.ts`:

```ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
```

---

### **7. Install bcrypt** (For Password Hashing)

```bash
npm install bcrypt
```

---

### **8. Install dotenv** (For Accessing Env Variables)

```bash
npm install dotenv
```

### **9. Setup `.env` File**

```
NODE_ENV=development
MONGODB_URI=mongodb+srv://<database_user>:<password>@cluster_name/NextEvent?
ADMIN_USERNAME=admin
ADMIN_EMAIL=admin@nextevent.com
ADMIN_PASSWORD=admin
USER_USERNAME=user
USER_EMAIL=user@nextevent.com
USER_PASSWORD=user
```

---

### **10. Create Seed Users Script**

- `scripts/seedUsers.ts`:

```ts
import "dotenv/config";

import * as bcrypt from "bcrypt";
import clientPromise from "../src/lib/mongodb";

async function seedUsers() {
  const client = await clientPromise;
  const db = client.db();

  const saltRounds = 10;

  const {
    ADMIN_USERNAME,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    USER_USERNAME,
    USER_EMAIL,
    USER_PASSWORD,
  } = process.env;

  if (
    !ADMIN_USERNAME ||
    !ADMIN_EMAIL ||
    !ADMIN_PASSWORD ||
    !USER_USERNAME ||
    !USER_EMAIL ||
    !USER_PASSWORD
  ) {
    throw new Error("Missing required environment variables");
  }

  const hashedAdminPassword = await bcrypt.hash(ADMIN_PASSWORD, saltRounds);
  const hashedUserPassword = await bcrypt.hash(USER_PASSWORD, saltRounds);

  await db.collection("users").insertMany([
    {
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      role: "ADMIN",
      password: hashedAdminPassword,
      createdAt: new Date(),
    },
    {
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      role: "USER",
      password: hashedUserPassword,
      createdAt: new Date(),
    },
  ]);

  console.log("Admin and User seeded successfully");
}

seedUsers()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });
```

---

### **11. Compile & Run Seed Script**

```bash
npx tsc scripts/seedUsers.ts
node scripts/seedUsers.js
```

- Check MongoDB for inserted users.

---
