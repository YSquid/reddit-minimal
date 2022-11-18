1. Add the 'permalink' prop to the posts addPost action - [x]
2. Add an empty comments array to the addPost action - [x]
3. Pass permalink to each rendered post as prop - [x]
4. On clicking the showComments button on a Post, fire a get request to reddit.com/{permalink}.json?limit=10 - [x]
5. Store the retrieved comments in local state - [x]
6. Map over the comments prop to generate a div for each comment with the comment text, and postedAgo - do this inside the Comments component -[x]
7. Make a new component - Comment to render each comment mapped in Comments - [x]

Bonus - modularize postedAgo and pass it to the Post and Comment component from module

*Alternate storeage route - store in Redux store instead of local state*

4. Update the appropraite entry in the posts array with comments = response. Use the key prop to access i.e. the first post is keyed with 0, so access posts[0].comments = response
5. Select the comments for the Post inside the post component (use selectPosts selector and then chain the key and .comments) and pass to the Comments component as props

"/r/pics/comments/yuis25/protests_today_in_mexico_city_against_the/"
"/r/pics/comments/yuis25/protests_today_in_mexico_city_against_the"

**fixing the bug Gabe found**

1. In Post, have a selector to select selectedSubreddit
2. Have a useEffect which updates on that selector being changed
3. In the useEffect, reset comments