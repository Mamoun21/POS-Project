import axios from 'axios';
async function getUserLogin() {
    try {
       return await (await axios.get('http://localhost:3333/loginUser')).data;
    }
    catch (error) {
        throw error;
    }
}
export default getUserLogin;