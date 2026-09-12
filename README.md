# Dev Stack Builder

Dev Stack is a small web app built to explore and pick different web technologies for modern projects[cite: 1]. You can browse popular frontend, backend, database, and dev tools, check their quick details, and build your own custom stack side by side.

## Links
- **Live Demo:** https://effortless-medovik-439f0a.netlify.app/
- **GitHub Repo:** https://github.com/hmohabbot-oss/B14-A05-DevStack

---

## Tech Stack
- React with TypeScript (bootstrapped with Vite)
- Tailwind CSS for layout and styling
- React-Toastify for notifications
- Native `fetch` API to load local JSON data

---

## Key Features
- **Browse Technologies:** Displays cards with tech names, difficulty levels, badges, and ratings in a clean 3-column responsive grid layout.
- **Build Your Stack:** Click "Add to Stack" to pin tools directly to a side panel. Duplicate entries are blocked automatically, and the button updates to show it's already added.
- **Easy Management:** Remove single items or wipe the entire list with a single button click.
- **User Feedback:** Clear toast alerts pop up when you add, remove, or try to re-add any tool.

---

## React Conceptual Questions

### 1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It lets us write HTML-like syntax directly inside JavaScript or TypeScript files. Instead of separating the template and the logic into different files, JSX keeps UI structure and behavior together, making components much easier to read and maintain.

### 2. What is the difference between props and state?
- **Props:** External data passed down from a parent component to a child component. Props are read-only and immutable for the child.
- **State:** Internal data managed within the component itself. When state values update, React automatically triggers a re-render of the component to refresh the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` allows functional components to store and manage their own local state. In this project, I used it inside `App.tsx` to hold the loaded technologies array, track the items added to the user's stack, and manage the loading spinner while fetching data.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` lets components handle side effects, like calling APIs, setting timers, or manually changing the DOM. I used `useEffect` with an empty dependency array (`[]`) so that the app fetches the `technologies.json` file only once right when the page first mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on the `key` prop to identify each list item in its Virtual DOM. When an item is added, removed, or reordered, keys help React figure out exactly what changed without needlessly re-rendering the entire list, keeping performance smooth.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific pieces of UI based on simple logic or state conditions. For example, in `YourStack.tsx`, I checked if `stack.length === 0`: if true, it shows an empty state message ("Your stack is empty."), but once items are selected, it renders the list of cards instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
- **Parent to Child:** The parent passes data downwards through **props**.
- **Child to Parent:** The parent passes an event handler or callback function down via props (like `onAdd` or `onRemove`). When an event happens inside the child (such as a button click), the child invokes that function and sends the needed data back up as arguments.