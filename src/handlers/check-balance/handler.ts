import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

interface IAccount {
  accountNumber: String;
  personIdentifier: String;
  balance: number;
}

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  const body = event.body;
  console.log(body);
  
  const queries = JSON.stringify(event.queryStringParameters);
  return {
    statusCode: 200,
    body: `Queries: ${queries}`,
  };
};
