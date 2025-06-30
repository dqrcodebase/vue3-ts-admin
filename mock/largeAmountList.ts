import { defineFakeRoute } from 'vite-plugin-fake-server/client';

export default defineFakeRoute([
  {
    url: '/get-large-amount-list',
    method: 'post',
    response: () => {
      return {
        success: true,
        list: [
          {
            id: 1,
            name: '张三',
            age: 18,
            address: '北京市',
          },
        ],
      };
    },
  },
]);
