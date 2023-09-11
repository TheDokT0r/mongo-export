import { MongoClient, WithId, Document } from 'mongodb';


export default async (dbInfo: MongoInfo): Promise<WithId<Document>[]> => {
    const { url, dbName, collectionName } = dbInfo;

    const client = new MongoClient(url);
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    return await collection.find({}).toArray();
};