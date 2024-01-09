export interface FormState {
    isValid: {
        text: boolean;
        title: boolean;
        date: boolean;
    };
    values: {
        id: number;
        text: string;
        title: string;
        date: string;
        tag?: string;
    };
    isFormReadyToSubmit: boolean;
}
export enum FormActionKind {
    SET_VALUES = 'SET_VALUES',
    CLEAR = 'CLEAR',
    RESET_VALIDITY = 'RESET_VALIDITY',
    SUBMIT = 'SUBMIT'
}
export interface FormAction {
    type: FormActionKind;
    payload?: {
        id: number;
        text: string;
        date: string;
        title: string;
        tag?: string;
    };
}
