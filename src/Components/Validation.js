const nameregex=/^[a-zA-Z]+$/
const ageregex=/^[0-9]+$/
const addressregex=/^[a-zA-Z0-9_]{2,33}$/
const emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const passwordregex=/^[a-zA-Z0-9@#$%^&*()]{8,24}$/
const mobileregex=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
const commentregex=/^[a-zA-Z0-9@#$%^&()]{2,100}$/
export function namecheck(value){

    if(value===""){
        return("empty name")
    }
    else{
        if(nameregex.test(value)==false){
            return("invalid name input")
        }
        else{
            return("")
        }
    }
}
export function emailcheck(value){

    if(value===""){
        return("empty email")
    }
    else{
        if(emailregex.test(value)==false){
            return("invalid email input")
        }
        else{
            return("")
        }
    }
}
export function agecheck(value){

    if(value===""){
        return("empty age")
    }
    else{
        if(ageregex.test(value)==false){
            return("invalid age input")
        }
        else{
            return("")
        }
    }
}
export function addresscheck(value){

    if(value===""){
        return("empty address")
    }
    else{
        if(addressregex.test(value)==false){
            return("invalid address input")
        }
        else{
            return("")
        }
    }
}
export function passwordcheck(value){

    if(value===""){
        return("empty password")
    }
    else{
        if(passwordregex.test(value)==false){
            return("invalid password input and have length between 8 & 22")
        }
        else{
            return("")
        }
    }
}
export function mobilecheck(value){

    if(value===""){
        return("empty mobilefeild")
    }
    else{
        if(mobileregex.test(value)==false){
            return("invalid mobile number detai")
        }
        else{
            return("")
        }
    }
}
export function commentcheck(value){

    if(value===""){
        return("empty comment")
    }
    else{
        if(commentregex.test(value)==false){
            return("invalid comment and should contain 2 to 100 length")
        }
        else{
            return("")
        }
    }
}




