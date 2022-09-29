import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = ["zone"];
  connect() {
    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth + imageCount) + 'px';
    const slideEnabler = [1, 1];


    let leftPosition = 0;
    let counter = 0;
    $('#slider ul').css('width', totalWidth);


    const sliding = function(){
      counter++;
      leftPosition = `-${counter * imageWidth}px`;
      if(counter > imageCount - 1){
        $('#slider ul').clone().appendTo('#slider');
        $('#slider ul').last().css('left', imageWidth + 'px');
        $('#slider ul').last().addClass("lastclone");
        leftPosition = `-${totalWidth}`;
        $('#slider ul').last().animate( {left: 0 }, 1000, 'easeInQuad');
        $('#slider ul').first().animate( {left: "-400px" }, 1000, 'easeInQuad', function() {
          $('#slider ul').first().remove();
        });
        counter = 0;
      }
      else {
        $('#slider ul').animate( {left: leftPosition }, 1000, 'easeInQuad');
      }
    };

     let timer = setInterval(sliding, 2500);




    document.getElementById('slider').addEventListener('mouseover',function() {

      clearInterval(timer);
      // console.log($('#slider ul').css('left'))
      if($('#slider ul').css('left') == "-200px"){
        $('#slider ul').css({cursor: "pointer"});
        $('#slider ul').animate( {left: "-210px"}, 500);

        $('#slider ul li img').animate( {width: "210px", height: "210px"}, 500 );
        $('#slider').animate( {width: "210px", height: "210px" }, 500 );
        $('#tab2').fadeIn(500);

      }
      else if($('#slider ul').css('left') == "0px" ){
        $('#slider ul').css({cursor: "pointer"});
        $('#slider ul li img').animate( {width: "210px", height: "210px"}, 500 );
        $('#slider').animate( {width: "210px", height: "210px" }, 500 );
        $('#tab1').fadeIn(500);
      }
    });






    document.getElementById('slider').addEventListener('click',function() {

        timer = setInterval(sliding, 2500);



      if( $('#slider ul').css('left') == "-210px"){
        $('#slider ul').animate( {left: "-200px"}, 500);
        $('#slider ul li img').animate( {width: "200px", height: "200px"}, 500 );
        $('#slider').animate( {width: "200px", height: "200px" }, 500 );
        $('#tab2').fadeOut(500);
      }
      else{
        $('#slider ul li img').animate( {width: "200px", height: "200px"}, 500 );
        $('#slider').animate( {width: "200px", height: "200px" }, 500 );
        $('#tab1').fadeOut(500);
      }

    });




  }
}
