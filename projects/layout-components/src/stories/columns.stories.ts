import {
  argsToTemplate,
  moduleMetadata,
  type Meta,
  type StoryObj,
} from '@storybook/angular';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { ColumnsComponent } from '../lib/columns/columns.component';
import { ColumnComponent } from '../lib/column/column.component';
import { StackComponent } from '../public-api';

/**
 * The Columns component creates horizontal layouts that don't wrap. Use the Column component to determine the column size. If not specified, Column fits its content.
 */
const meta: Meta<typeof ColumnsComponent> = {
  title: 'Components/Columns',
  component: ColumnsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [PlaceholderComponent, ColumnComponent, StackComponent],
    }),
  ],
  render: (args) => ({
    props: args,
    template: `<columns ${argsToTemplate(args)}>
      <column width="240px">
        <placeholder />
      </column>
      <column>
        <placeholder />
      </column>
      <column flexGrow="1">
        <placeholder />
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

export const Fractions: Story = {
  args: {
    gap: '16px',
  },
  render: (args) => ({
    props: args,
    template: `<stack gap="32px">
      <columns ${argsToTemplate(args)}>
        <column width="2/5">
          <placeholder>2/5</placeholder>
        </column>
        <column width="100%">
          <placeholder>100%</placeholder>
        </column>
      </columns>
      <columns ${argsToTemplate(args)}>
        <column width="3/5">
          <placeholder>3/5</placeholder>
        </column>
        <column width="100%">
          <placeholder>100%</placeholder>
        </column>
      </columns>
      <columns ${argsToTemplate(args)}>
        <column width="100%">
          <placeholder>100%</placeholder>
        </column>
        <column width="2/3">
          <placeholder>2/3</placeholder>
        </column>
      </columns>
      <columns ${argsToTemplate(args)}>
        <column width="1/5">
          <placeholder>1/5</placeholder>
        </column>
        <column width="100%">
          <placeholder>100%</placeholder>
        </column>
        <column width="1/5">
          <placeholder>1/5</placeholder>
        </column>
      </columns>
      <columns ${argsToTemplate(args)}>
        <column width="100%">
          <placeholder>100%</placeholder>
        </column>
        <column width="1/6">
          <placeholder>1/6</placeholder>
        </column>
        <column width="100%">
          <placeholder>100%</placeholder>
        </column>
      </columns>
    </stack>`,
  }),
};
