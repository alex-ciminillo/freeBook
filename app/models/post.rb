class Post < ApplicationRecord

    validates :body, :author_id, presence: true

    has_many :likes,
        dependent: :destroy
    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment

    has_one_attached :photo

end
