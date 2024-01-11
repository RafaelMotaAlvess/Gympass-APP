export const checkInsMetricsSchema = {
  schema: {
    description: 'Metrics of check-ins in database',
    tags: ['checkins routes'],
    summary: 'Number of checkins from specific user',
    response: {
      200: {
        description: 'Successful response',
        type: 'object',
        properties: {
          checkInsCount: { type: 'number', example: 3},
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