function Validation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    // (?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    if(values.name===""){
        error.name="Name should not be empty"
    }
    
    else{
        error.name=""
    }
    if(values.email===""){
        error.email="Mail should not be empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="Email Didn't Match"
    }
    else {
        error.email=""
    }
    if(values.password===""){
        error.password="Password should not be empty"
    }
    else if(!password_pattern.test(values.password)){
        error.password="Password didn't match"
    }
    else{
        error.password=""
    }
    return error;
}
export default Validation;