         /*
         $(".jumbotron").css({ height: $(window).height() + "px" });
         $(window).on("resize", function() {
         $(".jumbotron").css({ height: $(window).height() + "px" });
         });
         $(".h-full").css({ height: $(window).height() + "px" });
         $(window).on("resize", function() {
         $(".h-full").css({ height: $(window).height() + "px" });
         });
         */
         
         $(function(){
             $(".container1").twentytwenty();
           });
         
         
         $(document).ready(function() {
             if( $(window).width() < 999) { 
                $("#g_row").addClass('owl-carousel');
                $('#g_row').owlCarousel({
                    autoWidth:true,
                     loop:true,
                    responsive: false,
                });
             }

         $('.owl-carousel1').owlCarousel({
         mouseDrag:false,
         loop:true,
         margin:2,
         nav:true,
         responsive:{
         0:{
           items:1
         },
         600:{
           items:1
         },
         1000:{
           items:3
         }
         }
         }); 
         
         $('.owl-prev').click(function() {
         $active = $('.owl-item .item.show');
         $('.owl-item .item.show').removeClass('show');
         $('.owl-item .item').removeClass('next');
         $('.owl-item .item').removeClass('prev');
         $active.addClass('next');
         if($active.is('.first')) {
         $('.owl-item .last').addClass('show');
         $('.first').addClass('next');
         $('.owl-item .last').parent().prev().children('.item').addClass('prev');
         }
         else {
         $active.parent().prev().children('.item').addClass('show');
         if($active.parent().prev().children('.item').is('.first')) {
           $('.owl-item .last').addClass('prev');
         }
         else {
           $('.owl-item .show').parent().prev().children('.item').addClass('prev');
         }
         }
         });
         
         $('.owl-next').click(function() {
         $active = $('.owl-item .item.show');
         $('.owl-item .item.show').removeClass('show');
         $('.owl-item .item').removeClass('next');
         $('.owl-item .item').removeClass('prev');
         $active.addClass('prev');
         if($active.is('.last')) {
         $('.owl-item .first').addClass('show');
         $('.owl-item .first').parent().next().children('.item').addClass('prev');
         }
         else {
         $active.parent().next().children('.item').addClass('show');
         if($active.parent().next().children('.item').is('.last')) {
           $('.owl-item .first').addClass('next');
         }
         else {
           $('.owl-item .show').parent().next().children('.item').addClass('next');
         }
         }
         });
         
         });
         
         
         let modalId = $('#image-gallery');
         
         $(document)
         .ready(function () {
         
         loadGallery(true, 'a.thumbnail');
         
         //This function disables buttons when needed
         function disableButtons(counter_max, counter_current) {
         $('#show-previous-image, #show-next-image')
         .show();
         if (counter_max === counter_current) {
         $('#show-next-image')
         .hide();
         } else if (counter_current === 1) {
         $('#show-previous-image')
         .hide();
         }
         }
         
         /**
         *
         * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
         * @param setClickAttr  Sets the attribute for the click handler.
         */
         
         function loadGallery(setIDs, setClickAttr) {
         let current_image,
         selector,
         counter = 0;
         
         $('#show-next-image, #show-previous-image')
         .click(function () {
         if ($(this)
           .attr('id') === 'show-previous-image') {
           current_image--;
         } else {
           current_image++;
         }
         
         selector = $('[data-image-id="' + current_image + '"]');
         updateGallery(selector);
         });
         
         function updateGallery(selector) {
         let $sel = selector;
         current_image = $sel.data('image-id');
         $('#image-gallery-title')
         .text($sel.data('title'));
         $('#image-gallery-image')
         .attr('src', $sel.data('image'));
         disableButtons(counter, $sel.data('image-id'));
         }
         
         if (setIDs == true) {
         $('[data-image-id]')
         .each(function () {
           counter++;
           $(this)
             .attr('data-image-id', counter);
         });
         }
         $(setClickAttr)
         .on('click', function () {
         updateGallery($(this));
         });
         }
         });
         
         // build key actions
         $(document)
         .keydown(function (e) {
         switch (e.which) {
         case 37: // left
         if ((modalId.data('bs.modal') || {})._isShown && $('#show-previous-image').is(":visible")) {
         $('#show-previous-image')
           .click();
         }
         break;
         
         case 39: // right
         if ((modalId.data('bs.modal') || {})._isShown && $('#show-next-image').is(":visible")) {
         $('#show-next-image')
           .click();
         }
         break;
         
         default:
         return; // exit this handler for other keys
         }
         e.preventDefault(); // prevent the default action (scroll / move caret)
         });
