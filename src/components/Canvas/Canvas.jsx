import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { drawRect, breakTextIntoLines } from '../../utils/constants.js';

function Canvas({ adInfo }) {
  const canvasRef = useRef(null);
  const textcanvasRef = useRef(null);
  const ctacanvasRef = useRef(null);
  const { caption, urls, cta } = adInfo;

  useEffect(() => {
    drawTemplate();
  }, []);

  useEffect(() => {
    if (caption.text !== undefined) {
      writeTextContent(adInfo.caption.text);
    }
    if (adInfo.adImage !== undefined) {
      drawAdImage(adInfo.adImage);
    }
    if (cta.text !== undefined) {
      writeCTA(adInfo.cta.text);
    }
  }, [adInfo]);

  const drawTemplate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const image = new Image();
    const image2 = new Image();
    const image3 = new Image();

    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    image2.onload = () => {
      ctx.drawImage(image2, 0, 0);
    };
    image3.onload = () => {
      ctx.drawImage(image3, 0, 0);
    };
    image.src = urls.design_pattern;
    image2.src = urls.mask;
    image3.src = urls.stroke;
  };

  const drawAdImage = (imgUrl) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.globalCompositeOperation = 'source-atop';
    ctx.clearRect(56, 442, 970, 600);

    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 56, 440, 970, 600);
    };
    image.src = imgUrl || adInfo.adImage;
    ctx.globalCompositeOperation = 'source-over';
  };

  const writeTextContent = (text) => {
    const canvas = textcanvasRef.current;
    const ctx = canvas.getContext('2d');

    const { width, height } = adInfo.image_mask;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '46px Sans-serif';

    let startY = 100;

    const textToWrite = text || caption.text;
    const lines = breakTextIntoLines(textToWrite, 31, 100);
    lines.forEach((line) => {
      ctx.fillText(line, 120, startY);
      startY += 50;
    });
  };

  const writeCTA = (text) => {
    const canvas = ctacanvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const backgroundColor = '#000000';
    const textToWrite = text || "Shop Now";

    const lines = breakTextIntoLines(textToWrite, 20, 15);

    ctx.font = '30px Sans-serif';
    const textWidth = ctx.measureText(lines[0]).width;
    const textHeight = lines.length * 30;

    const boxWidth = textWidth + 48;
    const boxHeight = textHeight + 48;

    // Move the CTA box upwards by adjusting the y-coordinate
    const boxY = 300; // Adjust this value to move the box upwards
    const boxX = 100;

    drawRect(boxX, boxY, boxWidth, boxHeight, 20, backgroundColor, ctx);

    let startY = boxY + (boxHeight / 2 + 8);
    const startX = boxX + 24;

    ctx.fillStyle = '#ffffff';

    lines.forEach((line) => {
      ctx.fillText(line, startX, startY);
      startY += 30;
    });
  };

  return (
    <>
      <canvas
        className='w-56 sm:w-[30rem]'
        ref={canvasRef}
        width={1080}
        height={1080}
        style={{ backgroundColor: `${adInfo.cta.background_color}`,backgroundSize: 'cover', position: 'absolute', borderRadius: '20px' }} // Outer box curvy
      ></canvas>
      <canvas
        className='w-56 sm:w-[30rem]'
        ref={textcanvasRef}
        width={1080}
        height={1080}
        style={{ position: 'absolute' }}
      ></canvas>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <canvas
          className='w-56 sm:w-[30rem]'
          ref={ctacanvasRef}
          width={1080}
          height={1080}
          style={{ position: 'absolute' }}
        ></canvas>
      </div>
    </>
  );
}

Canvas.propTypes = {
  adInfo: PropTypes.shape({
    adText: PropTypes.string,
    adImage: PropTypes.string,
    adCTA: PropTypes.string,
    adBgColor: PropTypes.string,
  }),
};

export default Canvas;
