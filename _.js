const _={
  clamp(number,lower,upper){
    
   let lowerClampedValue =  Math.max(number,lower);
    let clampedValue = Math.min(lowerClampedValue ,upper);
   
    return clampedValue;
  }
  ,
////=====InRange method====
    inRange( number,start,end){
      if( end===undefined){
        end=start;
        start=0;
      }
      if(start>end){
        let temp=end;
        end=start;
        start=temp;
   }
   let isInRange;

 isInRange=  start<=number && number< end

   
   return isInRange;
    },
    //====words challenge====
    words(string){
      let wordsOfArray=string.split(' ');
      return wordsOfArray
},
//====pad challenge===
pad(str,numLength){
     let stringLength=str.length;
     let startPaddingLength;
     let finalstring=0;
     let paddedString =0;
     let endPaddingLength =0;
    

    if(stringLength >= numLength ){
       return str;
 
       }
 startPaddingLength=Math.floor((numLength-stringLength)/2);
 endPaddingLength = numLength-stringLength-startPaddingLength;
paddedString =' '.repeat(startPaddingLength)+str+' '.repeat(endPaddingLength);

return paddedString;

  
  },
  //===has challenge
 has(object,key){
    let hasValue;
    hasValue= object[key] ;
 if(hasValue  != undefined){
 return true
      }return false

 
   },
   //====invert challeng===
   invert(object){
       let invertedObject ={};
       for(let key in object){
           let origalValue=object[key];
           invertedObject[origalValue]=key;


       }
       return invertedObject
   },
   //====findkey challenge====
  findKey(object,predicate){
       for(let key in object){
           let value=object[key];
           let predicateReturnValue ;
           predicateReturnValue =predicate(value);

           if(predicateReturnValue==true){
          return key ;
           }
       }return undefined;
},
//===dropped
 drop(array,n){
  if(n ==undefined){
  n=1;
  }
  let droppedArray =array.slice(n);
  return droppedArray
},

//====dropWhile challenge
dropWhile(array,predicate){
let cb=(element,index) =>  !predicate(element,index,array);
let dropNumber=array.findIndex(cb);
let droppedArray=this.drop(array,dropNumber)
return droppedArray
},
 //======array chunks=====
    chunk(array,size){
        if(size ==undefined){
          size=1;
        }
 let arrayChunks=[];
 for(let counter=0; counter<array.length; counter +=size){
           
  let arrayChunk=array.slice(counter,size+counter);
       
   arrayChunks.push(arrayChunk)
    }
     return arrayChunks
      }
};



// Do not write or modify code below this line.
module.exports = _;
