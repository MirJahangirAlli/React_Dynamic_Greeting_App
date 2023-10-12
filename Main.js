import React from 'react';


function Main(){

// display dynamic greeting just remove date and time('let curt=new Date().getHours();')
let curt=new Date(2023,9,18,13).getHours();
let str='';
const styl={};
const sty2={};

if(curt>=1 && curt<12){
    str="Good Morning";
    styl.color='yellow';
    sty2.backgroundImage="url('https://wallpapers.com/images/featured/sunrise-6tlr4cfeg3q0al8n.webp')";
    sty2.backgroundSize='cover';
}else if(curt>=12 && curt<19){
    str="Good Afternoon";
    styl.color='purple';
    sty2.backgroundImage="url('https://e1.pxfuel.com/desktop-wallpaper/315/463/desktop-wallpaper-sunny-afternoon.jpg')";
    sty2.backgroundSize='cover';
}else{
    str="Good Night";
    styl.color='red';
    sty2.backgroundImage="url('https://wallpapers.com/images/hd/trees-mountain-horizon-sunrise-b6ff9kgpvlry1f4k.webp')";
    sty2.backgroundSize='cover';
}
    return(
        <>
            <div style={sty2}>
                <h1>Hii Friends,<span style={styl}>{str}</span></h1>
            </div>
        
        </>
    )
}

export default Main;