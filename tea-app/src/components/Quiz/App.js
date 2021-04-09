export default function App() {
  const questions = [
    {
      questionText: "What type of tea is this?",
      answerOptions: [
        { answerText: "Loose" },
        { answerText: "Leaf" },
        { answerText: "Bagged" },
        { answerText: "Powdered" },
        { answerText: "Pre-made" },
      ],
    },
    {
      questionText: "What is this tea named?",
      answerOptions: [{ userInput: "" }],
    },
    {
      questionText: "From what supplier was this tea purchased?",
      answerOptions: [{ userInput: "" }],
    },
    {
      questionText: "What additions did you have with this tea?",
      answerOptions: [
        { answerText: "Lemon" },
        { answerText: "Milk" },
        { answerText: "Soy Milk" },
        { answerText: "Almond Milk" },
        { answerText: "Coconut Milk" },
        { answerText: "Oat Milk" },
        { answerText: "Sugar" },
        { answerText: "Raw Sugar" },
        { answerText: "Honey" },
      ],
    },
    {
      questionText: "At what temperature did you steep this tea?",
      answerOptions: [
        { answerText: "Quite Warm (150)" },
        { answerText: "Hot (165)" },
        { answerText: "Quite Hot (175)" },
        { answerText: "Steaming (185)" },
        { answerText: "Piping (200)" },
        { answerText: "Scalding (212)" },
      ],
    },
    {
      questionText: "Would you like to upload a photo to remember this tea by?",
      answerOptions: [{ answerText: "Yes" }, { answerText: "No" }],
    },
    {
      questionText:
        "Please enter any notes you would like to attach to this recipe:",
      answerOptions: [{ userInput: "" }],
    },
  ];

  return (
    <div className="app">
            {questions[""]}
          </div>
      )
}
