
const LoaderBody = () => {
  return (
    <div className="animate-pulse flex flex-col items-center gap-4 w-60">
      <div>
        <div className="w-48 h-6 bg-lighter rounded-md"></div>
        <div className="w-28 h-4 bg-lighter mx-auto mt-3 rounded-md"></div>
      </div>
      <div className="h-7 bg-lighter w-full rounded-md"></div>
      <div className="h-7 bg-lighter w-full rounded-md"></div>
      <div className="h-7 bg-lighter w-full rounded-md"></div>
      <div className="h-7 bg-lighter w-1/2 rounded-md"></div>
    </div>
  );
};

export default LoaderBody;
