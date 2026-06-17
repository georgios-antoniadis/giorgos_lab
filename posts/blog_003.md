---
title: Blog_003 - Prompt engineering
date: 2026-06-17
---
Slow morning, after a long night, started working on TRG at around 11am, at least the cardio for the day was taken care off. 

Turns out that the huge LLMs we are used to working with do A LOT of heavy lifting when it comes to responding to our prompts, with "edge models" you need to be A LOT more specific. The equivalent in the workplace would be working with a senior developer compared to working with a beginner.

A quick look at my "prompt engineering theory" notes and I start experimenting. It's frustrating at first but results do improve over time, the more you work on it. It is at this stage where you realize how unclear and/or conflicting your prompt is. My original prompt that produced decent results with Llama3.1, had to go on a cutting phase to work with the much leaner edge model I was prompting now. 

Experimenting with prompts is, again, very similar to thinking on how you instruct a person depending on their level of expertise. I got to the point of problem theory. What's the category of the problem that I am trying to solve? What are the exact steps that someone needs to follow to solve this problem. How smart does someone need to be to solve this problem given the instructions provided?

I landed on restructuring my system prompt for a much leaner approach, I removed unnecessary context, fixed the example provided (garbage in - garbage out), and handled the conversation with the model like talking to someone with a short attention span. I had to repeat things a lot. As per [this tutorial](https://www.youtube.com/watch?v=ysPbXH0LpIE) reminding the model of the task in hand, along with the most important guidelines, can do wonders in reducing hallucinations when the conversation gets larger and larger.  

Problem theory led me to categorize the specific task, that TRG is trying to solve, as a knowledge intensive task, which is something that (according to Liquid) the model I was using is not that great at. According to [this gentleman](https://www.youtube.com/watch?v=fLUtUkqYHnQ&t) in edge models you overcome this shortcoming by doing clever algorithmic stuff, however that would greatly limit the capabilities of my application for what is ,perhaps, unnecessary speed for the type of problem that I am attempting to solve. 

Liquid offers a flavor of LFM2.5 that has a quoted 8 billion parameters, and it takes up more disk space than Llama3.1, but they've design it so that only a fifth of the parameters fire up at a time. For my device means that when Llama took 2-3 minutes to respond, LFM responds in the range of 50 to 75 seconds. Mind you, I still need to do some lifting from my side. The results are satisfying. Faster than Llama and generalizes better than its little cousin (the 1.2B flavor). 

### A bit of blog context
I always was a fun of Casey Neistat. I remember being there for his first of the daily vlog series and I would patiently wait for tomorrow's video. It was, and still is, the series (regardless of medium, YouTube, Podcast, TV show)  that I would consistently tune up to watch. It was captivating and perfectly sized, in an era where there was no mainstream short form content, its typical 5-10 minutes was, and still is, perfect.

It was years later, re-watching the series, that I realized something very important about it, and Casey says it from day 1 of the vlog. In his words, he started this series because he wanted to do more of what he loved (that was making movies) and his hectic, but successful, lifestyle up until that point gave him fewer opportunities than he would like to. As you watch through the vlogs he will repeatedly mention the thrill he is getting about having to finish something every single day. He says that it keeps him "level".

As someone who has struggled with seeing things through to the end, I totally relate with missing the feeling of actually finishing something. Life can feel endless. I believe that slugging into a routine "kills" personalities precisely because it feels like you are doing circles and nothing is actually "happening". 

I have attempted to built an application many times in the past, with most of my ideas failing before they reach even a single user, and I want this time to be different. I do not care if TRG will be the most used QA app in the world, but I do care to at least get it installed on some devices other than mine. However, I know that Rome was not built in a day. Even for a minimum viable product, it will take me more than 24 hours to deliver this to someone.

This blog is my attempt at keeping myself "level". Writing about my progress may not be equivalent to delivering new features, but documenting the process is still production something. I have a deadline and it feels good when I upload.