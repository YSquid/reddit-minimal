const getPosts = async () => {
    const endpoint = 'https://www.reddit.com/r/pics.json'
    const response = await fetch(endpoint)
    const raw = await response.json()
    const posts = raw.data.children
    console.log(posts)
}

export default getPosts