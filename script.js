
const postsContainer = document.getElementById("postsContainer");

// Fetch Posts API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {

    console.log("Posts:", posts);

    // Fetch Comments API
    return fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((comments) => {

        console.log("Comments:", comments);

        displayPosts(posts, comments);

      });

  })
  .catch((error) => {
    console.log("Error fetching data:", error);
  });


// Display Posts
function displayPosts(posts, comments) {

  postsContainer.innerHTML = "";

  posts.forEach((post) => {

    // Create Post Card
    const postCard = document.createElement("section");

    postCard.className =
      "rounded-2xl bg-white p-6 shadow-sm mb-5";

    // Create Post ID
    const postId = document.createElement("span");

    postId.className =
      "rounded-lg bg-indigo-100 px-3 py-1 text-sm font-bold text-indigo-700";

    postId.textContent = `Post #${post.id}`;

    // Create User ID
    const userId = document.createElement("span");

    userId.className = "ml-3 text-sm text-slate-500";

    userId.textContent = `User ID: ${post.userId}`;

    // Create Title
    const title = document.createElement("h3");

    title.className =
      "mt-4 text-xl font-bold capitalize text-slate-800";

    title.textContent = post.title;

    // Create Body
    const body = document.createElement("p");

    body.className = "mt-3 leading-7 text-slate-600";

    body.textContent = post.body;

    // Add Elements to Post Card
    postCard.appendChild(postId);
    postCard.appendChild(userId);
    postCard.appendChild(title);
    postCard.appendChild(body);
    
    
    
    // Match Comments with Post ID
    const matchedComments = comments.filter((comment) => {
      return comment.postId === post.id;
    });


    // Create Comments Heading
    const commentsHeading = document.createElement("h4");

    commentsHeading.className =
      "mt-5 font-bold text-indigo-700";

    commentsHeading.textContent =
      `Comments (${matchedComments.length})`;


    // Display Matched Comments
    matchedComments.forEach((comment) => {

      const commentCard = document.createElement("div");

      commentCard.className =
        "mt-3 rounded-lg bg-slate-100 p-4";

      const commentName = document.createElement("h5");

      commentName.className = "font-semibold text-slate-800";

      commentName.textContent = comment.name;

      const commentEmail = document.createElement("p");

      commentEmail.className =
        "mt-1 text-sm text-indigo-600";

      commentEmail.textContent = comment.email;

      const commentBody = document.createElement("p");

      commentBody.className =
        "mt-2 text-sm leading-6 text-slate-600";

      commentBody.textContent = comment.body;


      // Add Comment Elements
      
      // commentCard.appendChild(commentName);
      // commentCard.appendChild(commentEmail);
      commentCard.appendChild(commentBody);

      postCard.appendChild(commentCard);
      

    });


  postCard.appendChild(commentsHeading);

    
    // Add Post Card to Container
    postsContainer.appendChild(postCard);
    

  });

}
