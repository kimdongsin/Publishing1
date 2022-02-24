$(function(){

    checkMobile(); //디바이스 종류 체크

    $(".sms").on("click",function(){
        var idx = $(this).index();
        smsSend(idx);
    });
    
});

function checkMobile(){
    var UA = navigator.userAgent.toLowerCase(); //userAgent 체크
    if ( UA.indexOf('android') > -1) {
        //Android
        return "android";
    } else if ( UA.indexOf("iphone") > -1 || UA.indexOf("ipad") > -1 || UA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
    } else {
        //Android, IOS 외
        return "other";
    }
}

function smsSend(idx){ //Android, IOS, 자동분기
    if(idx == 0){
    location.href = 'sms:' +''+ '?' + 'body='+ encodeURIComponent("Android 수신자 없음\nSMS SEND TEST");
    } else if(idx == 1){
        location.href = 'sms:' +'01012341234'+ '?' + 'body='+ encodeURIComponent("Android 수신자 있음\nSMS SEND TEST");
    } else if(idx == 2){
        location.href = 'sms:' +''+ '&' + 'body='+ encodeURIComponent("IOS 수신자 없음\nSMS SEND TEST");
    } else if(idx == 3){
        location.href = 'sms:' +'01012341234'+ '&' + 'body='+ encodeURIComponent("IOS 수신자 있음\nSMS SEND TEST");
    } else if(idx == 4){
        location.href = 'sms:' +'01012341234'+ (checkMobile() == 'ios' ? '&' : '?') + 'body='+ encodeURIComponent("자동분기 보내기\nSMS SEND TEST");
    }
}