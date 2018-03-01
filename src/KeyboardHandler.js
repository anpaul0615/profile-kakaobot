export default (event, context, callback)=>{
    /** Immediate response for WarmUP plugin */
    if (event.source === 'serverless-plugin-warmup') {
        console.log('[KeyboardHandler] warmup ok!!');
        return callback(null, 'Lambda is warm!!');
    }

    const response = {
        "type": "buttons",
        "buttons": [ "Home", "ButtonAction", "TypingAction" ]
    };
    return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
    });
};