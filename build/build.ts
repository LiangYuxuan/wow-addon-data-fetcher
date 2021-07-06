import fs from 'fs';
import path from 'path';
import readline from 'readline';

const definitions = path.resolve(__dirname, 'WoWDBDefs', 'definitions');
const targetFile = path.resolve(__dirname, '..', 'src', 'types', 'db2', 'index.d.ts');

const files = fs.readdirSync(definitions);
const writeStream = fs.createWriteStream(targetFile);

const handleFile = async (path: string): Promise<string[]> => {
    const fields: string[] = [];

    const content = fs.readFileSync(path).toString('ascii');
    const block = content.split('\n\n');
    block.forEach((value) => {
        const lines = value.split('\n');
        if (lines[0].match(/^LAYOUT .*$/) || lines[0].match(/^BUILD .*$/)) {
            lines.forEach((value, index) => {
                if (index === 0) return;
                if (value.length === 0) return;
                if (value.match(/^BUILD .*$/)) return;
                if (value.match(/^COMMENT .*$/)) return;

                const result = value.match(/^(\$.*\$)?(\w+)(<u?\d+>)?(\[(\d+)\])?(\W*\/\/.*)?$/);
                if (result) {
                    const name = result[2];
                    const lengthString = result[5];

                    if (lengthString === undefined) {
                        if (!fields.includes(name)) {
                            fields.push(name);
                        }
                    } else {
                        const length = parseInt(lengthString);
                        for (let i = 0; i < length; ++i) {
                            const key = `'${name}[${i}]'`;
                            if (!fields.includes(key)) {
                                fields.push(key);
                            }
                        }
                    }
                } else {
                    throw new Error(`Failing to parse line ${value}`);
                }
            });
        }
    });

    return fields;
};

writeStream.write('/* eslint max-len: 0 */\n');
writeStream.write('/* eslint camelcase: 0 */\n\n');

Promise.all(files.map(async (file) => {
    const databaseName = file.split('.').slice(0, -1).join('.');
    const className = databaseName.replace('-', '_') + 'Database';
    const fields = await handleFile(path.resolve(definitions, file));

    if (fields.length === 0) return;

    let content = `interface ${className}{\n`;
    fields.forEach((value) => {
        content += `    ${value}?: string;\n`;
    });
    content += `}\n\n`;

    writeStream.write(content);

    return [databaseName, className];
})).then((results) => {
    let content = `interface FetchDB2Func{\n`;
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
