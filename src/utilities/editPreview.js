//some code I wrote to edit the preview urls of the state object
//didn't end up using it, here for a future reference and to remember the learning

  //use this to remove the object freeze so I can mutate object properties
  const unfrozenPosts = JSON.parse(JSON.stringify(posts))


  //go through each unlocked post
  //find the preview images array
  //go through that array and for each image, do regex replacement of its .url prop
  unfrozenPosts.forEach((post) => {
    if (post.preview && post.preview.images) {
      console.log(post.preview.images[0].resolutions);
      post.preview.images[0].resolutions.forEach((image) => {
        console.log(image.url)
        const replaced = image.url.replace(/&amp;/g, '&')
        console.log(replaced)
        image.url = replaced
        console.log(image.url)
      })
    }
  });
  console.log(unfrozenPosts)