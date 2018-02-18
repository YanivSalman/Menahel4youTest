
//SLIDER
$(()=> {
    const Wrap = $('.in-wrapper');
    $('.prev').on('click', ()=> {
      Wrap.animate({left: '0%'}, 600, ()=>{
        Wrap.css('left', '-100%');
        $('.slide').first().before($('.slide').last());
      });
    });
    $('.next').on('click', ()=> {
     Wrap.animate({left: '-200%'}, 600, () =>{
     Wrap.css('left', '-100%');
        $('.slide').last().after($('.slide').first());
      });
    });
  });
  //font size big and small functions
function fontSmall()
{
  document.querySelector('.sectionOne').style.fontSize = '11px';
  document.querySelector('.sectionTwo').style.fontSize = '11px';
  document.querySelector('.h4one').style.fontSize = '15px';
  document.querySelector('.h4two').style.fontSize = '15px';
  document.querySelector('.h4tr').style.fontSize = '15px';
  document.querySelector('.h4for').style.fontSize = '15px';
  document.querySelector('.sectionOne').style.height = '250px';
  document.querySelector('.sectionTwoOne').style.height = '30vh';
  document.querySelector('.sectionTwoTwo').style.height = '30vh';
  document.querySelector('.sectionTwoOne').style.width = '255%';
  
}
function fontBig()
{
  document.querySelector('.sectionOne').style.fontSize = '1.9rem';
  document.querySelector('.sectionTwo').style.fontSize = '1.9rem';
  document.querySelector('.h4one').style.fontSize = '2.2rem';
  document.querySelector('.h4two').style.fontSize = '2.2rem';
  document.querySelector('.h4tr').style.fontSize = '2.2rem';
  document.querySelector('.h4for').style.fontSize = '2.2rem';
  document.querySelector('.sectionOne').style.height = '67vh';
  document.querySelector('.sectionTwoOne').style.height = '85vh';
  document.querySelector('.sectionTwoTwo').style.height = '85vh';

}

























