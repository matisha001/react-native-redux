import client from './HTTPClient';
let MainServer = {
    post: function(req){
        client.post("",req, function(error, response){
            if(error||!response||response.fault){

                return response.message||"您的网络不给力"
            }else{
                return response.result
            }
        });
    }
}
export default MainServer;
