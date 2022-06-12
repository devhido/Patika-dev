let isim=prompt("Lütfen isminizi giriniz:")
myName=document.querySelector("#myName")
myName.innerHTML=isim

function showTime(){
    let time=new Date();
    let y=time.getFullYear();
    let mo=time.getMonth();
    mo=++mo
    let d=time.getDate();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    myClock=document.querySelector("#myClock")
    myClock.innerHTML=d+"/"+mo+"/"+y+"  "+h+":"+m+":"+s
    setInterval("showTime()",1000);
    
}
    showTime();
