import { FormAction, FormState } from './Form.state.inteface';

export const INITIAL_STATE: FormState = {
    isValid: {
        text: true,
        title: true,
        date: true
    },
    values: {
        id: 0,
        text: '',
        title: '',
        date: '',
        tag: ''
    },
    isFormReadyToSubmit: false
};

export function formReducer(state: FormState, action: FormAction): FormState {
    const { type, payload } = action;
    switch (type) {
        case 'SET_VALUES':
            return { ...state, values: { ...state.values, ...payload } };
        case 'CLEAR':
            return { ...state, values: INITIAL_STATE.values, isFormReadyToSubmit: false };
        case 'RESET_VALIDITY':
            return { ...state, isValid: INITIAL_STATE.isValid };
        case 'SUBMIT': {
            const textValidity = Boolean(state.values.text?.trim().length);
            const dateValidity = Boolean(state.values.date.toString());
            const titleValidity = Boolean(state.values.title?.trim().length);

            return {
                ...state,
                isValid: {
                    text: textValidity,
                    title: titleValidity,
                    date: dateValidity
                },
                isFormReadyToSubmit: textValidity && titleValidity && dateValidity
            };
        }
        default:
            return state;
    }
}
