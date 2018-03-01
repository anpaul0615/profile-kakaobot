import Reply from './models/Reply.json';
import BodyParser from './services/BodyParser';

export default async (event, context, callback)=>{
    /** Immediate response for WarmUP plugin */
    if (event.source === 'serverless-plugin-warmup') {
        console.log('[MessageHandler] warmup ok!!');
        return callback(null, 'Lambda is warm!!');
    }

    const { result } = await BodyParser(event.body);
    const actionMessage = result.content;
    const response = Reply[actionMessage];
    if (response) {
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(response)
        });
    } else {
        const failResponse = {
            "message": {
                "text": "Unkown Message :( \n\nPlease Try Again."
            },
            "keyboard": {
                "type": "buttons",
                "buttons": [
                    "Home",
                ]
            }
        };
        return callback(null, {
            statusCode: 200,
            body: JSON.stringify(failResponse)
        });
    }
};