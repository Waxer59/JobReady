<p align="center">
  <img src="./docs/img/image.jpg" height="250px"/>
</p>

# JobReady

JobReady is a platform that helps you find your ideal job. By connecting you to the well-known job platform InfoJobs , you can discover a wide variety of job offers. In addition, JobReady offers you the possibility to simulate interviews to evaluate your preparation and ensure success in real interviews. Find your ideal job and get ready to stand out with JobReady.

### How does it work?

First, you will be asked a few questions to determine which job is the best fit for you. This will be followed by a mock interview with 7 questions. At the end, you will receive a score and suggestions for improvement. Discover the ideal job for you and hone your interviewing skills with JobReady, your partner on the road to career success.

### Hackathon

This project participated in the [Infojobs](https://www.infojobs.net/) Hackathon hosted by the streamer [Midudev](https://www.twitch.tv/midudev) and was one of the 15 selected!

Don't miss [the presentation of this project made by Midudev](https://clips.twitch.tv/FreezingSpikyCheesecakeLitFam-TYIIIdsQkeF2Jb1F)! Check it out!

### How to run the project

1. Install all the dependencies with the command:

```bash
yarn
```

2. Fill all the fields of the file `.template.env` and then rename it to `.env`
3. Having installed and configured the [Netlify CLI](https://docs.netlify.com/cli/get-started/) run the command:

```bash
ntl dev
```

#### ENV variables

- `VITE_OPENAI_API_KEY`: For this environment variable you will have to go to the _openai_ page and get your api key to be able to communicate with _chatgpt_.
- `INFOJOBS_TOKEN`: For this environment variable you will have to go to the _infojobs api_ page and get your api key to be able to communicate with _infojobs_ and get the offers.
- `NODE_VERSION`: This variable does not require any change, it is set to "18" and serves to be able to use the functionalities of _node version 18_ in [Netlify](https://www.netlify.com/) functions.

### Technologies used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [React router DOM](https://reactrouter.com/)
- [Framer motion](https://www.framer.com/)
- [React rough notation](https://roughnotation.com/)
- [React spinners](https://www.npmjs.com/package/react-spinners)
- [React icons](https://react-icons.github.io/react-icons)
- [Sonner](https://sonner.emilkowal.ski/)
- [React useDebounce](https://www.npmjs.com/package/use-debounce)

#### API's

- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [InfoJobs API](https://developer.infojobs.net/)
- [OpenAI API](https://platform.openai.com/)
