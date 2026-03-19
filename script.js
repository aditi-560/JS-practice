const API_URL = "https://jsonplaceholder.typicode.com/posts";

const loadBtn = document.getElementById("loadPosts");
const addBtn = document.getElementById("addPost");
const postsList = document.getElementById("postsList");
const statusText = document.getElementById("status");

// =========================
// 1️⃣ LOAD POSTS (GET)
// =========================

loadBtn.addEventListener("click", async () => {
  statusText.innerText = "Loading...";

  try {
    const res = await axios.get(API_URL);

    const posts = res.data.slice(0, 5); // limit to 5

    postsList.innerHTML = "";

    posts.forEach(post => {
      const li = createPostElement(post);
      postsList.appendChild(li);
    });

    statusText.innerText = "Posts loaded!";
  } catch (error) {
    statusText.innerText = "Error loading posts";
    console.log(error);
  }
});


// =========================
// 2️⃣ ADD POST (POST)
// =========================

addBtn.addEventListener("click", async () => {
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  if (!title || !body) {
    statusText.innerText = "Please fill all fields!";
    return;
  }

  try {
    const res = await axios.post(API_URL, {
      title,
      body,
      userId: 1
    });

    const newPost = res.data;

    const li = createPostElement(newPost);
    postsList.prepend(li); // show at top

    statusText.innerText = "Post added!";
  } catch (error) {
    statusText.innerText = "Error adding post";
    console.log(error);
  }
});


// =========================
// 3️⃣ DELETE POST
// =========================

async function deletePost(id, element) {
  try {
    await axios.delete(`${API_URL}/${id}`);

    element.remove();

    statusText.innerText = "Post deleted!";
  } catch (error) {
    statusText.innerText = "Error deleting post";
    console.log(error);
  }
}


// =========================
// 4️⃣ CREATE POST ELEMENT
// =========================

function createPostElement(post) {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${post.title}</strong>
    <p>${post.body}</p>
    <button>Delete</button>
  `;

  const deleteBtn = li.querySelector("button");

  deleteBtn.addEventListener("click", () => {
    deletePost(post.id, li);
  });

  return li;
}