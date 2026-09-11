# 🧱 Dev Stack Builder

Dev Stack is an interactive web platform designed to help developers and software architects explore, compare, and assemble their ideal technology stack for modern web applications.

## 🚀 Live Demo & Repository
- **Live Site**: https://your-deployed-site.netlify.app[cite: 2]
- **GitHub Repository**: https://github.com/your-username/B14-A05-DevStack[cite: 2]

---

## 🛠️ Built With
- **React.js** (Vite)[cite: 1, 2]
- **TypeScript**[cite: 1, 2]
- **Tailwind CSS**[cite: 2]
- **React-Toastify**[cite: 1, 2]
- **Local JSON Data Fetching**[cite: 1, 2]

---

## ✨ Core Features
1. **Interactive Tech Exploration:** Browse multiple frontend, backend, database, and tooling packages with real-time metadata, difficulty levels, and star ratings arranged in a 3-column responsive grid[cite: 2].
2. **Dynamic Stack Assembly & Prevention of Duplicates:** Add technologies directly to a personalized sidebar panel with automated duplicate protection, dynamic counters, and state-locked buttons (`✓ Added to Stack`)[cite: 1, 2].
3. **Real-time Notifications & Responsive State:** Immediate visual feedback with `react-toastify` for all user actions (adding, duplicate warnings, single removals, and clearing all)[cite: 1, 2].

---

## ❓ React Concepts & Interview Questions

### 1. What is JSX, and why is it used in React?
**Answer:** JSX stands for JavaScript XML[cite: 2]. It allows developers to write HTML-like markup directly inside JavaScript and TypeScript files[cite: 2]. It makes component templates readable, expressive, and easier to structure while retaining the full logical power of JavaScript[cite: 2].

### 2. What is the difference between props and state?
**Answer:** `props` are read-only properties passed from a parent component down to a child component to configure it (unidirectional data flow)[cite: 2]. `state` is internal data managed directly within a component that can change over time based on user interactions, triggering automatic re-renders[cite: 2].

### 3. What does the `useState` hook do, and where did you use it in this project?
**Answer:** The `useState` hook allows functional components to declare and track state variables and provides an updater function[cite: 2]. In this project, it was used to store the loaded technology list, track items added to the user's stack, manage the loading state, and toggle the mobile navigation menu[cite: 1, 2].

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
**Answer:** `useEffect` manages side effects such as data fetching, subscriptions, and DOM updates[cite: 2]. In this project, it was used with an empty dependency array (`[]`) to asynchronously `fetch()` the `technologies.json` dataset once when the component initially mounted[cite: 1, 2].

### 5. Why does every item in a `.map()` list need a unique `key` prop?
**Answer:** React's virtual DOM reconciliation process relies on the unique `key` prop to identify which items have changed, been added, or been removed[cite: 2]. It optimizes DOM updates and prevents rendering glitches across re-renders[cite: 2].

### 6. What is conditional rendering? Show one place you used it.
**Answer:** Conditional rendering is displaying distinct UI elements based on specific conditions or state evaluations[cite: 2]. In this project, it was used in `YourStack.tsx`: when `stack.length === 0`, it displays the `"Your stack is empty."` notice; otherwise, it renders the list of selected cards[cite: 1, 2].

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
**Answer:** Data is passed down from a parent to a child component via **props**[cite: 2]. To send data back up, the parent passes a callback function as a prop to the child, which the child triggers with data arguments whenever an event occurs[cite: 2].