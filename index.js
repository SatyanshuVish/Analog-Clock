setInterval(()=>{
    date=new Date();
    hrs=date.getHours();
    min=date.getMinutes();
    sec=date.getSeconds();
    msec=date.getMilliseconds();

    hrsRotate=30*hrs+min/2;
    minRotate=6*min+sec/10;
    secRotate=6*sec+msec*(6/1000);

    hour.style.transform=`rotate(${hrsRotate}deg)`;
    minute.style.transform=`rotate(${minRotate}deg)`;
    second.style.transform=`rotate(${secRotate}deg)`;

},1); 