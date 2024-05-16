class Queue{
  constructor(){
    this.array={}
    this.front=0
    this.back=0 
    }
    push(val){
     this.array[this.back]=val
     this.back=this.back+1
    }
    pop(){
     if(Object.keys(this.array).length===0){
       console.log('Choose color')
     }
     else{
       delete this.array[this.front]
       this.front=this.front+1;
     }
    }
}

export default Queue