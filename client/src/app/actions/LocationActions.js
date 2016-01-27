var alt = require('../alt');
var LocationSource = require('../sources/LocationSources');
class LocationActions{
  updateLocations(locations){
    return locations;
  }

  fetchLocations(){
    return (dispatch) => {
      dispatch();
      LocationSource.fetch()
      .then((locations) =>{
        this.updateLocations(locations);
      })
      .catch((errorMessage) => {
        this.locationsFailed(errorMessage);
      });
    }
  }

}
module.exports = alt.createActions(LocationActions);
