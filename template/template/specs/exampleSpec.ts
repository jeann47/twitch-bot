import { TestScope } from 'cavy'

export default function (spec: TestScope) {
  spec.describe('React Landing', function () {
    spec.it('exists', async function () {
      await spec.exists('Container')
      await spec.notExists('Box')
      await spec.press('Button')
      await spec.exists('Box')
    })
  })
}
