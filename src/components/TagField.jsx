import InputField from './InputField';
import icDelete from '../assets/images/ic_delete.png';

export default function TagField({ tags, onAdd, onRemove, ...rest }) {
  const handleKeyDown = (e) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing || e.keyCode === 229) return;
    e.preventDefault();
    onAdd();
  };

  return (
    <div>
      <InputField
        {...rest}
        label='태그'
        name='tag'
        id='tag'
        placeholder='태그를 입력해주세요'
        onKeyDown={handleKeyDown}
      />
      <ul className='mt-3.5 flex items-center flex-wrap gap-3'>
        {tags.map((t) => (
          <li
            key={t}
            className='inline-flex justify-between items-center gap-2 pl-4 pr-3 py-1.25 bg-secondary-100 rounded-[1.63rem]'
          >
            <span className='text-lg-regular text-secondary-800'>{`#${t}`}</span>
            <button
              type='button'
              onClick={() => onRemove(t)}
              className='size-6'
            >
              <img src={icDelete} alt={`${t} 태그 삭제`} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
