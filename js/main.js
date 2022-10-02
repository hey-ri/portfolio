$(function () {
    /* ===================전체적인 제어=================== */
    /* 이메일 클릭시 주소 보이게 */
    $(".h_top .contact i.fa-envelope , footer p.email").on("click", function (e) {
        e.preventDefault();
        $(".email_banner").show();
    });

    $(".email_banner button").on("click", function () {
        $(this).parent().hide();
    });

    /* 네비 클릭시 이동 */
    $("header nav ul li a , ul.sub_nav li a").click(function () {
        $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 300);
    });

    /* 탑버튼, 햄버거 버튼 튀어나오게 */
    $(window).on("scroll", function () {
        let t_sT = $(this).scrollTop();
        if (t_sT > 180) {
            $(".top").fadeIn();
            $("nav.ham").fadeIn();
        } else {
            $(".top").fadeOut();
            $("nav.ham").fadeOut();
        }
    });

    /* 햄버거 버튼 클릭시 */
    $("nav.ham button.open").on("click", function () {
        $("ul.sub_nav").slideToggle();
    });

    /* 탑버튼 클릭시 */
    $(".top").on("click", function () {
        $("html, body").stop().animate({ scrollTop: "0" }, 500);
    });

    /* 스킬 호버시 */
    $("section.skills ul li").hover(
        function () {
            $(this).find("p").css({ opacity: 1 });
        },
        function () {
            $(this).find("p").css({ opacity: 0 });
        }
    );

    /* 포트폴리오 탭 메뉴 */
    $("section.portfolio ul.menu > li").on("click", function (e) {
        e.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        var indexNum = $(this).index();
        $("section.portfolio .artwork_board ul.tab_con > li").eq(indexNum).addClass("on");
        $("section.portfolio .artwork_board ul.tab_con > li").eq(indexNum).siblings().removeClass("on");
    });

    /* 아덜스 슬라이드 */
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2.5,
        freeMode: true,
        loop: true,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        breakpoints: {
            // 반응형 조건 속성
            1364: {
                // 1364 이상일 경우
                slidesPerView: 2.5,
            },
            1024: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 1.5,
            },
            0: {
                slidesPerView: 1.2,
            },
        },
    });

    /* 아덜스 마우스 호버시 멈추게 */
    let swiper_hover1 = () => {
        $(".others .swiper-slide").on("mouseover", function () {
            swiper.autoplay.stop();
            $(this).find("ul").stop().fadeIn();
        });
        $(".others .swiper-slide").on("mouseout", function () {
            swiper.autoplay.start();
            $(this).find("ul").stop().fadeOut();
        });
    };
    swiper_hover1();

    /* 디자인 부분 동영상 나오게 하기 */
    $("section.design article.five a").on("click", function (e) {
        e.preventDefault();
        $("div.vid_modal").show();
    });
    /* vid modal 없애기 */
    $("div.vid_modal i").click(function () {
        $(this).parent().hide();
    });

    /* ==================모바일 버전 제어 상황 ================== */

    /* 모바일 버전 햄버거 버튼 누를 시 헤더 나오게 */
    $("header nav .mobile_btn").on("click", function () {
        $("header nav .mobile_nav").animate({ left: "0" }, 500);
        $(".mobile_bg").css("background-color", "rgba(0, 0, 0, 0.5)").show();
    });

    $("header nav .mobile_btn_close").on("click", function () {
        $("header nav .mobile_nav").animate({ left: "150%" }, 500, function () {
            $(".mobile_bg").css("background-color", "transparent").fadeOut();
        });
    });

    /* 모바일 네비 누르면 올라가게 */
    function mobilde_nav() {
        $("header nav ul li a").click(function () {
            $("html, body").animate({ scrollTop: $(this.hash).offset().top });
        });
    }

    /* 퀵메뉴 버튼 모바일 해상도 일 때 숨기기 */
    if (matchMedia("screen and (max-width:768px)").matches) {
        $("nav.ham").hide();
        $(window).off("scroll");
    }

    /* 포트폴리오 그림 클릭 했을 때 기획서, 웹페이지 볼 수 있게 & 네비 제어 */

    const media = matchMedia("screen and (max-width:768px)");
    media.addListener((e) => {
        //f5 키 막는 것, 새로고침 하면 똑같이 안먹힘
        /* document.addEventListener("keydown", (e) => {
          if (e.keyCode === 116) {
            e.preventDefault();
          }
        }); */
        mobilde_nav();
        mobile_click();
    });
    if (media.matches) {
        mobilde_nav();
        mobile_click();
    }

    function mobile_click() {
        $("section.portfolio .artwork_board .artwork").on("click", function () {
            $("section.portfolio .artwork_board .mobile_click_box").show();
        });
        $("section.portfolio .artwork_board .mobile_click_box").on("click", function () {
            $(this).toggle();
        });
    }

    /* 
      const media_main = matchMedia('screen and (min-width:768px)');
      media.addListener((e)=>{
        $('section.portfolio .artwork_board .click_box').on('click',function(){
          $(this).show()
        })
      }) */

    /* $('header nav .mobile_btn_close').on('click scroll touchmove mouswhell',function(e){
        e.preventDefault();
        e.stopPropagation();
        return false;
      }) */
});
