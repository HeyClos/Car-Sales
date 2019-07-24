export const ADD_FEATURES = 'ADD_FEATURES';

export const addFeature = (newFeature) => {
    return{type:ADD_FEATURES, payload:newFeature}
}