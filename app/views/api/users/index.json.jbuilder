json.key_format! camelize: :lower
@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :first_name, :last_name, :birthday
        json.posts user.posts, :id, :body, :author_id, :created_at, :updated_at
        json.likes user.likes, :id, :post_id, :user_id 
        json.friend_requests user.friend_requests, :id, :user_id, :friend_id, :status
        json.friends_requested user.friends_requested, :id, :user_id, :friend_id, :status
        if user.profpic.attached?
            json.photoUrl url_for(user.profpic)
        end

        if user.coverpic.attached?
            json.coverPhotoUrl url_for(user.coverpic)
        end
    end
end