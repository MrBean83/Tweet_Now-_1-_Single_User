$(document).ready(function() {
  $('form').on('submit', function(event){
    event.preventDefault();

    var twitter = this.tweet.value;

    $(".container").html("Waiting on your tweet");
    $.post('/', {tweet: twitter} ,  function(response){
      $(".container").html("You just tweeted<br>" + twitter);
    });
  });
});
