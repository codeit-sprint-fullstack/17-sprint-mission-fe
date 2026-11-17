function FormField({ id, label, error, as = 'input', ...inputProps }) {
  const InputTag = as;
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <InputTag
        id={id}
        className={`form-field__input ${as === 'textarea' ? 'form-field__input--textarea' : ''} ${
          error ? 'form-field__input--error' : ''
        }`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...inputProps}
      />
      {error && (
        <p id={errorId} className="form-field__error">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
