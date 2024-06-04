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
 *
 * If you want to create a sidebar, Stack is the most suitable component. Set <code>[height]="100%"</code> on Stack and do the same with all its parents. If you want a child of the Stack to grow to cover a specific portion of the available space, set a <code>flex-grow</code> on it.
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
    height: '100%',
  },
};
