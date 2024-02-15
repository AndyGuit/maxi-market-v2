type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type: 'button' | 'submit' | 'reset';
  style: 'primary-input' | 'primary-card' | 'secondary' | 'tertiary' | 'header';
};

export default function Button(props: Props) {
  let styles = '';

  switch (props.style) {
    case 'primary-input':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.75rem-1.6px)] bg-primary text-center border-2 border-primary rounded-r button-typography transition-all hover:bg-white active:shadow-large';
      break;
    case 'primary-card':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.5rem-1.6px)] bg-primary text-center border-2 border-primary rounded button-typography transition-all hover:bg-white active:shadow-large';
      break;
    case 'secondary':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.75rem-1.6px)] bg-secondary text-white text-center border-2 border-secondary rounded-r button-typography transition-all hover:bg-transparent hover:text-secondary active:shadow-large';
      break;
    case 'tertiary':
      styles =
        'px-[calc(2rem-1.6px)] py-[calc(0.75rem-1.6px)] bg-tertiary text-white text-center border-2 border-tertiary rounded-r button-typography transition-all hover:bg-transparent hover:text-tertiary active:shadow-large';
      break;
    case 'header':
      styles =
        'button-header flex gap-2 items-center px-8 py-3 text-white text-center rounded button-typography transition-all hover:bg-white hover:text-tertiary active:shadow-large';
      break;
    default:
      break;
  }

  return (
    <button type={props.type} className={styles} disabled={props.disabled}>
      {props.children}
    </button>
  );
}
