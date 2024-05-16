export const breakTextIntoLines = (text, maxCharsPerLine,maxWord) => {
    const lines = [];
    let currentLine = '';
    let reachedMaxLength = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];

      if (char === ' ' && currentLine.length > 0) {
        // If space encountered and current line is not empty, check line length
        if (currentLine.length + 1 <= maxCharsPerLine) {
          // Add space and word to current line if within maxCharsPerLine
          currentLine += ' ';
        } else {
          // Push current line to lines array and reset currentLine
          lines.push(currentLine);
          currentLine = '';
        }
      } else {
        // Add character to current line
        if (!reachedMaxLength) {
          currentLine += char;
        }
      }

      // Check if current line exceeds maxCharsPerLine, then push to lines array
      if (currentLine.length === maxCharsPerLine) {
        lines.push(currentLine);
        currentLine = '';
      }
         
      // Check if the text length has exceeded 100 characters

      if (i >= (maxWord)) {
        // Truncate the current line to 100 characters and append ".."
        if (currentLine.length > 0) {
          lines.push(currentLine.slice(0, maxWord));
          reachedMaxLength = true;
        }
        break;
      }
    }

    // Push any remaining characters to lines array (excluding the truncated part)
    if (currentLine.length > 0 && !reachedMaxLength) {
      lines.push(currentLine);
    }

    return lines;
  };


export const drawRect=(x, y, width, height, radius,bgColor,ctx)=> {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fillStyle = bgColor;
    ctx.fill();
    ctx.stroke();
}