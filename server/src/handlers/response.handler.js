const responseWithData = (res, statusCode, data) => res.status(statusCode).json(data);
        
const error =(res) => responseWithData(res, 500, {
    status : 500,
    massage: "Oops! Something Wrong!"
});
const badrequest = (res, massage) => responseWithData(res, 400, {
    status: 400,
    massage
});

const ok = (res, data) => responseWithData(res, 200, data);

const created =(res, data)=> responseWithData(res, 201, data);

const unauthorize = (res, data) => responseWithData(res, 401, {
    status: 401,
    massage: "Unathorized"
});

const notfound = (res, data) => responseWithData(res, 404, {
    status: 404,
    massage: "Resource not found"
});
export default {
    error,
    badrequest,
    ok,
    created,
    unauthorize,
    notfound

};