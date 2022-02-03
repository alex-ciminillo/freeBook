json.key_format! camelize: :lower
json.extract! @post, :id, :author_id, :body, :created_at, :updated_at
json.extract! @post.author, :first_name, :last_name

if @post.photo.attached?
    json.photoUrl url_for(@post.photo)
end