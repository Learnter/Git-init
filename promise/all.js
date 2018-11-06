var p1 = new Promise((resolve,reject)=>{
    setTimeout(function() {
         resolve("p1成功");
    }, 1000);
})

var p2 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        resolve("p2成功");
    }, 2000);
})

var p3 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        reject("p3失败");
    }, 3000);
})

//用于多个请求的时候 all()需要全部请求成功,返回请求成功,若一个请求失败,请求失败！
var p4 = Promise.all([p1,p2,p3]);

p4.then((response)=>{
    console.log(response);
},(error)=>{
    console.log(error);
});




//同样用于多个请求,例如同时请求的状态如果是4开头或者5开头的状态
//那么只要有一个请求出现响应的状态,那么该promise的结果执行该结果
var p5 = Promise.race([p2,p3,p1]);
p5.then((response)=>{
     console.log(response);
},(error)=>{
    console.log("异常信息"+error);
})