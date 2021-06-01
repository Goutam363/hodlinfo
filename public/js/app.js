fetch('/user-index').then((response)=>{
    response.json().then((data)=>{
        let temp=""
        for(let i=0;i<data.arr.length;i++){
            let j=i+1;
            temp += "<tr><td>"+j+"</td>"
            temp += "<td>"+data.arr[i].base_unit.toUpperCase()+"/INR</td>"
            temp += "<td>₹ "+data.arr[i].last+"</td>"
            temp += "<td>₹ "+data.arr[i].buy+" / ₹ "+data.arr[i].sell+"</td>"
            temp += "<td>"+data.arr[i].volume+"</td>"
            temp += "<td>"+data.arr[i].base_unit+"</td></tr>"
        }
        document.getElementById('tabledata').innerHTML=temp
    })
})