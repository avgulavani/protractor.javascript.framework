function Car(){

    this.color="black";
    this.engine="turbo";
    this.brand="bmw";

    this.getModel=function(){
        console.log("this is 2021 model");
    };
};

module.exports=new Car();