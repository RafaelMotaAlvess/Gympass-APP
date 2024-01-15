export const searchGymSchema = {
  schema: {
    description: 'Search gyms in database',
    tags: ['gyms routes'],
    summary: 'Search gyms',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          gyms: {
            type: 'array', 
            items: {
              type: 'object',
              properties: {
                id: {type: 'string'},
                title: {type: 'string'},
                latitude: {type: 'number'},
                longitude: {type: 'number'},
                created_at: {type: 'string', format: 'date-time'},
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