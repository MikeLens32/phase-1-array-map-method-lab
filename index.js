const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
//   return tutorials
// }

const titleCased = () => {
  return tutorials.map(tutorial => {
    const tutorialSplit = tutorial.split(" ");
    const tutorialWords = tutorialSplit.map(tutorialSplit => tutorialSplit.charAt(0).toUpperCase() + tutorialSplit.slice(1));
    let blahBlah = tutorialWords.join(" ");
    return blahBlah
  })
}


// const titleCased = tutorials.map( function(tutorial) {
//   return tutorials.substring(0,1) + turtorials.slice(1)
// });