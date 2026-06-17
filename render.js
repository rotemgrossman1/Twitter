
const Renderer = function () {
    
    // 1. Helper function for individual comments (Optional but recommended)
    const _generateCommentHTML = function(comment) {
        // Return a string of HTML for a single comment using template literals
    }

    // 2. Main rendering function
    const renderPosts = function (posts) {
        
        $("#posts").empty()
        for (let post of posts) {
            // A. Start building the post HTML string
            let postHTML = `
                <div class="post" data-id="${post.id}">
                    <div class="post-text">${post.text}</div>
                    <div class="delete" data-id="${post.id}">Delete Post</div>
                    <div class="comments">`; // Leave this open!

            // B. Loop through the comments and add them directly to postHTML
            for (let comment of post.comments) {
                postHTML += `
                    <div class="comment" data-id="${comment.id}">
                        <span class="delete-comment" data-id="${comment.id}">X</span> 
                        ${comment.text}
                    </div>`;
            }

            // C. Close the comments div and add the input boxes
            postHTML += `
                    </div>
                    <input type="text" placeholder="Got something to say?" class="comment-input">
                    <button class="comment-button">Comment</button>
                </div>`;

            // D. Finally, append the entire complete post to the DOM
            $("#posts").append(postHTML);
        }
        

    }

    // Return the public method
    return {
        renderPosts: renderPosts
    }
}