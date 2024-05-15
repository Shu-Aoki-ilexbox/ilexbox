import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const returnTop = () => {
  document.querySelector('.scrollable-content')?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const PageTopButton = () => {
  return (
    <button onClick={returnTop} className="w-[100%] p-[20px] bg-primary hover:bg-opacity-30 cursor-pointer text-center transition-all">
      <FontAwesomeIcon icon={faArrowUp}/>
    </button>
  )
}

export default PageTopButton;
