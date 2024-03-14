module.exports = (connection, DataTypes) => {

    const Film = connection.define( "Films",
        {
          // Model attributes are defined here
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          imgurl: {
            type: DataTypes.STRING,
     
          },
          description: {
            type: DataTypes.STRING,
            // allowNull defaults to true
          },
            manchar : {
                type: DataTypes.STRING,
                // allowNull defaults to true
          },
          released: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            // allowNull defaults to true

          }
        }
    )
        
        
        return Film

    }
        