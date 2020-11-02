const users = [
  { id: 1, name: 'Larissa Dantas', email: 'contato@provedor.com', stack: 'frontend' },
]

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0]
  },
  Mutation: {
    createUser: () => users[0]
  }
}