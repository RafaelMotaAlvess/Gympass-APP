export const authenticateSchema = {
  schema: {
    description: 'Authenticate a user with refreshToken',
    tags: ['user routes'],
    summary: 'Authenticate a user ',
    body: {
      type: 'object',
      properties: {
        email: { type: 'string'},
        password: { type: 'string'}
      },
    },
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          token: { type: 'string'},
        }
      },
      400: {
        description: 'Invalid credentials',
        type: 'object',
        properties: {
          message: { type: 'string', example: "Invalid credentials" }
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