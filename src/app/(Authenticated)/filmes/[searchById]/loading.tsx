function LoadingMovie(): JSX.Element {
  return (
    <div
      className="loading"
      style={{
        minHeight: 'calc(100vh - 4rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src="/Spinner.svg" alt="spinner" />
    </div>
  );
}
export default LoadingMovie;
