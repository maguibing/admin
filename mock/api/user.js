import { resolveToken } from '../utils'

const users = {
  admin: {
    id: 1,
    name: 'xxx(admin)',
    avatar: 'https://img2.baidu.com/it/u=2869446678,119256044&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1670691600&t=262e23b605abe27fd674e7e1c3831f0a',
    email: 'Ronnie@123.com',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: 'xxx(editor)',
    avatar: 'https://img2.baidu.com/it/u=2335765715,1630155430&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1670691600&t=f3ba09e7d0b35150a25bd71012ed3035',
    email: 'Ronnie@123.com',
    role: ['editor'],
  },
  guest: {
    id: 3,
    name: '访客(guest)',
    avatar: 'https://img0.baidu.com/it/u=3255539467,385095039&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1670691600&t=ef8016879add6b624966e66ce7807df4',
    role: [],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
          ...(users[token] || users.guest),
        },
      }
    },
  },
]
