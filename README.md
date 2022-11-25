# [RedditMinimal Client](https://ak-reddit-minimal.netlify.app/)

This project was completed as the final project for the Front End Development section of [Codecademy Full-Stack Software Engineer Career Path.](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)

The live project can be **[viewed here.](https://ak-reddit-minimal.netlify.app/)**


<br><br>
<a href='https://ak-reddit-minimal.netlify.app/' target="_blank"><img src="./src/assets/appPreview.PNG" /></a><br>
*The author of this project asserts this project has less than 10 bugs - he hopes =)*
<br><br>

---
## Table of Contents
1. [Purpose](#purpose)
2. [Technology Used](#technology-used)
3. [Features](#features)
4. [App Architecture](#app-architecture)
5. [Testing](#testing)
6. [Future Improvement Ideas](#future-improvement-ideas)
7. [Contribute](#contribute)
8. [Acknowledgements](#acknowledgements)
9. [License](#license)

---
## Purpose

The purpose of this project was to test the material covered in [Codecademy Full-Stack Software Engineer Career Path.](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)

This projected integrated both technical and conceptual knowledge related to modern front end application development.

Concepts tested include:

- Project wireframing
- Project planning, background research, and organization
- Version control
- Manual testing
- Automated testing
- Visual design
- Deploying web apps
- Continuous integration and continous deployment
---
## Technology Used

**Development:**

- HTML5
- CSS3
- Javascript (ES6)
- ReactJS
- Redux

**Automated Testing:**
- Jest
- React Testing Library

**Version Control:**
- Git

**Hosting & CI/CD:**
- GitHub
- Netlify

---

## Features

**Feeds**

- Loads to a default feed with 25 posts
- Subreddit for default feed is r/pics
- User is able to choose a new subreddit from "Subreddits" menu on right side of screen (large displays) or on top of feed (small displays)
- When new subreddit is chosen, feed updates to 25 new posts from that subreddit
- Posts in the feed can be filtered using the search bar in the header
- Partial matching for search terms is possible - i.e. the search "new javascript" would match  both of these posts: "What are the new javascript ES6 features" and "10 things all new javascript developers should know"
- Searches are case sensitive

**Posts**

- Each Post card displays the following information about the post:
    - Current vote total (calculated as upvotes - downvotes)
    - Title
    - Post Author
    - Number of comments
    - Time since post 
        - in hours if less than 1 day 
        - in days if less than 1 week 
        - in weeks if less than 1 month
        - in months if less than 1 year
        - in years if more than 1 year
<br><br>
- Clicking the post title or preview image will open the post's permalink url in a new tab 
    - for image type posts this will be the full size image
    - for discussion type posts, this will be the comments page on reddit
<br><br>
- Clicking the comments icon (bottom right part of post card) will display the top 5 comments
    - Only the comment itself will be displayed, not replies to the comment
    - Comment author is displayed
    - Time since comment displayed, using same formatting logic as posts
<br><br>
- Clicking the upvote/downvote buttons mocks a vote action
    - Because the JSON API cannot POST to reddit, these votes are handled in local state and don't actually send vote information to reddit. Meant as a visual representation of voting only
---

## App Architecture

**Diagram**

View the **[app architecture diagram on Figma.](https://www.figma.com/file/WFP1Af49yaQGFHvFkfxMJC/RedditMinimal-App-Architecture?node-id=0%3A1&t=fZBgPW65vs9iYp0i-0)**

**Wireframe**

View the **[wireframe on Figma.](https://www.figma.com/file/igFMh3eJF7Pjky1Z6ScjFm/Reddit-Minimal?node-id=0%3A1&t=kelX1Bm6Evn4yXw2-0)**

**Getting Data**

This app uses the [Reddit JSON API](https://github.com/reddit-archive/reddit/wiki/JSON) in order to fetch data from Reddit.

The Reddit JSON API is a simplied API which does not require OAuth, and only allows GET requests. As such, there is no ability to send data to the reddit servers (i.e. upvotes, comments, sign ins etc).

Based on user actions, requests to different endpoints are sent via Javascript's [fetch API.](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

Data is stored in different slices of state which are ultimately sent to the top-level Redux store. This state management pattern is from [Redux Toolkit.](ttps://redux-toolkit.js.org)

**Fetching Posts**

- On initial page load, a request is sent to `https://www.reddit.com/r/pics.json` and the returned object is parsed to JSON and used to populate the `posts` property in the `redditSlice` of state.
- On clicking a subreddit, a new request is sent to `https://www.reddit.com/${selectedSubreddit}.json` where `${selectedSubreddit}` is the title of the subreddit clicked (e.g. /r/javascript). This new response objects data is then parsed and replaces the old data in the `posts` property in `redditSlice`.

**Fetching Comments**

 - Comments are loaded only when needed - therefore, on initial feed load, no comments are loaded for any of the posts.
 - When a `Post` cards comments button is clicked, a request is sent to  `https://www.reddit.com${permalink}/.json?limit=20` where `${permalink}` is a prop on the `Post` component (passed to it when rendered by the `Posts` component, which in turn gets it from the `redditSlice` of state).
 - Each comment comes with other data we do not need, so we extract the data we care about, and throw out the rest. This is why `limit=20` gives 5 comments - the resonse object has 3 keys we don't need per comment.
 - The comment array is saved in local state within the `Post` component. This local state varibale is mapped to render the `Comments` component.

---

## Testing

- This app was tested manually by the author using the Chrome Browser on Windows 10 and on Android (Galaxy S9)
- Limited automated testing on component rendering is included - see the various .test.js files for details
- Layout for the resolutions of the following devices was tested (via Chrome Dev Tools device emulator):
    - iPhone SE
    - iPhone XR
    - iPhone 12 Pro
    - iPad Air
    - iPad Mini
    - Galaxy S8+
    - Galaxy S9+
    - Galaxy S20 Ultra
    - Galaxy Fold
    - Galaxy A51/71
    - Surface Pro 7
    - Surface Duo
    - Pixel 5
- Lighthouse Test Scores as of November 25, 2022:
    - Desktop:
        - Performance: 80
        - Accessibility: 98
        - Best Practices: 92
    
    - Mobile:
        - Performance: 52
        - Accessibility: 98
        - Best Practices: 92

---

## Future Improvement Ideas

These ideas are meant as reasonable extensions of the project without having to make fundamental changes (for example using the offical OAuth API instead of JSON API).

- Adding functionality to load more posts by scrolling to end of page
- Adding functionality to load more comments by clicking a 'more comments' button
- Generating subreddits list dynamically based on most popular
- Making search filtering of posts case insensitive
- Adding day/night mode theme toggle
- Adding more unit tests
- Adding integration testing

---

## Contribute

If you would like to improve this project, you may submit [a pull request here.](https://github.com/YSquid/reddit-minimal/pulls)

If you would like to connect with me you can reach me at:
- Email: [ahmad.k@ysquid.tech](mailto:ahmad.k@ysquid.tech)
- LinkedIn: [Ahmad Kariem](https://www.linkedin.com/in/ahmad-kariem/)

---

## Acknowledgements

- Matthew Lee - for authoring the [Reddit JSON API GitHub Page.](https://github.com/reddit-archive/reddit/wiki/JSON)
- [ Gabriel Bigelow](https://github.com/Gabriel-Bigelow) - for consultations during the creation process, and for catching some bugs in the first release. [GitHub.](https://github.com/Gabriel-Bigelow) [LinkedIn.](https://www.linkedin.com/search/results/all/?heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADov51sBLoD_XwrP58ADD4kyif2ZdJLcNeo&keywords=gabriel%20bigelow&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=779b7332-abed-4124-ac64-10aac0b83c67&sid=71%3A)

---

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright 2022 Ahmad Kariem

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.