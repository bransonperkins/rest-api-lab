// AJAX + Rest APIs Lab
// Didn't finish but will continue working on it. Spent/wasted too much time on rendering elements to page and hiding elements with hide buttons

// button 1 - get all posts
$('#allposts').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
        var all = $('<p>' + JSON.stringify(posts) + '</p>');
        $("#ex1").append(all);
    });
});

// button 2 - get post 10
$('#post10').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {id: 10}, function(post10){
        var res = $('<p>' + JSON.stringify(post10) + '</p>');
        $("#ex2").append(res);
    });
});

// button 3 - get comments from post id of 12
$('#comments').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12}, function(comments){
        var id12 = $('<p>' + JSON.stringify(comments) + '</p>');
        $("#ex3").append(id12);
    });
});

// button 4 - get all posts from user with id of 2
$('#userid2').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {userID: 2}, function(userid2){
        var post = $('<p>' + JSON.stringify(userid2) + '</p>');
        $("#ex4").append(post);
    });
});

// button 5 - create a new post and log the ID generated for it by the server
$('#newpost').click(function(){
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{userID: 15, title: "Create New Post Test", body: "Create a new post and log the ID generated for it by the server."}, function(createpost){
        var generatedID = $('<p>' + JSON.stringify(createpost.id) + '</p>');
        $("#ex5").append(generatedID);
    });
});

// button 6 (covers 2 problems) - replace the post with ID of 12 & replace the title of post with ID of 12
$('#replacepost').click(function(){
    $.ajax({
        method: 'POST',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',
        data: {
            id: 12,
            title: "Replacing old post",
            body: "Branson's post now"
        },
        success: function(data){
            var replace12 = $('<p>' + JSON.stringify(data) + '</p>');
            $('#ex6').append(replace12);
        }
    });
});

// button 7 - delete the post with ID of 12 and render a success message
$('#deletepost').on('click', function() {
    $.ajax({
        method: 'DELETE',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',
        data: {
            id: 12,
        },
        complete: function(response) {
            console.log(response.responseJSON)
            $('#ex7').append('<p>Success!</p>');
        }
    })
})

// Display a list of posts
$('#displaylist').click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(posts){
        posts.forEach(function(post){
            var list = $('<li>' + JSON.stringify(post) + '</li>');
            $('#ex8').append(list).css("text-align: center;");
        })
    });
});

// When the user clicks on a post, display all the comments from that post
$("#displaycomments").click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {postID: 7}, function(data){
        var comments = $('<p>' + JSON.stringify(data) + '</p>')
        $('#ex9').append(comments);
      });
  });

// Display a link back to all of the posts
$("#displaylink").click(function(){
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(){
        var showlink = $("<a href='https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts'>All Posts</a>")
        $('#ex10').append(showlink);
      });
  });

// hide elements when rendered - works for every button
$('.btn').click(function(){
    $('p').hide();
    $('li').hide();
    $('a').hide();
});