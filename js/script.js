$(document).ready(function () {

  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });


  $('.radio').click(function(){
    $(this).parent().find('.checked').removeClass('checked');
    $(this).addClass('checked');
    console.log($(this));
  });

  $('label.checkbox').click(function(){
    var $this = $(this).find('.input-wrapper');
    var sortText = $(this).find('.sort-text');
    sortText.toggleClass('active');
    $this.toggleClass('checked');
    if($this.hasClass('checked')){
      $(this).find('input').prop('checked', true);
    } else {
      $(this).find('input').prop('checked', false);
    }
  });

  $('.slide-banner').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    arrows: false,
    slidesToShow: 1
  });

  $('.js-sort').click(function(){
    $('.sort-option').fadeIn(100)
  });
  // $('.modal-button').click(function() {
  //   var target = $(this).data('target');
  //   $('html').addClass('is-clipped');
  //   $(target).addClass('is-active');
  // });

  // $('.modal-background, .modal-close').click(function() {
  //   $('html').removeClass('is-clipped');
  //   $(this).parent().removeClass('is-active');
  // });

  // $('.modal-card-head .delete, .modal-card-foot .button').click(function() {
  //   $('html').removeClass('is-clipped');
  //   $('#modal-ter').removeClass('is-active');
  // });

  // var $highlights = $('.highlight');

  // $highlights.each(function() {
  //   var $el = $(this);
  //   var copy = '<button class="copy">Copy</button>';
  //   var expand = '<button class="expand">Expand</button>';
  //   $el.append(copy);

  //   if ($el.find('pre code').innerHeight() > 600) {
  //     $el.append(expand);
  //   }
  // });

  // var $highlightButtons = $('.highlight .copy, .highlight .expand');

  // $highlightButtons.hover(function() {
  //   $(this).parent().css('box-shadow', '0 0 0 1px #ed6c63');
  // }, function() {
  //   $(this).parent().css('box-shadow', 'none');
  // });

  // $('.highlight .expand').click(function() {
  //   $(this).parent().children('pre').css('max-height', 'none');
  // });

  // new Clipboard('.copy', {
  //   target: function(trigger) {
  //     return trigger.previousSibling;
  //   }
  // });

});
