function f() {
  console.log('Loading')
   wait(1)
   console.log('FILE "BlackTable" open')
 document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="tableYes.png">');
 }
function fwhite() {
 console.log('Loading')
   wait(1)
   console.log('FILE "WhiteTable" open')
 document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="whitetable.png">');
 }
 function wait(sec) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < sec*1000);
}
function fILEopenMirorBlack() {
  console.log('Loading')
   wait(1.5)
   console.log('FILE "BlackMirror" open')
  document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="Mirrorcolorblack.png">');
  }
function FILEopenMirrorRed() {
   console.log('Loading')
   wait(1.5)
   console.log('FILE "RedMirror" open')
   document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="Mirorred.png">');
   }
function FILEopenMirrorPink() {
   console.log('Loading')
   wait(1.5)
   console.log('FILE "PinkMirror" open')
   document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="Mirorpink.png">');
   }
   function FILEopenMirrorYellow() {
   console.log('Loading')
   wait(1.5)
   console.log('FILE "YellowMirror" open')
   document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="yellow.png">');
   }
   function FILEopenMirrorGreen() {
   console.log('Loading')
   wait(1.5)
   console.log('FILE "GreenMirror" open')
   document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="mirrorgreen.png">');
   }
   function FILEopenMirrorBlue() {
   console.log('Loading')
   wait(1.5)
   console.log('FILE "BlueMirror" open')
   document.write('<title>Файлы покупки</title><link rel="stylesheet" href="index.css"><img src="bluemirror.png">');
   }
