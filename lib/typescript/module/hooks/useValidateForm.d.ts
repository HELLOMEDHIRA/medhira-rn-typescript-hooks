interface optionsInterface {
    type: string;
    label: string;
    isRequired: boolean;
    keyboard?: string;
    minValue?: number;
    maxValue?: number;
    minLength?: number;
    maxLength?: number;
    defaultValue?: string | number | boolean;
    isDisabled?: boolean;
    isEditable?: boolean;
    validationPattern?: any;
    minValueError?: string;
    maxValueError?: string;
    minLengthError?: string;
    maxLengthError?: string;
    focusError?: string;
    validError?: string;
    valueChangeCallback?: any;
}
declare const useValidateForm: (options: optionsInterface) => {
    label: string;
    value: any;
    required: boolean;
    keyboardType: string;
    defaultValue: any;
    isValid: any;
    isFocused: any;
    isBlured: any;
    hasError: any;
    customError: any;
    inputIsDisabled: boolean;
    inputIsEditable: true;
    min: number | undefined;
    max: number | undefined;
    valueChangeHandler: (text: string) => void;
    valueFocusHandler: () => void;
    valueBlurHandler: () => void;
    reset: () => void;
};
export default useValidateForm;
//# sourceMappingURL=useValidateForm.d.ts.map