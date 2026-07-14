# Quiz App

A React quiz application with sign up/sign in, multiple subjects, and answer review with explanations.

## 🌐 Live Demo

👉 https://quiz-app-mocha-five-15.vercel.app/

## Features

- **Sign Up / Sign In** — Create an account or sign in to access quizzes
- **5 Subjects** — Web Development, JavaScript, React, Science, General Knowledge
- **Instant Feedback** — See if your answer is correct after each question
- **Results Screen** — Score percentage and breakdown
- **Review Answers** — Full review with correct answers and explanations after completing a quiz
- **Try Again** — Retake any subject quiz

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## App Flow

1. **Sign Up** — Create a new account (name, email, password)
2. **Sign In** — Log in with your credentials
3. **Choose Subject** — Pick from 5 quiz topics
4. **Take Quiz** — Answer 5 multiple-choice questions
5. **See Results** — View your score
6. **Review Answers** — Read explanations for every question

## Project Structure

```
src/
├── components/
│   ├── AuthPage.jsx       # Sign in / Sign up toggle
│   ├── SignIn.jsx
│   ├── SignUp.jsx
│   ├── SubjectSelect.jsx  # Subject picker
│   ├── Quiz.jsx
│   ├── Question.jsx
│   ├── ProgressBar.jsx
│   ├── Result.jsx
│   └── Review.jsx         # Post-quiz answer review
├── context/
│   └── AuthContext.jsx    # Auth state management
├── data/
│   └── subjects.js        # Subjects, questions & explanations
├── utils/
│   └── auth.js            # localStorage auth helpers
└── App.jsx
```

## Customizing

Edit `src/data/subjects.js` to add subjects or questions. Each question needs:

- `question` — the question text
- `options` — array of 4 choices
- `correctAnswer` — index (0–3) of the correct option
- `explanation` — explanation shown in review

## Note

Authentication uses browser localStorage (demo only). For production, use a real backend with secure password hashing.
