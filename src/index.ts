import getAllItemsFromMongo from './getAllItemsFromMongo';
import writeToFile from './writeToFile';
import { MongoInfo, ExportBy } from './@types/mongo';


export default async (dbInfo: MongoInfo, path: string, exportBy: ExportBy) => {
    const items = await getAllItemsFromMongo(dbInfo);

    if (exportBy === 'collection') {
        const fileName = `${path}/${dbInfo.collectionName}.json`;
        const content = JSON.stringify(items, null, 2);
        await writeToFile(fileName, content);
        return;
    }

    items.forEach(async (item) => {
        const fileName = `${path}/${item._id}.json`;
        const content = JSON.stringify(item, null, 2);
        await writeToFile(fileName, content);
    });
};