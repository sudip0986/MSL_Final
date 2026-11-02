const postContainer = document.getElementById("postsContainer")

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts)=>{
    console.log(posts)

    displayPosts(posts);
    })
    .catch((error) => {
    console.log("Error fetching posts:", error);
    });


// Fetch Comments API
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((comments) => {
    console.log(comments);
  })
  .catch((error) => {
    console.log("Error fetching comments:", error);
  });

function displayPosts(posts){
    
    posts.forEach((post) => {

    const postCard = document.createElement("section");
    postCard.className= "rounded-2xl bg-white p-6 shadow-sm";

    const postId = document.createElement("span");
    postId.className=" bg-blue-200 rounded-3xl text-xl font-bold px-3 py-1 capitalize text-black-800"
    postId.textContent=`Post #${post.id}`

    const userId = document.createElement("span");
     userId.className="text-xl font-bold px-3 py-1 capitalize text-yellow-500"
        userId.textContent=`userId #${post.userId}`


    const title = document.createElement("h3");
    title.className="font-bold text-2xl "
    title.textContent=post.title


    const body = document.createElement("p");
    body.textContent=post.body

    postCard.appendChild(postId);
    postCard.appendChild(userId);
    postCard.appendChild(title);
    postCard.appendChild(body);
    postContainer.appendChild(postCard);

})
}