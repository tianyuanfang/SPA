$(function(){
  var $progress=$('progress'),
      timer=0,
      i=0;
  $('#start').click(function(){
    if(timer!=0) return;

    timer=window.setInterval(function(){
      $progress.attr('value',i++);
    },100);
  });

  $('#stop').click(function(){
    window.clearInterval(timer);
    timer=0;
  });

  $('#reset').click(function(){
    $progress.attr('value',i=0);
  });
});
