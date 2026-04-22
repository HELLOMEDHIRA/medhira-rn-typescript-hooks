# API Reference

## Hooks

### useValidateForm

Form validation hook for text inputs.

```typescript
function useValidateForm(options: OptionsInterface): Result
```

**Options:**

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| type | string | Yes | - | 'string' or 'number' |
| label | string | Yes | - | Field label |
| isRequired | boolean | No | false | Required field |
| keyboard | string | No | 'default' | Keyboard type |
| minValue | number | No | - | Minimum value (number type) |
| maxValue | number | No | - | Maximum value (number type) |
| minLength | number | No | - | Minimum length (string type) |
| maxLength | number | No | - | Maximum length (string type) |
| defaultValue | string \| number | No | - | Default value |
| isDisabled | boolean | No | false | Disabled state |
| isEditable | boolean | No | true | Editable state |
| validationPattern | RegExp | No | - | Validation regex |
| minValueError | string | No | - | Min value error |
| maxValueError | string | No | - | Max value error |
| minLengthError | string | No | - | Min length error |
| maxLengthError | string | No | - | Max length error |
| focusError | string | No | - | Focus error |
| validError | string | No | - | Validation error |
| valueChangeCallback | function | No | - | Value change callback |

**Result:**

| Property | Type | Description |
|---------|------|-------------|
| label | string | Field label |
| value | string | Current value |
| required | boolean | Is required |
| keyboardType | string | Keyboard type |
| defaultValue | string | Default value |
| isValid | boolean | Is valid |
| isFocused | boolean | Is focused |
| isBlured | boolean | Is blurred |
| hasError | boolean | Has error |
| customError | string | Custom error message |
| inputIsDisabled | boolean | Is disabled |
| inputIsEditable | boolean | Is editable |
| min | number | Min value/length |
| max | number | Max value/length |
| valueChangeHandler | function | On change handler |
| valueFocusHandler | function | On focus handler |
| valueBlurHandler | function | On blur handler |
| reset | function | Reset state |

---

### useValidateSelect

Dropdown/select validation hook.

```typescript
function useValidateSelect(options: OptionsInterfaceSelect): Result
```

**Options:**

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| itemsList | array | Yes | - | List of items |
| isRequired | boolean | No | false | Required selection |
| defaultValue | string \| array | No | - | Default value |
| multiple | boolean | No | false | Allow multiple |
| min | number | No | 0 | Min selections |
| max | number | No | 100 | Max selections |
| disabled | boolean | No | false | Disabled state |
| validError | string | No | - | Validation error |
| minError | string | No | - | Min error |
| maxError | string | No | - | Max error |
| onChangeValueCallBack | function | No | - | Value change callback |
| onSelectItemCallBack | function | No | - | Select item callback |
| onPressCallBack | function | No | - | Press callback |
| onOpenCallBack | function | No | - | Open callback |
| onCloseCallBack | function | No | - | Close callback |

**Result:**

| Property | Type | Description |
|---------|------|-------------|
| open | boolean | Is open |
| itemsList | array | Items list |
| value | any | Current value |
| isDisabled | boolean | Is disabled |
| setItems | function | Set items |
| setValue | function | Set value |
| setOpen | function | Set open |
| onChangeValueCallBack | function | On change |
| onSelectItemCallBack | function | On select |
| onPressCallBack | function | On press |
| onOpenCallBack | function | On open |
| onCloseCallBack | function | On close |
| min | number | Min selections |
| max | number | Max selections |
| multiple | boolean | Is multiple |
| selectedItems | array | Selected items |
| selectedValues | array | Selected values |
| isValid | boolean | Is valid |
| hasError | boolean | Has error |
| customError | string | Error message |
| reset | function | Reset state |

---

### useValidateCheckBox

Checkbox validation hook.

```typescript
function useValidateCheckBox(options: optionsInterfaceCheckBox): Result
```

**Options:**

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| isRequired | boolean | No | false | Required checkbox |
| value | boolean | No | false | Initial value |
| validError | string | No | - | Error message |
| checkedColor | string | No | '#000000' | Checked color |
| uncheckedColor | string | No | '#a8a8a8' | Unchecked color |
| disabled | boolean | No | false | Disabled state |
| onChangeCallBack | function | No | - | Change callback |

**Result:**

| Property | Type | Description |
|---------|------|-------------|
| color | string | Current color |
| inputIsDisabled | boolean | Is disabled |
| onValueChangeHandler | function | On change |
| value | boolean | Current value |
| isValid | boolean | Is valid |
| customError | string | Error message |
| hasError | boolean | Has error |
| reset | function | Reset state |