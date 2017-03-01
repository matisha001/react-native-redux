import * as requestService from './requestService';
import {getToken, setToken} from './tokenService';
import client from '../global/HTTPClient';
export function Post(page){
    let req={
      "requestType":"3004",
      "arguments":{"osType":"ios","appName":"client","pageNo":page,"merchantSubShopId":"1000005466"}
    }

    client.post("", req, function (error, data) {
        if(error||!data||data.fault){
            // return response.message||"您的网络不给力"
        }else{
            return data.result
        }
    })
    // return requestService.post(url,body).then( data =>{
    //     if(data.success){
    //         return data.reply_id
    //     }else{
    //         throw 'do reply failed'
    //     }
    // })
}


export function reply({topicId , content , replyId}){
  let body = {
    accesstoken : getToken() || '89f37401-8659-4535-9f16-b31068495928',
    content
  }

  if(replyId){
    body.reply_id = replyId
  }

  let url = `/topic/${topicId}/replies`;

  return requestService.post(url,body).then( data =>{
    if(data.success){
      return data.reply_id
    }else{
      throw 'do reply failed'
    }
  })
}

export function getTopics({page,limit}){
  let slimit =  limit ? limit : 10;
  let url = `/topics?page=${page}&limit=${slimit}`;
  return requestService.get(url).then( data =>{
    if(data.success){
      return data
    }else{
      throw 'do get topics failed'
    }
  })
}

export function getReply(id){
  let url = `/topic/${id}`;
  return requestService.get(url).then( data =>{
    if(data.success){
      return data
    }else{
      throw 'do get topic failed'
    }
  })
}

export function upReply({replyId}){
  let url = `/reply/${replyId}/ups`;
  let body = {
    accesstoken : getToken() || '89f37401-8659-4535-9f16-b31068495928',
  }
  return requestService.post(url,body).then( data =>{
    if(data.success){
      return data.action == 'up'
    }else{
      throw 'do get topic failed'
    }
  })
}
