# DevStack

> Discover technologies, compare them, and build your ideal development stack — all in one interactive interface.

**DevStack** is a sleek, responsive web app that helps developers explore popular tools and frameworks across categories, then curate their own personalized "stack" by picking the technologies that fit their workflow best.

---

## Features

- **Explore Technologies** — Browse a rich, categorized grid of technologies, each with an icon, difficulty level, rating, and a short description to help you decide at a glance.
- **Build Your Own Stack** — Add technologies to a live "Your Stack" panel with a single click, track your selections in real time, and remove items individually or clear them all at once.
- **Instant Feedback** — Every action (add, duplicate attempt, remove, remove all) triggers a smooth toast notification, so you always know exactly what just happened.

---

## Built With

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)

---

## Project Live Link

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-brightgreen?style=for-the-badge)](https://devstack-phi.vercel.app/)

## Project Structure

```bash
src/
├── assets/
│
├── components/ # Reusable UI components
│ ├── Navbar.tsx
│ ├── Banner.tsx
│ ├── Footer.tsx
│ ├── TechGrid/
│ │ ├── TechGrid.tsx
│ │ ├── TechCard.tsx
│ │ ├── YourStackPanel.tsx
│ │ └── StackItem.tsx
│
│
├── utils/ # Helper functions
│ └── fetchTechData.ts
```

---

## Getting Started

```bash
git clone https://github.com/farukalways/devstack.git

```

```bash
npm install

```

```bash
npm run dev
```

---

i. What is JSX, and why is it used in React?

==> JSX হলো JavaScript-এর ভেতরে HTML-এর মতো সিনট্যাক্স লেখার একটা পদ্ধতি। এর মাধ্যমে আমরা UI-এর গঠন আর তার লজিক একসাথে, একই ফাইলে লিখতে পারি — ফলে কোড পড়তে ও বুঝতে সহজ হয়।

ii. What is the difference between props and state?

==> props হলো এমন ডেটা যা parent component থেকে child component-এ পাঠানো হয় — child সেটা শুধু ব্যবহার করতে পারে, নিজে পরিবর্তন করতে পারে না। state হলো একটা component-এর নিজস্ব ডেটা, যা সে নিজেই পরিবর্তন করতে পারে।

iii. What does the useState hook do, and where did you use it in this project?

==> useState একটা component-কে নিজস্ব state মনে রাখতে ও পরিবর্তন করতে সাহায্য করে, আর state পরিবর্তন হলে UI নিজে থেকেই আপডেট হয়ে যায়। এই প্রজেক্টে techList, loading, error, আর selectedTechs — এই চারটা state useState দিয়ে তৈরি করা হয়েছে TechGrid.tsx-এ।

iv. What does the useEffect hook do, and why did you need it to load the JSON data?

==> useEffect কোনো component রেন্ডার হওয়ার পর একটা নির্দিষ্ট কাজ (side effect) চালায় — যেমন API কল করা। যেহেতু ডেটা ফেচ করা কোনো JSX রেন্ডারিং-এর অংশ নয়, তাই এটা useEffect-এর ভেতরে রেখে component প্রথমবার mount হওয়ার সাথে সাথে fetchTechData() কল করা হয়েছে।

v. Why does every item in a .map() list need a unique key prop?

==> React key দেখে বুঝতে পারে লিস্টের কোন আইটেমটা নতুন, কোনটা পুরনো, আর কোনটা সরানো হয়েছে — এতে re-render দ্রুত ও সঠিক হয়।

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

==> Conditional rendering মানে কোনো শর্তের উপর ভিত্তি করে UI-এর ভিন্ন অংশ দেখানো বা না দেখানো।

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

==> Parent, props-এর মাধ্যমে child-কে ডেটা পাঠায় । আর child যখন parent-কে কিছু জানাতে চায়, তখন parent একটা ফাংশন props হিসেবে child-কে দেয়, আর child সেই ফাংশনটা কল করে। এভাবেই child, parent-এর state আপডেট করাতে পারে।
