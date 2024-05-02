import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { StackComponent } from '../lib/stack/stack.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

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

export const AlignHorizontal: Story = {
  args: {
    gap: '16px',
    alignItems: 'flex-end',
  }
}
