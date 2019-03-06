function Storage(){
    
}
Storage.prototype.setStorage=function(key,value){
    console.log(key,value)
    if(typeof value =="object"){
        value=JSON.stringify(value);
    }
    localStorage.setItem(key,value)
}
Storage.prototype.getStorage= function(key){
    var value=localStorage.getItem(key);
    return JSON.parse(value);
}

export default new Storage();