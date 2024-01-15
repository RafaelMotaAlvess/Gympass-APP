export const validateCheckInSchema = {
  schema: {
    description: 'Validate a check-in',
    tags: ['checkins routes'],
    summary: 'Validate a check-in',

    response: {
      204: {
        description: 'Successful response',
        type: 'object',
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