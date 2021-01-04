const fs = require('fs');
const path = require('path');

module.exports = function(filepath) {
    if (!filepath) throw new Error('Path to JSON file is required.');

    const absolute = path.resolve(filepath);
    const storage = fs.existsSync(absolute) ? JSON.parse(fs.readFileSync(absolute, {encoding: 'utf-8'})) : {};

    return {
        save() {
            fs.writeFileSync(absolute, JSON.stringify(storage, null, 4));
        },
        get(index) {
            return storage[index];
        },
        set(index, data) {
            return storage[index] = data;
        },
    };
};
