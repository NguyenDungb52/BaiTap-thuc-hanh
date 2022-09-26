let arr  = ['09812345','08912345','09112345']
    for(i = 0; i<arr.length; i++){
        if(arr[i].indexOf('098')){
            console.log(' Viettel')
        }else if(arr[i].indexOf('089')){
            console.log('Mobifone')
        }else{
            console.log('Vinaphone')
        }
    }