import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TilesComponent } from '../lib/tiles/tiles.component';

/**
 * The Tiles component is used to create grid-like layouts.
 */
const meta: Meta<typeof TilesComponent> = {
  title: 'Components/Tiles',
  component: TilesComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<tiles ${argsToTemplate(args)}>
        <placeholder></placeholder>
        <placeholder></placeholder>
        <placeholder></placeholder>
        <placeholder></placeholder>
        <placeholder></placeholder>
        <placeholder></placeholder>
        <placeholder></placeholder>
        <placeholder></placeholder>
      </tiles>`,
  }),
};
export default meta;

type Story = StoryObj<TilesComponent>;

export const Basic: Story = {
  args: {
    gap: '16px',
  },
};
