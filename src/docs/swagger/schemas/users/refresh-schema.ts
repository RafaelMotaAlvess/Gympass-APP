export const refreshSchema = {
  schema: {
    description: 'Refresh a user token',
    tags: ['user'],
    summary: 'Refresh a user token',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          token: { type: 'string'},
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