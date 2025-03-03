import { createRoute } from 'honox/factory'

export default createRoute(async (c) => {
  const id = c.req.query('id')
  await c.env.DB.prepare('DELETE FROM shops WHERE id = ?').bind(id).run()
  return c.redirect('/')
})
