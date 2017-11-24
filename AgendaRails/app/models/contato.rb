class Contato < ApplicationRecord
  validates :nome, presence: true, length: {minimum: 5}
  validates :endereco, presence: true
  validates :telefone, length: {minumum: 10, maximum: 11}
  validates :email, format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i, on: :create }
end
