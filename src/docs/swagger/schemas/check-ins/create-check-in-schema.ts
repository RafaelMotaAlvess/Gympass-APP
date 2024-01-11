export const createCheckInSchema = {
  schema: {
    description: 'Register a check-in in database',
    tags: ['checkins routes'],
    summary: 'Register a check-in',
    
    body: {
      type: 'object',
      properties: {
        gymId: { type: 'string'},
      },
    },
    response: {
      201: {
        description: 'Successful response',
        type: 'object',
        properties: {
          checkIn: {
            type: 'object',
            properties: {
              gymId: { type: 'string', example: "uuid" },
              userId: { type: 'string', example: "uuid" },
              latitude: { type: 'number', example: "number" },
              longitude: { type: 'number', example: "number" },
            }
          }
        }
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