$(function(){

    /* 네비 누르면 */
    $('header ul li a').on('click',function(){
        $('html,body').animate({scrollTop: $(this.hash).offset().top},500)
      })

      /* 탑버튼 */
      $(window).on('scroll',function(){
        let t_sT = $(this).scrollTop();
        if( t_sT > 180){
          $('.top').fadeIn();
        }else{
          $('.top').fadeOut();
        } 
      })

      /* 탑버튼 클릭식 */
      $('.top').on('click',function(){
        $('html, body').stop().animate({scrollTop : '0'}, 500);
      })

      
  /* 슬라이드 */
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.sub_detail .fa-caret-right',
      prevEl: '.sub_detail .fa-caret-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
})