import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ContentBlockComponent } from '../lib/content-block/content-block.component';

/**
 * The Content Block component limits the maximum width of their children.
 */
const meta: Meta<typeof ContentBlockComponent> = {
  title: 'Components/Content Block',
  component: ContentBlockComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<content-block ${argsToTemplate(args)}>
      <placeholder></placeholder>
    </content-block>`,
  }),
};
export default meta;

type Story = StoryObj<ContentBlockComponent>;

export const Basic: Story = {
  args: {},
};
