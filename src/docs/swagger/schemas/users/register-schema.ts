export const registerSchema = {
  schema: {
    description: 'Register a new user in database',
    tags: ['user'],
    summary: 'Register a new user ',
    
    body: {
      type: 'object',
      properties: {
        name: { type: 'string'},
        email: { type: 'string'},
        password: { type: 'string'}
      },
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
      },
      400: {
        description: 'Validation error',
        type: 'object',
        properties: {
          message: { type: 'string', example: "Validation error" },
          issues: { type: 'string', example: "error" }
        }
      },
      409: {
        description: 'User already exists',
        type: 'object',
        properties: {
          message: { type: 'string', example: "E-mail already exists" }
        }
      },
      500: {
        description: 'Default response',
        type: 'object',
        properties: {
          message: { type: 'string', example: "Internal server error." }
        }
      }
    },
    
  }
}