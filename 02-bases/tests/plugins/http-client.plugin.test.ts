import { httpClientPlugin } from './../../src/plugins/http-client.plugin';

describe('plugins/http-client.plugin', () => {

  test('httpClientePlugin.get() should return a string', async () => {

    const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

    expect(data).toEqual({
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    })
  })

  test('httpClientPlugin should have POST, PUT and DELETE methods',()=>{

    // console.log(typeof httpClientPlugin.put)
    expect(typeof httpClientPlugin.post).toBe('function');
    expect(typeof httpClientPlugin.put).toBe('function');
    expect(typeof httpClientPlugin.delete).toBe('function');

  })

})
