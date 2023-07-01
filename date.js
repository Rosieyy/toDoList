


module.exports.getDate = function(){
    const date = new Date();
    const options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    
    return date.toLocaleString("en-US",options);
    
};

module.exports.getDay = function(){
    const date = new Date();
    const options = {
        weekday:"long",
    };
    
    return date.toLocaleString("en-US",options);
    
}
