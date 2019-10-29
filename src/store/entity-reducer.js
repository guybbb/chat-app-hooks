import {ADD_ENTITY} from "./entity-consts";

export const addEntity = (entityType, payload) => ({type: ADD_ENTITY, meta: {entityType}, payload});

export const reducer = (state, action) => {
    const entityType = action.meta.entityType;
    if (action.type === ADD_ENTITY) {
        return {...state, [entityType]: [...state[entityType], action.payload]};
    } else {
        throw new Error();
    }

}