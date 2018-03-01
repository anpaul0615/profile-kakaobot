export default (jsonString)=>{
    return new Promise((resolve,reject)=>{
        try {
            const jsonObject = JSON.parse(jsonString);
            resolve({
                message: '[Done]',
                result: jsonObject
            });
        } catch(err) {
            reject({
                message: '[Fail] Not Valid JSON',
                result: jsonString,
            });
        }
    });
};