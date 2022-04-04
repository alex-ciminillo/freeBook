# Freebook

Freebook is a Facebook clone which allows you to interact with your friends. You can visit friends' profiles, add posts to the main newsfeed, your profile, or your friend's, and comment on posts. You can additionally upload photos to posts, and change your profile and background photos. Being a key social media feature, you can of course send friend requests and accept friend requests. 

[Live Demo](https://free--book.herokuapp.com/)

# Features

## Account Creation and Authentication

In Freebook, I used database and model validations to make sure that my database does not get currupted. For users safety, a password digest is used to authenticate their session later and their password is not saved anywhere in the database. Facebook has an amazing user experience for signing up, so I did my best to make my signup form just as good. 

![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/accountauth.gif)

```ruby
PASSWORD_REQUIREMENTS = /\A 
        (?=.{6,}) # At least 6 characters
        # (?=.*\d) # At least one number
        # (?=.*[a-z]) # At least one lowercase character
        # (?=.*[A-Z]) # At least one uppercase character
        # (?=.*[[:^alnum:]]) #At least one symbol
    /x
    # EMAIL_REQUIREMENTS = /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/
    validates :username, :password_digest, :session_token, :first_name, :last_name, presence: true
    validates :username, uniqueness: true
    validates :password, format: PASSWORD_REQUIREMENTS, allow_nil: true
    validates :birthday, :gender, presence: true
```

```ruby
create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "birthday", null: false
    t.string "gender", null: false
    t.index ["first_name"], name: "index_users_on_first_name"
    t.index ["last_name"], name: "index_users_on_last_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end
```


## Post & Comment
Posting and commenting are a necesity in social media. You can create a post with a picture, like other user's posts and click on any names on posts or comments to be redirected to their pages.

![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/posting.gif)
![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/commenting.gif)

```jsx
handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        this.setState({ photoFile: file, photoUrl: fileReader.result })
    };

    if (file) {
        fileReader.readAsDataURL(file);
    }
}

handleSubmit(e) {
    e.preventDefault();
        
    const formData = new FormData();
    formData.append('post[author_id]', this.props.currentUser.id);
    formData.append('post[body]', this.state.body);

    if (this.state.photoFile) {
        formData.append('post[photo]', this.state.photoFile);
    }

    this.props.createPost(formData);
    this.props.hideModal();
}
```

```jsx
handleComments(e) {
    e.preventDefault()
    const formData = new FormData();
    formData.append('comment[author_id]', this.props.currentUser.id);
    formData.append('comment[body]', this.state.body);
    formData.append('comment[post_id]', e.currentTarget.id);
        
    this.props.createComment(formData);
    e.currentTarget.children[0].value = ''
}
```

## Friends

You can request the friendship of other users! Or you can accept their requests! 

![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/addfriend.gif)
![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/acceptfriend.gif)

```jsx
<div onClick={()=>this.props.updateFriend({friend: { id: request.id, status: 'accepted' }})} >
    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
        Accept Friend
</div>

<div onClick={()=>this.makeFriendship()} >
    <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/33EToHSZ94f.png" alt="" height="16" width="16"/>
        Add Friend
</div>

makeFriendship() {
    let friendship = {friend: {user_id: this.props.currentUser.id, friend_id: this.userId, status: 'pending'}}
    this.props.createFriend(friendship)
}
```


## Modals 

Modals are an efficient and stylish way to get user input without changing the page! Modals are used to create posts and show the sign up form. 

![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/accountauth.gif)
![](https://github.com/alex-ciminillo/freeBook/blob/main/app/assets/images/posting.gif)

```jsx
writePostModal() {
    this.props.showModal({modal: 'writePost'})
}
```
```jsx
export default class Modal extends React.Component {
    constructor(props) {
        super(props)
       
    }

    renderContainer() {
        if (!this.props.info) return
        switch (this.props.info.modal) {
            case "signup":
                return <SignupFormContainer />
            case "profilePic":
                 return <ChoosePicsContainer info={this.props.info} />
            case "writePost":
                return <WritePost createPost={this.props.createPost} hideModal={this.props.hideModal} info={this.props.info} currentUser={this.props.currentUser} />      
            case "comingSoon":
                return <ComingSoon hideModal={this.props.hideModal} info={this.props.info} currentUser={this.props.currentUser} />      
            default:
                return null;
        }
    }


    render() {
        return ( 
            <div>
                {this.renderContainer()}
            </div>
        )
    }

}
```

# Technologies Used

* Javascript
* Node.js
* React
* Redux
* PostgreSQL
* AWS
* HTML
* CSS
* Ruby on Rails
