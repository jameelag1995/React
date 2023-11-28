/* eslint-disable react/prop-types */
import './ToppingButton.css'
const ToppingButton = ({toppingName,onClickTopping}) => {

    const handleClick = () =>{
        onClickTopping(toppingName)
    }

  return (
    <button onClick={handleClick}>{toppingName}</button>
  )
}

export default ToppingButton