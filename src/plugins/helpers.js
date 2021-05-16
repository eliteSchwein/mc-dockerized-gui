export function findDirectory (folder, dirArray) {
    if (folder !== undefined && dirArray.length > 0) {
        if (folder.childrens) {folder = folder.childrens;}

        const parent = folder.find(element => (element.isDirectory && element.filename === dirArray[0]));
        if (parent) {
            dirArray.shift();
            if (dirArray.length > 0) {
                return findDirectory(parent, dirArray);
            } return parent.childrens;
        } return folder;
    }
}

export function caseInsensitiveNameSort(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) {return -1;}
    if (nameA > nameB) {return 1;}

    return 0;
}