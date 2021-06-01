const request = require('request')

const processCode=(callback)=>{
    const url='https://api.wazirx.com/api/v2/tickers'
    request({url,json:true},(error,{body})=>{
        let valvar=Object.values(body)
        let result=[]
        for(let i=0;i<10;i++){
            result[i]={base_unit: valvar[i].base_unit,last: valvar[i].last,buy: valvar[i].buy,sell: valvar[i].sell,volume: valvar[i].volume}
        }
        callback({
            arr:result
        })
    })    
}

module.exports=processCode