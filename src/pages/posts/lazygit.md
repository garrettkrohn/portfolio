---
layout: '@/templates/BasePost.astro'
title: Lazygit
description: A Terminal UI for Git.
pubDate: 2023-11-15T02:34:45.000Z
imgSrc: '/assets/images/lazygit.png'
imgAlt: 'lazygit'
---

## Source Control with Git

From very early in our software careers, we were likely told how important source
control is.  Honestly, I wish I had known about source control when I was writing
my dissertation, because that was one of my biggest issues.  I had a hard time 
keeping track of what version was the most recent, what edits had been requested
by whom, and what I was going to work on next.

When I first used git, I basically treated it as a quick save all incase I screwed
something up later.  My work flow was a very clunky:
```bash
git add .
git commit -m "some non-descriptive commit message
git push
```
I even came up with some aliases to make this save all faster.  The issue with this
approach is when you (or someone else) have to go look back at your work, it's very
difficult to figure out what in the world you were trying to do.  I like to imagine
that some engineer in 2 years is going to have to look at the work that I did and 
try to figure out how to build on my work.  Let's be honest, or fix it.

So with this in mind, we need to organize our commits to accurately depict what 
we have done with the code.   In order to achive this, we need to have very granular
control over exactly what is in our commits, and this is where I think [Lazygit](https://github.com/jesseduffield/lazygit)
shines.  The User Interface shows us all the information and provides us keybindings
that allows us to do all of our git commmands with a single keystroke.




