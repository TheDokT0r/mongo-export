export type MongoInfo = {
    url: string,
    dbName: string,
    collectionName: string,
}

export type ExportType = 'json' | 'yml';

export type ExportBy = 'document' | 'collection';