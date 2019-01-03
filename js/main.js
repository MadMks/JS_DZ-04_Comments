formAddComment.onsubmit = function (event) {
    event.preventDefault();

    // Блок для комментариев.
    var comments = document.getElementById('comments');
    comments = comments.getElementsByClassName('row')[0];

    // Получаем данные комментариев.
    var form = document.forms.formAddComment;
    var name =  form.elements.name;
    var message = form.elements.message;

    // Cоздаем блок комментария.
    var commentDiv = createBlockComment(name.value, message.value);

    // Добавляем комментарий на страницу.
    comments.appendChild(commentDiv);
}

function createBlockComment(userName, message) {

    var commentDiv = document.createElement('div');
    commentDiv.className = "col-12 mt-3"
    // commentDiv.innerHTML = userName + " " + message;
    commentDiv.innerHTML =
        '<div class="card">' +
            '<div class="card-header">' + userName +
            '</div>' +
            '<div class="card-body">' +
                '<p class="card-text">' + message +
                '</p>' +
            '</div>' +
        '</div>';

    return commentDiv;
}