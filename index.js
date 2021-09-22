const findProductList = (list) => {
  let prodAll = list.reduce((tot, curr) => tot * curr);
  let prodList = list.map((item) => prodAll / item);
  return prodList;
};
console.log(findProductList([1, 2, 3, 4]));
