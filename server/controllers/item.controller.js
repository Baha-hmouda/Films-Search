// DELETE THIS LINE

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const Film = require("../database-mysql");

module.exports={

  getAll: async (req,res) => {
  try {
      const movie = await db.Film.findAll({})
  
      res.status(200).send(movie)
  
  
  }
  catch(err){
      throw(err)
  
  }
  
  },
  postAll: async (req,res) => {
      try {
          const movie = await db.Film.create(req.body)
      
          res.status(201).send(movie)
      
      
      }
      catch(err){
          throw(err)
      
      }
      
      },
      updateAll: async (req, res) => {
          try {
            const movie = await db.Film.update(req.body, {
              where: { id: req.params.id },
            });
      
            res.status(201).send(movie);
          } catch (error) {
            throw error;
          }
        },
        deleteAll: async (req, res) => {
          try {
            const movie = await db.Film.destroy({
              where: { id: req.params.id },
            });
      
            res.json(movie);
          } catch (error) {
            throw error;
          }
        },
  
  
  }

  

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT
// const selectAll = async function (req, res) {
//   try {
//     const items = await Item.find({});
//     res.status(200).send(items);
//   } catch (error) {
//     res.status(200).send(error);
//   }
// };

