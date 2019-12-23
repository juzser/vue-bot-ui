export const fakeMessage = [
  {
    'type': 'text',
    'text': 'Hello. Have a nice day!',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': 'How can we help you today?',
    'data': [
      {
        'title': 'Search Suport Articles',
        'value': 'search',
        'action': 'postback'
      },
      {
        'title': 'Submit Support Ticket',
        'value': 'submit_ticket',
        'action': 'postback'
      }
    ],
    'disableInput': false
  },
  {
    'type': 'text',
    'text': 'Please type your problem',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': 'Here are the results from our knowledgebase.',
    'data': [
      {
        'title': 'How to create a menu',
        'value': 'https://google.com',
        'action': 'url'
      },
      {
        'title': 'How to add a submenu to a menu',
        'value': 'https://google.com',
        'action': 'url'
      },
      {
        'title': "Not what I'm looking for",
        'value': 'result_not_match',
        'action': 'postback'
      }
    ],
    'disableInput': false
  },
  {
    'type': 'text',
    'text': 'Sorry to hear that. Please type your problem and we will create a ticket for you.',
    'disableInput': false
  },
  {
    'type': 'button',
    'text': 'All done! Your support ticket is created.',
    'data': [
      {
        'title': 'View ticket',
        'value': 'https://google.com',
        'action': 'url'
      }
    ],
    'disableInput': false
  }
]
