
const postContainer = document.getElementById("postsContainer");

let allComments = [];

fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((comments) => {
        allComments = comments;

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((posts) => {
                displayPosts(posts);
            });
    })
    .catch((error) => {
        console.log("Err:", error);
    });


function displayPosts(posts) {

    posts.forEach((post) => {

        const postComments = allComments.filter((comment) => {
            return comment.postId === post.id;
        });

        const postCard = document.createElement("section");
        postCard.className = "rounded-2xl bg-white p-6 shadow-sm";

        const title = document.createElement("h3");
        title.className = "font-bold text-2xl";
        title.textContent = post.title;

        const body = document.createElement("p");
        body.textContent = post.body;

        const commentCount = document.createElement("p");
        commentCount.className = "text-blue-600 font-semibold mt-3";
        commentCount.textContent = `${postComments.length} Comments`;

        const btn = document.createElement("button");
        btn.className = "bg-blue-500 text-white px-4 py-2 rounded-lg mt-3";
        btn.textContent = "View comments";

        const commentContainer = document.createElement("div");
        commentContainer.className = "hidden mt-4 space-y-3";

        btn.addEventListener("click", () => {

            commentContainer.classList.toggle("hidden");

            if (commentContainer.classList.contains("hidden")) {
                btn.textContent = "View comments";
            } else {
                btn.textContent = "Hide comments";
            }

        });

        postComments.forEach((comment) => {

            const commentBox = document.createElement("div");
            commentBox.className = "bg-gray-100 p-3 rounded-lg";

            const commentName = document.createElement("h4");
            commentName.className = "font-bold";
            commentName.textContent = comment.name;

            const commentBody = document.createElement("p");
            commentBody.textContent = comment.body;

            commentBox.appendChild(commentName);
            commentBox.appendChild(commentBody);

            commentContainer.appendChild(commentBox);

        });

        postCard.appendChild(title);
        postCard.appendChild(body);
        postCard.appendChild(commentCount);
        postCard.appendChild(btn);
        postCard.appendChild(commentContainer);

        postContainer.appendChild(postCard);

    });

}
