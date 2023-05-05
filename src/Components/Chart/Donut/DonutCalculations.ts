//@ts-nocheck

/**
/// DIRECTIONS FOR DONUT CHART SVG CREATION ///

To draw the slices we need only three commands:
M [x] [y]: Move to the x,y position
L [x] [y]: Draw line from the previous position to the x,y position
A[x radius][y radius][x - axis - rotation][large - arc - flag][sweep - flag][x][y]: Draw an arc from the previous position to the x, y position
  
**/

/**
///TYPES///
export interface DonutSlice {
  id: number;
  percent: number;
  color: string;
  label?: string;
  onClickCb?: () => void;
}

interface DonutSliceWithCommands extends DonutSlice {
  offset: number; // This is the offset that we will use to rotate the slices
  commands: string; // This will be what goes inside the d attribute of the path tag
}

/// FUNCTION WITH TYPESCRIPT //
 export const getSlicesWithCommandsAndOffsets = (
   donutSlices: DonutSlice[],
   radius: number,
   svgSize: number,
   borderSize: number
 ): DonutSliceWithCommands[] => {
   let previousPercent = 0;
   return donutSlices.map((slice) => {
     const sliceWithCommands: DonutSliceWithCommands = {
       ...slice,
       commands: getSliceCommands(slice, radius, svgSize, borderSize),
       offset: previousPercent * 3.6 * -1,
     };
     previousPercent += slice.percent;
     return sliceWithCommands;
   });
 };
**/

export const getSlicesWithCommandsAndOffsets = (donutSlices, radius, svgSize, borderSize): DonutSliceWithCommands[] => {
  let previousPercent = 0;
  return donutSlices.map((slice) => {
    const sliceWithCommands: DonutSliceWithCommands = {
      ...slice,
      commands: getSliceCommands(slice, radius, svgSize, borderSize),
      offset: previousPercent * 3.6 * -1,
    };
    previousPercent += slice.percent;
    return sliceWithCommands;
  });
};

/* /// FUNCTION WITH TYPESCRIPT //

// getSliceCommands(
//   donutSlice: DonutSlice,
//   radius: number,
//   svgSize: number,
//   borderSize: number
// ): string {
//   const degrees = percentToDegrees(donutSlice.percent);
//   const longPathFlag = degrees > 180 ? 1 : 0;
//   const innerRadius = radius - borderSize;

//   const commands: string[] = [];
//   commands.push(`M ${svgSize / 2 + radius} ${svgSize / 2}`);
//   commands.push(
//     `A ${radius} ${radius} 0 ${longPathFlag} 0 ${getCoordFromDegrees(
//       degrees,
//       radius,
//       svgSize
//     )}`
//   );
//   commands.push(
//     `L ${getCoordFromDegrees(degrees, innerRadius, svgSize)}`
//   );
//   commands.push(
//     `A ${innerRadius} ${innerRadius} 0 ${longPathFlag} 1 ${
//       svgSize / 2 + innerRadius
//     } ${svgSize / 2}`
//   );
//   return commands.join(' ');
// }
*/

const getSliceCommands = (donutSlice, radius, svgSize, borderSize) => {
  const degrees = percentToDegrees(donutSlice.percent);
  const longPathFlag = degrees > 180 ? 1 : 0;
  const innerRadius = radius - borderSize;
  const commands = [];
  commands.push(`M ${svgSize * 20 + radius} ${svgSize * 100}`);
  commands.push(
    `A ${radius / 6} ${radius / 6} 0 ${longPathFlag} 0 ${getCoordFromDegrees(degrees / 10, radius / 6, svgSize / 3)}`
  );
  commands.push(`L ${getCoordFromDegrees(degrees, innerRadius / 6, svgSize)}`);
  commands.push(
    `A ${innerRadius / 6} ${innerRadius / 6} 0 ${longPathFlag} 1 ${svgSize / 2 + innerRadius / 6} ${svgSize / 10}`
  );
  return commands.join(" ");
};

/* /// FUNCTION WITH TYPESCRIPT //
export const getCoordFromDegrees = (angle: number, radius: number, svgSize: number): string => {
  const x = Math.cos((angle * Math.PI) / 180);
  const y = Math.sin((angle * Math.PI) / 180);
  const coordX = x * radius + svgSize / 2;
  const coordY = y * -radius + svgSize / 2;
  return [coordX, coordY].join(" ");
};
*/

const getCoordFromDegrees = (angle, radius, svgSize) => {
  const x = Math.cos((angle * Math.PI) / 180);
  const y = Math.sin((angle * Math.PI) / 180);
  const coordX = x * radius + svgSize / 4;
  const coordY = y * -radius + svgSize / 4;
  return [coordX, coordY].join(" ");
};

/* /// FUNCTION WITH TYPESCRIPT //

// export const percentToDegrees = (percent: number): number => {
//   return percent * 3.6;
// };
*/
const percentToDegrees = (percent) => {
  return percent * 100 * 3.6;
};
