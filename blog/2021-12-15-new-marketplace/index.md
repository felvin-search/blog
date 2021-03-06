---
title: How I created an Instant App of all Instant Apps!
description: My Internship Project
slug: creating-felvin-instant-apps-marketplace
authors:
  - N-Shar-ma
tags: []
---

Until now, there was no obvious and easy way to appreciate the variety and ever growing number of the open source Instant Apps Felvin has to offer. I understood how important **an Instant Apps' Marketplace, a place where you could view and try out all the available apps in a swift and easy manner**, would be, and hence this is the problem I sought to fix during my internship with Felvin!

## The Actual Issue

To put it less glamorously, creating an autogenerated and always updated marketplace boiled down to this: **Fix the bundling of the apps npm package and fix those import errors that sometimes showed up, sometimes didn't.**

## Figuring out the Root of the Problem:

Taking the most obvious first step, I searched the error, and as expected, multiple ways showed up which worked differently for different projects. And no amount of searching could explain the reason this error occurred only sometimes. I then turned to experimentation, and spent a lot of time importing the apps package in different environments, while also reading about how bundling works and the intricacies of imports and exports. I tried importing apps individually too, where I saw *another* new error pop up! Though it was admittedly frustrating to spend days documenting the cases imports worked and the cases they didn't, without any measurable outcome, this method did pay off and granted me a moment of near enlightenment when I observed a pattern and realized that the apps package import only failed in node / server side environments! The new error too, I noticed, only cropped up when the app imported had any asynchronous functionality. 

Once I had figured out the cause of the errors, the rest was relatively smooth sailing. The new error was an easy fix, and I made a small tweak in the app's bundling to ensure it supported async functions. For the marketplace, we are using docusaurus for the entire Felvin Docs website, which is server side rendered by default. I searched for a way to have a part of it be client side rendered instead, and came upon the `BrowserOnly` component which allowed just that! Using that, the import worked and I was quickly able to modify the pre-existing but static marketplace with only a tenth of all apps, to instead use the imported data. There was already a GitHub Workflow ready to update the apps package to its latest version every midnight. So now, the client side rendering of the marketplace, along with the daily automated updates ensures that **the [marketplace](https://docs.felvin.com/instant-apps/marketplace) is dynamic and updated, with a new Instant App showing up on the marketplace within 24 hours!**

![Felvin Instant Apps Marketplace](https://user-images.githubusercontent.com/68962290/145682424-451040cd-67b9-4383-a560-1c34d840c3a1.png)

## A Surprise Bonus

Until I made the Marketplace self updating, I thought of extracting the data of all current Instant Apps to have a somewhat updated Marketplace in its lieu. While trying out ways to do so, I ended up making a temporary (or so I initially thought) Instant App to provide me the current data of all the apps in JSON format. Soon I realized that with some UI changes, this Instant App can be used as an alternative showcase for all Instant Apps! Now, anytime you ~~search~~ *felvin* something like "[Felvin Instant Apps](https://felvin.com/search?q=Felvin%20Instant%20Apps)" or "[what instant apps are available](https://felvin.com/search?q=what%20instant%20apps%20are%20available)" a carousel showcasing all the Instant Apps will appear. 

An Instant App of Instant Apps... isn't that so meta?!
