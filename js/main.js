let i = 0;
const images = [];
const time = 5000;

images[0] = 'img/image1.png';
images[1] = 'img/image2.png';
images[2] = 'img/image3.png';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}
window.onload = changeImg;