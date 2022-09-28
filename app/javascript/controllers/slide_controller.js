import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
static targets = ["zone"];
  connect() {


    const imageCount = $('#slider ul li').length;
    const imageWidth = $('#slider ul li img').first().width();
    const totalWidth = (imageWidth + imageCount) + 'px';

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

    });






    document.getElementById('slider').addEventListener('mouseout',function() {
      timer = setInterval(sliding, 2500);

    });

  }


}
