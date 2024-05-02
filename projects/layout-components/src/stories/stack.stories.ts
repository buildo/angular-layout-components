import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { StackComponent } from '../lib/stack/stack.component';

/**
 * The Stack component is used to arrange its children vertically.
 */
const meta: Meta<typeof StackComponent> = {
  title: 'Components/Stack',
  component: StackComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<stack ${argsToTemplate(args)}>
      <placeholder></placeholder>
      <placeholder></placeholder>
      <placeholder></placeholder>
    </stack>`,
  }),
};
export default meta;

type Story = StoryObj<StackComponent>;

export const Basic: Story = {
  args: {
    gap: '16px',
  },
};
