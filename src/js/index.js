jQuery(document).ready(function () {

  $('.input-checkbox').styler();

  $('.input-checkbox:checkbox').on('change', function() {
    $('.blocks__wrap').toggleClass('invert');
  });
    
   
  $('.modal-open').modal('show');
 
  
  $('.button-add').on('click', function () {
    var countBlocks = $('.block__item').length,
      newBlockNumber =  countBlocks + 1; 
      blocksWrap = $('.blocks__wrap');
    blocksWrap.append('<div class="block__item" data-toggle="modal" data-target="#popup"> \n' +
      '              <div class="block__content">Блок ' + newBlockNumber + '</div>\n' +
      '            </div>');
  });

  $(document).on('click touchstart', '.block__item', function(){
    var blockInn = $(this).find('.block__content').text();
    $('#popup').on('show.bs.modal', function (e) {
      $(".modal-container").empty();
    });
    $('#popup').on('shown.bs.modal', function (e) {
      $('.modal-container').text(blockInn)
    });
  });
  
  
  
});





