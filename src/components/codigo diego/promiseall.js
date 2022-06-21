const axios = require('axios').default;

let posts;

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    posts = response.data;
    const userIds = new Set();

    posts.forEach((post) => userIds.add(post.userId));

    return Promise.all(
      Array.from(userIds).map((userId) =>
        axios.get('https://jsonplaceholder.typicode.com/users/' + userId)
      )
    );
  })
  .then((userResponses) => {
    posts.forEach(
      (post) =>
        (post.user = userResponses.find(
          (userResponse) => userResponse.data.id === post.userId
        ).data)
    );
    console.log(posts);
  });
