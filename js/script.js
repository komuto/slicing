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

  // $('.slide-banner').slick({
  //   dots: false,
  //   infinite: true,
  //   speed: 300,
  //   autoplay: true,
  //   arrows: false,
  //   slidesToShow: 1
  // });

  $('.js-sort').click(function(){
    $('.sort-option').fadeIn(100);
  });
  $('.js-option').click(function(){
    var dataTarget = $(this).data('target');
    $(dataTarget).fadeIn(100);
  });
  $('.js-close').click(function(){
    var dataTarget = $(this).data('target');
    $(dataTarget).fadeOut(100);
  });
  $('.modal-button').click(function() {
    var target = $(this).data('target');
    $('html').addClass('is-clipped');
    $(target).addClass('is-active');
  });

  $('.modal-background, .delete').click(function() {
    $('html').removeClass('is-clipped');
    $(this).parents('.modal').removeClass('is-active');
  });

  $('.tabs ul li a').click(function(){
    var dataTarget = $(this).data('target');
    var thisActive = $(this).parent('li');
    $(this).parents('ul').find('.is-active').removeClass('is-active');
    $(this).parent().addClass('is-active');
    $('.filter-option').removeClass('active');
    if(thisActive.hasClass('is-active')) {
      $(dataTarget).addClass('active');
    } else {
      $('.filter-option').removeClass('active');
    }
  });

  var bars=document.querySelectorAll('.sticky')
  Array.prototype.forEach.call(bars, function(bar) {
    sticky(bar);
  });

  // $('.search-form .control .input').click(function(){
  //   var onSearch = $('.on-search');
  //   var body = $('body');
  //   var input = $('.input');
  //   //onSearch.fadeIn(100);
  //   onSearch.addClass('slide');
  //   //body.addClass('search-open');
  //   input.focus();
  //   return false;
  // });
  // $('.back-on-seacrh').click(function(){
  //   var onSearch = $('.on-search');
  //   var body = $('body');
  //   //onSearch.fadeOut(200);
  //   onSearch.removeClass('slide');
  //   body.removeClass('search-open');
  // });

  $('.slide-banner').owlCarousel({
      margin:0,
      nav: false,
      navText: false,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });
  $('.slide-items').owlCarousel({
      stagePadding: 50,
      margin:0,
      nav: false,
      navText: false,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  });
  $('.slide-product').owlCarousel({
      stagePadding: 75,
      margin:0,
      nav: false,
      navText: false,
      dots: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });

  // open description detail
  $('.js-desc').click(function(){
    var $this = $(this);
    var descWrapp = $this.parent().find('.desc-wrapp');
    //onSearch.fadeOut(200);
    descWrapp.toggleClass('open');
    $this.toggleClass('close');
  });

  //collpased
  $('.js-collapse').click(function(){
    var thisParent = $(this).parents('.main-collapse');
    var thisParentSecond = $(this).parent();
    var dataTarget = $(this).data('target');

    // thisParent.find('.active').removeClass('active');
    // thisParent.find('.collapsed').removeClass('collapsed');

    thisParentSecond.toggleClass('active');
    $(dataTarget).toggleClass('collapsed');
    //alert(dataTarget);
  });

  $('.option-content').click(function(){
    var thisParent = $(this).parent();
    thisParent.toggleClass('open')
  });
// var textarea = document.querySelector('.text-discus');

// textarea.addEventListener('keydown', autosize);
             
// function autosize(){
//   var el = this;
//   setTimeout(function(){
//     el.style.cssText = 'height:auto; padding:0';
//     // for box-sizing other than "content-box" use:
//     // el.style.cssText = '-moz-box-sizing:content-box';
//     el.style.cssText = 'height:' + el.scrollHeight + 'px';
//   },0);
// }
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
