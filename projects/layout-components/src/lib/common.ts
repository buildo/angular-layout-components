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
