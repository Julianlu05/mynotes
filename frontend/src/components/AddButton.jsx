import { Link } from "react-router-dom";

const AddButton = () => {
  return (
    <Link to={'/note/new'} className="absolute bottom-[24px] right-[16px] bg-main border-none w-[60px] h-[60px] rounded-full flex items-center justify-center cursor-pointer shadow">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32">
        <path d="M16.943 0.943h-1.885v14.115h-14.115v1.885h14.115v14.115h1.885v-14.115h14.115v-1.885h-14.115v-14.115z"></path>
      </svg>
    </Link>
  );
};

export default AddButton;
