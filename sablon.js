class papagali  {
    constructor(size, age, color, country){
        this.size = size;
        this.age = age
        this.color = color;
        this.country = country;
    }
    getfullopisanie(){
        return 'Size:'+this.size +'\n'+'Years:'+this.age+'\n'+'Color:'+this.color+'\n'+'Country:'+this.country
    }
}
let volnistiki = new papagali("Small", 8, "blue and black", "Australia")

// console.log(volnistiki.size)
console.log(volnistiki.getfullopisanie())
