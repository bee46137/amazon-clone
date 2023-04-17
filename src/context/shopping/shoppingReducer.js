export const shoppingReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            };

        case 'SET_USER':
            return {
                ...state,
                user: action.payload,
            };

        case 'REMOVE_FROM_BASKET':
            return {
                ...state,
                basket: [state.basket.filter(item => item.id !== action.payload.id), action.payload], 
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }

        default: 
            return state;
    }
}