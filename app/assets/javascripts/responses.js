$(document).ready( function () {
  $(".upvote").click( function(event) {
    var responseId = $(this).data("id");
    event.preventDefault();
    $.ajax({
      url: '/response/up_vote',
      method: 'POST',
      data: { id: responseId },
      dataType: 'JSON'
    }).done( function (voteCount) {
      if (voteCount == 1) {
        $("span[data-id=" + responseId + "]").html(voteCount + " vote");
      } else {
        $("span[data-id=" + responseId + "]").html(voteCount + " vote");
      }
    }).fail( function (failureResponse) {
        alert("You already voted for this response.");
        console.log(failureResponse);
    })
  })
})
