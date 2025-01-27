import env from '@/app/env';
import { Client, Account, Databases, Avatars, Storage } from 'appwrite';

export const client = new Client();

client
    .setEndpoint(env.appwrite.endpoint)
    .setProject(env.appwrite.endpoint); // Replace with your project ID

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);
const storage = new Storage(client);

export { account, databases, avatars, storage };