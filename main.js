const tweeter = Tweeter();
const renderer = Renderer();
renderer.renderPosts(tweeter.getPosts());

const tweetBtn = document.querySelector("#post")
tweetBtn.addEventListener("click", ()=>{
    const newPostTxt = document.querySelector('#input').value
    tweeter.addPost(newPostTxt)
    renderer.renderPosts(tweeter.getPosts())
    document.querySelector('#input').value = ""
})

const postsContainer = document.querySelector("#posts"); 

postsContainer.addEventListener("click", function(event) {
    //check for delete comment
    if (event.target.classList.contains("delete")) {
        const postToBeDeleted = event.target.closest(".post")
        const postIdToDelete = postToBeDeleted.dataset.id
        tweeter.removePost(postIdToDelete)
        renderer.renderPosts(tweeter.getPosts())
        
    }
    
    // 2. Check if the clicked element is the Comment button
    else if (event.target.classList.contains("comment-button")) {
        const postElement = event.target.closest(".post")
        const postId = postElement.dataset.id
        const inputElement = postElement.querySelector(".comment-input") 
        const commentText = inputElement.value
        tweeter.addComment(postId, commentText)
        renderer.renderPosts(tweeter.getPosts())
        inputElement.value=""
    }
    
    // 3. Check if the clicked element is the X button (Delete Comment)
    // ...
    if (event.target.classList.contains("delete-comment")) {
        const postComment = event.target.closest(".post")
        const postCommentId = postComment.dataset.id
        const commentToBeDeleted = event.target.closest(".comment")
        const commentIdToDelete = commentToBeDeleted.dataset.id
        tweeter.removeComment(postCommentId, commentIdToDelete)
        renderer.renderPosts(tweeter.getPosts())
        
    }
});