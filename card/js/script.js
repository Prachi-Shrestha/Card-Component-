$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
            $(".all").addClass('active');
            $(".scenery").removeClass('active');
            $(".profile").removeClass('active');
            $(".recipes").removeClass('active');
        }
        else
        {
            $(".all").removeClass('active');
            $(".filter").not('.'+value).hide('1000');
            $(".btn").not('.'+value).removeClass('active');
            $(".btn").filter('.'+value).addClass('active');
            $('.filter').filter('.'+value).show('1000');
        }
    });    
});
$( window ).scroll(function() {
    if ($(this).scrollTop()>10) 
    {
        $( ".arr" ).fadeIn("4000");
    }
    else
    {
        $( ".arr" ).fadeOut();
    }
  
});
function topFunction() {
  document.documentElement.scrollTop = 0; 
} 
function myFunction() {
    if($('.book').hasClass('far'))
    {
      $(".book").removeClass('far');
      $(".book").addClass('fas');
    }
    else
    {
      $(".book").addClass('far');
      $(".book").removeClass('fas');
    }
}
function myFunction1() {
    if($('.book1').hasClass('far'))
    {
      $(".book1").removeClass('far');
      $(".book1").addClass('fas');
    }
    else
    {
      $(".book1").addClass('far');
      $(".book1").removeClass('fas');
    }
}
function myFunction2() {
    if($('.book2').hasClass('far'))
    {
      $(".book2").removeClass('far');
      $(".book2").addClass('fas');
    }
    else
    {
      $(".book2").addClass('far');
      $(".book2").removeClass('fas');
    }
}3
function myFunction3() {
    if($('.book3').hasClass('far'))
    {
      $(".book3").removeClass('far');
      $(".book3").addClass('fas');
    }
    else
    {
      $(".book3").addClass('far');
      $(".book3").removeClass('fas');
    }
}
function myFunction4() {
    if($('.book4').hasClass('far'))
    {
      $(".book4").removeClass('far');
      $(".book4").addClass('fas');
    }
    else
    {
      $(".book4").addClass('far');
      $(".book4").removeClass('fas');
    }
}
function myFunction5() {
    if($('.book5').hasClass('far'))
    {
      $(".book5").removeClass('far');
      $(".book5").addClass('fas');
    }
    else
    {
      $(".book5").addClass('far');
      $(".book5").removeClass('fas');
    }
}
function myFunction6() {
    if($('.book6').hasClass('far'))
    {
      $(".book6").removeClass('far');
      $(".book6").addClass('fas');
    }
    else
    {
      $(".book6").addClass('far');
      $(".book6").removeClass('fas');
    }
}
function myFunction7() {
    if($('.book7').hasClass('far'))
    {
      $(".book7").removeClass('far');
      $(".book7").addClass('fas');
    }
    else
    {
      $(".book7").addClass('far');
      $(".book7").removeClass('fas');
    }
}
function myFunction8() {
    if($('.book8').hasClass('far'))
    {
      $(".book8").removeClass('far');
      $(".book8").addClass('fas');
    }
    else
    {
      $(".book8").addClass('far');
      $(".book8").removeClass('fas');
    }
}
function myFunction9() {
    if($('.book9').hasClass('far'))
    {
      $(".book9").removeClass('far');
      $(".book9").addClass('fas');
    }
    else
    {
      $(".book9").addClass('far');
      $(".book9").removeClass('fas');
    }
}
function closefunction() {
  $(".fullbody").hide(200);
  document.documentElement.scrollTop = 0;
}
function pizzafunction() {
  $(".pizzafull").show(3000);
  document.documentElement.scrollTop = 0;
}
function ludanafunction() {
  $(".ludanafull").show(3000);
  document.documentElement.scrollTop = 0;
}
function kachorifunction() {
  $(".kachorifull").show(3000);
  document.documentElement.scrollTop = 0;
}
function palisthafunction() {
  $(".palisthafull").show(3000);
  document.documentElement.scrollTop = 0;
}
function breadfunction() {
  $(".breadfull").show(3000);
  document.documentElement.scrollTop = 0;
}
function cakefunction() {
  $(".cakefull").show(3000);
  document.documentElement.scrollTop = 0;
}
function chipsfunction() {
  $(".chipsfull").show(3000);
  document.documentElement.scrollTop = 0;
}
function chhaharefunction() {
  $(".chhaharefull").show(3000);
  document.documentElement.scrollTop = 0;
}
function patanfunction() {
  $(".patanfull").show(3000);
  document.documentElement.scrollTop = 0;
}
function kalinchowkfunction() {
  $(".kalinchowkfull").show(3000);
  document.documentElement.scrollTop = 0;
}