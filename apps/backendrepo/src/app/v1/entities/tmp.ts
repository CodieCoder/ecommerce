import { join } from 'path';
import { fileURLToPath } from 'url';

export const tmp = () => {
  const tmp = fileURLToPath(
    'file:///home/dev/Desktop/Academy/JS/commerce/ecommerce/dist/apps/backendrepo/product.entity.ts'
  );
  const dir = join(__dirname);
  console.log('Testee entities : repo', tmp);
};
