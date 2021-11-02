/* exported titleCase */

function titleCase(title) {
  var newTitle = '';
  var bad = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  var titleArray = title.split(' ');

  for (let x = 0; x <= titleArray.length - 1; x++) {
    titleArray[x] = titleArray[x].replace(titleArray[x][0], titleArray[x][0].toUpperCase());
  }

  for (let w = 0; w <= titleArray.length - 1; w++) {
    if (bad.includes(titleArray[w].toLowerCase()) && w !== 0) {
      titleArray[w] = titleArray[w].toLowerCase();
    }
  }

  for (let a = 0; a <= titleArray.length - 1; a++) {

    for (let char = 0; char <= titleArray[a].length - 1; char++) {
      if (titleArray[a][char - 1] === '-') {
        titleArray[a] = titleArray[a].replace(titleArray[a][char], titleArray[a][char].toUpperCase());

      }
    }
  }

  for (let z = 0; z <= titleArray.length - 1; z++) {
    if (titleArray[z].toUpperCase() === 'JAVASCRIPT') {
      titleArray[z] = 'JavaScript';
    } else if (titleArray[z].toLowerCase() === 'api') {
      titleArray[z] = 'API';
    } else if (titleArray[z].toLowerCase() === 'javascript:') {
      titleArray[z] = 'JavaScript:';
    }
  }

  for (let f = 0; f <= titleArray.length - 1; f++) {
    if (titleArray[f].includes(':')) {
      titleArray[f + 1] = titleArray[f + 1].replace(titleArray[f + 1][0], titleArray[f + 1][0].toUpperCase());

    }

  }

  titleArray[0] = titleArray[0].replace(titleArray[0][0], titleArray[0][0].toUpperCase());

  for (let y = 0; y <= titleArray.length - 1; y++) {
    newTitle = newTitle + ' ' + titleArray[y];
  }

  return newTitle.substring(1);

}
