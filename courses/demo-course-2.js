/* Demo course 2 — exists to show course switching and chapter celebrations.
   Delete it (and its line in manifest.js) when you have real content. */
registerCourse({
  id: "demo-course-2",
  title: "Second Demo",
  description: "A separate course with its own roadmap and progress.",
  emoji: "🌱",
  chapters: [
    {
      id: "basics",
      title: "Basics",
      items: [
        {
          id: "intro",
          title: "Intro",
          description: "Shows that each course tracks progress independently.",
          xp: 15,
          questions: [
            { type: "tf", prompt: "Each course has its own roadmap.", answer: true,
              explanation: "Completing lessons here doesn't affect the other course." },
            { type: "mcq", prompt: "Which key submits a typed answer?", choices: ["Space", "Enter", "Tab"], answer: 1 },
            { type: "type", prompt: "Type the number of hearts you start each lesson with.", answer: ["3", "three"] }
          ]
        },
        {
          id: "sounds",
          title: "Sounds",
          description: "Finishing this one completes the chapter.",
          xp: 15,
          questions: [
            { type: "mcq", prompt: "Where do you change the volume?", choices: ["Settings ⚙", "The roadmap", "Results screen"], answer: 0 },
            { type: "tf", prompt: "Wrong answers cost a heart.", answer: true }
          ]
        }
      ]
    },
    {
      id: "finale",
      title: "Finale",
      items: [
        {
          id: "wrap-up",
          title: "Wrap-up",
          description: "Last stop — completes the course.",
          xp: 20,
          questions: [
            { type: "type", prompt: "Type the word: done", answer: "done" }
          ]
        }
      ]
    }
    // PASTE NEW CHAPTERS HERE (comma after the previous chapter)
  ]
});
