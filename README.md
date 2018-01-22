![Ray AI Logo](RayAI-logo.png)

# Ray AI - The Smart Screen reader assistant
## **:tada: Winner of the Allia Serious Impact Hackathon November 2017 :tada:**

## Inspiration
Millions of internet users are visually impaired. They rely on Screen Readers to convey what is on the website. Screen Readers rely on the "alt tags" to provide captions for images. However, these "alt tags" are often missing or inaccurate, especially for user uploaded content such as on Twitter or Reddit.

## What it does
RayAI utilises cutting edge machine learning to add captions to images, better improving the internet experience for those with visual impairments. We recommend using this in conjunction with ChromeVox which provides the Screen Reader.

## How we built it

This Chrome extension uses cutting edge Machine Learning powered by Microsoft Cognitive Services to understand what's in the image. A combination of object recognition, emotion recognition and OCR is used to provide the most detailed image captions possible.

The Chrome extension connects to AWS where we use Lambda functions and DynamoDB to generate the descriptions.

## What's next for RayAI - Screen Reader Assistant

We are soon to launch on the chrome store!

Features we hope to add:
- Cache the top 30 most visited websites daily!
- Link in with Twitter, Reddit etc. to automatically tag user uploaded content

!(The team)[26910452_10211013117391959_1735074432164593266_o.jpg]
