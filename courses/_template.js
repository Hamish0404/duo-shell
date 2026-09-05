/* ============================================================================
   COURSE TEMPLATE — copy this file, rename it (e.g. spanish-basics.js),
   fill it in, then add the filename to courses/manifest.js.
   This file itself is NOT loaded by the app (it isn't in the manifest).
   Full reference: ADDING_CONTENT.md
   ============================================================================ */
registerCourse({
  id: "my-course",                       // unique, lowercase, no spaces — used to save progress
  title: "My Course",                    // shown on the course list and roadmap
  description: "One line about this course.",
  emoji: "📘",                           // optional, one emoji

  // Chapters appear on the roadmap top-to-bottom. Each chapter holds lessons (items).
  // Lessons unlock one after another straight through the whole course.
  // Finishing the last lesson of a chapter triggers the chapter celebration;
  // finishing the last lesson of the last chapter triggers the course celebration.
  chapters: [
    {
      id: "chapter-1",                   // unique within this course
      title: "Chapter title",            // shown on the roadmap header
      items: [
        {
          id: "lesson-1",                // unique within the WHOLE course, not just the chapter
          title: "Lesson 1",
          description: "One line shown before the learner starts.",
          xp: 10,                        // XP awarded on completion
          questions: [
            // Multiple choice — answer is the INDEX of the correct choice (0 = first)
            { type: "mcq", prompt: "Question text?", choices: ["one", "two", "three", "four"], answer: 2 },

            // True / false — answer is true or false (no quotes)
            { type: "tf", prompt: "A statement that is true or false.", answer: false },

            // Typed answer — case-insensitive, extra spaces ignored.
            // Use an array to accept several answers.
            { type: "type", prompt: "Type the answer.", answer: "answer" },
            { type: "type", prompt: "Type either accepted answer.", answer: ["colour", "color"] },

            // Any question may include an optional explanation shown after answering:
            { type: "tf", prompt: "Explanations are optional.", answer: true,
              explanation: "This text appears under the Correct / Not quite feedback." },

            // Interactive reading — one passage, several tasks. Each task counts as one
            // question (one heart, one step of the progress bar). See ADDING_CONTENT.md.
            {
              type: "reading",
              // {{1}}, {{2}}… mark word blanks. {{sentence}} marks where a whole sentence is missing.
              passage: "The {{1}} is the largest planet in the solar system. It has a {{2}} spot that is actually a giant storm. {{sentence}} It was first observed in detail by Galileo in 1610.",
              tasks: [
                // Complete the sentences: a dropdown for each numbered blank. answer = index into choices.
                { kind: "blanks", answers: {
                    1: { choices: ["Jupiter", "Mars", "Moon"], answer: 0 },
                    2: { choices: ["blue", "red", "green"], answer: 1 } } },
                // Complete the passage: pick the sentence that belongs at {{sentence}}.
                { kind: "sentence",
                  choices: ["The storm has raged for at least three centuries.", "Its rings are made of ice.", "It is the closest planet to the Sun."],
                  answer: 0 },
                // Highlight the answer: the learner taps words in the passage. answer must be copied
                // word-for-word from the passage (punctuation and capitals don't matter).
                { kind: "highlight", prompt: "Highlight who first observed the planet in detail.", answer: "Galileo" },
                // Identify the idea / Title the passage: ordinary multiple choice about the passage.
                { kind: "mcq", prompt: "What is the main idea?", choices: ["Jupiter is big and stormy.", "Galileo built the first telescope."], answer: 0 },
                { kind: "mcq", prompt: "Best title?", choices: ["The Giant with a Storm", "A History of Telescopes"], answer: 0 }
              ]
            }
          ]
        },
        {
          id: "lesson-2",
          title: "Lesson 2",
          description: "Another lesson.",
          xp: 10,
          questions: [
            { type: "mcq", prompt: "Another question?", choices: ["A", "B"], answer: 0 }
          ]
        }
        // ADD MORE LESSONS TO THIS CHAPTER HERE (comma after the previous lesson)
      ]
    },
    {
      id: "chapter-2",
      title: "Second chapter",
      items: [
        {
          id: "lesson-3",
          title: "Lesson 3",
          description: "First lesson of chapter 2.",
          xp: 10,
          questions: [
            { type: "tf", prompt: "Chapters can have any number of lessons.", answer: true }
          ]
        }
      ]
    }
    // ADD MORE CHAPTERS HERE (comma after the previous chapter)
  ]
});
