# **Basic TypeScript (TS) Overview – Hands-On Guide**

## **1. What is TypeScript?**

TypeScript is a **typed superset of JavaScript** that compiles to plain JavaScript.

- Adds **static typing**, **interfaces**, **enums**, and **type inference**.
- Helps catch errors during **development**, not runtime.
- Works seamlessly with Node.js, React, Next.js, and other JS frameworks.

---

## **2. Setting Up TypeScript**

```bash
# Initialize Node.js project
npm init -y

# Install TypeScript
npm install typescript --save-dev

# Create tsconfig.json
npx tsc --init
```

**Example `tsconfig.json` basic setup:**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

- `strict: true` → enables all strict type-checking options.
- `outDir` → compiled JS files location.
- `rootDir` → your source TS files location.

---

## **3. Types**

A **Type** is a way to define what kind of value a variable can hold.

```ts
// Primitive types
let name: string = "Touhid";
let age: number = 25;
let isActive: boolean = true;

// Array types
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Alice", "Bob"];

// Null & Undefined
let data: null = null;
let notAssigned: undefined = undefined;

// Any (avoid if possible)
let anything: any = "Hello";
anything = 42;
anything = true;

// Unknown (safer alternative to any)
let input: unknown;
input = 5;
input = "abc";

// Function that never returns (throws an error)
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## **4. Interfaces**

**Interfaces** define the **shape of an object**.

```ts
interface User {
  id: number;
  name: string;
  email?: string; // optional
}

const user1: User = {
  id: 1,
  name: "Touhid",
};
```

**Extending interfaces:**

```ts
interface Admin extends User {
  role: string;
}

const admin1: Admin = {
  id: 2,
  name: "Alice",
  role: "ADMIN",
};
```

---

## **5. Type Aliases**

Type aliases create a new name for a type.

```ts
type ID = string | number;

let userId: ID;
userId = 1;
userId = "abc123";

// Type alias with objects
type UserType = {
  name: string;
  age: number;
};

const user: UserType = { name: "Bob", age: 30 };
```

---

## **5. Interface vs Type**

| Feature              | Interface                 | Type                      |
| -------------------- | ------------------------- | ------------------------- |
| Object structure     | ✅ yes                    | ✅ yes                    |
| Union / Intersection | ❌ no                     | ✅ yes                    |
| Extending            | ✅ via `extends`          | ✅ via `&` (intersection) |
| Merging declarations | ✅ yes (interfaces merge) | ❌ no                     |

**Example of merging interfaces:**

```ts
interface Person {
  name: string;
}
interface Person {
  age: number;
} // merges with previous
const p: Person = { name: "Alice", age: 25 };
```

**Type alias cannot merge:**

```ts
type Person = { name: string };
type Person = { age: number }; // ❌ Error
```

---

## **6. Type Assertion**

Type assertion tells TS “I know better” about a variable type.

```ts
let value: unknown = "Hello TS";

// Method 1: using 'as'
let strLength: number = (value as string).length;

// Method 2: using angle brackets (not recommended in JSX)
let strLength2: number = (<string>value).length;
```

---

## **7. Functions**

```ts
// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Optional parameter
function greet(name: string, greeting?: string) {
  return `${greeting || "Hello"}, ${name}`;
}

// Default parameter
function multiply(a: number, b: number = 2) {
  return a * b;
}
```

---

## **8. Type Unions**

**Union types** allow a variable to hold **multiple possible types**.

```ts
// A variable can be string or number
let id: string | number;

id = 123; // ✅ valid
id = "abc"; // ✅ valid
// id = true; // ❌ Error

// Function with union type parameter
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID as string:", id.toUpperCase());
  } else {
    console.log("ID as number:", id);
  }
}

printId(101); // ID as number: 101
printId("A101"); // ID as string: A101
```

**Union with arrays:**

```ts
let mixedArray: (string | number)[] = [1, "hello", 3, "world"];
```

---

## **9. Type Intersections**

**Intersection types** combine multiple types into one. The resulting type must satisfy **all combined types**.

```ts
type User = {
  id: number;
  name: string;
};

type Employee = {
  role: string;
  department: string;
};

// Intersection of User & Employee
type Staff = User & Employee;

const staff1: Staff = {
  id: 1,
  name: "Alice",
  role: "Manager",
  department: "IT",
};
```

**Intersection with functions:**

```ts
type Logger = {
  log: (msg: string) => void;
};

type ErrorHandler = {
  handleError: (err: string) => void;
};

type AppService = Logger & ErrorHandler;

const service: AppService = {
  log: (msg) => console.log("Log:", msg),
  handleError: (err) => console.error("Error:", err),
};

service.log("Server started");
service.handleError("Connection failed");
```

---

## **10. Generics**

Generics allow reusable types for functions, arrays, or classes.

```ts
function identity<T>(arg: T): T {
  return arg;
}

let str = identity<string>("Hello");
let num = identity<number>(123);

// Generic array
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

getFirst([1, 2, 3]); // 1
```

---

## **11. Enums**

Predefined set of constant values.

```ts
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST",
}

let currentRole: Role = Role.ADMIN;
```

---

## **12. Optional Chaining & Nullish Coalescing**

```ts
const user = { name: "Alice", address: { city: "Dhaka" } };

console.log(user.address?.city); // Dhaka
console.log(user.phone ?? "No phone"); // No phone
```

---

## **13. Literal Types**

```ts
type Direction = "up" | "down" | "left" | "right";

let move: Direction;
move = "up"; // ✅ valid
move = "forward"; // ❌ Error
```

---

## **14. Tuples**

Fixed-length arrays with types:

```ts
let point: [number, number] = [10, 20];
let userInfo: [string, number, boolean] = ["Alice", 25, true];
```

---

## **12. Hands-On Tips**

1. Use **interfaces** for objects you want to extend or merge.
2. Use **type aliases** for unions, intersections, and primitive combinations.
3. Always type **function parameters** and **return values**.
4. Prefer `unknown` over `any` and **use type assertion when needed**.
5. Enable `strict: true` in `tsconfig.json` for maximum safety.

---
