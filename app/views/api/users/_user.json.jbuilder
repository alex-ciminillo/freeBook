json.key_format! camelize: :lower
json.extract! user, :id, :username, :first_name, :last_name, :gender, :birthday

# json.photoUrl url_for(user.profpic)
if user.profpic.attached?
    # json.profpic rails_blob_url(user.profpic)
    # json.profpic user.profpic.service_url
    json.photoUrl url_for(user.profpic)
end

if user.coverpic.attached?
    # json.profpic rails_blob_url(user.profpic)
    # json.profpic user.profpic.service_url
    json.coverPhotoUrl url_for(user.coverpic)
end