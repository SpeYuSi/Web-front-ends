function flatten(arr){
    var res=[];
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            res= res.concat(flatten(arr[i]));

        }else{
            res.push(arr[i]);
        }
    }
    console.log(res);
}