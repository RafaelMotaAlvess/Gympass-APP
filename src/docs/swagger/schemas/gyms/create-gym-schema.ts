export const createGymSchema = {
  schema: {
    description: 'Register a new gym in database',
    tags: ['gyms routes'],
    summary: 'Register a new gym ',
    
    body: {
      type: 'object',
      properties: {
        title: { type: 'string'},
        description: { type: 'string'},
        phone: { type: 'string'},
        latitude: { type: 'number'},
        longitude: { type: 'number'},
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