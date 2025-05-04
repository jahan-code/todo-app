

exports.routesConfig = {
  baseURL: '/api',
  app: {
    path: '/app',
    versions: {
      v1: {
        path: '/v1',
        routes: {
          profile: {
            path: '/profile',
            subPaths: {
              root: '/',
            },
          },
        },
      },
    },
  },
  auth: {
    path: '/auth',
    versions: {
      v1: {
        path: '/v1',
        routes: {
          user: {
            path: '/user',
            subPaths: {
              root: '/',
              signIn: '/signin',
              signUp: '/signup',
            },
          },
        },
      },
    },
  },
  todos: {
    path: '/todos',
    versions: {
      v1: {
        path: '/v1',
        routes: {
          todo: {
            path: '/todo',
            subPaths: {

              addTodo: '/add-todo',
              getAllTodos: '/get-all-todos',
              updateTodo: '/update-todo',
              deleteTodo: '/delete-todo',
              searchByTitle: '/search-by-title',
              markAsDone: '/mark-as-done',
              markAsNotDone: '/mark-as-not-done',
              getCompletedTodos: '/get-completed-todos',
              getIncompletedTodos: '/get-incompleted-todos',
              deleteAllTodos: '/delete-all-todos'
            }
          }
        }
      }
    }
  },
  methods: {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
  },
};
