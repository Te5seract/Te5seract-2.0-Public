$(document).ready(function()
{

$('.fullpop').hide();
$('.basicpop').hide();
	
  $('.fullfeat').click(function()
  {
     $('#popoutwrap').fadeIn(300);
     $('.fullpop').fadeIn(300);
  });
  $('.basicfeat').click(function()
  {
     $('#popoutwrap').fadeIn(300);
     $('.basicpop').fadeIn(300);
  });

  $('.popclose').click(function()
  {
     $('.fullpop').fadeOut(300);
     $('.basicpop').fadeOut(300);
     $('#popoutwrap').fadeOut(300);
  }); 

  $('.menustack').toggle(function()
  {
    $('.menucontain').slideDown(200);
    $('.menustack').addClass('inom-close');
    $('.menustack').removeClass('inom-stack-normal-line');
    $('.menustack').css({'font-size':'16px'});
  },
  function()
  {
    $('.menucontain').slideUp(200);
    $('.menustack').removeClass('inom-close');
    $('.menustack').addClass('inom-stack-normal-line');  
    $('.menustack').css({'font-size':'20px'});  
  });  
});