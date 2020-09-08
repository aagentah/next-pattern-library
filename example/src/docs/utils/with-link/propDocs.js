export default [
  {
    name: 'type',
    default: '',
    type: 'enum',
    description: '<code>next</code>, <code>external</code>, <code>form</code>'
  },
  {
    name: 'href',
    default: '',
    type: 'string',
    description: 'Typically the href value.'
  },
  {
    name: 'target',
    default: '',
    type: 'enum',
    description: '<code>_top</code>, <code>_blank</code>'
  },
  {
    name: 'routerLink',
    default: '',
    type: 'enum',
    description: '<code>Link</code> Component per react-router-dom, null'
  },
  {
    name: 'routerLinkProps',
    default: '',
    type: 'Object',
    description:
      "Takes routerLink properties such as next-js's <code>as</code>, null"
  }
];
