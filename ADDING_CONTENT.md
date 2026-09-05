# Adding content

This app is a fixed shell. **You add content by editing files in `courses/` only.**
Do not edit `index.html` to add courses, chapters, or lessons — it does not need to change.

```
index.html              ← the app (leave alone)
ADDING_CONTENT.md       ← this guide
courses/
  manifest.js           ← list of course files to load
  _template.js          ← copy this to start a new course (not loaded by the app)
  demo-course.js        ← placeholder course, delete when you have real ones
  demo-course-2.js      ← placeholder course, delete when you have real ones
```

## How content is organised

```
Course  →  Chapter  →  Lesson  →  Question
```

- A **course** is one file in `courses/`. It appears as a card on the Courses screen and has its own roadmap.
- A **chapter** is a group of lessons. It appears as a header on the roadmap with its own lessons-done count. Finishing the last lesson in a chapter plays a chapter celebration.
- A **lesson** is one node on the roadmap: a short list of questions played with 3 hearts. Lessons unlock one after another straight through the course (the first lesson of chapter 2 unlocks when the last lesson of chapter 1 is completed).
- Finishing the last lesson of the last chapter plays the (bigger) course celebration.

## Add a new course (2 steps)

1. Copy `courses/_template.js` to `courses/<your-course>.js` and fill it in.
   The file is one `registerCourse({ ... })` call — see the format below.
2. Open `courses/manifest.js` and add `"<your-course>.js"` to the `COURSE_FILES` list.

Open `index.html` in a browser. The course appears on the Courses screen.

## Add a chapter to an existing course

Open the course file and add a new object to its `chapters` array, at the comment that says
`PASTE NEW CHAPTERS HERE`. Chapters appear on the roadmap in array order.

## Add a lesson to an existing chapter

Inside that chapter, add a new object to its `items` array, at the comment that says
`PASTE NEW LESSONS`. Lessons appear in array order.

## Course format

```js
registerCourse({
  id: "spanish-basics",              // unique across all courses; lowercase, no spaces; never change it
  title: "Spanish Basics",
  description: "Greetings, numbers, and everyday phrases.",
  emoji: "🇪🇸",                       // optional
  chapters: [ /* chapters, see below */ ]
});
```

### Chapter

```js
{
  id: "greetings",                   // unique within the course
  title: "Greetings",                // shown on the roadmap header
  items: [ /* lessons, see below */ ]
}
```

A course with a single chapter can skip the wrapper and put `items: [ ... ]` directly on the
course instead of `chapters`. The roadmap then shows no chapter headers. Don't use both.

### Lesson

```js
{
  id: "hello-goodbye",               // unique within the WHOLE course (not just the chapter); never change it
  title: "Hello & goodbye",
  description: "Hola, adiós, and how are you.",
  xp: 10,                            // XP awarded when the lesson is completed
  questions: [ /* see below */ ]
}
```

### Questions

Four types are supported: `mcq`, `tf`, `type`, and `reading` (a passage with several tasks —
see its own section below). Any question may also carry an optional `explanation` string, shown
after the learner answers.

**Multiple choice** — `answer` is the zero-based index of the correct choice.

```js
{ type: "mcq", prompt: "How do you say 'thank you'?", choices: ["Hola", "Gracias", "Adiós"], answer: 1 }
```

**True / false** — `answer` is a boolean (no quotes).

```js
{ type: "tf", prompt: "'Buenos días' means 'good night'.", answer: false, explanation: "It means 'good morning'." }
```

**Typed answer** — compared case-insensitively with surrounding/duplicate spaces removed.
Use an array to accept more than one spelling.

```js
{ type: "type", prompt: "Type the Spanish for 'water'.", answer: "agua" }
{ type: "type", prompt: "Type 'grey' in American spelling.", answer: ["gray", "grey"] }
```

### Interactive reading (`type: "reading"`)

One passage with several tasks, in the style of the Duolingo English Test's Interactive Reading —
but for any topic. The learner sees the passage the whole time; the tasks come one at a time.
**Each task counts as one question**: one heart if wrong, one step of the progress bar, and it
appears separately in the "missed items" list.

```js
{
  type: "reading",
  passage: "Honeybees share the location of food through the waggle dance. A returning forager {{1}} in a figure-of-eight, and the angle of the run tells other bees the {{2}} of the flowers. {{sentence}} Scientists decoded this in the 1940s.",
  tasks: [
    { kind: "blanks", answers: {
        1: { choices: ["moves", "sleeps", "hides"], answer: 0 },
        2: { choices: ["colour", "direction", "weight"], answer: 1 } } },
    { kind: "sentence",
      choices: ["The length of the run signals the distance.", "Bees cannot see red.", "Honey is made from nectar."],
      answer: 0 },
    { kind: "highlight", prompt: "Highlight the name of the behaviour.", answer: "the waggle dance" },
    { kind: "mcq", prompt: "Which idea is expressed in the passage?", choices: ["Bees dance to share food locations.", "Bees prefer sunny flowers."], answer: 0 },
    { kind: "mcq", prompt: "Choose the best title.", choices: ["How Bees Point the Way", "A Bee's Life Cycle"], answer: 0 }
  ]
}
```

**Passage markers**

| Marker | Meaning |
|---|---|
| `{{1}}`, `{{2}}`, … | A missing word, filled by the `blanks` task. Numbers must match the keys in `answers`. |
| `{{sentence}}` | A missing sentence, filled by the `sentence` task. Use at most one. |

Markers are shown as gaps before their task, as dropdowns / a highlighted slot during it, and
filled with the correct answer after it. Tasks normally go in this order: blanks → sentence →
highlight → mcq → mcq, but any order and any subset works (a passage with just a highlight task
is fine).

**Task kinds**

| `kind` | What the learner does | Fields |
|---|---|---|
| `blanks` | Picks a word from a dropdown for every `{{n}}` blank. Correct only if all blanks are right. | `answers`: object keyed by blank number, each `{ choices: [...], answer: index }`. Optional `prompt`. |
| `sentence` | Picks the sentence that belongs at `{{sentence}}`. | `choices`, `answer` (index). Optional `prompt`. |
| `highlight` | Taps the first and last word of a phrase in the passage. | `prompt` (required), `answer`: the exact phrase copied from the passage (or an array of acceptable phrases). Capitals and punctuation are ignored, but the words must match exactly. |
| `mcq` | Ordinary multiple choice about the passage. Use for "identify the idea" and "title the passage". | `prompt` (required), `choices`, `answer` (index). |

Any task may also have an `explanation` string, shown after answering.

Tips for writing good highlight tasks: keep the answer to a short phrase (2–6 words) that appears
exactly once in the passage, and make sure it's in the passage *text*, not inside a blank the
learner hasn't filled yet (the app fills blanks with the correct words, so that still works, but
it's confusing).

## Full minimal example

```js
registerCourse({
  id: "tiny-course",
  title: "Tiny Course",
  description: "Two chapters, three lessons.",
  emoji: "🐣",
  chapters: [
    {
      id: "ch-a", title: "Chapter A",
      items: [
        { id: "a1", title: "A1", description: "First", xp: 10,
          questions: [ { type: "tf", prompt: "1 + 1 = 2", answer: true } ] },
        { id: "a2", title: "A2", description: "Second", xp: 10,
          questions: [ { type: "mcq", prompt: "2 + 2 = ?", choices: ["3", "4"], answer: 1 } ] }
      ]
    },
    {
      id: "ch-b", title: "Chapter B",
      items: [
        { id: "b1", title: "B1", description: "Last", xp: 20,
          questions: [ { type: "type", prompt: "Type: ten", answer: "ten" } ] }
      ]
    }
  ]
});
```

Completing A2 plays the chapter celebration; completing B1 plays the course celebration.

## Rules the app enforces

- Course `id`s must be unique across all files. Chapter `id`s must be unique within a course. Lesson `id`s must be unique within the whole course.
- `reading` questions: every `{{n}}` in the passage needs a matching entry in the `blanks` task's `answers` (and vice versa); `{{sentence}}` needs a `sentence` task; a `highlight` answer must appear word-for-word in the passage.
- Every chapter needs an `id`, a `title`, and at least one lesson.
- `mcq.answer` must be a valid index into `choices` (0 to `choices.length - 1`).
- `tf.answer` must be `true` or `false`.
- `type.answer` must be a string or an array of strings.
- Questions with an unknown `type` are skipped, not shown.
- Problems are listed in a yellow banner on the Courses screen and in the browser console
  (F12 → Console). If the banner appears, fix what it says.

## Things that break progress

Progress is saved in the browser against `course.id` and lesson `id`. Renaming either after
someone has used the app makes their progress for it disappear. Chapter ids are not used for
saving, so chapters can be renamed, split, or merged freely. Reordering lessons is fine
(unlocks are recomputed from completions). Deleting a lesson is fine.

## Colour schemes

Not content-related, but for completeness: the learner picks a colour scheme in ⚙ Settings.
Schemes are defined in the `THEMES` list near the top of `index.html`'s script; each is a small
set of base colours (background, surface, text, green, red, gold, blue) and the app derives the
rest. Adding a theme is one line there.

## Checklist before you finish

- [ ] The file is in `courses/` and its name is listed in `courses/manifest.js`.
- [ ] Lessons are inside `chapters[n].items`, not loose on the course (unless you deliberately used the single-chapter form).
- [ ] Every `answer` matches its question type (index / boolean / string or array).
- [ ] Commas between objects in arrays; no trailing syntax errors (a missing comma makes the whole file fail to load, and the banner will say so).
- [ ] Opened `index.html`, no yellow banner, the course shows on the Courses screen with the right chapter headers.
- [ ] Played the first lesson once. Use ⚙ → Reset progress to test the roadmap again.
