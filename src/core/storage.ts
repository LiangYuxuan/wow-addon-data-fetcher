import fs from 'fs';
import path from 'path';

interface PushInfo {
    PushID: number;
    Cached: boolean;
}

interface BuildInfo {
    Build: string;
    PushInfos: PushInfo[];
}

interface TableInfo {
    TableName: string;
    BuildInfos: BuildInfo[];
}

type PushInfoMap = Map<number, boolean>;
type BuildInfoMap = Map<string, PushInfoMap>
type TableInfoMap = Map<string, BuildInfoMap>

const fromFile = (data: TableInfo[]): TableInfoMap => {
    const result: TableInfoMap = new Map();

    data.forEach((value) => {
        const buildInfos: BuildInfoMap = new Map();

        value.BuildInfos.forEach((value) => {
            const pushInfos: PushInfoMap = new Map();

            value.PushInfos.forEach((value) => {
                pushInfos.set(value.PushID, value.Cached);
            });

            buildInfos.set(value.Build, pushInfos);
        });

        result.set(value.TableName, buildInfos);
    });

    return result;
};

const toFile = (data: TableInfoMap): TableInfo[] => {
    const result: TableInfo[] = [];

    data.forEach((value, key) => {
        const buildInfos: BuildInfo[] = [];

        value.forEach((value, key) => {
            const pushInfos: PushInfo[] = [];

            value.forEach((value, key) => {
                pushInfos.push({
                    PushID: key,
                    Cached: value,
                });
            });

            buildInfos.push({
                Build: key,
                PushInfos: pushInfos,
            });
        });

        result.push({
            TableName: key,
            BuildInfos: buildInfos,
        });
    });

    return result;
};

/**
 * A class to manage storage file
 */
export class StorageFile {
    /**
     * Create storage file object
     * @param {string} StorageFilePath path to storage file
     */
    constructor(StorageFilePath: string) {
        this.absolute = path.resolve(StorageFilePath);

        if (fs.existsSync(this.absolute)) {
            const content = JSON.parse(fs.readFileSync(this.absolute, {encoding: 'utf-8'}));
            try {
                this.storage = fromFile(content);
            } catch (error) {
                this.storage = new Map();
            }
        } else {
            this.storage = new Map();
        }
    }

    /**
     * Write current content to file
     */
    save(): void {
        fs.writeFileSync(this.absolute, JSON.stringify(toFile(this.storage), null, 4));
    }

    /**
     * Get value of key in storage
     * @param {string} index key
     * @return {BuildInfoMap | undefined} value
     */
    get(index: string): BuildInfoMap | undefined {
        return this.storage.get(index);
    }

    /**
     * Set value of key in storage
     * @param {string} index key
     * @param {BuildInfoMap} data value
     */
    set(index: string, data: BuildInfoMap): void {
        this.storage.set(index, data);
    }

    /**
     * Delete value of key in storage
     * @param {string} index key
     */
    delete(index: string): void {
        this.storage.delete(index);
    }

    storage: TableInfoMap;
    absolute: string;
}
