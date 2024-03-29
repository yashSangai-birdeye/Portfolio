import React from 'react';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div id="Layout" className="h-screen flex justify-center items-center font-mono text-black dark:text-white">
      <Head>
        <title>Yash Sangai</title>
        <meta name="description" content="I am Yash Sangai, a Computer Science Engineer. Currently working as a Senior Frontend Engineer." />
        <meta name="google-site-verification" content="U0OqVgXH6xpWqHPOdM_rc6D3Q7zCbBK71iyCRbAT7tA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="container" className="w-3/5">
        <main>
          <img className="w-40 h-40 rounded-full mx-auto" alt="Yash Sangai" src="/logo.png" />
          <h1 className="animate-bounce mt-8">
            Hello World!
          </h1>

          <p className="mt-4">
            I am Yash Sangai, a Senior Frontend Engineer who is very passionate about frontend development based on Web or React Native Apps 🚀.<br/><br/>
            Have a look at my blogs in <a className="underline" href="https://medium.com/@yashSangai" target="_blank">Medium</a> or just connect with me on LinkedIn or Twitter. I am always excited to work on some awesome projects, message me and let's discuss over coffee!
          </p>
        </main>

        <footer className="w-auto flex justify-around mx-auto mt-12 items-center">
          <a href="https://twitter.com/SangaiYash" target="_blank">
            <img alt="Github" src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
          </a> 
          <img alt="heart" className="animate-pulse" src="/heart.svg" />
          <a href="https://www.linkedin.com/in/yash-sangai/" target="_blank">
            <img alt="LinkedIn" src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
        </footer>
      </div>
    </div>
  )
}
