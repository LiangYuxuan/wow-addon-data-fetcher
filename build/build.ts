import fs from 'fs';
import path from 'path';
import readline from 'readline';

const definitions = path.resolve(__dirname, 'WoWDBDefs', 'definitions');
const targetFile = path.resolve(__dirname, '..', 'src', 'types', 'db2', 'index.d.ts');

const files = fs.readdirSync(definitions);
const writeStream = fs.createWriteStream(targetFile);

const handleFile = async (path: string): Promise<string[]> => {
    const fileStream = fs.createReadStream(path);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    let header = false;
    const fields: string[] = [];
    for await (const line of rl) {
        if (line === 'COLUMNS') {
            header = true;
        } else if (line.length === 0) {
            break;
        } else if (header) {
            const result = line.match(/(\S+) (\S+)/);
            if (result) {
                const field = result[2].replace(/\?$/, '');
                fields.push(field);
            }
        }
    }

    return fields;
};

writeStream.write("/* eslint max-len: 0 */\n");
writeStream.write("/* eslint camelcase: 0 */\n\n");

Promise.all(files.map(async (file) => {
    const databaseName = file.split('.').slice(0, -1).join('.');
    const className = databaseName.replace('-', '_');
    const fields = await handleFile(path.resolve(definitions, file));

    if (fields.length === 0) return;

    let content = `interface ${className}{\n`
    fields.forEach((value) => {
        content += `    ${value}?: string;\n`;
    });
    content += `}\n`;

    writeStream.write(content);

    return [databaseName, className];
})).then((results) => {
    let content = `interface FetchDB2Func{\n`
    results.forEach((value) => {
        if (value) {
            const [databaseName, className] = value;
            content += `    (db: '${databaseName}', {version, hotfix} ?: {version?: string, hotfix?: boolean}): Promise<${className}[]>;\n`;
        }
    });
    content += `}\n`;

    writeStream.write(content);
    writeStream.end();
});
