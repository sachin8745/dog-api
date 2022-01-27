document.getElementById('btn').addEventListener("click",makerequest);


function makerequest(){
    console.log("Button Clicked");
    // config ={
    //     method:'get',
    //     url:'data.txt'
    // }
    axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>{        //is trh se bhi output aa jayega
        console.log(res)
       console.log(res.data.message)
       document.getElementById("image").setAttribute('src',res.data.message)
        // document.getElementById('divdata').innerText = res.data
})
}


// axios('data1.txt').then((res)=>{       //chuki error krni h tb
//     console.log(res)
//     console.log(res.data)
    
// }).catch((error)=>{
//     console.log('error');
// })
// }
