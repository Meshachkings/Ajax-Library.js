const http = new easyHTTP;

http.get('https://jsonplaceholder.typicode.com/posts', 

function(err, posts){
    if(err){
        
        console.log(err);
    } else {

        const blog = JSON.parse(posts);

        let output = '';
        blog.forEach(function(post){
            output += `<h3>Blog:${post.id} <br>Title: ${post.title}</h3>
                        <p>${post.body}</p>`;

            document.getElementById('posts').innerHTML = output;
        })
        
        // console.log(posts)
    }
});


// create post

const data  = {
    title: "custom post",
    body: "this is the blog body"
};

http.post('https://jsonplaceholder.typicode.com/posts', data,

function(err,posts){
    if(err){
        
        console.log(err);
    } else {

        // const blog = JSON.parse(posts);

        // let output = '';
        // blog.forEach(function(post){
        //     output += `<h3>Blog:${post.id} <br>Title: ${post.title}</h3>
        //                 <p>${post.body}</p>`;

            document.getElementById('posts').innerHTML = posts;
        // })
        
        console.log(posts)
    }
})

// delete post

http.delete('https://jsonplaceholder.typicode.com/posts/1', 

function(err, response){
    if(err){
        
        console.log(err);
    } else {

        const blog = response;

            document.getElementById('posts').innerHTML = blog;
        }
        
        // console.log(posts)
    }
);