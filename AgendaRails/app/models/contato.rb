class Contato < ApplicationRecord
  validates :nome, presence: true, length: {minimum: 5}
  validates :endereco, presence: true
  validates :telefone, length: {minumum: 10, maximum: 11}
end
