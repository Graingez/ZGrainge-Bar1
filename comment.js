const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthOfTheYear = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const form = document.getElementById('commentForm')
const commentBox = document.querySelector('.commentBox')

function handleSubmit(e) {
    e.preventDefault();
    console.log("zach")

    const nameInput = document.querySelector('input[id = name]');
    const name = nameInput.value;

    const emailInput = document.querySelector('input[id = email]')

    const commentInput = document.querySelector('textarea');
    const comment = commentInput.value;

    const date = new Date();


    const userComment = document.createElement('div');
    userComment.classList.add('userComment');

    const commentImgDiv = document.createElement('div');
    commentImgDiv.classList.add('commentImg')

    const commentImg = document.createElement('img');
    commentImg.src = './assets/comment-image-2.jpg';
    commentImg.alt = 'user photo';
    commentImg.setAttribute('aria-hidden', 'true');

    commentImgDiv.append(commentImg);

    const userNameAndDate = document.createElement('h4');

    userNameAndDate.textContent = (`${daysOfTheWeek[date.getDay()]}, ${monthOfTheYear[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}, by: ${name}`)


    const commentContent = document.createElement('p');
    commentContent.textContent = comment;

    const commentText = document.createElement('div');
    commentText.classList.add('commentText')

    commentText.append(userNameAndDate, commentContent);
    userComment.append(commentImgDiv, commentText);

    commentBox.append(userComment);

    nameInput.value = '';
    emailInput.value = '';
    commentInput.value = '';

}

form.addEventListener("submit", handleSubmit)
