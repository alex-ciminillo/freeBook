# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

25.times do 

    first = Faker::Name.male_first_name
    last = Faker::Name.last_name
    user = User.create([{ first_name: first, last_name: last, username: "#{first}#{last}@gmail.com", password: 'Password1!', birthday: Faker::Date.birthday(min_age: 18, max_age: 65), gender: 'male' }])

end

25.times do 

    first = Faker::Name.female_first_name
    last = Faker::Name.last_name
    user = User.create([{ first_name: first, last_name: last, username: "#{first}#{last}@gmail.com", password: 'Password1!', birthday: Faker::Date.birthday(min_age: 18, max_age: 65), gender: 'female' }])

end

User.create([{ first_name: 'Alexzander', last_name: 'Ciminillo', username: 'ciminilloa@findlay.edu', password: 'Password1!', birthday: Faker::Date.birthday(min_age: 18, max_age: 65), gender: 'male' }])


25.times do 
    author = rand(52)
    post = Post.create([{body: Faker::Quote.famous_last_words, author_id: author}])
end

25.times do 
    author = rand(52)
    post = Post.create([{body: Faker::Quote.yoda, author_id: author}])
end

25.times do 
    author = rand(52)
    post = Post.create([{body: Faker::Quote.most_interesting_man_in_the_world, author_id: author}])
end

25.times do 
    author = rand(52)
    post = Post.create([{body: Faker::Quote.matz, author_id: author}])
end

25.times do 
    author = rand(52)
    post = Post.create([{body: Faker::Quote.jack_handey, author_id: author}])
end

50.times do 
    author = rand(52)
    post = rand(125)
    comment = Comment.create([{body: Faker::Quote.most_interesting_man_in_the_world, author_id: author, post_id: post}])
end

50.times do 
    author = rand(52)
    post = rand(125)
    comment = Comment.create([{body: Faker::Quote.yoda, author_id: author, post_id: post}])
end

50.times do 
    author = rand(52)
    post = rand(125)
    comment = Comment.create([{body: Faker::Quote.robin, author_id: author, post_id: post}])
end

50.times do 
    author = rand(52)
    post = rand(125)
    comment = Comment.create([{body: Faker::Quote.singular_siegler, author_id: author, post_id: post}])
end


1000.times do 
    user = rand(52)
    post = rand(125)
    like = Like.create([{user_id: user, post_id: post}])
end


1000.times do 
    user1 = rand(52)
    user2 = rand(52)
    friend = Friend.create([{user_id: user1, friend_id: user2, status: 'accepted'}])
end

1000.times do 
    user1 = rand(52)
    user2 = rand(52)
    friend = Friend.create([{user_id: user1, friend_id: user2, status: 'pending'}])
end