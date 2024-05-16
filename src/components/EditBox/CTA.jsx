import { useEffect,useState } from "react"
import {useDispatch} from 'react-redux'
import {adCTA} from '../../app/adSlice.js'

function CTA() {

    const [cta,setCta] = useState("");
    const dispatch = useDispatch();

    const ctaHandler = (e) => {
        setCta(e.target.value);
    }

    useEffect(() => {
        dispatch(adCTA(cta));
    },[cta,dispatch])


  return (
    <>
    <div className='flex flex-col border-2 border-slate-300 w-full sm:w-6/5 h-14 rounded-lg' >
      <label className=' mx-3 mt-1 mb-1 text-slate-500 text-xs font-bold'>CTA</label>
      <input type="text" className='mx-3 mb-1 focus:outline-none ' onChange={(e)=>ctaHandler(e)}/>
    </div>
    </>
  )
}

export default CTA
