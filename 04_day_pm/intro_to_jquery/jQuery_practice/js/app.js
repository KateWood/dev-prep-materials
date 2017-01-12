$('#addItem').click(function() {
  var $newItem = $('#addToList').val()
  $('#myList').append('<li>' + $newItem + '</li>')
  $('li').click(function() {
    $(this).toggleClass('red')
  })
  $('#addToList').val('')
})

document.getElementById('container').addEventListener('click', function() {
  console.log('CLICK HAPPENS!')
})

$('#container').click(function() {
  console.log('CLICK HAPPENS')
})
