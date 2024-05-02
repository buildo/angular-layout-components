import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ColumnsComponent } from '../lib/columns/columns.component';
import { ColumnComponent } from '../lib/column/column.component';

/**
 * The Columns component creates horizontal layouts that don't wrap. Use the Column component to determine the column size. If not specified, Column fits its content.
 */
const meta: Meta<typeof ColumnsComponent> = {
  title: 'Components/Columns',
  component: ColumnsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent, ColumnComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<columns ${argsToTemplate(args)}>
      <column width="240px">
        <placeholder></placeholder>
      </column>
      <column>
        <placeholder></placeholder>
      </column>
      <column flexGrow="1">
        <placeholder></placeholder>
      </column>
    </columns>`,
  }),
};
export default meta;

type Story = StoryObj<ColumnsComponent>;

export const Basic: Story = {
  args: {
    gap: '16px',
  },
};
