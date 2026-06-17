---
title: Blog_002
date: 2026-06-16
---

Day 2 of the Blog. Last night ended after a long afternoon session of troubleshooting stuff when I finally got Liquid's LFM2 model to work, all of a sudden an idea flood, felt like everything clicked. The model was responding fast, suspiciously fast. The first time experiencing a small language model created to work on-device felt exactly like it should have. 

TRG, the app I am developing, I want it to run on device to avoid communicating sensitive company data with 3rd party model providers and because of this ever looming feeling that the current state of AI models will at some point reach its inevitable end. I just can't imagine a future where the only way to run an effective LLM is to own a huge data center. 

I was led to LFM2 via a chat with Gemini when I asked it to do research on models that run effectively on devices and especially one that would run on my piece of computer history, 2018 Dell XPS 15 with a measly 2GB Nvidia 1050ti GPU.

Experiencing the speed of the model felt like a step towards the correct direction. Experimenting with it today revealed that I knew very little about such models and that it would take a lot of work to actually produce good results for my use case. 

I started of with what felt appropriate, prompt engineering. I previously run llama3.1 the 8B flavor which although very resource demanding for my device, it was smart enough to understand the task on hand. Using the same input with LFM2 produced drastically different results. I experimented a bit and landed on a prompt with MANY guardrails, the model started producing promising results. It was clear, however, that there was a long way to go.

The name of the game after that was research. Research about structuring prompts correctly. Actually reading the docs of Liquid. Research, research, research... There are way too many things that I do not know about and I am once again a full time student, it feels like.