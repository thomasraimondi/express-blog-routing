const pageTitle = document.getElementById("page-title");
const btnChangeTitle = document.getElementById("change-title");
const btnGetPosts = document.getElementById("get-posts");
const postsList = document.getElementById("posts-list");

const getPosts = () => {
  const url = "http://127.0.0.1:3000/bacheca";
  axios.get(url).then((res) => {
    console.log(res.data.posts);
    const listItems = createlistItems(res.data.posts);
    postsList.innerHTML = listItems;
  });
};

const changeTitle = () => {
  const url = "http://127.0.0.1:3000";
  axios.get(url).then((res) => {
    pageTitle.innerText = res.data;
    console.log(res);
  });
};

const createlistItems = (posts) => {
  let postsList = "";
  posts.forEach((post) => {
    postsList += renderListItem(post);
  });
  return postsList;
};

const renderListItem = (post) => {
  return `
  <div class="col-12 col-md-6 col-lg-4>
    <div class="card">
  <img src="${post.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class="card-text">S${post.content}</p>
    <div class="tags">${post.tags}</div>
  </div>
</div>
</div>`;
};

btnChangeTitle.addEventListener("click", changeTitle);
btnGetPosts.addEventListener("click", getPosts);
