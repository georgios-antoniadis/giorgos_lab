---
title: Blog_014 - MVP range
date: 2026-06-28
---

"Just build the MVP, and do it fast!" is one of the most typical advise you'll receive when you build almost anything. The issue is that "minimum" is arbitrary. If someone is more specific they might ask you to build a single feature of the app, the most important. What feature? Most important? What do any of these mean? My best interpretation of the situation is that whatever you build should for the hardest pain point you can identify. What comes then is the realization that what you define as "pain" can be too broad, what if the pain is how to get people to fly?! I think I am getting a bit over my head here. 

I am building a RAG based test case generator tool for QA engineers and people doing tests alike. The idea came from experience, noticing pain points in the workflow and finding no satisfying solutions with current options. See, I said pain point**s**, with an "s" at the end, meaning that there are more than one. The pain points I have identified are, among others, the following: 
- Trouble in long term consistency while following best practices
- Difficulty in training someone on how to create new test cases
- Unsatisfying and incompatible existing tools

To be honest I never really focused on one or other. The current state of the app addresses all of them on a surface level, but now it is time to lock the target on one of them. It has reached this point because the path of each one is too distinct from the others to ignore. I am thinking that following all paths would take too long for the MVP of a product. 

Instinctively I would turn to people for feedback, I would ask any QA people I know, anyone that conducts tests really, to make an informed decision. However, it is a Sunday afternoon and I need to get to working on something right now. I am going through my notes, a couple months ago I got together with a couple of old coworkers who gave me my first pieces of feedback. That get-together also led me to a call with a total stranger with whom I discussed my idea, thankfully I have kept notes. 

The first thing that jumps out is that most people use spreadsheets to do their work, which I (and them) find to be a very limited tool, especially when it comes to long-term consistency. I don't need to build *another* QA test case tool manager, that's a task for Claude Code to be honest, I need something deeper. I dig more. I see a pattern of inconsistency once again. People do not have a consistent workflow when it comes to generating test cases, and if there is one it is highly personal and may even include the use of 3rd party AI tools such as Chat GPT for help. I've been there, and that's a recipe for trouble. Knowledge around producing consistent test cases is highly concentrated on a single individual. The same individuals are the ones that will conduct the tests too. What happens if you need to take vacation? What happens if you leave? That specialized knowledge leaves with you and what could otherwise be a very valuable asset (the test cases that you have already written and executed) for your company is now dis-functional. 

Creating a tool for that I think is not possible. The closest thing that I can manage is coding a pain killer for the first pain, in order, from my list, which may also happen to cure a few of the second pain's symptoms.