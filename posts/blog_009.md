---
title: Blog_009 - Context part 1
date: 2026-06-23
---

Yesterday I talked about memory, not coincidentally since it was a day after I did my first read through of the "The GenAI Divide" report from MIT that clearly outlined the superiority of software that implements memory (active memory to be more specific). 

Adding memory to a stateless system, like having a chat with an LLM, means that you inject information in the conversation's context. LLMs, famously, have context windows, i.e. there is an actual limit to how many information you can inject at a time. You'll see numbers in the hundreds of thousands for small models (LFM2.5-8B has a context window of 128K) and the big players can accept millions of tokens at once. While you are chatting the context increases. The more information and the more complex the chat, the more confused the model will get. It is not easy to calculate exactly how many tokens you are using per prompt, as this is dependent on the specific model and the format of your prompt, among other things. We've all experienced models hallucinating during long conversations, even the big ones (although there have been significant improvements over time), thus it can be safely concluded that no model is safe when it comes to a context that increases indefinitely. 

Personally, my project involves edge models. Hallucinations come way sooner than what you experience with the big players, thus I needed to adapt from the very beginning. For context, for my app TRG I need the model to generate predictable responses while increasing the context by about 2000 tokens per round. 

A fairly large model, for my device's specifications anyway, Llama 3.1-8B would be able to keep up for about 10-15 rounds before it started hallucinating. A lightning fast model, LFM 2.5-1.2B could only do with 2-3 rounds before completely losing control and to achieve this, I had to optimize my prompt significantly compared to what Llama had to work with. Finally, LFM 2.5-8B is the middle ground, handling no more than 10 rounds with less aggressive prompt engineering.

It soon becomes apparent that complicated systems, like TRG, where outcome predictability is required, need an equally complex strategy when it comes to handling context. If you have paid attention when using things like Github's  copilot on VSCode, or Claude code, or any other similar agent you may have noticed that during their thinking they will do something in the lines of creating a plan and then executing on it. Naturally, that's were I started too.

I landed on an approach that closely mimics a to-do list. Drawing inspiration from what the big players do, and combining thing that I learned when I researched proper prompt structure (you can see more on Blog_003). Doing some clever back-end work, the model never reaches it's context window, the majority of the context that's passed to the model is highly relevant to the task at hand and the results are promising.