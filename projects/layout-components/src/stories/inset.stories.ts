import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { InsetComponent } from '../lib/inset/inset.component';

/**
 * The Inset component creates a container with padding.
 */
const meta: Meta<typeof InsetComponent> = {
  title: 'Components/Inset',
  component: InsetComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<inset ${argsToTemplate(args)}>
        <placeholder></placeholder>
      </inset>`,
  }),
};
export default meta;

type Story = StoryObj<InsetComponent>;

export const Basic: Story = {
  args: {
    padding: '40px',
  },
};
