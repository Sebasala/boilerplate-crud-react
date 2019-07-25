function isItemIdIn(id, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
        return true;
        }
    }
    return false;
}

export default isItemIdIn;