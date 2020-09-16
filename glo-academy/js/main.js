/*document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.classList.toggle('modal--visible');
    }
  };

  window.onkeydown = function(event) {
    if (event.keyCode == 27) {
      modal.classList.toggle('modal--visible');
    }
  };

  });*/
  $('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 400, 'linear');
  });  


$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }, 
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets =$('.swiper-pagination');

  next.css('left', prev.width() + 40 + bullets.width() + 40)
  bullets.css('left', prev.width() +40)

  
 


  new WOW().init();

});

$("#list").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#projectJs").offset().top
  }, 1300);
});

/* Скролл вверх */
$(document).ready(function(){

  $(function (){
  $("#back-top").hide();

  $(window).scroll(function (){
    if ($(this).scrollTop() > 700){
      $("#back-top").fadeIn();
    } else{
      $("#back-top").fadeOut();
    }
  });
  $("#back-top a").click(function (){
    $("body,html").animate({
      scrollTop:0
    }, 800);
    return false;
  });
});

$(".modal__form").validate({
  errorClass: "invalid",  
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // compound rule
    userEmail: {
      required: true,
      email: true
    }
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя должно содержать больше двух букв"
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "email обязателен",
      email: "Введите корректный e-mail в формате: name@domain.com"
    }
  }
});

$(".control__form").validate({
  errorClass: "invalid",  
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // compound rule
    userEmail: {
      required: true,
      email: true
    }
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя должно содержать больше двух букв"
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "email обязателен",
      email: "Введите корректный e-mail в формате: name@domain.com"
    }
  }
});



$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___)___-__-__"})

$(".footer__form").validate({
  errorClass: "invalid",  
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2
    },
    userPhone: "required",
    // compound rule
    userQuestion: {
      required: true,
      minlength: 5
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя должно содержать больше двух букв"
    },
    userPhone: "Телефон обязателен",
    userQuestion: {
      required: "Задайте вопрос",
      minlength: "вопрос должен быть не менее 5 символов"
    },
  }
});


});

$(document).click(function (e) {
  if ($(e.target).is('.modal')) {
    modal.toggleClass('modal--visible');
  }
});


