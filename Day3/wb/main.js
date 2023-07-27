// Here's the task: I want you to write a function in Javascript that takes a URL as a string, and extracts the domain name from it. Your function should only return the domain name as a string, without any subdomains, paths, or protocols.


// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function findDomain(string){
    string = string.split("/"); //O(n)
    let array = [];   //Constant
    unwantedValues =['https:', 'http:', 'www', '']; //Constant
    for (let x = 0; x< string.length; x++){
        array.push(string[x].split("."))
        }
    console.log(array)
    array = array.flat()  //
    console.log(array)
    for (let x = 0; x < array.length; x++){ //
        if(!unwantedValues.includes(array[x])){
             return array[x];
        }
    }
    return "Invalid URL; No domain name to be found."
}


function domainName(url){
    let domain;
   
    domain = url.replace("https://", '').replace("http://", '').replace("www.", '');
    
  
    domain = domain.split('.');
    
  
    return domain[0];
  }
