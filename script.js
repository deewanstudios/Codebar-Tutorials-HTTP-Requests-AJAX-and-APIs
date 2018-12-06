// github user finder example
$(document).ready(function () {
    $(document).on('keypress', '#username', function (event) {
        if (event.which === 13) {
            // console.log("Enter Key Pressed");
            var input = $(this);
            var username = input.val();
            // console.log('username was: ' + username);
            showUser(getGitHubInfo(username));
        }
    });

});

function getGitHubInfo(username) {
    var url = 'https://api.github.com/users/' + username;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
    return xmlhttp;
    // console.log(data);
    // var data = xmlhttp.responseText;
}

function showUser(xmlhttp) {
    if (xmlhttp.status === 200) {
        //  Show the user details
        // console.log(xmlhttp.status);
        var dataString = xmlhttp.responseText;
        var user = JSON.parse(dataString);
        // console.log(user);
        $('#profile h2').html(user.login + ' is GitHub user #' + user.id);
        $('#profile .information').html('<a href="' + user.html_url + '" class="profile">' + user.name + '</a>');
        $('#profile .avatar').html('<img src="' + user.avatar_url + '">');

    } else {
        // Show an error;

    }
}