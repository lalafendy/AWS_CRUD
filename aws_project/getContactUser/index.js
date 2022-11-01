'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region:"ap-northeast-1"});


exports.handler = async (event, context)=> {
    
    const ddb= new AWS.DynamoDB({apiVersion:"2012-10-08"});
    const documentClient= new AWS.DynamoDB.DocumentClient({region:"ap-northeast-1"});
    const params={
      TableName:"Person",
      Key:{
          ID_person:"11"
            
        }
    }
    try{
        const data=await documentClient.getItem(params).promise();
        console.log(data);

    }catch{
        console.log(err);
    }

}