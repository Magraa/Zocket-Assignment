import Canvas from './Canvas'
import { useSelector } from 'react-redux';
import './background.css'

const Display = () => {

  const adInfo = useSelector((state) => state.ad)


  return (
    <div className="diagonal-lines">
      <div className="content">
        <div className='w-screen h-[30rem] sm:h-screen sm:w-3/4 flex justify-center items-center'>
          <Canvas adInfo={adInfo} />
        </div>
      </div>

    </div>
  )
}
export default Display