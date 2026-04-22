interface optionsInterfaceCheckBox {
    isRequired: boolean;
    value: boolean;
    validError?: string;
    checkedColor?: string;
    uncheckedColor?: string;
    disabled?: boolean;
    onChangeCallBack?: any;
}
declare const useValidateCheckBox: (options: optionsInterfaceCheckBox) => {
    color: any;
    inputIsDisabled: boolean | undefined;
    onValueChangeHandler: () => void;
    value: any;
    isValid: any;
    customError: any;
    hasError: boolean;
    reset: () => void;
};
export default useValidateCheckBox;
//# sourceMappingURL=useValidateCheckBox.d.ts.map