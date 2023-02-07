import './text-second.css';

export const TextSecond = (props) => {
  // console.log(styles)
  // const classes = props.bold ? "styles.bold" : '';

  return (
    <div className="title">
      {props.children}
    </div>
  )
} 