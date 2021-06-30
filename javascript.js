async function get() {
    let url = 'https://jsonplaceholder.typicode.com/users'
    let obj = await (await fetch(url)).json();
    return obj;
}


async function userPost(name){ 
	const url = 'https://jsonplaceholder.typicode.com/posts?userId='+name;
	const postsContainer = document.getElementById('userPost');
	fetch(url)
  	.then((response) => response.json())
  	.then((posts) => {
  		let textCont = '';
  		posts.forEach((post)=>{
  			textCont += `
  				<div class="singlePost">
	  				<h4>${post.title}</h4>
	  				<p>${post.body}</p>
	  			</div>
  			`;
  		})
  		postsContainer.innerHTML = textCont;
  	});
}


var card = document.getElementById('users');
var tags;
(async () => {
  users = await get()
  users.forEach(function(user){

 	var userInfo = document.createElement('div');
 	userInfo.setAttribute("id", "singlUser");
 	userInfo.innerHTML = `name: <strong>${user.name}</strong></br>
 	email: <strong>${user.email}</strong></br>`;
 	var button = document.createElement('button');
 	button.innerHTML = "get user's post";
 	button.addEventListener('click', function () {
	     userPost(user.id)
	});
	userInfo.appendChild(button);
 	card.appendChild(userInfo);

  })
})()
