export default {
  type: 'object',
  properties: {
    name: {
      type: 'string'
    },
    email: {
      type: 'string',
      format: 'email'
    },
    paymentInfo: {
      type: 'object',
      properties: {
        useEft: {
          type: 'string'
        },
        useCreditCard: {
          type: 'string'
        },
        usePayPal: {
          type: 'string'
        }
      },
      dependencies: {
        useEft: {
          type: 'object',
          properties: {
            routingNumber: {
              type: 'string'
            },
            accountNumber: {
              type: 'string'
            }
          },
          required: ['routingNumber', 'accountNumber']
        },
        useCreditCard: {
          type: 'object',
          properties: {
            creditCardNumber: {
              type: 'string'
            },
            ccv: {
              type: 'string'
            }
          },
          required: ['creditCardNumber', 'ccv']
        },
        usePayPal: {
          type: 'object',
          properties: {
            payPalUsername: {
              type: 'string'
            },
            payPalPassword: {
              type: 'string'
            }
          },
          required: ['payPalUsername', 'payPalPassword']
        }
      }
    }
  }
}
