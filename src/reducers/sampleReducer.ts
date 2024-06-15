// 1 define state
interface SampleState {
    data: string[];
    loading: boolean;
    error: string | null;
}

// 2 set init state
const initialState: SampleState = {
    data: [],
    loading: false,
    error: null,
};

// 3 define reducer
const sampleReducer = (state = initialState, action: any): SampleState => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {...state, loading: true, error: null};
        case 'FETCH_DATA_SUCCESS':
            return {...state, loading: false, data: action.payload};
        case 'FETCH_DATA_FAILURE':
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default sampleReducer;
