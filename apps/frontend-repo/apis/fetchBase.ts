

type ResponseType<T extends object> = {
    message?:string;
    isSuccess?:boolean;
    data?:T;
}

export async function fetchBase<DataType extends object>(
    url: URL,
    options:{
        fetchOption?: Parameters<typeof fetch>[1],
        query?:object
    }
){

    options.fetchOption??={}

    options.fetchOption.headers = {
        "application-token": "secret-token",
        ...(options.fetchOption?.method?.toLowerCase() == "post" && {"Content-Type": "application/json"} ),
        ...(options.fetchOption?.headers ?? {})
    }

    Object.entries(options.query ?? {}).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    })

    const result = await fetch(url,{
        ...options.fetchOption,
        cache:"no-store"
    })



    const jsonResponse = await result.json() as  ResponseType<DataType>;

    if(!result.ok || !jsonResponse?.isSuccess) {
        throw new Error(`${url.toString()} call failed: ${jsonResponse?.message}`)
    }
    return jsonResponse;
}