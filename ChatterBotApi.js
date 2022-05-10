/*
 * @Author: your name
 * @Date: 2022-05-02 17:46:05
 * @LastEditTime: 2022-05-02 17:46:05
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /Code/Web/ChatterBotApi.js
 */
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
 
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
var client = new HttpClient();
var tall = prompt("请输入您的话:","你好！");
var msg = 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + tall
client.get(msg, function(res) {
    alert('AI说:'+result);
});