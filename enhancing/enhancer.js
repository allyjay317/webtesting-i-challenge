module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item) {
    return { ...item, enhancement: Math.min(20, item.enhancement + 1) }
  }
  else return null
}

function fail(item) {
  if (item) {
    const newItem = {
      ...item,
      durability: Math.max(0, item.enhancement >= 15 ? item.durability - 10 : item.durability - 5),
      enhancement: item.enhancement > 15 ? item.enhancement - 1 : item.enhancement
    }
    return newItem
  } else return null

}

function repair(item) {
  if (item) {
    const newItem = { ...item, durability: 100 }
    return newItem;
  }
  else {
    return null
  }

}

function get(item) {

  if (item) {
    const newItem = { ...item }
    if (newItem.name.match(/(\[\+[0-9]+\])/)) {
      newItem.name = newItem.name.split(' ')[1]
    }
    if (newItem.enhancement === 0) {
      return newItem
    }
    newItem.name = `[+${newItem.enhancement}] ${newItem.name}`
    return newItem
  }
  else return null
}
