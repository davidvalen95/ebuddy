
export function buildResponse(arg:{
    data?:object,
    message?:string,
    isSuccess?:boolean,
}){


    return{
        isSuccess: arg.isSuccess ?? true,
        message: arg.message ?? '',
        data: arg.data ?? {},


    }

}