const fs = require('node-fs');
const getDb = require('../db');

const db = getDb();

// try {
//     fs.mkdir('./dir1/');
//     console.log('directory created');
// } catch (err) {
//     console.log(err);
// }

fs.mkdir('./build/static/', () => {
    fs.mkdir('./build/static/db', () => {
        for (let [key, value] of Object.entries(db)) {
            fs.writeFile(
                // `./build/static/db/${key}.json`,
                `./build/static/db/${key}`,
                JSON.stringify(value),
                (err) => {
                    if (err) throw err;
                }
            );
        }
    });
});

