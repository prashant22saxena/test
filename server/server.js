(async function(){
const app = require('../app');
const server = await app.listen(3000);
console.log('running',3000);
})();