# Examples

## Email Validation

```tsx
import { useValidateForm } from 'medhira-rn-typescript-hooks';
import { TextInput, Text } from 'react-native';

const EmailForm = () => {
  const form = useValidateForm({
    type: 'string',
    label: 'Email Address',
    isRequired: true,
    keyboard: 'email-address',
    validationPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    validError: 'Please enter a valid email address',
  });

  return (
    <View>
      <TextInput
        value={form.value}
        onChangeText={form.valueChangeHandler}
        onFocus={form.valueFocusHandler}
        onBlur={form.valueBlurHandler}
      />
      {form.hasError && <Text>{form.customError}</Text>}
    </View>
  );
};
```

## Phone Number Validation

```tsx
import { useValidateForm } from 'medhira-rn-typescript-hooks';

const PhoneForm = () => {
  const form = useValidateForm({
    type: 'string',
    label: 'Phone Number',
    isRequired: true,
    keyboard: 'phone-pad',
    minLength: 10,
    maxLength: 10,
    minLengthError: 'Phone number must be 10 digits',
    maxLengthError: 'Phone number must be 10 digits',
  });

  return <TextInput value={form.value} onChangeText={form.valueChangeHandler} />;
};
```

## Number Input with Range

```tsx
import { useValidateForm } from 'medhira-rn-typescript-hooks';

const AgeForm = () => {
  const form = useValidateForm({
    type: 'number',
    label: 'Age',
    isRequired: true,
    minValue: 18,
    maxValue: 100,
    minValueError: 'Minimum age is 18',
    maxValueError: 'Maximum age is 100',
  });

  return <TextInput value={form.value} onChangeText={form.valueChangeHandler} />;
};
```

## Single Select

```tsx
import { useValidateSelect } from 'medhira-rn-typescript-hooks';

const CountrySelect = () => {
  const select = useValidateSelect({
    itemsList: [
      { label: 'United States', value: 'us' },
      { label: 'United Kingdom', value: 'uk' },
      { label: 'Canada', value: 'ca' },
    ],
    isRequired: true,
    multiple: false,
  });

  return (
    <Picker
      selectedValue={select.value}
      onValueChange={(itemValue) => select.onChangeValueCallBack(itemValue)}
    >
      {select.itemsList.map((item) => (
        <Picker.Item label={item.label} value={item.value} />
      ))}
    </Picker>
  );
};
```

## Multiple Select

```tsx
import { useValidateSelect } from 'medhira-rn-typescript-hooks';

const TagsSelect = () => {
  const select = useValidateSelect({
    itemsList: [
      { label: 'React', value: 'react' },
      { label: 'TypeScript', value: 'ts' },
      { label: 'Node', value: 'node' },
    ],
    isRequired: true,
    multiple: true,
    min: 1,
    max: 3,
  });

  return (
    <View>
      {select.itemsList.map((item) => (
        <Checkbox
          key={item.value}
          value={select.selectedValues.includes(item.value)}
          onChange={() => select.onChangeValueCallBack(item.value)}
        />
      ))}
    </View>
  );
};
```

## Required Checkbox

```tsx
import { useValidateCheckBox } from 'medhira-rn-typescript-hooks';

const TermsCheckbox = () => {
  const checkbox = useValidateCheckBox({
    isRequired: true,
    value: false,
    validError: 'You must accept the terms and conditions',
    checkedColor: '#4CAF50',
    uncheckedColor: '#9E9E9E',
  });

  return (
    <View>
      <Checkbox
        checked={checkbox.value}
        onChange={checkbox.onValueChangeHandler}
        color={checkbox.color}
      />
      {checkbox.hasError && <Text>{checkbox.customError}</Text>}
    </View>
  );
};
```

## Complete Form Example

```tsx
import { View, TextInput, Text, Button, Picker } from 'react-native';
import { useValidateForm, useValidateSelect, useValidateCheckBox } from 'medhira-rn-typescript-hooks';

const CompleteForm = () => {
  const email = useValidateForm({
    type: 'string',
    label: 'Email',
    isRequired: true,
    keyboard: 'email-address',
  });

  const country = useValidateSelect({
    itemsList: [
      { label: 'USA', value: 'us' },
      { label: 'UK', value: 'uk' },
    ],
    isRequired: true,
  });

  const terms = useValidateCheckBox({
    isRequired: true,
  });

  const handleSubmit = () => {
    if (email.isValid && country.isValid && terms.isValid) {
      console.log('Form is valid');
    }
  };

  return (
    <View>
      <TextInput
        value={email.value}
        onChangeText={email.valueChangeHandler}
        onBlur={email.valueBlurHandler}
      />

      <Picker
        selectedValue={country.value}
        onValueChange={country.onChangeValueCallBack}
      />

      <Checkbox
        checked={terms.value}
        onChange={terms.onValueChangeHandler}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
```