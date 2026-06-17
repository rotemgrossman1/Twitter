const Tweeter = function() {
    let postCounter = 3;
    let commentCounter = 7;
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't worry second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    //     postIdCounter - to count total posts
    const postIdCounter = function(){
        return postCounter
    }
    //     commentIdCounter - to count total comments
    const commentIdCounter = function(){
        return commentIdCounter
    }
    const findPost = function(postId){//returns index of post
        for(let i = 0; i < _posts.length; i++){
            if(_posts[i].id === postId){
                return i
            }
        }
        return new Error(`Post ${postId} not found`)
    }


    const getPosts = () => _posts; // Public method
    const addPost = (text) => {
        let newId = 'p' + postCounter
        postCounter++
        const newPost ={
            text: text,
            id: newId,
            comments:[]
        }
        _posts.push(newPost)
    }

    const removePost = (postID) => {
        const indexToDelete = findPost(postID)
        _posts.splice(indexToDelete, 1)
    }
    return {
        getPosts: getPosts, 
        addPost: addPost,
        removePost: removePost
    }
}