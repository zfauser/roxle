# Bankle

<!-- Test -->

This is a clone project of the popular word guessing game we all know and love with banking/finace terms. Made using React, Typescript, and Tailwind.

[**Try it out!**](https://bankle.vercel.app/)

## Additional words

To suggest additional words to be added please make a pull request with the additonal words added in the `/src/constants/wordlist.ts` file

## Build and run

### To Run Locally:

Clone the repository and perform the following command line actions:

```bash
$> cd react-wordle
$> npm install
$> npm run start
```

### To build/run docker container:

#### Development

```bash
$> docker build -t reactle:dev -f docker/Dockerfile .
$> docker run -d -p 3000:3000 --name reactle-dev reactle:dev
```

Open [http://localhost:3000](http://localhost:3000) in browser.

#### Production

```bash
$> docker build --target=prod -t reactle:prod -f docker/Dockerfile .
$> docker run -d -p 80:8080  --name reactle-prod reactle:prod
```

Open [http://localhost](http://localhost) in browser.
