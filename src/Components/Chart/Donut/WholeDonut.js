import React from 'react';

// export interface DonutSlice {
//   id: number;
//   percent: number;
//   color: string;
//   label?: string;
//   onClickCb?: () => void;
// }

// interface DonutSliceWithCommands extends DonutSlice {
//   offset: number;
//   commands: string;
// }

class CalculusHelper {
  getSlicesWithCommandsAndOffsets(
    donutSlices,
    radius,
    svgSize,
    borderSize
  ) {
    let previousPercent = 0;
    return donutSlices.map((slice) => {
      const sliceWithCommands = {
        ...slice,
        commands: this.getSliceCommands(slice, radius, svgSize, borderSize),
        offset: previousPercent * 3.6 * -1,
      };
      previousPercent += slice.percent;
      return sliceWithCommands;
    });
  }

  getSliceCommands(
    donutSlice,
    radius,
    svgSize,
    borderSize
  ) {
    const degrees = this.percentToDegrees(donutSlice.percent);
    const longPathFlag = degrees > 180 ? 1 : 0;
    const innerRadius = radius - borderSize;

    const commands = [];
    commands.push(`M ${svgSize / 2 + radius} ${svgSize / 2}`);
    commands.push(
      `A ${radius} ${radius} 0 ${longPathFlag} 0 ${this.getCoordFromDegrees(
        degrees,
        radius,
        svgSize
      )}`
    );
    commands.push(
      `L ${this.getCoordFromDegrees(degrees, innerRadius, svgSize)}`
    );
    commands.push(
      `A ${innerRadius} ${innerRadius} 0 ${longPathFlag} 1 ${
        svgSize / 2 + innerRadius
      } ${svgSize / 2}`
    );
    return commands.join(' ');
  }

  getCoordFromDegrees(angle, radius, svgSize) {
    const x = Math.cos((angle * Math.PI) / 180);
    const y = Math.sin((angle * Math.PI) / 180);
    const coordX = x * radius + svgSize / 2;
    const coordY = y * -radius + svgSize / 2;
    return [coordX, coordY].join(' ');
  }

  percentToDegrees(percent) {
    return percent * 3.6;
  }
}

export default ({
  data,
  radius,
  viewBox,
  borderSize,
    // clickCb,
    // set, 
//   selectedSlice
}) => {
  const helper = new CalculusHelper();
  return (
    data && (
      <svg viewBox={'0 0 ' + viewBox + ' ' + viewBox}>
        {helper
          .getSlicesWithCommandsAndOffsets(data, radius, viewBox, borderSize)
                  .map((slice, i) => {
                    //   console.log({slice})
                      return (
                          <path
                              key={i}
                              onClick={() => console.log(slice)}
                              fill={slice.color}
                              d={slice.commands}
                              transform={'rotate(' + slice.offset + ')'}
                          >
                              <title>{slice.label}</title>
                          </path>
                      )
                  })}
      </svg>
    )
  );
};
