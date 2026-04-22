# medhira-rn-typescript-hooks

MEDHIRA - React Native TypeScript validation hooks

![medhira](https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png)

**Engineering Intelligence Across Everything**

[![npm package](https://img.shields.io/npm/v/medhira-rn-typescript-hooks.svg)](https://www.npmjs.com/package/medhira-rn-typescript-hooks)
[![npm downloads](https://img.shields.io/npm/dm/medhira-rn-typescript-hooks.svg)](https://www.npmjs.com/package/medhira-rn-typescript-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Installation

```sh
# Expo
npx expo install medhira-rn-typescript-hooks

# React Native
npm install --save medhira-rn-typescript-hooks
```

## Hooks

This library provides validation hooks for React Native forms:

- `useValidateForm` - Form input validation hook
- `useValidateSelect` - Dropdown/select validation hook  
- `useValidateCheckBox` - Checkbox validation hook

## useValidateForm

Form validation hook with support for string and number types, min/max values, and regex patterns.

```tsx
import { useValidateForm } from 'medhira-rn-typescript-hooks';

const form = useValidateForm({
  type: 'string',
  label: 'Email',
  isRequired: true,
  keyboard: 'email-address',
  validationPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  validError: 'Please enter a valid email',
});

return (
  <TextInput
    value={form.value}
    onChangeText={form.valueChangeHandler}
    onFocus={form.valueFocusHandler}
    onBlur={form.valueBlurHandler}
    disabled={form.inputIsDisabled}
  />
);
```

## useValidateSelect

Dropdown/select validation hook with single and multiple selection support.

```tsx
import { useValidateSelect } from 'medhira-rn-typescript-hooks';

const select = useValidateSelect({
  itemsList: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ],
  isRequired: true,
  multiple: false,
});

return (
  <Picker
    selectedValue={select.value}
    onValueChange={select.onChangeValueCallBack}
  />
);
```

## useValidateCheckBox

Checkbox validation hook with required checkbox support.

```tsx
import { useValidateCheckBox } from 'medhira-rn-typescript-hooks';

const checkbox = useValidateCheckBox({
  isRequired: true,
  value: false,
  validError: 'Please accept the terms',
});

return (
  <Checkbox
    checked={checkbox.value}
    onChange={checkbox.onValueChangeHandler}
  />
);
```

## API Reference

### useValidateForm Options

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
| validationPattern | RegExp | No | - | Validation regex pattern |

### useValidateSelect Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| itemsList | array | Yes | - | List of items |
| isRequired | boolean | No | false | Required selection |
| defaultValue | string \| array | No | - | Default value |
| multiple | boolean | No | false | Allow multiple |
| min | number | No | 0 | Min selections |
| max | number | No | 100 | Max selections |

### useValidateCheckBox Options

| Option | Type | Required | Default | Description |
|--------|------|----------|---------|-------------|
| isRequired | boolean | No | false | Required checkbox |
| value | boolean | No | false | Initial value |
| validError | string | No | - | Error message |
| checkedColor | string | No | '#000000' | Checked color |
| uncheckedColor | string | No | '#a8a8a8' | Unchecked color |

## Contributing

Contribution are always welcome, no matter how large or small!

We want this community to be friendly and respectful to each other. Please follow it in all your interactions with the project.

Please feel free to drop us an email at [MEDHIRA](mailto:hello.medhira@gmail.com?subject=[GitHub])

## Sponsor & Support

To keep this library maintained and up-to-date please consider [sponsoring it on GitHub](https://github.com/sponsors/medhira). Or if you are looking for a private support or help in customizing the experience, then reach out to us on LinkedIn [https://www.linkedin.com/in/smuniharish](https://www.linkedin.com/company/medhira).

## License

[MIT](./LICENSE)

---

Made with love by [MEDHIRA](https://medhira.readthedocs.io/en/latest/)