const ages = [10,12,13,17];
const ages1 = [14,17,19];
const ages2 = [20,21,22];
const allAges = [...ages,...ages1,8,...ages2];
console.log(allAges);
const takaPoysha = [899,999,123,444];
const maximum = Math.max(...takaPoysha);
console.log(maximum);