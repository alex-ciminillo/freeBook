class User < ApplicationRecord

    PASSWORD_REQUIREMENTS = /\A 
        (?=.{8,}) # At least 8 characters
        (?=.*\d) # At least one number
        (?=.*[a-z]) # At least one lowercase character
        (?=.*[A-Z]) # At least one uppercase character
        (?=.*[[:^alnum:]]) #At least one symbol
    /x

    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, format: PASSWORD_REQUIREMENTS, allow_nil: true
    attr_reader :password

    after_initialize :ensure_session_token

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