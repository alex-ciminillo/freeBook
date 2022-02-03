json.key_format! camelize: :lower
@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :author_id, :body, :created_at, :updated_at
        json.likes post.likes, :id, :user_id, :post_id
        json.extract! post.author, :first_name, :last_name
        if post.photo.attached?
            json.photoUrl url_for(post.photo)
        end
    end
    
end