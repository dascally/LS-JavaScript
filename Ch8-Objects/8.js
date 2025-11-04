function copyObj(obj, props) {
    let newObj = Object.create(Object.getPrototypeOf(obj));

    if (props) {
        props.forEach((prop) => {
            if (obj.hasOwnProperty(prop)) {
                newObj[prop] = obj[prop];
            }
        });
    } else {
        newObj = Object.assign(newObj, obj);
    }

    return newObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);
