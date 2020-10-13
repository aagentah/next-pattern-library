export default [
  {
    name: 'text',
    default: '',
    type: 'string',
    description: ''
  },
  {
    name: 'color',
    default: '',
    type: 'string',
    description: ''
  },
  {
    name: 'size',
    default: '',
    type: 'enum',
    description:
      '<code>small</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>'
  },
  {
    name: 'truncate',
    default: '',
    type: 'integer',
    description: ''
  },
  {
    name: 'skeleton',
    default: '',
    type: 'bool',
    description: 'Adds a skeleton overlay to the element.'
  }
];
