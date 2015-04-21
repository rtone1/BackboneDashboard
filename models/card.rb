class Card < ActiveRecord::Base
    def to_s
      self.to_s "...have many cards"
    end
end
