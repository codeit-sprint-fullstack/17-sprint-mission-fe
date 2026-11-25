export default function TextareaField({
  label,
  name,
  id,
  placeholder,
  style = '',
  error,
  ...rest
}) {
  return (
    <div className='grid'>
      <label htmlFor={id} className='mb-4 text-lg-bold md:text-2lg-bold'>
        {label}
      </label>
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className={style}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error && (
        <p className='mt-2 text-[.94rem] font-semibold text-error'>{error}</p>
      )}
    </div>
  );
}
