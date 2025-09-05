/**
 * 平层列表转树形结构
 * id 与 pid 必有。
 * id = 当前节点id
 * pid = 当前节点的父id
 * @param {array} arr 数组
 * @param {number|string} id 唯一的id。第一次默认为顶层id = -1
 * @returns {array} array 返回一个列表树
 */
const list2Tree = (arr = [], id = -1) => {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (id == item.pid) {
      const children = list2Tree(arr, item.id);
      const json = {
        ...item,
        pid: id,
        id: item.id,
      };
      if (children?.length) json.children = children;
      array.push(json);
    }
  }
  // 代表是顶层
  if (id == -1) {
    return [
      {
        id,
        pId: null,
        children: array,
      },
    ];
  } else {
    return array;
  }
};

/**
 * 树形结构转平层列表
 * @param {array} arr 数组
 * @returns {array} array 返回一个列表树
 */
const tree2List = (arr = []) => {
  const array = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    let children = [];
    if (item.children?.length) {
      children = tree2List(item.children);
    }
    const json = JSON.parse(JSON.stringify(item));
    if (json.children) delete json.children;
    if (children?.length) {
      array.push(...children);
    }
    array.push(json);
  }
  return array;
};
window.list2Tree = list2Tree;
window.tree2List = tree2List;
