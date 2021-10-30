

//get post or Read in crud
function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=> {
        console.log(data)
        let postLayout = document.getElementById('post-layout')
        let html = "";
        data.forEach(e => {
            html += `
            <div class="col-md-4 mb-3">
                <a class="text-decoration-none text-dark" href = "post.html?id=${e.id}">
                <div class="card">
                    <div class="card-body">
                      <h6 class="text-danger">${e.id}</h6>
                      <h5 class="post-title mb-4">${e.title}</h5>
                      <p class="post-body">${e.body}</p>
                    </div>
                </div>
                </a>
            </div>
            `
            postLayout.innerHTML = html
        });
    })
}

getPosts();

// function openPost() {
//     window.location = "post.html"
//     let data = document.getElementById('cardLink').Value;
//     localStorage.setItem("cardLink", data);
//     return false;
// }
