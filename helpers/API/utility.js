import {api_service} from './axios';

export class Utility{

    apiKey = '5b8a2523cdc94016a5551cd9e0a1fa9e';
    city_id=4487042



    static async get(url, para) {
        console.log(url);
        console.log(para)

        await api_service.get(url,{ params: para }).then((res)=>{
            if(res != null){
                console.log(res.data)
                var response = {
                    data: 'fdf',
                    message:'dfdf'
                }
                return 'dfdfdf';
                return {data: res.data, message:'Successful'};
            }else{
                return {data:null, message:'response is empty'};
            }
        }).catch((error)=>{
            return {data:null, message:error};
        });
    }

    async post(url, para){
        await api_service.post(url,{
            data: para
        }).then((res)=>{
            if(res != null){
                return {data: res.data, message:'Successful'};
            }else{
                return {data:null, message:'response is empty'};
            }
        }).catch((error)=>{
            return {data:null, message:error};
        });
    }
} 