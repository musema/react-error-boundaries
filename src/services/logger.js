
export const logger = {
    logError: (error, info)=> {
        // you send the log to server
        console.log(error, info);
    }, 
    logInfo: (error) => {
                // you send the log to server
                console.log(JSON.stringify(error));
    }
}