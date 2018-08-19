const { compose } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = compose(
  rewireLess,
  
  
)
//  custom config
module.exports = function(config, env){
  const rewires = compose(
    rewireLess,
   
   
  );
 
  return rewires(config, env);
}