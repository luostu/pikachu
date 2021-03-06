!function(){
var duration=50
$('.action').on('click','button',function(e){
    
let $button=$(e.currentTarget)
let speed=$button.attr('data-speed')
$button.addClass('active')
.siblings('.active').removeClass('active');
switch(speed){
    case 'slow':
        duration=100
    break
    case 'normal':
        duration=50
    break
    case 'fast':
        duration=10
    
}
})



function writeCss(code){
    let mydom=document.querySelector("#myDom")
    let mycss=document.querySelector("#cssTag") 
     n=0
   
    let id=setTimeout(function run(){
        n+=1
        mydom.innerHTML=code.substring(0,n)
        mycss.innerHTML=code.substring(0,n)
        mydom.scrollTop=mydom.scrollHeight//如果这句话没有用的话,一定要把overflow：hidden放在mydom里面
        
        if(n<=code.length){
            id=setTimeout(run,duration) 
    }  
    }, duration);
}

let css=`.nose{
       width:0px;
       height:0px;
       border-radius: 50%;
       border-color: black transparent transparent transparent;
       border-width: 14px;
       border-style: solid;
       position: absolute;
       top: 30px;
       left: 50%;
       margin-left:-15px ;
    }
    .eye{
        position: absolute;
        width: 55px;
        height:55px;
        border-radius: 50%;
        border-width: 1px;
        border-style: solid;
        border-color: #000000;
        background-color: #2e2e2e;
        left:50%;
        margin-left:-15px
    }
    .eye.left{
    margin-left:-120px;
    }
    .eye.right{
     margin-left:69px;
    }
    .eye::before{
        content:' ';/*这个很重要*/
        width: 26px;
        height: 26px;
        position: absolute;/*这个很重要*/
        border-radius: 50%;
       left: 6px;
       top:3px;
       background-color: white;
       border-color: black;
       border-width: 1px;
       border-style: solid;
    }
    .cheek{
        position: absolute;
        width: 72px;
        height:72px;
        border-radius: 50%;
        border-width: 1px;
        border-color: #000000;
        background-color: #fe0100;
        left:50%;
        margin-left:-36px;
        border-style: solid;
        top:13px
    }
    .cheek.left{
        margin-left: -168px;
        margin-top: 77px;
    }
    .cheek.right{
        margin-left: 98px;
        margin-top: 77px;
    }
    .upperLip{
        
       background-color: #fee600;
        position: absolute;
          border: 2px solid black;
          position: absolute;
          left:50%;
          z-index: 1;
     }
     .upperLip.left{
        height: 25px;
        width: 80px;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-30deg);
        top: 56px;
        margin-left:-80px;
     }
     .upperLip.right{
        height: 25px;
        width: 80px;
        
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(30deg);
        top: 56px;
     }
    .lowerLip-wrapper{
        position: relative;
        height: 122px;
        width: 100px;
        left: 50%;
        margin-left: -50px;
        overflow: hidden;
        top:58px;
      
    }
    .lowerLip{
        position:absolute;
        height: 439px;
        width: 98px;
        border-radius: 49px/204px;
        background-color: #9a0109;
        bottom:0px;
        overflow:hidden;
        border: 1px solid black;
        
    }
    .lowerLip::after{
        position: absolute;
        content: '';
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: #ff485f;
        bottom:-4px;
    }
`
writeCss(css)
}.call()