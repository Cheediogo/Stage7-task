
let singlePost = document.querySelector('.one-post');
singlePost.innerHTML = "";
const onePost = () => {
    const urlID = window.location.search;
    fetch(`https://jsonplaceholder.typicode.com/posts/${urlID}`)
    .then(response => response.json())
    .then(data => {
        data.forEach(e => {
            singlePost.innerHTML += `
            <div class="">
                <div class="card w-50 mx-auto d-block mini-box">
                    <div class="card-body">
                        <h6 class="text-danger">${e.id}</h6>
                        <h5 class="post-title">${e.title}</h5>
                        <p class="post-body pb-4">${e.body}</p>
                    </div>        
                </div>
            </div>
            `
        });
    })
    
}

onePost();