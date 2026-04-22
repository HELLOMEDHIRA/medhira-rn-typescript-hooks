interface OptionsInterfaceSelect {
    itemsList: any;
    isRequired: boolean;
    defaultValue?: any;
    multiple?: boolean;
    min?: number;
    max?: number;
    disabled?: boolean;
    validError?: string;
    minError?: string;
    maxError?: string;
    onChangeValueCallBack?: any;
    onSelectItemCallBack?: any;
    onPressCallBack?: any;
    onOpenCallBack?: any;
    onCloseCallBack?: any;
}
declare const useValidateSelect: (options: OptionsInterfaceSelect) => {
    open: any;
    itemsList: any;
    value: any;
    isDisabled: boolean;
    setItems: import("react").Dispatch<any>;
    setValue: import("react").Dispatch<any>;
    setOpen: (_item: any) => void;
    onChangeValueCallBack: (item: any) => void;
    onSelectItemCallBack: (item: any) => void;
    onPressCallBack: (_item: any) => void;
    onOpenCallBack: () => void;
    onCloseCallBack: () => void;
    min: number;
    max: number;
    multiple: boolean;
    selectedItems: any;
    selectedValues: any;
    isValid: any;
    hasError: any;
    customError: any;
    reset: () => void;
};
export default useValidateSelect;
//# sourceMappingURL=useValidateSelect.d.ts.map