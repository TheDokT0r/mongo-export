import fs from 'fs-extra';

export default async (fileName: string, content: string) => {
    try {
        await fs.writeFile(fileName, content);
    } catch (err) {
        console.error(err);
    }
};