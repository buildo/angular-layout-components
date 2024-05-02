import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { InlineComponent } from '../lib/inline/inline.component';

/**
 * The Inline component is used to create horizontally flowing layouts, which wrap across multiple lines if necessary.
 */
const meta: Meta<typeof InlineComponent> = {
  title: 'Components/Inline',
  component: InlineComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<inline ${argsToTemplate(args)}>
      <placeholder width="120px"></placeholder>
      <placeholder width="240px"></placeholder>
      <placeholder width="160px"></placeholder>
      <placeholder width="320px"></placeholder>
      <placeholder width="120px"></placeholder>
    </inline>`,
  }),
};
export default meta;

type Story = StoryObj<InlineComponent>;

export const Basic: Story = {
  args: {
    gap: '16px',
  },
};
