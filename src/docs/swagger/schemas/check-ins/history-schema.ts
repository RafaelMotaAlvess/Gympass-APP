export const searchCheckinsHistory = {
  schema: {
    description: 'Search check-ins in database',
    tags: ['checkins routes'],
    summary: 'Search check-ins history',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          checkIns: {
            type: 'array', 
            items: {
              type: 'object',
              properties: {
                id: { type: 'string', example: "uuid" },
                gym_id: { type: 'string', example: "uuid" },
                user_id: { type: 'string', example: "uuid" },
                createdAt: { type: 'string', example: "date" },
                validatedAt: { type: 'string', example: "date" },
              }
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