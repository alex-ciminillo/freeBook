json.key_format! camelize: :lower
@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :user_id, :post_id, :created_at, :updated_at
    end
end