/* Demo course 1 — placeholder content showing chapters. Safe to delete once real
   courses exist (also remove it from manifest.js). Format reference: ADDING_CONTENT.md */
registerCourse({
  id: "demo-course",
  title: "Demo Course",
  description: "Two chapters of placeholder lessons to show the roadmap.",
  emoji: "🧪",
  chapters: [
    {
      id: "ch-1",
      title: "Getting started",
      items: [
        {
          id: "test-1",
          title: "Test 1",
          description: "Placeholder lesson 1",
          xp: 10,
          questions: [
            { type: "mcq", prompt: "This is Test 1, question 1.", choices: ["A", "B", "C", "D"], answer: 0 },
            { type: "tf", prompt: "Test 1 is a placeholder lesson.", answer: true }
          ]
        },
        {
          id: "test-2",
          title: "Test 2",
          description: "Placeholder lesson 2",
          xp: 10,
          questions: [
            { type: "mcq", prompt: "This is Test 2, question 1.", choices: ["A", "B", "C", "D"], answer: 1 },
            { type: "type", prompt: "Type the word: test", answer: "test" }
          ]
        }
        // PASTE NEW LESSONS FOR THIS CHAPTER HERE (comma after the previous lesson)
      ]
    },
    {
      id: "ch-2",
      title: "Going further",
      items: [
        {
          id: "test-3",
          title: "Test 3",
          description: "First lesson of chapter 2",
          xp: 15,
          questions: [
            { type: "tf", prompt: "Finishing Test 2 unlocked this chapter.", answer: true },
            { type: "mcq", prompt: "Which chapter is this?", choices: ["Chapter 1", "Chapter 2", "Chapter 3"], answer: 1 }
          ]
        },
        {
          id: "test-4",
          title: "Test 4",
          description: "Last lesson — finishing it completes the course",
          xp: 15,
          questions: [
            { type: "type", prompt: "Type the word: finish", answer: "finish" }
          ]
        }
        // PASTE NEW LESSONS FOR THIS CHAPTER HERE (comma after the previous lesson)
      ]
    },
    {
      id: "ch-3",
      title: "Reading",
      items: [
        {
          id: "reading-1",
          title: "Waggle dance",
          description: "One passage, five tasks — the interactive reading format.",
          xp: 25,
          questions: [
            {
              type: "reading",
              passage: "Honeybees share the location of food through a behaviour known as the waggle dance. A returning forager {{1}} in a figure-of-eight pattern on the comb, and the angle of the central run tells other bees the {{2}} of the flowers relative to the sun. {{sentence}} Scientists decoded this behaviour in the 1940s, and the work later earned Karl von Frisch a Nobel Prize.",
              tasks: [
                { kind: "blanks",
                  answers: {
                    1: { choices: ["moves", "sleeps", "hides"], answer: 0 },
                    2: { choices: ["colour", "direction", "weight"], answer: 1 }
                  }
                },
                { kind: "sentence",
                  choices: [
                    "The length of the run signals how far away the food is.",
                    "Bees cannot see the colour red.",
                    "Honey is made from nectar collected over many trips."
                  ],
                  answer: 0
                },
                { kind: "highlight",
                  prompt: "Highlight the name of the behaviour honeybees use to share food locations.",
                  answer: "the waggle dance"
                },
                { kind: "mcq",
                  prompt: "Which idea is expressed in the passage?",
                  choices: [
                    "Bees communicate where food is by dancing.",
                    "Bees prefer flowers that face the sun.",
                    "Karl von Frisch invented beekeeping."
                  ],
                  answer: 0
                },
                { kind: "mcq",
                  prompt: "Choose the best title for the passage.",
                  choices: ["A Nobel Prize for Chemistry", "How Bees Point the Way to Food", "The Life Cycle of a Honeybee"],
                  answer: 1
                }
              ]
            }
          ]
        }
      ]
    }
    // PASTE NEW CHAPTERS HERE (comma after the previous chapter)
  ]
});
