function getItems(fruitList, ...args, favoriteFruit){
    return [...fruitList, ...args, favoriteFruit];
}

// 下面的函数调用结果是什么
getItems(['banana', 'apple'],'pear','orange');