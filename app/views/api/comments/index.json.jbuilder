json.key_format! camelize: :lower
@comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :author_id, :body, :post_id, :created_at, :updated_at
        json.extract! comment.author, :first_name, :last_name
    end
end