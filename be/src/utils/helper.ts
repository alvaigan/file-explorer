const helper: any = {};

helper.Response = (
    status: string,
    msg: string,
    data?: any,
    error?: any,
): ResAPI => {
    return {
        status: status,
        message: msg,
        data: data,
        error: error,
    };
};

export default helper;
