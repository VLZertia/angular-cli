import { ng, npm } from '../../../utils/process';

export default async function () {
  // TODO(architect): this test fails with weird fsevents install errors.
  // Investigate and re-enable afterwards.
  return;

  await npm('install', 'typescript@2.4');
  await ng('build');
  await ng('build', '--optimization-level', '1');
  await npm('install', 'typescript@2.6');
}
