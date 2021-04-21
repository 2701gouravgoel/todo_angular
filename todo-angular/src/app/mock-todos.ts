import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Todo} from './todo';


export class UserData implements InMemoryDbService {
  createDb(){
    const users: Todo[]=[
      { id: 1, title: 't1', description: 'xyz',},
      { id: 2, title: 't2', description: 'xyz1',},
      { id: 3, title: 't3', description: 'xyz2',},

    ];
    return {users};
  }
}

