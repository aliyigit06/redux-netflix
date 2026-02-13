import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="my-10 flex justify-center">
      <FaSpinner className="animate-spin text-2xl" />
    </div>
  );
};

export default Loader;