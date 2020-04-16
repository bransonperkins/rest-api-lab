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

// hide elements when rendered - works for every button
$('.btn').click(function(){
    $('p').hide();
});