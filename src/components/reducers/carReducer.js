export const intialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

  export const carReducer = (state=intialState, action) =>{
    switch (action.type){
        case "ADDITIONAL_FEATURES_ONCLICK":
            //let newAdditionalFeatures = state.additionalFeatures.filter(element=> element.id != action.payload)
            return{
                ...state,
                additionalPrice:state.additionalPrice+ state.additionalFeatures[action.payload-1].price,
                car:{...state.car, features:[...state.car.features,state.additionalFeatures[action.payload-1]]},

              //  additionalFeatures:[...newAdditionalFeatures]
            }

            case "ADDED_FEATURES_ONCLICK":
                let newFeatures = state.car.features.filter(element=> element.id != action.payload)
                let newPrice=state.additionalPrice
                newFeatures.forEach(element =>{
                    newPrice-= element.price
                })
                return{
                    ...state,
                    additionalPrice: state.additionalPrice - newPrice,
                    car:{...state.car, features:[...newFeatures]}
                }
        
        default:
            return state;
    }
  }