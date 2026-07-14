# Quiz App

A React quiz application built with Vite. Test your knowledge with 10 multiple-choice questions on web development.

## Features

- Welcome screen with quiz overview
- 10 multiple-choice questions
- Instant feedback on each answer
- Progress bar and live score tracking
- Results screen with percentage and breakdown
- Retry the quiz anytime

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:5173](http://localhost:5173) in your browser after starting the dev server.

## Project Structure

```
src/
├── components/
│   ├── Welcome.jsx      # Start screen
│   ├── Quiz.jsx         # Quiz flow manager
│   ├── Question.jsx     # Question display
│   ├── ProgressBar.jsx  # Progress indicator
│   └── Result.jsx       # Results screen
├── data/
│   └── questions.js     # Quiz questions data
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Customizing Questions

Edit `src/data/questions.js` to add, remove, or modify questions. Each question needs:

- `id` — unique number
- `question` — the question text
- `options` — array of 4 answer choices
- `correctAnswer` — index (0–3) of the correct option
