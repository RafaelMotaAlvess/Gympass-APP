export const profileSchema = {
  schema: {
    description: 'Get a existing user profile',
    tags: ['user'],
    summary: 'Get a user profile',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          user: {
            type: 'object', 
            properties: {
              id: {type: 'string'},
              name: {type: 'string'},
              email: {type: 'string'},
              created_at: {type: 'string', format: 'date-time'},
              role: {type: 'string', enum: ['ADMIN', 'MEMBER']},
            }
          }
        }
      },
      401: {
        description: 'User is not unauthorized',
        type: 'object',
        properties: {
          message: { type: 'string', example: "Unauthorized" }
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