
var axios=require('axios') ;
function getUserId(sessionId){

    
    if(sessionStorage.getItem("userId") == null || sessionStorage.getItem("userId") === "undefined"){
       axios.get('http://localhost:8082/user', {
            params: {
            sessionId: sessionId
            }
        })
        .then(function (response) {
            if (response.data !== undefined && response.data !== ""){
                            
               sessionStorage.setItem("userId",response.data);
                
            
            }else{
                alert("error the session doesn't exist")
            }
           
            
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            // always executed
        });  
    }
}
export {getUserId};