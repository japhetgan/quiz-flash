const questionsArr = [
  {
    question: "What are React hooks?",
    answer:
      "React hooks are special functions in React that enable the use of state and other features in functional components, making it easier to manage component state and lifecycle.",
  },
  {
    question: "Why do we need to do cleanups when a component unmounts?",
    answer:
      "Cleanups when a component unmounts are crucial to prevent memory leaks and ensure proper clearing of resources like subscriptions or timers, maintaining a healthy application performance.",
  },
  {
    question:
      "Compare to a class component, what benefit do we get from using React Hooks?",
    answer:
      "Using React Hooks in functional components results in more concise and understandable code, allowing the utilization of state and lifecycle features without the need for class syntax.",
  },
  {
    question: "What is a state in React?",
    answer:
      "State in React is like a memory for a component, a JavaScript object holding information that controls the component's behavior and enables dynamic updates.",
  },
  {
    question: "Why does `useEffect` need an array of dependencies?",
    answer:
      "The array of dependencies in `useEffect` informs React when to rerun the effect. It prevents unnecessary re-execution and ensures the effect runs only when specified dependencies change.",
  },
  {
    question: "What do you mean by lifting state in React?",
    answer:
      "Lifting state in React involves moving the state of a component higher up the component tree, allowing multiple components to share and update the same state.",
  },
  {
    question:
      "What is `useEffect`? Explain its syntax and each argument that was passed.",
    answer:
      "`useEffect` is a hook for performing side effects in functional components. Its syntax is `useEffect(() => { /* effect code */ }, [dependencies]);`. The function inside is the effect code, and the array specifies dependencies triggering the effect.",
  },
  {
    question: "What is `useState`?",
    answer:
      "`useState` is a hook that enables functional components to have local state. It returns an array with the current state value and a function to update it.",
  },
  {
    question: "In React, what triggers a re-render? Why?",
    answer:
      "A re-render in React is triggered when the component's state or props change. React updates the component to reflect new state or prop values, ensuring UI stays in sync with the underlying data.",
  },
  {
    question: "What are React custom hooks?",
    answer:
      "In React, a custom hook is a function created to reuse and share logic between components. It promotes modular and efficient code by extracting and organizing specific pieces of functionality for reuse across the application.",
  },
];

export default questionsArr;
