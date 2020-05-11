class Rectangle 
{ 
    constructor(height, width) 
    { 
        this.name = '四邊形'; 
        this.height = height; 
        this.width = width;     
    } 
    get area()
    { 
        return this.height * this.width;     
    } 
} 
var r = new Rectangle(6, 3); 
console.log(r); 
console.log(r.area);
console.log('-'.repeat(60));
class Rectangle
{ 
    constructor(height, width) 
    { 
        this.height = height; 
        this.width = width;     
    } 
    Area()
    { 
        return this.height * this.width;     
    } 
} 
class Square extends Rectangle 
{ 
    constructor(width) 
    { 
        super(width, width); 
        this.name = '正方形'    
    } 
} 
var r = new Rectangle(6, 3); 
console.log(r); 
console.log(r.Area());
console.log(r.area);

