document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
        <header>
            <h2 class="h2"> Home Cooking</h2>
              
            <nav id="nav" style="display: flex;">
                <a href="index.html">About</a>
                <a href="ratat.html">Recipes</a>
                <a href="order.html">Order</a>
                <a href="contact.html">Contact Us</a>
            </nav>
        </header>
    `;
    

    const sidebarHTML = `
       <img src="imgs/ProfilePhoto.jpeg" alt="Profile image">
        <h2>Welcome to My Kitchen</h2> 
        <p> These pages are dedicated to those who love to cook and share.
        I hope you enjoy the recipes and comment.
        <br>
        <br>
        <a href="order.html">Order HC Spices</a>
        <div class="image-box" > <a href="cupcake.html"><img src="imgs/Cupcake.jpg" alt="cupcake"></div></a>
        <div class="image-box"><a href="quinoa.html"> <img src="imgs/quinoa salad V.jpeg" alt=" quinoa"></div></a>
        <div class="image-box"><a href="stuffedpeps.html"><img src="imgs/STuffedPeppers.jpg" alt="stuffed pepper" ></img></div></a>
    `;
    

    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('sidebar').innerHTML = sidebarHTML;
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Thank you for your enquiry. We will contact you as soon as possible. Please give us a few days, sometimes we receive a large  of volume of enquiries and to reply to each individually takes time.");
    });
});



 function toggleNav() {
    const nav = document.getElementById('nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';}


function addComment() {
    const commentInput = document.getElementById('commentInput');
    const comments = document.getElementById('comments');
    const newComment = document.createElement('p');
    newComment.textContent = commentInput.value;
    comments.appendChild(newComment);
    commentInput.value = '';
}
function submitComment() {
    alert("Thank you for your comment!");
}

