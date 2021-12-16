---
title: "Wanna do a bubble sort, askout Felvin"
description: "An instant App that returns code snippets"

date: 2021-12-16
---


Good search results are one of the most basic tasks that a search engine performs. Google is famous for this ability and hence is the **most** used search engine. But it is afterall the world of technology where things dont stay constant forever. As technology evolves , new and better alternatives emerge.

[Felvin](https://felvin.com) is such of this kind. Felvin aims to put a cherry on top of what most search engines provide. Providing a better search experience is what Felvin looks forward to.

## Topic of Work and Motivation behind it

Looking for code syntax, implemenations and snippets are the daily needs of any developer. This becomes tedious a lot when this simple task requires the user to jump between sites to find relevant data. Making an instant app for `Reference Implementation of Code Snippets` was the topic that I took up as my project.

## Implementation of my work

There exists various open source project where algorithms in various languages have been compiled. Two of them were [Rosetta code](http://www.rosettacode.org/wiki/Rosetta_Code) and [The Algorithm](https://the-algorithms.com/). Their code snippets was kept in well maintained directory structure which I used to compile a single json using a js script. After the json was made , much of the task was done. A simple API service which took the query string and parsing the algorithm and language was enough to look for the specific code snippet. This code snippet was sent over over to the React app where the input was passed down to the [Monaco editor](https://github.com/suren-atoyan/monaco-react) component which rendered on the user's screen.

[Sample Search Query](https://sandbox.felvin.com/search?q=breadth%20first%20search%20in%20javascript)

Demo:
![GIF](./demo/demo.gif)

### The extra edge

Since the Monaco editor is itself used by vscode, it provides code completion for the languages which would help users to write code :tadagit a:
