jQuery(document).ready(function ($) {
  $('.unmuteButton').on('click', function () {
    var icon = $(this).find('i')
    var $video = $(this).parent().find("video")
    var video = $video[0];
    video.muted = !video.muted;
    if (video.muted) {
      icon.removeClass('fa-volume-off').addClass('fa-volume-up');
    } else {
      icon.removeClass('fa-volume-up').addClass('fa-volume-off');
    }
  });
});
