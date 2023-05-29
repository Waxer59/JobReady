const interviewerNames = [
  'Diego',
  'Monica',
  'Luis',
  'Ana',
  'Pedro',
  'Laura',
  'Carlos',
  'María',
  'Javier',
  'Sofía',
  'Ricardo',
  'Valentina',
  'Fernando',
  'Isabella',
  'Gabriel',
  'Camila',
  'Miguel',
  'Lucía',
  'Alejandro',
  'Martina',
  'David',
  'Emma',
  'Juan',
  'Mariana',
  'Andrés',
  'Julia',
  'Daniel',
  'Paola',
  'Hugo',
  'Carolina'
]

export function createInterviewPresentation() {
  return `Welcome to this interview! My name is ${
    interviewerNames[Math.floor(Math.random() * interviewerNames.length)]
  } and I'll be interviewing you today. I'm going to ask you five technical questions about our job offer. Try to answer them to the best of your ability. When we're done I'll let you know how you did.`
}
