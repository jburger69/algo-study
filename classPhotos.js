redShirtHeights = [5, 8, 1, 3, 4]
blueShirtHeights = [5, 8, 1, 3, 4]

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a);
    console.log(redShirtHeights)
    blueShirtHeights.sort((a,b) => b - a);
    console.log(blueShirtHeights)
      
    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
      for (let idx = 0; idx < redShirtHeights.length; idx++) {
          const redShirtHeight = redShirtHeights[idx];
          const blueShirtHeight = blueShirtHeights[idx];
          
          if (shirtColorInFirstRow === 'RED') {
              if (redShirtHeight >= blueShirtHeight) return false;
            } else if (blueShirtHeight >= redShirtHeight) return false;
    }
    return true;
}

classPhotos(redShirtHeights, blueShirtHeights)