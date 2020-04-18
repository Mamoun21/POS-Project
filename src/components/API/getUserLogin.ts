 import axios from 'axios';
async function getUserLogin(){ 
    try{
    const response = await (await axios.get('http://localhost:3333/loginUser')).data;
    return response;
    }
    catch(error){
        throw error;
    }
}
export default getUserLogin;