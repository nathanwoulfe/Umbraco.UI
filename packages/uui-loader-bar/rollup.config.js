import { UUIProdConfig } from '../rollup-package.config';

export default UUIProdConfig({
  entryPoints: ['index', 'uui-loader-bar.element'],
  bundles: ['index'],
});
