class User < ApplicationRecord

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
    attr_reader :password

    after_initialize :ensure_session_token

    has_one_attached :profpic
    has_one_attached :coverpic

    has_many :friends_requested,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Friend
    has_many :friend_requests,
        primary_key: :id,
        foreign_key: :friend_id,
        class_name: :Friend
    has_many :likes,
        dependent: :destroy
    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment
    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    def self.name_search(query)
        where("LOWER(first_name) || ' ' || LOWER(last_name) like LOWER(:s)", :s => "%#{query}%")
    end

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end


end
