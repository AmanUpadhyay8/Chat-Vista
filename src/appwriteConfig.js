import { Client, Databases, Account } from 'appwrite';


export const PROJECT_ID = '65aba7b0b94d3c40f607'
export const DATABASE_ID = '65aba92fd9b2a4488b6e'
export const COLLECTION_ID_MESSAGES = '65aba95387729f425313'



const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65aba7b0b94d3c40f607');


export const databases = new Databases(client);
export const account = new Account(client)

export default client;