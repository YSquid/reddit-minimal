1. Add the 'permalink' prop to the posts addPost action - [x]
2. Add an empty comments array to the addPost action - [x]
3. Pass permalink to each rendered post as prop - [x]
4. On clicking the showComments button on a Post, fire a get request to reddit.com/{permalink}.json?limit=10
5. Store the retrieved comments in local state
6. Map over the comments prop to generate a div for each comment with the comment text, and postedAgo. 

Bonus - modularize postedAgo and pass it to the Post and Comment component from module

*Alternate storeage route - store in Redux store instead of local state*

4. Update the appropraite entry in the posts array with comments = response. Use the key prop to access i.e. the first post is keyed with 0, so access posts[0].comments = response
5. Select the comments for the Post inside the post component (use selectPosts selector and then chain the key and .comments) and pass to the Comments component as props