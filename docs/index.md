# Getting Started

Welcome to **medhira-rn-typescript-hooks** - React Native TypeScript validation hooks.

## Installation

```sh
# Expo
npx expo install medhira-rn-typescript-hooks

# React Native
npm install --save medhira-rn-typescript-hooks
```

## Hooks Overview

This library provides three validation hooks:

- `useValidateForm` - Form input validation hook
- `useValidateSelect` - Dropdown/select validation hook
- `useValidateCheckBox` - Checkbox validation hook

## Quick Start

### useValidateForm

```tsx
import { useValidateForm } from 'medhira-rn-typescript-hooks';

const EmailField = () => {
  const form = useValidateForm({
    type: 'string',
    label: 'Email',
    isRequired: true,
    keyboard: 'email-address',
    validationPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  });

  return (
    <TextInput
      value={form.value}
      onChangeText={form.valueChangeHandler}
      onFocus={form.valueFocusHandler}
      onBlur={form.valueBlurHandler}
    />
  );
};
```

### useValidateSelect

```tsx
import { useValidateSelect } from 'medhira-rn-typescript-hooks';

const CountrySelect = () => {
  const select = useValidateSelect({
    itemsList: [
      { label: 'USA', value: 'us' },
      { label: 'UK', value: 'uk' },
    ],
    isRequired: true,
  });

  return (
    <Picker
      selectedValue={select.value}
      onValueChange={select.onChangeValueCallBack}
    />
  );
};
```

### useValidateCheckBox

```tsx
import { useValidateCheckBox } from 'medhira-rn-typescript-hooks';

const TermsCheckbox = () => {
  const checkbox = useValidateCheckBox({
    isRequired: true,
    value: false,
  });

  return (
    <Checkbox
      checked={checkbox.value}
      onChange={checkbox.onValueChangeHandler}
    />
  );
};
```

## Requirements

- React Native 0.60+
- React 16+
- medhira-react-typescript-hooks (peer dependency)

## License

[MIT](./LICENSE)