import jQuery from 'jquery'

var Hacker = {
  server: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',

  create: function(message, successCB, errorCB = null){
    // console.log(message);

    $.ajax({
      url: Hacker.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error){
        console.error('chatterbox: Failed to post messages', error)
      }
    })
  }
}

export default Hacker;