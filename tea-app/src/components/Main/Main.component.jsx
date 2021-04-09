import './main.css';

const Main = (props: {children: Object}) => {
  return(
    <div>
      <div className="content-container">
        {props.children}
      </div>
    </div>
  )
};

export default Main;
