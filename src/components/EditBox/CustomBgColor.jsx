import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { adBgColor } from '../../app/adSlice.js'; // Adjusted import name
import { SketchPicker } from 'react-color';
import Queue from '../../utils/lastPick.js'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeDropper, faPlus } from '@fortawesome/free-solid-svg-icons';

function CustomBgColor() { // Renamed component
    const [color, setColor] = useState(); 
    const [recentColor, setRecentColor] = useState(new Queue());
    const [showPicker, setShowPicker] = useState(false); 
    const [prevColor, setPrevColor] = useState(''); 

    const dispatch = useDispatch();

    const handleRecentColor = () => {
        let newRecentColor = new Queue();
        newRecentColor = Object.assign(recentColor);
        if (prevColor === color) {
            return;
        }
        if (Object.keys(recentColor.array).length >= 5) {
            newRecentColor.pop();
            newRecentColor.push(color);
        } else {
            newRecentColor.push(color);
        }
        setRecentColor(newRecentColor);
    };

    useEffect(() => {
        dispatch(adBgColor(color)); 
    }, [color, dispatch]);

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    return (
        <>
            <div>
                <h1 className='text-slate-500 text-sm font-bold'>Choose your color <FontAwesomeIcon icon={faEyeDropper} /></h1>
                <div className='flex mt-2 '>
                    {Object.values(recentColor.array).map((color, ind) => (
                        <div key={ind} onClick={() => setColor(color)} style={{ backgroundColor: color }} 
                        className={` w-7 mr-2 h-7 text-lg font-bold rounded-full cursor-pointer text-center `}/>
                    ))}
                    <div className='w-7 h-7 text-lg font-bold bg-slate-100  rounded-full cursor-pointer text-center' onClick={() => setShowPicker(true)}><FontAwesomeIcon icon={faPlus} /></div>
                    {
                        showPicker && 
                        <div className="relative">
                            <div
                                onClick={() => {
                                setShowPicker(false);
                                setPrevColor(color);
                                handleRecentColor();
                                }}
                                className="fixed inset-0 z-10 bg-black opacity-25"
                            />
                            <div className="absolute z-20 top-full left-0 mt-2">
                                <SketchPicker color={color} onChange={handleChangeComplete}/> 
                            </div>
                        </div>
                    }
                </div> 
            </div>
        </>
    );
}

export default CustomBgColor;
