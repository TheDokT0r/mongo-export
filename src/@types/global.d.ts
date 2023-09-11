declare global {
    type MongoInfo = {
        url: string,
        dbName: string,
        collectionName: string,
    }

    type ExportType = 'json' | 'yml';

    type ExportBy = 'document' | 'collection';
}

export { };