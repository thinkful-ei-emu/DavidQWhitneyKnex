
const crudService = {
  getItems(db, search=''){
    return db.select('*').from('shoppinglist')
      .where('item_name', 'ilike', `%${search}%`)
      .then(resp=> resp)
      .catch(err=>{
        console.log(err);
        return {error: '500 internal server error'};
      });

  },
  sendItem(){
    console.log('not implemented yet');
  },
  deleteItem(){

  }

};
module.exports = crudService;