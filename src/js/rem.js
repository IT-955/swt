(function(doc, win) {
  var docE1 = doc.documentElement,
    bodys = document.getElementsByTagName("body")[0],
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docE1.clientWidth;
      if (!clientWidth) return;
      docE1.style.fontSize = 100 * (clientWidth / 840) + "px";
      bodys.style.visibility = "visible";
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

/*
meta设置：
<meta name="viewport" content="initial-scale=1,width=device-width,user-scalable=no"/>

*/
// (function() {
//   var change = "orientationchange" in window ? "orientationchange" : "resize";

//   function calculate() {
//     var deviceWidth = document.documentElement.clientWidth;

//     if (deviceWidth < 241) {
//       deviceWidth = 240;
//     } else if (deviceWidth < 320) {
//       deviceWidth = 320;
//     } else if (deviceWidth > 850) {
//       deviceWidth = 850;
//     }

//     document.documentElement.style.fontSize = deviceWidth / 8.5 + "px";
//   }

//   window.addEventListener("resize", calculate, false);

//   calculate();
// })();
/*
1.立即执行函数,建立私有作用域，从而限制向全局作用域中添加过多的变量和函数
     (function () {})();
     ;(function () {}());
*/

/*
2.
var change ='orientationchange' in window ?'orientationchange' :'resize';
    看移动端是否支持orientationchange ，否则监听 rezise 事件。
    orientationchange：设备旋转的时候，会触发这个事件
   resize:监听窗口变化。
*/

// 3.iphone5 屏幕分辨率 宽是 320px, iphone6，7，8 屏幕分辨率 宽是 375px

/*
4.
如果 <html style= "font-size:37.5px;"> , 此时，1rem = 37.5px;
document.documentElement.style.fontSize =deviceWidth /7.5 +'px';
如果 设备宽是 750px，html 的 font-size 则为 100px;
1rem = 100px; 1px = 1/100 rem; 5px = 5/100rem;
也就是 7.5=设计稿尺寸/100；
css元素尺寸=设计稿元素尺寸/100；
一般情况下设计师给的PSD尺寸是750px,所以采用7.5；如果是640，采用6.4；
window.addEventListener(change,calculate,false); // 设备旋转时触发；
calculate(); // 刷新时触发

*/

/*
  在样式里设置！！！

  1.移动端安卓和IOS 默认中文字体看起来是差不多的，而针对英文和数字的字体区别比较大；
  而 Helvetica 两个系统都支持，可以这样设置
  body{font-family:Helvetica;}
  2.css元素设置
  .carbox{
      width:6.5rem;   设计图上元素宽为650px,除以100；
      margin:0 auto;
      padding:0.1rem 0 0 0.27rem;
}

*/
