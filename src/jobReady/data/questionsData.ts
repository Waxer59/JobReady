interface IQuestions {
  [key: number]: {
    questionNumber: string
    exampleAnswer: string
  }
}

export const QUESTIONS: IQuestions = {
  1: {
    questionNumber: 'What is your ideal job?',
    exampleAnswer:
      'My ideal job would be one that allows me to combine my passion for technology with my creativity, where I can work in a collaborative team and have the opportunity to continuously learn and grow.'
  },
  2: {
    questionNumber: 'What are you passionate about in terms of employment?',
    exampleAnswer:
      'I am passionate about finding innovative solutions to complex problems and making a positive impact through my work. I also have a strong interest in working with diverse teams and contributing to a positive work culture.'
  },
  3: {
    questionNumber:
      'In what type of roles or industries are you most attracted to?',
    exampleAnswer:
      'I am most attracted to roles in the tech industry, particularly those that involve software development and data analysis. I also have a keen interest in the renewable energy sector and exploring ways to contribute to a more sustainable future.'
  },
  4: {
    questionNumber:
      'What aspects would you like to find in your next job to make you feel satisfied?',
    exampleAnswer:
      'To feel satisfied in my next job, I would like to find a supportive and collaborative work environment, opportunities for growth and development, challenging projects that allow me to apply my skills, and a sense of purpose in the work I do.'
  },
  5: {
    questionNumber: 'What are your areas of interest and expertise?',
    exampleAnswer:
      'My areas of interest and expertise include programming languages such as Python and JavaScript, data analysis and visualization, machine learning, and web development. I also have a strong interest in UX/UI design and creating user-friendly experiences.'
  }
}
