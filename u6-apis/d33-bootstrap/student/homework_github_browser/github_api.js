$(function(){
  $("input:submit").click(function(){
    event.preventDefault();
    var githubUsername = $(".username-field").val();

    $.ajax({
        url: "https://api.github.com/users/"+githubUsername,
        method: 'GET',
        success: function(data,status,xhr){
          $('.profile').append("<img src='"+data.avatar_url+"'class='img-circle'/><h1>" + data.name + '</h1>');
          // $('.profileImage').append("<img src='"+data.avatar_url+"'class='img-circle'/>");
          $('.repolink').append("<a href='#'><p id='repo'> Number of public repos:</a> " + data.public_repos + "</p><div class='theRepo repolist'></div>");
          $('.gistlink').append("<a href='#'><p id='gists'> Number of public gists:</a> " + data.public_gists+ "</p><div class='gistlist'></div>");

          $('#repo').click(function(){
            event.preventDefault();
            $.ajax({
              url: data.repos_url,
              method: 'GET',
              success: function(data, status, xhr){
                data.forEach(function(element, index, array){
                  $('.repolist').append("<h3><a href ='"+element.html_url+"'>"+ element.name+
                  "</a></h3><ul'><li>Description: "+element.description+
                  "</li><li>Language: "+element.language+ "</li></ul>");
                });
              }
            });
          });

          $('#gists').click(function(){
            event.preventDefault();
            $.ajax({
              url: "https://api.github.com/users/"+data.login+"/gists",
              method: 'GET',
              success: function(data, status, xhr){
                data.forEach(function(element, index, array){
                  $('#gistlist').append("<p><a href ='"+element.html_url+"'>"+ element.description+"</a></p>");
                });
              }
            });
          });

        },
        error: function(xhr,status,data){
          console.log('there is an error');
        }
      })
    });
});
