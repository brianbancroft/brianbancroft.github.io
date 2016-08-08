$(function() {
    // Code here
    $('.left-page').click(function () {
      console.log('left page clicked')
      $('body').css('background-image','none')
      window.location.href = '/portfolio'
    })
    $('.right-page').click(function () {
      console.log('right page clicked')
      window.location.href = '/posts'
    })
})