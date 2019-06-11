function domainName(url){
    var result = []
    for(var i = 0; i<url.length; i++){
        if(url[i]+url[i+1]+url[i+2]+url[i+3] == ".com"){
            
            var index = i-1
            
            while(url[index] != "." && url[index] != "/"){
                result.unshift(url[index]) // karena dimasukkannya secara backwards
                index = index -1
            }
            return result.join("")
        }
    }
}
console.log(domainName("www.google.com"))
console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("http://www.cnet.com"))