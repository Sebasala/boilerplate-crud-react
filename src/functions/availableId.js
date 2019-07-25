import isItemIdIn from "./isItemIdIn";

function availableId(arr) {
    let itemId = 0;

    while (isItemIdIn(itemId, arr)) {
      itemId += 1;
    }

    return itemId;
}

export default availableId;