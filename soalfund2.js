var list = ["ryan", "kieran", "jason", "yous"]


function filterList(nama){
    return nama.length == 4;
}

console.log(list.filter(filterList))
console.log(list[1]+list[2])



//cara 2
//for(..............){
//if list[i].length == 4 , result.push(list[i])