// console.log(process.argv);
const[,,arg3='base=5']=process.argv;
console.log(arg3);

const[,base =5]= arg3.split('=');
console.log(base);