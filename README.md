# imook-qqDrag
慕课学习:点击面板实现鼠标跟随

>> 在慕课上学习[DOM事件探秘](http://www.imooc.com/learn/138)第四章[Q面板拖拽](http://www.imooc.com/video/2162)的练习代码

* 发现自己的问题：习惯用jquery，对js使用十分不熟练，以后要加强JS的学习

* 我的收获：
  1. 用css画的小三角，加强css的练习，代码如下：
    <pre><code>
      //这是一个绿色的倒立等腰三角型，可用在下拉框上，三角向上`border-top`改为`border-bottom`，同理，左右，只要将箭头指向的那一边相反方向的边框写上颜色（左右箭头一定要设置宽高为0，否则图形会变成梯形）
      .triangle{
          height: 0px;
          width: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid green;
      }
    </code></pre>
    实现原理参考文章：张鑫旭大神的的[CSS border三角、圆角图形生成技术简介](CSS border三角、圆角图形生成技术简介)
                    推酷上写的一篇[终于搞懂css实现三角形d图标的原理]（http://www.tuicool.com/articles/3eaINn）
  2. 不使用事件时可用document+事件名=null来取消事件效果。eg：`document.onmousemove=null` 
  3. 一些获取元素和屏幕宽高的函数：
      获取屏幕可视区域宽高：
        适用于手机：
        document.documentElement.clientWidth; 
        document.documentElement.clientHeight;

        电脑端：
        window.screen.width
        window.screen.height

      获取元素宽高：
        offsetHeight：元素本身的高+padding值+border，不包括margin值
        offsetWidth同理
