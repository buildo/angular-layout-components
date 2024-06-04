export type SpacingScale =
  | '0'
  | '4px'
  | '8px'
  | '12px'
  | '16px'
  | '24px'
  | '32px'
  | '40px'
  | '64px'
  | '80px'
  | '120px'
  | '160px';

export type Gap = SpacingScale;

export type Padding =
  | SpacingScale
  | `${SpacingScale} ${SpacingScale}`
  | `${SpacingScale} ${SpacingScale} ${SpacingScale}`
  | `${SpacingScale} ${SpacingScale} ${SpacingScale} ${SpacingScale}`;

export type AlignItems =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'stretch'
  | 'baseline';

export type JustifyContent =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

export type ColumnFractionWidth =
  | '1/2'
  | '1/3'
  | '2/3'
  | '1/4'
  | '2/4'
  | '3/4'
  | '1/5'
  | '2/5'
  | '3/5'
  | '4/5'
  | '1/6'
  | '2/6'
  | '3/6'
  | '4/6'
  | '5/6'
  | '1/7'
  | '2/7'
  | '3/7'
  | '4/7'
  | '5/7'
  | '6/7'
  | '1/8'
  | '2/8'
  | '3/8'
  | '4/8'
  | '5/8'
  | '6/8'
  | '7/8'
  | '1/10'
  | '2/10'
  | '3/10'
  | '4/10'
  | '5/10'
  | '6/10'
  | '7/10'
  | '8/10'
  | '9/10'
  | '1/12'
  | '2/12'
  | '3/12'
  | '4/12'
  | '5/12'
  | '6/12'
  | '7/12'
  | '8/12'
  | '9/12'
  | '10/12'
  | '11/12';
