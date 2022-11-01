'use strict'
const AWS = require('aws-sdk');
AWS.config.update({region:"ap-northeast-1"});


exports.handler = async (event, context)=> {
    
    const ddb= new AWS.DynamoDB({apiVersion:"2012-10-08"});
    const documentClient= new AWS.DynamoDB.DocumentClient({region:"ap-northeast-1"});
    
    
    const params={
      TableName:"Person",
      Item:{
          ID_person:"13",
          name:"Fayyadh"
            
        }
    }
    try{
        const data=await documentClient.put(params).promise();
        console.log(data);

    }catch{
        console.log(err);
    }

}