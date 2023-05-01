import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return <div className="load-spinner">{Array(12).fill(<div></div>)}</div>;
};
export default LoadingSpinner;
