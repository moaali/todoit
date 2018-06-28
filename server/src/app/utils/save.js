import fs from 'fs';
import manifest from '../../../manifest';

const save = updatedTaskContainer => {
  fs.writeFileSync(manifest.json, JSON.stringify(updatedTaskContainer), error => {
    if (error) throw new Error(error);
  });
};

export default save;
