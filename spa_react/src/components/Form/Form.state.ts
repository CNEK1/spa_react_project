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
        case 'RESET_VALIDITY':
            return { ...state, isValid: INITIAL_STATE.isValid };
        case 'SUBMIT': {
            const textValidity = Boolean(payload!.text?.trim().length);
            const dateValidity = Boolean(payload!.date.toString() !== 'Invalid Date');
            const titleValidity = Boolean(payload!.title?.trim().length);

            return {
                values: payload!,
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
