const tweeter = model.Tweeter();
const renderer = render.Renderer();

// This should render the initial dummy data
renderer.renderPosts(tweeter.getPosts());
